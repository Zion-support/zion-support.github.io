import React from 'react';
import { SEO } from '@/components/SEO';

const Aifinancialtradingplatform: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Aifinancialtradingplatform - Zion Tech Group"
        description="Professional Aifinancialtradingplatform services by Zion Tech Group"
        keywords="aifinancialtradingplatform, technology, services"
      />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Aifinancialtradingplatform</h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional Aifinancialtradingplatform services to help your business grow.
          </p>
          <div className="flex justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aifinancialtradingplatform;