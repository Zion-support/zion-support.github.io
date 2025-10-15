import React from 'react';

interface website-link-analyzerProps {
  className?: string;
  children?: React.ReactNode;
}

const website-link-analyzer: React.FC<website-link-analyzerProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`website-link-analyzer ${className}`}>
      {children}
    </div>
  );
};

export default website-link-analyzer;