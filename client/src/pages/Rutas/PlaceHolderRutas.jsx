import { 
    Box, 
    Heading,
    Icon,
    Text,
    VStack, 
} from "@chakra-ui/react";
import { FaMap } from "react-icons/fa";

function PlaceHolderRutas() {
    return (
        <Box as="section" w="100%" p={{ base: 4, lg: 12}}>
            <VStack 
                w="100%"
                maxW={{ base: '100%', lg: '700px', xl: '900px'}}
                mx="auto"
                bg="teal"
                color="white"
                borderRadius="2xl"
                p={6}
            >
                <Icon 
                    as={FaMap} 
                    boxSize="60px"
                />
                <Heading w="100%" textAlign="center">
                    Próximamente podrás explorar los recorridos
                </Heading>
                <Text textAlign="center">
                    Publicaremos aquí los mapas y detalles de las rutas de 25 y 40 km del Reto Z 2026. Vuelve a consultar esta sección antes del reto.
                </Text>
                <Text as="span" color="cerro.300" fontStyle="italic" textAlign="center">
                    Nos vemos el 29 de noviembre de 2026 en San Juan Zitlaltepec.
                </Text>
            </VStack>
        </Box>
    )
}

export default PlaceHolderRutas;