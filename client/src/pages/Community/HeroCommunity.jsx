import Logo from '../../assets/Logo.svg';
import { 
    Badge,
    Box, 
    Heading, 
    Image, 
    Text, 
    VStack,
    HStack
} from "@chakra-ui/react";

function HeroCommunity() {
    return (
        <Box 
            as="section" 
            w="100%" 
            pt={{ base: 10, lg: 12 }}
            mt={{ base: 12, md: 10 }}
        >
            <VStack
                textAlign="center"
                w="100%"
                maxW={{ base: '100%', lg: '700px', xl: '900px'}}
                mx="auto"
                px={{ base: 4, md: 8 }}
                gap={4}
            >
                <Image 
                    src={Logo}
                    alt="Logo de Z-Bike's"
                    boxSize={{ base: "100px", md: "150px" }}
                    objectFit="contain"
                />

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
                        Comunidad
                    </Heading>

                    <Text
                        fontSize={{ base: 'md', md: 'xl' }}
                        fontWeight="semibold"
                        color="teal.700"
                    >
                        El compañerismo también se vive fuera de la ruta.
                    </Text>
                </VStack>

                <Text 
                    color="gray.600" 
                    fontSize={{ base: 'md', lg: 'lg' }}
                    lineHeight="relaxed"
                    maxW="750px"
                >
                    Nos une la pasión por el MTB y la convivencia que nace en cada rodada. Explora la historia de Z-Bikes, conoce los principios que nos guían y descubre cómo sumarte a una próxima salida.
                </Text>

                <HStack gap={4} pt={2}>
                    <Badge
                        bg="teal"
                        color="white"
                        size="lg"
                        borderRadius="full"
                        px={8}
                    >
                        Conoce dónde rodamos
                    </Badge>
                </HStack>
            </VStack>
        </Box>
    );
}

export default HeroCommunity;