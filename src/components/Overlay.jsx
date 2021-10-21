import React from 'react';

function Overlay({ opened, onClose }) {
  return (
    <div className={`overlay ${opened ? 'overlay_visible' : ''}`}>
      <div className="overlay__contant">
        <button className="overlay__close" onClick={onClose} type="button">
          <svg width="100%" height="100%" viewBox="0 0 32 32" fill="#000" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.6 4.2a1.98 1.98 0 1 0-2.8-2.8L14 11.2 4.2 1.4a1.98 1.98 0 1 0-2.8 2.8l9.37 9.37a.61.61 0 0 1 0 .86L1.4 23.8a1.98 1.98 0 1 0 2.8 2.8l9.37-9.37a.61.61 0 0 1 .86 0l9.37 9.37a1.98 1.98 0 1 0 2.8-2.8l-9.37-9.37a.61.61 0 0 1 0-.86L26.6 4.2z"
            />
          </svg>
        </button>
        <img className="overlay__contantLogo" src="./static/brands/logo.png" alt="logo" />
        <ul className="overlay__menuElems">
          <li className="overlay__menuElem">Преимущества</li>
          <li className="overlay__menuElem">Функционал</li>
          <li className="overlay__menuElem">Тарифы</li>
          <li className="overlay__menuElem">Поддержка</li>
          <li className="overlay__menuElem">О нас</li>
        </ul>
      </div>
    </div>
  );
}

export default Overlay;
