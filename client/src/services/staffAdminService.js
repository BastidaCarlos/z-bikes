import api from "./api";

export const getStaffAdmin = async () => {
    try {
        const response = await api.get('/admin/staff')
        return response.data;
    } catch (error) {
        throw error
    }
}

export const createStaff = async (FormData) => {
    try {
        const response = await api.post('/admin/staff', FormData)
        return response.data
    } catch (error) {
        throw error;
    }
}

export const updateStaff = async (id, updateData) => {
    try {
        const response = await api.patch(`/admin/staff/${id}`, updateData)
        return response.data;
    } catch (error) {
        throw error 
    }
}

export const updateStaffStatus = async (id, isActive) => {
    try {
        const response = await api.patch(`/admin/staff/${id}/status`, { isActive })
        return response.data
    } catch (error) {
        throw error
    }
}

export const deleteStaffService = async (id) => {
    try {
        const response = await api.delete(`/admin/staff/${id}`)
        return response.data;
    } catch (error) {
        throw error
    }
}

