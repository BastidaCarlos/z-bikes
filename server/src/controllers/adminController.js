import Staff from "../models/Staff.js";
import Resultado from "../models/Resultado.js";

export const obtenerResumen = async (req, res, next) => {
    try {
        const [ results, activeStaff, inactiveStaff ] = await Promise.all([
            Resultado.countDocuments(),
            Staff.countDocuments({ isActive: true }),
            Staff.countDocuments({ isActive: false })
        ])

        return res.status(200).json(
            {
                message: 'Datos obtenidos con éxito',
                resumen: {
                    resultados: {
                        totalCargados: results
                    },
                    staff: {
                        activos: activeStaff,
                        inactivos: inactiveStaff,
                        total: activeStaff + inactiveStaff
                    }
                }
            }
        )

    } catch (error) {
        next(error)
    }
}
