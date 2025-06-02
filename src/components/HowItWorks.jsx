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
            <h5 className="how-step-title">Cuéntanos tu proyecto</h5>
            <p className="how-step-desc">
              Agenda una cita o llena el formulario. Nuestro equipo escucha tus
              necesidades y objetivos para entender tu visión.
            </p>
          </div>
          <div className="how-step">
            <span className="how-badge">2</span>
            <h5 className="how-step-title">Equipo creativo en acción</h5>
            <p className="how-step-desc">
              Un equipo real de expertos en IA y marketing diseña y personaliza
              tu contenido, combinando tecnología y creatividad humana.
            </p>
          </div>
          <div className="how-step">
            <span className="how-badge">3</span>
            <h5 className="how-step-title">Revisión y entrega personalizada</h5>
            <p className="how-step-desc">
              Te mostramos avances, recibimos tu feedback y ajustamos hasta que
              estés satisfecho. Solo entonces te entregamos el material final
              listo para redes.
            </p>
          </div>
        </div>
        <div
          className="alert alert-info mt-4"
          style={{ maxWidth: 600, margin: "0 auto" }}
        >
          <i className="bi bi-people me-2"></i>
          Detrás de cada proyecto hay personas reales trabajando para ti. El botón
          "Pagar" inicia el proceso, pero nuestro equipo te acompaña en todo
          momento.
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
