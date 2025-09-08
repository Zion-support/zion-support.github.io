import React from 'react';

const AIAutonomousScientificResearcher: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Autonomous Scientific Researcher
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Accelerate scientific discovery with AI-powered autonomous researchers 
            that design experiments, analyze data, and generate breakthrough insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Experimental Design</h3>
            <p className="text-gray-300">
              AI-driven experimental design that optimizes research parameters, 
              sample sizes, and methodologies for maximum scientific impact.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Data Analysis</h3>
            <p className="text-gray-300">
              Advanced statistical analysis and pattern recognition that identifies 
              correlations and insights humans might miss in complex datasets.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Literature Review</h3>
            <p className="text-gray-300">
              Comprehensive analysis of existing research to identify gaps, 
              opportunities, and potential collaborations across disciplines.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Accelerate Research
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAutonomousScientificResearcher;