import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Header, Main, Choice, Brands, Advantage, Functional, Tarifs } from './components';

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
      <Advantage />
      <Functional />
      <Tarifs />
    </div>
  );
}

export default App;
