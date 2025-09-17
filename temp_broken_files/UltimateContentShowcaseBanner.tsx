import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function UltimateContentShowcaseBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-8 mb-8 rounded-2xl shadow-2xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 animate-pulse">
            🎯 ULTIMATE CONTENT SHOWCASE 2026
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Revolutionary AI Content Collection
          </h2>
          <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Explore 200+ breakthrough content pieces with proven ROI achievements up to 50,000%. Discover the future of AI technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">200+</div>
            <div className="text-blue-100">Content Pieces</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">50,000%</div>
            <div className="text-blue-100">Max ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">99.9%</div>
            <div className="text-blue-100">Success Rate</div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/ultimate-content-showcase-2026"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Explore All Content
          </a>
          <a 
            href="/blog/ai-2025-ultimate-automation-revolution"
            className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-colors"
          >
            Latest Breakthrough
          </a>
        </div>
      </div>
    </div>
  );
}