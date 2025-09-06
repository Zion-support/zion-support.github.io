import React from 'react';

interface Onsite-supportProps {
  className?: string;
}

const Onsite-support: React.FC<Onsite-supportProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Onsite-support</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Onsite-support;