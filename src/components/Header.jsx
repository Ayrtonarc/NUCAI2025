import React from "react";
import logo from "../assets/Isotipo principal.png";
import amatista from "../assets/Amatista.jpg";

function Header() {
  return (
    <header
      className="header text-center py-5 w-100 position-relative"
      style={{
        maxWidth: "100vw",
        margin: 0,
        paddingLeft: 0,
        paddingRight: 0,
        boxSizing: "border-box",
        backgroundImage: `url(${amatista})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: 320,
      }}
    >
      {/* Capa de oscurecimiento tipo "canva" */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(60, 0, 80, 0.55)",
          zIndex: 1,
        }}
      ></div>
      <div style={{ position: "relative", zIndex: 2 }}>
        <img
          src={logo}
          alt="NeeucomAI Logo"
          className="header-logo"
          style={{ width: 90, height: 90, marginBottom: 16 }}
        />
        <h1 className="display-3 fw-bold text-white">NeeucomAI</h1>
        <p className="lead mt-3 text-white">
          Comerciales impactantes creados por Inteligencia Artificial para tus
          redes sociales
        </p>
      </div>
    </header>
  );
}

export default Header;
