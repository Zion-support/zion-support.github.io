import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function QuantumComputingBreakthrough2026PromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white">
      {/* Animated quantum particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
        {/* Quantum circuit pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="quantum-circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3"/>
                <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#quantum-circuit)"/>
          </svg>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Quantum Computing Breakthrough 2026
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Revolutionary quantum computing solutions that will solve problems impossible for classical computers
          </p>
          
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-lg font-semibold animate-bounce">
              BREAKTHROUGH
            </span>
            <span className="bg-purple-500 text-white px-6 py-2 rounded-full text-lg font-semibold animate-bounce">
              12,000% ROI
            </span>
            <span className="bg-cyan-500 text-white px-6 py-2 rounded-full text-lg font-semibold animate-bounce">
              QUANTUM SUPREMACY
            </span>
          </div>
          
          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-r from-blue-800/50 to-indigo-800/50 p-6 rounded-xl border border-blue-500/30">
              <h3 className="text-xl font-bold mb-3 text-blue-400">⚛️ Error-Corrected Quantum</h3>
              <p className="text-gray-300 text-sm">1,000+ logical qubits with 98% accuracy</p>
            </div>
            <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 p-6 rounded-xl border border-purple-500/30">
              <h3 className="text-xl font-bold mb-3 text-purple-400">🌐 Quantum Internet</h3>
              <p className="text-gray-300 text-sm">Global unhackable communication network</p>
            </div>
            <div className="bg-gradient-to-r from-cyan-800/50 to-blue-800/50 p-6 rounded-xl border border-cyan-500/30">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">🧬 Quantum ML</h3>
              <p className="text-gray-300 text-sm">1,000,000x faster data processing</p>
            </div>
            <div className="bg-gradient-to-r from-green-800/50 to-teal-800/50 p-6 rounded-xl border border-green-500/30">
              <h3 className="text-xl font-bold mb-3 text-green-400">🔬 Quantum Chemistry</h3>
              <p className="text-gray-300 text-sm">Revolutionary drug and material discovery</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/quantum-computing-breakthrough-2026"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Quantum Solutions
            </a>
            <a 
              href="/tools/quantum-readiness-assessment"
              className="bg-transparent border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105"
            >
              Assess Readiness
            </a>
          </div>
          
          {/* Technical specs */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center p-4 bg-blue-800/30 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">1,000+</div>
              <div className="text-gray-300 text-sm">Logical Qubits</div>
            </div>
            <div className="text-center p-4 bg-purple-800/30 rounded-lg">
              <div className="text-2xl font-bold text-purple-400">99.9%</div>
              <div className="text-gray-300 text-sm">Error Rate</div>
            </div>
            <div className="text-center p-4 bg-cyan-800/30 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">1M+</div>
              <div className="text-gray-300 text-sm">Ops/Second</div>
            </div>
            <div className="text-center p-4 bg-green-800/30 rounded-lg">
              <div className="text-2xl font-bold text-green-400">24/7</div>
              <div className="text-gray-300 text-sm">Availability</div>
            </div>
          </div>
          
          {/* Urgency indicator */}
          <div className="mt-8 text-center">
            <p className="text-yellow-400 font-semibold animate-pulse">
              ⚡ Limited Time: Early access to quantum implementation toolkit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}