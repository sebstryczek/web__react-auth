import React from 'react';
import AuthConsumer from '../../auth/AuthConsumer';

type LogoutProps = {
}

const Logout = () => (
  <AuthConsumer>
    {({ isAuthenticated, currentUser, actions }) => {
      actions.logout();
      return null;
    }}
  </AuthConsumer>
);

export default Logout;
