import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function AI2025GlobalTransformationBreakthroughBanner() {
  return (
    <div className="bg-gradient-to-r from-green-900 via-blue-900 to-purple-900 text-white py-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-500/30 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-purple-500/30 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-yellow-500/30 rounded-full animate-ping"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              🏆 10,000% ROI
            </span>
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              🏢 FORTUNE 500
            </span>
            <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              🚀 BREAKTHROUGH
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            AI 2025 Global Transformation Breakthrough
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-4xl mx-auto">
            Discover how we achieved 10,000% ROI for a Fortune 500 company in just 6 months. 
            Real resultsproven strategiesand actionable insights that can transform your business!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🏆 Read Success Story
            </a>
            
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300"
            >
              💼 Start Your Transformation
            </a>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-green-400 mb-2">10,000%</div>
              <div className="text-sm text-green-100">ROI Achievement</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-blue-400 mb-2">$2.5B</div>
              <div className="text-sm text-green-100">Additional Revenue</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-sm text-green-100">Efficiency Improvement</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-yellow-400 mb-2">6</div>
              <div className="text-sm text-green-100">Months to Results</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}