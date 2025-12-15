import { dbPool } from "../config/dbConfig.js";
import { Solicitud } from "../models/solicitud.model.js";

export const crearSolicitud = async (req, res) => {
  try {
    const solicitud = new Solicitud(req.body);

    const query = `
      INSERT INTO solicitudes 
      (nombre, apellido, email, telefono, programa_id, modalidad_id, empresa, comentarios, estado, creado_en, actualizado_en)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      solicitud.nombre,
      solicitud.apellido,
      solicitud.email,
      solicitud.telefono,
      solicitud.programa_id,
      solicitud.modalidad_id,
      solicitud.empresa,
      solicitud.comentarios,
      solicitud.estado,
      solicitud.creado_en,
      solicitud.actualizado_en,
    ];

    const [result] = await dbPool.query(query, values);

    return res.json({
      message: "Solicitud creada correctamente",
      id: result.insertId,
    });
  } catch (error) {
    console.error("Error creando solicitud:", error);
    res.status(500).json({ error: "Error creando solicitud" });
  }
};
