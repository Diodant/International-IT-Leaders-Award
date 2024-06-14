import React from 'react';
import PageHeader from './PageHeader';
import ContactUs from './ContactUs';

const Contacts = () => {
  return (
    <div>
      <PageHeader title="Контакты" subtitle="International IT Leaders Award" customBreadcrumb="Контакты" />
      <ContactUs />
    </div>
  );
};

export default Contacts;
