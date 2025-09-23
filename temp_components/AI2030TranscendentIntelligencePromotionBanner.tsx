import React from 'react';
import Link from 'next/link';

const AI2030TranscendentIntelligencePromotionBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 py-6 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-6 left-6 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-12 right-12 w-3 h-3 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-6 left-1/3 w-2 h-2 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-12 right-1/3 w-3 h-3 bg-white rounded-full animate-ping"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side - Promotion */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 text-white text-sm font-bold mb-2 animate-pulse">
              🌟 TRANSCENDENT INTELLIGENCE - 2030 VISION
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              AI 2030 Transcendent Intelligence
            </h2>
            <p className="text-white text-opacity-90 text-sm md:text-base">
              Beyond human intelligence: <strong>Infinite ROI</strong><strong>Reality manipulation</strong>and <strong>Transcendent consciousness</strong>
            </p>
          </div>
          
          {/* Right side - CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/ai-2030-transcendent-intelligence-showcase"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
            >
              🌌 Explore Transcendent AI
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Begin Transcendence
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-2 right-2 text-white text-2xl animate-bounce">✨</div>
      <div className="absolute bottom-2 left-2 text-white text-2xl animate-pulse">🌟</div>
    </div>
  );
};

export default AI2030TranscendentIntelligencePromotionBanner;