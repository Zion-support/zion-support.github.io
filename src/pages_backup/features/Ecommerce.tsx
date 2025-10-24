import React from 'react';

interface EcommerceProps {
  className?: string;
}

export default function Ecommerce({ className }: EcommerceProps) {
  return (
    <div className={className}>
      <h1>Ecommerce</h1>
      <p>Component content</p>
    </div>
  );
}