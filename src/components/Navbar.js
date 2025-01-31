import React, { useState } from "react";

const Navbar = ({ setView }) => {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => setView("home")}>Inicio</li>
        <li onClick={() => setView("events")}>Gestión de Eventos</li>
        <li onClick={() => setView("calendar")}>Calendario</li>
      </ul>

      {/* Icono de configuración que al pasar el mouse muestra el botón de cerrar sesión */}
      <div 
        className="user-menu" 
        onMouseEnter={() => setShowLogout(true)} 
        onMouseLeave={() => setShowLogout(false)}
      >
        <span className="settings-icon">⚙️</span>
        {showLogout && (
          <button className="logout-button" onClick={() => { localStorage.removeItem("token"); window.location.href = "/login"; }}>
            Cerrar Sesión
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
