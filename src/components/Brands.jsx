import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';
import { useMedia } from 'react-use';
import LazyLoad from 'react-lazyload';

function Brands() {
  const images = Array(6).fill('./static/brands/brand-1.png'); // temporary

  const mediaImages810 = useMedia('(max-width: 810px)');

  const sectionBrands = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const firstLookTlimeline = gsap.timeline({
      paused: true,
      delay: 0.5,
      scrollTrigger: {
        trigger: sectionBrands.current,
        start: 'top 60%'
        // markers: true
      }
    });

    firstLookTlimeline
      .fromTo('.brands__title', { opacity: 0, y: -80 }, { opacity: 1, y: 0, duration: 0.75 }, 0)
      .fromTo('.brands__items', { opacity: 0 }, { opacity: 1, y: 0, duration: 0.8 }, 0.3);
  }, []);

  return (
    <section className="brands" ref={sectionBrands}>
      <div className="brands__inner container">
        <h2 className="brands__title title">Мы уже работаем с этими брендами</h2>
        <div className="brands__items">
          {images.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <LazyLoad className="brands__image" key={index} offset={160} height={85} placeholder="Загрузка..." once>
              <img height={mediaImages810 ? '55' : '85'} width="auto" src={item} alt="brand logo" />
            </LazyLoad>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
