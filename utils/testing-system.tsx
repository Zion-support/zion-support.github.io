import React from 'react';

interface Testing-systemProps {
  className?: string;
}

const Testing-system: React.FC<Testing-systemProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Testing-system</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Testing-system;