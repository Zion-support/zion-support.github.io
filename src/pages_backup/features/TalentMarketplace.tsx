import React from 'react';

interface TalentMarketplaceProps {
  className?: string;
  children?: React.ReactNode;
}

export const TalentMarketplace: React.FC<TalentMarketplaceProps> = ({ className = '', children }) => {
  return (
    <div className={`talentmarketplace ${className}`}>
      {children}
    </div>
  );
};

export default TalentMarketplace;