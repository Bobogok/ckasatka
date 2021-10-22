import React from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Particles from 'react-particles-js';
import Button from '../Button';

import particlesJSON from './particlesjs-config.json';

function Main() {
  gsap.registerPlugin(ScrollToPlugin);

  const scrollToBlockDown = () => {
    gsap.to(window, { duration: 0.75, scrollTo: { y: '.choice', offsetY: 70 } });
  };

  return (
    <section className="main">
      <div className="main__bg">
        <Particles params={particlesJSON} />
      </div>
      <div className="main__container container">
        <h1 className="main__title">
          №1 В РОССИИ IT CИСТЕМА <br className="main__br" /> ИНСТРУМЕНТОВ ДЛЯ E&#8209;COMMERCE
          <br className="main__br" /> УПРАВЛЕНИЯ
        </h1>
        <p className="main__text">Мы делаем автоматизацию вашего бизнеса на собственных IT продуктах.</p>
        <Button className="main__button" fill shadow>
          <span>Подключить</span>
        </Button>
      </div>
      <div className="main__scroll" onClick={scrollToBlockDown}>
        <div className="main__scroll-container">
          <div className="main__scroll-icon" />
        </div>
      </div>
    </section>
  );
}

export default Main;
