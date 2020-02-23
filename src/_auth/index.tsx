import React, { FormEventHandler } from 'react';
import User from './types/User';
import AuthModel from './types/AuthModel';
const defaultValue: AuthModel = {
  isAuthenticated: false,
  currentUser: null,
  actions: {
    login: (username, password) => ({ email: '', id: '-1', }),
    logout: () => true,
    register: (username, password) => true,
  }
}

export default React.createContext(defaultValue);
