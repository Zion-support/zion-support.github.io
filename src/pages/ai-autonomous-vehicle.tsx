import React from 'react';

const AIAutonomousVehicle: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Autonomous Vehicle
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of transportation with AI-powered autonomous vehicles 
            that navigate safely, efficiently, and intelligently through any environment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Advanced Perception</h3>
            <p className="text-gray-300">
              Multi-sensor fusion technology that provides 360-degree awareness 
              of the vehicle's environment in all weather conditions.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Predictive Navigation</h3>
            <p className="text-gray-300">
              AI-driven route planning that anticipates traffic patterns, road conditions, 
              and potential hazards for optimal travel efficiency.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Safety First</h3>
            <p className="text-gray-300">
              Redundant safety systems with fail-safe mechanisms that ensure passenger 
              safety in all driving scenarios and emergency situations.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Experience Autonomous Driving
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAutonomousVehicle;