import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

import Slider from 'react-slick';

import cards from './cards.json';
import slickSettings from './slick-settings';

import Card from '../Card';

function Functional() {
  const sectionFunctional = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const firstLookTlimeline = gsap.timeline({
      paused: true,
      delay: 0.5,
      scrollTrigger: {
        trigger: sectionFunctional.current,
        start: 'top center'
        // markers: true
      }
    });

    const secondLookTlimeline = gsap.timeline({
      paused: true,
      delay: 0.7,
      scrollTrigger: {
        trigger: sectionFunctional.current,
        start: 'top 30%'
        // markers: true
      }
    });

    firstLookTlimeline
      .fromTo('.functional__title', { opacity: 0, x: -80 }, { opacity: 1, x: 0, duration: 0.75 }, 0)
      .fromTo('.functional__textWrapper', { opacity: 0, x: 80 }, { opacity: 1, x: 0, duration: 0.75 }, 0)
      // .fromTo('.functional__cases', { opacity: 0, x: 550 }, { opacity: 1, x: 0, duration: 0.75 });
      .fromTo('.functional__cases', { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 0.5 });

    secondLookTlimeline
      .fromTo('.functional__card.card--fill', { opacity: 0 }, { opacity: 1, duration: 0.75 })
      .fromTo('.functional__card.card--white', { opacity: 0 }, { opacity: 1, duration: 0.75 });
  }, []);

  return (
    <section className="functional" ref={sectionFunctional}>
      <div className="container">
        <div className="functional__info">
          <h2 className="functional__title title">Функционал</h2>
          <div className="functional__textWrapper">
            <p className="functional__text">
              Мы придумали IT систему, которая эффективно решает за вас проблемы c управлением бизнесом.
            </p>
            <p className="functional__text">
              Теперь можно не задумываться над рутинными и скучными операциями ведения бизнеса.
            </p>
            <div className="functional__cases">
              <div className="functional__case">
                <div className="functional__caseTitle functional__caseTitle--red">82%</div>
                <div className="functional__caseText">Средний рост компаний, которые использует нашу систему</div>
              </div>
              <div className="functional__case">
                <div className="functional__caseTitle">100+</div>
                <div className="functional__caseText">Клиенты, которые рекомендуют нас</div>
              </div>
            </div>
          </div>
        </div>
        <div className="functional__cards">
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Slider {...slickSettings}>
              {Object.values(cards)
                .flat()
                .map((obj, index) => {
                  if (index % 2 === 0) {
                    return (
                      <Card key={obj.id} className="functional__card" white>
                        <svg className="functional__cardIcon" />
                        <h4 className="functional__cardTitle card__title">{obj.title}</h4>
                        <div className="functional__cardText card__text">{obj.description}</div>
                      </Card>
                    );
                  }

                  return (
                    <Card key={obj.id} className="functional__card" fill>
                      <svg className="functional__cardIcon" />
                      <h4 className="functional__cardTitle card__title">{obj.title}</h4>
                      <div className="functional__cardText card__text">{obj.description}</div>
                    </Card>
                  );
                })}
            </Slider>
          }
        </div>
      </div>
    </section>
  );
}

export default Functional;
