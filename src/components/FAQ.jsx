import React from "react";

function FAQ() {
  const faqs = [
    {
      question: "¿NeeucomAI es un software automático o una agencia?",
      answer:
        "NeeucomAI es una agencia de servicios de inteligencia artificial. No eres atendido por un bot: nuestro equipo humano te acompaña en todo el proceso, desde la estrategia hasta la entrega final."
    },
    {
      question: "¿Qué sucede después de pagar un plan?",
      answer:
        "El pago inicia el proceso, pero no es automático. Un especialista se pondrá en contacto contigo para conocer tu proyecto, resolver dudas y personalizar tu contenido."
    },
    {
      question: "¿Puedo agendar una cita para explicar mi proyecto?",
      answer:
        "¡Por supuesto! Puedes agendar una videollamada (Zoom o Google Meet) para que conozcamos tu marca y necesidades. Incluso podemos mostrarte una demo de face swap en vivo."
    },
    {
      question: "¿Qué incluye cada plan?",
      answer:
        "Cada plan incluye una cantidad específica de videos, reels/shorts, infografías y opciones de personalización. Los planes avanzados ofrecen avatar personalizado, traducción, soporte prioritario y gestor dedicado. Consulta la tabla de planes para detalles."
    },
    {
      question: "¿Cómo es el proceso de creación de comerciales?",
      answer:
        "Primero escuchamos tu idea y objetivos. Luego, nuestro equipo creativo y de IA diseña el contenido, te muestra avances y ajusta según tu feedback. Solo entregamos el material final cuando estés satisfecho."
    },
    {
      question: "¿En qué moneda se muestran los precios?",
      answer:
        "Todos los precios están en pesos mexicanos (MXN) e incluyen IVA."
    },
    {
      question: "¿Cómo puedo pedir más información o ayuda?",
      answer:
        "Contáctanos por el formulario, correo o WhatsApp (+52 664 759 5336). También puedes agendar una cita personalizada desde la sección de contacto."
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <h2 className="faq-title">
          <i className="bi bi-question-circle me-2"></i>Preguntas frecuentes
        </h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button className="faq-question">{faq.question}</button>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
