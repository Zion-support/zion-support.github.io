import React from 'react';

interface SearchProps {
  className?: string;
}

export default function Search({ className }: SearchProps) {
  return (
    <div className={className}>
      <h1>Search</h1>
      <p>Component content</p>
    </div>
  );
}