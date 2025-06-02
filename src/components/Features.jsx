import React from "react";

function Features() {
  return (
    <section className="features">
      <h2 className="features-title"><i className="bi bi-stars me-2"></i>Beneficios</h2>
      <br />
      <div className="feature">
        <h3 className="card-title text-success">Atención Humana y Cercana</h3>
        <p className="card-text text-light">No eres un número más: nuestro equipo te acompaña personalmente en cada paso, entendiendo tus necesidades y objetivos.</p>
      </div>
      <div className="feature">
        <h3 className="card-title text-success">Agencia de IA, No Software Automático</h3>
        <p className="card-text text-light">Olvídate de plataformas impersonales. Nosotros nos encargamos de todo: desde la estrategia hasta la entrega de contenido personalizado para tu marca.</p>
      </div>
      <div className="feature">
        <h3 className="card-title text-success">Creatividad y Resultados de Agencia 2.0</h3>
        <p className="card-text text-light">Combinamos inteligencia artificial con creatividad humana para ofrecerte campañas que destacan y conectan con tu audiencia.</p>
      </div>
    </section>
  );
}

export default Features;
