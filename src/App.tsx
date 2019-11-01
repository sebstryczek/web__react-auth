import React, { useState, MouseEventHandler } from 'react';
import Home from './pages/home/Home';
import Things from './pages/things/Things';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
// import { firebase } from './auth/firebase';
// import app from 'firebase/app';
import * as firebase from "firebase";
import { Link, Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export interface IAppProps {
}

// const useAuth = (auth: any) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [currentUser, setCurrentUser] = useState('nima');

//   return {
//     isAuthenticated,
//     currentUser,
//     login: () => {
//       auth.login()
//     }
//   };
// }
const history = createBrowserHistory();

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
};
type t = {
  currentUser: {
    updatePassword: Function,
  },
  createUserWithEmailAndPassword: Function,
  signInWithEmailAndPassword: Function,
  sendPasswordResetEmail: Function,
  signOut: Function,
}
class Firebase {
  auth: any
  constructor() {
    const app = firebase.initializeApp(config);
    this.auth = firebase.app().auth();
    console.log(this.auth)
    if (firebase.apps.length) {
    }
  }

  doCreateUserWithEmailAndPassword = (email: string, password: string) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email: string, password: string) =>
    this.auth.signInWithEmailAndPassword(email, password);
  
  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email: string) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password: string) => this.auth.currentUser ? this.auth.currentUser.updatePassword(password) : null;
}
// const withAuth = (Component: any) => {
//   const auth = {
//     login: () => {console.log('login')},
//     logout: () => {console.log('logout')},
//     register: () => {console.log('register')},
//     currentUser: 'user',
//     isAuthenticated: false,
//   }
//   return (props: any) => (
//     <div>
//       <Component {...props} auth={auth} />
//     </div>
//   )
// }

type p = {
  isAuthenticated: Boolean,
  currentUser: String | null,
  actions: {
    login: Function,
    logout: Function,
    register: Function,
  }
}
const defaultValue : p = {
  isAuthenticated: false,
  currentUser: null,
  actions: {
    login: () => {},
    logout: () => {},
    register: () => {},
  }
}
const Context = React.createContext(defaultValue);
const AuthConsumer = Context.Consumer;
class AuthProvider extends React.Component {
  state = {
    currentUser: null,
    isAuthenticated: false,
    isBusy: false,
    hasError: false,
    errorMessage: '',
  }
  firebase = new Firebase();

  componentDidMount() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.setState({ isAuthenticated: true, isBusy: false, user });
    }
  }

  get actions() {
    return {
      login: (email: string, password: string) => {
        this.setState({ isBusy: true });
        this.firebase.doSignInWithEmailAndPassword(email, password)
          .then((result: any) => {
            if (result.user.email) {
              const user = { email: result.user.email };
              this.setState({ isAuthenticated: true, isBusy: false, user });
              localStorage.setItem('currentUser', JSON.stringify(user));
            }
          })
          .catch((error: any) => {
            console.log(error.code, error.message);
            this.setState({ isAuthenticated: false, isBusy: false, hasError: true, errorMessage: error.message });
          });
      },
      logout: () => {console.log('logout')},
      register: () => {console.log('register')},
    }
  }

  render() {
    const { children } = this.props;
    const { state, actions } = this;
    const { isAuthenticated, currentUser } = this.state;
    return (
        <Context.Provider value={{isAuthenticated, currentUser, actions}}>
          {children}
        </Context.Provider>
    );
  }
}

function PrivateRoute({ children, isAuthenticated, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const App: React.FC<IAppProps> = (props: any) => {
  return (
    <AuthProvider>
      <div className="App">
        <h1>
          App
        </h1>
    <Router history={history}>
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
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
    </Router>
        <AuthConsumer>
          {
            ({isAuthenticated, currentUser, actions}: any) => (
              <div>
                {
                  JSON.stringify(isAuthenticated)
                }
                {
                  JSON.stringify(currentUser)
                }
                <button onClick={e => {
                  actions.login('aaa@aa.aa', 'aaa123')
                }}>login</button>
                <button onClick={actions.logout}>logout</button>
                <button onClick={actions.register}>register</button>
              </div>
            )
          }
        </AuthConsumer>

<Router history={history}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          {/* <Route path="/things">
            <Things />
          </Route> */}

<AuthConsumer>
          {
            ({isAuthenticated, currentUser, actions}: any) => (
          <PrivateRoute path="/things" isAuthenticated={isAuthenticated}>
            <Things />
          </PrivateRoute>
            )}
            </AuthConsumer>


          <Route path="/">
            <Home />
          </Route>
        </Switch>
</Router>
      </div>
    </AuthProvider>
  );
}

export default App;
