import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { AppProvider } from '~/hooks';
import { Home } from '~/pages/Home';
import { Login } from '~/pages/Login';
import { MyEvents } from '~/pages/MyEvents';
import { Register } from '~/pages/Register';

import Route from './Route';

const Routes = () => (
  <BrowserRouter>
    <AppProvider>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/home" component={Home} useDefaultLayout isPrivate exact />
        <Route
          path="/myevents"
          component={MyEvents}
          useDefaultLayout
          isPrivate
          exact
        />
      </Switch>
    </AppProvider>
  </BrowserRouter>
);

export default Routes;
