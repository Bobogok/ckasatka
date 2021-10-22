import React, { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { gsap } from 'gsap';
import Menu from './Menu';

import Button from './Button';

import Overlay from './Overlay';

function Header() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const [opened, setOpened] = useState(false);

  const handleClickMenu = () => {
    setOpened(true);
  };

  const setCartClosed = () => {
    setOpened(false);
  };

  const scrollToTop = () => {
    gsap.to(window, { duration: 0.75, scrollTo: { y: 'top' } });
    setCartClosed();
  };

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
          <button className="header__button-navigation" onClick={handleClickMenu} type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              version="1.1"
              fill="#000"
              width="100%"
              height="100%"
            >
              <path d="M3 17a1 1 0 0 0 1 1h16a1 1 0 1 0 0-2H4a1 1 0 0 0-1 1zm0-5a1 1 0 0 0 1 1h16a1 1 0 1 0 0-2H4a1 1 0 0 0-1 1zm1-6a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2H4z" />
            </svg>
          </button>
          <Overlay
            opened={opened}
            onClose={setCartClosed}
            setOpened={(bool) => setOpened(bool)}
            scrollToTop={scrollToTop}
          />
          <Menu />
          <Button className="header__login" outline login>
            <span>Вход</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
