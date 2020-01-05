import * as firebase from 'firebase';
import config from '../config';
import { AuthProviderActions } from './AuthProvider';
import { User } from './User';
// class Firebase {
//     auth: any
//     constructor() {
//       const app = ;
//       this.auth = firebase.app().auth();
//       console.log(this.auth)
//       if (firebase.apps.length) {
//       }
//     }

//     doCreateUserWithEmailAndPassword = (email: string, password: string) =>
//       this.auth.createUserWithEmailAndPassword(email, password);

//     login = (email: string, password: string) =>
//       this.auth.signInWithEmailAndPassword(email, password);

//     doSignOut = () => this.auth.signOut();

//     doPasswordReset = (email: string) => this.auth.sendPasswordResetEmail(email);

//     doPasswordUpdate = (password: string) => this.auth.currentUser ? this.auth.currentUser.updatePassword(password) : null;
//   }

const createAuthFirebase = () : AuthProviderActions => {
  const app = firebase.initializeApp(config.firebase);
  const auth = app.auth();
  return {
    login: async (email: string, password: string) : Promise<User> => {
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
    logout: async () => {
      await auth.signOut();
    },
    register: () => { },
  };
};

export default createAuthFirebase;
