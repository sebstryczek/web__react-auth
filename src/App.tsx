import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { StateProvider,  } from './_state';
import { initialState, rootReducer } from './_state/config';
import { ThemedButtonF, ThemedButtonC } from './_state/_example';

import AuthProvider from './auth/AuthProvider';
import createAuthFirebase from './auth/createAuthFirebase';
import MainNavigation from './nav/MainNavigation';
import MainNavigationRouting from './nav/MainNavigationRouting';

const browserHistory = createBrowserHistory();
const auth = createAuthFirebase();

const App: React.FC = () => {
  return (
    <Router history={browserHistory}>
      <StateProvider initialState={initialState} reducer={rootReducer}>
          <ThemedButtonF />
          <ThemedButtonC />
      </StateProvider>

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
