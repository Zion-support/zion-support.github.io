import React from 'react';

interface SearchProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Search({ className = '', children }: SearchProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}