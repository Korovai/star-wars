import React from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import TabelBlock from '../tabel-block/tabel-block';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './app.css';

const App = () => {
  return (
    <Router>
      <Header />
      <RandomPlanet />
      <TabelBlock />
    </Router>
  );
};

export default App;