import React from 'react';

const AIAutonomousVehiclesPlatform: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Autonomous Vehicles Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive platform for developing, deploying, and managing autonomous 
            vehicle ecosystems with advanced AI capabilities and scalability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Development Tools</h3>
            <p className="text-gray-300">
              Complete SDK and development environment for building autonomous 
              vehicle applications with simulation, testing, and deployment tools.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Fleet Orchestration</h3>
            <p className="text-gray-300">
              Intelligent fleet management with dynamic routing, load balancing, 
              and predictive maintenance across all vehicle types.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Data Analytics</h3>
            <p className="text-gray-300">
              Comprehensive analytics dashboard providing insights into fleet performance, 
              efficiency metrics, and optimization opportunities.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Launch Platform
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAutonomousVehiclesPlatform;