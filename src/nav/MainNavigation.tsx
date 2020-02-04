import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import { useStateValue } from '../_state';
import PrivateRoute from '../auth/PrivateRoute';
import ForeignerRoute from '../auth/ForeignerRoute';
import Home from '../pages/home/Home';
import Things from '../pages/things/Things';
import Login from '../pages/login/Login';
import Logout from '../pages/logout/Logout';
import Register from '../pages/register/Register';

const MainNavigation = ({authActions} : any) => {
  const { state, dispatch } = useStateValue();
  const { auth } = state;
  const { isAuthenticated } = auth;
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/things">Things</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>

      <Switch>
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
        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
    </>
  );
}

export default MainNavigation;
