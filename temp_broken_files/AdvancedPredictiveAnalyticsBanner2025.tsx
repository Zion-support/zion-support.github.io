import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AdvancedPredictiveAnalyticsBanner2025 = () => {
  return (
    <div className="bg-gradient-to-r from-violet-900 via-purple-900 to-indigo-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Advanced Predictive Analytics 2025
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-purple-100">
            Harness the power of advanced predictive analytics to forecast market trendsoptimize operationsand make data-driven decisions with 99.7% accuracy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-violet-400">99.7% Accuracy</h3>
            <p className="text-purple-100">Unprecedented accuracy in predictive models and forecasting</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-violet-400">Real-time Insights</h3>
            <p className="text-purple-100">Instant analysis and recommendations for optimal decision-making</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-violet-400">Proven Results</h3>
            <p className="text-purple-100">2,000% ROI and $5.2B+ in savings across all implementations</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/ai-2025-2026-ultimate-breakthrough" 
            className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-violet-400 hover:to-indigo-400 transition-all duration-300 transform hover:scale-105"
          >
            Explore Analytics
          </a>
          <a 
            href="/contact" 
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-violet-900 transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPredictiveAnalyticsBanner2025;