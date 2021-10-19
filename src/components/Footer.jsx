import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <img width="60" height="60" className="footer__logo" src="./static/brands/logo.png" alt="" />
          <div className="footer__info">
            <div className="footer__textBox">
              <div className="footer__text">
                <a href="tel:+79991234567">8 (999) 123 45-67</a>
              </div>
              <div className="footer__text">
                <a href="mailto:ckasatka.admin@yandex.ru">ckasatka.admin@yandex.ru</a>
              </div>
            </div>
            <div className="footer__socials">
              <svg className="footer__social" />
              <svg className="footer__social" />
              <svg className="footer__social" />
              <svg className="footer__social" />
              <svg className="footer__social" />
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__copyright">© «CKASATKA» Все права защищены</div>
          <div className="footer__docs">
            <div className="footer__doc">Информация об онлайн-оплате</div>
            <div className="footer__doc">Политика конфиденциальности</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
