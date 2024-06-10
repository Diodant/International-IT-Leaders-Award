import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';
import FileImg from '../img/icons/files.png';

const Documents = () => {
  return (
    <div className="documents-container">
      <PageHeader title="Документы" subtitle="International IT Leaders Award" customBreadcrumb="Документы" />
      <div className="documents-categories">
        <Link to="/regulations" className="document-card">
        <img src={FileImg} alt="FileImg "className="service-icon" />
          <h3>Положение</h3>
          <ul className="document-details">
            <li>I. Общие положения</li>
            <li>II. Цели и задачи премии</li>
            <li>III. Комитет по присуждению премии
            </li>
            <li>IV. Порядок выдвижения кандидатов 
            </li>
            <li>V. Порядок рассмотрения заявок </li>
          </ul>
          <div className="buttons">
          <button className="button">Открыть</button>
          </div>
        </Link>
        <Link to="/evaluation-criteria" className="document-card">
        <img src={FileImg} alt="FileImg "className="service-icon" />
          <h3>Критерии оценки</h3>
          <ul className="document-details">
            <li>IT-специалист года</li>
            <li>Лучший разработчик программного обеспечения</li>
            <li>Лидер в области кибербезопасности</li>
            <li>Лидер в области искусственного интеллекта</li>
            <li>IT-волонтер года</li>
          </ul>
          <div className="buttons">
          <button className="button">Открыть</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Documents;
