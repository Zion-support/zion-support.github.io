import React from 'react';
import { SEO } from '../components/SEO';

const Documentation = () => {
    return (
      <>
        <SEO 
          title="Documentation - Zion Tech Group"
          description="Access comprehensive documentation for Zion Tech Group services, APIs, and tools."
          canonical="/docs"
          url="https://ziontechgroup.com/docs"
        />
        
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">Documentation</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive documentation for our services, APIs, and development tools.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <p className="text-gray-300 text-center">
                Documentation coming soon. We're building comprehensive guides and references for all our revolutionary 2030 services.
              </p>
            </div>
          </div>
        </div>
      </>
    );
};

export default Documentation;
