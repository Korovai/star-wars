import React from 'react';
import PeoplePage from '../people-page/people-page';
import StarshipsPage from '../starships-page/starships-page';
import PageNotFound from '../page-not-found/page-not-found';
import {Switch, Route, Redirect} from 'react-router-dom';

import './tabel-block.css';

const TabelBlock = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact />
        <Route path="/people" component={PeoplePage} />
        <Route path="/starships" component={StarshipsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </React.Fragment>
  );  
};

export default TabelBlock;