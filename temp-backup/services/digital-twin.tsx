import React from 'react';

interface Digital-twinProps {
  className?: string;
}

const Digital-twin: React.FC<Digital-twinProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Digital-twin</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Digital-twin;