import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/components/Header.css";
import { FaHome, FaRegFileCode } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { SiGoogleforms, SiHtmlacademy } from "react-icons/si";
import { MdCall } from "react-icons/md";
import { MdCampaign } from "react-icons/md";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string): string => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-text">
            <SiHtmlacademy style={{ marginRight: "6px", fontSize: "48px" }} />
            ITLAcademy
          </span>
        </Link>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${isActive("/")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <FaHome style={{ marginRight: "6px" }} />
            Inicio
          </Link>
          <Link
            to="/programas"
            className={`nav-link ${isActive("/programas")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <FaRegFileCode style={{ marginRight: "6px" }} />
            Programas
          </Link>
          <Link
            to="/nosotros"
            className={`nav-link ${isActive("/nosotros")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <BsFillPeopleFill style={{ marginRight: "6px" }} />
            Nosotros
          </Link>
          <Link
            to="/inscripcion"
            className={`nav-link ${isActive("/inscripcion")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <SiGoogleforms style={{ marginRight: "6px" }} />
            Inscripción
          </Link>
          <Link
            to="/contacto"
            className={`nav-link ${isActive("/contacto")}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <MdCall style={{ marginRight: "6px" }} />
            Contacto
          </Link>
          <Link
            to="/inscripcion#formulario"
            className="btn btn-primary nav-cta"
            onClick={() => setIsMenuOpen(false)}
          >
            <MdCampaign style={{ marginRight: "6px" }} />
            Inscríbete Ahora
          </Link>
        </nav>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <hr />
    </header>
  );
};

export default Header;
