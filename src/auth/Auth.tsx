import React from 'react';

type AuthActionsType = {
  login: Function,
  logout: Function,
  register: Function,
}

type authContextPropsType = {
  isAuthenticated: Boolean,
  currentUser: String | null,
  actions: AuthActionsType,
}

const defaultAuthContextProps : authContextPropsType = {
    isAuthenticated: false,
    currentUser: null,
    actions: {
      login: () => {},
      logout: () => {},
      register: () => {},
    }
  }

const Context = React.createContext(defaultAuthContextProps);

export const AuthConsumer = Context.Consumer;

type AuthProviderPropsType = {
  auth: AuthActionsType,
}

export class AuthProvider extends React.Component<AuthProviderPropsType> {
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

  get actions() {
    return {
      login: (email: string, password: string) => {
        this.setState({ isBusy: true });
        this.props.auth.login(email, password)
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
