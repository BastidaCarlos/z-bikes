import Bicicleta from "../models/Bicicleta.js";
import cloudinary from "../config/cloudinary.js";

const subirBufferCloudinary = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder: 'zbikes/bicicletas',
            },
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
            }
        );

        stream.end(fileBuffer);
    });
};

export const registrarBicicleta = async (req, res, next) => {
    try {
        const files = req.files || [];

        const promisesUpload = files.map(file => subirBufferCloudinary(file.buffer))

        const urlsImages = await Promise.all(promisesUpload)

        const newBicycle = await Bicicleta.create({
            ...req.body,
            images: urlsImages.map(result => result.secure_url)
        })

        return res.status(201).json({
            message: "Bicicleta Registrada",
            bicicleta: newBicycle 
        })
    } catch (error) {
        next(error)
    }
}

export const getBicycles = async (req, res, next) => {
    const { owner, brand, serialNumber, q } = req.query

    const filtro = {}

    if (owner) filtro.owner = owner;
    if (brand) filtro.brand = brand;
    if (serialNumber) filtro.serialNumber = serialNumber;

    if (q) {
        const searchFilter = [];

        searchFilter.push(
            {owner: { $regex: q, $options: 'i' }},
            {brand: { $regex: q, $options: 'i' }}
        )

        if (!isNaN(q) && q.trim() !== '') {
            const valueNumber = parseInt(q, 10);
            const qNumber = {
                serialNumber: valueNumber 
            };
            
            searchFilter.push(qNumber);
        }

        filtro.$or = searchFilter;
    }

    try {
        const matchResults = await Bicicleta.countDocuments(filtro)
        const results = await Bicicleta.find(filtro)

        return res.status(200).json({
            results,
            totalDocuments: matchResults
        })
    } catch (error) {
        next(error)
    }
}

export const getBicycleById = async (req, res, next) => {
    try {
        const { bikeId } = req.params;

        const bike = await Bicicleta.findById(bikeId)

        if (!bike) {
            return res.status(404).json({
                error: "Bicicleta no encontrada"
            })
        }

        return res.status(200).json({
            bike
        })
    } catch (error) {
        next(error)
    }
}

export const updateBike = async (req, res, next) => {
    try {
        const { bikeId } = req.params;
        const updateData = { ...req.body }

        const files = req.files || [];
        if (files.length > 0) {
            const promisesUpload = files.map(file => subirBufferCloudinary(file.buffer))
            const urlsImages = await Promise.all(promisesUpload)
            updateData.images = urlsImages.map(result => result.secure_url)
        }

        const updateBike = await Bicicleta.findByIdAndUpdate(
            bikeId,
            updateData,
            { returnDocument: 'after'}
        )

        if (!updateBike) {
            return res.status(404).json({ message: 'No existe esta bicicleta'})
        }

        return res.status(200).json({ message: 'Bicicleta actualizada', updateBike })

    } catch (error) {
        next(error)
    }
}

export const deleteBike = async (req, res, next) => {
    try {
        const { bikeId } = req.params

        const deletedBike = await Bicicleta.findByIdAndDelete(bikeId)

        if (!deletedBike) {
            return res.status(404).json({ error: "No existe esta bicicleta"})
        }

        return res.status(200).json({ message: "Bicicleta eliminada permanentemente"})
    } catch (error) {
        next(error)
    }
}