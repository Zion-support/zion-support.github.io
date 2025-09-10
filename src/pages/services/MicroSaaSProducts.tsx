import React from 'react';
import SEO from '../../components/SEO';

const MicroSaaSProducts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Micro SaaS Products - Zion Tech Group"
        description="Innovative micro-SaaS products designed for specific business needs and workflows."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto text-white">
          <h1 className="text-5xl font-bold mb-8 text-center">Micro SaaS Products</h1>
          <p className="text-xl text-gray-300 mb-12 text-center">
            Discover our innovative micro-SaaS solutions
          </p>
          <div className="text-center">
            <p className="text-lg text-gray-400">Service details coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaaSProducts;