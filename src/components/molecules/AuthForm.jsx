import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const AuthForm = ({ onSubmit, onChange, values }) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col space-y-2">
      <Input type="text" placeholder="Username" value={values.username} onChange={(e) => onChange('username', e)} />
      <Input type="password" placeholder="Password" value={values.password} onChange={(e) => onChange('password', e)} />
      <br/>
      <Button label="Submit" onClick={onSubmit} className="mt-5 w-6/12 mx-auto" />
    </form>
  );
};

export default AuthForm;