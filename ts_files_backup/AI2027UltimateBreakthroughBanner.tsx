import React from 'react';
import Link from 'next/link';

const AI2027UltimateBreakthroughBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-6 py-2 mb-8">
            <span className="text-sm font-bold">🚀 AI 2027 ULTIMATE BREAKTHROUGH</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            The Future of
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> AI</span>
            <br />
            <span className="text-4xl md:text-6xl">Starts Here</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            Revolutionary AI technologies that will transform businesses and industries in 2027. 
            Experience the next generation of autonomous systems, quantum-neural fusion, and synthetic intelligence.
          </p>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-2">Neural Superintelligence</h3>
              <p className="text-sm opacity-80">Advanced AI consciousness that learns and adapts in real-time</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Quantum-Neural Fusion</h3>
              <p className="text-sm opacity-80">Revolutionary computing that merges quantum and neural technologies</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">Autonomous Ecosystems</h3>
              <p className="text-sm opacity-80">Self-managing business systems that operate independently</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-2027-breakthrough"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105"
            >
              Explore 2027 Breakthrough
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-all"
            >
              Get Early Access
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">1000%</div>
              <div className="text-sm opacity-80">Expected ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-sm opacity-80">System Reliability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50x</div>
              <div className="text-sm opacity-80">Processing Speed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-sm opacity-80">Autonomous Operation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2027UltimateBreakthroughBanner;