import React from 'react';

interface TalentMarketplaceProps {
  className?: string;
  children?: React.ReactNode;
}

export default function TalentMarketplace({ className = '', children }: TalentMarketplaceProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}