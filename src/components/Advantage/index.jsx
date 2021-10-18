import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import Slider from 'react-slick';

import Card from '../Card';

import cards from './cards.json';
import slickSettings from './slick-settings';

function Advantage() {
  const sectionAdvantage = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const firstLookTlimeline = gsap.timeline({
      paused: true,
      delay: 0.5,
      scrollTrigger: {
        trigger: sectionAdvantage.current,
        start: 'top 65%'
        // markers: true
      }
    });

    const secondLookTlimeline = gsap.timeline({
      paused: true,
      delay: 0.5,
      scrollTrigger: {
        trigger: sectionAdvantage.current,
        start: 'top 40%'
        // markers: true
      }
    });

    firstLookTlimeline
      .fromTo('.advantage__text', { opacity: 0, x: -80 }, { opacity: 1, x: 0, duration: 0.75 }, 0)
      .fromTo('.advantage__title', { opacity: 0, x: 80 }, { opacity: 1, x: 0, duration: 0.75 }, 0);

    secondLookTlimeline
      .fromTo('.advantage__card.card--fill', { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 0.75 }, 0)
      .fromTo('.advantage__card.card--white', { opacity: 0, y: -80 }, { opacity: 1, y: 0, duration: 0.75 }, 0)
      .fromTo('.bullets', { opacity: 0 }, { opacity: 1, duration: 0.75 });
  }, []);

  return (
    <section className="advantage" ref={sectionAdvantage}>
      <div className="container">
        <div className="advantage__info">
          <p className="advantage__text">
            Уровень экспертности, надежности или популярности любой компании можно легко проверить, когда дело доходит
            до управления бизнесом в удалённом формате.
          </p>
          <h2 className="advantage__title title">Преимущества</h2>
        </div>
        <div className="advantage__cards">
          <Slider {...slickSettings}>
            {Object.values(cards)
              .flat()
              .map((obj, index) => {
                if (index % 2 === 1) {
                  return (
                    <Card key={obj.id} className="advantage__card" white>
                      <svg className="advantage__cardIcon" />
                      <h4 className="advantage__cardTitle card__title">{obj.title}</h4>
                      <div className="advantage__cardText card__text">{obj.description}</div>
                    </Card>
                  );
                }

                return (
                  <Card key={obj.id} className="advantage__card" fill>
                    <svg className="advantage__cardIcon" />
                    <h4 className="advantage__cardTitle card__title">{obj.title}</h4>
                    <div className="advantage__cardText card__text">{obj.description}</div>
                  </Card>
                );
              })}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Advantage;
