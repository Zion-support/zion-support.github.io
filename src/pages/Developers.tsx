import React from 'react';
import SEO from '../components/SEO';

const Developers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Developers - Zion Tech Group"
        description="Resources and tools for developers working with Zion Tech Group's technology solutions."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-5xl font-bold mb-8 text-center">Developers</h1>
          <div className="text-center">
            <p className="text-lg text-gray-400">Developer resources coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;