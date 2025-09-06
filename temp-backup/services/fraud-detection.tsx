import React from 'react';

interface Fraud-detectionProps {
  className?: string;
}

const Fraud-detection: React.FC<Fraud-detectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Fraud-detection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Fraud-detection;