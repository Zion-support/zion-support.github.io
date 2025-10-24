import React from 'react';

interface testRunnerProps {
  className?: string;
}

export default function testRunner({ className }: testRunnerProps) {
  return (
    <div className={className}>
      <h1>testRunner</h1>
      <p>Component content</p>
    </div>
  );
}