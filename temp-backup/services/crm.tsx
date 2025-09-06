import React from 'react';

interface CrmProps {
  className?: string;
}

const Crm: React.FC<CrmProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Crm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Crm;