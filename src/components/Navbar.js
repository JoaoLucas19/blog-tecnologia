import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">TechMind AI</Link>
      </div>
      <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="hamburger"></span>
      </button>
      <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Início</Link></li>
        <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
        <li><Link to="/resources" onClick={() => setIsOpen(false)}>Recursos</Link></li>
        <li><Link to="/documentation" onClick={() => setIsOpen(false)}>Documentos</Link></li>
        <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projetos</Link></li>
        <li><Link to="/events" onClick={() => setIsOpen(false)}>Eventos</Link></li>
        <li><Link to="/career" onClick={() => setIsOpen(false)}>Carreira</Link></li>
        <li><Link to="/community" onClick={() => setIsOpen(false)}>Comunidade</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>Sobre</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;