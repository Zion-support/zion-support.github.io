import React from 'react';
import Link from 'next/link';

const TechTrends2025_2030PromotionBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-purple-400 to-pink-400 text-black px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg animate-bounce">
            🔮 NEW: TECH TRENDS 2025-2030
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Future of Innovation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              2025-2030
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary technology trends that will reshape industries and transform 
            human experience over the next five years. From AI consciousness to quantum supremacy.
          </p>

          {/* Trends Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">🧠</div>
              <div className="text-sm font-semibold">AI Consciousness</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">⚛️</div>
              <div className="text-sm font-semibold">Quantum Supremacy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">🔗</div>
              <div className="text-sm font-semibold">Neural Interfaces</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl mb-2">🤖</div>
              <div className="text-sm font-semibold">Autonomous Systems</div>
            </div>
          </div>

          {/* Timeline */}
          <div className="grid grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">2025-2027</div>
              <div className="text-sm opacity-80">Foundation Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">2028-2030</div>
              <div className="text-sm opacity-80">Transformation Era</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tech-trends-2025-2030"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-lg shadow-2xl transform hover:scale-105 inline-flex items-center justify-center"
            >
              🔮 Explore Future Trends
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/ai-innovation-hub"
              className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-xl font-bold hover:bg-purple-400 hover:text-black transition-all duration-300 text-lg inline-flex items-center justify-center"
            >
              🧠 AI Innovation Hub
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </Link>
          </div>

          {/* Exclusive Content */}
          <div className="mt-6 text-sm opacity-80">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full font-semibold mr-2">
              EXCLUSIVE
            </span>
            Expert predictions and in-depth analysis of emerging technologies
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute top-8 right-8 w-3 h-3 bg-pink-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-4 left-8 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-8 right-4 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
    </div>
  );
};

export default TechTrends2025_2030PromotionBanner;