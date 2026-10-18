import api from "./api";

export const getStaff = async () => {
    try {
        const response = await api.get('/staff')
        return response.data;
    } catch (error) {
        throw error
    }
}