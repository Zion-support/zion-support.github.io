import React from 'react';

interface ReferralsProps {
  className?: string;
}

const Referrals: React.FC<ReferralsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Referrals</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Referrals;