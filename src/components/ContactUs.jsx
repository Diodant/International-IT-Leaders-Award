import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h6>Адрес:</h6>
        <p> 198826, Россия, Москва, поселение Филимонковское, деревня Бурцево, 5-й Новобурцевский переулок, дом 15</p>
        <h6>ИНН/КПП:</h6>
        <p> 7720859286/775101001</p>
        <h6>Телефон:</h6>
        <p> +7(499) 290-5005</p>
        <h6>Email:</h6>
        <p>itleadersaward@gmail.com</p>
      </div>
      <div className="contact-form-container">
        <h2 className="contact-title">Свяжитесь с нами</h2>
        <p className="contact-subtitle">Мы всегда рады помочь и ответить на ваши вопросы</p>
        {submitted ? (
          <p className="thank-you-message">Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.</p>
        ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Имя*"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Тема"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Ваше сообщение*"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-button">Отправить</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
