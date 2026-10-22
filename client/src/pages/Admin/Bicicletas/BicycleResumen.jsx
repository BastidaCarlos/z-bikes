import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getBicicletaResumen } from "../../../services/bicicletaService";
import { 
    Alert,
    Box,
    Button,
    Heading,
    HStack,
    Image,
    Text,
    Spinner,
    VStack,
} from "@chakra-ui/react";
import Logo from "../../../assets/Logo.svg"

function BicycleResumen() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [ data, setData ] = useState(() => {
        const stateBike = location.state?.bicicleta;
        if (!stateBike)  return null;

        return stateBike.bicicleta || stateBike
    })

    const [ isLoading, setIsLoading ] = useState(!location.state?.bicicleta);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        if (data) return;

        const datosBike = async () => {
            setIsLoading(true)
            setError(null)

            try {
                const response = await getBicicletaResumen(id);
                setData(response.bicycle || response);
            } catch (error) {
                console.error(error)
                setError("No se pudo cargar la información de la bicicleta", error)
            } finally {
                setIsLoading(false)
            }
        }

        datosBike();
    }, [id, data]);

    if (isLoading) {
        return (
            <VStack w="100%" py={20} justify="center" align="center">
                <Spinner size="xl" color="teal" />
                <Text color="black">Cargando información...</Text>
            </VStack>
        )
    }

    if (error) {
        return (
            <Alert.Root status="error">
                <Alert.Indicator />
                <VStack align="flex-start">
                    <Alert.Title>Error</Alert.Title>
                    <Alert.Description>{error}</Alert.Description>
                </VStack>
            </Alert.Root>
        )
    }

    return (
        <Box 
            w="100%"
            maxW={{ base: '90%', lg: "650px"}}
            mx="auto"
            bg="gray.900"
            my={10}
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="xl"
            border="1px solid"
            borderColor="gray.800"
            p={6}
            color="white"
        >
            <VStack gap={2} mb={6} align="center" textAlign="center">
                <Box
                    boxSize="50px"
                    bg="white"
                    style={{
                        maskImage: `url(${Logo})`,
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        maskSize: "contain",
                        WebkitMaskImage: `url(${Logo})`,
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        WebkitMaskSize: "contain",
                    }}
                />
                <VStack gap={0}>
                    <Text fontSize="xs" fontWeight="bold" letterSpacing="widest" color="teal.400" textTransform="uppercase">
                        Registro Oficial • Z-Bikes
                    </Text>
                    <Heading size="lg" textTransform="uppercase" letterSpacing="wider" mt={1}>
                        {data.brand} {data.model}
                    </Heading>
                </VStack>
            </VStack>

            {data.images && data.images.length > 0 && (
                <Box mb={6}>
                    <Image 
                        src={typeof data.images[0] === 'object' ? data.images[0]?.url : data.images[0]}
                        w="100%"
                        h="280px"
                        objectFit="cover"
                        borderRadius="2xl"
                        boxShadow="md"
                        mb={3}
                    />
                    {data.images.length > 1 && (
                        <HStack 
                            gap={3} 
                            overflowX="auto" 
                            py={1}
                            flexDir={{ base: 'column', lg: "row"}}
                        >
                            {data.images.slice(1).map((img, index) => {
                                const imgUrl = typeof img === 'object' ? img?.url : img;
                                return (
                                    <Image 
                                        key={index}
                                        src={imgUrl}
                                        w={{ base: '100%', lg: "49%"}}
                                        h="200px"
                                        objectFit="cover"
                                        borderRadius="lg"
                                        border="2px solid"
                                        borderColor="teal.500"
                                    />
                                )
                            })}
                        </HStack>
                    )}
                </Box>
            )}

            <VStack
                gap={3}
                align='stretch'
                bg="gray.800"
                p={5}
                borderRadius="xl"
            >
                <HStack 
                    justify="space-between"
                    flexDir={{ base: "column", lg: "row"}}
                    align="flex-start"
                >
                    <Text color="trail" fontWeight="bold">Propietario:</Text>
                    <Text color="teal.200" fontSize="lg" fontWeight="semibold">{data.owner}</Text>
                </HStack>
                <HStack 
                    justify="space-between"
                    flexDir={{ base: "column", lg: "row"}}
                    align="flex-start"
                >
                    <Text color="trail" fontWeight="bold">Color:</Text>
                    <Text color="teal.200" fontSize="lg" fontWeight="semibold">{data.color}</Text>
                </HStack>
                <HStack 
                    justify="space-between"
                    flexDir={{ base: "column", lg: "row"}}
                    align="flex-start"
                >
                    <Text color="trail" fontWeight="bold">Tipo de bicicleta:</Text>
                    <Text color="teal.200" fontSize="lg" fontWeight="semibold">{data.type || 'N/A'}</Text>
                </HStack>
                <HStack 
                    justify="space-between"
                    flexDir={{ base: "column", lg: "row"}}
                    align="flex-start"
                >
                    <Text color="trail" fontWeight="bold">Número de Serie:</Text>
                    <Text color="teal.200" fontWeight="semibold" fontSize="lg">{data.serialNumber}</Text>
                </HStack>
                {data.notes && (
                    <VStack align="start" mt={2} pt={3} borderTop="1px solid" borderColor="gray.700">
                        <Text color="trail" fontWeight="bold" fontSize="sm">Características:</Text>
                        <Text fontSize="sm" color="gray.300">{data.notes}</Text>
                    </VStack>
                )}
            </VStack>
            <HStack w="100%" mt={2} flexDir={{ base: 'column', lg: 'row'}}>
                <Button
                    w={{ base: '100%', lg: "49%"}}
                    onClick={() => navigate('/registro-bici/7E2QXCWOBY90NDPK')}
                    _hover={{ bg: "lagunaHover", transform: "translateY(-2px)"}}
                    transition="all 0.3s"
                    bg="laguna"
                >
                    Registrar otra bicicleta
                </Button>
                <Button
                    borderColor="teal.400"
                    variant="otline"
                    color="white"
                    w={{ base: '100%', lg: "49%"}}
                    onClick={() => navigate('/')}
                    _hover={{ bg: "lagunaHover", transform: "translateY(-2px)"}}
                    transition="all 0.3s"
                >
                    Volver al inicio
                </Button>
            </HStack>
            <Text fontSize={{ base: 'sm', lg: "md"}} color="cerro.300" textAlign="center" mt={2} fontStyle="italic">
                ¿Notas algún error en la información?
                <br />
                <Text
                    as="span"
                    color="teal.300"
                    fontWeight="bold"
                    ml={1}
                >
                    Contacta al administrador
                    para solicitar su corrección
                </Text>
            </Text>
        </Box>
    )
}

export default BicycleResumen;