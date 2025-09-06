import React from 'react';

interface EcommerceProps {
  className?: string;
}

const Ecommerce: React.FC<EcommerceProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Ecommerce</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Ecommerce;