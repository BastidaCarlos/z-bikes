import { useEffect, useRef, useState } from "react";
import { getBicicletas, deleteBicicleta } from "../../../services/bicicletaService";
import { toaster } from "../../../components/ui/toaster"
import { useNavigate } from "react-router-dom"
import { 
    Box,
    Button,
    ButtonGroup,
    Card,
    CloseButton,
    Dialog,
    EmptyState,
    Flex,
    Heading,
    HStack,
    IconButton,
    Image,
    Input,
    InputGroup,
    Pagination,
    Portal,
    SimpleGrid,
    Spinner,
    Text,
    VStack,
} from "@chakra-ui/react";
import { LuTrash2, LuPencil, LuEye, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { FaBicycle, FaSearch } from "react-icons/fa";

function AdminBicycles() {
    const [ bicycles, setBicycles ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ openDialogId, setOpenDialogId ] = useState(null);

    const [ page, setPage ] = useState(1);
    const [ totalDocuments, setTotalDocuments ] = useState(0);
    const limit = 6;

    const inputRef = useRef(null);
    const [ inputValue, setInputValue ] = useState('');
    const isFirstRender = useRef(true);

    const navigate = useNavigate();

    const fetchBicycles = async (query = "", pageNum = 1) => {
        setIsLoading(true);
        try {
            const data = await getBicicletas({ q: query, page: pageNum, limit });
            setBicycles(data.results || data.bicycle || [])
            setTotalDocuments(data.totalDocuments || 0)
        } catch (error) {
            toaster.create({
                title: "Error",
                description: "No se pudieron cargar las bicicletas",
                type: "error"
            });
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            fetchBicycles('', 1)
            return;
        }

        const timer = setTimeout(() => {
            setPage(1)
            fetchBicycles(inputValue, 1)
        }, 500);

        return () => clearTimeout(timer);
    }, [inputValue])

    useEffect(() => {
        if (!isFirstRender.current) {
            fetchBicycles(inputValue, page)
        }
    }, [page])

    const handleDelete = async (bikeId) => {
        try {
            await deleteBicicleta(bikeId);
            setBicycles(prev => prev.filter(bike => bike._id !== bikeId))
            toaster.create({
                title: "Eliminada",
                description: "La bicicleta y sus imágenes fueron eliminadas",
                type: "success"
            })
        } catch (error) {
            toaster.create({
                title: "Error",
                description: "No se pudo eliminar la bicicleta",
                type: "error"
            })
        }
    }

    const currentBikeToDelete = bicycles.find(bike => bike._id === openDialogId)
    const totalPages = Math.ceil(totalDocuments / limit) || 1;

    const endElement = inputValue ? (
        <CloseButton 
            size="xs"
            onClick={() => {
                setInputValue('');
            }}
            me="-2"
        />
    ) : undefined;

    return (
        <Box
            w="100%"
            p={4}
        >
            <VStack gap={6} align="stretch" maxW="1200px" w="100%" mx="auto">
                <Heading
                    as="h2"
                    fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                    fontFamily="heading"
                    fontWeight="extrabold"
                    textTransform="uppercase"
                    color="laguna"
                    letterSpacing="wide"
                    mb={6}
                    alignSelf="flex-start"
                >
                    Gestión de Bicicletas
                </Heading>
                <Flex
                    w="full"
                    maxW="900px"
                    mx="auto"
                    bg="white"
                    p={1.5}
                    px={6}
                    borderRadius="full"
                    align="center"
                    border="1px solid"
                    borderColor="teal.300"
                    boxShadow="md"
                    transition="all 0.2s"
                    _focusWithin={{
                        boxShadow: "lg",
                        borderColor: "trail"
                    }}
                >
                    <InputGroup
                        startElement={<FaSearch />}
                        endElement={endElement}
                        color="teal"
                        w="full"
                    >
                        <Input 
                            ref={inputRef}
                            variant="unstyled"
                            placeholder="Buscar por, propietario, marca o número de serie..."
                            _placeholder={{ color: "gray.500"}}
                            fontSize={{ base: "sm", lg: "md"}}
                            flex={1}
                            color="teal"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.currentTarget.value)}
                        />
                    </InputGroup>
                </Flex>

                {isLoading && (
                    <VStack py={10}>
                        <Spinner color="teal" size="lg"/>
                        <Text>Cargando bicicletas...</Text>
                    </VStack>    
                )}

                {!isLoading && bicycles.length === 0 && (
                    <EmptyState.Root py={10}>
                        <EmptyState.Content>
                            <EmptyState.Indicator>
                                <FaBicycle size="40px" />
                            </EmptyState.Indicator>
                            <VStack textAlign="center">
                                <EmptyState.Title color="laguna" fontSize="xl" fontWeight="bold">
                                    {inputValue ? "No se encontraron coincidencias" : "Aún no hay bicicletas registradas"}
                                </EmptyState.Title>
                                <EmptyState.Description color="cerro.300">
                                    {inputValue 
                                        ? `No hay registros que coincidan con "${inputValue}". Intenta con otra búsqueda`
                                        : "El listado está vacío por el momento."
                                    }
                                </EmptyState.Description>
                            </VStack>
                        </EmptyState.Content>
                    </EmptyState.Root>
                )}

                {!isLoading && bicycles.length > 0 && (
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                        {bicycles.map((bike) => {
                            const firstImage = bike.images?.[0];
                            const imageUrl = typeof firstImage === 'object' ? firstImage.url : firstImage;

                            return (
                                <Card.Root
                                    key={bike._id}
                                    borderRadius="lg"
                                    boxShadow="md"
                                    overflow="hidden"
                                    bg="teal"
                                    p={5}
                                    color="white"
                                    display="flex"
                                    flexDir="column"
                                    justifyContent="space-between"
                                >
                                    <Box>
                                        {imageUrl ? (
                                            <Image 
                                                src={imageUrl}
                                                alt={bike.brand}
                                                h="200px"
                                                w="100%"
                                                objectFit="cover"
                                                borderRadius="md"
                                                mb={4}
                                            />
                                        ) : (
                                            <Flex
                                                h="200px"
                                                w="100%"
                                                bg="cerro.600"
                                                align="center"
                                                justify="center"
                                                borderRadius="md"
                                                mb={4}
                                            >
                                                <FaBicycle size="48px" color="#718096"/>
                                            </Flex>
                                        )}
                                        <Card.Body p={0} mb={4}>
                                            <Card.Title color="trail" fontWeight="bold" fontSize="xl" mb={2}>
                                                {bike.brand} {bike.model}
                                            </Card.Title>
                                            <VStack align="stretch" w="100%" gap={1} fontSize="sm" color="cerro.100">
                                                <Text><b>Propietario:</b> </Text>
                                                <Text>{bike.owner}</Text>
                                            </VStack>
                                        </Card.Body>
                                    </Box>
                                    <Card.Footer p={0} justifyContent="space-between" mt={4}>
                                        <VStack w="100%" gap={2}>
                                            <Button
                                                size="sm"
                                                bg="laguna"
                                                color="white"
                                                w="100%"
                                                transition="all 0.3s"
                                                _hover={{ bg: "lagunaHover", transform: "translateY(-2px)"}}
                                                onClick={() => navigate(`/bicicletas/detalles/${bike._id}`)}
                                            >
                                                <LuEye /> Ver detalles
                                            </Button>
                                            <HStack w="100%" justify="space-between">
                                                <Button
                                                    size="sm"
                                                    w="49%"
                                                    bg="laguna"
                                                    transition="all 0.3s"
                                                    _hover={{ bg: "lagunaHover", transform: "translateY(-2px)"}}
                                                    onClick={() => navigate(`/bicicletas/editar/${bike._id}`)}
                                                >
                                                    <LuPencil /> Editar
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    w="49%"
                                                    colorPalette="red"
                                                    transition="all 0.3s"
                                                    _hover={{ bg: "red.500", transform: "translateY(-2px)"}}
                                                    onClick={() => setOpenDialogId(bike._id)}
                                                >
                                                    <LuTrash2 /> Eliminar 
                                                </Button>
                                            </HStack>
                                        </VStack>
                                    </Card.Footer>
                                </Card.Root>
                            )
                        })}
                    </SimpleGrid>
                )}
                {totalPages > 1 && (
                    <Flex
                        w="100%"
                        mx="auto"
                        display="flex"
                        justifyContent="center"
                        mb={4}
                    >
                        <Pagination.Root
                            count={totalDocuments}
                            pageSize={limit}
                            defaultPage={page}
                            onPageChange={(e) => setPage(e.page)}
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
                    </Flex>
                )}
            </VStack>
            <Dialog.Root
                open={openDialogId !== null}
                onOpenChange={(e) => {
                    if (!e.open) setOpenDialogId(null);
                }}
            >
                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content>
                            <Dialog.Header>
                                <Text fontSize="lg" fontWeight="bold">¿Eliminar bicicleta?</Text>
                            </Dialog.Header>
                            <Dialog.Body>
                                <Text>
                                    ¿Estás seguro de que deseas eliminar la bicicleta de <b>{currentBikeToDelete?.owner}</b>?
                                    Esta acción también borrará sus imágenes permanentemente
                                </Text>
                            </Dialog.Body>
                            <Dialog.Footer>
                                <HStack gap={3}>
                                    <Button
                                        variant="outline"
                                        onClick={() => setOpenDialogId(null)}
                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        colorPalette="red"
                                        onClick={() => {
                                            if (openDialogId) {
                                                handleDelete(openDialogId)
                                                setOpenDialogId(null)
                                            }
                                        }}
                                    >
                                        Confirmar
                                    </Button>
                                </HStack>
                            </Dialog.Footer>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>
        </Box>
    )
}

export default AdminBicycles;