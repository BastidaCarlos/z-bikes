import { 
    Badge,
    Box,
    Spinner,
    Table,
    Text, 
    VStack,
} from "@chakra-ui/react";

function TableResults({ results , isLoading }) {
    if (isLoading) {
        return (
            <VStack
                w="100%"
                maxW={{ base: '100%', lg: '900px'}}
                mx="auto"
            >
                <Spinner colorPalette="teal"/>
                <Text>Cargando Resultados...</Text>
            </VStack>
        )
    }

    return (
        <Box
            as="section"
            w="100%"
            maxW={{ base: "100%", lg: "900px", xl: "1200px"}}
            mx="auto"
            p={{ base: 4}}
        >
            <Box
                w="100%"
                overflowX={{ base: "auto"}}
            >
                <Table.Root variant="outline">
                    <Table.Header bg="teal">
                        <Table.Row>
                            <Table.ColumnHeader color="white">Pos.</Table.ColumnHeader>
                            <Table.ColumnHeader color="white">#</Table.ColumnHeader>
                            <Table.ColumnHeader color="white">Nombre</Table.ColumnHeader>
                            <Table.ColumnHeader color="white">Ruta</Table.ColumnHeader>
                            <Table.ColumnHeader color="white">Tiempo</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {results.map((result) => (
                            <Table.Row key={result.number}>
                                <Table.Cell>
                                    {result.position === 1 ? (
                                        <Badge bg="#F59E0B" borderRadius="full" color='teal' size="md">
                                            1er Lugar
                                        </Badge>
                                    ) : result.position === 2 ? (
                                        <Badge bg="#94A3B8" borderRadius="full" color='teal' size="md">
                                            2do Lugar
                                        </Badge>
                                    ): result.position === 3 ? (
                                        <Badge bg="#B45309" borderRadius="full" color='teal' size="md">
                                            3er Lugar
                                        </Badge>
                                    ): (
                                        <Text>
                                            {result.position}
                                        </Text>
                                    )}
                                </Table.Cell>
                                <Table.Cell>{result.number}</Table.Cell>
                                <Table.Cell>{result.name}</Table.Cell>
                                <Table.Cell>{result.route}</Table.Cell>
                                <Table.Cell>{result.time}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
            </Box>
        </Box>
    )
}

export default TableResults;