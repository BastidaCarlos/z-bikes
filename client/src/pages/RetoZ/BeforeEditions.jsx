import { useRef } from "react";
import { 
    Badge,
    Box, 
    Flex,
    Heading, 
    IconButton,
    Image,
    Text,
    VStack 
} from "@chakra-ui/react";
import RE24 from "../../assets/2024/RE24.webp"
import RE24R from "../../assets/2024/RE24R.webp"
import RE24R2 from "../../assets/2024/RE24R2.webp"
import RE24C from "../../assets/2024/RE24C.webp"
import RE24C2 from "../../assets/2024/RE24C2.webp"

import RE25M from "../../assets/2025/RE25M.webp"
import RE25P from "../../assets/2025/RE25P.webp"
import RE25L from "../../assets/2025/RE25L.webp"
import RE25PO from "../../assets/2025/RE25PO.webp"
import RE25PO2 from "../../assets/2025/RE25PO2.webp"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


function BeforeEditions() {
    const editions = [
        {
            year: "2024",
            title: "Reto-Z 2024",
            participantes: "350 Participantes",
            reverse: false,
            images: [
                { src: RE24, alt: "Reto-Z 2024 Salida"},
                { src: RE24R, alt: "Reto-Z 2024 Ruta"},
                { src: RE24R2, alt: "Reto-Z 2024 Ruta"},
                { src: RE24C, alt: "Reto-Z 2024 Convivencia"},
                { src: RE24C2, alt: "Reto-Z 2024 Convivencia"},
            ]
        },
        {
            year: "2025",
            title: "Reto-Z 2025",
            participantes: "500 Participantes",
            reverse: true,
            images: [
                { src: RE25M, alt: "Reto-Z 2024 Salida"},
                { src: RE25P, alt: "Reto-Z 2024 Premio"},
                { src: RE25L, alt: "Reto-Z 2024 Llegada"},
                { src: RE25PO, alt: "Reto-Z 2024 Podium"},
                { src: RE25PO2, alt: "Reto-Z 2024 Podium"},
            ]
        }
    ]

    const scrollRefs = useRef([])

    const scroll = (index, direction) => {
        const container = scrollRefs.current[index];
        if (container) {
            const scrollAmount = container.clientWidth;
            container.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

   return (
    <Box as="section" p={{ base: 4, lg: 12 }}>
        <VStack
            w="100%"
            maxW={{ base: '100%', lg: '900px', xl: '1200px'}}
            mx="auto"
            gap={6}
        >
            <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontFamily="heading"
                fontWeight="extrabold"
                textTransform="uppercase"
                color="laguna"
                letterSpacing="wide"
                alignSelf="flex-start"
            >
                Ediciones anteriores
            </Heading>
            <Text color="gray.700">
                Cada edición reúne nuevos retos y compañeros de ruta. Así hemos vivido el Reto Z-Bikes en San Juan Zitlaltepec. Si ya rodaste con nosotros, busca tu recuerdo; si vienes por primera vez, conoce lo que hemos compartido.
            </Text>

            {editions.map((edition, idx) => (
                <Flex
                    key={edition.year}
                    direction={{ base: 'column', lg: edition.reverse ? 'row-reverse' : 'row' }}
                    w="100%"
                    maxW={{ base: "100%", md: "700px", lg: "900px" }}
                    gap={8}
                    align="center"
                    justify="space-between"
                    bg="teal"
                    p={6}
                    color="white"
                    borderRadius="lg"
                    boxShadow="xl"
                    mt={6}
                >
                    <Box position="relative" w={{ base: "100%", lg: "50%" }}>
                        <IconButton 
                            aria-label="Foto anterior"
                            position="absolute"
                            left="2"
                            top="50%"
                            transform="tranlateY(-50%)"
                            zIndex="2"
                            size="md"
                            borderRadius="full"
                            onClick={() => scroll(idx, "left")}
                            bg="blackAlpha.600"
                            color="white"
                            _hover={{ bg: "blackAlpha.800"}}
                        >
                            <FaChevronLeft />
                        </IconButton>
                        <Flex
                            ref={(el) => (scrollRefs.current[idx] = el)}
                            overflowX="auto"
                            gap={3}
                            w="100%"
                            css={{
                                scrollSnapType: "x mandatory",
                                scrollbarWidth: "none",
                                "&::-webkit-scrollbar": { display: "none" }
                            }}
                        >
                            {edition.images.map((img, imgIdx) => (
                                <Image 
                                    key={imgIdx}
                                    src={img.src}
                                    alt={img.alt}
                                    borderRadius="2xl"
                                    objectFit="cover"
                                    minW="100%"
                                    h={{ base: "200px", md: "240px" }}
                                    flexShrink={0}
                                    css={{ scrollSnapAlign: "start" }}
                                />
                            ))}
                        </Flex>

                        <IconButton 
                            aria-label="Foto siguiente"
                            position="absolute"
                            right="2"
                            top="50%"
                            transform="tranlateY(-50%)"
                            zIndex="2"
                            size="md"
                            borderRadius="full"
                            onClick={() => scroll(idx, "right")}
                            bg="blackAlpha.600"
                            color="white"
                            _hover={{ bg: "blackAlpha.800"}}
                        >
                            <FaChevronRight />
                        </IconButton>
                    </Box>
                    <VStack w={{ base: '100%', lg: "50%"}} align="center" gap={3} >
                        <Heading
                            as="h3"
                            fontSize={{ base: "xl", lg: "2xl"}}
                            fontWeight="bold"
                            fontFamily="heading"
                            textTransform="uppercase"
                            textAlign="center"
                        >
                            {edition.title}
                        </Heading>
                        <Badge
                            bg="bosque"
                            color="white"
                            size="lg"
                            borderRadius="full"
                            textTransform="uppercase"
                            fontFamily="heading"
                            fontSize="md"
                            px={4}
                            py={1}
                        >
                            {edition.participantes}
                        </Badge>
                    </VStack>
                </Flex>
            ))}
        </VStack>
    </Box>
   ) 
}

export default BeforeEditions;