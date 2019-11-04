import React, { useState, MouseEventHandler } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { AuthProvider, AuthConsumer } from './auth/Auth';
import createAuthFirebase from './auth/createAuthFirebase';
import MainNavigation from './navigations/MainNavigation';
import MainNavigationRouting from './navigations/MainNavigationRouting';

export interface IAppProps {
}
const auth = createAuthFirebase();
const browserHistory = createBrowserHistory();

const App: React.FC<IAppProps> = (props: any) => {
  return (
    <Router history={browserHistory}>
      <AuthProvider auth={auth}>
        <div className="App">
          <h1>
            App
          </h1>
          <MainNavigation />
          <MainNavigationRouting />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
