import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Importacion de rutas
import adminRoutes from "./routes/adminRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import resultadosRoutes from "./routes/resultadosRoutes.js"
import staffRoutes from "./routes/staffRoutes.js"

// Importacion del middleware errorHandler
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: process.env.FRONTEND_URL
}));
app.use(express.json());

// Endpoints publicos y privados
app.use('/api/auth', authRoutes)
app.use('/api/resultados', resultadosRoutes)
app.use('/api/staff', staffRoutes)
app.use('/api/admin', adminRoutes)

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() })
})

app.use(errorHandler);

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    })
    .catch((error) => {
        console.error("Error al conectar a la base de datos:", error);
    })