import { Router } from "express";
import { registrarBicicleta, bicicletaResumen } from "../controllers/bicicletaController.js";
import validateBiciCode from "../middlewares/validateBiciCode.js";
import { uploadImage } from "../middlewares/upload.js";

const router = Router();

router.post('/', uploadImage.array('images', 3), validateBiciCode, registrarBicicleta)
router.get('/resumen/:id', bicicletaResumen);

export default router;