import React from 'react';

interface InternationalizationProps {
  className?: string;
  children?: React.ReactNode;
}

const Internationalization: React.FC<InternationalizationProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`internationalization ${className}`}>
      {children}
    </div>
  );
};

export default Internationalization;