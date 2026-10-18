import { 
    Box, 
    Heading, 
    Image, 
    Grid, 
    GridItem, 
    Text, 
    Button, 
    VStack 
} from "@chakra-ui/react";
import CerroImage1 from "../../assets/CerroImage1.webp"
import CerroImage2 from "../../assets/CerroImage2.webp"
import CerroImage3 from "../../assets/CerroImage3.webp"
import CerroImage4 from "../../assets/CerroImage4.webp"
import CerroImage5 from "../../assets/CerroImage5.webp"

function Gallery() {
    return (
        <Box as="section" w="100%" py={{ base: 8, lg: 12 }}>
            <Box 
                w="100%" 
                maxW={{ base: '100%', lg: '900px', xl: '1200px' }} 
                mx="auto" 
                px={{ base: 4, lg: 6 }}
            >
                <VStack align="flex-start" spacing={2} mb={8}>
                    <Heading
                        as="h2"
                        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                        fontFamily="heading"
                        fontWeight="extrabold"
                        textTransform="uppercase"
                        color="laguna"
                        letterSpacing="wide"
                    >
                        El Cerro Z: nuestro patio de juego
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color="gray.600">
                        Entre veredas, subidas y descensos, un rincón de San Juan Zitlaltepec que se disfruta más sobre la bici.
                    </Text>
                </VStack>

                <Grid
                    templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                    autoRows="240px"
                    gap={4}
                    w="100%"
                >
                    <GridItem
                        rowSpan={{ base: 1, lg: 2 }}
                        colSpan={1}
                        overflow="hidden"
                        borderRadius="lg"
                        boxShadow="md"
                    >
                        <Image 
                            src={CerroImage1} 
                            alt="Cerro Z vista principal" 
                            objectFit="cover" 
                            w="100%" 
                            h="100%"
                        />
                    </GridItem>

                    <GridItem
                        overflow="hidden"
                        borderRadius="lg"
                        boxShadow="md"
                    >
                        <Image 
                            src={CerroImage2} 
                            alt="Sendero de montaña" 
                            objectFit="cover" 
                            w="100%" 
                            h="100%"
                        />
                    </GridItem>

                    <GridItem
                        overflow="hidden"
                        borderRadius="lg"
                        boxShadow="md"
                    >
                        <Image 
                            src={CerroImage3} 
                            alt="Vista a la laguna" 
                            objectFit="cover" 
                            w="100%" 
                            h="100%"
                        />
                    </GridItem>

                    <GridItem
                        overflow="hidden"
                        borderRadius="lg"
                        boxShadow="md"
                    >
                        <Image 
                            src={CerroImage4} 
                            alt="Zona técnica" 
                            objectFit="cover" 
                            w="100%" 
                            h="100%"
                        />
                    </GridItem>

                    <GridItem
                        overflow="hidden"
                        borderRadius="lg"
                        boxShadow="md"
                    >
                        <Image 
                            src={CerroImage5} 
                            alt="Rodada en grupo" 
                            objectFit="cover" 
                            w="100%" 
                            h="100%"
                        />
                    </GridItem>
                </Grid>

                <Box mt={10} textAlign="center">
                    <Button
                        as="a"
                        href="/comunidad"
                        bg="teal"
                        color="white"
                        variant="outline"
                        size="lg"
                        borderRadius="full"
                        w={{ base: '100%', lg: 'auto'}}
                        h="auto"
                        py={{ base: 3, md: 4}}
                        px={{ base: 4, md: 8}}
                        whiteSpace="normal"
                        lineHeight="normal"
                        _hover={{ bg: "laguna", color: "white", borderColor: "laguna" }}
                    >
                        Conoce a la comunidad Z-Bikes →
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Gallery;