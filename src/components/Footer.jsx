import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../img/logo.svg';
import BackgroundImage from '../img/hero-bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="footer-container" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="footer-overlay">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={LogoImg} alt="Logo" />
            </div>
            <p>Престижная ежегодная международная премия, учрежденная Global Association of IT Experts (GAITE) </p>
          </div>
          <div className="footer-section">
            <h4>О премии</h4>
            <ul>
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/winners">Победители</Link></li>
              <li><Link to="/jury">Жюри</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Информация</h4>
            <ul>
              <li><Link to="/documents">Документы</Link></li>
              <li><Link to="/team">Статьи</Link></li>
              <li><Link to="/contacts">Контакты</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Контакты</h4>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Россия, Москва г., Филимонковское </p>
            <p><FontAwesomeIcon icon={faPhone} /> +7(499) 290-5005</p>
            <p className='mb-20'><FontAwesomeIcon icon={faEnvelope} /> ppppp@gmail.com</p>
            <h4>Подписаться</h4>
            <p>Не упустите возможность подписаться на наши новости</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Email" />
              <button type="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2021 International IT Leaders Award. Все права защищены.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;