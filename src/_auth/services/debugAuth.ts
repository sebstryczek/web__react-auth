import AuthService from '../types/AuthService';
import User from '../types/User';

const dubugAuth: AuthService = {
  login: async (email: string, password: string): Promise<User> => {
    console.log('dubugAuth', 'login');
    const debugUser = {
      id: `id-${password}`,
      email: email,
    };
    return new Promise(() => debugUser);
  },
  logout: async () => {
    console.log('dubugAuth', 'logout');
    return new Promise(() => true);
  },
  register: () => {
    console.log('dubugAuth', 'register');
    return true;
  }
};

export default dubugAuth;
