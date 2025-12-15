import { dbPool } from "../config/dbConfig.js";

export const getProgramas = async (req, res) => {
  try {
    const [rows] = await dbPool.query(`
      SELECT id, nombre 
      FROM programas 
      WHERE activo = 1
    `);

    res.json(rows);
  } catch (error) {
    console.error("Error cargando programas:", error);
    res.status(500).json({ error: error.message });
  }
};

export const getModalidades = async (req, res) => {
  try {
    const [rows] = await dbPool.query(`
      SELECT id, nombre 
      FROM modalidades 
      WHERE activo = 1
    `);

    res.json(rows);
  } catch (error) {
    console.error("Error cargando modalidades:", error);
    res.status(500).json({ error: error.message });
  }
};
