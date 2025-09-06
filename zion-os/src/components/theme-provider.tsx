import React from 'react';

interface Theme-providerProps {
  className?: string;
}

const Theme-provider: React.FC<Theme-providerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Theme-provider</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Theme-provider;