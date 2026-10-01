import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
           return res.status(400).json({ message: 'Todos los campos son requeridos' }) 
        }

        const admin = await Admin.findOne({ email })

        if (!admin) {
           return res.status(401).json({ message: 'Credenciales incorrectas' }) 
        }

        const passwordMatch = await bcrypt.compare(password, admin.password);
        
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Credenciales incorrectas' })
        }

        const token = jwt.sign(
            {
                id: admin._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        )

        return res.status(200).json({
            message: 'Inicio de sesión correcto',
            token,
            admin: {
                id: admin._id,
                email: admin.email
            }
        })
    } catch (error) {
        next(error)
    }
}