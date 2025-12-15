import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/Home.css";
import {
  FaBriefcase,
  FaRobot,
  FaCalendarAlt,
  FaGraduationCap,
  FaBuilding,
} from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            ITLAcademy: Impulsando la Productividad en las Industrias
            Dominicanas
          </h1>
          <p className="hero-subtitle">
            Plataforma de formación continua ágil, accesible y especializada en
            tecnologías emergentes
          </p>
          <div className="hero-actions">
            <Link to="/programas#cursos" className="btn btn-secondary">
              Explora Nuestros Programas
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <hr />
      <section className="section about-section">
        <div className="container">
          <h2 className="section-title">¿Qué es ITLAcademy?</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3 className="card-title">Educación de Vanguardia</h3>
              <p className="card-text">
                ITLAcademy es la nueva plataforma de Educación Continua del
                Instituto Tecnológico de Las Américas (ITLA), diseñada para
                ofrecer formación de vanguardia en tecnologías emergentes.
                Nuestro objetivo es fortalecer tus competencias digitales para
                que te mantengas competitivo en un mercado laboral dinámico y
                exigente.
              </p>
            </div>
            <div className="card">
              <h3 className="card-title">Nuestro Legado</h3>
              <p className="card-text">
                Desde su fundación en el año 2000, el ITLA se ha consolidado
                como la institución líder en educación tecnológica del país,
                habiendo formado a más de 254,000 dominicanos en el área de
                tecnologías aplicadas. ITLAcademy es la evolución natural de
                este legado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Section */}
      <section className="section mission-section">
        <div className="container">
          <div className="grid grid-2">
            <div className="mission-card">
              <h3 className="mission-title">Misión</h3>
              <p>
                Ofrecer formación continua, accesible y de vanguardia en
                tecnologías emergentes que impulse la competitividad del talento
                corporativo, respondiendo con agilidad a las demandas de los
                sectores productivos y contribuyendo al desarrollo tecnológico y
                sostenible de la sociedad.
              </p>
            </div>
            <div className="mission-card">
              <h3 className="mission-title">Visión</h3>
              <p>
                Ser la primera plataforma en educación continua especializada y
                de alto nivel en áreas tecnológicas, reconocida como referente
                para el sector empresarial por su excelencia académica, la
                innovación de sus programas de estudio y su impacto en la
                productividad y sostenibilidad de las organizaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="section programs-preview">
        <div className="container">
          <h2 className="section-title">
            Programas a la Vanguardia Tecnológica
          </h2>
          <p className="section-subtitle">
            Nuestra oferta formativa robusta está alineada con las tendencias
            globales y las necesidades del mercado, en alianza con T-ECO Group.
          </p>
          <div className="grid grid-3">
            <div className="program-card">
              <div className="program-icon">
                <FaBriefcase />
              </div>
              <h3 className="program-title">
                Diplomado en Transformación Digital
              </h3>
              <p className="program-description">
                Domina las herramientas y estrategias necesarias para liderar
                procesos de transformación digital en tu organización.
              </p>
              <Link to="/programas" className="program-link">
                Ver más →
              </Link>
            </div>
            <div className="program-card">
              <div className="program-icon">
                <GiPadlock />
              </div>
              <h3 className="program-title">
                Diplomado en Ciberseguridad Integral
              </h3>
              <p className="program-description">
                Conviértete en un experto en protección de sistemas y datos,
                desarrollando estrategias de seguridad robustas.
              </p>
              <Link to="/programas" className="program-link">
                Ver más →
              </Link>
            </div>
            <div className="program-card">
              <div className="program-icon">
                <FaRobot />
              </div>
              <h3 className="program-title">Diplomado en Herramientas de IA</h3>
              <p className="program-description">
                Explora el futuro de la inteligencia artificial y aprende a
                implementar soluciones basadas en IA.
              </p>
              <Link to="/programas" className="program-link">
                Ver más →
              </Link>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: "3rem" }}>
            <Link to="/programas#cursos" className="btn btn-primary">
              Ver Toda la Oferta Académica
            </Link>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="section target-section">
        <div className="container">
          <h2 className="section-title">Dirigido a Ti</h2>
          <p className="section-subtitle">
            El programa está diseñado para una audiencia amplia comprometida con
            la actualización profesional y el crecimiento en el sector
            tecnológico
          </p>
          <div className="grid grid-3">
            <div className="target-card">
              <h4>Profesionales en Ejercicio</h4>
              <p>
                Profesionales que buscan especializarse en herramientas
                digitales y mantenerse competitivos.
              </p>
            </div>
            <div className="target-card">
              <h4>Técnicos y Tecnólogos STEM</h4>
              <p>
                Especialistas técnicos en áreas de ciencia, tecnología,
                ingeniería y matemáticas.
              </p>
            </div>
            <div className="target-card">
              <h4>Estudiantes Universitarios</h4>
              <p>
                Estudiantes con aspiraciones en campos tecnológicos que buscan
                complementar su formación.
              </p>
            </div>
            <div className="target-card">
              <h4>Egresados del ITLA</h4>
              <p>
                Alumni interesados en continuar su formación profesional de
                calidad.
              </p>
            </div>
            <div className="target-card">
              <h4>Empresas y Organizaciones</h4>
              <p>
                Organizaciones que requieren capacitación personalizada y
                formación corporativa.
              </p>
            </div>
            <div className="target-card">
              <h4>Emprendedores</h4>
              <p>
                Emprendedores y actores del ecosistema de innovación
                tecnológica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section advantages-section">
        <div className="container">
          <h2 className="section-title">Ventajas que Impulsan tu Carrera</h2>
          <div className="grid grid-2">
            <div className="advantage-item">
              <div className="advantage-icon">
                <FaCalendarAlt />
              </div>
              <h3>Formación Flexible</h3>
              <p>
                Operamos bajo un esquema trimestral, actualizando la oferta y
                contenidos. Capacitaciones bajo demanda para sectores
                productivos y empresas.
              </p>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">
                <FaGraduationCap />
              </div>
              <h3>Modalidades Variadas</h3>
              <p>
                Virtual, presencial, semipresencial e in-house, según tus
                necesidades y preferencias de aprendizaje.
              </p>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">
                <FaBuilding />
              </div>
              <h3>Patrocinio Empresarial</h3>
              <p>
                Programas de pago con facilidades de patrocinio empresarial y
                servicios de capacitación in-house personalizados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Tu Camino al Éxito Digital, ¡Fácil y Rápido!
            </h2>
            <p className="cta-text">
              El proceso de inscripción se gestiona a través de nuestro nuevo
              portal de ITLAcademy
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
