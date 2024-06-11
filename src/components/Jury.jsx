import React, { useState } from 'react';
import PageHeader from './PageHeader';
import Jur1 from '../img/1.jpg';

const juryData = {
  2021: [
    { name: 'Андрей Иванов', role: 'Основатель и генеральный директор компании XYZ, известной своими инновационными решениями в области облачных технологий.', img: Jur1 },
    { name: 'Sani Awesome', role: 'Social Media', img: 'path/to/image2.jpg' },
    { name: 'Andrio Willi', role: 'Content Writer', img: 'path/to/image3.jpg' },
    { name: 'Afa Jonson', role: 'Business Manager', img: 'path/to/image4.jpg' },
  ],
  2022: [
    { name: 'John Doe', role: 'Developer', img: 'path/to/image5.jpg' },
    { name: 'Jane Smith', role: 'Designer', img: 'path/to/image6.jpg' },
    { name: 'Mike Brown', role: 'Product Manager', img: 'path/to/image7.jpg' },
    { name: 'Emily White', role: 'HR Manager', img: 'path/to/image8.jpg' },
  ],
  2023: [
    { name: 'Chris Green', role: 'IT Specialist', img: 'path/to/image9.jpg' },
    { name: 'Alex Blue', role: 'Network Engineer', img: 'path/to/image10.jpg' },
    { name: 'Pat Yellow', role: 'Security Expert', img: 'path/to/image11.jpg' },
    { name: 'Taylor Purple', role: 'Software Architect', img: 'path/to/image12.jpg' },
  ],
  2024: [
    { name: 'Jordan Pink', role: 'Data Scientist', img: 'path/to/image13.jpg' },
    { name: 'Casey Black', role: 'DevOps Engineer', img: 'path/to/image14.jpg' },
    { name: 'Drew Grey', role: 'UX/UI Designer', img: 'path/to/image15.jpg' },
    { name: 'Sky White', role: 'Full Stack Developer', img: 'path/to/image16.jpg' },
  ],
};

const Jury = () => {
  const [year, setYear] = useState(2021);

  return (
    <div>
      <PageHeader title="Жюри конкурса" subtitle="International IT Leaders Award" customBreadcrumb="Жюри" />
      <div className="jury-container">
        <h2 className="jury-title">Жюри конкурса</h2>
        <p className="jury-subtitle">
          Жюри конкурса International IT Leaders Award состоит из высококвалифицированных профессионалов с многолетним опытом работы в IT-индустрии (не менее пяти лет). Их экспертиза и достижения в области информационных технологий делают их идеальными кандидатами для оценки и признания выдающихся специалистов. Быть членом жюри International IT Leaders Award - это знак высокого статуса и признания в профессиональном сообществе, который подчеркивает исключительные заслуги и компетентность каждого из них.
        </p>
        <p className="jury-subtitle">Члены жюри тщательно отбираются для обеспечения объективной и всесторонней оценки участников. Они представляют различные направления IT-индустрии, что позволяет учитывать все аспекты и достижения номинантов. Присутствие таких уважаемых профессионалов в составе жюри подчеркивает престиж и значимость премии, делая ее одной из самых уважаемых в мире IT.</p>
        <div className="buttons">
          {[2021, 2022, 2023, 2024].map((year) => (
            <button key={year} onClick={() => setYear(year)} className={`button ${year === year ? 'active' : ''}`}>
              {year}
            </button>
          ))}
        </div>
        <div className="jury-grid">
          {juryData[year].map((member, index) => (
            <div key={index} className="jury-member">
              <img src={member.img} alt={member.name} className="jury-photo" />
              <h3 className="jury-name">{member.name}</h3>
              <p className="jury-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jury;
