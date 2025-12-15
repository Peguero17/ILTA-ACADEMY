import db from "../config/db.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const [rows] = await db.query(
      "SELECT * FROM admin_users WHERE email = ? LIMIT 1",
      [email]
    );

    if (rows.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = rows[0];

    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = await createAccessToken({
      id: user.id,
      role: user.role,
    });

    res.json({
      message: "Login success",
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // true en producción con https
  });

  return res.status(200).json({ message: "Logout success" });
};
