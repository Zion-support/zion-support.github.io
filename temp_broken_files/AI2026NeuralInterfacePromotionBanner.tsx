import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function AI2026NeuralInterfacePromotionBanner() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6">
              🧠 BREAKTHROUGH: NEURAL INTERFACE REVOLUTION 2026
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Experience the Future of
              <span className="block text-purple-200">
                Human-AI Interaction
              </span>
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Revolutionary neural interface technology enabling direct brain-computer communication
              cognitive enhancementand seamless human-AI symbiosis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/ai-2026-neural-interface-revolution"
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                Explore Neural Tech
              </a>
              <a 
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 text-center"
              >
                Get Neural Consultation
              </a>
            </div>
          </div>

          {/* Right Content - Revolutionary Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-purple-200 text-sm">Neural Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">0.1ms</div>
              <div className="text-purple-200 text-sm">Response Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">1000x</div>
              <div className="text-purple-200 text-sm">Speed Increase</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">∞</div>
              <div className="text-purple-200 text-sm">Possibilities</div>
            </div>
          </div>
        </div>

        {/* Neural Network Animation */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full animate-pulse">
          <div className="absolute inset-2 border-2 border-white/30 rounded-full animate-spin"></div>
        </div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/5 rounded-full animate-bounce">
          <div className="absolute inset-1 bg-white/20 rounded-full"></div>
        </div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
      </div>
    </div>
  );
}