import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../img/hero-bg.png';
import ServicesSection from './ServicesSection';
import Goals from './Goals';

const MainContent = () => {
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
            <p className="sub-title"> Award</p>
            <p className="description">Престижная ежегодная международная премия, учрежденная Global Association of IT Experts (GAITE) с целью признания и награждения выдающихся IT-специалистов.</p>
            <div className="buttons">
              <button className="button">О премии</button>
              <button className="button">Вступить</button>
            </div>
          </div>
        </div>
      </div>
      <ServicesSection />
      <Goals />
    </div>
  );
};

export default MainContent;
