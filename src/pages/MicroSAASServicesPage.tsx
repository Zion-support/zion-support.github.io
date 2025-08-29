import React from 'react';
import SEO from '@/components/SEO';

const MicroSAASServicesPage = () => {
  return (
    <>
      <SEO 
        title="Micro SAAS Services - Zion Tech Group"
        description="Specialized micro SAAS solutions for niche business needs and targeted industry solutions."
        keywords="micro SAAS, specialized solutions, niche services, business software"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Micro <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">SAAS Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized software solutions for specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-indigo-400/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">Targeted Solutions</h3>
              <p className="text-gray-300 mb-4">Focused solutions for specific industry needs</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-indigo-400/20">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Custom Development</h3>
              <p className="text-gray-300 mb-4">Tailored software development services</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-indigo-400/20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Rapid Deployment</h3>
              <p className="text-gray-300 mb-4">Quick implementation and deployment</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSAASServicesPage;