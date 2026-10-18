import api from "./api";

export const getResumen = async () => {
    try {
        const response = await api.get('/admin/resumen')
        return response.data;
    } catch (error) {
        throw error
    }
}