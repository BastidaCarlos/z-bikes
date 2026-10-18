import { 
    Box, 
    Button,
    Heading, 
    HStack, 
    Text,
    VStack 
} from "@chakra-ui/react";

function CTAReto() {
    return (
        <Box
            as="section"
            textAlign="center"
            w="100%"
            mx="auto"
            mb={8}
        >
            <VStack>
                <Heading
                    fontSize={{ base: 'xl', lg: '2xl'}}
                    fontWeight="bold"
                    fontStyle="italic"
                    color="cerro"
                >
                    Ahora te toca vivirlo.
                </Heading>
                <VStack
                    bg="teal"
                    w={{ base: '90%', lg: '50%'}}
                    h="auto"
                    align="center"
                    justify='center'
                    color="white"
                    gap={4}
                    py={6}
                    borderRadius="2xl"
                    boxShadow="xl"
                >
                    <Heading
                        as="h3"
                        fontSize={{ base: 'xl', lg: '2xl'}}
                        fontWeight="bold"
                        fontFamily="heading"
                        textTransform="uppercase"
                    >
                        ¿Vas por los 30 o por los 40 km?
                    </Heading>
                    <Text
                        fontSize={{ base: 'lg', lg: 'xl'}}
                        fontWeight="semibold"
                        fontFamily="heading"
                        textTransform="uppercase"
                    >
                        Nos vemos el 29 de noviembre en San Juan Zitlaltepec.
                        <br />
                        Inscripción: $300 MXN
                    </Text>
                    <Button
                        as="a"
                        variant="solid"
                        bg="laguna"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfK2DTgveIHUx-Y03_Bt7WKB0oZOTehXiuicsR_hy4Ncy_x6Q/viewform?pli=1"
                        borderRadius="lg"
                        fontSize={{ base: 'lg', lg: 'xl'}}
                        fontWeight="bold"
                        whiteSpace="normal"
                        textAlign="center"
                        color="white"
                        target="_blank"
                        rel="noopener noreferrer"
                        _hover={{ bg: "laguna.700"}}
                    >
                        <HStack>
                            <Text>
                                Inscribirme al reto
                            </Text>
                        </HStack>
                    </Button>
                </VStack>
            </VStack>
        </Box>
    )
}

export default CTAReto;