import React from 'react';
import Card from './Card';

function Advantage() {
  return (
    <section className="advantage">
      <div className="container">
        <div className="advantage__info">
          <p className="advantage__text">
            Уровень экспертности, надежности или популярности любой компании можно легко проверить, когда дело доходит
            до управления бизнесом в удалённом формате.
          </p>
          <h2 className="advantage__title title">Преимущества</h2>
        </div>
        <div className="advantage__cards">
          <Card className="advantage__card" fill>
            <svg className="advantage__cardIcon" />
            <h4 className="advantage__cardTitle card__title">Скорость</h4>
            <div className="advantage__cardText card__text">Cамая высокая скорость работы среди конкурентов</div>
          </Card>
          <Card className="advantage__card" white>
            <svg className="advantage__cardIcon" />
            <h4 className="advantage__cardTitle card__title">Личный менеджер</h4>
            <div className="advantage__cardText card__text">
              С каждым брендом работает отдельный выездной специалист
            </div>
          </Card>
          <Card className="advantage__card" fill>
            <svg className="advantage__cardIcon" />
            <h4 className="advantage__cardTitle card__title">Лучшие в деле</h4>
            <div className="advantage__cardText card__text">IT система №1 в России и СНГ</div>
          </Card>
        </div>
        <div className="advantage__bottom">
          <ul className="bullets">
            <li className="bullets__bullet active" />
            <li className="bullets__bullet" />
            <li className="bullets__bullet" />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Advantage;
