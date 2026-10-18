import { 
    Box,
    Button,
    Heading,
    Icon,
    SimpleGrid,
    Text,
    VStack
} from "@chakra-ui/react";
import { FaMap, FaCalendarAlt, FaUsers } from "react-icons/fa";

function AddMembers() {
    return (
        <Box as="section" w="100%" p={{ base: 8, lg: 12}}>
            <VStack
                w="100%"
                maxW={{ base: '100%', lg: '900px', xl: '1200px' }}
                mx="auto"
                px={{ base: 4, lg: 6 }}
                gap={{ base: 8, lg: 12 }}
                align='stretch'
            >
                <Heading
                    as="h2"
                    fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                    fontFamily="heading"
                    fontWeight="extrabold"
                    textTransform="uppercase"
                    color="laguna"
                    letterSpacing="wide"
                >
                    Aquí también hay lugar para ti.
                </Heading>
                <Box
                    bg="teal"
                    color="white"
                    textAlign="center"
                    w="100%"
                    maxW={{ base: '100%', lg: '700px', xl: '900px'}}
                    mx="auto"
                    p={{ base: 6, md: 10}}
                    borderRadius="2xl"
                    boxShadow="xl"

                >
                    <Heading
                        as="h3" 
                        color="white"
                        fontFamily="heading"
                        fontWeight="bold"
                        textTransform="uppercase"
                        fontSize={{ base: 'xl', lg: '2xl'}}
                        mb={{ base: 6, md: 8 }}
                    >
                        Forma parte de la comunidad de Z-Bikes
                    </Heading>
                    <SimpleGrid 
                        columns={{ base: 1, lg: 3}}
                        gap={{ base: 6, md: 8}}
                        mb={{ base: 8, md: 10 }}
                    >
                        <VStack gap={2}>
                            <Icon as={FaCalendarAlt} w={8} h={8} color="white" />
                            <Heading
                                as="h4"
                                textTransform="uppercase"
                                fontSize="lg"
                                fontFamily="heading"
                                fontWeight="bold"
                            >
                                Eventos
                            </Heading>
                            <Text fontSize="sm" opacity={0.9}>
                                Tu próxima rodad empieza con Z-Bikes
                            </Text>
                        </VStack>
                        <VStack gap={2}>
                            <Icon as={FaMap} w={8} h={8} color="white" />
                            <Heading
                                as="h4"
                                textTransform="uppercase"
                                fontSize="lg"
                                fontFamily="heading"
                                fontWeight="bold"
                            >
                                Rutas
                            </Heading>
                            <Text fontSize="sm" opacity={0.9}>
                                Explora Zitlaltepec a tu ritmo.
                            </Text>
                        </VStack>
                        <VStack gap={2}>
                            <Icon as={FaUsers} w={8} h={8} color="white" />
                            <Heading
                                as="h4"
                                textTransform="uppercase"
                                fontSize="lg"
                                fontFamily="heading"
                                fontWeight="bold"
                            >
                                Comunidad
                            </Heading>
                            <Text fontSize="sm" opacity={0.9}>
                                Encuentra compañeros dentro y fuera de la ruta.
                            </Text>
                        </VStack>
                    </SimpleGrid>
                    <Button
                        as="a"
                        href="https://whatsapp.com"
                        bg="laguna"
                        color="white"
                        size="lg"
                        px={8}
                        py={6}
                        fontSize={{ base: 'md', lg: 'lg'}}
                        target="_blank"
                        rel="noopener noreferrer"
                        borderRadius="full"
                        textTransform="uppercase"
                        fontWeight="bold"
                        boxShadow="md"
                        transition="all 0.2s ease-in-out"
                        _hover={{
                            opacity: 0.9,
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg'
                        }}
                    >
                        Quiero rodar con ustedes
                    </Button>
                </Box>
            </VStack>
        </Box>
    )
}

export default AddMembers;