import { 
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Separator,
    Stack,
    Text,
    VStack
} from "@chakra-ui/react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuChartNoAxesColumn } from "react-icons/lu";
import { GiStonePath } from "react-icons/gi";
import { FaMap } from "react-icons/fa";
import { MdArrowOutward, MdDownload } from "react-icons/md";
import Ruta from "../../assets/Ruta.webp"

function CardRuta({ route = {} }) {
    const {
        nombre = "Nombre de la Ruta",
        distancia = "0 KM",
        desnivel = "0 M",
        dificultad = "Por definir",
        terreno = "Terracería",
        descripcion = "Sin descripción disponible.",
        imagen = "https://picsum.photos/600/300",
        stravaUrl = "#",
        gpxUrl = "#"
    } = route;

    return (
        <Box
            w="100%"
            maxW={{ base: '100%', lg: '800px', xl: '950px' }}
            mx="auto"
            p={{ base: 2, md: 4 }}
        >
            <VStack
                w="100%"
                bg="teal"
                borderRadius="2xl"
                gap={{ base: 4, md: 6 }}
                p={{ base: 4, md: 6 }}
                color="white"
                boxShadow="xl"
            >
                <Heading
                    fontSize={{ base: "2xl", lg: "3xl"}}
                    alignSelf="flex-start"
                    fontWeight="bold"
                    fontFamily="heading"
                    letterSpacing="wide"
                >
                    <HStack>
                        <FaMap />
                        {distancia}
                    </HStack>
                </Heading>
                <Image 
                    src={Ruta}
                    alt={`Ruta ${nombre}`}
                    w="100%"
                    h={{ base: "180px", sm: "240px", md: "280px" }}
                    objectFit="cover"
                    borderRadius="xl"
                />

                <Stack
                    direction={{ base: 'column', lg: 'row' }}
                    w="100%"
                    gap={{ base: 6, lg: 8 }}
                >
                    <VStack 
                        alignSelf="flex-start"
                        flex="1"
                        w="100%"
                    >
                        <Heading 
                            as="h3" 
                            fontSize={{ base: "xl", md: "2xl" }}
                            fontFamily="heading"
                            fontWeight="bold"
                            textAlign="left"
                            w="100%"
                        >
                            {nombre}
                        </Heading>

                        <VStack align="flex-start" gap={2} w="100%">
                            <HStack>
                                <Icon as={FaArrowTrendUp} boxSize={5} color="presa.500" />
                                <Text fontSize="sm" fontWeight="medium">
                                    {desnivel} desnivel
                                </Text>
                            </HStack>

                            <HStack>
                                <Icon as={LuChartNoAxesColumn} boxSize={5} color="presa.500" />
                                <Text fontSize="sm" fontWeight="medium">
                                    Dificultad: {dificultad}
                                </Text>
                            </HStack>

                            <HStack>
                                <Icon as={GiStonePath} boxSize={5} color="presa.500" />
                                <Text fontSize="sm" fontWeight="medium">
                                    {terreno}
                                </Text>
                            </HStack>
                        </VStack>
                    </VStack>

                    <Separator 
                        orientation={{ base: 'horizontal', lg: 'vertical' }}
                        borderColor="whiteAlpha.400"
                        h={{ base: "1px", lg: "160px" }}
                        w={{ base: "100%", lg: "1px" }}
                    />

                    <VStack 
                        align={{ base: "center", lg: "flex-start" }} 
                        spacing={4} 
                        flex="1"
                    >
                        <Text 
                            fontSize={{ base: "sm", md: "md" }} 
                            textAlign={{ base: "center", lg: "left" }}
                            opacity={0.95}
                        >
                            {descripcion}
                        </Text>

                        <Flex 
                            direction={{ base: "column", sm: "row" }} 
                            gap={3} 
                            w="100%"
                            pt={2}
                        >
                            <Button
                                as="a"
                                href={stravaUrl}
                                download={gpxUrl}
                                disabled={!gpxUrl && gpxUrl === "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                bg="presa"
                                color="white"
                                flex="1"
                                size="md"
                                _hover={{ opacity: 0.9, transform: "translateY(-1px)" }}
                            >
                                <HStack spacing={2}>
                                    <Text>Ver en Strava</Text>
                                    <MdArrowOutward />
                                </HStack>
                            </Button>

                            <Button
                                as="a"
                                href={gpxUrl}
                                download
                                variant="outline"
                                borderColor="white"
                                color="white"
                                flex="1"
                                size="md"
                                _hover={{ bg: "whiteAlpha.200", transform: "translateY(-1px)" }}
                            >
                                <HStack spacing={2}>
                                    <Text fontSize="xs">Descargar ruta GPX</Text>
                                    <MdDownload />
                                </HStack>
                            </Button>
                        </Flex>
                    </VStack>
                </Stack>
            </VStack>
        </Box>
    );
}

export default CardRuta;