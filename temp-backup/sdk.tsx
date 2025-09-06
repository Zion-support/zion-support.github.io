import React from 'react';

interface SdkProps {
  className?: string;
}

const Sdk: React.FC<SdkProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Sdk</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Sdk;