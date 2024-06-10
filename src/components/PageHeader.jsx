import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import backgroundImage from '../img/2903693.jpg'; 

const PageHeader = ({ title, subtitle, customBreadcrumb }) => {
  const location = useLocation();
  const currentPage = location.pathname.replace("/", "").replace("-", " ");
  const breadcrumbText = customBreadcrumb || currentPage;

  return (
    <div>
      <div className="header-section">
        <div className="background-image-container">
          <img src={backgroundImage} alt="Background" className="background-header-image" />
        </div>
        <div className="overlay">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className="breadcrumb-container">
        <div className="breadcrumb-section">
          <Link to="/" className="breadcrumb-link">Главная</Link> / {breadcrumbText}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
