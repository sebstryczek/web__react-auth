import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

type PrivateRouteProps = {
  redirectPath: string,
} & RouteProps;

const PrivateRoute = ({ redirectPath, children, ...rest }: PrivateRouteProps) => {
  const auth = useAuth();
  const isAuthenticated = auth.state.isAuthenticated;
  return (
    <Route {...rest}
      render={
        ({ location }) => isAuthenticated
          ? children
          : <Redirect to={{ pathname: redirectPath, state: { source: location } }} />
      }
    />
  );
}

export default PrivateRoute;
