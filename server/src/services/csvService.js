import fs from "fs";
import csv from "csv-parser";

function procesarCSVResultados(rutaArchivo) {
    return new Promise((resolve, reject) => {
        const resultados = [];

        const streamLectura = fs.createReadStream(rutaArchivo);

        streamLectura.on('error', (error) => {
            reject(error);
        });

        streamLectura
            .pipe(csv({
                mapValues: ({ header, value }) => {
                    const camposNumericos = ['number', 'age', 'position', 'edition'];
                    if (camposNumericos.includes(header)) {
                        return parseInt(value, 10);
                    }

                    return value;
                }
            }))
            .on('data', (data) => resultados.push(data))
            .on('end', () => {
                fs.unlink(rutaArchivo, (error) => {
                    if (error) {
                        console.error("No se puedo eliminar el archivo:", error.message)
                        return reject(error);
                    }

                    console.log("Archivo eliminado")
                    resolve(resultados)
                })
            })
            .on('error', (error) => {
                reject(error);
            })
    })
}

export default procesarCSVResultados;