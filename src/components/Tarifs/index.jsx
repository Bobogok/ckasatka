import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

import Card from '../Card';
import Button from '../Button';

import cards from './cards.json';

function Tarifs() {
  const sectionTarifs = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const firstLookTlimeline = gsap.timeline({
      paused: true,
      delay: 0.5,
      scrollTrigger: {
        trigger: sectionTarifs.current,
        start: 'top 75%'
        // markers: true
      }
    });

    const secondLookTlimeline = gsap.timeline({
      paused: true,
      delay: 0.5,
      scrollTrigger: {
        trigger: sectionTarifs.current,
        start: 'top 40%'
        // markers: true
      }
    });

    firstLookTlimeline.fromTo('.tarifs__title ', { opacity: 0, y: -80 }, { opacity: 1, y: 0, duration: 0.75 }, 0);

    secondLookTlimeline
      .fromTo('.tarifs__card:nth-child(1)', { opacity: 0, x: -80 }, { opacity: 1, x: 40, duration: 0.75 }, 0)
      .fromTo('.tarifs__card:nth-child(3)', { opacity: 0, x: 80 }, { opacity: 1, x: -40, duration: 0.75 }, 0)
      .fromTo('.tarifs__card:nth-child(2)', { opacity: 0, y: 0 }, { opacity: 1, duration: 0.75 })
      .to('.tarifs__card:nth-child(2)', { y: -40, duration: 0.75 });
  }, []);

  return (
    <section className="tarifs" ref={sectionTarifs}>
      <div className="container">
        <h2 className="tarifs__title title">Тарифы</h2>
        <div className="tarifs__cards">
          {Object.values(cards)
            .flat()
            .map((obj, index) => {
              if (index % 2 === 0) {
                return (
                  <Card className="tarifs__card" key={obj.id} white>
                    <h4 className="tarifs__cardTitle card__title">{obj.title}</h4>
                    <div className="tarifs__cardText card__text">{obj.description}</div>
                    <div className="tarifs__timing card__text">{obj.timing}</div>
                    <ul className="tarifs__items card__text">
                      {obj.tarifs.map((item) => (
                        <li key={item} className="tarifs__item">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button className="tarifs__button" outline shadow>
                      <span>Подключить</span>
                    </Button>
                  </Card>
                );
              }

              return (
                <Card className="tarifs__card" key={obj.id} fill>
                  <h4 className="tarifs__cardTitle card__title">{obj.title}</h4>
                  <div className="tarifs__cardText card__text">{obj.description}</div>
                  <div className="tarifs__timing card__text">{obj.timing}</div>
                  <ul className="tarifs__items card__text">
                    {obj.tarifs.map((item) => (
                      <li key={item} className="tarifs__item">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="tarifs__button" still shadow>
                    <span>Подключить</span>
                  </Button>
                </Card>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Tarifs;
