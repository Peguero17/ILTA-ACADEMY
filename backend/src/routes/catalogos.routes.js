import { Router } from "express";
import {
  getProgramas,
  getModalidades,
} from "../controllers/catalogos.controller.js";

const router = Router();

router.get("/programas", getProgramas);
router.get("/modalidades", getModalidades);

export default router;
