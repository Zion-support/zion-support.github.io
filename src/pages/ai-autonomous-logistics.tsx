import React from 'react';

const AIAutonomousLogistics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Autonomous Logistics
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform supply chain operations with AI-powered autonomous logistics 
            that optimize routes, predict demand, and manage inventory intelligently.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Route Optimization</h3>
            <p className="text-gray-300">
              AI-driven route planning that considers traffic, weather, fuel costs, 
              and delivery windows to minimize time and maximize efficiency.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Demand Forecasting</h3>
            <p className="text-gray-300">
              Predictive analytics that forecast demand patterns, enabling proactive 
              inventory management and resource allocation.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Real-time Tracking</h3>
            <p className="text-gray-300">
              Comprehensive visibility into shipment status with predictive ETA 
              updates and automatic issue resolution.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Optimize Your Logistics
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAutonomousLogistics;