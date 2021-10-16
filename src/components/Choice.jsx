import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
// eslint-disable-next-line no-unused-vars
import { gsap } from 'gsap';
import Card from './Card';

function Choice() {
  const sectionChoice = useRef(null);
  console.log(sectionChoice);
  const intersection = useIntersection(sectionChoice, {
    // используется отслеживание пересечения элемента с областью видимости
    root: null,
    // Отступы вокруг root.  Могут иметь значения как свойство css margin
    rootMargin: '0px',
    // Число или массив чисел, указывающий, при каком проценте видимости целевого элемента должен сработать callback
    threshold: 1
  });

  console.log(intersection);

  // const fadeIn = (element) => {
  //   gsap.fromTo(element, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 2 });
  // };

  // // eslint-disable-next-line no-undef
  // // eslint-disable-next-line no-unused-expressions
  // intersection && intersection.intersectionRatio < 1 ? '' : fadeIn('.choice');

  // useEffect(() => {
  //   console.log(intersection);
  //   // eslint-disable-next-line no-unused-expressions
  //   // gsap.to(titleRef.current, { rotation: '+=360' });
  // }, []);
  return (
    <section className="choice">
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
          <h2 className="choice__title title" ref={sectionChoice}>
            Почему выбирают нас?
          </h2>
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
