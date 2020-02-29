import AuthService from '../types/AuthService';
import User from '../types/User';

const dubugAuth: AuthService = {
  login: (email: string, password: string): User => {
    console.log('dubugAuth', 'login');
    return {
      id: `id-${password}`,
      email: email,
    };
  },
  logout: () => {
    console.log('dubugAuth', 'logout');
    return true;
  },
  register: () => {
    console.log('dubugAuth', 'register');
    return true;
  }
};

export default dubugAuth;
