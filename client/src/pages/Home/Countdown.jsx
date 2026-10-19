import { useCountdown } from "../../hooks/useCountdown";
import { useNavigate } from "react-router-dom";
import { 
    Badge,
    Box,
    Flex,
    Heading,
    HStack,
    Icon,
    SimpleGrid,
    Text,
    VStack
} from "@chakra-ui/react";
import { FaRegMap } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendar2DateFill } from "react-icons/bs"

const formatTwoDigits = (number) => String(number).padStart(2, '0');

function Countdown({ targetDate = "2026-11-29T08:00:00"}) {
    const navigate = useNavigate();
    const { days, hours, minutes, seconds, isCompleted } = useCountdown(targetDate);

    const timeBlocks = [
        { label: "Días", value: days},
        { label: "Horas", value: hours},
        { label: "Minutos", value: minutes},
        { label: "Segundos", value: seconds},
    ];

    return (
        <Box
            w={{ base: '90%', lg: '100%'}}
            maxW="900px"
            mx="auto"
            my={8}
            p={{ base: 6, md: 8}}
            bg="teal"
            color="white"
            borderRadius="2xl"
            boxShadow="0px 10px 25px rgba(0, 0, 0, 0.5)"
            textAlign="left"
        >
            <VStack gap={6}
                w="100%"
            >
                <HStack
                    w="100%"
                >
                    <Flex 
                        direction={{ base: 'column', lg: 'row'}}
                        justifyContent={{ lg: 'space-between'}}
                        gap={2}
                        w="100%"
                        alignItems="flex-start"
                    >
                        <Box>
                            <Heading
                                as='h3'
                                fontSize={{ base: "xl", md: "2xl" }}
                                fontWeight="bold"
                                letterSpacing="1px"
                                textTransform="uppercase"
                                color="laguna"
                                fontFamily="heading"
                            >
                                RETO Z 2026 · 3.ª edición
                            </Heading>
                            <HStack
                                as="span"
                                fontStyle="italic"
                            >
                                <HStack>
                                    <Icon as={BsCalendar2DateFill} boxSize={{ base: 3}} />
                                    <Text
                                        fontSize={{ base: 'xs'}}
                                    >
                                        29 De Noviembre
                                    </Text>
                                </HStack>
                                ·
                                <HStack>
                                    <Icon as={FaLocationDot} boxSize={{ base: 3}} />
                                    <Text
                                        fontSize={{ base: 'xs'}}
                                    >
                                        Recorrido del Cerro Z
                                    </Text>
                                </HStack>
                            </HStack>
                            <Text
                                fontSize="sm"
                            >
                                {isCompleted ? "El evento ha comenzado" : "Cada vez falta menos:"}
                            </Text>
                        </Box>
                        <Badge
                            p={{ base: 2, lg: 1.5}}
                            bg="presa"
                            color="white"
                            textTransform="uppercase"
                            fontSize={{ base: 'xs', lg: 'sm'}}
                            textAlign="center"
                            borderRadius="2xl"
                        >
                            Inscripciones abiertas
                        </Badge>
                    </Flex>
                </HStack>

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

                <HStack
                    w="full"
                    gap={{ base: 2, lg: 6}}
                    flexDir={{ base: "column", lg: "row"}}
                    alignContent="center"
                    justifyContent="center"
                >
                    <HStack
                        cursor='pointer'
                        onClick={() => navigate('/rutas')}
                        _hover={{ bg: 'laguna.600', transform: "translateY(-2px)" }}
                        transition="all 0.2s"
                        px={4}
                        py={2}
                        bg="laguna"
                        borderRadius="xl"
                        fontWeight="bold"
                    >
                        <FaRegMap size={26}/>
                        <Text
                            fontSize="xl"
                            fontFamily="heading"
                            letterSpacing="1px"
                        >
                            VER RUTA DE 25 KM
                        </Text>
                    </HStack>
                    <HStack
                        cursor='pointer'
                        onClick={() => navigate('/rutas')}
                        _hover={{ bg: 'laguna.600', transform: "translateY(-2px)" }}
                        transition="all 0.2s"
                        px={4}
                        py={2}
                        bg="laguna"
                        borderRadius="xl"
                        fontWeight="bold"
                    >
                        <FaRegMap size={26}/>
                        <Text
                            fontSize="xl"
                            fontFamily="heading"
                            letterSpacing="1px"
                        >
                            VER RUTA DE 40 KM
                        </Text>
                    </HStack>
                </HStack>
            </VStack>
        </Box>
    )
}

export default Countdown;