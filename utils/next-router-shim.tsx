import React from 'react';

interface Next-router-shimProps {
  className?: string;
}

const Next-router-shim: React.FC<Next-router-shimProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Next-router-shim</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Next-router-shim;