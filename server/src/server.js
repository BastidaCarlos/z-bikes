import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import registroRoutes from "./routes/registroRoutes.js";
import resultadosRoutes from "./routes/resultadosRoutes.js"
import authRoutes from "./routes/authRoutes.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: process.env.FRONTEND_URL
}));
app.use(express.json());

app.use('/api/registro', registroRoutes)

app.use('/api/resultados', resultadosRoutes)

app.use('/api/auth', authRoutes)

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() })
})

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    })
    .catch((error) => {
        console.error("Error al conectar a la base de datos:", error);
    })