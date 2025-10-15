import React from 'react';

interface seoUtilsProps {
  className?: string;
  children?: React.ReactNode;
}

const seoUtils: React.FC<seoUtilsProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`seoutils ${className}`}>
      {children}
    </div>
  );
};

export default seoUtils;