import React from 'react';

interface Theme-toggleProps {
  className?: string;
}

const Theme-toggle: React.FC<Theme-toggleProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Theme-toggle</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Theme-toggle;