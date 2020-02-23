import AuthService from "./AuthService";
import User from "./User";

type AuthModel = {
  isAuthenticated: Boolean,
  currentUser: User | null,
  actions: AuthService
}

export default AuthModel;
