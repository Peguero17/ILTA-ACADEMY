export class Solicitud {
  constructor({
    nombre,
    apellido,
    email,
    telefono,
    programa_id,
    modalidad_id,
    empresa,
    comentarios,
    estado = "pendiente", // valor por defecto
    creado_en = new Date(),
    actualizado_en = new Date(),
  }) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.telefono = telefono;
    this.programa_id = programa_id;
    this.modalidad_id = modalidad_id;
    this.empresa = empresa;
    this.comentarios = comentarios;
    this.estado = estado;
    this.creado_en = creado_en;
    this.actualizado_en = actualizado_en;
  }
}
