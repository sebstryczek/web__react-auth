import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from './_auth';
import firebaseAuth from './_auth/services/firebaseAuth';
import MainNavigation from './nav/MainNavigation';
import Routes from './nav/Routes';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider authService={firebaseAuth}>
        <MainNavigation />
        <Routes />
      </AuthProvider>
    </Router>
  );
};

export default App;
