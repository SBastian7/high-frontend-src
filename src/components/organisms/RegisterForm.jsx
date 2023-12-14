'use client'
import React, { useState } from 'react';
import AuthForm from '../molecules/AuthForm';

const RegisterForm = () => {
  const [values, setValues] = useState({ username: '', password: '' });

  const handleChange = (key, e) => {
    setValues({ ...values, [key]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch action to register user with values
    // e.g., dispatch(registerUser(values));
  };

  return (
    <div className="w-full md:w-3/12 mx-2 md:mx-auto bg-white p-2 md:p-3">
      <h2 className="text-2xl font-bold mb-5 text-center title">Regístrate</h2>
      <AuthForm onSubmit={handleSubmit} onChange={handleChange} values={values} />
    </div>
  );
};

export default RegisterForm;