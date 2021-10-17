import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import Button from './Button';

function Header({ scrollToTop }) {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.timeline({
      paused: true,
      scrollTrigger: {
        toggleClass: { className: 'header--scrolled', targets: '.header' },
        start: 'top -20%',
        end: 'bottom top'
      }
    });
  });

  return (
    <header className="header">
      <div className="header__inner container">
        <h3 className="header__logo" onClick={scrollToTop}>
          <span>C</span>KASATKA
        </h3>
        <nav className="header__navigations">
          <ul className="header__selectors">
            <li className="header__selector active">Преимущества</li>
            <li className="header__selector">Функционал</li>
            <li className="header__selector">Тарифы</li>
            <li className="header__selector">Поддержка</li>
            <li className="header__selector">О нас</li>
          </ul>
          <Button className="header__login" outline login>
            <span>Вход</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
