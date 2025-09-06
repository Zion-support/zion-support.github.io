import React from 'react';

interface GlobalMapProps {
  className?: string;
}

const GlobalMap: React.FC<GlobalMapProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>GlobalMap</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default GlobalMap;