import React from 'react';
import { animateScroll as scroll, Element } from 'react-scroll';
import {
  Header,
  Main,
  Choice,
  Brands,
  Advantage,
  Functional,
  Tarifs,
  Comments,
  Support,
  About,
  Footer
} from './components';

import './styles/index.scss';

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true
    });
  };

  const scrollToChoice = () => {
    scroll.scrollTo(900, {
      duration: 700,
      delay: 50,
      smooth: true
    });
  };

  return (
    <div className="wrapper">
      <Header scrollToTop={scrollToTop} />
      <Main scrollToChoice={scrollToChoice} />
      <Choice />
      <Brands />
      <Element name="advantage">
        <Advantage />
      </Element>
      <Element name="functional">
        <Functional />
      </Element>
      <Element name="tarifs">
        <Tarifs />
      </Element>
      <Comments />
      <Element name="support">
        <Support />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
