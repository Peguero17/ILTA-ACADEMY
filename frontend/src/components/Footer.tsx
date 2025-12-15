import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <hr className="line" />
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">ITLAcademy</h3>
          <p className="footer-description">
            Plataforma de formación continua ágil, accesible y especializada en
            tecnologías emergentes.
          </p>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              <FaFacebook style={{ fontSize: "30px" }} />
            </a>
            <a
              href="https://x.com/itlard?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Twitter"
            >
              <FaTwitter style={{ fontSize: "30px" }} />
            </a>
            <a
              href="https://www.linkedin.com/school/itla/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin style={{ fontSize: "30px" }} />
            </a>
            <a
              href="https://www.instagram.com/itlard/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <FaInstagram style={{ fontSize: "30px" }} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/programas">Programas</Link>
            </li>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/inscripcion">Inscripción</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Programas</h4>
          <ul className="footer-links">
            <li>
              <Link to="/programas">Transformación Digital</Link>
            </li>
            <li>
              <Link to="/programas">Ciberseguridad</Link>
            </li>
            <li>
              <Link to="/programas">Inteligencia Artificial</Link>
            </li>
            <li>
              <Link to="/programas">Gestión de Proyectos</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Contacto</h4>
          <ul className="footer-contact">
            <li>
              <strong>Teléfono:</strong>
              <a href="tel:8095551234"> (809) 555-1234</a>
            </li>
            <li>
              <strong>Email:</strong>
              <a href="mailto:info@itlacademy.edu.do">
                {" "}
                info@itlacademy.edu.do
              </a>
            </li>
            <li>
              <strong>Dirección:</strong>
              <span>
                {" "}
                Av. Las Américas, Km. 27
                <br />
                Autopista Las Américas
                <br />
                Santo Domingo, República Dominicana
              </span>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121110.8204492086!2d-69.81513360273436!3d18.451329300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf7ff3f1653e37%3A0xc80c36909a523777!2sInstituto%20Tecnol%C3%B3gico%20de%20Las%20Am%C3%A9ricas%20(ITLA)!5e0!3m2!1ses!2sdo!4v1765428539568!5m2!1ses!2sdo"
                width={200}
                height={100}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </li>
          </ul>
        </div>
      </div>
      <hr className="line" />

      <div className="footer-bottom">
        <p>&copy; 2024 ITLAcademy. Todos los derechos reservados.</p>
        <div className="footer-legal">
          <Link to="/privacidad">Políticas de Privacidad</Link>
          <Link to="/terminos">Términos de Servicio</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
