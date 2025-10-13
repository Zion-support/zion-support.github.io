import React from 'react';

interface EcommerceProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Ecommerce({ className = '', children }: EcommerceProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}