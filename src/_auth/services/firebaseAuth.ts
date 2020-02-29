import AuthService from '../types/AuthService';
import User from '../types/User';

const firebaseAuth: AuthService = {
  login: (email: string, password: string) => {
    console.log('firebaseAuth', 'login');
    const user: User = {id: '', email: ''};
    return user;
  },
  logout: () => {
    console.log('firebaseAuth', 'logout');
    return true;
  },
  register: (email: string, password: string) => {
    console.log('firebaseAuth', 'register');
    return true;
  },
};

export default firebaseAuth;

