import React, { useRef, useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

import Button from './Button';

function Support() {
  const sectionSupport = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [textInput, setTextInput] = useState('');

  const handleChangeName = (e) => {
    setNameInput(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmailInput(e.target.value);
  };

  const handleChangeText = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = (e) => {
    if (nameInput && emailInput && textInput) {
      // eslint-disable-next-line no-alert
      alert('Отправлено: ', nameInput, emailInput, textInput);
      setNameInput('');
      setEmailInput('');
      setTextInput('');
    } else {
      // eslint-disable-next-line no-alert
      alert('Заполненно неверно');
    }
    e.preventDefault();
  };

  useEffect(() => {
    const firstLookTlimeline = gsap.timeline({
      paused: true,
      delay: 0.5,
      scrollTrigger: {
        trigger: sectionSupport.current,
        start: 'top 70%'
        // markers: true
      }
    });

    const secondLookTlimeline = gsap.timeline({
      paused: true,
      delay: 2,
      scrollTrigger: {
        trigger: sectionSupport.current,
        start: 'top 70%'
        // markers: true
      }
    });

    firstLookTlimeline
      .fromTo('.support__info', { opacity: 0, x: 80 }, { opacity: 1, x: 0, duration: 0.75 }, 0)
      .fromTo('.support__cases', { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 0.75 })
      .fromTo('.support__button', { opacity: 0 }, { opacity: 1, duration: 0.75 });

    secondLookTlimeline
      .from('.support__form input, .support__form textarea', { opacity: 0, x: -50, stagger: 0.25 })
      .to('.support__form input', { opacity: 1, x: 0, duration: 0.75 });
  }, []);

  return (
    <section className="support" ref={sectionSupport}>
      <div className="support__inner container">
        <form className="support__form" onSubmit={handleSubmit}>
          <input
            className="support__formName"
            value={nameInput}
            onChange={handleChangeName}
            id="form-username"
            type="text"
            placeholder="Ваше имя"
          />
          <input
            className="support__formEmail"
            value={emailInput}
            onChange={handleChangeEmail}
            id="form-userEmain"
            type="text"
            placeholder="Ваш email"
          />
          <textarea
            className="support__formMessage"
            value={textInput}
            onChange={handleChangeText}
            id="form-userMessage"
            placeholder="Сообщение"
          />
          <Button className="support__button" type="submit" fill shadow>
            <span>Отправить</span>
          </Button>
        </form>
        <div className="support__info">
          <h2 className="support__title title">Свяжитесь с нами</h2>
          <p className="support__text">Вы всегда можете связаться с нами ЛЮБЫМ удобным способом.</p>
          <p className="support__text">
            Would you like to speak to one of our lawyers before you hire us? Just choose the topic and we’ll be more
            than glad to answer any of your questions! Would you like to speak to one of our lawyers before you hire us?
            Just choose the topic and we’ll be more than glad to answer any of your questions!
          </p>
          <div className="support__cases">
            <div className="support__case">
              <svg className="support__caseIcon" />
              <div className="support__caseBox">
                <div className="support__caseTitle">Телефон</div>
                <div className="support__caseText">
                  <a href="tel:+79991234567">+7 (999) 123 45-67</a>
                </div>
              </div>
            </div>
            <div className="support__case">
              <svg className="support__caseIcon" />
              <div className="support__caseBox">
                <div className="support__caseTitle">Наша почта</div>
                <div className="support__caseText">
                  <a href="mailto:sup@ckasatka.ru">sup@ckasatka.ru</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;
