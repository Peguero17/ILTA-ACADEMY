import { Router } from "express";
import { crearSolicitud } from "../controllers/solicitudes.controller.js";

const router = Router();

router.post("/", crearSolicitud);

export default router;
