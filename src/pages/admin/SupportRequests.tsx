import React from 'react';

interface SupportRequestsProps {
  className?: string;
}

const SupportRequests: React.FC<SupportRequestsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SupportRequests</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default SupportRequests;