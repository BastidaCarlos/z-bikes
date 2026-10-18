import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import Admin from "../models/Admin.js";

const crearAdministrador = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const adminData = {
            email: 'zbikesmtbsanjuanz@gmail.com',  
            password: 'adminzbikes2026Retoz'
        }

        const admin = await Admin.findOne({ email: adminData.email });
        if (admin) {
            console.log('El administrador ya existe');
            return;
        }

        const newAdmin = new Admin(adminData);
        await newAdmin.save();

        console.log('Administrador creado con éxito')
    } catch (error) {
        console.error('Internal server error', error)
    } finally {
        await mongoose.connection.close();
        console.log('Conexión a la base de datos cerrada');
    }
}

crearAdministrador();