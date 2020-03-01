import React, { FormEvent } from 'react';

import { Page } from '..';
import _useHistory from '../../_auth/hooks/useHistory';
import _useAuth from '../../_auth/hooks/useAuth';

const Login = ({
  useHistory = _useHistory,
  useAuth = _useAuth,
}: Page) => {
  const history = useHistory();
  const redirectPath = history.location.state.source.pathname;

  const auth = useAuth();
  const { isAuthenticated } = auth.state;
  const { login } = auth.actions;

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { target }: any = event;
    const email = target.email.value
    const password = target.password.value
    login(email, password);
  }

  if (isAuthenticated) {
    history.push(redirectPath);
  }

  return (
    <div>
      <h2>
        Login
      </h2>

      <form onSubmit={submit}>
        <input type='text' name='email' placeholder='email' />
        <input type='text' name='password' placeholder='password' />
        <button type='submit'>LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
