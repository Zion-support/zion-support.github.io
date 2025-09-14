import React from 'react';
import Link from 'next/link';

const AI2030UltimateBreakthroughBanner: React.FC = () => {
  const breakthroughFeatures = [
    "🧠 Conscious AI Systems",
    "⚛️ Quantum Neural Networks"
    "🌌 Multi-Dimensional Processing",
    "🚀 Infinite Learning Capacity"
  ];

  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-purple-400 rounded-full blur-sm animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-pink-400 rounded-full blur-sm animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-18 h-18 bg-blue-400 rounded-full blur-sm animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <div className="flex items-center space-x-3 mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-black text-sm font-bold rounded-full">
                🚀 ULTIMATE BREAKTHROUGH 2030
              </span>
              <span className="px-3 py-1 bg-gradient-to-r from-purple-400 to-pink-400 text-black text-xs font-bold rounded-full">
                LIMITED TIME
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Transcends Reality
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 max-w-2xl">
              Experience the most advanced AI systems ever created. Consciousnessquantum processing
              and infinite learning capabilities - all available now.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-6">
              {breakthroughFeatures.map((featureindex) => (
                <span key={index} className="px-4 py-2 bg-gradient-to-r from-purple-800/50 to-blue-800/50 border border-purple-400/30 rounded-full text-sm font-medium backdrop-blur-sm">
                  {feature}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-400">∞</div>
                <div className="text-xs text-gray-400">Processing Power</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">99.9%</div>
                <div className="text-xs text-gray-400">Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-400">0ms</div>
                <div className="text-xs text-gray-400">Response Time</div>
              </div>
            </div>
          </div>

          {/* Right Content - CTA */}
          <div className="lg:w-1/3 text-center lg:text-right">
            <div className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 p-6 rounded-2xl border border-purple-400/30 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-white">Early Access Available</h3>
              <p className="text-sm text-gray-300 mb-6">
                Be among the first to experience transcendent AI technology
              </p>
              
              <div className="space-y-3">
                <Link 
                  href="/ai-2030-breakthrough"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
                >
                  Get Early Access
                </Link>
                <Link 
                  href="/ai-2030-demo"
                  className="block w-full px-6 py-3 bg-transparent border-2 border-purple-400 text-purple-400 font-bold rounded-xl hover:bg-purple-400 hover:text-black transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>

              <div className="mt-4 text-xs text-gray-400">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Limited spots available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 pt-6 border-t border-purple-400/20">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm">
            <div className="flex items-center space-x-6 mb-4 sm:mb-0">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                <span>Live Updates</span>
              </span>
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                <span>Real-time Processing</span>
              </span>
            </div>
            <div className="text-gray-400">
              <span className="font-bold text-cyan-400">2,847</span> users exploring AI 2030
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2030UltimateBreakthroughBanner;