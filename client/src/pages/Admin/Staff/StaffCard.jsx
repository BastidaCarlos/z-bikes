import { useState } from "react";
import { 
    Avatar,
    Box,
    Button,
    Card, 
    Dialog,
    HStack,
    Image,
    Portal,
    SimpleGrid,
    Switch,
    Text,
} from "@chakra-ui/react";
import { LuTrash2, LuPencil } from "react-icons/lu";

function StaffCard({ staffList, onUpdateStatus, onDelete, onEdit }) {
    const [ openDialogId, setOpenDialogId ] = useState(null);

    const currentStaffToDelete = staffList.find(staff => staff._id === openDialogId)

    return (
        <Box w="100%">
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3}} gap={6}>
                {staffList.map((staff) => (
                    <Card.Root 
                        key={staff._id}
                        borderRadius="lg"
                        boxShadow="md"
                        overflow="hidden"
                        bg="teal"
                        p={6}
                        color="white"
                        textAlign="center"
                    >
                        <Avatar.Root boxSize="150px" mx="auto">
                            <Avatar.Fallback>{staff.name}</Avatar.Fallback>
                            <Avatar.Image src={typeof staff.image === 'object' ? staff.image.url || staff.image : staff.image} />
                        </Avatar.Root>
                        <Card.Body>
                            <Card.Title color="trail" fontWeight="bold" textTransform="uppercase" fontFamily="heading" letterSpacing="wide" fontSize="2xl">{staff.name}</Card.Title>
                            <Card.Description color="cerro.100" fontWeight="semibold" fontSize="md">
                                {staff.rol}
                            </Card.Description>
                            <HStack>
                                <Switch.Root
                                    checked={staff.isActive}
                                    onCheckedChange={(e) => onUpdateStatus(staff._id, e.checked)}
                                    colorPalette="teal"
                                >
                                    <Switch.HiddenInput />
                                    <Switch.Control>
                                        <Switch.Thumb />
                                    </Switch.Control>
                                    <Switch.Label fontSize="sm">
                                        {staff.isActive ? 'Activo' : 'Inactivo'}
                                    </Switch.Label>
                                </Switch.Root>
                            </HStack>
                        </Card.Body>
                        <Card.Footer justifyContent="space-between" pb={4} px={4}>
                            <Button
                                size="sm"
                                bg="laguna"
                                variant="solid"
                                onClick={() => onEdit(staff)}
                            >
                                <LuPencil /> Editar
                            </Button>
                            <Button
                                size="sm"
                                colorPalette="red"
                                variant="solid"
                                onClick={() => setOpenDialogId(staff._id)}
                            >
                                <LuTrash2 /> Eliminar
                            </Button>
                        </Card.Footer>
                    </Card.Root>
                ))}
            </SimpleGrid>
            <Dialog.Root
                open={openDialogId !== null}
                onOpenChange={(e) => {
                    if(!e.open) setOpenDialogId(null);
                }}
            >
                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content>
                            <Dialog.Header>
                                <Text fontSize="lg" fontWeight="bold">¿Eliminar miembro?</Text>
                            </Dialog.Header>
                            <Dialog.Body>
                                <Text>
                                    ¿Estás seguro de que deseas eliminar a <b>{currentStaffToDelete?.name}?</b>
                                </Text>
                            </Dialog.Body>
                            <Dialog.Footer>
                                <HStack gap={3}>
                                    <Button
                                        variant="outline"
                                        onClick={() => setOpenDialogId(null)}
                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        colorPalette="red"
                                        onClick={() => {
                                            if (openDialogId) {
                                                onDelete(openDialogId)
                                                setOpenDialogId(null)
                                            }
                                        }}
                                    >
                                        Confirmar
                                    </Button>
                                </HStack>
                            </Dialog.Footer>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>
        </Box>
    )
}

export default StaffCard;