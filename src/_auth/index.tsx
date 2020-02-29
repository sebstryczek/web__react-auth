import React, { FormEventHandler, useContext } from 'react';
import User from './types/User';
import AuthModel from './types/AuthModel';
import AuthService from './types/AuthService';
const defaultValue: AuthModel = {
  state: {
    isAuthenticated: false,
    currentUser: null,
  },
  actions: {
    login: (username, password) => ({ email: '', id: '-1', }),
    logout: () => true,
    register: (username, password) => true,
  }
}

const AuthContext = React.createContext(defaultValue);
const AuthConsumer = AuthContext.Consumer;

export const useAuth = () => useContext(AuthContext);

type AuthProviderProps = {
  authService: AuthService,
};

// const AuthProvider = AuthContext.Provider;
export class AuthProvider extends React.Component<AuthProviderProps> {
  state = {
    isAuthenticated: false,
    currentUser: null,
    isBusy: false,
    hasError: false,
    errorMessage: '',
  }

  componentDidMount() {
  }

  login = (email: string, password: string) => {
    const user = this.props.authService.login(email, password);
    this.setState({
      isAuthenticated: true,
      currentUser: user,
    });
    return user;
  }

  logout = () => {
    const isLogoutSucceed = this.props.authService.logout();
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
