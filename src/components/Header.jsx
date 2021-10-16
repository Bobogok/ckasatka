import React, { useState, useEffect } from 'react';
import className from 'classnames';
import Button from './Button';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY > 220) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <header className={className('header', { 'header--scrolled': scrolled })}>
      <div className="header__inner container">
        {
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a href="#">
            <h3 className="header__logo">
              <span>C</span>KASATKA
            </h3>
          </a>
        }
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
