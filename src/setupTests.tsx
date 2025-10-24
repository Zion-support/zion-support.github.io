import React from 'react';

interface setupTestsProps {
  className?: string;
}

export default function setupTests({ className }: setupTestsProps) {
  return (
    <div className={className}>
      <h1>setupTests</h1>
      <p>Component content</p>
    </div>
  );
}