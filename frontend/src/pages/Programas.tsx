import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/pages/Programas.css";
import { ProgramaCard } from "../types";
import { FaBriefcase, FaRobot, FaShieldAlt } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { IoBarChartSharp } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { FaComputer, FaHouseChimney } from "react-icons/fa6";
import { BiSolidInstitution } from "react-icons/bi";
import { RiResetLeftFill } from "react-icons/ri";

const Programas: React.FC = () => {
  const programas: ProgramaCard[] = [
    {
      id: 1,
      title: "Diplomado en Transformación Digital",
      description:
        "Domina las herramientas y estrategias necesarias para liderar procesos de transformación digital en tu organización. Aprende a implementar tecnologías emergentes y metodologías ágiles para modernizar tu empresa.",
      duration: "120 horas",
      modality: "Virtual / Presencial",
      icon: <FaBriefcase />,
    },
    {
      id: 2,
      title: "Diplomado en Ciberseguridad Integral y Resiliencia Digital",
      description:
        "Conviértete en un experto en protección de sistemas y datos, desarrollando estrategias de seguridad robustas. Aprende a gestionar riesgos cibernéticos y proteger la infraestructura digital de tu organización.",
      duration: "140 horas",
      modality: "Virtual / Presencial",
      icon: <GiPadlock />,
    },
    {
      id: 3,
      title: "Diplomado en Herramientas de IA y Modelos de Lenguaje",
      description:
        "Explora el futuro de la inteligencia artificial y aprende a implementar soluciones basadas en IA. Domina herramientas avanzadas de machine learning y modelos de lenguaje para aplicaciones empresariales.",
      duration: "130 horas",
      modality: "Virtual / Presencial",
      icon: <FaRobot />,
    },
    {
      id: 4,
      title: "Curso de Gestión y Orquestación de Respuesta ante Incidentes",
      description:
        "Desarrolla habilidades críticas para la gestión eficaz de incidentes de ciberseguridad. Aprende a coordinar respuestas rápidas y efectivas ante amenazas y vulnerabilidades.",
      duration: "60 horas",
      modality: "Virtual / Presencial",
      icon: <FaShieldAlt />,
    },
    {
      id: 5,
      title: "Diplomado en Gestión de Proyectos Tecnológicos",
      description:
        "Aprende metodologías ágiles y mejores prácticas para liderar proyectos tecnológicos exitosos. Domina herramientas de gestión y técnicas de planificación para entregar proyectos a tiempo y dentro del presupuesto.",
      duration: "110 horas",
      modality: "Virtual / Presencial",
      icon: <IoBarChartSharp />,
    },
  ];
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === "#cursos") {
      const el = document.getElementById("cursos");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300); // pequeño delay para que cargue bien el DOM
      }
    }
  }, [hash]);

  return (
    <div className="programas-page">
      <section className="programas-hero">
        <div className="container">
          <h1 className="page-title">Nuestros Programas</h1>
          <p className="page-subtitle">
            Formación especializada en tecnologías emergentes, diseñada para
            impulsar tu carrera profesional
          </p>
        </div>
      </section>

      <section className="section programas-section">
        <div className="container">
          <div className="programas-intro">
            <h2 id="cursos" className="section-title">
              Programas a la Vanguardia Tecnológica
            </h2>
            <p className="section-subtitle">
              Nuestra oferta formativa robusta está alineada con las tendencias
              globales y las necesidades del mercado, en alianza con T-ECO
              Group. Cada programa está diseñado para brindarte las competencias
              necesarias para destacar en el sector tecnológico.
            </p>
          </div>

          <div className="programas-grid">
            {programas.map((programa) => (
              <div key={programa.id} className="programa-card">
                <div className="programa-header">
                  <div className="programa-icon-large">{programa.icon}</div>
                  <h3 className="programa-name">{programa.title}</h3>
                </div>
                <p className="programa-description">{programa.description}</p>
                <div className="programa-details">
                  <div className="programa-detail-item">
                    <span className="detail-label">Duración:</span>
                    <span className="detail-value">{programa.duration}</span>
                  </div>
                  <div className="programa-detail-item">
                    <span className="detail-label">Modalidad:</span>
                    <span className="detail-value">{programa.modality}</span>
                  </div>
                </div>
                <div className="programa-actions">
                  <Link
                    to="/inscripcion#formulario"
                    className="btn btn-primary"
                  >
                    Inscribirse
                  </Link>
                  <button className="btn btn-secondary">Más Información</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section modalidades-section">
        <div className="container">
          <h2 className="section-title">Modalidades de Estudio</h2>
          <div className="grid grid-4">
            <div className="modalidad-card">
              <div className="modalidad-icon">
                <FaComputer />
              </div>
              <h3>Virtual</h3>
              <p>
                Aprende desde cualquier lugar con nuestras clases en línea
                interactivas y recursos digitales.
              </p>
            </div>
            <div className="modalidad-card">
              <div className="modalidad-icon">
                <BiSolidInstitution />
              </div>
              <h3>Presencial</h3>
              <p>
                Asiste a nuestras instalaciones para una experiencia de
                aprendizaje inmersiva y práctica.
              </p>
            </div>
            <div className="modalidad-card">
              <div className="modalidad-icon">
                <RiResetLeftFill />
              </div>
              <h3>Semipresencial</h3>
              <p>
                Combina lo mejor de ambos mundos con clases virtuales y sesiones
                presenciales.
              </p>
            </div>
            <div className="modalidad-card">
              <div className="modalidad-icon">
                <FaHouseChimney />
              </div>
              <h3>In-House</h3>
              <p>
                Capacitación personalizada en las instalaciones de tu empresa,
                adaptada a tus necesidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">¿Listo para comenzar tu formación?</h2>
            <p className="cta-text">
              Inscríbete ahora y forma parte de la nueva generación de
              profesionales tecnológicos
            </p>
            <Link
              to="/inscripcion#formulario"
              className="btn btn-primary btn-large"
            >
              Inscríbete Ahora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programas;
