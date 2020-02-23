import User from "./User";

type AuthService = {
  login: (username: string, password: string) => User,
  logout: () => boolean,
  register: (username: string, password: string) => boolean,
};

export default AuthService;
