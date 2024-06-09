import React from 'react';

import applicationDesignIcon from '../img/icons/service-seo.svg';
import webHostingIcon from '../img/icons/service-hosting.svg'; 
import socialMediaIcon from '../img/icons/service-secure.svg'; 
import seoOptimizationIcon from '../img/icons/service-design.svg'; 
import cloudServerIcon from '../img/icons/service-social.svg'; 

const services = [
  {
    icon: applicationDesignIcon,
    title: 'IT-специалист года',
    description: 'Признается специалист, показавший выдающиеся достижения и вклад в развитие IT-индустрии в текущем году.',
  },
  {
    icon: webHostingIcon,
    title: 'Лучший разработчик ПО',
    description: 'Признается за выдающиеся достижения в области разработки и совершенствования программного обеспечения.',
  },
  {
    icon: socialMediaIcon,
    title: 'Лидер Cybersecurity',
    description: 'Награждается специалист, внесший значительный вклад в развитие и обеспечение международной кибербезопасности.',
  },
  {
    icon: seoOptimizationIcon,
    title: 'Лидер в области ИИ',
    description: 'Признается специалист, внесший значительный вклад в развитие и внедрение технологий искусственного интеллекта.',
  },
  {
    icon: cloudServerIcon,
    title: 'IT-волонтер года',
    description: 'Признается специалист, который внес значительный вклад в общественные и благотворительные IT-проекты.',
  },

];

const ServicesSection = () => {
  return (
    <div >
        <div className='title'>Номинации </div>
    <div className="services-section">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <img src={service.icon} alt={service.title} className="service-icon" />
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ServicesSection;
