import React from 'react';

export interface ILoginProps {
}

const Register: React.FC = (props: ILoginProps) => {
  return (
    <div className="">
      <h2>
        Register
      </h2>
      <form>
        <input type='text' name='email' placeholder='email' />
        <input type='text' name='password' placeholder='password' />
      </form>
    </div>
  );
}

export default Register;
