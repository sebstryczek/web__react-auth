import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from '../_auth/components/PrivateRoute';
import Error404 from '../pages/errors/Error404';
import Home from '../pages/home/Home';
import Things from '../pages/things/Things';
import Login from '../pages/login/Login';
import Logout from '../pages/logout/Logout';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <PrivateRoute exact path='/things' redirectPath='/login'>
        <Things />
      </PrivateRoute>

      <Route path='/login'>
        <Login />
      </Route>

      <Route path='/logout'>
        <Logout />
      </Route>

      <Route path='/'>
        <Error404 />
      </Route>
    </Switch>
  );
};

export default Routes;
