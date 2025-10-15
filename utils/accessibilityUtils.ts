import React from 'react';

interface accessibilityUtilsProps {
  className?: string;
  children?: React.ReactNode;
}

const accessibilityUtils: React.FC<accessibilityUtilsProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`accessibilityutils ${className}`}>
      {children}
    </div>
  );
};

export default accessibilityUtils;