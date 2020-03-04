import React from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import TabelBlock from '../tabel-block/tabel-block';

import './app.css';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <RandomPlanet />
      <TabelBlock />
    </React.Fragment>
  );
};

export default App;