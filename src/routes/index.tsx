import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { Home } from '~/pages/Home';
import { Login } from '~/pages/Login';

import Route from './Route';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/home" component={Home} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
