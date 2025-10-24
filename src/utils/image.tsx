'use client';
import React from 'react';

interface ImageProps {
  className?: string;
}

const Image: React.FC<ImageProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Image</h2>
      <p>This component is being rebuilt.</p>
    </div>
  );
};

export default Image;
