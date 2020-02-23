import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AuthProvider, { AuthProviderActions } from './auth/AuthProvider';
// import createAuthFirebase from './auth/createAuthFirebase';
import AuthConsumer from './auth/AuthConsumer';
import { User } from './auth/User';
import RenderLogger from './components/render-logger/RenderLogger';

const browserHistory = createBrowserHistory();
// const auth = createAuthFirebase();

const dubugAuth: AuthProviderActions = {
  login: async (email: string, password: string): Promise<User> => {
    console.log('login')
    return {
      id: 'id',
      email: 'email',
    }
  },
  logout: async () => { },
  register: () => { },
};


// const TestButton = () => {
//   return (
//     <AuthConsumer>
//       {(props) => (
//         <button onClick={() => props.actions.login()}>
//           Click {props.currentUser}
//         </button>
//       )}
//     </AuthConsumer>
//   )
// }

const App: React.FC = () => {
  return (
    <Router history={browserHistory}>
      <AuthProvider auth={dubugAuth}>
        <div>
          11111
        </div>
        <RenderLogger text="lolol" />
        <div>22222</div>
        <div>33333</div>
      </AuthProvider>
    </Router>
  );
}

export default App;
