import cloudinary from "../config/cloudinary.js"
import Participante from "../models/Participante.js"

const subirBufferCloudinary = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder: 'participantes',
                transformation: [{ width: 500, height: 500, crop: 'thumb', gravity: 'face' }]
            },
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
            }
        );

        stream.end(fileBuffer);
    });
};

export const registrarParticipante = async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ message: 'The image is required' });

        const { name, alias, age, phoneNumber, email, route } = req.body

        const participante = await Participante.findOne({ email });
        if (participante) return res.status(400).json({ message: 'The email already exists' }); 

        const resultadoCloudinary = await subirBufferCloudinary(req.file.buffer);

        const participanteData = {
            name,
            alias,
            age,
            phoneNumber,
            image: resultadoCloudinary.secure_url,
            email,
            route
        }

        const newParticipante = await Participante.create(participanteData)

        res.status(201).json({ newParticipante })
        
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message })
    }
}