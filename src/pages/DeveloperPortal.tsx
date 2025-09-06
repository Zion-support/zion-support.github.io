import React from 'react';

interface DeveloperPortalProps {
  className?: string;
}

const DeveloperPortal: React.FC<DeveloperPortalProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>DeveloperPortal</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default DeveloperPortal;