import React from 'react';

interface errorHandlerProps {
  className?: string;
}

export default function errorHandler({ className }: errorHandlerProps) {
  return (
    <div className={className}>
      <h1>errorHandler</h1>
      <p>Component content</p>
    </div>
  );
}