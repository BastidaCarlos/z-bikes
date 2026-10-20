import { 
    Badge,
    Box, 
    Flex,
    Heading,
    HStack,
    Image,
    Text,
    VStack 
} from "@chakra-ui/react";
import CerroImage7 from "../../assets/CerroImage7.webp"
import LagunaImage from "../../assets/LagunaImage.webp"

function Territory() {
    return (
        <Box as="section" w="100%" p={{ base: 8, lg: 12}}>
            <VStack
                alignItems="flex-start"
                w="100%"
                maxW={{ base: '100%', lg: '900px', xl: '1200px' }}
                mx="auto"
                px={{ base: 4, lg: 6 }}
                gap={{ base: 8, lg: 12 }}
            >
                <VStack align="flex-start" gap={2}>
                    <Heading
                        as="h2"
                        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                        fontFamily="heading"
                        fontWeight="extrabold"
                        textTransform="uppercase"
                        color="laguna"
                        letterSpacing="wide"
                    >
                        Nuestro Territorio
                    </Heading>
                    <Text color="gray.500" fontSize={{ base: 'sm', md: 'md'}}>
                        En San Juan Zitlaltepec, cada ruta tiene su propio reto: el terreno accidentado del Cerro Z pone a prueba tu técnica; los caminos de la Laguna de Zumpango te invitan a encontrar tu ritmo y descubrir cuánto puedes sostenerlo.
                    </Text>
                </VStack>
                <Flex
                    direction={{ base: 'column', lg: 'row'}}
                    w="100%"
                    gap={{ base: 6, lg: 10}}
                    align="center"
                >
                    <VStack
                        align="flex-start"
                        gap={3}
                        flex={1}
                    >
                        <HStack gap={2}>
                            <Badge bg="teal" color="white" borderRadius="full" px={3}>
                                MTB / Singletrack
                            </Badge>
                            <Badge bg="trail" borderRadius="full" px={3} color="teal">
                                Todos los niveles
                            </Badge>
                        </HStack>
                        <Heading 
                            as="h3" 
                            color="presa"
                            fontFamily="heading"
                            fontWeight="bold"
                            textTransform="uppercase"
                            fontSize="2xl"
                        >
                            Cerro Z
                        </Heading>
                        <Text color="gray.600" lineHeight="relaxed">
                            En el Cerro Z, cada subida y cada bajada te plantea un reto distinto. Las piedras sueltas y las rocas grandes forman parte de los caminos y las veredas. Aquí toca mirar por dónde pasas, ajustar el paso y encontrar cómo avanzar entre los cambios del terreno.
                            <br />
                            Las subidas piden piernas, pulmones y paciencia. Trabajas fuerza y resistencia mientras buscas mantener la tracción y llegar al siguiente tramo. Una vez arriba, viene otro desafío: leer la bajada, elegir tu línea y poner a prueba tu técnica y el control.
                        </Text>
                        <Text color="gray.600" lineHeight="relaxed">
                            Y cuando empiezas a reconocer el camino, el suelo cambia. La tierra compacta da paso a zonas sueltas o arenosas que te hacen prestar atención de nuevo. Parte del gusto de rodar aquí está en eso: conocer mejor el cerro y descubrir cómo respondes en cada sección.
                            <br />
                            Tómate tu tiempo en los tramos difíciles. Si necesitas bajarte y seguir a pie, también es parte de la rodada. Ya habrá ocasión de volver y probar lo que antes te costaba. Ven a conocer el Cerro Z a tu ritmo; cuando salimos con Z-Bikes, siempre hay alguien dispuesto a esperarte.
                        </Text>
                    </VStack>
                    <Box flex="1" w="100%">
                    <Image 
                        src={CerroImage7}
                        alt="Vista del Cerro Z"
                        borderRadius="2xl"
                        boxShadow="lg"
                        w="100%"
                        h={{ base: '230px', md: '320px'}}
                        objectFit='cover'
                    />
                    </Box>
                </Flex>
                <Flex
                    direction={{ base: 'column', lg: 'row-reverse'}}
                    w="100%"
                    gap={{ base: 6, lg: 10}}
                    align="center"
                >
                    <VStack
                        align="flex-start"
                        gap={3}
                        flex={1}
                    >
                        <HStack gap={2}>
                            <Badge bg="teal" color="white" borderRadius="full" px={3}>
                                Fondo / Recreativo
                            </Badge>
                            <Badge bg="trail" borderRadius="full" px={3} color="teal">
                                Todos los niveles
                            </Badge>
                        </HStack>
                        <Heading 
                            as="h3" 
                            color="presa"
                            fontFamily="heading"
                            fontWeight="bold"
                            textTransform="uppercase"
                            fontSize={{ base: 'xl', md: '2xl'}}
                        >
                            Laguna de Zumpango
                        </Heading>
                        <Text color="gray.600" lineHeight="relaxed">
                            ¿Te gusta rodar parejo? Date una vuelta por la Laguna de Zumpango: cerca de 20 km casi planos para encontrar tu ritmo y trabajar cadencia, velocidad y resistencia. Aquí puedes concentrarte en el pedaleo, regular el esfuerzo y descubrir cuánto tiempo consigues mantener el paso.
                        </Text>
                        <Text color="gray.600" lineHeight="relaxed">
                            Empieza a tu ritmo y deja que las piernas entren en movimiento. Si hoy buscas resistencia, intenta sostener un esfuerzo constante durante más tiempo. Si quieres trabajar cadencia, presta atención a cómo pedaleas y busca un movimiento continuo. Y si toca probar velocidad, elige un paso que puedas mantener sin gastarte todo desde el principio.
                        </Text>
                        <Text color="gray.600" lineHeight="relaxed">
                            El terreno cambia poco de altura, pero cada salida puede plantearte una meta distinta: llegar más lejos, mantener mejor el ritmo o terminar con más energía que la vez anterior. Tú eliges qué quieres trabajar y hasta dónde llevar el esfuerzo.
                            <br />
                            También hay días para rodar con calma y compartir el camino con los compañeros. Ven a conocer la laguna, encuentra tu paso y vuelve con una nueva meta para la siguiente rodada.
                        </Text>
                    </VStack>
                    <Box
                        flex={1}
                        w="100"
                    >
                        <Image 
                            src={LagunaImage}
                            alt="Ruta alrededor de La Laguna"
                            borderRadius="xl"
                            boxShadow="lg"
                            w="100%"
                            h={{ base: '230px', md: '320px'}}
                            objectFit="cover"
                        />
                    </Box>
                </Flex>
            </VStack>
        </Box>
    )
}

export default Territory;