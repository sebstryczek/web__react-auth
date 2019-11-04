import * as firebase from 'firebase';
import config from '../config';
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

export default () => {
  const app = firebase.initializeApp(config.firebase);
  const auth = app.auth();

  return {
    login: (email: string, password: string) => auth.signInWithEmailAndPassword(email, password),
    logout: () => { },
    register: () => { },
  }
}
