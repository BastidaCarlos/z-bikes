import Resultado from "../models/Resultado.js";
import procesarCSVResultados from "../services/csvService.js";

export const cargarResultados = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No se ha subido ningún archivo'})
        }
        const rutaTemporal = req.file.path

        const listaResultados = await procesarCSVResultados(rutaTemporal);
        await Resultado.deleteMany({ edition: 2026 });
        const resultado = await Resultado.insertMany(listaResultados);

        res.status(201).json({
            message: 'Resultados subidos con éxito',
            totalResultados: resultado.length
        })
    } catch (error) {
        res.status(500).json({ message: 'No se pudo subir los resultados' })
    }
}

export const obtenerResultados = async (req, res) => {
    const { route, category, edition, q } = req.query
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;

    const offset = (page -1) * limit;

    const filtro = {};

    if (route) filtro.route = route; 
    if (category) filtro.category = category; 
    if (edition) filtro.edition = edition; 

    if (q) {
        const searchFilter = [];
        const qText = {
            name: {
                $regex: q,
                $options: 'i'
            }
        }
        searchFilter.push(qText);

        if (!isNaN(q) && q.trim() !== '') {
            const valueNumber = parseInt(q, 10);
            const qNumber = {
                number: valueNumber 
            };
            
            searchFilter.push(qNumber);
        }

        filtro.$or = searchFilter;
    }

    try {
        const matchResults = await Resultado.countDocuments(filtro)
        const results = await Resultado.find(filtro)
            .skip(offset)
            .limit(limit)
            .sort({ position: 1 })

        res.status(200).json({
            results,
            actualPage: page,
            limit: limit,
            totalDocuments: matchResults,
            totalPages: Math.ceil( matchResults / limit )
        })
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
}