import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="contato-footer">
          <h3 className="footer-title">Informações de Contato</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <i className="fas fa-map-marker-alt footer-icon"></i> Pio XII,
              123 - Cidade, Estado
            </li>
            <li className="footer-item">
              <i className="fas fa-phone footer-icon"></i> (45) 3285-4585
            </li>
            <li className="footer-item">
              <i className="fas fa-envelope footer-icon"></i> mburgers.com
            </li>
          </ul>
        </div>
        <div className="redes-sociais-footer">
          <h3 className="footer-title">Redes Sociais</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <a
                href="https://facebook.com/seu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <i className="fab fa-facebook-f footer-icon"></i> Facebook
              </a>
            </li>
            <li className="footer-item">
              <a
                href="https://instagram.com/seu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <i className="fab fa-instagram footer-icon"></i> Instagram
              </a>
            </li>
            <li className="footer-item">
              <a
                href="https://twitter.com/seu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <i className="fab fa-twitter footer-icon"></i> Twitter
              </a>
            </li>
            <li className="footer-item">
              <a
                href="https://linkedin.com/in/seu-perfil"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <i className="fab fa-linkedin-in footer-icon"></i> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright-footer">
        &copy; {new Date().getFullYear()} MARK'SB. Todos os direitos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;