import { useEffect, useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { 
    Badge,
    Box,
    CloseButton,
    Flex,
    Heading,
    Input, 
    InputGroup,
    Tabs,
} from "@chakra-ui/react";

function FiltersResults({ filtros = {}, onChange }) {
    const inputRef = useRef(null);
    const [ inputValue, setInputValue ] = useState('');
    const isFirstRender = useRef(true)
    
    const endElement = inputValue ? (
        <CloseButton 
            size="xs"
            onClick={() => {
                setInputValue('')
                onChange({ ...filtros, q: '' })
            }}
            me="-2"
        />
    ) : undefined

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false; 
            return;
        }

        const timer = setTimeout(() => {
            onChange({ ...filtros, q: inputValue, page: 1})
        }, 500)

        return () => clearTimeout(timer)
    }, [inputValue])

    return (
        <Box
            as="section"
            mx="auto"
            maxW={{ base: '100%', lg: '900px', xl: '1200px'}}
            textAlign="center"
            p={4}
        >
            <Heading>
                Conoce los resultados del Reto Z
            </Heading>
            <Flex
                w="full"
                maxW={{ base: '100%', lg: '900px', xl: '1200px'}}
                mt={2}
                mx="auto"
                bg="white"
                p={1.5}
                pl={6}
                borderRadius="full"
                align="center"
                border="1px solid"
                borderColor="cerro.600"
                boxShadow="md"
                transition="all 0.2s"
                _focusWithin={{
                    boxShadow: 'lg',
                    borderColor: "trail"
                }}
            >
                <InputGroup
                    startElement={<FaSearch />}
                    endElement={endElement}
                    color="teal"
                >
                    <Input 
                        ref={inputRef}
                        variant="unstyled"
                        placeholder="Ingresa tu nombre"
                        _placeholder={{ color: 'gray.500'}}
                        fontSize={{ base: 'sm', lg: 'md'}}
                        flex={1}
                        color="teal"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.currentTarget.value)}
                    />
                </InputGroup>
                <Badge
                    bg="presa"
                    color="white"
                    borderRadius="full"
                    px={{ base: 4, lg: 8 }}
                    py={{ base: 2, lg: 4 }}
                    fontWeight="semibold"
                    fontSize={{ base: "xs", lg: "md"}}
                >
                    Encuentra tu resultado
                </Badge>
            </Flex>
            <Tabs.Root
                defaultValue="todas"
                value={filtros.route || 'todas'}
                onValueChange={(details) => {
                    const selectedRoute = details.value === "todas" ? '' : details.value
                    onChange({
                        ...filtros,
                        route: selectedRoute,
                        page: 1
                    })
                }}
                mt={6}
                variant="enclosed"
            >
                <Tabs.List gap={2}>
                    <Tabs.Trigger value="todas" bg="teal" color="white" _selected={{ bg: "bosque"}} borderRadius="full">
                        Todas las rutas
                    </Tabs.Trigger>
                    <Tabs.Trigger value="25 KM" bg="teal" color="white" _selected={{ bg: "bosque"}} borderRadius="full">
                        30 KM
                    </Tabs.Trigger>
                    <Tabs.Trigger value="40 KM" bg="teal" color="white" _selected={{ bg: "bosque"}} borderRadius="full">
                        40 KM
                    </Tabs.Trigger>
                </Tabs.List>
            </Tabs.Root>
        </Box>
    )
}

export default FiltersResults;