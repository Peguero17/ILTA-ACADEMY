import "dotenv/config.js";
import { connectDB } from "./config/db.js";
import app from "./app.js";

// Probar conexión
connectDB();

app.listen(process.env.PORT || 5000, () => {
  console.log("Servidor corriendo en puerto:", process.env.PORT);
});
