import React from 'react';

interface EcommerceProps {
  className?: string;
  children?: React.ReactNode;
}

export const Ecommerce: React.FC<EcommerceProps> = ({ className = '', children }) => {
  return (
    <div className={`ecommerce ${className}`}>
      {children}
    </div>
  );
};

export default Ecommerce;