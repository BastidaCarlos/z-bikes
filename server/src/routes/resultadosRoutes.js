import { Router } from "express";
import { uploadCsv } from "../middlewares/upload.js";
import { cargarResultados, obtenerResultados } from "../controllers/resultadosController.js";

const router = Router();

router.post('/cargar', uploadCsv.single('archivo'), cargarResultados);

router.get('/', obtenerResultados);

export default router;