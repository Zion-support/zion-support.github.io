import React from 'react';

interface TalentMarketplaceProps {
  className?: string;
}

export default function TalentMarketplace({ className }: TalentMarketplaceProps) {
  return (
    <div className={className}>
      <h1>TalentMarketplace</h1>
      <p>Component content</p>
    </div>
  );
}