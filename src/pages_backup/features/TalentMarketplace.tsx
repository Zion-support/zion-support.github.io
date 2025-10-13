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
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
  </div>
  );
}
import React from 'react'
import {Helmet} from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
export default TalentmarketplacePage;
'use client'
        <title>Talentmarketplace - Zion Tech Group</title>
            <h1 className = "text-4xl font-bold text-white mb-4">Talentmarketplace</h1>
            <p className="text-gray-300 mb-8">This page is under construction.</p>;
              Learn More;
  );
};
