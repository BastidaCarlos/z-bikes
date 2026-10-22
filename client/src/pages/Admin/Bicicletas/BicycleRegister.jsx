import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { registrarBicicleta, getBicicletaById, updateBicicleta } from "../../../services/bicicletaService";
import { toaster } from "../../../components/ui/toaster";
import { FaUser, FaPhone, FaBicycle, FaCalendar } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io" 
import { MdNumbers } from "react-icons/md"
import { LuUpload } from "react-icons/lu";
import Logo from '../../../assets/Logo.svg'
import { 
    Alert,
    Box,
    Button,
    createListCollection,
    Field,
    FileUpload,
    Heading,
    HStack,
    Icon,
    Input,
    InputGroup,
    Portal,
    Text,
    Textarea,
    Select,
    Spinner,
    VStack,
} from "@chakra-ui/react";

const bikeTypesCollection = createListCollection({
    items: [
        { label: "MTB", value: "MTB" },
        { label: "Ruta", value: "Ruta" },
        { label: "Gravel", value: "Gravel" },
    ],
})

function BicycleRegister() {
    const { biciCode, id } = useParams();
    const navigate = useNavigate();

    const isEditMode = Boolean(id)

    const [ images, setImages ] = useState([]) 
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ isLoadingData, setIsLoadingData ] = useState(isEditMode);
    const [ error, setError ] = useState(null);

    const [ form, setForm ] = useState({
        owner: '',
        phone: '',
        brand: '',
        model: '',
        color: '',
        type: '',
        serialNumber: '',
        notes: ''
    })

    useEffect(() => {
        if (isEditMode) {
            const fetchBikeData = async () => {
                try {
                    const response = await getBicicletaById(id)
                    const bike = response.bike || response;
                    setForm({
                        owner: bike.owner || '',
                        phone: bike.phone || '',
                        brand: bike.brand || '',
                        model: bike.model || '',
                        color: bike.color || '',
                        type: bike.type || '',
                        serialNumber: bike.serialNumber || '',
                        notes: bike.notes || '',
                    })
                } catch (error) {
                    setError("No se pudo cargar la información para editar")
                    toaster.create({
                        title: "Error",
                        description: "No se pudieron obtener los datos de la bicicleta",
                        type: "error"
                    })
                } finally {
                    setIsLoadingData(false);
                }
            }
            fetchBikeData();
        } else if (!isEditMode && !biciCode) {
            navigate("/")
        }
    }, [id, isEditMode, biciCode, navigate])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSumbit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const data = new FormData();
        data.append('owner', form.owner);
        data.append('phone', form.phone);
        data.append('brand', form.brand);
        data.append('model', form.model);
        data.append('color', form.color);
        data.append('type', form.type);
        data.append('serialNumber', form.serialNumber);
        data.append('notes', form.notes)
        images.forEach((image) => {
            data.append('images', image)
        })

        try {
            if (isEditMode) {
                await updateBicicleta(id, data);
                toaster.create({
                    title: "¡Actualizado!",
                    description: "La bicicleta se actualizó con éxito",
                    type: 'success'
                });
                navigate(`/resumen/${id}`)
            } else {
                const newBike = await registrarBicicleta(data, biciCode)
                toaster.create({
                    title: "¡Éxito!",
                    description: "La bicicleta se registro con éxito",
                    type: "success"
                })
                const bikeId = newBike?.bicicleta._id || newBike?.bicicleta.id 
                navigate(`/resumen/${bikeId}`, { state: { bicycle: newBike }})
            }
        } catch (error) {
            console.error(error)
            toaster.create({
                title: "Error",
                description: error.message || "Ocurrio un error",
                type: "error"
            })
            setError(error.message)
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isLoadingData) {
        return (
            <Box textAlign="center" py={20} color="white">
                <Spinner size="lg"/>
                <Text>
                    Cargando datos...
                </Text>
            </Box>
        )
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            w="100%"
            mx="auto"
            my={{ base: 6, md: 12 }}
            maxW={{ base: "100%", lg: "900px" }}
            p={{ base: 4, lg: 12 }}
        >
            <VStack 
                w="100%" 
                gap={6} 
                bg="teal"
                borderRadius="2xl"
                boxShadow="2xl"
                p={6}
            >
                <Box
                    boxSize="150px"
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
                >
                </Box>
                <Heading
                    as="h1"
                    fontSize={{ base: "2xl", md: '4xl' }}
                    fontFamily="heading"
                    fontWeight="extrabold"
                    textTransform="uppercase"
                    color="white"
                    letterSpacing="wide"
                >
                    {isEditMode ? "Editar Bicicleta" : "Resistra tu bicicleta"}
                </Heading>
                <VStack
                    as="form"
                    onSubmit={handleSumbit}
                    w="100%"
                    color="white"
                    gap={4}
                >
                    <Field.Root>
                        <Field.Label>Propietario:</Field.Label>
                        <InputGroup startElement={<FaUser />}>
                            <Input 
                                name="owner"
                                value={form.owner}
                                onChange={handleChange}
                                placeholder="Nombre del Propietario"
                                variant="solid"
                                color="black"
                                required
                            />
                        </InputGroup>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Número teléfonico:</Field.Label>
                        <InputGroup startElement={<FaPhone />}>
                            <Input 
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="5512345678"
                                variant="solid"
                                color="black"
                                required
                            />
                        </InputGroup>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Marca:</Field.Label>
                        <InputGroup startElement={<FaBicycle />}>
                            <Input 
                                name="brand"
                                value={form.brand}
                                onChange={handleChange}
                                placeholder="Trek"
                                variant="solid"
                                color="black"
                                required
                            />
                        </InputGroup>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Modelo:</Field.Label>
                        <InputGroup startElement={<FaCalendar />}>
                            <Input 
                                name="model"
                                value={form.model}
                                onChange={handleChange}
                                placeholder="Trek Marlin 7 2026"
                                variant="solid"
                                color="black"
                                required
                            />
                        </InputGroup>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Color:</Field.Label>
                        <InputGroup startElement={<IoIosColorPalette />}>
                            <Input 
                                name="color"
                                value={form.color}
                                onChange={handleChange}
                                placeholder="Azul"
                                variant="solid"
                                color="black"
                                required
                            />
                        </InputGroup>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Tipo de Bicicleta</Field.Label>
                        <Select.Root
                            collection={bikeTypesCollection}
                            value={[form.type]}
                            onValueChange={(e) => {
                                setForm(prev => ({ ...prev, type: e.value[0] }))
                            }}
                            variant="solid"
                            bg="white"
                            borderRadius="md"
                            color="black"
                        >
                            <Select.HiddenSelect />
                            <Select.Control>
                                <Select.Trigger>
                                    <Select.ValueText placeholder="Selecciona el tipo de bicicleta" />
                                </Select.Trigger>
                                <Select.IndicatorGroup>
                                    <Select.Indicator />
                                </Select.IndicatorGroup>
                            </Select.Control>
                            <Portal>
                                <Select.Positioner>
                                    <Select.Content>
                                        {bikeTypesCollection.items.map((item) => (
                                            <Select.Item item={item} key={item.value}>
                                                {item.label}
                                                <Select.ItemIndicator />
                                            </Select.Item>
                                        ))}
                                    </Select.Content>
                                </Select.Positioner>
                            </Portal>
                        </Select.Root>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Número de Serie:</Field.Label>
                        <InputGroup startElement={<MdNumbers />}>
                            <Input 
                                name="serialNumber"
                                value={form.serialNumber}
                                onChange={handleChange}
                                placeholder="1234567891234567"
                                variant="solid"
                                color="black"
                                required
                            />
                        </InputGroup>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Características distintivas:</Field.Label>
                        <Textarea 
                            variant="solid"
                            placeholder="Describe detalles con los que sería fácil reconocer tu bicicleta..."
                            autoresize
                            name="notes"
                            value={form.notes}
                            onChange={handleChange}
                            maxLength={500}
                            color="black"
                            required
                        />
                        <Field.HelperText color="teal.200">{form.notes.length} / 500 caracteres</Field.HelperText>
                    </Field.Root>

                    <FileUpload.Root 
                        maxW="100%" 
                        alignItems="stretch" 
                        maxFiles={3}
                        onFileChange={(details) => {
                            const selectedFiles = details.acceptedFiles || details.files || [];
                            setImages(selectedFiles.slice(0, 3))
                        }}
                        required={isEditMode ? false : true}
                    >
                        <FileUpload.HiddenInput />
                        <FileUpload.Dropzone>
                            <Icon size="lg" color="fg.muted">
                                <LuUpload />
                            </Icon>
                            <FileUpload.DropzoneContent>
                                <Box>Arrastra o da click para subir imágenes de tu bicicleta</Box>
                                <Box color="fg.muted">.png, .jpg menor a 5MB</Box>
                                <Box color="fg.muted">Máximo 3 imágenes</Box>
                            </FileUpload.DropzoneContent>
                        </FileUpload.Dropzone>
                        <FileUpload.List />
                    </FileUpload.Root>

                    {error && (
                        <Alert.Root status="error">
                            <Alert.Indicator />
                            <Alert.Title>Error</Alert.Title>
                            <Alert.Description>{error}</Alert.Description>
                        </Alert.Root>
                    )}

                    <HStack pt={4} gap={4} w="100%" justify="center">
                        <Button
                            type="submit"
                            bg="laguna"
                            color="white"
                            loading={isSubmitting}
                            disabled={isSubmitting}
                        >
                            {isEditMode ? "Guardar Cambios" : "Registrar Bicicleta"}
                        </Button>
                        <Button
                            variant="outline"
                            colorPalette="red"
                            onClick={() => navigate('/')}
                        >
                            Cancelar
                        </Button>
                    </HStack>
                </VStack>
            </VStack>
        </Box>
    )
}

export default BicycleRegister;