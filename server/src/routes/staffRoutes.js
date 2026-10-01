import { Router } from "express";
import { obtenerStaff } from "../controllers/staffController.js";

const router = Router();

router.get('/', obtenerStaff);

export default router;