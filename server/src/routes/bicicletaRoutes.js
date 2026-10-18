import { Router } from "express";
import { registrarBicicleta } from "../controllers/bicicletaController.js";
import validateBiciCode from "../middlewares/validateBiciCode.js";
import { uploadImage } from "../middlewares/upload.js";

const router = Router();

router.post('/', validateBiciCode, uploadImage.array('images', 3), registrarBicicleta)

export default router;