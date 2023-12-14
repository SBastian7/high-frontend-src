import React from 'react';
import RegisterForm from '../organisms/RegisterForm';
import './RegisterTemplate.css';

const RegisterTemplate = () => {
  return (
    <div className="min-h-screen flex items-center justify-center register-bg">
      <RegisterForm />
    </div>
  );
};

export default RegisterTemplate;