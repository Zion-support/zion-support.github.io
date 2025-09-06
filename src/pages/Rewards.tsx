import React from 'react';

interface RewardsProps {
  className?: string;
}

const Rewards: React.FC<RewardsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Rewards</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Rewards;