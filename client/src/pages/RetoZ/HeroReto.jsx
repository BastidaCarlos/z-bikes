import { 
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Separator,
    SimpleGrid,
    Text,
    VStack 
} from "@chakra-ui/react";
import HeroImage from "../../assets/HeroReto.webp"
import { FaMoneyBillWave } from "react-icons/fa";
import { LuMapPinned, LuBike, LuClock, LuUsersRound } from "react-icons/lu";
import { useCountdown } from "../../hooks/useCountdown";

const formatTwoDigits = (number) => String(number).padStart(2, '0');

function HeroReto() {
    const currentYear = new Date().getFullYear();
    const { days, hours, minutes, seconds } = useCountdown("2026-11-29T08:00:00");

    const timeBlocks = [
        { label: "Días", value: days},
        { label: "Horas", value: hours},
        { label: "Minutos", value: minutes},
        { label: "Segundos", value: seconds},
    ]

    return (
        <Box as="section" w="100%">
            <Box
                position="relative"
                minH={{ sm: '120vh', base: '100vh'}}
                w="100%"
                maxW="100%"
                bgImage={`url(${HeroImage})`}
                bgSize="cover"
                backgroundPosition={{ base: 'initial', lg: 'center'}}
            >
                <Box
                    position="absolute"
                    inset={0}
                    bg="blackAlpha.700"
                >
                    <VStack
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        gap={0}
                    >
                        <Flex
                            maxW={{ base: '100%', lg: "900px", xl: '1200px'}}
                            minH="70%"
                            mx='auto'
                            alignItems="center"
                            justifyContent="center"
                            flexDir={{ base: 'column', lg: 'row-reverse'}}
                            px={6}
                            gap={{ base: 8, lg: 20 }}
                        >
                            <VStack
                                color="white"
                                w={{ base: "100%", lg: "100%"}}
                                alignItems={{ base: 'center', lg: "flex-start"}}
                                textAlign={{ base: 'center', lg: "left"}}
                                gap={6}
                            >
                                <Heading 
                                    as="h1"
                                    fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                                    fontFamily="heading"
                                    fontWeight="extrabold"
                                    textTransform="uppercase"
                                    color="white"
                                    letterSpacing="wide"
                                >
                                    Reto Z-bikes {currentYear}
                                </Heading>
                                <Text 
                                    as="span"
                                    textTransform="uppercase"
                                    fontWeight="medium"
                                    letterSpacing="0.5px"
                                >
                                    3.ª edición
                                </Text>
                                <Text 
                                    as="span"
                                    textTransform="uppercase"
                                    fontWeight="medium"
                                    letterSpacing="0.5px"
                                >
                                    Pon a prueba tu técnica y resistencia. ¿Vas por los 25 o por los 40 km?
                                </Text>
                                <VStack
                                    align="flex-start"
                                    gap={0}
                                >
                                    <Text 
                                        as="span"
                                        textTransform="uppercase"
                                        fontWeight="medium"
                                        letterSpacing="0.5px"
                                    >
                                        29 Noviembre | {currentYear}
                                    </Text>
                                    <Text 
                                        as="span"
                                        textTransform="uppercase"
                                        fontWeight="medium"
                                        letterSpacing="0.5px"
                                    >
                                        Nos vemos en la salida en:
                                    </Text>
                                </VStack>
                                <SimpleGrid 
                                    columns={4}
                                    gap={{ base: 2, sm: 4 }}
                                    w="100%"
                                >
                                    {timeBlocks.map((block) => (
                                        <Flex
                                            key={block.label}
                                            direction="column"
                                            align="center"
                                            justify="center"
                                            py={{ base: 3, md: 4}}
                                            px={{ base: 1, md: 2}}
                                            bg="whiteAlpha.100"
                                            borderRadius="xl"
                                            border='1px solid'
                                            borderColor="whiteAlpha.200"
                                        >
                                            <Text
                                                fontSize={{ sm: '2xl', base: '3xl', md: '4xl' }}
                                                fontWeight="bold"
                                                lineHeight="1"
                                                color="trail"
                                            >
                                                {formatTwoDigits(block.value)}
                                            </Text>
                                            <Text
                                                fontSize={{ base: 'xs', md: 'sm'}}
                                                color="whiteAlpha.900"
                                                textTransform="uppercase"
                                                mt={2}
                                                fontWeight="medium"
                                            >
                                                {block.label}
                                            </Text>
                                        </Flex>
                                    ))}
                                </SimpleGrid>

                                <Button
                                    as="a"
                                    variant="solid"
                                    bg="laguna"
                                    target="_blank" 
                                    rel="noopener noreferrer"   
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfK2DTgveIHUx-Y03_Bt7WKB0oZOTehXiuicsR_hy4Ncy_x6Q/viewform?pli=1"
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
                                        Inscríbete al reto
                                    </HStack>
                                </Button>
                            </VStack>

                            <Separator 
                                orientation={{ base: 'horizontal', lg: 'vertical'}}
                                h={{ base: 'auto', lg: '350px'}}
                                w={{ base: '100%', lg: 'auto'}}
                            />

                            <VStack
                                align={{ base: 'center', lg: "flex-end"}}
                                w="100%"
                            >
                                <HStack
                                    textTransform="uppercase"
                                    color="white"
                                    fontWeight="semibold"
                                    fontSize="xl"
                                    fontFamily="heading"
                                    letterSpacing="wide"
                                >
                                    <LuMapPinned />
                                    san juan Zitlaltepec
                                </HStack>
                                <HStack
                                    textTransform="uppercase"
                                    color="white"
                                    fontWeight="semibold"
                                    fontSize="xl"
                                    fontFamily="heading"
                                    letterSpacing="wide"
                                >
                                    <LuBike />
                                    Rutas de 25 y 40 Km
                                </HStack>
                                <HStack
                                    textTransform="uppercase"
                                    color="white"
                                    fontWeight="semibold"
                                    fontSize="xl"
                                    fontFamily="heading"
                                    letterSpacing="wide"
                                >
                                    <LuClock />
                                    primera edición 100 % cronometrada
                                </HStack>
                                <HStack
                                    textTransform="uppercase"
                                    color="white"
                                    fontWeight="semibold"
                                    fontSize="xl"
                                    fontFamily="heading"
                                    letterSpacing="wide"
                                >
                                    <FaMoneyBillWave />
                                    Inscripción: $300 MXn
                                </HStack>
                                <HStack
                                    textTransform="uppercase"
                                    color="white"
                                    fontWeight="semibold"
                                    fontSize="xl"
                                    fontFamily="heading"
                                    letterSpacing="wide"
                                >
                                    <LuUsersRound />
                                    Cupo limitado
                                </HStack>
                            </VStack>
                        </Flex>
                        <Text
                            textAlign="center"
                            textTransform="uppercase"
                            textWrap="wrap"
                            p={4}
                            color="white"
                            fontWeight="bold"
                            fontSize={{ base: 'sm', lg: 'md'}}
                        >
                            Todas las rutas requieren experiencia previa en MTB
                        </Text>
                    </VStack>
                </Box>
            </Box>
        </Box>
    )
}

export default HeroReto;