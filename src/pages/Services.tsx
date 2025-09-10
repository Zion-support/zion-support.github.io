import React from 'react';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Services - Zion Tech Group"
        description="Explore our comprehensive range of technology services and solutions."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions to drive your business forward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;