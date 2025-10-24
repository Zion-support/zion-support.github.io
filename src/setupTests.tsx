import React from 'react';

interface SetupTestsProps {
  className?: string;
  children?: React.ReactNode;
}

export const SetupTests: React.FC<SetupTestsProps> = ({ className = '', children }) => {
  return (
    <div className={`setuptests ${className}`}>
      {children}
    </div>
  );
};

export default SetupTests;