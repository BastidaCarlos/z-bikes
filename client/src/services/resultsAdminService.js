import api from "./api";

export const uploadResults = async (archivo) => {
    try {
        const formData = new FormData()
        formData.append('archivo', archivo)
        const response = await api.post('/resultados/cargar', formData, {
            headers: { 'Content-Type': 'multipart/form-data'}
        })

        return response.data
    } catch (error) {
        throw error;
    }
}