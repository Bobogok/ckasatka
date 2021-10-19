import React from 'react';
import classNames from 'classnames';

function Button({ onClick, className, children, type, outline, fill, shadow, login, add, black }) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      className={classNames('button', className, {
        'button--outline': outline,
        'button--fill': fill,
        'button--shadow': shadow,
        'button--login': login,
        'button--add': add,
        'button--black': black
      })}
    >
      {children}
    </button>
  );
}

export default Button;
