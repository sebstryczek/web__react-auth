import React from 'react';
import User from './types/User';
import AuthModel from './types/AuthModel';
import AuthService from './types/AuthService';

const defaultValue: AuthModel = {
  state: {
    isAuthenticated: false,
    currentUser: null,
  },
  actions: {
    login: (username, password) => new Promise(() => ({ email: '', id: '-1', })),
    logout: () => new Promise(() => true),
    register: (username, password) => true,
  }
}

export const AuthContext = React.createContext(defaultValue);

// const AuthConsumer = AuthContext.Consumer;

type AuthProviderProps = {
  authService: AuthService,
};

type AuthProviderState = {
  isAuthenticated: boolean,
  currentUser: User,
};
// const AuthProvider = AuthContext.Provider;
export class AuthProvider extends React.Component<AuthProviderProps> {
  state = {
    isAuthenticated: false,
    currentUser: null,
    // isBusy: false,
    // hasError: false,
    // errorMessage: '',
  }

  componentDidMount() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      const isAuthenticated = true;
      const currentUser: User = JSON.parse(user);
      this.setState({ isAuthenticated, currentUser });
    }
  }

  login = async (email: string, password: string) => {
    const user: User = await this.props.authService.login(email, password);
    this.setState({
      isAuthenticated: true,
      currentUser: user,
    });
    return user;
  }

  logout = async () => {
    const isLogoutSucceed = await this.props.authService.logout();
    localStorage.removeItem('currentUser');
    this.setState({
      isAuthenticated: false,
      currentUser: null,
    });
    return isLogoutSucceed;
  }

  register = (email: string, password: string) => {
    const isRegisterSucceed = this.props.authService.register(email, password);
    return isRegisterSucceed;
  }

  get actions() {
    return {
      login: this.login,
      logout: this.logout,
      register: this.register,
    }
  }

  render() {
    const { children } = this.props;
    const { state, actions } = this;
    return (
        <AuthContext.Provider value={{state, actions}}>
          {children}
        </AuthContext.Provider>
    );
  }
}
