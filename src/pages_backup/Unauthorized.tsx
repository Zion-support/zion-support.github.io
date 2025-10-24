import React from 'react';

interface UnauthorizedProps {
  className?: string;
}

export default function Unauthorized({ className }: UnauthorizedProps) {
  return (
    <div className={className}>
      <h1>Unauthorized</h1>
      <p>Component content</p>
    </div>
  );
}