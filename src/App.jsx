import React from 'react';
import { Header, Main, Choice } from './components';

import './styles/index.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Choice />
    </div>
  );
}

export default App;
