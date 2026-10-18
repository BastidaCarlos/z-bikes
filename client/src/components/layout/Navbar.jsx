import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { 
    Box,
    Button,
    Drawer,
    Flex,
    HStack,
    Icon,
    IconButton,
    Link as ChakraLink,
    Portal,
    Spacer,
    VStack
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"
import zbikesLogo from "../../assets/zbikesLogo.svg"
import { MdAdminPanelSettings } from "react-icons/md";

function Navbar() {
    const [ open, setOpen ] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const existsAdmin = localStorage.getItem('token');

    const isActive = (path) => location.pathname === path;

    return (
        <Box 
            as="header"
            h="80px"
            position="fixed"
            mt={4}
            w="100%"
            top={0}
            left={0}
            zIndex={10}
        >
            <Flex
                align="center"
                borderRadius="xl"
                justifyItems="center"
                px={{ base: '4', md: '6', lg: '8' }}
                maxW={{ base: '90%', lg: '900px', xl: '1200px' }}
                mx="auto"
                backdropFilter="blur(30px)"
                bg="teal/30"
                boxShadow="0px 5px 8px rgba(0, 0, 0, 0.3)"
            >
                <Box
                    w="150px"
                    h="60px"
                    bg="white"
                    _hover={{ bg: 'trail'}}
                    style={{
                        maskImage: `url(${zbikesLogo})`,
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        maskSize: "contain",
                        WebkitMaskImage: `url(${zbikesLogo})`,
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        WebkitMaskSize: "contain",
                    }}
                    onClick={() => navigate('/')}
                    cursor="pointer"
                >
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
                        color={isActive('/') ? 'lagunaHover.600' : 'white'}
                        borderBottom={isActive('/') ? '2px solid' : 'none'}
                        borderColor={isActive('/') ? 'trail' : 'transparent'}
                        _hover={{ color: 'trail', textDecoration: "none"}}
                    >
                        <Link to={'/'}>Inicio</Link>
                    </ChakraLink>

                    <ChakraLink
                        asChild
                        fontWeight={isActive('/comunidad') ? 'bold' : 'medium'}
                        color={isActive('/comunidad') ? 'lagunaHover.600' : 'white'}
                        borderBottom={isActive('/comunidad') ? '2px solid' : 'none'}
                        borderColor={isActive('/comunidad') ? 'trail' : 'transparent'}
                        _hover={{ color: 'trail', textDecoration: "none"}}
                    >
                        <Link to={'/comunidad'}>Comunidad</Link>
                    </ChakraLink>
                    
                    <ChakraLink
                        asChild
                        fontWeight={isActive('/reto-z') ? 'bold' : 'medium'}
                        color={isActive('/reto-z') ? 'lagunaHover.600' : 'white'}
                        borderBottom={isActive('/reto-z') ? '2px solid' : 'none'}
                        borderColor={isActive('/reto-z') ? 'trail' : 'transparent'}
                        _hover={{ color: 'trail', textDecoration: "none"}}
                    >
                        <Link to={'/reto-z'}>Reto Z</Link>
                    </ChakraLink>

                    <ChakraLink
                        asChild
                        fontWeight={isActive('/rutas') ? 'bold' : 'medium'}
                        color={isActive('/rutas') ? 'lagunaHover.600' : 'white'}
                        borderBottom={isActive('/rutas') ? '2px solid' : 'none'}
                        borderColor={isActive('/rutas') ? 'trail' : 'transparent'}
                        _hover={{ color: 'trail', textDecoration: "none"}}
                    >
                        <Link to={'/rutas'}>Rutas</Link>
                    </ChakraLink>

                    <ChakraLink
                        asChild
                        fontWeight={isActive('/resultados') ? 'bold' : 'medium'}
                        color={isActive('/resultados') ? 'lagunaHover.600' : 'white'}
                        borderBottom={isActive('/resultados') ? '2px solid' : 'none'}
                        borderColor={isActive('/resultados') ? 'trail' : 'transparent'}
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
                        Regístrate
                    </Button>
                    {existsAdmin && (
                        <ChakraLink
                            asChild
                            color={isActive('/admin/dashboard') ? 'lagunaHover.600' : 'white'}
                            borderBottom={isActive('/admin/dashboard') ? '2px solid' : 'none'}
                            borderColor={isActive('/admin/dashboard') ? 'trail' : 'transparent'}
                            _hover={{ color: 'trail', textDecoration: "none"}}
                        >
                            <Link to={'/admin/dashboard'}>
                                <Icon as={MdAdminPanelSettings} boxSize={6} color={isActive('/admin/dashboard') ? 'trail' : 'white'}/>
                            </Link>
                        </ChakraLink>
                    )}
                </HStack>

                <IconButton
                    aria-label="Open Menu"
                    variant="ghost"
                    display={{ base: 'flex', lg: 'none' }}
                    onClick={() => setOpen(true)}
                    color="white"
                >
                    <GiHamburgerMenu size={30}/>
                </IconButton>

                <Drawer.Root 
                    open={open} 
                    onOpenChange={(e) => setOpen(e.open)}
                >
                    <Portal>
                        <Drawer.Backdrop bg="transparent"/>
                        <Drawer.Positioner placeContent="right">
                            <Drawer.Content
                                bg="teal"
                                border="none"
                                boxShadow="none"
                            >
                                <Drawer.Header
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Box
                                        w="150px"
                                        h="60px"
                                        bg="white"
                                        _hover={{ bg: 'trail'}}
                                        style={{
                                            maskImage: `url(${zbikesLogo})`,
                                            maskRepeat: "no-repeat",
                                            maskPosition: "center",
                                            maskSize: "contain",
                                            WebkitMaskImage: `url(${zbikesLogo})`,
                                            WebkitMaskRepeat: "no-repeat",
                                            WebkitMaskPosition: "center",
                                            WebkitMaskSize: "contain",
                                        }}
                                        onClick={() => navigate('/')}
                                        cursor="pointer"
                                    >
                                    </Box>
                                    <IconButton
                                        aria-label="Close Menu"
                                        variant="ghost"
                                        color="red"
                                        onClick={() => setOpen(false)}
                                    >
                                        <IoMdClose size={30}/>
                                    </IconButton>
                                </Drawer.Header>
                                <Drawer.Body 
                                    mt={8}
                                >
                                    <VStack align="stretch" gap={6}>
                                        <ChakraLink
                                            asChild
                                            fontSize="md"
                                            fontWeight={isActive('/') ? 'bold' : 'medium'}
                                            color={isActive('/') ? 'lagunaHover.600' : 'white'}
                                            borderBottom={isActive('/') ? '2px solid' : 'none'}
                                            borderColor={isActive('/') ? 'trail' : 'transparent'}
                                            _hover={{ color: 'trail', textDecoration: "none"}}
                                        >
                                            <Link to={'/'}>Inicio</Link>
                                        </ChakraLink>

                                        <ChakraLink
                                            asChild
                                            fontSize="md"
                                            fontWeight={isActive('/comunidad') ? 'bold' : 'medium'}
                                            color={isActive('/comunidad') ? 'lagunaHover.600' : 'white'}
                                            borderBottom={isActive('/comunidad') ? '2px solid' : 'none'}
                                            borderColor={isActive('/comunidad') ? 'trail' : 'transparent'}
                                            _hover={{ color: 'trail', textDecoration: "none"}}
                                        >
                                            <Link to={'/comunidad'}>Comunidad</Link>
                                        </ChakraLink>
                    
                                        <ChakraLink
                                            asChild
                                            fontSize="md"
                                            fontWeight={isActive('/reto-z') ? 'bold' : 'medium'}
                                            color={isActive('/reto-z') ? 'lagunaHover.600' : 'white'}
                                            borderBottom={isActive('/reto-z') ? '2px solid' : 'none'}
                                            borderColor={isActive('/reto-z') ? 'trail' : 'transparent'}
                                            _hover={{ color: 'trail', textDecoration: "none"}}
                                        >
                                            <Link to={'/reto-z'}>Reto Z</Link>
                                        </ChakraLink>

                                        <ChakraLink
                                            asChild
                                            fontSize="md"
                                            fontWeight={isActive('/rutas') ? 'bold' : 'medium'}
                                            color={isActive('/rutas') ? 'lagunaHover.600' : 'white'}
                                            borderBottom={isActive('/rutas') ? '2px solid' : 'none'}
                                            borderColor={isActive('/rutas') ? 'trail' : 'transparent'}
                                            _hover={{ color: 'trail', textDecoration: "none"}}
                                        >
                                            <Link to={'/rutas'}>Rutas</Link>
                                        </ChakraLink>

                                        <ChakraLink
                                            asChild
                                            fontSize="md"
                                            fontWeight={isActive('/resultados') ? 'bold' : 'medium'}
                                            color={isActive('/resultados') ? 'lagunaHover.600' : 'white'}
                                            borderBottom={isActive('/resultados') ? '2px solid' : 'none'}
                                            borderColor={isActive('/resultados') ? 'trail' : 'transparent'}
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
                                            mr={4}
                                            fontSize="md"
                                            fontWeight="medium"
                                        >
                                            Regístrate
                                        </Button>

                                        {existsAdmin && (
                                            <ChakraLink
                                                asChild
                                                color={isActive('/admin/dashboard') ? 'lagunaHover.600' : 'white'}
                                                borderBottom={isActive('/admin/dashboard') ? '2px solid' : 'none'}
                                                borderColor={isActive('/admin/dashboard') ? 'trail' : 'transparent'}
                                                _hover={{ color: 'trail', textDecoration: "none"}}
                                            >
                                                <Link to={'/admin/dashboard'}>
                                                    <Icon as={MdAdminPanelSettings} boxSize={6} color={isActive('/admin/dashboard') ? 'trail' : 'white'}/>
                                                </Link>
                                            </ChakraLink>
                                        )}
                                    </VStack>
                                </Drawer.Body>
                            </Drawer.Content>
                        </Drawer.Positioner>
                    </Portal>
                </Drawer.Root>
            </Flex>
        </Box>
    )
}

export default Navbar;