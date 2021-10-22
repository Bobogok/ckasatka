import React from 'react';
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
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Choice />
      <Brands />
      <Advantage />
      <Functional />
      <Tarifs />
      <Comments />
      <Support />
      <About />
      <Footer />
    </div>
  );
}

export default App;
