import React, { useState } from 'react';
import './Navbar.css'; // Import CSS for styling
import { Link } from 'react-router-dom'; // Import Link for navigation


const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="../img/logo.png" alt="Company Logo" />
      </div>

      <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        {/* <li><a href="#about" onClick={() => { scrollToSection('about'); setIsOpen(false); }}>About</a></li> */}
        <li><Link to ="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        {/* <li><a href="#program" onClick={() => { scrollToSection('program'); setIsOpen(false); }}>Programs</a></li> */}
        {/* <li><Link to="/add-program" onClick={() => setIsOpen(false)}>Add Program</Link></li> Link to add program form */}
        <li><Link to ="/programs" onClick={() => setIsOpen(false)}>Programs</Link></li>
        <li><Link to ="/media" onClick={() => setIsOpen(false)}>Media</Link></li>
        {/* <li><a href="#blog" onClick={() => setIsOpen(false)}>Blog</a></li> */}
        <li><a href="/join-us" onClick={() => setIsOpen(false)}>Join Us</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
