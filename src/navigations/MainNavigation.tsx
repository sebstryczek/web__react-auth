import React from 'react';
import { Link } from 'react-router-dom';
import { AuthConsumer } from '../auth/Auth';

const MainNavigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/things">Things</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>

    <AuthConsumer>
      {
        ({ isAuthenticated, currentUser, actions }: any) => (
          <div>
            {
              JSON.stringify(isAuthenticated)
            }
            {
              JSON.stringify(currentUser)
            }
            <button onClick={e => {
              actions.login('aaa@aa.aa', 'aaa123')
            }}>login</button>
            <button onClick={actions.logout}>logout</button>
            <button onClick={actions.register}>register</button>
          </div>
        )
      }
    </AuthConsumer>
  </nav>
);

export default MainNavigation;
