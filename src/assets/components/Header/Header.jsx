import React, { useState } from "react";
import "./Header.css";
import logo from "../../logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const handleLogoClick = () => {
    closeMenu();

    // Borra el hash actual sin agregar al historial
    history.replaceState(null, null, " ");

    // Luego asigna el hash para que haga scroll a #hero
    window.location.hash = "#hero";
  };

  return (
    <header className="header" id="header">
      <div
        className="logo"
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      >
        <img src={logo} alt="Logo" />
      </div>

      <nav className={`nav ${open ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <a href="#hero" onClick={closeMenu}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#us" onClick={closeMenu}>
              Nosotros
            </a>
          </li>
          <li>
            <a href="#servicios" onClick={closeMenu}>
              Riesgos
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={closeMenu}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>

      <div className="menu-toggle" onClick={toggleMenu}>
        {!open ? (
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          <div className="close-icon">×</div>
        )}
      </div>
    </header>
  );
};

export default Header;
