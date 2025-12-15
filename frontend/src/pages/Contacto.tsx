import React, { useState } from "react";
import "../styles/pages/Contacto.css";
import { FormData } from "../types";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    alert("¡Mensaje enviado! Te responderemos pronto.");
    setFormData({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    });
  };

  return (
    <div className="contacto-page">
      <section className="contacto-hero">
        <div className="container">
          <h1 className="page-title">Contacto</h1>
          <p className="page-subtitle">
            Estamos aquí para ayudarte. Contáctanos y resuelve todas tus dudas
          </p>
        </div>
      </section>

      <section className="section contacto-section">
        <div className="container">
          <div className="contacto-grid">
            <div className="contacto-info">
              <h2 className="info-title">Información de Contacto</h2>
              <p className="info-description">
                Puedes comunicarte con nosotros a través de cualquiera de estos
                medios. Estaremos encantados de atenderte.
              </p>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">
                    <IoIosCall style={{ fontSize: "50px" }} />
                  </div>
                  <div className="contact-details">
                    <h3>Teléfono</h3>
                    <a href="tel:8095551234">(809) 555-1234</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <MdOutlineMail style={{ fontSize: "50px" }} />
                  </div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <a href="mailto:info@itlacademy.edu.do">
                      info@itlacademy.edu.do
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <CiLocationOn style={{ fontSize: "50px" }} />
                  </div>
                  <div className="contact-details">
                    <h3>Dirección</h3>
                    <p>
                      Av. Las Américas, Km. 27
                      <br />
                      Autopista Las Américas
                      <br />
                      Santo Domingo, República Dominicana
                    </p>
                  </div>
                </div>
              </div>

              <div className="horarios">
                <h3>Horarios de Atención</h3>
                <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                <p>Sábados: 9:00 AM - 1:00 PM</p>
              </div>
            </div>

            <div className="contacto-formulario">
              <h2 className="form-title">Envíanos un Mensaje</h2>
              <form className="contacto-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre Completo *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="asunto">Asunto *</label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                    placeholder="¿Sobre qué quieres consultar?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje *</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section preguntas-section">
        <div className="container">
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <div className="preguntas-grid">
            <div className="pregunta-card">
              <h3>¿Cuáles son las modalidades de estudio disponibles?</h3>
              <p>
                Ofrecemos modalidades virtual, presencial, semipresencial e
                in-house, adaptándonos a tus necesidades y preferencias de
                aprendizaje.
              </p>
            </div>

            <div className="pregunta-card">
              <h3>
                ¿El programa ITLAcademy es gratuito o de pago? ¿Existen opciones
                de patrocinio?
              </h3>
              <p>
                ITLAcademy ofrece programas de pago con opciones de patrocinio
                empresarial. Consulta los detalles de cada programa para conocer
                las opciones disponibles.
              </p>
            </div>

            <div className="pregunta-card">
              <h3>¿Con qué frecuencia se abren nuevos cursos o diplomados?</h3>
              <p>
                Nuestra oferta se actualiza trimestralmente, ofreciendo nuevas
                oportunidades de formación de forma continua. Adicionalmente se
                contempla la posibilidad de ejecutar capacitaciones bajo
                demanda, fuera del calendario regular.
              </p>
            </div>

            <div className="pregunta-card">
              <h3>
                ¿Cómo puedo saber si un programa es adecuado para mi perfil
                profesional?
              </h3>
              <p>
                Cada programa detalla el público objetivo al que va dirigido. Te
                recomendamos revisar esta información o contactarnos para
                recibir asesoramiento personalizado.
              </p>
            </div>

            <div className="pregunta-card">
              <h3>
                ¿ITLAcademy es lo mismo que el programa de Becas de Educación
                Continua?
              </h3>
              <p>
                No, ITLAcademy es una plataforma de formación continua diferente
                al programa de Becas. ITLAcademy se enfoca en programas
                especializados y de pago, mientras que el programa de Becas
                ofrece oportunidades de formación gratuita.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
