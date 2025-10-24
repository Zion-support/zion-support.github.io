import React from 'react';

interface ProjectDetailsProps {
  className?: string;
}

export default function ProjectDetails({ className }: ProjectDetailsProps) {
  return (
    <div className={className}>
      <h1>ProjectDetails</h1>
      <p>Component content</p>
    </div>
  );
}