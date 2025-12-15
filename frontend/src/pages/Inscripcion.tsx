import React, { useState, useEffect } from "react";
import "../styles/pages/Inscripcion.css";
import { FormData, Programa, Modalidad } from "../types";
import SnackbarAlert from "../components/Alert";
import { useLocation } from "react-router-dom";

const Inscripcion: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    programa_id: 0,
    modalidad_id: 0,
    empresa: "",
    comentarios: "",
  });

  const [alertInfo, setAlertInfo] = useState({
    open: false,
    severity: "success" as "success" | "error",
    message: "",
  });

  const [programas, setProgramas] = useState<Programa[]>([]);

  const [modalidades, setModalidades] = useState<Modalidad[]>([]);

  const { hash } = useLocation(); // para manejar el scroll al formulario

  useEffect(() => {
    if (hash === "#formulario") {
      const el = document.getElementById("formulario");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300); // pequeño delay para que cargue bien el DOM
      }
    }
  }, [hash]);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const resProgramas = await fetch(
          "http://localhost:4000/api/catalogos/programas"
        );
        const dataProgramas = await resProgramas.json();
        setProgramas(dataProgramas);

        const resModalidades = await fetch(
          "http://localhost:4000/api/catalogos/modalidades"
        );
        const dataModalidades = await resModalidades.json();
        setModalidades(dataModalidades);
      } catch (error) {
        console.error("Error cargando catálogos:", error);
      }
    };

    cargarDatos();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name.endsWith("_id") ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/solicitudes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert("Error al enviar el formulario: " + data.error);
        return;
      }
      setAlertInfo({
        open: true,
        severity: "success",
        message: "Formulario enviado con éxito",
      });
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        programa_id: 0,
        modalidad_id: 0,
        empresa: "",
        comentarios: "",
      });
    } catch (error) {
      setAlertInfo({
        open: true,
        severity: "error",
        message: "Error al enviar el formulario",
      });
      console.error(error);
    }
  };

  return (
    <div className="inscripcion-page">
      {/* Hero */}
      <section className="inscripcion-hero">
        <div className="container">
          <h1 className="page-title">Inscripción</h1>
          <p className="page-subtitle">
            Completa el formulario para reservar tu cupo en nuestros programas
          </p>
        </div>
      </section>

      {/* Proceso */}
      <section className="section proceso-section">
        <div className="container">
          <h2 className="section-title">
            Tu Camino al Éxito Digital, ¡Fácil y Rápido!
          </h2>
          <p className="section-subtitle">
            El proceso de inscripción se gestiona a través de nuestro portal
          </p>

          <div className="proceso-steps">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="proceso-step">
                <div className="step-number">{num}</div>
                {num === 1 && (
                  <>
                    <h3>Crea tu Perfil</h3>
                    <p>Registra tus datos y crea tu cuenta personal</p>
                  </>
                )}
                {num === 2 && (
                  <>
                    <h3>Explora la Oferta</h3>
                    <p>Consulta los programas disponibles por trimestre</p>
                  </>
                )}
                {num === 3 && (
                  <>
                    <h3>Reserva tu Cupo</h3>
                    <p>Selecciona tu curso y completa la inscripción</p>
                  </>
                )}
                {num === 4 && (
                  <>
                    <h3>¡Comienza a Transformarte!</h3>
                    <p>Inicia tu journey hacia el éxito profesional</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section id="formulario" className="section formulario-section">
        <div className="container">
          <div className="formulario-container">
            <div className="formulario-header">
              <h2>Formulario de Solicitud</h2>
              <p>Completa todos los campos para procesar tu inscripción</p>
            </div>

            <form className="inscripcion-form" onSubmit={handleSubmit}>
              {/* Nombre y apellido */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="apellido">Apellido *</label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              {/* Email y teléfono */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tucorreo@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="telefono">Teléfono *</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    placeholder="(809) 555-1234"
                  />
                </div>
              </div>

              {/* Programa y Modalidad */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="programa">Programa de Interés *</label>
                  <select
                    id="programa_id"
                    name="programa_id"
                    value={formData.programa_id}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona un programa</option>

                    {programas.map((prog) => (
                      <option key={prog.id} value={prog.id}>
                        {prog.nombre}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="modalidad">Modalidad *</label>
                  <select
                    id="modalidad_id"
                    name="modalidad_id"
                    value={formData.modalidad_id}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona una modalidad</option>

                    {modalidades.map((mod) => (
                      <option key={mod.id} value={mod.id}>
                        {mod.nombre}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Empresa */}
              <div className="form-group">
                <label htmlFor="empresa">Empresa (Opcional)</label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Nombre de empresa"
                />
              </div>

              {/* Comentarios */}
              <div className="form-group">
                <label htmlFor="comentarios">Comentarios</label>
                <textarea
                  id="comentarios"
                  name="comentarios"
                  value={formData.comentarios}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Cuéntanos más..."
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary btn-large">
                  Enviar Solicitud
                </button>
                <SnackbarAlert
                  open={alertInfo.open}
                  severity={alertInfo.severity}
                  message={alertInfo.message}
                  onClose={() => setAlertInfo({ ...alertInfo, open: false })}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inscripcion;
