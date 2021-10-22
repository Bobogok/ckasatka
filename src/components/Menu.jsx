/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { useMedia } from 'react-use';

import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { gsap } from 'gsap';

function Menu({ mobile, setOpened }) {
  gsap.registerPlugin(ScrollToPlugin);

  const media810 = useMedia('(min-width: 505px) and (max-width: 810px)');
  const media505 = useMedia('(max-width: 505px)');

  const scrollToAdvantage = () => {
    mobile && setOpened(false);
    gsap.to(window, { duration: 0.75, scrollTo: { y: '.advantage', offsetY: media505 ? 70 : 200 } });
  };

  const scrollToFunctional = () => {
    mobile && setOpened(false);
    gsap.to(window, { duration: 0.75, scrollTo: { y: '.functional', offsetY: media505 ? 60 : 100 } });
  };

  const scrollToTarifs = () => {
    mobile && setOpened(false);
    gsap.to(window, { duration: 0.75, scrollTo: { y: '.tarifs', offsetY: media505 ? 50 : media810 ? 100 : 200 } });
  };

  const scrollToSupport = () => {
    mobile && setOpened(false);
    gsap.to(window, { duration: 0.75, scrollTo: { y: '.support', offsetY: media505 ? 60 : media810 ? 100 : 200 } });
  };

  const scrollToAbout = () => {
    mobile && setOpened(false);
    gsap.to(window, { duration: 0.75, scrollTo: { y: '.about', offsetY: 150 } });
  };

  return (
    <ul className={`menu ${mobile ? 'menu--mobile' : 'header__menu'}`}>
      {mobile ? (
        <>
          <li onClick={scrollToAdvantage} className="menu__elem menu__elem--mobile">
            Преимущества
          </li>
          <li onClick={scrollToFunctional} className="menu__elem menu__elem--mobile">
            Функционал
          </li>
          <li onClick={scrollToTarifs} className="menu__elem menu__elem--mobile">
            Тарифы
          </li>
          <li onClick={scrollToSupport} className="menu__elem menu__elem--mobile">
            Поддержка
          </li>
          <li onClick={scrollToAbout} className="menu__elem menu__elem--mobile">
            О нас
          </li>
        </>
      ) : (
        <>
          <li onClick={scrollToAdvantage} className="menu__elem header__menuElem">
            Преимущества
          </li>
          <li onClick={scrollToFunctional} className="menu__elem header__menuElem">
            Функционал
          </li>
          <li onClick={scrollToTarifs} className="menu__elem header__menuElem">
            Тарифы
          </li>
          <li onClick={scrollToSupport} className="menu__elem header__menuElem">
            Поддержка
          </li>
          <li onClick={scrollToAbout} className="menu__elem header__menuElem">
            О нас
          </li>
        </>
      )}
    </ul>
  );
}

export default Menu;
