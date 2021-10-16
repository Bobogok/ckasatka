import React from 'react';
import Particles from 'react-particles-js';
import Button from '../Button';

import particlesJSON from './particlesjs-config.json';

function Main() {
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
      <div className="main__scroll">
        <a className="main__scroll-container" href="#result">
          <div className="main__scroll-icon" />
          {/* <svg
            className="main__scroll-image"
            width="100%"
            height="100%"
            viewBox="0 0 24 26"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
            xmlnsserif="http://www.serif.com/"
            style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}
          >
            <g transform="matrix(1,0,0,1,6,3.87494)">
              <g>
                <path
                  d="M6,1.5C3.515,1.5 1.5,3.515 1.5,6L1.5,12C1.5,14.485 3.515,16.5 6,16.5C8.485,16.5 10.5,14.485 10.5,12L10.5,6C10.5,3.515 8.485,1.5 6,1.5ZM6,0C9.314,-0 12,2.686 12,6L12,12C12,15.314 9.314,18 6,18C2.686,18 0,15.314 0,12L0,6C0,2.686 2.686,0 6,0Z"
                  style={{ fillRule: 'nonzero' }}
                />
                <path
                  d="M5.25,4.5C5.25,4.086 5.586,3.75 6,3.75C6.414,3.75 6.75,4.086 6.75,4.5L6.75,8.5C6.75,8.914 6.414,9.25 6,9.25C5.586,9.25 5.25,8.914 5.25,8.5L5.25,4.5Z"
                  style={{ fillRule: 'nonzero' }}
                />
              </g>
            </g>
          </svg> */}
        </a>
      </div>
    </section>
  );
}

export default Main;
