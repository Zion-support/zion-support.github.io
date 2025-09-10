import React from 'react';
import SEO from '../../components/SEO';

const DigitalTwin: React.FC = () => {
  return (
    <>
      <SEO 
        title="Digital Twin Services - Zion Tech Group"
        description="Revolutionary digital twin technology for real-time monitoring, simulation, and optimization of physical systems."
        keywords="digital twin, simulation, monitoring, optimization, iot, real-time analytics"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Digital Twin Services
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Create digital replicas of your physical systems for real-time monitoring, 
                simulation, and optimization with our advanced digital twin technology.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Coming Soon</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our digital twin services are currently under development. This service will provide:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Real-time system monitoring
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Predictive maintenance capabilities
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Simulation and scenario testing
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Performance optimization
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  IoT integration and data collection
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  Advanced analytics and reporting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalTwin;