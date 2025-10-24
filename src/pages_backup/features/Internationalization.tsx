import React from 'react';

interface InternationalizationProps {
  className?: string;
}

export default function Internationalization({ className }: InternationalizationProps) {
  return (
    <div className={className}>
      <h1>Internationalization</h1>
      <p>Component content</p>
    </div>
  );
}