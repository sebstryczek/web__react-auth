import React, { FormEventHandler } from 'react';
import { User } from './User';

type authContextPropsType = {
  isAuthenticated: Boolean,
  currentUser: User | null,
  actions: {
    login: Function,
    loginSubmit: FormEventHandler,
    logout: Function,
    register: Function,
  },
}

const defaultAuthContextProps: authContextPropsType = {
  isAuthenticated: false,
  currentUser: null,
  actions: {
    login: () => { },
    loginSubmit: () => { },
    logout: () => { },
    register: () => { },
  }
}

export default React.createContext(defaultAuthContextProps);
