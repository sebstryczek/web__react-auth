import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import Things from '../pages/things/Things';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import { AuthConsumer } from '../auth/Auth';
import PrivateRoute from '../auth/PrivateRoute';

const MainNavigationRouting = () => (
  <Switch>
    <Route path="/login">
      <Login />
    </Route>

    <Route path="/register">
      <Register />
    </Route>
    
    <AuthConsumer>
      {
        ({ isAuthenticated, currentUser, actions }: any) => (
          <PrivateRoute path='/things' redirectPath='/login' isAuthenticated={isAuthenticated}>
            <Things />
          </PrivateRoute>
        )}
    </AuthConsumer>

    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default MainNavigationRouting;
