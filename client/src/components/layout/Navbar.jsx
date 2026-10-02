import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { 
    Box,
    Button,
    Drawer,
    Flex,
    HStack,
    IconButton,
    Image,
    Link as ChakraLink,
    Spacer,
    Text,
    VStack
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"
import zbikesLogo from "../../assets/zbikesLogo.svg"

function Navbar() {
    const [ open, setOpen ] = useState(false);

    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <Box as="header">
            <Flex
                align="center"
                px={{ base: '4', md: '6', lg: '8' }}
                py={{ base: '3', md: '5' }}
                maxW={{ base: '100%', lg: '900px', xl: '1200px' }}
                mx="auto"
            >
                <Box>
                    <Image 
                        src={zbikesLogo}
                        alt="Z-Bike's Logo"
                        width="150px"
                        height="60px"
                        objectFit="contain"
                    />
                </Box>

                <Spacer />

                <HStack
                    as="nav"
                    display={{ base: 'none', lg: "flex"}}
                    gap={{ lg: '6', xl: '8'}}
                >
                    <ChakraLink
                        asChild
                        fontWeight={isActive('/') ? 'bold' : 'medium'}
                        bg={isActive('/') ? 'teal' : 'transparent'}
                        p={isActive('/') ? '2' : 0}
                        borderRadius={isActive('/') ? 'sm' : 'none'}
                        color={isActive('/') ? 'trail' : 'black'}
                        _hover={{ color: 'trail', textDecoration: "none"}}
                    >
                        <Link to={'/'}>Inicio</Link>
                    </ChakraLink>

                    <ChakraLink
                        asChild
                        fontWeight={isActive('/comunidad') ? 'bold' : 'medium'}
                        bg={isActive('/comunidad') ? 'teal' : 'transparent'}
                        p={isActive('/comunidad') ? '2' : 0}
                        borderRadius={isActive('/comunidad') ? 'sm' : 'none'}
                        color={isActive('/comunidad') ? 'trail' : 'black'}
                        _hover={{ color: 'trail', textDecoration: "none"}}
                    >
                        <Link to={'/comunidad'}>Comunidad</Link>
                    </ChakraLink>
                    
                    <ChakraLink
                        asChild
                        fontWeight={isActive('/reto-z') ? 'bold' : 'medium'}
                        bg={isActive('/reto-z') ? 'teal' : 'transparent'}
                        p={isActive('/reto-z') ? '2' : 0}
                        borderRadius={isActive('/reto-z') ? 'sm' : 'none'}
                        color={isActive('/reto-z') ? 'trail' : 'black'}
                        _hover={{ color: 'trail', textDecoration: "none"}}
                    >
                        <Link to={'/reto-z'}>Reto Z</Link>
                    </ChakraLink>

                    <ChakraLink
                        asChild
                        fontWeight={isActive('/rutas') ? 'bold' : 'medium'}
                        bg={isActive('/rutas') ? 'teal' : 'transparent'}
                        p={isActive('/rutas') ? '2' : 0}
                        borderRadius={isActive('/rutas') ? 'sm' : 'none'}
                        color={isActive('/rutas') ? 'trail' : 'black'}
                        _hover={{ color: 'trail', textDecoration: "none"}}
                    >
                        <Link to={'/rutas'}>Rutas</Link>
                    </ChakraLink>

                    <ChakraLink
                        asChild
                        fontWeight={isActive('/resultados') ? 'bold' : 'medium'}
                        bg={isActive('/resultados') ? 'teal' : 'transparent'}
                        p={isActive('/resultados') ? '2' : 0}
                        borderRadius={isActive('/resultados') ? 'sm' : 'none'}
                        color={isActive('/resultados') ? 'trail' : 'black'}
                        _hover={{ color: 'trail', textDecoration: "none"}}
                    >
                        <Link to={'/resultados'}>Resultados</Link>
                    </ChakraLink>
                    <Button
                        as="a"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfK2DTgveIHUx-Y03_Bt7WKB0oZOTehXiuicsR_hy4Ncy_x6Q/viewform?pli=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="sm"
                        bg="laguna"
                        fontWeight="medium"
                    >
                        Registrate
                    </Button>
                </HStack>

                <IconButton
                    aria-label="Open Menu"
                    variant="ghost"
                    display={{ base: 'flex', lg: 'none' }}
                    onClick={() => setOpen(true)}
                >
                    <GiHamburgerMenu size={30}/>
                </IconButton>

                <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
                    <Drawer.Backdrop />
                    <Drawer.Positioner placeContent="right">
                        <Drawer.Content>
                            <Drawer.Header
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Image 
                                    src={zbikesLogo}
                                    alt="Z-Bike's Logo"
                                    width="120px"
                                    height="45px"
                                    objectFit="contain"
                                />
                                <IconButton
                                    aria-label="Close Menu"
                                    variant="ghost"
                                    color="red"
                                    onClick={() => setOpen(false)}
                                >
                                    <IoMdClose size={30}/>
                                </IconButton>
                            </Drawer.Header>
                            <Drawer.Body mt={8}>
                                <VStack align="stretch" gap={6}>
                                    <ChakraLink
                                        asChild
                                        fontWeight={isActive('/') ? 'bold' : 'medium'}
                                        bg={isActive('/') ? 'teal' : 'transparent'}
                                        p={isActive('/') ? '2' : 0}
                                        borderRadius={isActive('/') ? 'sm' : 'none'}
                                        color={isActive('/') ? 'trail' : 'black'}
                                        _hover={{ color: 'trail', textDecoration: "none"}}
                                    >
                                        <Link to={'/'}>Inicio</Link>
                                    </ChakraLink>

                                    <ChakraLink
                                        asChild
                                        fontWeight={isActive('/comunidad') ? 'bold' : 'medium'}
                                        bg={isActive('/comunidad') ? 'teal' : 'transparent'}
                                        p={isActive('/comunidad') ? '2' : 0}
                                        borderRadius={isActive('/comunidad') ? 'sm' : 'none'}
                                        color={isActive('/comunidad') ? 'trail' : 'black'}
                                        _hover={{ color: 'trail', textDecoration: "none"}}
                                    >
                                        <Link to={'/comunidad'}>Comunidad</Link>
                                    </ChakraLink>
                    
                                    <ChakraLink
                                        asChild
                                        fontWeight={isActive('/reto-z') ? 'bold' : 'medium'}
                                        bg={isActive('/reto-z') ? 'teal' : 'transparent'}
                                        p={isActive('/reto-z') ? '2' : 0}
                                        borderRadius={isActive('/reto-z') ? 'sm' : 'none'}
                                        color={isActive('/reto-z') ? 'trail' : 'black'}
                                        _hover={{ color: 'trail', textDecoration: "none"}}
                                    >
                                        <Link to={'/reto-z'}>Reto Z</Link>
                                    </ChakraLink>

                                    <ChakraLink
                                        asChild
                                        fontWeight={isActive('/rutas') ? 'bold' : 'medium'}
                                        bg={isActive('/rutas') ? 'teal' : 'transparent'}
                                        p={isActive('/rutas') ? '2' : 0}
                                        borderRadius={isActive('/rutas') ? 'sm' : 'none'}
                                        color={isActive('/rutas') ? 'trail' : 'black'}
                                        _hover={{ color: 'trail', textDecoration: "none"}}
                                    >
                                        <Link to={'/rutas'}>Rutas</Link>
                                    </ChakraLink>

                                    <ChakraLink
                                        asChild
                                        fontWeight={isActive('/resultados') ? 'bold' : 'medium'}
                                        bg={isActive('/resultados') ? 'teal' : 'transparent'}
                                        p={isActive('/resultados') ? '2' : 0}
                                        borderRadius={isActive('/resultados') ? 'sm' : 'none'}
                                        color={isActive('/resultados') ? 'trail' : 'black'}
                                        _hover={{ color: 'trail', textDecoration: "none"}}
                                    >
                                        <Link to={'/resultados'}>Resultados</Link>
                                    </ChakraLink>

                                    <Button
                                        as="a"
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSfK2DTgveIHUx-Y03_Bt7WKB0oZOTehXiuicsR_hy4Ncy_x6Q/viewform?pli=1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        size="sm"
                                        bg="laguna"
                                        fontWeight="medium"
                                    >
                                        Registrate
                                    </Button>
                                </VStack>
                            </Drawer.Body>
                        </Drawer.Content>
                    </Drawer.Positioner>
                </Drawer.Root>
            </Flex>
        </Box>
    )
}

export default Navbar;