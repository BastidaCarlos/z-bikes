import Staff from "../models/Staff.js";
import cloudinary from "../config/cloudinary.js";

const subirBufferCloudinary = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder: 'staff',
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

export const obtenerStaff = async (req, res, next) => {
    try {
        const staffList = await Staff.find({ isActive: true }).sort({ name: 1 })
        return res.status(200).json({
            staffList, 
            message: `Miembros del Staff ${staffList.length}`
        })
    } catch (error) {
        next(error)
    }
}

export const obtenerAdminStaff = async (req, res, next) => {
    try {
        const staffList = await Staff.find();
        return res.status(200).json({
            staffList,
            message: `Miembros del Staff ${staffList.length}`
        })
    } catch (error) {
        next(error)
    }
}

export const crearStaff = async (req, res, next) => {
    try {
        const { name, rol } = req.body;

        if (!name || !rol) {
            return res.status(400).json({ message: 'El nombre y el rol son obligatorios'})
        }

        if (!req.file) {
            return res.status(400).json({ message: 'La imagen es obligatoria' })
        }

        const memberStaff = await Staff.findOne({ name });
        if (memberStaff) return res.status(400).json({ message: 'Este miembro del staff ya existe'}) 

        const cloudinaryUpload = await subirBufferCloudinary(req.file.buffer); 

        const memberData = {
            name,
            rol,
            image: {
                url: cloudinaryUpload.secure_url,
                public_id: cloudinaryUpload.public_id
            }
        }

        const newMemberStaff = await Staff.create(memberData);

        return res.status(201).json({ newMemberStaff });
    } catch (error) {
        next(error)
    }
}

export const actualizarStaff = async (req, res, next) => {
    try {
        const staffId = req.params.id;
        const { name, rol } = req.body;

        const upadateData = {};
        if (name) upadateData.name = name
        if (rol) upadateData.rol = rol 

        if (req.file) {
            const existingMember = await Staff.findById(staffId);

            if (existingMember && existingMember.image && existingMember.image.public_id) {
                
                await cloudinary.uploader.destroy(existingMember.image.public_id);
            }

            const cloudinaryUpload = await subirBufferCloudinary(req.file.buffer)

            upadateData.image = {
                url: cloudinaryUpload.secure_url,
                public_id: cloudinaryUpload.public_id
            }
        }

        const updateMember = await Staff.findByIdAndUpdate(
            staffId,
            upadateData,
            { returnDocument: 'after' }
        )

        if (!updateMember) {
            return res.status(404).json({ message: 'No existe este miembro del Staff'})
        }

        return res.status(200).json({ message: 'Miembro actualizado', updateMember })

    } catch (error) {
        next(error)
    }
}

export const actualizarStatusStaff = async (req, res, next) => {
    try {
        const staffId = req.params.id
        const { isActive } = req.body;

        const updatedMember = await Staff.findByIdAndUpdate(
            staffId,
            { isActive },
            { returnDocument: 'after' }
        )

        return res.status(200).json({
            message: "Estado actualizado",
            updatedMember
        })
    } catch (error) {
        next(error)
    }
}

export const eliminarStaffPermanente = async (req, res, next) => {
    try {
        const staffId = req.params.id;
        const member = await Staff.findById(staffId);

        if (!member) {
            return res.status(404).json({ message: 'No existe este miembro'})
        }

        if (member.image && member.image.public_id) {
            await cloudinary.uploader.destroy(member.image.public_id)
        }

        await Staff.findByIdAndDelete(staffId);

        return res.status(200).json({ message: 'Miembor eliminado'})
    } catch (error) {
        next(error)
    }
}