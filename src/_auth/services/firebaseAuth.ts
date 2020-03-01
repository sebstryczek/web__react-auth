import firebase from 'firebase';
import config from '../../config';
import AuthService from '../types/AuthService';
import User from '../types/User';

const app = firebase.initializeApp(config.firebase);
const auth = app.auth();
console.log('auth created');

const firebaseAuth: AuthService = {
  login: async (email: string, password: string): Promise<User> => {
    console.log('firebaseAuth', 'login');
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    if (!user) {
      throw Error('No user data returned');
    }
    if (!user.email) {
      throw Error('No user email returned');
    }
    return {
      id: user.uid,
      email:  user.email,
    }
  },
  logout: async (): Promise<boolean> => {
    console.log('firebaseAuth', 'logout');
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
    return true;
  },
  register: (email: string, password: string) => {
    console.log('firebaseAuth', 'register');
    return true;
  },
};

export default firebaseAuth;

