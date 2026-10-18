import Staff from "../models/Staff.js";
import Resultado from "../models/Resultado.js";
import Bicicleta from "../models/Bicicleta.js";

export const obtenerResumen = async (req, res, next) => {
    try {
        const [ results, activeStaff, inactiveStaff, bicicletas ] = await Promise.all([
            Resultado.countDocuments(),
            Staff.countDocuments({ isActive: true }),
            Staff.countDocuments({ isActive: false }),
            Bicicleta.countDocuments()
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
                    },
                    bicicletas: {
                        totalRegistradas: bicicletas
                    }
                }
            }
        )

    } catch (error) {
        next(error)
    }
}
