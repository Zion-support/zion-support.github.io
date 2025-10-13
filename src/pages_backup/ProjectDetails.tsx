import React from 'react';

interface ProjectDetailsProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ProjectDetails({ className = '', children }: ProjectDetailsProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}