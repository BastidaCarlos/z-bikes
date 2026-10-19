import Logo from "../../assets/Logo.svg"
import { 
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    HStack,
    Image,
    Text,
    VStack, 
} from "@chakra-ui/react"
import { FaFacebook, FaInstagram, FaTiktok, FaPhoneAlt } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { useNavigate } from "react-router-dom";

function Footer() {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();

    return (
        <Box
            as="footer"
            w="100%"
            maxW="100%"
            overflowX="hidden"
            mx='auto'
            py={6}
            px={4}
            bg="white"
        >
            <VStack w="100%" maxW="1200px" mx="auto" gap={6}>
                <Grid
                    templateAreas={{
                        base: 
                        `
                            "logo"
                            "contact"
                            "social"
                        `,
                        md: 
                        `
                            "logo contact"
                            "social contact"
                        `,
                        lg: 
                        `
                            "logo contact"
                            "social social" 
                        `
                    }}
                    templateColumns={{
                        base: "1fr",
                        md: "1fr 1fr"
                    }}
                    gap={{ base: 4, lg: 10}}
                    alignItems="center"
                    justifyItems="center"
                >
                    <GridItem
                        area="logo"
                    >
                        <HStack>
                            <Image 
                                src={Logo}
                                alt="Z-bikes Logo Completo"
                                w={{ base: '60px', lg: '80px' }}
                                h={{ base: '60px', lg: '80px' }}
                                objectFit="cover"
                            />
                            <VStack
                                alignItems="flex-start"
                                gap={0}
                            >
                                <Heading 
                                    as="h3" 
                                    fontSize={{ base: '2xl', lg: "3xl"}} 
                                    fontWeight="bold" 
                                    fontFamily='heading' 
                                    textTransform="uppercase"
                                >
                                    Z-Bikes
                                </Heading>
                                <Text
                                    fontSize={{ base: 'xs', lg: 'sm' }}
                                >
                                    Comunidad MTB
                                </Text>
                            </VStack>
                        </HStack>
                    </GridItem>
                    <GridItem
                        area="contact"
                        justifySelf="center"
                    >
                        <Heading 
                            as="h4"
                            fontSize={{ base: 'xl', lg: "2xl"}}
                            fontWeight='bold'
                            textTransform="uppercase"
                            textAlign={{ base: 'center' }}
                        >
                            Contacto
                        </Heading>
                        <VStack
                            mt={{ base: 6, lg: 0 }}
                            h="100%"
                            alignItems="flex-start"
                            justifyContent="space-between"
                            gap={{ base: 4, lg: 0}}
                            fontSize={{ base: 'sm', md: "md", lg: "lg" }}
                        >
                            <HStack>
                                <IoMdMail />
                                <Text>
                                    zbikesmtbsanjuanz@gmail.com
                                </Text>
                            </HStack>
                            <HStack>
                                <FaPhoneAlt />
                                <Text>
                                    +52 5550091536
                                </Text>
                            </HStack>
                            <HStack>
                                <FaPhoneAlt />
                                <Text>
                                    +52 5545991248
                                </Text>
                            </HStack>
                            <HStack>
                                <FaPhoneAlt />
                                <Text>
                                    +52 5577980620
                                </Text>
                            </HStack>
                        </VStack>
                    </GridItem>
                    <GridItem area="social">
                        <VStack
                            gap={4}
                        >
                            <Heading 
                                as="h4"
                                textTransform="uppercase"
                                fontSize="2xl"
                                fontWeight="medium"
                                fontFamily="heading"
                                display={{ base: 'none', lg: 'block'}}
                            >
                                Nuestras Redes Sociales
                            </Heading>
                            <Flex
                                direction={{ base: 'column', lg: 'row'}}
                                gap={{ base: '0', lg: "12"}}
                            >
                                <HStack
                                    as="a"
                                    href="https://www.facebook.com/zbikesmtbzumpango/?locale=es_LA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebook />
                                    <Text>
                                        @ZBikes
                                    </Text>
                                </HStack>
                                <HStack
                                    as="a"
                                    href="https://www.instagram.com/zbikesmtbzumpango/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram />
                                    <Text>
                                        @ZBikes
                                    </Text>
                                </HStack>
                                <HStack
                                    as="a"
                                    href="https://www.tiktok.com/@z.bikes7?_r=1&_t=ZS-9AfiLrwGlN6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaTiktok />
                                    <Text>
                                        @ZBikes
                                    </Text>
                                </HStack>
                            </Flex>
                        </VStack>
                    </GridItem>
                </Grid>
                <Box
                    border="none"
                    bg="teal"
                    w="90%"
                    mx="auto"
                    h="4px"
                >
                </Box>
                <Box
                    textAlign="center"
                    fontStyle="italic"
                    fontWeight="medium"
                    w="100%"
                >
                    <Text as="p">
                        &copy; {currentYear} . <Text as="span" onClick={() => navigate('/admin/login')}>Z-Bikes</Text> Todos los derechos reservados
                    </Text>
                </Box>
            </VStack>
        </Box>
    )
}

export default Footer;