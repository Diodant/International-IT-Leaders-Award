import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../img/logo.svg';

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <img src={LogoImg} alt="Logo" /> 
          {/* <span className="logo-text">techno <span className="logo-highlight">IT</span></span> */}
        </div>
        <ul className="nav-links">
          <li><Link to="/">Главная</Link></li>
          
          <li><Link to="/winners">Победители</Link></li>
          <li><Link to="/jury">Жюри</Link></li>
          <li><Link to="/documents">Документы</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/news">News</Link></li>
        </ul>
        <div className="buttons">
        <button className="button">Вступить</button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
