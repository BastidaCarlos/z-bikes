import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../../services/authServices";
import Logo from "../../../assets/Logo.svg"
import { 
    Alert,
    Box,
    Button,
    Field,
    Flex,
    Heading,
    Input,
    InputGroup,
    VStack,
    HStack, 
} from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function AdminLogin() {
    const navigate = useNavigate();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ isSubmiting, setIsSubmiting ] = useState(false);
    const [ error, setError ] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
           setError("Todos los campos son requeridos") 
           return;
        }

        setIsSubmiting(true)
        setError('')
        
        try {
            await loginAdmin({ email, password});
            navigate('/admin/dashboard')
        } catch (error) {
            setError(error.response?.data?.error || error.message || "Credenciales incorrectas");
        } finally { 
            setIsSubmiting(false)
        }
    }

    return (
        <Flex
            w="100%"
            minH="80vh"
            maxW={{ base: '100%', lg: '900px', xl: '1200px'}}
            mx="auto"
            align='center'
            p={6}
            justify="center"
        >
            <VStack
                w="100%"
                bg="teal"
                p={4}
                borderRadius="2xl"
                color="white"
            >
                <Box
                    boxSize="150px"
                    bg="white"
                    style={{
                        maskImage: `url(${Logo})`,
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        maskSize: "contain",
                        WebkitMaskImage: `url(${Logo})`,
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        WebkitMaskSize: "contain",
                    }}
                >
                </Box>
                <Heading
                    as="h1"
                    fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                    fontFamily="heading"
                    fontWeight="extrabold"
                    textTransform="uppercase"
                    color="white"
                    letterSpacing="wide"
                >
                    Administrador
                </Heading>
                <VStack 
                    as="form"
                    onSubmit={handleSubmit}
                    w={{ base: '100%', lg: '50%'}}
                    mt={4}
                    gap={4}
                >
                    <Field.Root>
                        <Field.Label>Email:</Field.Label>
                        <InputGroup startElement={<MdMail />}>
                            <Input 
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                variant="solid"
                                placeholder="admin@email.com"
                                color="black"
                            />
                        </InputGroup>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Contraseña:</Field.Label>
                        <InputGroup startElement={<FaLock />}>
                            <Input 
                                name="password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                variant="solid"
                                placeholder="********"
                                color="black"
                            />
                        </InputGroup>
                    </Field.Root>

                    {error && (
                        <Alert.Root status="error">
                            <Alert.Indicator />
                            <VStack
                                align="flex-start"
                            >
                                <Alert.Title>Error</Alert.Title>
                                <Alert.Description>
                                    {error}
                                </Alert.Description>
                            </VStack>
                        </Alert.Root>
                    )} 
                    <HStack>
                        <Button
                            bg="laguna"
                            color="white"
                            type="submit"
                            disabled={isSubmiting}
                        >
                            Iniciar Sesión
                        </Button>
                        <Button
                            colorPalette="red"
                            onClick={() => navigate('/')}
                            disabled={isSubmiting}
                        >
                            Cancelar
                        </Button>
                    </HStack>
                </VStack>
            </VStack>
        </Flex>
    )
}

export default AdminLogin;