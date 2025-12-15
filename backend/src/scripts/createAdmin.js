import bcrypt from "bcryptjs";
import dbPool from "../config/db.js";
import dotenv from "dotenv";

dotenv.config();

async function createAdmin() {
  const username = "admin";
  const email = "admin@academy.com";
  const password = "Admin123*";

  const hash = await bcrypt.hash(password, 10);

  await dbPool.query(
    "INSERT INTO admin_users (username, email, password_hash, role) VALUES (?, ?, ?, ?)",
    [username, email, hash, "admin"]
  );

  console.log("✅ Admin creado correctamente");
  process.exit();
}

createAdmin().catch((err) => {
  console.error("❌ Error creando admin:", err);
  process.exit(1);
});
