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

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            as="footer"
            display="flex"
            direction='column'
            width="100%"
            mx='auto'
            pb={4}
            alignContent="center"
            justifyContent="center"
        >
            <VStack>
                <Grid
                    templateAreas={{
                        base: 
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
                        base: "1fr 1fr",
                        lg: "1fr 1fr"
                    }}
                    templateRows="auto auto"
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
                                    Z-Bike's
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
                    >
                        <Heading 
                            as="h4"
                            fontSize="xl"
                            fontWeight='bold'
                            textTransform="uppercase"
                        >
                            Contacto
                        </Heading>
                        <VStack
                            mt={{ base: 6, lg: 0 }}
                            h="100%"
                            alignItems="space-between"
                            justifyItems="space-between"
                            gap={{ base: 4, lg: 0}}
                            fontSize={{ base: 'sm' }}
                        >
                            <HStack>
                                <IoMdMail />
                                <Text>
                                    contacto@zbikes.com
                                </Text>
                            </HStack>
                            <HStack>
                                <FaPhoneAlt />
                                <Text>
                                    +52 5512345678
                                </Text>
                            </HStack>
                            <HStack>
                                <FaPhoneAlt />
                                <Text>
                                    +52 5512345678
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
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebook />
                                    <Text>
                                        @ZBike's
                                    </Text>
                                </HStack>
                                <HStack
                                    as="a"
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram />
                                    <Text>
                                        @ZBike's
                                    </Text>
                                </HStack>
                                <HStack
                                    as="a"
                                    href="https://tiktok.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaTiktok />
                                    <Text>
                                        @ZBike's
                                    </Text>
                                </HStack>
                            </Flex>
                        </VStack>
                    </GridItem>
                </Grid>
                <Box
                    border="none"
                    bg="teal"
                    w="100%"
                    mx="auto"
                    h="4px"
                >
                </Box>
                <Box
                    textAlign='center'
                    fontStyle="italic"
                    fontWeight="medium"
                >
                    <Text>
                        &copy; {currentYear} Z-Bike's. Todos los derechos reservados
                    </Text>
                </Box>
            </VStack>
        </Box>
    )
}

export default Footer;