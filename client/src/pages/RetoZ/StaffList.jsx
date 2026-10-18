import { useState, useEffect } from "react";
import { getStaff } from "../../services/staffServices";
import { 
    Alert,
    Avatar,
    Box, 
    Card,
    EmptyState,
    Heading,
    Image,
    SimpleGrid,
    Spinner,
    Text,
    VStack 
} from "@chakra-ui/react";
import { FaIdBadge } from "react-icons/fa";

function StaffList() {
    const [ listStaff, setListStaff ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState('');

    const getListStaff = async () => {
        setIsLoading(true);
        setError('');
        
        try {
            const response = await getStaff();
            setListStaff(response.staffList || []);
        } catch (error) {
            setError(error.message || "Ocurrio un error al cargar los datos")
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getListStaff();
    }, [])

    return (
        <Box as="section" p={{ base: 4, lg: 12 }}>
            <VStack
                w="100%"
                maxW="1200px"
                mx="auto"
                my={8}
                color="white"
                borderRadius="2xl"
                textAlign="left"
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
                    Conoce Nuestro staff
                </Heading>

                {isLoading && (
                    <VStack
                        w="100%"
                        maxW={{ base: '100%', lg: '900px'}}
                        mx="auto"
                    >
                        <Spinner colorPalette="teal"/>
                        <Text>Cargando Staff...</Text>
                    </VStack>
                )}

                {error && (
                    <Alert.Root status="error">
                        <Alert.Indicator />
                        <Alert.Content>
                            <Alert.Title>Error</Alert.Title>
                            <Alert.Description>
                                {error}
                            </Alert.Description>
                        </Alert.Content>
                    </Alert.Root>
                )}

                {!isLoading && !error && listStaff.length === 0 && (
                    <EmptyState.Root>
                        <EmptyState.Content>
                            <EmptyState.Indicator>
                                <FaIdBadge />
                            </EmptyState.Indicator>
                            <VStack textAlign="center">
                                <EmptyState.Title color="teal">Aún no hay Staff</EmptyState.Title>
                                <EmptyState.Description>
                                    En breve se agregará el listado del Staff
                                </EmptyState.Description>
                            </VStack>
                        </EmptyState.Content>
                    </EmptyState.Root>
                )}

                {!isLoading && !error && listStaff.length > 0 && (
                    <SimpleGrid
                        columns={{ base: 1, lg: 3}}
                        w="100%"
                        maxW={{ base: '100%', lg: '700px', xl: '900px'}}
                        gap={6}
                    >
                        {listStaff.map((member) => (
                            <Card.Root 
                                key={member._id}
                                borderRadius="2xl"
                                p={6}
                                bg="teal"
                                color="white"
                                textAlign="center"
                            >
                                <Avatar.Root boxSize="150px" mx="auto">
                                    <Avatar.Fallback>{member.name}</Avatar.Fallback>
                                    <Avatar.Image src={member.image} />
                                </Avatar.Root>
                                <Card.Body>
                                    <Card.Title color="trail" fontWeight="bold" textTransform="uppercase" fontFamily="heading" letterSpacing="wide" fontSize="2xl">{member.name}</Card.Title>
                                    <Card.Description color="cerro.100" fontWeight="semibold" fontSize="md">
                                        {member.rol}
                                    </Card.Description>
                                </Card.Body>
                            </Card.Root>
                        ))}
                    </SimpleGrid>
                )}
            </VStack>
        </Box>
    )
}

export default StaffList;