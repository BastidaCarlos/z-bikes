import Logo from "../assets/Logo.svg"
import { 
    Box,
    Heading,
    Circle,
    HStack,
    Text,
    VStack,
} from "@chakra-ui/react"

function PrivacyPolicy() {
    return (
        <Box
            w="100%"
            minH="100vh"
            p={{ base: 8, lg: 20 }}
            color="white"
            bg="teal"
        >
            <VStack 
                gap={4}
                mb={8}
            >
                <Box
                    boxSize="200px"
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
                />
                <Heading
                    as="h1"
                    fontSize={{base: "xl", lg: "3xl"}}
                    fontFamily="heading"
                    fontWeight="extrabold"
                    textTransform="uppercase"
                    color="white"
                    letterSpacing="wide"
                    textAlign="center"
                >
                    Aviso de privacidad 
                    <br />
                    Z-Bikes
                </Heading>
            </VStack>
            <VStack
                w="100%"
                maxW={{ base: "100%", lg: "900px"}}
                mx="auto"
                align="flex-start"
            >
                <VStack
                    align="flex-start"
                >
                    <VStack
                        align="flex-start"
                    >
                        <Text fontSize="xl" fontWeight="bold">Última actualización:</Text>
                        <Text fontSize="md" fontWeight="semibold" color="cerro.200">Octubre de 2026</Text>
                    </VStack>
                    <VStack
                        align="flex-start"
                    >
                        <Text fontSize="xl" fontWeight="bold">Responsable del tratamiento:</Text>
                        <Text fontSize="md" fontWeight="semibold" color="cerro.200">Z-Bikes (Zitlaltepec, Estado de México)</Text>
                    </VStack>
                </VStack>
                <Heading
                    py={4}
                    mt={2}
                    px={6}
                    borderLeft="2px solid"
                    borderColor="trail"
                    borderRightRadius="lg"
                    bg="teal.800"
                >
                    En <Text as="span">Z-Bikes</Text> (en adelante, "el responsable"), reconocemos la importancia de proteger la privacidad y los datos personales de nuestra comunidad de ciclistas y 
                    colaboradores. Por ello, ponemos a tu disposición el presente Aviso de Privacidad, en estricto apego a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
                </Heading>

                <VStack
                    align="flex-start"
                >
                    <Heading 
                        as="h3"
                        pl={6}
                        fontSize={{ base: "lg", lg: "2xl"}}
                        fontFamily="heading"
                        letterSpacing="wide"
                        borderLeft="2px solid"
                        borderColor="laguna"
                        mt={4}
                        color="trail"
                    >
                        1. ¿Qué datos personales recabamos?
                    </Heading>
                    <Text>
                        Para llevar a cabo los registros de bicicletas, podemos recabar los siguientes datos pesonales:
                    </Text>
                    <VStack
                        align="flex-start"
                    >
                        <HStack
                            pl={8}
                        >
                            <Circle  
                                size="12px"
                                bg="presa"
                            />
                            <Text fontWeight="semibold">
                                Nombre completo.
                            </Text>
                        </HStack>
                        <HStack
                            pl={8}
                        >
                            <Circle  
                                size="12px"
                                bg="presa"
                            />
                            <Text fontWeight="semibold">
                                Número telefónico de contacto.
                            </Text>
                        </HStack>
                        <HStack
                            pl={8}
                        >
                            <Circle  
                                size="12px"
                                bg="presa"
                            />
                            <Text fontWeight="semibold">
                                Datos de identificación de la bicicleta (Marca, modelo, color, tipo, número de serie y notas descriptivas).
                            </Text>
                        </HStack>
                        <HStack
                            pl={8}
                        >
                            <Circle  
                                size="12px"
                                bg="presa"
                            />
                            <Text fontWeight="semibold">
                                Fotografías de la bicicleta.
                            </Text>
                        </HStack>
                    </VStack>
                </VStack>
                <VStack
                    align="flex-start"
                >
                    <Heading 
                        as="h3"
                        pl={6}
                        fontSize={{ base: "lg", lg: "2xl"}}
                        fontFamily="heading"
                        letterSpacing="wide"
                        borderLeft="2px solid"
                        borderColor="laguna"
                        mt={4}
                        color="trail"
                    >
                        2. ¿Para qué fines utilizamos tus datos?
                    </Heading>
                    <Text>
                        Los datos personales que recopilamos serán utilizados para las siguientes finalidades necesarias:
                    </Text>
                    <VStack
                        align="flex-start"
                    >
                        <VStack
                            pl={8}
                            align="flex-start"
                        >
                            <HStack>
                                <Circle  
                                    size="12px"
                                    bg="presa"
                                />
                                <Text fontWeight="bold">
                                    Control y registro
                                </Text>
                            </HStack>
                            <Text fontWeight="semibold" pl={5}>
                                Identificar de manera única las bicicletas de la comunidad para fines de seguridad y control interno.
                            </Text>
                        </VStack>
                        <VStack
                            pl={8}
                            align="flex-start"
                        >
                            <HStack>
                                <Circle  
                                    size="12px"
                                    bg="presa"
                                />
                                <Text fontWeight="bold">
                                    Identificación de contacto
                                </Text>
                            </HStack>
                            <Text fontWeight="semibold" pl={5}>
                                Poder comunicarnos contigo en caso de emergencias o aclaraciones sobre el status de tu registro.
                            </Text>
                        </VStack>
                    </VStack>
                </VStack>
                <VStack
                    align="flex-start"
                >
                    <Heading 
                        as="h3"
                        pl={6}
                        fontSize={{ base: "lg", lg: "2xl"}}
                        fontFamily="heading"
                        letterSpacing="wide"
                        borderLeft="2px solid"
                        borderColor="laguna"
                        mt={4}
                        color="trail"
                    >
                        3. ¿Con quién compartimos tu información?
                    </Heading>
                    <Text>
                        Tus datos personales <b>nunca</b> serán vendidos, arrendados o transferidos a terceros
                        con fines comerciales de lucro. La información es de uso estrictamente interno y comunitario
                        para la gestión de Z-Bikes. Las imágenes de las bicicletas se almacenan de forma segura en 
                        servicios en la nube (Cloudinary) exclusivamente para su visualización en la plataforma oficial.
                    </Text>
                </VStack>
                <VStack
                    align="flex-start"
                >
                    <Heading 
                        as="h3"
                        pl={6}
                        fontSize={{ base: "lg", lg: "2xl"}}
                        fontFamily="heading"
                        letterSpacing="wide"
                        borderLeft="2px solid"
                        borderColor="laguna"
                        mt={4}
                        color="trail"
                    >
                        4. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) 
                    </Heading>
                    <Text>
                        Como titular de tus datos personales, tienes derecho a:
                    </Text>
                    <VStack
                        align="flex-start"
                    >
                        <VStack
                            pl={8}
                            align="flex-start"
                        >
                            <HStack>
                                <Circle  
                                    size="12px"
                                    bg="presa"
                                />
                                <Text fontWeight="bold">
                                    Acceder
                                </Text>
                            </HStack>
                            <Text fontWeight="semibold" pl={5}>
                                A los datos que poseemos.
                            </Text>
                        </VStack>
                        <VStack
                            pl={8}
                            align="flex-start"
                        >
                            <HStack>
                                <Circle  
                                    size="12px"
                                    bg="presa"
                                />
                                <Text fontWeight="bold">
                                    Rectificarlos
                                </Text>
                            </HStack>
                            <Text fontWeight="semibold" pl={5}>
                                En caso de ser inexactos.
                            </Text>
                        </VStack>
                        <VStack
                            pl={8}
                            align="flex-start"
                        >
                            <HStack>
                                <Circle  
                                    size="12px"
                                    bg="presa"
                                />
                                <Text fontWeight="bold">
                                    Cancelar
                                </Text>
                            </HStack>
                            <Text fontWeight="semibold" pl={5}>
                                Su uso cuando consideres que ya no se requieren para los fines establecidos
                            </Text>
                        </VStack>
                        <VStack
                            pl={8}
                            align="flex-start"
                        >
                            <HStack>
                                <Circle  
                                    size="12px"
                                    bg="presa"
                                />
                                <Text fontWeight="bold">
                                    Oponerte
                                </Text>
                            </HStack>
                            <Text fontWeight="semibold" pl={5}>
                                Al tratamiento de los mismos para fines específicos.
                            </Text>
                        </VStack>
                    </VStack>
                    <Text>
                        Para ejercer cualquiera de estos derechos, o bien para solicitar la baja o eliminación de tu registro y fotografías del sistema, puedes ponerte en contacto con nosotros a través de los canales oficiales o directamente con los organizadores.
                    </Text>
                </VStack>
                <VStack
                    align="flex-start"
                >
                    <Heading 
                        as="h3"
                        pl={6}
                        fontSize={{ base: "lg", lg: "2xl"}}
                        fontFamily="heading"
                        letterSpacing="wide"
                        borderLeft="2px solid"
                        borderColor="laguna"
                        mt={4}
                        color="trail"
                    >
                        5. Modificaciones al Aviso de Privacidad
                    </Heading>
                    <Text>
                        Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad, las cuales serán publicadas en nuestros medios oficiales de difusión.
                    </Text>
                </VStack>
            </VStack>
        </Box>
    )
}

export default PrivacyPolicy;