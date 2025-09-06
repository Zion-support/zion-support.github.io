import React from 'react';

interface ButtonProps {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Button</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Button;