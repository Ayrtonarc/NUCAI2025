import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Features from "./components/Features.jsx";
import SaaS from "./components/SaaS.jsx";
import Contact from "./components/Contact.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";

function App() {
  return (
    <div className="App bg-dark text-light min-vh-100 d-flex flex-column">
      <Navbar />
      <Header />
      <section className="cta">
        <h2 className="mb-3">¡Haz crecer tu marca con videos únicos y personalizados!</h2>
        <button className="cta-btn"
          onClick={() => window.location.href = 'mailto:contacto@neeucomai.com'}>
          Solicita tu comercial
        </button>
      </section>
      <Features />
      <SaaS />
      <Contact />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      {/* Footer al final absoluto */}
      <footer className="footer mt-auto container-fluid">
        <div className="container py-3 text-center">
          <span className="small text-secondary">&copy; 2025 NeeucomAI. Todos los derechos reservados.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
