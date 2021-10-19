/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import Slider from 'react-slick';

import comments from './comments.json';
import slickSettings from './slick-settings';

function Comments() {
  const sectionComments = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const firstLookTlimeline = gsap.timeline({
      paused: true,
      delay: 0.5,
      scrollTrigger: {
        trigger: sectionComments.current,
        start: 'top 80%'
        // markers: true
      }
    });

    firstLookTlimeline
      .fromTo('.comments__title', { opacity: 0, y: -80 }, { opacity: 1, y: 0, duration: 0.75 }, 0)
      .fromTo('.comments__items', { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 0.75 });
  }, []);

  return (
    <section className="comments" ref={sectionComments}>
      <div className="container">
        <h2 className="comments__title title">Что говорят о нас</h2>
        <div className="comments__items">
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Slider {...slickSettings}>
              {Object.values(comments)
                .flat()
                .map((obj, index) => (
                  <div key={obj.id} className="comments__item">
                    <img className="comments__image" width="50" height="auto" src={obj.image} alt={obj.alt} />
                    <div className="comments__text">
                      <p>{obj.text}</p>
                      <strong>
                        {obj.personName} ({obj.companyName})
                      </strong>
                    </div>
                  </div>
                ))}
            </Slider>
          }
        </div>
      </div>
    </section>
  );
}

export default Comments;
