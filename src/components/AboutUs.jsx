import React from 'react';
import PageHeader from './PageHeader';
import Goals from './Goals';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <PageHeader title="О премии" subtitle="International IT Leaders Award" customBreadcrumb="О премии" />
      <div className="about-us-content-container">
        <div className="about-us-text-content">
          <p className="about-us-main-title">International IT Leaders Award</p>
          <p className="about-us-description">
            International IT Leaders Award – это престижная ежегодная международная премия, учрежденная Global Association of IT Experts (GAITE) с целью признания и награждения выдающихся IT-специалистов из стран СНГ. Премия отмечает профессиональные достижения, инновации и вклад в развитие информационных технологий, предоставляя лауреатам международное признание, статус и почет в IT-индустрии. Участие в премии является показателем исключительной компетентности и профессионализма, что способствует укреплению профессиональной репутации и расширению карьерных возможностей специалистов.
          </p>
          <p className="about-us-description">
            Премия International IT Leaders Award проводится ежегодно с 2021 года. Участие в премии — знак наивысшего признания в IT-индустрии, который свидетельствует о выдающихся профессиональных достижениях и исключительной компетентности в области информационных технологий.
          </p>
          <p className="about-us-description">
            Для участия в International IT Leaders Award необходимо иметь более трех лет опыта в сфере IT. Это требование гарантирует, что в конкурсе участвуют только высококвалифицированные и опытные специалисты, которые продемонстрировали значительные успехи и внесли весомый вклад в развитие индустрии. Лауреаты премии получают не только заслуженные награды, но и международное признание, что открывает перед ними новые профессиональные горизонты и возможности для дальнейшего карьерного роста.
          </p>
          <p className="about-us-description">
            Уникальность International IT Leaders Award заключается в её исключительных критериях отбора и высоких стандартах. Премия выделяется среди других конкурсов и наград благодаря своей ориентации на лучших из лучших IT-специалистов стран СНГ. Премия служит платформой для демонстрации инновационных решений и передовых технологий, разработанных талантливыми профессионалами, и способствует обмену знаниями и опытом между ведущими экспертами в области информационных технологий.
          </p>
          <p className="about-us-description">
            Международная Премия International IT Leaders Award не только подчеркивает достижения отдельных специалистов, но и стимулирует развитие всей IT-индустрии на территории стран СНГ и за ее пределами. Получение International IT Leaders Award приносит участникам высокий статус и почет, что способствует укреплению их профессиональной репутации и повышению их конкурентоспособности на международной арене. Лауреаты премии становятся образцом для подражания и источником вдохновения для опытных специалистов, стремящихся к высоким стандартам и новым достижениям в своей карьере.
          </p>
          <Goals />
          <p className="about-us-title">Особенности и престиж премии</p>
          <p className="about-us-description">
            International IT Leaders Award выделяется среди других премий следующими аспектами:
          </p>
          <ul className="about-us-list">
            <li>Эксклюзивность участников: Только лучшие специалисты из стран СНГ, имеющие значительный опыт и достижения, могут претендовать на награду.</li>
            <li>Престиж и признание: Награда служит важным признанием профессиональных заслуг и открывает новые возможности для карьерного роста.</li>
            <li>Поддержка инноваций: Премия стимулирует развитие и внедрение новых технологий, а также подчеркивает значимость инновационного мышления в IT-индустрии.</li>
            <li>Сеть профессионалов: Участие в премии позволяет установить ценные контакты и обмениваться опытом с ведущими специалистами IT-сферы.</li>
          </ul>
          <p className="about-us-description">
            International IT Leaders Award — это символ высочайшего профессионализма и преданности своему делу, признание, которого достойны только лучшие из лучших. Присоединившись к числу лауреатов, вы подтверждаете свой статус ведущего IT-эксперта и вносите значительный вклад в развитие IT-индустрии в странах СНГ.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
