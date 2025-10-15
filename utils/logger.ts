import React from 'react';

interface loggerProps {
  className?: string;
  children?: React.ReactNode;
}

const logger: React.FC<loggerProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`logger ${className}`}>
      {children}
    </div>
  );
};

export default logger;