import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import Things from '../pages/things/Things';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import AuthConsumer from '../auth/AuthConsumer';
import PrivateRoute from '../auth/PrivateRoute';
import ForeignerRoute from '../auth/ForeignerRoute';
import { authContextPropsType } from '../auth/AuthContext';
import Logout from '../pages/logout/Logout';

const MainNavigationRouting = () => (
  <Switch>
    <AuthConsumer>
      {
        ({ isAuthenticated, currentUser, actions }: authContextPropsType) => (
          <>
            <ForeignerRoute path='/login' redirectPath='/' isAuthenticated={isAuthenticated}>
              <Login login={(email, password) => console.log('!!!', email, password)} />
            </ForeignerRoute>

            <ForeignerRoute path='/register' redirectPath='/' isAuthenticated={isAuthenticated}>
              <Register />
            </ForeignerRoute>
            
            <PrivateRoute path='/things' redirectPath='/login' isAuthenticated={isAuthenticated}>
              <Things />
            </PrivateRoute>
            
            <PrivateRoute path='/logout' redirectPath='/login' isAuthenticated={isAuthenticated}>
              <Logout />
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
