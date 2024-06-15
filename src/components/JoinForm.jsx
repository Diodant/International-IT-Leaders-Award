import React, { useEffect } from 'react';

const JoinForm = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/particles.js`; 
    script.async = true;
    script.onload = () => {
      const particlesConfigScript = document.createElement('script');
      particlesConfigScript.src = `${process.env.PUBLIC_URL}/particlesConfig.js`; 
      particlesConfigScript.async = true;
      document.body.appendChild(particlesConfigScript);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="join-form-container">
      <div id="particles-js"></div>
      <div className="form-overlay">
        <h1 className="form-title">Анкета для вступления</h1>
        <form className="join-form">
          <label>
            Имя:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Телефон:
            <input type="tel" name="phone" required />
          </label>
          <label>
            Описание:
            <textarea name="experience" required></textarea>
          </label>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default JoinForm;
