import { Router } from "express";
import { proteger } from "../middlewares/auth.js";
import { obtenerResumen } from "../controllers/adminController.js";
import { obtenerAdminStaff, crearStaff, actualizarStaff, actualizarStatusStaff, eliminarStaffPermanente } from "../controllers/staffController.js";
import { uploadImage } from "../middlewares/upload.js";
import { getBicycles, getBicycleById, updateBike, deleteBike } from "../controllers/bicicletaController.js";

const router = Router();

router.use(proteger);

router.get('/resumen', obtenerResumen);
router.get('/staff', obtenerAdminStaff)
router.post('/staff', uploadImage.single('image'), crearStaff);
router.patch('/staff/:id/status', actualizarStatusStaff);
router.patch('/staff/:id', uploadImage.single('image'), actualizarStaff)
router.delete('/staff/:id', eliminarStaffPermanente)

router.get('/bicicletas', getBicycles)
router.get('/bicicletas/:bikeId', getBicycleById)
router.patch('/bicicletas/editar/:bikeId', uploadImage.array('images', 3), updateBike)
router.delete('/bicicletas/delete/:bikeId', deleteBike)

export default router;