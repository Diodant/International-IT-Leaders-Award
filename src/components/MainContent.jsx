import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../img/hero-bg.png';
import ServicesSection from './ServicesSection';
import Goals from './Goals';
import ContactUs from './ContactUs';
import sponsorsData from './sponsorsData';

const MainContent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/particles.js`; // Обновите путь к скрипту
    script.async = true;
    script.onload = () => {
      const particlesConfigScript = document.createElement('script');
      particlesConfigScript.src = `${process.env.PUBLIC_URL}/particlesConfig.js`; // Обновите путь к скрипту
      particlesConfigScript.async = true;
      document.body.appendChild(particlesConfigScript);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <div className="main-content">
        <div id="particles-js"></div>
        <div className="background-container">
          <img src={backgroundImage} alt="Background" className="background-image" />
        </div>
        <div className="content-overlay">
          <div className="text-content">
            <h1 className="main-title">International IT Leaders</h1>
            <p className="sub-title">Award</p>
            <p className="description">Престижная ежегодная международная премия, учрежденная Global Association of IT Experts (GAITE) с целью признания и награждения выдающихся IT-специалистов.</p>
            <div className="buttons">
              <Link to="/about-us" className="button">О премии</Link>
              <Link to="/join" className="button">Вступить</Link>
            </div>
          </div>
        </div>
      </div>
      <ServicesSection />
      <Goals />
      <div className="sponsors-section">
        <h2 className="sponsors-title">Спонсоры</h2>
        <div className="sponsors-grid">
          {sponsorsData.map((sponsor, index) => (
            <div key={index} className="sponsor-card">
              <img src={sponsor.logo} alt={`Sponsor ${index + 1}`} className="sponsor-logo" />
            </div>
          ))}
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default MainContent;
