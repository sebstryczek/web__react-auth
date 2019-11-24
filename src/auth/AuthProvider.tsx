import React, { FormEvent } from 'react';
import AuthContext from './AuthContext';
import { User } from './User';

export type AuthProviderActions = {
  login: (email: string, password: string) => Promise<User>,
  logout: Function,
  register: Function,
};

type AuthProviderProps = {
  auth: AuthProviderActions,
};

class AuthProvider extends React.Component<AuthProviderProps> {
  state = {
    currentUser: null,
    isAuthenticated: false,
    isBusy: false,
    hasError: false,
    errorMessage: '',
  }

  componentDidMount() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.setState({ isAuthenticated: true, isBusy: false, user });
    }
  }

  login = async (email: string, password: string) => {
    this.setState({ isBusy: true });
    try {
      const user : User = await this.props.auth.login(email, password)
      this.setState({ isAuthenticated: true, isBusy: false, user });
      localStorage.setItem('currentUser', JSON.stringify(user));
    } catch (error) {
      console.log(error.code, error.message);
      this.setState({ isAuthenticated: false, isBusy: false, hasError: true, errorMessage: error.message });
    }
  }

  loginSubmit = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { target } : any = event;
    const email = target.email.value
    const password = target.password.value
    this.login(email, password);
  }

  get actions() {
    return {
      login: this.login,
      loginSubmit: this.loginSubmit,
      logout: () => {console.log('logout')},
      register: () => {console.log('register')},
    }
  }

  render() {
    const { children } = this.props;
    const { state, actions } = this;
    const { isAuthenticated, currentUser } = state;
    return (
        <AuthContext.Provider value={{isAuthenticated, currentUser, actions}}>
          {
            JSON.stringify(isAuthenticated)
          }
          {children}
        </AuthContext.Provider>
    );
  }
}

export default AuthProvider;
