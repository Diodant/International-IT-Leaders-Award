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
          
        </div>
        <ul className="nav-links">
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/winners">Победители</Link></li>
          <li><Link to="/jury">Жюри</Link></li>
          <li><Link to="/documents">Документы</Link></li>
          <li><Link to="/articles">Статьи</Link></li>
          <li><Link to="/contacts">Контакты</Link></li>
        </ul>
        <div className="buttons">
        <Link to="/join" className="button">Вступить</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
