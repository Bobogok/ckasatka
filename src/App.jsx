import React, { Suspense } from 'react';
import { Header, Main, Choice } from './components';

import './styles/index.scss';

const LazyChoice = React.lazy(() => Choice);
console.log(LazyChoice);

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Suspense fallback={<div>Загрузка...</div>}>
        <LazyChoice />
      </Suspense>
    </div>
  );
}

export default App;
