import React from 'react';

interface Next-link-shimProps {
  className?: string;
}

const Next-link-shim: React.FC<Next-link-shimProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Next-link-shim</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Next-link-shim;