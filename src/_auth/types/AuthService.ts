import User from './User';

type AuthService = {
  login: (email: string, password: string) => User,
  logout: () => boolean,
  register: (email: string, password: string) => boolean,
};

export default AuthService;
