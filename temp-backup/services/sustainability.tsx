import React from 'react';

interface SustainabilityProps {
  className?: string;
}

const Sustainability: React.FC<SustainabilityProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Sustainability</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Sustainability;