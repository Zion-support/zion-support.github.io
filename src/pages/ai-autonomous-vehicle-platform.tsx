import React from 'react';

const AIAutonomousVehiclePlatform: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Autonomous Vehicle Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build and deploy autonomous vehicle solutions with our comprehensive 
            AI platform that handles everything from perception to fleet management.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Fleet Management</h3>
            <p className="text-gray-300">
              Centralized control and monitoring of autonomous vehicle fleets with 
              real-time tracking, maintenance scheduling, and performance analytics.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Scalable Infrastructure</h3>
            <p className="text-gray-300">
              Cloud-based platform that scales from single vehicles to large fleets, 
              with built-in redundancy and failover capabilities.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Integration APIs</h3>
            <p className="text-gray-300">
              Comprehensive APIs and SDKs for easy integration with existing 
              systems, third-party services, and custom applications.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Build Your Platform
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAutonomousVehiclePlatform;