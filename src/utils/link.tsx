import React from 'react';

interface LinkProps {
  className?: string;
  children?: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ className = '', children }) => {
  return (
    <div className={`link ${className}`}>
      {children}
    </div>
  );
};

export default Link;