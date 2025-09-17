import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function QuantumComputingBreakthroughBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-cyan-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.3),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold mb-6 animate-pulse">
            ⚛️ QUANTUM BREAKTHROUGH
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
            Quantum Computing Breakthroughs 2025
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the most revolutionary quantum computing breakthroughs in history. 
            <span className="text-cyan-400 font-bold"> 10,000x faster processing</span>
            <span className="text-purple-400 font-bold"> error-corrected quantum computers</span>and 
            <span className="text-yellow-400 font-bold"> quantum supremacy</span> achievements.
          </p>
          
          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-800/30 to-blue-800/30 p-6 rounded-xl border border-cyan-500/20">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold mb-2">Error-Corrected Quantum</h3>
              <p className="text-sm text-gray-300">99.9% accuracy10,000x faster</p>
            </div>
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-6 rounded-xl border border-purple-500/20">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-lg font-bold mb-2">Quantum Internet</h3>
              <p className="text-sm text-gray-300">Perfect securityinstant communication</p>
            </div>
            <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 p-6 rounded-xl border border-green-500/20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold mb-2">Quantum Machine Learning</h3>
              <p className="text-sm text-gray-300">99.9% accuracy in predictions</p>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/quantum-computing-breakthroughs-2025"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Quantum Breakthroughs
            </a>
            <a 
              href="/case-studies/quantum-computing-15000-roi-success"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 shadow-lg"
            >
              View Success Stories
            </a>
            <a 
              href="/resources/quantum-computing-implementation-guide"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
            >
              Implementation Guide
            </a>
          </div>
          
          {/* Additional content links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <a 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              🚀 AI 2025 Breakthrough
            </a>
            <a 
              href="/ai-2026-2030-ultimate-content-revolution"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              🔮 Future Predictions
            </a>
            <a 
              href="/case-studies"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              🏆 Case Studies
            </a>
            <a 
              href="/webinars/quantum-computing-breakthroughs-2025"
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              🔥 Quantum Webinars
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}