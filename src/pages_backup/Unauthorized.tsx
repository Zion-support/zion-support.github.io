import React from 'react';

interface UnauthorizedProps {
  className?: string;
  children?: React.ReactNode;
}

const Unauthorized: React.FC<UnauthorizedProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`unauthorized ${className}`}>
      {children}
    </div>
  );
};

export default Unauthorized;