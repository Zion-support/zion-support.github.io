import React from 'react';
import SEO from '../components/SEO';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for our AI-powered technology solutions and services."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto text-white">
          <h1 className="text-5xl font-bold mb-8 text-center">Pricing</h1>
          <p className="text-xl text-gray-300 mb-12 text-center">
            Flexible pricing plans for every business size
          </p>
          <div className="text-center">
            <p className="text-lg text-gray-400">Pricing information coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;