import api from "./api";

export const loginAdmin = async (credentials) => {
    const response = await api.post('/auth/login', credentials)

    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
    }

    return response.data;
}

export const logout = () => {
    localStorage.removeItem('token')
}

export const pingServer = async () => {
   try {
    await api.get('/api/healt')
   } catch (error) {
    console.log("Despertando servidor...", error)
   } 
}
