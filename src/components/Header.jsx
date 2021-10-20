import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { Link } from 'react-scroll';

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
  }, []);

  return (
    <header className="header">
      <div className="header__inner container">
        <h3 className="header__logo" onClick={scrollToTop}>
          <span>C</span>KASATKA
        </h3>
        <nav className="header__navigations">
          <ul className="header__selectors">
            <Link activeClass="active" to="advantage" spy smooth duration={700}>
              <li className="header__selector">Преимущества</li>
            </Link>
            <Link activeClass="active" to="functional" spy smooth duration={700}>
              <li className="header__selector">Функционал</li>
            </Link>
            <Link activeClass="active" to="tarifs" spy smooth duration={700}>
              <li className="header__selector">Тарифы</li>
            </Link>
            <Link activeClass="active" to="support" spy smooth duration={700}>
              <li className="header__selector">Поддержка</li>
            </Link>
            <Link activeClass="active" to="about" spy smooth duration={700}>
              <li className="header__selector">О нас</li>
            </Link>
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
