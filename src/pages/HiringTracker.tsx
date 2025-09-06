import React from 'react';

interface HiringTrackerProps {
  className?: string;
}

const HiringTracker: React.FC<HiringTrackerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HiringTracker</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HiringTracker;