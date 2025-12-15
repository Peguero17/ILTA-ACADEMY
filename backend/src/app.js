import morgan from "morgan";
import express from "express";
import cors from "cors";
import solicitudesRoutes from "./routes/solicitudes.routes.js";
import catalogoRoutes from "./routes/catalogos.routes.js";
import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:3000", // React frontend
      "http://localhost:5173", // Panel Admin
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Rutas
app.use("/api/catalogos", catalogoRoutes);
app.use("/api/solicitudes", solicitudesRoutes);
app.use("/api", authRoutes);
app.use("/api/admin", adminRoutes);

export default app;
