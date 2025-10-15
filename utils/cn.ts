import React from 'react';

interface cnProps {
  className?: string;
  children?: React.ReactNode;
}

const cn: React.FC<cnProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`cn ${className}`}>
      {children}
    </div>
  );
};

export default cn;