import React from 'react';

interface TalentMarketplaceProps {
  className?: string;
  children?: React.ReactNode;
}

const TalentMarketplace: React.FC<TalentMarketplaceProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`talentmarketplace ${className}`}>
      {children}
    </div>
  );
};

export default TalentMarketplace;