import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

import Card from './Card';

function Choice() {
  const sectionChoice = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const firstLookTlimeline = gsap.timeline({
      paused: true,
      delay: 0.5,
      scrollTrigger: {
        trigger: sectionChoice.current,
        start: 'top center'
        // markers: true
      }
    });

    const secondLookTlimeline = gsap.timeline({
      paused: true,
      delay: 0.5,
      scrollTrigger: {
        trigger: sectionChoice.current,
        start: 'top 40%'
        // markers: true
      }
    });

    firstLookTlimeline
      .fromTo('.choice__card:nth-child(1)', { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 0.75 }, 0)
      .fromTo('.choice__card:nth-child(2)', { opacity: 0, y: -80 }, { opacity: 1, y: 0, duration: 0.75 }, 0)
      .fromTo('.choice__info', { opacity: 0, x: 200 }, { opacity: 1, x: 0, duration: 0.75 }, 0);

    secondLookTlimeline
      .fromTo('.choice__card:nth-child(3)', { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 0.75 }, 0)
      .fromTo('.choice__card:nth-child(4)', { opacity: 0, y: -80 }, { opacity: 1, y: 0, duration: 0.75 }, 0)
      .fromTo('.choice__case', { opacity: 0, y: 200 }, { opacity: 1, y: 0, duration: 0.75 });
  }, []);

  return (
    <section className="choice" ref={sectionChoice}>
      <div className="choice__inner container">
        <div className="choice__cards">
          <Card className="choice__card" white>
            <div className="choice__cardTitle">
              <svg className="choice__cardIcon" />
              <h4 className="card__title">Результат</h4>
            </div>
            <div className="card__text">
              Получаем самые точные аналитические данные на основе которых повышаются продажи ваших товаров
            </div>
          </Card>
          <Card className="choice__card" fill>
            <div className="choice__cardTitle">
              <svg className="choice__cardIcon" />
              <h4 className="card__title">Скорость</h4>
            </div>
            <div className="card__text">Экономим огромное количество часов на управлении бизнесом</div>
          </Card>
          <Card className="choice__card" fill>
            <div className="choice__cardTitle">
              <svg className="choice__cardIcon" />
              <h4 className="card__title">Менеджер</h4>
            </div>
            <div className="card__text">Закрепляем за каждым брендом выездного специалиста</div>
          </Card>
          <Card className="choice__card" white>
            <div className="choice__cardTitle">
              <svg className="choice__cardIcon" />
              <h4 className="card__title">Разработка</h4>
            </div>
            <div className="card__text">Бесплатно разрабатываем IT продукты по запросу клиентов</div>
          </Card>
        </div>
        <div className="choice__info">
          <h2 className="choice__title title">Почему выбирают нас?</h2>
          <p className="choice__text">
            Мы занимаемся уникальной разработкой автоматизированного программного обеспечения для легкого управления
            бизнесом в удаленном формате.
          </p>
          <div className="choice__cases">
            <div className="choice__case">
              <div className="choice__caseTitle">100%</div>
              <div className="choice__caseText">Результат</div>
            </div>
            <div className="choice__case">
              <div className="choice__caseTitle">75</div>
              <div className="choice__caseText">Партнеров</div>
            </div>
            <div className="choice__case">
              <div className="choice__caseTitle">2000+</div>
              <div className="choice__caseText">Часов работы</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Choice;
