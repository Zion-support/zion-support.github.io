import React from 'react';

interface HelpdeskProps {
  className?: string;
}

const Helpdesk: React.FC<HelpdeskProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Helpdesk</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Helpdesk;