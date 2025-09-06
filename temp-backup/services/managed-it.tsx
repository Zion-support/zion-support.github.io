import React from 'react';

interface Managed-itProps {
  className?: string;
}

const Managed-it: React.FC<Managed-itProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Managed-it</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Managed-it;