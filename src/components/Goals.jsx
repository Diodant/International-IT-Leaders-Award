import React from 'react';
import centerImage from '../img/center-image.jpg'; 
import experienceIcon from '../img/icons/icon-1.svg';
import productsIcon from '../img/icons/icon-3.svg';
import approachIcon from '../img/icons/icon-6.svg';
import pricingIcon from '../img/icons/icon-4.svg';


const items = [
  {
    icon: experienceIcon,
    title: 'Признание',
    description: 'Признание и награждение выдающихся достижений IT-специалистов.'
  },
  {
    icon: productsIcon,
    title: 'Продвижение',
    description: 'Продвижение передовых технологий и инноваций в IT-секторе.'
  },
  {
    icon: approachIcon,
    title: 'Содействие',
    description: 'Содействие развитию IT-отрасли в странах СНГ и за их пределами.'
  },
  {
    icon: pricingIcon,
    title: 'Поощрение',
    description: 'Поощрение профессионального роста и обмена опытом среди участников.'
  },

];

const Goals = () => {
  return (
    <div className="goals-section">
      <h2 className="title">Цели и задачи премии</h2>
      <p className="subtitle">Цель International IT Leaders Award заключается в поддержке и поощрении высоких стандартов профессионализма и инноваций в IT-индустрии. Задачи премии включают:</p>
      <div className="goals-content">
        <div className="goals-left">
          {items.slice(0, 2).map((item, index) => (
            <div key={index} className=" goals-item">
              <div className="text-end goals-details">
              <p className="goals-title">{item.title}</p>
                <p className="goals-description">{item.description}</p>
                
              </div>
              <img src={item.icon} alt={item.title} className="goals-icon" />
            </div>
          ))}
        </div>
        <div className="goals-center">
          <img src={centerImage} alt="Center" className="center-image" />
        </div>
        <div className="goals-right">
          {items.slice(2).map((item, index) => (
            <div key={index} className=" goals-item">
              <img src={item.icon} alt={item.title} className="goals-icon" />
              <div className="text-start goals-details">
              
              <p className="goals-title">{item.title}</p>
                <p className="goals-description">{item.description}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goals;
