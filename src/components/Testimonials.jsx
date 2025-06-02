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
        <div className="testimonial-video mt-4 text-center">
          <h5 className="text-white mb-3"><i className="bi bi-play-circle me-2"></i>Video de muestra</h5>
          <div style={{maxWidth: 640, margin: "0 auto"}}>
            <iframe
              width="100%"
              height="360"
              src="https://www.youtube.com/embed/LUb79FHDwzY"
              title="Video de muestra NeeucomAI"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{borderRadius: 12, background: "#222"}}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
