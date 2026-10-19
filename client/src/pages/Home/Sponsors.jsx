import { 
    Box, 
    Button,
    Flex, 
    Heading, 
    Text, 
    VStack, 
    Center,
    Badge,
    Image,
} from "@chakra-ui/react";
import Sponsor1 from "../../assets/Sponsors/Sponsor1.webp"
import Sponsor2 from "../../assets/Sponsors/Sponsor2.webp"

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
                    <Box
                        w="100%"
                        p={{ base: 6, md: 8 }}
                        bg="teal.100"
                        border="2px solid"
                        borderColor="laguna"
                        borderRadius="2xl"
                        boxShadow="sm"
                    >
                        <VStack spacing={4} align="center">
                            <Badge 
                                bg="teal"
                                color="white"
                                fontSize="xs" 
                                px={3} 
                                py={1} 
                                borderRadius="full"
                                textTransform="uppercase"
                                letterSpacing="wider"
                            >
                                Patrocinador Oficial
                            </Badge>

                            <Center py={2} w="100%">
                                <Image 
                                    src={Sponsor1}
                                    borderRadius="full"
                                    alt="Logo Patrocinador Principal"
                                    maxH={{ base: "80px", md: "110px" }}   
                                    maxW="280px" 
                                    objectFit="contain" 
                                />
                            </Center>

                            <Text fontSize="md" fontWeight="bold" color="teal.900">
                                Consultoría jurídica profesional
                            </Text>
                        </VStack>
                    </Box>

                    <Flex
                        wrap="wrap"
                        justify="center"
                        gap={6}
                        w="100%"
                    >
                        <Center 
                            p={5} 
                            border="1px solid" 
                            borderColor="gray.200" 
                            borderRadius="xl" 
                            w={{ base: "calc(50% - 12px)", sm: "180px", md: "200px" }} // Ancho responsivo
                            h="100px"
                            _hover={{ borderColor: "laguna" }}
                            transition="all 0.2s"
                        >
                            <Image 
                                src={Sponsor2} 
                                alt="Patrocinador 1" 
                                maxH="60px"
                                maxW="100%"
                                objectFit="contain" 
                                filter="grayscale(100%)"
                                opacity={0.8}
                                _hover={{ filter: "grayscale(0%)", opacity: 1 }}
                                transition="all 0.3s"
                            />
                        </Center>
                    </Flex>
                    <VStack 
                        gap={3}
                        pt={6}
                        textAlign="center"
                        w="100%"
                        borderTop="1px dashed"
                        borderColor="gray.200"
                    >

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