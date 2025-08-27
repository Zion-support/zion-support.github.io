import React from 'react';
import { SEO } from '@/components/SEO';

const ComprehensiveServicesOverview = () => {
  return (
    <>
      <SEO 
        title="Comprehensive Services Overview - Zion Tech Group"
        description="Complete overview of all our comprehensive services and technology solutions."
        keywords="comprehensive services, services overview, complete solutions, technology overview"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Services Overview</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete overview of all our technology services and solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-amber-400/20">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-white mb-3">Service Catalog</h3>
              <p className="text-gray-300 mb-4">Complete catalog of all available services</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-amber-400/20">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-3">Detailed Analysis</h3>
              <p className="text-gray-300 mb-4">In-depth analysis of each service</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-amber-400/20">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-3">Performance Metrics</h3>
              <p className="text-gray-300 mb-4">Service performance and success metrics</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComprehensiveServicesOverview;