import React from 'react';

interface Services-catalogProps {
  className?: string;
}

const Services-catalog: React.FC<Services-catalogProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Services-catalog</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Services-catalog;