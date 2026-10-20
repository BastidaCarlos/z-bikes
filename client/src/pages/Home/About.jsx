import { 
    Box,
    Circle,
    Heading,
    Text,
    SimpleGrid 
} from "@chakra-ui/react";
import { LuUsers, LuMountain, LuTrophy } from "react-icons/lu"

function About() {
    return (
        <Box
            w="100%"
            maxW={{ base: '100%', lg: "900px", xl: "1200px" }}
            mx="auto"
            my={6}
            px={6}
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
                Sobre Z-Bikes
            </Heading>

            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                w="100%"
                mx="auto"
                gap={6}
                mt={4}
                alignItems="center"
            >
                <Box>
                    <Text as="h4" fontSize="xl">
                        En Z-Bikes no rodamos solos.
                    </Text>
                    <Text as="p">
                        Somos una comunidad de ciclismo de montaña en San Juan Zitlaltepec para quienes disfrutan sudar la subida, recorrer veredas y compartir el camino.
                        Nos une la emoción del terreno y el compañerismo. En nuestras rodadas, nadie se queda atrás: nos ayudamos a reparar una ponchadura y celebramos juntos al llegar a la cima. Buscamos que más personas descubran el MTB, encuentren su ritmo y desafíen sus límites con el respaldo de un equipo.
                    </Text>
                </Box>
                <SimpleGrid
                    columns={{ base: 2, md: 3}}
                    gap={4}
                    w="100%"
                    mx="auto"
                >
                    <Box
                        display="flex"
                        flexDir="column"
                        p={4}
                        alignItems="center"
                        border="solid"
                        borderColor="teal"
                        borderRadius="2xl"
                        textAlign="center"
                    >
                        <Circle
                            bg="bosque"
                            size="40px"
                            color="white"
                        >
                            <LuUsers size={22}/>
                        </Circle>
                        <Text
                            as="span"
                            fontSize="lg"
                            fontWeight="bold"
                        >
                            50
                        </Text>
                        <Text
                            fontSize="lg"
                            fontWeight="medium"
                        >
                            Integrantes
                        </Text>
                    </Box>

                    <Box
                        display="flex"
                        flexDir="column"
                        p={4}
                        alignItems="center"
                        border="solid"
                        borderColor="teal"
                        borderRadius="2xl"
                        textAlign="center"
                    >
                        <Circle
                            bg="bosque"
                            size="40px"
                            color="white"
                        >
                            <LuMountain size={22}/>
                        </Circle>
                        <Text
                            as="span"
                            fontSize="lg"
                            fontWeight="bold"
                        >
                            4
                        </Text>
                        <Text
                            fontSize="lg"
                            fontWeight="medium"
                            textAlign="center"
                        >
                            Años activos
                        </Text>
                    </Box>

                    <Box
                        gridColumn={{ base: "span 2", md: "span 1"}}
                        display="flex"
                        flexDir="column"
                        p={4}
                        alignItems="center"
                        border="solid"
                        borderColor="teal"
                        borderRadius="2xl"
                        textAlign="center"
                    >
                        <Circle
                            bg="bosque"
                            size="40px"
                            color="white"
                        >
                            <LuTrophy size={22}/>
                        </Circle>
                        <Text
                            as="span"
                            fontSize="lg"
                            fontWeight="bold"
                        >
                            2
                        </Text>
                        <Text
                            fontSize="lg"
                            fontWeight="medium"
                        >
                            Ediciones realizadas
                        </Text>
                    </Box>
                </SimpleGrid>
            </SimpleGrid>
        </Box>
    )
}

export default About; 