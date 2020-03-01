import React from 'react';
import useAuth from '../hooks/useAuth';

const AuthActionsDebugger = () => {
  const auth = useAuth();
  const onClickLogin = () => {
    auth.actions.login('', '');
  };
  const onClickLogout = () => {
    auth.actions.logout();
  };
  const onClickRegister = () => {
    auth.actions.register('', '');
  };
  return (
    <div>
      <button onClick={onClickLogin}>Login</button>
      <button onClick={onClickLogout}>Logout</button>
      <button onClick={onClickRegister}>Register</button>
    </div>
  )
};

export default AuthActionsDebugger;
