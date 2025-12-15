import React from "react";
import "../styles/pages/Nosotros.css";
import {
  FaEye,
  FaGraduationCap,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa";
import { GiArrowsShield } from "react-icons/gi";
import { IoIosRocket } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { AiTwotoneThunderbolt } from "react-icons/ai";

const Nosotros: React.FC = () => {
  return (
    <div className="nosotros-page">
      <section className="nosotros-hero">
        <div className="container">
          <h1 className="page-title">Sobre Nosotros</h1>
          <p className="page-subtitle">
            Conoce más sobre ITLAcademy y nuestro compromiso con la educación
            tecnológica
          </p>
        </div>
      </section>

      <section className="section historia-section">
        <div className="container">
          <div className="historia-content">
            <h2 className="section-title">Nuestro Legado</h2>
            <div className="historia-text">
              <p>
                Desde su fundación en el año 2000, el ITLA se ha consolidado
                como la institución líder en educación tecnológica del país,
                habiendo formado a más de <strong>254,000 dominicanos</strong>{" "}
                en el área de tecnologías aplicadas. ITLAcademy es la evolución
                natural de este legado.
              </p>
              <p>
                Nuestra plataforma representa el compromiso continuo del ITLA
                con la excelencia educativa y la innovación tecnológica,
                adaptándose a las necesidades cambiantes del mercado laboral y
                las demandas de la industria.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section mision-vision-section">
        <div className="container">
          <div className="grid grid-2">
            <div className="mv-card mision-card">
              <div className="mv-icon">
                <GiArrowsShield />
              </div>
              <h3 className="mv-title">Misión</h3>
              <p className="mv-text">
                Ofrecer formación continua, accesible y de vanguardia en
                tecnologías emergentes que impulse la competitividad del talento
                corporativo, respondiendo con agilidad a las demandas de los
                sectores productivos y contribuyendo al desarrollo tecnológico y
                sostenible de la sociedad.
              </p>
            </div>
            <div className="mv-card vision-card">
              <div className="mv-icon">
                <FaEye />
              </div>
              <h3 className="mv-title">Visión</h3>
              <p className="mv-text">
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

      <section className="section valores-section">
        <div className="container">
          <h2 className="section-title">Nuestros Valores</h2>
          <div className="grid grid-3">
            <div className="valor-card">
              <div className="valor-icon">
                <IoIosRocket />
              </div>
              <h3>Innovación</h3>
              <p>
                Estamos comprometidos con la vanguardia tecnológica y la
                implementación de metodologías educativas innovadoras que
                preparen a nuestros estudiantes para los desafíos del futuro.
              </p>
            </div>
            <div className="valor-card">
              <div className="valor-icon">
                <FaGraduationCap />
              </div>
              <h3>Excelencia Académica</h3>
              <p>
                Mantenemos los más altos estándares de calidad en nuestros
                programas, asegurando que cada estudiante reciba una formación
                de clase mundial.
              </p>
            </div>
            <div className="valor-card">
              <div className="valor-icon">
                <FaHandshake />
              </div>
              <h3>Colaboración</h3>
              <p>
                Trabajamos en estrecha colaboración con empresas, organizaciones
                y profesionales para crear programas que respondan a las
                necesidades reales del mercado.
              </p>
            </div>
            <div className="valor-card">
              <div className="valor-icon">
                <TbWorld />
              </div>
              <h3>Impacto Social</h3>
              <p>
                Contribuimos al desarrollo tecnológico y sostenible de la
                sociedad dominicana, formando profesionales que impulsen la
                transformación digital del país.
              </p>
            </div>
            <div className="valor-card">
              <div className="valor-icon">
                <AiTwotoneThunderbolt />
              </div>
              <h3>Agilidad</h3>
              <p>
                Respondemos rápidamente a las demandas del mercado, actualizando
                constantemente nuestra oferta formativa y contenidos para
                mantenernos al día con las últimas tendencias.
              </p>
            </div>
            <div className="valor-card">
              <div className="valor-icon">
                <FaLightbulb />
              </div>
              <h3>Accesibilidad</h3>
              <p>
                Ofrecemos formación accesible a través de múltiples modalidades,
                facilitando que profesionales de todas las regiones puedan
                acceder a nuestros programas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alianzas-section">
        <div className="container">
          <h2 className="section-title">Colaboraciones Estratégicas</h2>
          <div className="alianzas-content">
            <div className="alianza-card">
              <h3 className="alianza-title">Primera Alianza Estratégica</h3>
              <p>
                ITLAcademy formalizó su primera alianza estratégica con el{" "}
                <strong>Grupo La Aurora</strong>, parte de
                <strong> T-ECO Group</strong>, empresa destacada en Santiago de
                los Caballeros, fortaleciendo así nuestra oferta educativa y
                garantizando una experiencia práctica ajustada a las demandas
                reales del sector productivo.
              </p>
            </div>
            <div className="alianza-card">
              <h3 className="alianza-title">Expansión Nacional</h3>
              <p>
                El ITLA, comprometido con el desarrollo de competencias
                digitales en todo el territorio, pronto abrirá nuevas
                extensiones en{" "}
                <strong>Cotuí, San Francisco de Macorís y Puerto Plata</strong>,
                además de un recinto de última generación en{" "}
                <strong>Santiago de los Caballeros</strong>.
              </p>
            </div>
          </div>
          <div className="partners-logos">
            <div className="partner-logo">T-ECO Group</div>
            <div className="partner-logo">Grupo La Aurora</div>
          </div>
        </div>
      </section>

      <section className="section estadisticas-section">
        <div className="container">
          <h2 className="section-title">ITLA en Números</h2>
          <div className="grid grid-4">
            <div className="stat-card">
              <div className="stat-number">254,000+</div>
              <div className="stat-label">
                <strong>Dominicanos Formados</strong>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24+</div>
              <div className="stat-label">
                <strong>Años de Experiencia</strong>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">
                <strong>Programas Especializados</strong>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4</div>
              <div className="stat-label">
                <strong>Modalidades de Estudio</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
