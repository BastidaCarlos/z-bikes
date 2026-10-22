import { useNavigate } from "react-router-dom";
import { 
    Badge,
    Box,
    Button,
    Card,
    Heading,
    HStack,
    Icon,
    SimpleGrid,
    Text,
    VStack,
} from "@chakra-ui/react";
import { FaRoute, FaArrowRight } from "react-icons/fa";
import { LuChartNoAxesColumn, LuMountainSnow } from "react-icons/lu";

function RoutesReto() {
    const navigate = useNavigate();
    return (
        <Box as="section" p={{ base: 4, lg: 12 }}>
            <Box
                w="100%"
                maxW={{ base: '100%', lg: '900px', xl: '1200px' }}
                mx="auto"
                my={8}
                color="white"
                borderRadius="2xl"
                textAlign="left"
            >
                <VStack
                    align="flex-start"
                >
                    <Heading
                        as="h2"
                        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                        fontFamily="heading"
                        fontWeight="extrabold"
                        textTransform="uppercase"
                        color="laguna"
                        letterSpacing="wide"
                        mb={6}
                    >
                        ¿Cuál será tu reto?
                    </Heading>
                    <Text color="black">
                        Conoce los dos recorridos y elige según tu experiencia y preparación. La distancia cuenta; el terreno y las subidas también.
                    </Text>
                </VStack>
                <SimpleGrid
                    columns={{ base: 1, lg: 2}}
                    w="100%"
                    maxW={{ base: '100%', lg: '700px', xl: '900px'}}
                    mt={4}
                    mx="auto"
                    gap={8}
                >
                    <Card.Root
                        alignItems="center"
                        overflow="hidden"
                        p={6}
                        gap={4}
                        borderRadius="2xl"
                        border="2px solid"
                        borderColor="laguna"
                        boxShadow="xl"
                    >
                        <Card.Header 
                            p={0}
                            alignSelf="flex-end"
                        >
                            <Badge
                                bg="bosque"
                                w="120px"
                                h="50px"
                                borderRadius="full"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                fontSize={{ base: 'xl', lg: '2xl'}}
                                color="white"
                                textTransform="uppercase"
                                fontWeight="bold"
                                fontFamily="heading"
                            >
                                25 Km
                            </Badge>
                        </Card.Header>
                        <Card.Body 
                            gap={4} 
                            alignItems="center"
                            textAlign="center"
                            w="100%"
                        >
                            <Icon as={FaRoute} boxSize={32} my={2}/>
                            <HStack justify="center" gap={2} w="100%">
                                <LuChartNoAxesColumn size={20} />
                                <Text fontSize="lg" fontWeight="medium" textTransform="uppercase" color="teal">
                                    Intermedios
                                </Text>
                            </HStack>
                            <Text>
                                Pon a prueba tu técnica y encuentra tu paso en las subidas.
                            </Text>
                            <HStack justify="center" align="center" gap={2} w="100%">
                                <LuMountainSnow size={20} />
                                <Text fontSize="lg" fontWeight="medium" textTransform="uppercase" color="teal">
                                    500 m de desnivel positivo
                                </Text>
                            </HStack>
                        </Card.Body>
                        <Card.Footer w="100%" p={0} pt={2}>
                            <Button
                                w="100%"
                                size="lg"
                                borderRadius="xl"
                                bg="teal"
                                onClick={() => navigate('/rutas')}
                                _hover={{ bg: 'teal.700', transform: 'translateY(-2px)' }}
                            >
                                <HStack>
                                    <Text>
                                        Explora la ruta de 25 KM
                                    </Text>
                                    <FaArrowRight />
                                </HStack>
                            </Button>
                        </Card.Footer>
                    </Card.Root>
                    <Card.Root
                        alignItems="center"
                        overflow="hidden"
                        p={6}
                        gap={4}
                        borderRadius="2xl"
                        border="2px solid"
                        borderColor="laguna"
                        boxShadow="xl"
                    >
                        <Card.Header 
                            p={0}
                            alignSelf="flex-end"
                        >
                            <Badge
                                bg="bosque"
                                w="120px"
                                h="50px"
                                borderRadius="full"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                fontSize={{ base: 'xl', lg: '2xl'}}
                                color="white"
                                textTransform="uppercase"
                                fontWeight="bold"
                                fontFamily="heading"
                            >
                                40 km
                            </Badge>
                        </Card.Header>
                        <Card.Body 
                            gap={4} 
                            alignItems="center"
                            textAlign="center"
                            w="100%"
                        >
                            <Icon as={FaRoute} boxSize={32} my={2}/>
                            <HStack justify="center" gap={2} w="100%">
                                <LuChartNoAxesColumn size={20} />
                                <Text fontSize="lg" fontWeight="medium" textTransform="uppercase" color="teal">
                                    avanzados
                                </Text>
                            </HStack>
                            <Text>
                                Más distancia y ascenso para probar tu resistencia y administrar el esfuerzo hasta la meta.
                            </Text>
                            <HStack justify="center" align="center" gap={2} w="100%">
                                <LuMountainSnow size={20} />
                                <Text fontSize="lg" fontWeight="medium" textTransform="uppercase" color="teal">
                                    700 M de Desnivel positivo
                                </Text>
                            </HStack>
                        </Card.Body>
                        <Card.Footer w="100%" p={0} pt={2}>
                            <Button
                                w="100%"
                                size="lg"
                                borderRadius="xl"
                                bg="teal"
                                onClick={() => navigate('/rutas')}
                                _hover={{ bg: 'teal.700', transform: 'translateY(-2px)' }}
                            >
                                <HStack>
                                    <Text>
                                        Explora la ruta de 40 KM
                                    </Text>
                                    <FaArrowRight />
                                </HStack>
                            </Button>
                        </Card.Footer>
                    </Card.Root>
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default RoutesReto;