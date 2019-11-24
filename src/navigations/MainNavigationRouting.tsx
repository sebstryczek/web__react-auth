import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import Things from '../pages/things/Things';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import AuthConsumer from '../auth/AuthConsumer';
import PrivateRoute from '../auth/PrivateRoute';
import ForeignerRoute from '../auth/ForeignerRoute';

const MainNavigationRouting = () => (
  <Switch>
    <AuthConsumer>
      {
        ({ isAuthenticated, currentUser, actions }: any) => (
          <>
            <ForeignerRoute path='/login' redirectPath='/' isAuthenticated={isAuthenticated}>
              <Login />
            </ForeignerRoute>

            <ForeignerRoute path='/register' redirectPath='/' isAuthenticated={isAuthenticated}>
              <Register />
            </ForeignerRoute>
            
            <PrivateRoute path='/things' redirectPath='/login' isAuthenticated={isAuthenticated}>
              <Things />
            </PrivateRoute>
          </>
        )}
    </AuthConsumer>

    <Route path="/">
      <Home />
    </Route>
    
  </Switch>
);

export default MainNavigationRouting;
