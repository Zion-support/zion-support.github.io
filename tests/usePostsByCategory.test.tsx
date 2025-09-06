import React from 'react';

interface UsePostsByCategory.testProps {
  className?: string;
}

const UsePostsByCategory.test: React.FC<UsePostsByCategory.testProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UsePostsByCategory.test</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UsePostsByCategory.test;