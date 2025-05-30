import React from "react";
import logo from "../assets/Isotipo principal.png";

function Header() {
  return (
    <header className="header text-center py-5 w-100" style={{maxWidth: '100vw', margin: 0, paddingLeft: 0, paddingRight: 0, boxSizing: 'border-box'}}>
      <img src={logo} alt="NeeucomAI Logo" className="header-logo" style={{ width: 90, height: 90, marginBottom: 16 }} />
      <h1 className="display-3 fw-bold">NeeucomAI</h1>
      <p className="lead mt-3 text-secondary">
        Comerciales impactantes creados por Inteligencia Artificial para tus redes sociales
      </p>
    </header>
  );
}

export default Header;
