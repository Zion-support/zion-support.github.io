import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function AI2025ContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-4 animate-pulse">
            🚀 NEW BREAKTHROUGH CONTENT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Discover Revolutionary AI 2025 Content
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Explore our latest breakthrough content featuring cutting-edge AI technologies
            success storiesand implementation guides delivering unprecedented ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Featured Breakthrough */}
          <a 
            href="/ai-2025-ultimate-breakthrough-revolution"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <h3 className="text-xl font-bold text-white mb-2">AI 2025 Ultimate Breakthrough</h3>
            <p className="text-white/80 text-sm mb-4">
              Revolutionary quantum-neural fusion delivering 5,000% ROI
            </p>
            <div className="flex items-center text-white/90 text-sm">
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
                NEW
              </span>
              <span>Learn More →</span>
            </div>
          </a>

          {/* Success Story */}
          <a 
            href="/case-studies/ai-2025-global-transformation-breakthrough"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏆</div>
            <h3 className="text-xl font-bold text-white mb-2">10,000% ROI Success Story</h3>
            <p className="text-white/80 text-sm mb-4">
              Fortune 500 company achieves unprecedented transformation
            </p>
            <div className="flex items-center text-white/90 text-sm">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
                CASE STUDY
              </span>
              <span>Read Story →</span>
            </div>
          </a>

          {/* Trends & Predictions */}
          <a 
            href="/blog/ai-2025-revolutionary-trends-predictions"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔮</div>
            <h3 className="text-xl font-bold text-white mb-2">Revolutionary Trends 2025</h3>
            <p className="text-white/80 text-sm mb-4">
              Comprehensive analysis of breakthrough AI trends and predictions
            </p>
            <div className="flex items-center text-white/90 text-sm">
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
                PREDICTIONS
              </span>
              <span>Explore Trends →</span>
            </div>
          </a>

          {/* Implementation Toolkit */}
          <a 
            href="/resources/ai-2025-ultimate-implementation-toolkit"
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🛠️</div>
            <h3 className="text-xl font-bold text-white mb-2">Ultimate Implementation Toolkit</h3>
            <p className="text-white/80 text-sm mb-4">
              Complete step-by-step guides and templates for AI 2025
            </p>
            <div className="flex items-center text-white/90 text-sm">
              <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold mr-2">
                TOOLKIT
              </span>
              <span>Get Toolkit →</span>
            </div>
          </a>
        </div>

        <div className="text-center mt-8">
          <a 
            href="/content-showcase"
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            View All Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}