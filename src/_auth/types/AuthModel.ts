import AuthService from './AuthService';
import User from './User';

type AuthModel = {
  state: {
    isAuthenticated: boolean,
    currentUser: User | null,
  },
  actions: AuthService
}

export default AuthModel;
