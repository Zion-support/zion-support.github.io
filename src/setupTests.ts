import React from 'react';

interface setupTestsProps {
  className?: string;
  children?: React.ReactNode;
}

const setupTests: React.FC<setupTestsProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`setuptests ${className}`}>
      {children}
    </div>
  );
};

export default setupTests;