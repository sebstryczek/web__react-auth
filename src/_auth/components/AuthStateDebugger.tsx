import React from 'react';
import useAuth from '../hooks/useAuth';

const AuthStateDebugger = () => {
  const auth = useAuth();
  return (
    <div>
      <p style={{background: 'red'}}>
        {
          JSON.stringify(
            auth.state.isAuthenticated
          )
        }
      </p>
      <p style={{background: 'blue'}}>
        {
          JSON.stringify(
            auth.state.currentUser
          )
        }
      </p>
    </div>
  );
};

export default AuthStateDebugger;
