import React, { useState } from "react";

function PrivacyNotice() {
    const [open, setOpen] = useState(false);
    return (
        <section className="faq-section" id="aviso-privacidad">
            <div
                className="faq-container"
                style={{
                    maxWidth: 700, // Ajusta el ancho para igualar a los demás componentes
                    margin: "40px auto",
                    background: "#120f1e", // Usa el mismo color de fondo que los otros componentes
                    borderRadius: 18,
                    boxShadow: "0 0 32px 0 #7c3aed88",
                    color: "#e0d7f7",
                    position: "relative",
                }}
            >
                <div className="d-flex align-items-center justify-content-between mb-2 pt-3 px-4">
                    <h2 className="faq-title mb-0" style={{ fontSize: 22 }}>
                        <i className="bi bi-shield-lock me-2"></i>Aviso de Privacidad
                    </h2>
                    <button
                        className="btn btn-sm btn-primary"
                        style={{ background: open ? '#4e2a8e' : '#8f5be8', border: 'none', borderRadius: 8, fontWeight: 600 }}
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                        aria-controls="privacy-content"
                    >
                        {open ? 'Ocultar' : 'Ver'}
                    </button>
                </div>
                {open && (
                    <div className="faq-list px-4 pb-3" id="privacy-content" style={{ fontSize: 15 }}>
                        <div className="faq-item mb-3">
                            <b className="text-white">¿Qué datos recopilamos?</b>
                            <div className="faq-answer">
                                <ul>
                                    <li>Nombre</li>
                                    <li>Correo electrónico</li>
                                    <li>Información de contacto proporcionada voluntariamente</li>
                                </ul>
                            </div>
                        </div>
                        <div className="faq-item mb-3">
                            <b className="text-white">¿Para qué usamos tus datos?</b>
                            <div className="faq-answer">
                                <ul>
                                    <li>Para responder tus consultas y brindarte asesoría personalizada</li>
                                    <li>Para procesar tus solicitudes y entregarte nuestros servicios</li>
                                    <li>Para enviarte información relevante sobre NeeucomAI (solo si lo autorizas)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="faq-item mb-3">
                            <b className="text-white">¿Compartimos tu información?</b>
                            <div className="faq-answer">
                                No compartimos tus datos con terceros, salvo obligación legal.
                            </div>
                        </div>
                        <div className="faq-item mb-3">
                            <b className="text-white">Tus derechos</b>
                            <div className="faq-answer">
                                Puedes solicitar la corrección o eliminación de tus datos en cualquier momento escribiendo a nuestro correo de contacto.
                            </div>
                        </div>
                        <div className="faq-item mb-2">
                            <b className="text-white">Contacto</b>
                            <div className="faq-answer">
                                Si tienes dudas sobre este aviso, contáctanos a:{" "}
                                <a
                                    href="mailto:contacto@neeucomai.com"
                                    className="text-decoration-underline text-light"
                                >
                                    contacto@neeucomai.com
                                </a>
                            </div>
                        </div>
                        <div className="faq-item mt-2 mb-0">
                            <span className="text-secondary small">
                                Última actualización: junio 2025
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default PrivacyNotice;
