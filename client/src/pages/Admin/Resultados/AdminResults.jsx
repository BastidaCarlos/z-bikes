import { useEffect, useState } from "react"
import { uploadResults } from "../../../services/resultsAdminService"
import { getResults } from "../../../services/resultsServices"
import FiltersResults from "../../Resultados/FiltersResults"
import TableResults from "../../Resultados/TableResults"
import { 
    Alert,
    Box,
    Button,
    ButtonGroup,
    EmptyState,
    FileUpload,
    HStack,
    Icon,
    IconButton,
    Pagination,
    VStack,
} from "@chakra-ui/react"
import { LuUpload, LuChevronLeft, LuChevronRight } from "react-icons/lu"
import { GrDocumentMissing } from "react-icons/gr"
import { toaster } from "../../../components/ui/toaster"

function AdminResults() {
    const [ resultados, setResultados ] = useState([]); 
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ totalPages, setTotalPages ] = useState(0);
    const [ filtros, setFiltros ] = useState({
        route: '',
        q: '',
        page: 1,
        limit: 20 
    })
    const [ uploadFile, setUploadFile ] = useState(null);
    const [ isUploading, setIsUploading ] = useState(false);

    const handleSubmitFile = async () => {
        console.log('Subiendo archivo')

        if (!uploadFile) {
            setError('Por favor selecciona un archivo')
            return;
        }

        setIsUploading(true)
        setError(null)

        try {
            await uploadResults(uploadFile);
            toaster.create({
                title: "¡Éxito!",
                description: 'El archivo se subio correctamente',
                type: 'success' 
            })

            const dataResults = await getResults(filtros);
            setResultados(dataResults?.results ?? [])
            setTotalPages(dataResults?.totalPages ?? 0)

            setUploadFile(null)
        } catch (error) {
            console.log(error)
            toaster.create({
                title: "Error",
                description: error.message || "Ocurrio un error desconocido",
                type: 'error'
            })
        } finally {
            setIsUploading(false)
        }
    }

    useEffect(() => {
        const initialData = async () => {
            setIsLoading(true);
            try {
                const dataResults = await getResults(filtros)
                setResultados(dataResults?.results ?? [])
                setTotalPages(dataResults?.totalPages ?? 0)
            } catch (error) {
                toaster.create({
                    title: "Error",
                    description: "No se pudieron cargar los datos",
                    type: 'error'
                })
            } finally {
                setIsLoading(false)
            }
        }

        initialData();
    }, [filtros])

    const activeFilters = filtros.q !== '' || filtros.route !== ""

    return (
        <Box w="100%">
            <VStack
                w="100%"
                maxW={{ base: "100%", lg: '900px', xl: "1200px"}}
                gap={4}
                mx="auto"
                p={4}
            >
                <FileUpload.Root 
                    maxFiles={1} 
                    alignItems="stretch" 
                    maxW="2xl"
                    cursor='pointer'
                    boxShadow="2xl"
                    borderRadius="2xl"
                    onFileChange={(details) => {
                        const selectedFile = details.acceptedFiles[0];
                        setUploadFile(selectedFile)
                    }}
                >
                    <FileUpload.HiddenInput />
                    <FileUpload.Dropzone>
                        <Icon size="md" color="fg.muted">
                            <LuUpload />
                        </Icon>
                        <FileUpload.DropzoneContent>
                            <Box>Arrastra para subir los archivo o da click</Box>
                            <Box color="fg.muted">.csv</Box>
                        </FileUpload.DropzoneContent>
                    </FileUpload.Dropzone>
                    {uploadFile && (
                        <FileUpload.ItemGroup>
                            <FileUpload.Context>
                                {(fileUpload) => {
                                    return fileUpload.acceptedFiles.map((file) => (
                                        <FileUpload.Item key={file.name} file={file}>
                                            <FileUpload.ItemPreview />
                                            <FileUpload.ItemName />
                                            <FileUpload.ItemSizeText />
                                            <FileUpload.ItemDeleteTrigger />
                                        </FileUpload.Item>
                                    ))
                                }}
                            </FileUpload.Context>
                        </FileUpload.ItemGroup>
                    )}
                </FileUpload.Root>
                <HStack>
                    <Button
                        bg="laguna"
                        color="white"
                        onClick={() => handleSubmitFile()}
                        disabled={isUploading}
                        _hover={{ bg: "laguna.600", transform: 'translateY(-2px)'}}
                    >
                        Subir CSV
                    </Button>
                    {uploadFile && (
                        <Button
                            colorPalette="red"
                            onClick={() => setUploadFile(null)}
                        >
                            Cancel
                        </Button>
                    )}
                </HStack>
            </VStack>
            <Box
                minH="50vh"
            >
                {error && (
                    <Alert.Root status="error">
                        <Alert.Indicator />
                        <Alert.Title>Error</Alert.Title>
                        <Alert.Description>
                            {error}
                        </Alert.Description>
                    </Alert.Root>
                )}

                {resultados.length === 0 && !activeFilters ? (
                    <EmptyState.Root>
                        <EmptyState.Content>
                            <EmptyState.Indicator>
                                <GrDocumentMissing />
                            </EmptyState.Indicator>
                            <VStack>
                                <EmptyState.Title>Aún no hay resultados</EmptyState.Title>
                                <EmptyState.Description>
                                    Los resultados se subiran después del evento
                                </EmptyState.Description>
                            </VStack>
                        </EmptyState.Content>
                    </EmptyState.Root>
                ) : (
                    <Box>
                        <FiltersResults 
                            filtros={filtros}
                            onChange={setFiltros}
                        />
                        {resultados.length > 0 ? (
                            <>
                                <TableResults 
                                    results={resultados}
                                    isLoading={isLoading}
                                />
                            </>
                        ) : (
                            <EmptyState.Root>
                                <EmptyState.Content>
                                    <EmptyState.Indicator>
                                        <GrDocumentMissing />
                                    </EmptyState.Indicator>
                                    <VStack>
                                        <EmptyState.Title>
                                            No hay resultados que coincidan 
                                        </EmptyState.Title>
                                        <EmptyState.Description>
                                            Ningún resultado coincide con la búsqueda por favor haz otra búsqueda
                                        </EmptyState.Description>
                                    </VStack>
                                </EmptyState.Content>
                            </EmptyState.Root>
                        )}
                    </Box>
                )}
            </Box>
            {totalPages > 1 && (
                <Box
                    w="100%"
                    mx="auto"
                    display="flex"
                    justifyContent="center"
                    mb={4}
                >
                    <Pagination.Root
                        count={totalPages * filtros.limit}
                        pageSize={filtros.limit}
                        defaultPage={filtros.page}
                        onPageChange={(e) => setFiltros({ ...filtros, page: e.page })}
                        siblingCount={2}
                    >
                        <ButtonGroup variant="ghost" size={{ base: 'sm', lg: 'md' }}>
                            <Pagination.PrevTrigger asChild>
                                <IconButton>
                                    <LuChevronLeft />
                                </IconButton>
                            </Pagination.PrevTrigger>

                            <Pagination.Items 
                                render={(page) => (
                                    <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                                        {page.value}
                                    </IconButton>
                                )}
                            />

                            <Pagination.NextTrigger asChild>
                                <IconButton>
                                    <LuChevronRight />
                                </IconButton>
                            </Pagination.NextTrigger>
                        </ButtonGroup>
                    </Pagination.Root>
                </Box>
            )}
        </Box>
    )
}


export default AdminResults;