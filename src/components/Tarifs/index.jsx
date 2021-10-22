import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { useMedia } from 'react-use';

import Card from '../Card';
import Button from '../Button';

import cards from './cards.json';

function Tarifs() {
  const sectionTarifs = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const mediaCards1150 = useMedia('(min-width: 980px) and (max-width: 1150px)');
  const mediaCards980 = useMedia('(max-width: 980px)');

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
    firstLookTlimeline.fromTo('.tarifs__title ', { opacity: 0, y: -80 }, { opacity: 1, y: 0, duration: 0.75 }, 0);
  }, []);

  useEffect(() => {
    console.log(mediaCards1150);

    const secondLookTlimeline = gsap.timeline({
      paused: true,
      delay: 0.5,
      defaults: { duration: 0.75 },
      scrollTrigger: {
        trigger: sectionTarifs.current,
        start: 'top 40%'
        // markers: true
      }
    });

    const mobileTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionTarifs.current,
        start: 'top 40%'
        // markers: true
      },
      paused: true,
      delay: 0.5,
      defaults: { duration: 0.75 }
    });

    if (mediaCards980) {
      mobileTimeline
        .fromTo('.tarifs__card', { opacity: 0, x: -80 }, { stagger: 0.2, opacity: 1, x: 0 })
        .fromTo('.tarifs__card:nth-child(2)', { y: 0 }, { y: 0 });
    } else if (mediaCards1150) {
      secondLookTlimeline
        .fromTo('.tarifs__card:not(:nth-child(2))', { opacity: 0, x: 0 }, { opacity: 1, x: 0 }, 0)
        .fromTo('.tarifs__card:nth-child(2)', { opacity: 0, x: 0, y: 0 }, { y: -40, opacity: 1 });
    } else {
      secondLookTlimeline
        .fromTo('.tarifs__card:nth-child(1)', { opacity: 0, x: -80 }, { opacity: 1, x: 40 }, 0)
        .fromTo('.tarifs__card:nth-child(3)', { opacity: 0, x: 80 }, { opacity: 1, x: -40 }, 0)
        .fromTo('.tarifs__card:nth-child(2)', { opacity: 0, x: 0, y: 0 }, { y: -40, opacity: 1 }, 0);
    }

    return () => {
      mobileTimeline.kill();
      secondLookTlimeline.kill();
    };
  });

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
