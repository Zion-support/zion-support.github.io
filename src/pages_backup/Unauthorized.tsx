import React from 'react';

interface UnauthorizedProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Unauthorized({ className = '', children }: UnauthorizedProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}