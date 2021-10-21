import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { useMedia } from 'react-use';

import Slider from 'react-slick';

import Card from '../Card';

import cards from './cards.json';
import slickSettings from './slick-settings';

function Advantage() {
  const sectionAdvantage = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const mediaSlider1300 = useMedia('(min-width: 810px) and (max-width: 1300px)');
  const mediaSlider810 = useMedia('(max-width: 810px)');

  if (mediaSlider1300) {
    slickSettings.slidesToScroll = 2;
    slickSettings.slidesToShow = 2;
  } else if (mediaSlider810) {
    slickSettings.slidesToScroll = 1;
    slickSettings.slidesToShow = 1;
    slickSettings.dots = false;
  } else {
    slickSettings.slidesToScroll = 3;
    slickSettings.slidesToShow = 3;
  }

  useEffect(() => {
    const firstLookTlimeline = gsap.timeline({
      paused: true,
      delay: 0.5,
      scrollTrigger: {
        trigger: sectionAdvantage.current,
        start: 'top 65%'
        // markers: true
      },
      defaults: {
        duration: 0.75
      }
    });

    firstLookTlimeline
      .fromTo('.advantage__text', { opacity: 0, x: -80 }, { opacity: 1, x: 0 }, 0)
      .fromTo('.advantage__title', { opacity: 0, x: 80 }, { opacity: 1, x: 0 }, 0);

    const sliderTL = gsap.timeline({
      paused: true,
      delay: 0.5,
      scrollTrigger: {
        trigger: sectionAdvantage.current,
        start: 'top 40%'
        // markers: true
      },
      id: 'sliderTL',
      defaults: {
        duration: 0.75
      }
    });

    sliderTL
      .pause()
      .fromTo('.advantage__card.card--fill', { opacity: 0, y: 80 }, { opacity: 1, y: 0 }, 0)
      .fromTo('.advantage__card.card--white', { opacity: 0, y: -80 }, { opacity: 1, y: 0 }, 0)
      .fromTo('.bullets', { opacity: 0 }, { opacity: 1 });
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
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
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
          }
        </div>
      </div>
    </section>
  );
}

export default Advantage;
