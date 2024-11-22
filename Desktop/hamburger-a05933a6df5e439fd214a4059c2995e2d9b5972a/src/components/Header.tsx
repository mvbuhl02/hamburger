import { useState, useEffect } from 'react';
import '../styles/header.css';
import menu from '../assets/menu.png';
import logo from '../assets/logo.svg';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Verifica se a largura da janela é maior que um certo valor (ajuste conforme necessário)
      if (window.innerWidth > 768) { // Exemplo: considera telas maiores que 768px como desktop
        setIsMobileMenuOpen(false); // Fecha o menu mobile
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <header className="container py-sm">
      <nav className="flex items-center justify-between">
        <img src={logo} alt="Logo" width="150" height="50" />

        <ul className="menu desktop-only">
          <li><a href="#">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#sobre">Sobre Nós</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>

        <div className="desktop-only">
          <a className="reverse-color ml-lg" href="">Login</a>
          <a href="#" className="btn-primary">Cadastre-se</a>
        </div>

        <div className="mobile-menu">
          <button id="menu-toggle" className="btn-wrapper" onClick={toggleMobileMenu}>
            <img src={menu} alt="ícone menu" width="24" height="24" />
          </button>
        </div>
      </nav>

      <ul 
        id="mobile-menu-content" 
        className="menu" 
        style={{ display: isMobileMenuOpen ? 'block' : 'none' }}
      >
        <li><a href="#">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#sobre">Sobre Nós</a></li>
        <li><a href="#contato">Contato</a></li>
        <li><a className="reverse-color" href="">Login</a></li>
        <li className="btn-header"><a href="#" className="btn-primary">Cadastre-se</a></li>
      </ul>
    </header>
  );
}

export default Header;