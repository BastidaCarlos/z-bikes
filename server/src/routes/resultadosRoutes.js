import { Router } from "express";
import { uploadCsv } from "../middlewares/upload.js";
import { cargarResultados, obtenerResultados } from "../controllers/resultadosController.js";
import { proteger } from "../middlewares/auth.js";

const router = Router();

router.post('/cargar', proteger, uploadCsv.single('archivo'), cargarResultados);

router.get('/', obtenerResultados);

export default router;