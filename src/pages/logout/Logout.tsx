import React, { useEffect } from 'react';

import { Page } from '..';
import _useAuth from '../../_auth/hooks/useAuth';
import _useHistory from '../../_auth/hooks/useHistory';

const Logout = ({
  useHistory = _useHistory,
  useAuth = _useAuth,
}: Page) => {
  const history = useHistory();
  const redirectPath = history.location.state.source.pathname;

  const auth = useAuth();
  const { logout } = auth.actions;

  useEffect(() => {
    const executeLogout = async () => {
      await logout();
      history.push(redirectPath);
    };
    executeLogout();
  }, [logout, history, redirectPath]);

  return <span></span>;
};

export default Logout;
