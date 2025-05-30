import React from "react";

function SaaS() {
  return (
    <>
      <section className="saas-section" id="saas">
        <h2><i className="bi bi-cpu me-2"></i>Software como Servicio (SaaS)</h2>
        <p>
          Automatiza la creación de comerciales para tus redes sociales con nuestra plataforma SaaS. Accede a herramientas de IA, personaliza tus videos y gestiona tus campañas desde cualquier lugar, en cualquier momento.
        </p>
        <div className="saas-table-wrapper minimal">
          <table className="saas-table-minimal">
            <thead>
              <tr>
                <th>Plan</th>
                <th>Contenidos mensuales</th>
                <th>Reels / Shorts (sub)</th>
                <th>Infografías</th>
                <th>Avatar personalizado</th>
                <th>Personalización</th>
                <th>Traducción</th>
                <th>Tiempo de entrega</th>
                <th>Soporte</th>
                <th>Proyectos especiales</th>
                <th>Precio (MXN/mes)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Básico</td>
                <td>2X4</td>
                <td>10</td>
                <td>4X4</td>
                <td><i className="bi bi-x-circle-fill icon-no"></i></td>
                <td>Limitada</td>
                <td><i className="bi bi-x-circle-fill icon-no"></i></td>
                <td>avance x semana</td>
                <td><i className="bi bi-envelope-fill icon-support"></i></td>
                <td><i className="bi bi-x-circle-fill icon-no"></i></td>
                <td><span className="saas-price">$3,000.00</span></td>
              </tr>
              <tr>
                <td>Premium</td>
                <td>4X4</td>
                <td>20</td>
                <td>8X4</td>
                <td><i className="bi bi-check-circle-fill icon-yes"></i></td>
                <td>Alta</td>
                <td><i className="bi bi-check-circle-fill icon-yes"></i></td>
                <td>avance x semana</td>
                <td><i className="bi bi-whatsapp icon-support"></i> <i className="bi bi-envelope-fill icon-support"></i></td>
                <td><i className="bi bi-x-circle-fill icon-no"></i></td>
                <td><span className="saas-price">$5,000.00</span></td>
              </tr>
              <tr>
                <td>Proyecto</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td><i className="bi bi-check-circle-fill icon-yes"></i></td>
                <td>Total</td>
                <td><i className="bi bi-check-circle-fill icon-yes"></i></td>
                <td>Prioritario</td>
                <td><i className="bi bi-person-badge-fill icon-support"></i></td>
                <td><i className="bi bi-check-circle-fill icon-yes"></i></td>
                <td><span className="saas-price">$15,000.00</span></td>
              </tr>
            </tbody>
          </table>
          <div className="saas-whatsapp-btn-wrapper">
            <a
              href="https://wa.me/526647595336?text=Hola%20NeeucomAI%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20SaaS"
              className="saas-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-whatsapp"></i> Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>
      <a
        href="https://wa.me/526647595336?text=Hola%20NeeucomAI%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20NeeucomAI"
        className="floating-whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatea por WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </>
  );
}

export default SaaS;
