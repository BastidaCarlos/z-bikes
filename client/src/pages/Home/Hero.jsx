import { 
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Text,
    VStack 
} from "@chakra-ui/react";
import HeroImage from "../../assets/Hero.webp"
import { FaArrowRight } from "react-icons/fa";

function Hero() {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            as="section"
        >
            <Box
                position="relative"
                h="100vh"
                w="100%"
                maxW="100%"
                bgImage={`url(${HeroImage})`}
                bgSize="cover"
                backgroundPosition={{ base: 'initial', md: 'center'}}
            >
                <Box
                    position="absolute"
                    inset={0}
                    bg="blackAlpha.700"
                >
                    <Flex
                        maxW={{ base: '100%', lg: "900px", xl: '1200px'}}
                        h="100%"
                        mx='auto'
                        alignItems="center"
                        justifyContent="center"
                        flexDir={{ base: 'column', lg: 'row'}}
                        px={6}
                        gap={{ base: 8, lg: 8 }}
                    >
                        <VStack
                            color="white"
                            w={{ base: "100%", lg: "50%"}}
                            maxW={{ base: '100%', lg: '50%'}}
                            alignItems={{ base: 'center', lg: "flex-start"}}
                            textAlign={{ base: 'center', lg: "left"}}
                            gap={6}
                        >
                            <Heading 
                                as="h1"
                                fontSize="4xl"
                                fontFamily="heading"
                                fontWeight="extrabold"
                                textTransform="uppercase"
                                color="white"
                                letterSpacing="wide"
                            >
                                El Reto Z vuelve 
                                <br />
                                a San Juan Zitlaltepec
                            </Heading>
                            <Text
                                textAlign={{ base: 'center', lg: 'left'}}
                            >
                                Elige tu desafío: 25 o 40 km. 
                                <br />
                                Vive la primera edición 100 % cronometrada del Reto Z 
                                <br />
                                y pon a prueba tus habilidades
                            </Text>
                            <VStack
                                alignSelf="flex-start"
                                align={{ base: "center", lg: "flex-start"}}
                                w="100%"
                                textAlign={{ base: "center", lg: "left"}}
                                gap={0}
                            >
                                <Text 
                                    as="span"
                                    textTransform="uppercase"
                                    fontWeight="medium"
                                    letterSpacing="0.5px"
                                >
                                    29 de Noviembre de {currentYear} | San Juan Zitlaltepec 
                                </Text>
                                <Text 
                                    as="span"
                                    textTransform="uppercase"
                                    fontWeight="medium"
                                    letterSpacing="0.5px"
                                >
                                    Inscripción:
                                    $300 MXN
                                </Text>
                            </VStack>
                        </VStack>

                        <Button
                            as="a"
                            variant="solid"
                            bg="laguna"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfK2DTgveIHUx-Y03_Bt7WKB0oZOTehXiuicsR_hy4Ncy_x6Q/viewform?pli=1"
                            rel="noopener noreferrer"
                            w={{ base: '200px', lg: '300px'}}
                            h="75px"
                            borderRadius="lg"
                            fontSize={{ base: 'lg', lg: 'xl'}}
                            fontWeight="bold"
                            whiteSpace="normal"
                            textAlign="center"
                            color="white"
                            _hover={{ bg: "laguna.700"}}
                        >
                            <HStack
                                textTransform="uppercase"
                            >
                                <FaArrowRight />
                                Únete al reto
                            </HStack>
                        </Button>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}

export default Hero;