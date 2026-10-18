import { IoCalendarNumberSharp } from "react-icons/io5"
import { PiShoppingBagOpenFill } from "react-icons/pi"
import { FaMedal, FaBottleWater, FaBriefcaseMedical, FaStopwatch, FaGift } from "react-icons/fa6"
import { FaMapSigns } from "react-icons/fa"
import { 
    Box,
    Circle,
    Heading,
    Icon, 
    SimpleGrid,
    Text,
    VStack,
} from "@chakra-ui/react"

const inscriptionIncludes = [
    { icon: FaStopwatch, label: 'Cronometraje', description: 'No tienes que llegar primero para medirte. Registra tu tiempo y conoce tu resultado.' },
    { icon: FaMapSigns, label: 'Señalización de rutas', description: 'Cada ruta cuenta con indicaciones para ayudarte a seguir el recorrido.' },
    { icon: FaBottleWater, label: 'Hidratación', description: 'Puntos para reponer líquidos a lo largo de las rutas.' },
    { icon: FaBriefcaseMedical, label: 'Servicio Médico', description: 'Contamos con atención ante incidentes durante la ruta.' },
    { icon: IoCalendarNumberSharp, label: 'Número de participante', description: 'Tu número y tu chip de cronometraje, listos para competir.' },
    { icon: FaMedal, label: 'Medalla', description: 'Llévate a casa un recuerdo de tu participación en el reto.' },
    { icon: FaGift, label: 'Rifas', description: 'Participa por cascos, pedales y accesorios. ¿El premio mayor? Una bicicleta.' },
]

function Includes() {
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
                    ¿Qué incluye tu inscripción?
                </Heading>
                <Text>
                    Por $300 MXN, ven a medirte en la primera edición 100 % cronometrada del Reto Z-Bikes. Tu inscripción incluye los siguientes servicios y beneficios para vivir el desafío.
                </Text>
                <SimpleGrid
                    columns={{ base: 2, md: 3, lg: 4 }}
                    gap={{ base: 6, md: 8}}
                    maxW={{ base: '100%', lg: '700px', xl: '900px'}}
                >
                    {inscriptionIncludes.map((item) => (
                        <VStack 
                            key={item.label}
                            gap={3}
                            align='center'
                            textAlign="center"
                            p={4}
                            border="2px solid"
                            borderRadius="2xl"
                            borderColor="laguna"
                            boxShadow="lg"
                        >
                            <Circle
                                size={{ base: '64px', lg: '72px'}}
                                bg="teal"
                                color="white"
                            >
                                <Icon as={item.icon} boxSize={{ base: 6, md: 8 }}/>
                            </Circle>
                            <Text
                                fontSize={{ base: 'md', md: 'lg'}}
                                fontWeight="semibold"
                                fontFamily="heading"
                                textTransform="uppercase"
                            >
                                {item.label}
                            </Text>
                            <Text
                                fontSize={{ base: 'xs', md: 'sm'}}
                            >
                                {item.description}
                            </Text>
                        </VStack>
                    ))}
                </SimpleGrid>
                
            </VStack>
        </Box>
    )
}

export default Includes;