import React from 'react';

interface InternationalizationProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Internationalization({ className = '', children }: InternationalizationProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}