import { useState, useEffect } from "react";
import { getResumen } from "../../../services/adminService";

import Logo from "../../../assets/Logo.svg"
import { FaUsers, FaIdBadge, FaBicycle } from "react-icons/fa";
import { 
    Alert,
    Box,
    Flex,
    Heading,
    Image,
    SimpleGrid,
    Spinner,
    Tabs,
    Text,
    VStack 
} from "@chakra-ui/react";
import AdminResults from "../Resultados/AdminResults";
import AdminStaff from "../Staff/AdminStaff";
import AdminBicycles from "../Bicicletas/AdminBicycles";

function AdminDashboard() {
    const [ resumen, setResumen ] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const resumenData = async () => {
        setIsLoading(true)
        setError(null);
        try {
            const data = await getResumen();
            const backendResumen = data.resumen || {}

            setResumen({
                totalResultados: backendResumen.resultados?.totalCargados ?? 0,
                totalBicicletas: backendResumen.bicicletas?.totalRegistradas ?? 0,
                totalStaff: backendResumen.staff?.total ?? 0
            })
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        resumenData();
    }, [])

    const statsCards = [
        {
            id: 'resultados',
            title: 'Total Resultados',
            value: resumen.totalResultados,
            icon: <FaUsers size="24px" />
        },
        {
            id: 'staff',
            title: 'Staff Total',
            value: resumen.totalStaff,
            icon: <FaIdBadge size="24px" />
        },
        {
            id: 'bicicletas',
            title: 'Bicicletas Registradas',
            value: resumen.totalBicicletas,
            icon: <FaBicycle size="24px" />
        },
    ]

    return (
        <Box as="section" w="100%" maxW={{ base: '100%', lg: "900px", xl: '1200px'}} mx="auto">
            <VStack
                minH="50vh"
                align="center"
                justify="center"
                mt={16}
                p={4}
            >
                <Image src={Logo} alt="Z-Bikes Logo"/>
                <Heading
                    as="h1"
                    fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                    fontFamily="heading"
                    fontWeight="extrabold"
                    textTransform="uppercase"
                    color="laguna"
                    letterSpacing="wide"
                >
                    Administrador Z-Bikes
                </Heading>
                {error && (
                    <Alert.Root status="error">
                        <Alert.Indicator />
                        <Alert.Title>Error</Alert.Title>
                        <Alert.Description>{error}</Alert.Description>
                    </Alert.Root>
                )}
                {isLoading && (
                    <VStack>
                        <Spinner color="teal"/>
                        <Text>Cargando Resumen...</Text>
                    </VStack>
                )}
                {!isLoading && !error && (
                    <SimpleGrid
                        columns={3}
                        gap={4}
                        mt={4}
                        alignItems="stretch"
                    >
                        {statsCards.map((card) => (
                            <Flex
                                key={card.id}
                                p={5}
                                shadow="md"
                                borderRadius="xl"
                                textAlign="center"
                                h="full"
                                bg="teal"
                                direction="column"
                                justifyContent="center"
                                color="white"
                            >
                                <VStack
                                    gap={3}
                                    h="full"
                                    justify="space-between"
                                >
                                    {card.icon}
                                    <Text
                                        fontWeight="bold"
                                        fontSize={{ base: 'sm', lg: 'md'}}
                                    >
                                        {card.title}
                                    </Text>
                                    <Text
                                        fontSize="2xl"
                                        fontWeight="bold"
                                        fontFamily="heading"
                                        color="trail"
                                    >
                                        {card.value}
                                    </Text>
                                </VStack>
                            </Flex>
                        ))}
                    </SimpleGrid>
                )}
            </VStack>
            <Flex
                w="full"
                maxW={{ base: '100%', lg: '900px', xl: '1200px'}}
                mx="auto"
                mb={6}
                direction="column"
                align="center"
                justify="center"
            >
                <Tabs.Root variant="subtle" lazyMount unmountOnExit w="100%" defaultValue="resultados">
                    <Tabs.List justifyContent="center" w="full" gap={4}>
                        <Tabs.Trigger value="resultados" bg="teal" color="white" _selected={{ bg: 'laguna', color: 'white'}}>Resultados</Tabs.Trigger>
                        <Tabs.Trigger value="staff" bg="teal" color="white" _selected={{ bg: 'laguna', color: 'white'}}>Staff</Tabs.Trigger>
                        <Tabs.Trigger value="bicicletas" bg="teal" color="white" _selected={{ bg: 'laguna', color: 'white'}}>Bicicletas</Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value="resultados"><AdminResults /></Tabs.Content>
                    <Tabs.Content value="staff"><AdminStaff /></Tabs.Content>
                    <Tabs.Content value="bicicletas"><AdminBicycles /></Tabs.Content>
                </Tabs.Root>
            </Flex>
        </Box>
    )
}

export default AdminDashboard;