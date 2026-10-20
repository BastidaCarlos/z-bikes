import { 
    Box, 
    Button,
    Heading, 
    Image,
    Text, 
    SimpleGrid,
    VStack, 
} from "@chakra-ui/react";
import Sponsor1 from "../../assets/Sponsors/Sponsor1.webp"
import Sponsor2 from "../../assets/Sponsors/Sponsor2.webp"
import Sponsor3 from "../../assets/Sponsors/Sponsor3.webp"
import Sponsor4 from "../../assets/Sponsors/Sponsor4.webp"
import Sponsor5 from "../../assets/Sponsors/Sponsor5.webp"
import Sponsor6 from "../../assets/Sponsors/Sponsor6.webp"
import Sponsor7 from "../../assets/Sponsors/Sponsor7.webp"
import Sponsor8 from "../../assets/Sponsors/Sponsor8.webp"

const sponsorsList = [
    {
        name: 'Consultoría Jurídica Profesional',
        logo: Sponsor1,
    },
    {
        name: 'EsKa',
        logo: Sponsor2,
    },
    {
        name: 'Borda2',
        logo: Sponsor3,
    },
    {
        name: 'The Secret Glitch',
        logo: Sponsor4,
    },
    {
        name: 'Tío Rullis Carnitas',
        logo: Sponsor5,
    },
    {
        name: 'Rancho San Juan',
        logo: Sponsor6,
    },
    {
        name: 'Zella Bikes',
        logo: Sponsor7,
    },
    {
        name: 'Santa Marina',
        logo: Sponsor8,
    },
]

function Sponsors() {
    return (
        <Box as="section" w="100%" py={{ base: 6, lg: 10 }}>
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
                        Nuestros patrocinadores
                    </Heading>
                    <Text color="gray.500" fontSize={{ base: 'sm', md: 'md' }}>
                        El Reto Z 2026 cuenta con el apoyo de negocios y marcas que impulsan el ciclismo de montaña en San Juan Zitlaltepec. Gracias por ayudarnos a hacer posible esta edición.
                    </Text>
                </VStack>

                <VStack spacing={6} w="100%">


                    <VStack 
                        gap={3}
                        pt={6}
                        textAlign="center"
                        w="100%"
                        borderTop="1px dashed"
                        borderColor="gray.200"
                    >
                        <SimpleGrid 
                            columns={{ base: 1, md: 3, lg: 4 }}
                            gap={6}
                        >
                            {sponsorsList.map((sponsor, index) => (
                                <VStack
                                    key={index}
                                    p={6}
                                    bg="white"
                                    borderWidth="1px"
                                    borderColor="gray.200"
                                    borderRadius="xl"
                                    boxShadow="md"
                                    justify="center"
                                    align="center"
                                    _hover={{ boxShadow: 'lg', transform: 'translateY(-2px)' }}
                                    transition="all 0.2s"
                                >
                                    <Box h="80px" w="full" display="flex" alignItems="center" justifyContent="center">
                                        <Image 
                                            src={sponsor.logo}
                                            alt={sponsor.name}
                                            maxH="100%"
                                            maxW="100%"
                                            objectFit="contain"
                                        />
                                    </Box>
                                    <Text fontWeight="semibold" fontSize={{ base: "md", lg: "lg"}} color='cerro.800' textAlign="center" fontFamily="heading" textTransform="uppercase" letterSpacing="wide">
                                        {sponsor.name}
                                    </Text>
                                </VStack>
                            ))}
                        </SimpleGrid>

                        <Heading
                            fontSize={{ base: 'xl', lg: '2xl'}}
                            fontWeight="bold"
                            fontStyle="italic"
                            color="cerro"
                        >
                            ¿Tienes un negocio o una marca?
                        </Heading>
                        <Text color="gray.600" fontSize="sm" fontWeight="medium">
                            Apoya el deporte local y forma parte del Reto Z 2026. Escríbenos para conocer cómo puedes participar como patrocinador.
                        </Text>
                        
                        <Button
                            as="a"
                            color="white"
                            href="https://wa.me/5550091536?text=Hola,%20quiero%20ser%20patrocinador"
                            target="_blank"
                            rel="noopener noreferrer"
                            bg="teal"
                            size="md"
                            variant="outline"
                            borderRadius="full"
                            w={{ base: '100%', lg: 'auto'}}
                            maxW="100%"
                            h="auto"
                            py={3}
                            px={6}
                            whiteSpace="normal"
                            lineHeight="normal"
                            _hover={{ bg: "laguna", color: 'white', borderColor: 'laguna'}}
                        >
                            Quiero ser patrocinador
                        </Button>

                    </VStack>
                </VStack>
            </Box>
        </Box>
    );
}

export default Sponsors;