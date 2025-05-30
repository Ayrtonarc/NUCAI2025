import React from "react";

function FAQ() {
  const faqs = [
    {
      question: "¿Qué es NeeucomAI SaaS?",
      answer:
        "NeeucomAI SaaS es una plataforma en línea que automatiza la creación de comerciales de video para redes sociales usando inteligencia artificial. Permite a empresas y creadores generar contenido profesional, personalizado y listo para publicar en Instagram, Facebook, TikTok y más, sin necesidad de conocimientos técnicos."
    },
    {
      question: "¿Qué incluye cada plan de SaaS?",
      answer:
        "Cada plan incluye una cantidad específica de videos, reels/shorts, infografías y opciones de personalización. El plan Premium y Proyecto ofrecen avatar personalizado, traducción, soporte prioritario y gestor dedicado. Consulta la tabla de planes para ver las diferencias exactas."
    },
    {
      question: "¿Cómo funciona el proceso de creación de comerciales?",
      answer:
        "Solo tienes que elegir tu plan, enviar tu idea o mensaje y nuestro sistema de IA generará el video comercial adaptado a tu marca. Recibirás avances semanales y podrás solicitar ajustes según tu plan."
    },
    {
      question: "¿Puedo solicitar un video completamente personalizado?",
      answer:
        "Sí, el plan Proyecto está diseñado para creaciones 100% personalizadas, con gestor dedicado y atención prioritaria."
    },
    {
      question: "¿En qué moneda se muestran los precios?",
      answer:
        "Todos los precios están en pesos mexicanos (MXN) e incluyen IVA."
    },
    {
      question: "¿Cómo puedo contratar o pedir más información?",
      answer:
        "Puedes contactarnos a través del formulario, correo o WhatsApp usando el botón flotante o el botón debajo de la tabla de planes. Nuestro WhatsApp es +52 664 759 5336."
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
