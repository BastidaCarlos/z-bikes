import api from "./api";

export const registrarBicicleta = async (formData, biciCode) => {
    try {
        const response = await api.post('/bicicletas', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'x-bici-code': biciCode || ''
            }
        });
        return response.data
    } catch (error) {
        throw error
    }
}

export const getBicicletas = async (filtros = {}) => {
    const params = new URLSearchParams()

    if (filtros.owner) params.append('owner', filtros.owner);
    if (filtros.brand) params.append('brand', filtros.brand);
    if (filtros.serialNumber) params.append('serialNumber', filtros.serialNumber);
    if (filtros.q) params.append('q', filtros.q);
    if (filtros.page) params.append('page', filtros.page);
    if (filtros.limit) params.append('limit', filtros.limit);

    const response = await api.get(`/admin/bicicletas?${params.toString()}`);
    return response.data
}

export const getBicicletaById = async (id) => {
    try {
        const response = await api.get(`/admin/bicicletas/${id}`)
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getBicicletaResumen = async (id) => {
    try {
        const response = await api.get(`/bicicletas/resumen/${id}`)
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const updateBicicleta = async (id, formData) => {
    try {
        const response = await api.patch(`/admin/bicicletas/editar/${id}`, formData);
        return response.data
    } catch (error) {
        throw error
    }
}

export const deleteBicicleta = async (id) => {
    try {
        const response = await api.delete(`/admin/bicicletas/delete/${id}`)
        return response.data
    } catch (error) {
        throw error;
    }
}