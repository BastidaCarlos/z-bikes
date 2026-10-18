import api from "./api";

export const getResults = async (filtros = {}) => {
    const params = new URLSearchParams()

    if (filtros.route) params.append('route', filtros.route);
    if (filtros.q) params.append('q', filtros.q);
    if (filtros.page) params.append('page', filtros.page);
    if (filtros.limit) params.append('limit', filtros.limit);

    const response = await api.get(`/resultados?${params.toString()}`);
    return response.data
}