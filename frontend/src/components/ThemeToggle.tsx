import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/components/ThemeToggle.css";
import { CiLight, CiDark } from "react-icons/ci";

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Modo claro" : "Modo oscuro"}
    >
      {isDark ? (
        <span className="theme-icon">
          <CiLight />
        </span>
      ) : (
        <span className="theme-icon">
          <CiDark />
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
