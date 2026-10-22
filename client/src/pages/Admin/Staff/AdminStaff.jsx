import { useEffect, useState } from "react";
import { getStaffAdmin, createStaff, updateStaff, updateStaffStatus, deleteStaffService } from "../../../services/staffAdminService";
import StaffCard from "./StaffCard";
import { toaster } from "../../../components/ui/toaster";
import { 
    Box, 
    Button,
    Field,
    FileUpload,
    HStack,
    Icon,
    Image,
    Input,
    InputGroup,
    Heading, 
    VStack 
} from "@chakra-ui/react";
import { FaUserAlt, FaImage } from "react-icons/fa"
import { GiStack } from "react-icons/gi"

function AdminStaff() {
    const [ staffList, setStaffList ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ editingId, setEditingId ] = useState(null)

    const [ form, setForm ] = useState({
        name: '',
        rol: ''
    })
    const [ imageFile, setImageFile ] = useState(null);
    const [ imagePreview, setImagePreview ] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevData => ({
            ...prevData,
            [ name ] : value
        }))
    }

    const getStaff = async () => {
        setIsLoading(true);
        setError(null)
        try {
            const data = await getStaffAdmin()
            setStaffList(data.staffList)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getStaff()
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const formData = new FormData();
            formData.append('name', form.name)
            formData.append('rol', form.rol)
            if (imageFile) {
                formData.append('image', imageFile)
            }

            if (editingId) {
                const response = await updateStaff(editingId, formData);
                const updateMember = response.updateMember;

                setStaffList(prev => prev.map(member => 
                    member._id === editingId ? updateMember : member
                ))

                toaster.create({
                    title: "¡Actualizado!",
                    description: "Miembro del staff modificado correctamente",
                    type: "success"
                })
                resetForm();
            } else {
                const response = await createStaff(formData);
                const newMember = response.newMemberStaff;

                setStaffList(prev => [newMember, ...prev])

                toaster.create({
                    title: "¡Éxito!",
                    description: "Miembro creado correctamente",
                    type: 'success'
                })
                
                resetForm();
            }
        } catch (error) {
            console.error("Error", error.response?.data)
            toaster.create({
                title: "Error",
                description: error.message || "Ocurrio un error",
                type: "error"
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const resetForm = () => {
        setForm({ name: "", rol: ""})
        setImageFile(null);
        setImagePreview('');
        setEditingId(null);
    }

    const handleupdateStatus = async (id, newStatus) => {
        try {
            await updateStaffStatus(id, newStatus);
            setStaffList(prev => prev.map(member =>
                member._id === id ? { ...member, isActive: newStatus } : member
            ))
            toaster.create({
                title: '¡Éxito!',
                description: "Estado actualizado correctamente",
                type: "success"
            });
        } catch (error) {
            console.error(error)
            toaster.create({
                title: 'Error',
                description: error.message || "No se pudo actualizar el estado",
                type: 'error'
            })
        }
    }

    const handleDeletePermanent = async (id) => {
        try {
            await deleteStaffService(id);
            setStaffList(prev => prev.filter(member => member._id !== id));
            toaster.create({
                title: "Eliminado",
                description: "El registro ha sido borrado permanentemente",
                type: 'success'
            })
        } catch (error) {
            toaster.create({
                title: 'Error',
                description: error.message || "No se puedo eliminar",
                type: 'error'
            })
        }
    }

    const handleEdit = (staff) => {
        setEditingId(staff._id);
        setForm({
            name: staff.name,
            rol: staff.rol,
        })
        setImagePreview(staff.image.url || staff.image)
        setImageFile(null);
    }

    return (
        <Box w="100%" p={4}>
            <VStack gap={6} align="stretch" maxW="1200px" mx="auto">
                <Heading
                    as="h2"
                    fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                    fontFamily="heading"
                    fontWeight="extrabold"
                    textTransform="uppercase"
                    color="laguna"
                    letterSpacing="wide"
                    mb={6}
                    alignSelf="flex-start"
                >
                    Gestión del Staff
                </Heading>
                <Box
                    as="form"
                    onSubmit={handleSubmit}
                    bg="teal"
                    p={6}
                    borderRadius="lg"
                    boxShadow="md"
                    color="white"
                >
                    <VStack gap={4} algin="stretch">
                        <Heading
                            as='h3'
                            fontSize={{ base: "xl", md: "2xl" }}
                            fontWeight="bold"
                            letterSpacing="1px"
                            textTransform="uppercase"
                            color="laguna"
                            fontFamily="heading"
                        >
                            {editingId ? "Editar Miembro" : "Agregar nuevo miembro"}
                        </Heading>
                        <Field.Root>
                            <Field.Label>Nombre</Field.Label>
                            <InputGroup startElement={<FaUserAlt />}>
                                <Input 
                                    variant="solid"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Nombre"
                                    color="black"
                                    required
                                />
                            </InputGroup>
                        </Field.Root>
                        <Field.Root>
                            <Field.Label>Rol / Puesto</Field.Label>
                            <InputGroup startElement={<GiStack />}>
                                <Input 
                                    variant="solid"
                                    name="rol"
                                    value={form.rol}
                                    onChange={handleChange}
                                    placeholder="Ej. Guía"
                                    color="black"
                                    required
                                />
                            </InputGroup>
                        </Field.Root>
                        <FileUpload.Root   
                            w="100%"
                            alignItems="stretch" 
                            maxFiles={1}
                            color="white"
                            onFileChange={(details) => {
                                const selectedFile = details.acceptedFiles[0];
                                if (selectedFile) {
                                    setImageFile(selectedFile);
                                    setImagePreview(URL.createObjectURL(selectedFile));
                                }
                            }}
                        >
                            <FileUpload.HiddenInput />
                            <FileUpload.Dropzone>
                                <Icon size="xl" color="fg.muted">
                                    <FaImage />
                                </Icon>
                                <FileUpload.DropzoneContent>
                                    <Box color="black">Arrastra o da click para añadir una foto</Box>
                                    <Box color="fg.muted">.png, .jpg</Box>
                                </FileUpload.DropzoneContent>
                            </FileUpload.Dropzone>
                        </FileUpload.Root>
                        {imagePreview && (
                            <Box boxSize="100px" borderRadius="full" overflow="hidden" mx="auto">
                                <Image src={imagePreview} alt="Vista previa" objectFit="cover" w="100%" h="100%" />
                            </Box>
                        )}
                        <HStack justify="flex-end" gap={3} mt={2}>
                            {editingId && (
                                <Button
                                    variant ="outline"
                                    onClick={resetForm}
                                    colorPalette="gray"
                                    color="white"
                                >
                                    Cancelar
                                </Button>
                            )}
                            <Button
                                type="submit"
                                bg="laguna"
                                loading={isSubmitting}
                            >
                                {editingId ? "Actualizar Miembro" : "Crear Miembro"}
                            </Button>
                        </HStack>
                    </VStack>
                </Box>
                <StaffCard 
                    staffList={staffList}
                    onUpdateStatus={handleupdateStatus}
                    onDelete={handleDeletePermanent}
                    onEdit={handleEdit}
                />
            </VStack>
        </Box>
    )

}

export default AdminStaff;