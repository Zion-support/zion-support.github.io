import React from 'react';
import { SEO } from '@/components/SEO';

const ITServicesPage = () => {
  return (
    <>
      <SEO
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including infrastructure, support, and technology consulting solutions."
        keywords="IT services, infrastructure, support, technology consulting, IT solutions"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              IT <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive information technology solutions for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-teal-400/20">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Infrastructure</h3>
              <p className="text-gray-300 mb-4">Robust IT infrastructure and network solutions</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-teal-400/20">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Support</h3>
              <p className="text-gray-300 mb-4">24/7 technical support and maintenance</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-teal-400/20">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Consulting</h3>
              <p className="text-gray-300 mb-4">Strategic technology consulting services</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITServicesPage;