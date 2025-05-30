import React from "react";

function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonios">
      <div className="testimonials-container">
        <h2 className="testimonials-title">
          <i className="bi bi-people-fill me-2"></i>Testimonios
        </h2>
        <div className="testimonials-list">
          <div className="testimonial">
            <p className="testimonial-text">
              “NeeucomAI nos ayudó a aumentar el engagement en Instagram con videos
              creativos y rápidos.”
            </p>
            <h6 className="testimonial-author">María G.</h6>
            <span className="testimonial-role">Emprendedora</span>
          </div>
          <div className="testimonial">
            <p className="testimonial-text">
              “El proceso es súper sencillo y el resultado profesional. ¡Repetiremos!”
            </p>
            <h6 className="testimonial-author">Agencia Creativa XYZ</h6>
            <span className="testimonial-role">Agencia de Marketing</span>
          </div>
          <div className="testimonial">
            <p className="testimonial-text">
              “La IA de NeeucomAI nos permitió lanzar campañas en tiempo récord.”
            </p>
            <h6 className="testimonial-author">Carlos P.</h6>
            <span className="testimonial-role">CMO, Startup Tech</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
