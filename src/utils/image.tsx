import React from 'react';

interface ImageProps {
  className?: string;
  children?: React.ReactNode;
}

export const Image: React.FC<ImageProps> = ({ className = '', children }) => {
  return (
    <div className={`image ${className}`}>
      {children}
    </div>
  );
};

export default Image;