import { Router } from "express";
import { authRequired } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/users", authRequired, (req, res) => {
  res.json({
    message: "Ruta protegida OK",
    user: req.user,
  });
});

export default router;
