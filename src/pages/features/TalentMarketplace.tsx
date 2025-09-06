import React from 'react';

interface TalentMarketplaceProps {
  className?: string;
}

const TalentMarketplace: React.FC<TalentMarketplaceProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentMarketplace</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentMarketplace;