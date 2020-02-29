import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import RenderLogger from './components/render-logger/RenderLogger';
import { AuthProvider } from './_auth';
// import debugAuth from './_auth/services/debugAuth';
import firebaseAuth from './_auth/services/firebaseAuth';
import AuthStateDebugger from './_auth/components/AuthStateDebugger';
import AuthActionsDebugger from './_auth/components/AuthActionsDebugger';

const browserHistory = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Router history={browserHistory}>
      <div>00000</div>
      <div>00000</div>
      <div>00000</div>
      <div>00000</div>
      <div>00000</div>
      <AuthProvider authService={firebaseAuth}>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <div>11111</div>
        <RenderLogger text="lolol" />
        <div>22222</div>
        <div>22222</div>
        <div>22222</div>
        <div>22222</div>
        <div>22222</div>
        <AuthStateDebugger />
        <div>33333</div>  
        <div>33333</div>  
        <div>33333</div>  
        <div>33333</div>  
        <div>33333</div>  
        <AuthActionsDebugger />
        <div>44444</div>  
        <div>44444</div>  
        <div>44444</div>  
        <div>44444</div>  
        <div>44444</div>  
      </AuthProvider>
    </Router>
  );
}

export default App;
