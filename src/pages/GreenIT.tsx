import React from 'react';

interface GreenITProps {
  className?: string;
}

const GreenIT: React.FC<GreenITProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>GreenIT</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default GreenIT;