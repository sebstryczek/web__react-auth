import React from 'react';
import AuthConsumer from '../../auth/AuthConsumer';

export interface ILoginProps {
}

const Login: React.FC = (props: ILoginProps) => {
  return (
    <div className="">
      <h2>
        Login
      </h2>
      <AuthConsumer>
        {({ isAuthenticated, currentUser, actions }) => {
          return (
            <form onSubmit={actions.loginSubmit}>
              <input type='text' name='email' placeholder='email' />
              <input type='text' name='password' placeholder='password' />
              <button type='submit'>LOGIN</button>
            </form>
          );
        }}
      </AuthConsumer>
    </div>
  );
}

export default Login;
