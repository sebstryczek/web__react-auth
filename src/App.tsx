import React from 'react';
import Home from './pages/home/Home';
import Things from './pages/things/Things';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import useAuth from './auth/useAuth';

const App: React.FC = () => {
  const {} = useAuth;
  return (
    <div className="App">
      <h1>
        App
      </h1>
      <Home />
      <Things />
      <Login />
      <Register />
    </div>
  );
}

export default App;
