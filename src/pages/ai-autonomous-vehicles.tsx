import React from 'react';

const AIAutonomousVehicles: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Autonomous Vehicles
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our complete range of AI-powered autonomous vehicles designed 
            for various applications from personal transport to commercial logistics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Personal Transport</h3>
            <p className="text-gray-300">
              Luxury autonomous vehicles for personal use with advanced safety features, 
              comfort amenities, and intelligent route optimization.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Commercial Fleet</h3>
            <p className="text-gray-300">
              Autonomous delivery vehicles, taxis, and shuttles optimized for 
              efficiency, reliability, and cost-effective operations.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Specialized Applications</h3>
            <p className="text-gray-300">
              Custom autonomous solutions for mining, agriculture, construction, 
              and other specialized industry requirements.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Explore Our Vehicles
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAutonomousVehicles;