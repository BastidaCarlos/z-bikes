import { 
    Box,
    Flex,
    Heading,
    Image,
    Text,
    VStack
} from "@chakra-ui/react";

function HeroResults() {
    return (
        <Box 
            as="section" 
            w="100%" 
            pt={{ base: 10, lg: 12 }}
            mt={{ base: 12, lg: 20 }}
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
                        Resultados
                    </Heading>

                    <Text
                        fontSize={{ base: 'md', md: 'xl' }}
                        fontWeight="semibold"
                        color="teal.700"
                    >
                        Cada esfuerzo tiene su tiempo. Aquí conocerás el tuyo.
                    </Text>
                </VStack>

                <Text 
                    color="gray.600" 
                    fontSize={{ base: 'md', lg: 'lg' }}
                    lineHeight="relaxed"
                    maxW="750px"
                >
                    Después del Reto Z 2026, publicaremos en esta sección los tiempos y las clasificaciones de los recorridos de 25 y 40 km, una vez validados por el equipo de cronometraje.
                    Resultados pendientes de publicación
                    Después del evento, podrás consultar aquí tu tiempo y clasificación, una vez validados por el equipo de cronometraje.
                </Text>
            </VStack>
        </Box>
    )
}

export default HeroResults;