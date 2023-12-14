import React from 'react';

const Button = ({ onClick, label, className }) => {
  return (
    <button onClick={onClick} className={`bg-dark text-white px-4 py-2 font-semibold ${className}`}>
      {label}
    </button>
  );
};

export default Button;
