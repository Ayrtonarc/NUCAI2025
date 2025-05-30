import React from "react";

function Contact() {
  return (
    <section className="contact-section" id="contacto">
      <div className="contact-container">
        <h2 className="contact-title"><i className="bi bi-envelope-paper me-2"></i>Contacto</h2>
        <p className="contact-desc">¿Tienes dudas o quieres una demo? Escríbenos y te responderemos a la brevedad.</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="tu@email.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje" className="form-label">Mensaje</label>
            <textarea className="form-control" id="mensaje" rows="4" placeholder="¿En qué podemos ayudarte?" required></textarea>
          </div>
          <button type="submit" className="contact-btn">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
