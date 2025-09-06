import React from 'react';

interface Mlops-platformProps {
  className?: string;
}

const Mlops-platform: React.FC<Mlops-platformProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Mlops-platform</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Mlops-platform;