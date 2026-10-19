import { 
    Box, 
    Button,
    Heading,
    HStack,
    Text,
    VStack 
} from "@chakra-ui/react";
import { FaMap } from "react-icons/fa";

function GeneralInfo() {
    return (
        <Box as="section" p={{ base: 4, lg: 12 }}>
            <VStack
                w="100%"
                maxW={{ base: '100%', lg: '900px', xl: '1200px'}}
                mx="auto"
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
                    alignSelf="flex-start"
                >
                    Informacion general
                </Heading>
                <Box
                    w="100%"
                    maxW={{ base: '100%', lg: '700px', xl: '900px' }}
                    mx="auto"
                    bg="teal"
                    borderRadius="2xl"
                    boxShadow="xl"
                    color="white"
                    p={6}
                >
                    <VStack
                        w="100%"
                        alignItems="flex-start"
                    >
                        <Heading
                            as="h3"
                            fontSize={{ base: 'xl', lg: '2xl'}}
                            fontWeight="bold"
                            fontFamily="heading"
                            textTransform="uppercase"
                        >
                            Nos vemos en san juan zitlaltepec
                        </Heading>
                        <Text fontSize="md" color="whiteAlpha.700">
                            Consulta la ubicación y planea tu llegada al Reto Z-Bikes 2026.
                        </Text>
                        <Box 
                            as="iframe"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.8182085559733!2d-99.14154474385568!3d19.805303700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d18b00638a7bcf%3A0xdca8735b835c6934!2sZ%20Bike's!5e0!3m2!1ses-419!2smx!4v1791423217242!5m2!1ses-419!2smx"
                            w="100%"
                            borderRadius="xl"
                            height="200px"
                        />
                        <Button
                            as="a"
                            href="https://maps.app.goo.gl/5fWLxLEBssW1QrUCA"
                            target="_blank"
                            rel="noopener noreferrer"
                            bg="laguna"
                            color="white"
                            fontWeight="semibold"
                        >
                            <HStack>
                                <FaMap />
                                Cómo llegar
                            </HStack>
                        </Button>
                    </VStack>
                    <VStack
                        w="100%"
                        alignItems="flex-start"
                        mt={4}
                    >
                        <Heading
                            as="h3"
                            fontSize={{ base: 'xl', lg: '2xl'}}
                            fontWeight="bold"
                            fontFamily="heading"
                            textTransform="uppercase"
                        >
                            Elige tu distancia
                        </Heading>
                        <Text fontSize="md" color="whiteAlpha.700">
                            Dos recorridos para poner a prueba tu técnica y resistencia. Ambos requieren experiencia previa en MTB: revisa la distancia, el desnivel y las características de cada ruta antes de inscribirte.
                        </Text>
                        <VStack
                            w="100%"
                            alignItems="flex-start"
                        >
                            <Text
                                fontSize="lg"
                                textTransform="uppercase"
                                fontWeight="semibold"
                            >
                                25 km
                            </Text>
                            <Text fontSize="sm" color="whiteAlpha.700">
                                ¿Vas por los 25? Prepara las piernas y elige este recorrido si su exigencia se ajusta a tu experiencia y preparación.
                            </Text>
                        </VStack>
                        <VStack
                            w="100%"
                            alignItems="flex-start"
                        >
                            <Text
                                fontSize="lg"
                                textTransform="uppercase"
                                fontWeight="semibold"
                            >
                                40 km
                            </Text>
                            <Text fontSize="sm" color="whiteAlpha.700">
                                Más kilómetros para poner a prueba cómo administras tu esfuerzo. Revisa el recorrido y prepara tu estrategia para mantener el paso hasta la meta.
                            </Text>
                        </VStack>
                    </VStack>
                    <VStack
                        w="100%"
                        alignItems="flex-start"
                        mt={4}
                    >
                        <Heading
                            as="h3"
                            fontSize={{ base: 'xl', lg: '2xl'}}
                            fontWeight="bold"
                            fontFamily="heading"
                            textTransform="uppercase"
                        >
                            Esta vez, el tiempo cuenta
                        </Heading>
                        <Text fontSize="sm" color="whiteAlpha.700">
                            La tercera edición del Reto Z-Bikes será la primera 100 % cronometrada. Elige tu distancia y ven a medirte en la ruta.
                        </Text>
                    </VStack>
                </Box>
            </VStack>
        </Box>
    )
}

export default GeneralInfo;