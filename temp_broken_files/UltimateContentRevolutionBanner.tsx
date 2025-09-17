import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function UltimateContentRevolutionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-8 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce mr-4">
              🚀 BREAKTHROUGH
            </span>
            <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold animate-bounce">
              ⚡ NEW
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-pulse">
            🌟 ULTIMATE CONTENT REVOLUTION 2025 🌟
          </h2>
          
          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Experience the most revolutionary AI breakthroughs in history. 
            <span className="font-bold text-yellow-300"> 10,000% ROI guaranteed</span> with our 
            <span className="font-bold text-cyan-300"> quantum-neural fusion technology</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 AI 2025 Ultimate Breakthrough
            </a>
            <a 
              href="/ai-2026-quantum-neural-fusion-breakthrough"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              ⚛️ Quantum-Neural Fusion
            </a>
            <a 
              href="/ai-2030-transcendent-intelligence"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🌌 Transcendent Intelligence
            </a>
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full">✅ 10,000% ROI</span>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full">✅ 99.9% Accuracy</span>
            <span className="bg-purple-500 text-white px-3 py-1 rounded-full">✅ Infinite Speed</span>
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full">✅ Zero Latency</span>
          </div>
        </div>
      </div>
    </div>
  );
}