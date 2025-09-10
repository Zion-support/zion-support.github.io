import React from 'react';
import SEO from '../../components/SEO';

const ITInfrastructure: React.FC = () => {
  return (
    <>
      <SEO 
        title="IT Infrastructure Services - Zion Tech Group"
        description="Build a robust and scalable IT infrastructure with our expert solutions and management services."
        keywords="it infrastructure, server management, network design, data centers, infrastructure security"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                IT Infrastructure Services
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Build a solid foundation for your business with enterprise-grade IT infrastructure. 
                Our comprehensive services ensure reliability, scalability, and security.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our IT infrastructure services are currently under development. These services will include:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Network design and implementation
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Server management and administration
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Storage solutions and data management
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Security infrastructure implementation
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Cloud infrastructure migration
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  24/7 monitoring and support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITInfrastructure;