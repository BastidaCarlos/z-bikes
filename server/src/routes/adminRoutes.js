import { Router } from "express";
import { proteger } from "../middlewares/auth.js";
import { obtenerResumen } from "../controllers/adminController.js";
import { crearStaff, actualizarStaff, eliminarStaff } from "../controllers/staffController.js";
import { uploadImage } from "../middlewares/upload.js";

const router = Router();

router.use(proteger);

router.get('/resumen', obtenerResumen);
router.post('/staff', uploadImage.single('image'), crearStaff);
router.patch('/staff/:id', uploadImage.single('image'), actualizarStaff)
router.delete('/staff/:id', eliminarStaff);

export default router;