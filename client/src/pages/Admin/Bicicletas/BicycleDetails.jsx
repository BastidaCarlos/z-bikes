import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBicicletaById } from "../../../services/bicicletaService";
import { toaster } from "../../../components/ui/toaster";
import { 
    Alert,
    Box,
    Button,
    Heading,
    HStack,
    IconButton,
    Image,
    Text,
    Spinner,
    VStack,
} from "@chakra-ui/react";
import { LuArrowLeft, LuShare2 } from "react-icons/lu";
import Logo from "../../../assets/Logo.svg"

function BicycleDetails() {
    const { id } = useParams();
    const [ data, setData ] = useState([]); 
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const navigate = useNavigate();

    const fetchBike = async () => {
        setIsLoading(true)
        setError(null);
        try {
            const bikeData = await getBicicletaById(id);
            setData(bikeData.bike)
        } catch (error) {
            setError("No se pudo obtner la información", error)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchBike();
    }, [id])

    const handleShareMessage = () => {
        const message = 
        ` 🚲 *Registro Oficial Z-Bikes* 🚲
        Hola *${data.owner}*, aquí tienes la información de los datos registrados de tu bicicleta:

        • *Marca:* ${data.brand}
        • *Modelo:* ${data.model}
        • *Color:* ${data.color}
        • *Tipo:* ${data.type || 'N/A'}
        • *Número de Serie:* ${data.serialNumber}
        • *Teléfono:* ${data.phone}
        ${data.notes ? `• *Características: ${data.notes}*` : ''}
        ¡Gracias por formar parte de Z-Bikes!`;

        navigator.clipboard.writeText(message);
        toaster.create({
            title: "¡Mensaje copiado!",
            description: "El formato con la información de la bicicleta se copio al portapapeles",
            type: 'success'
        })
    }

    return (
        <Box 
            w="100%"
            maxW={{ base: '90%', lg: "650px"}}
            my={10}
            minH="50vh"
            mx="auto"
            bg="gray.900"
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="xl"
            border="1px solid"
            borderColor="gray.800"
            p={6}
            color="white"
        >
            <IconButton
                variant="ghost"
                size="sm"
                color="white"
                mb={6}
                onClick={() => navigate("/admin/dashboard")}
            >
                <LuArrowLeft />
            </IconButton>
            {isLoading && (
                <VStack w="100%" py={20} justify="center" align="center">
                    <Spinner size="xl" color="teal.100" />
                    <Text color="white">Cargando información...</Text>
                </VStack>
            )}
            {error && (
                <Alert.Root status="error">
                    <Alert.Indicator />
                    <VStack align="flex-start">
                        <Alert.Title>Error</Alert.Title>
                        <Alert.Description>{error}</Alert.Description>
                    </VStack>
                </Alert.Root>
            )}

            {!isLoading && !error && (
                <Box>
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
                            <Text color="trail" fontWeight="bold">Número telefónico:</Text>
                            <Text color="teal.200" fontSize="lg" fontWeight="semibold">{data.phone}</Text>
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
                </Box>
            )}
            <Button
                w="100%"
                bg="laguna"
                color="white"
                size="lg"
                mt={2}
                onClick={handleShareMessage}
                transition="all 0.3s"
                _hover={{ bg: "lagunaHover", transform: "translateY(-2px)"}}
            >
                <LuShare2 />Copiar información
            </Button>
        </Box>
    )
}

export default BicycleDetails;
