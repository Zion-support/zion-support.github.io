import React from 'react';
import SEO from '../components/SEO';

const Solutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Solutions - Zion Tech Group"
        description="Discover our comprehensive technology solutions designed to solve complex business challenges."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto text-white">
          <h1 className="text-5xl font-bold mb-8 text-center">Our Solutions</h1>
          <p className="text-xl text-gray-300 mb-12 text-center">
            Tailored technology solutions for every industry
          </p>
          <div className="text-center">
            <p className="text-lg text-gray-400">Solutions coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;