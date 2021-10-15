import React from 'react';
import Button from './Button';

function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <h3 className="header__logo">
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
