import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./pages/Home";
import Programas from "./pages/Programas";
import Nosotros from "./pages/Nosotros";
import Inscripcion from "./pages/Inscripcion";
import Contacto from "./pages/Contacto";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/programas" element={<Programas />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/inscripcion" element={<Inscripcion />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </main>
          <Footer />
          <ThemeToggle />
          <ScrollToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
