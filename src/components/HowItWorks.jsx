import React from "react";

function HowItWorks() {
  return (
    <section className="how-it-works-section" id="como-funciona">
      <div className="how-container">
        <h2 className="how-title">
          <i className="bi bi-lightbulb me-2"></i>Cómo funciona
        </h2>
        <div className="how-steps">
          <div className="how-step">
            <span className="how-badge">1</span>
            <h5 className="how-step-title">Solicita tu comercial</h5>
            <p className="how-step-desc">
              Elige tu plan y cuéntanos tu idea o producto.
            </p>
          </div>
          <div className="how-step">
            <span className="how-badge">2</span>
            <h5 className="how-step-title">La IA crea tu video</h5>
            <p className="how-step-desc">
              Nuestra plataforma genera un comercial único y personalizado en
              minutos.
            </p>
          </div>
          <div className="how-step">
            <span className="how-badge">3</span>
            <h5 className="how-step-title">Descarga y publica</h5>
            <p className="how-step-desc">
              Recibe tu video listo para redes sociales y comienza a impactar a tu
              audiencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
