import { 
    Box,
    Heading,
    Text,
    VStack,
} from "@chakra-ui/react";

function HeroRutas() {
    return (
        <Box 
            as="section" 
            w="100%" 
            pt={{ base: 10, lg: 20 }}
            mt={{ base: 14, md: 10 }}
        >
            <VStack
                textAlign="center"
                align="center"
                justify='center'
                minH="30vh"
                w="100%"
                maxW={{ base: '100%', lg: '700px', xl: '900px'}}
                mx="auto"
                px={{ base: 4, md: 8 }}
                gap={4}
            >
                <VStack spacing={3}>
                    <Heading
                        as="h1"
                        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                        fontFamily="heading"
                        fontWeight="extrabold"
                        textTransform="uppercase"
                        color="laguna"
                        letterSpacing="wide"
                    >
                        Rutas del Reto Z 2026
                    </Heading>

                    <Text
                        fontSize={{ base: 'md', md: 'xl' }}
                        fontWeight="semibold"
                        color="teal.700"
                    >
                        Tu reto empieza por conocer el terreno.
                    </Text>
                </VStack>

                <Text 
                    color="gray.600" 
                    fontSize={{ base: 'md', lg: 'lg' }}
                    lineHeight="relaxed"
                    p={8}
                    maxW="750px"
                    textAlign={{ base: 'justify', lg: "center"}}
                >
                    Explora los recorridos de 25 y 40 km de nuestra tercera edición en San Juan Zitlaltepec. Conoce sus distancias, desniveles y características, y elige el desafío que va con tu experiencia y preparación.
                </Text>
            </VStack>
        </Box>
    )
}

export default HeroRutas;