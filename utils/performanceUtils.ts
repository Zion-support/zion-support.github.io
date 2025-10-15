import React from 'react';

interface performanceUtilsProps {
  className?: string;
  children?: React.ReactNode;
}

const performanceUtils: React.FC<performanceUtilsProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`performanceutils ${className}`}>
      {children}
    </div>
  );
};

export default performanceUtils;