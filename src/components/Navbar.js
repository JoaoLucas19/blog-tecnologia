import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Tech & AI Blog</Link>
      </div>
      <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="hamburger"></span>
      </button>
      <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
        <li><Link to="/resources" onClick={() => setIsOpen(false)}>Resources</Link></li>
        <li><Link to="/documentation" onClick={() => setIsOpen(false)}>Docs</Link></li>
        <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link to="/events" onClick={() => setIsOpen(false)}>Events</Link></li>
        <li><Link to="/career" onClick={() => setIsOpen(false)}>Careers</Link></li>
        <li><Link to="/community" onClick={() => setIsOpen(false)}>Community</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;