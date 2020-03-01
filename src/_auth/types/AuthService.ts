import User from './User';

type AuthService = {
  login: (email: string, password: string) => Promise<User>,
  logout: () => Promise<boolean>,
  register: (email: string, password: string) => boolean,
};

export default AuthService;
