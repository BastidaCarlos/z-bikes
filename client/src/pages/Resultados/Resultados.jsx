import { useEffect, useState } from "react";
import { getResults } from "../../services/resultsServices"
import SEO from "../../components/SEO";
import HeroResults from "./HeroResults";
import FiltersResults from "./FiltersResults";
import TableResults from "./TableResults";
import { 
    Alert,
    Box, 
    ButtonGroup,
    EmptyState,
    IconButton,
    Pagination,
    VStack 
} from "@chakra-ui/react";
import { GrDocumentMissing } from "react-icons/gr"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

function Resultados() {
    const [ resultados, setResultados ] = useState([]); 
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ totalPages, setTotalPages ] = useState(0)
    const [ filtros, setFiltros ] = useState({
        route: '',
        q: '',
        page: 1,
        limit: 20 
    })

    const cargarResultados = async () => {
        setIsLoading(true)
        setError(null)

        try {
            const data = await getResults(filtros);
            setResultados(data?.results ?? [])
            setTotalPages(data?.totalPages ?? 0)
        } catch (error) {
            setError(error.message)
            setResultados([])
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        cargarResultados(filtros)
    }, [filtros])

    const activeFilters = filtros.q !== '' || filtros.route !== ""

    return (
        <Box w="100%">
            <SEO 
                title="Resultados Reto Z 2026 · Z-Bikes"
                description="Consulta los resultados cronometrados del Reto Z 2026. Filtra por categoría, ruta y número de participante."
                path="/resultados"
            />
            <HeroResults />
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
                                <EmptyState.Title>Resultados pendientes de publicación</EmptyState.Title>
                                <EmptyState.Description>
                                    Después del evento, podrás consultar aquí tu tiempo y clasificación, una vez validados por el equipo de cronometraje.
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

export default Resultados;