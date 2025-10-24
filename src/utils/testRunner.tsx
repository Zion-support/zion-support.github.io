import React from 'react';

interface TestRunnerProps {
  className?: string;
  children?: React.ReactNode;
}

export const TestRunner: React.FC<TestRunnerProps> = ({ className = '', children }) => {
  return (
    <div className={`testrunner ${className}`}>
      {children}
    </div>
  );
};

export default TestRunner;