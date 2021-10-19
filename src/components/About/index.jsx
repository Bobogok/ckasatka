import React, { useState, useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import classNames from 'classnames';
import { gsap } from 'gsap';

import aboutMenu from './about-menu';

function About() {
  const [aboutActive, setAboutActive] = useState(1);

  const sectionAbout = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const handleClick = (index) => {
    setAboutActive(index);
  };

  useEffect(() => {
    gsap.fromTo('.about__text', { opacity: 0 }, { opacity: 1, duration: 0.75 });
  }, [aboutActive]);

  useEffect(() => {
    const firstLookTlimeline = gsap.timeline({
      paused: true,
      delay: 0.5,
      scrollTrigger: {
        trigger: sectionAbout.current,
        start: 'top 80%'
      }
    });

    firstLookTlimeline
      .fromTo('.about__logo, .about__title', { opacity: 0, x: 80 }, { opacity: 1, x: 0, duration: 0.75 }, 0)
      .fromTo('.about__info', { opacity: 0, x: -80 }, { opacity: 1, x: 0, duration: 0.75 });
  }, []);

  return (
    <section className="about" ref={sectionAbout}>
      <div className="container">
        <h2 className="about__title title">О нас</h2>
        <div className="about__main">
          <div className="about__info">
            <ul className="about__items">
              {Object.keys(aboutMenu).map((elem, index) => (
                <li
                  key={elem}
                  className={classNames('about__item', {
                    active: index === aboutActive
                  })}
                  onClick={() => handleClick(index)}
                >
                  {elem}
                </li>
              ))}
            </ul>
            {Object.values(aboutMenu)[aboutActive]}
          </div>
          <div className="about__logo">
            <span>C</span>KASATKA
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
