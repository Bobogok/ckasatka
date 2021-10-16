import React from 'react';
import classNames from 'classnames';

function Card({ className, children, fill, white }) {
  return (
    <div
      className={classNames('card', className, {
        'card--white': white,
        'card--fill': fill
      })}
    >
      {children}
    </div>
  );
}

export default Card;
