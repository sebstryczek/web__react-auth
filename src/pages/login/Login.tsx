import React, { FormEvent } from 'react';
import AuthConsumer from '../../auth/AuthConsumer';

export interface ILoginProps {
  login: (email: string, password: string) => void,
}

class Login extends React.Component<ILoginProps> {
  submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { target } : any = event;
    const email = target.email.value
    const password = target.password.value
    const { login } = this.props;
    login(email, password);
  }

  render() {
    return (
      <div>
        <h2>
          Login
        </h2>
        <form onSubmit={this.submit}>
          <input type='text' name='email' placeholder='email' />
          <input type='text' name='password' placeholder='password' />
          <button type='submit'>LOGIN</button>
        </form>
      </div>
    );
  }
}


// const Login: React.FC = (props: ILoginProps) => {
//   return (
//     <div className="">
//       <h2>
//         Login
//       </h2>
//       <AuthConsumer>
//         {({ isAuthenticated, currentUser, actions }) => {
//           return (
//             <form onSubmit={actions.loginSubmit}>
//               <input type='text' name='email' placeholder='email' />
//               <input type='text' name='password' placeholder='password' />
//               <button type='submit'>LOGIN</button>
//             </form>
//           );
//         }}
//       </AuthConsumer>
//     </div>
//   );
// }

export default Login;
