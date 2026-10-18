import { 
    Box,
    Circle,
    Flex,
    Heading,
    Icon,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";
import { FaBiking, FaLeaf } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";

function History() {
    return (
        <Box as="section" w="100%" p={{ base: 8, lg: 12 }}>
            <Flex
                w="100%"
                maxW={{ base: '100%', lg: '900px', xl: '1200px' }}
                mx="auto"
                direction={{ base: 'column', lg: 'row' }}
                gap={{ base: 8, lg: 12 }}
                px={{ base: 4, lg: 6 }}
                align="center"
                mb={{ base: 12, lg: 16 }}
            >
                <VStack align="flex-start" gap={4} flex="1">
                    <Heading
                        as="h2"
                        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                        fontFamily="heading"
                        fontWeight="extrabold"
                        textTransform="uppercase"
                        color="laguna"
                        letterSpacing="wide"
                    >
                        Nuestra Historia
                    </Heading>
                    
                    <Text color="gray.600" fontSize={{ base: 'md', lg: 'lg' }} lineHeight="relaxed">
                        Todo empezó con una idea que varias personas compartíamos: rodar por los caminos de San Juan Zitlaltepec y hacerle más espacio al MTB en la comunidad. Así nació Z-Bikes: un grupo para explorar nuestras rutas, disfrutar cada rodada y compartir el gusto por la bici.
                    </Text>

                    <Text color="gray.600" fontSize={{ base: 'md', lg: 'lg' }} lineHeight="relaxed">
                        Con el tiempo se sumaron más compañeros. En la ruta buscamos superarnos, cada quien a su ritmo; fuera de la bici, el compañerismo también sigue presente.
                        Ahora vamos por otro reto: seguir creciendo y prepararnos para competir como equipo. Queremos hacerlo con el respeto y el apoyo entre compañeros que nos han acompañado desde el inicio.
                    </Text>
                </VStack>

                <Box flex="1" w="100%">
                    <Image 
                        src="https://picsum.photos/600/400"
                        alt="Comunidad de ciclismo de montaña en ruta"
                        objectFit="cover"
                        borderRadius="2xl"
                        boxShadow="lg"
                        w="100%"
                        h={{ base: "250px", md: "350px" }}
                    />
                </Box>
            </Flex>

            <VStack
                w="100%"
                maxW={{ base: '100%', lg: '900px', xl: '1200px' }}
                mx="auto"
                px={{ base: 4, lg: 6 }}
                gap={8}
                alignItems="flex-start"
            >
                <VStack
                    w="100%"
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
                        textAlign="left"
                        mb={4}
                    >
                        Nuestra filosofía
                    </Heading>
                    <Heading>
                        La amistad también se pedalea.
                    </Heading>
                    <Text>
                        Nos mueve el MTB y nos une el compañerismo. En cada rodada compartimos la ruta, nos damos tiempo cuando alguien necesita bajar el ritmo y respetamos la forma de rodar de cada quien. Y cuando guardamos la bici, la convivencia sigue.
                    </Text>
                </VStack>

                <Flex
                    w="100%"
                    direction={{ base: 'column', md: 'row' }}
                    gap={6}
                    align="stretch"
                    justify="center"
                >
                    <Box
                        flex="1"
                        bg="teal"
                        borderRadius="2xl"
                        color="white"
                        p={{ base: 6, md: 8 }}
                        boxShadow="md"
                    >
                        <VStack spacing={4} textAlign="center">
                            <Circle
                                size="80px"
                                bg="whiteAlpha.200"
                                border="1px solid"
                                borderColor="whiteAlpha.500"
                            >
                                <Icon as={FaBiking} boxSize={8} />
                            </Circle>
                            <Text fontSize="xl" fontWeight="bold">
                                Pasión
                            </Text>
                            <Text fontSize="sm" color="whiteAlpha.900">
                                Disfrutamos el MTB, las rutas y todo lo que descubrimos al rodar. Cada salida trae un nuevo camino o un reto para probarte a tu ritmo.
                            </Text>
                        </VStack>
                    </Box>

                    <Box
                        flex="1"
                        bg="teal"
                        borderRadius="2xl"
                        color="white"
                        p={{ base: 6, md: 8 }}
                        boxShadow="xl"
                        transform={{ lg: "scale(1.05)" }}
                        transition="all 0.2s"
                    >
                        <VStack spacing={4} textAlign="center">
                            <Circle
                                size="80px"
                                bg="whiteAlpha.300"
                                border="2px solid"
                                borderColor="white"
                            >
                                <Icon as={TiGroup} boxSize={9} />
                            </Circle>
                            <Text fontSize="xl" fontWeight="bold">
                                Amistad
                            </Text>
                            <Text fontSize="sm" color="whiteAlpha.900">
                                En la ruta nos acompañamos; fuera de la bici, también compartimos. El compañerismo es parte de lo que hace especial a Z-Bikes.
                            </Text>
                        </VStack>
                    </Box>

                    <Box
                        flex="1"
                        bg="teal"
                        borderRadius="2xl"
                        color="white"
                        p={{ base: 6, md: 8 }}
                        boxShadow="md"
                    >
                        <VStack spacing={4} textAlign="center">
                            <Circle
                                size="80px"
                                bg="whiteAlpha.200"
                                border="1px solid"
                                borderColor="whiteAlpha.500"
                            >
                                <Icon as={FaLeaf} boxSize={7} />
                            </Circle>
                            <Text fontSize="xl" fontWeight="bold">
                                Respeto
                            </Text>
                            <Text fontSize="sm" color="whiteAlpha.900">
                                Cada quien llega con su experiencia, su ritmo y sus ideas. Escuchamos, cuidamos el trato y dejamos espacio para que todos disfruten la rodada.
                            </Text>
                        </VStack>
                    </Box>
                </Flex>
            </VStack>
        </Box>
    );
}

export default History;