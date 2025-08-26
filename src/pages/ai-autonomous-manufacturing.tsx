import React from 'react';

const AIAutonomousManufacturing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Autonomous Manufacturing
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionize production with AI-powered autonomous manufacturing systems 
            that optimize processes, predict maintenance, and ensure quality control.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Predictive Maintenance</h3>
            <p className="text-gray-300">
              AI-driven equipment monitoring that predicts failures before they occur, 
              minimizing downtime and optimizing maintenance schedules.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Quality Assurance</h3>
            <p className="text-gray-300">
              Automated quality control using computer vision and AI to detect defects 
              in real-time, ensuring consistent product quality.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Process Optimization</h3>
            <p className="text-gray-300">
              Continuous optimization of manufacturing parameters for maximum efficiency, 
              reduced waste, and improved productivity.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Transform Manufacturing
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAutonomousManufacturing;