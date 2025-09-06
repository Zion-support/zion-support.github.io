import React from 'react';

interface Test-utilsProps {
  className?: string;
}

const Test-utils: React.FC<Test-utilsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Test-utils</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Test-utils;