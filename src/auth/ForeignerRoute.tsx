import React from 'react';
import { Link, Router, Route, Switch, Redirect } from 'react-router-dom';

const ForeignersRoute = ({ children, isAuthenticated, redirectPath, ...rest }: any) => {
  return (
    <Route {...rest}
      render={
        ({ location }) => !isAuthenticated
          ? children
          : <Redirect to={{ pathname: redirectPath, state: { from: location } }} />
      }
    />
  );
}
export default ForeignersRoute;
