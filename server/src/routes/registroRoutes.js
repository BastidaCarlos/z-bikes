import { Router } from "express"
import { uploadImage } from "../middlewares/upload.js"
import { registrarParticipante } from "../controllers/registroController.js"

const router = Router();

router.post('/', uploadImage.single('image'), registrarParticipante)

export default router;