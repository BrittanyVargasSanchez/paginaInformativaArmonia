import React from 'react';
import './footer.css';
import logoFooter from '../assets/images/logo-header.png';

export default function Footer() {
  return (
    <footer className="footer-banner">
      <div className="text-content">
        <img src={logoFooter} alt="Logo" />
        <p>Rincón de agricultura y alimentación saludable</p>
        <p>© 2026 - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};
