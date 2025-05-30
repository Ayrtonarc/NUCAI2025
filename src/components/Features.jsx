import React from "react";

function Features() {
  return (
    <section className="features">
      <h2 className="features-title"><i className="bi bi-stars me-2"></i>Beneficios</h2>
      <br />
      <div className="feature">
        <h3 className="card-title text-success">Creatividad Ilimitada</h3>
        <p className="card-text text-light">Generamos comerciales originales y atractivos, adaptados a tu público objetivo y estilo de marca.</p>
      </div>
      <div className="feature">
        <h3 className="card-title text-success">Rápido y Eficiente</h3>
        <p className="card-text text-light">Recibe tu video en tiempo récord, listo para publicar en Instagram, Facebook, TikTok y más.</p>
      </div>
      <div className="feature">
        <h3 className="card-title text-success">100% Personalizado</h3>
        <p className="card-text text-light">Cuéntanos tu idea y la IA se encarga de crear un comercial que refleje tu mensaje y valores.</p>
      </div>
    </section>
  );
}

export default Features;
