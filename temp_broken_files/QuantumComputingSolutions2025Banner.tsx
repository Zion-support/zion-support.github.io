import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function QuantumComputingSolutions2025Banner() {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold mb-6 animate-pulse">
            ⚛️ QUANTUM BREAKTHROUGH
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Quantum Computing
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Solutions 2025
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the power of quantum computing with our revolutionary solutions delivering 
            <span className="text-cyan-400 font-bold"> 10,000x faster processing</span>
            <span className="text-purple-400 font-bold"> 99.9% accuracy</span>and 
            <span className="text-blue-400 font-bold"> quantum supremacy</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="/quantum-computing-solutions-2025"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform"
            >
              Explore Quantum Technologies
            </a>
            <a 
              href="/case-studies/quantum-computing-success-stories"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-colors"
            >
              View Success Stories
            </a>
          </div>
          
          {/* Quantum Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10,000x</div>
              <div className="text-white font-semibold">Faster Processing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-white font-semibold">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">∞</div>
              <div className="text-white font-semibold">Scalability</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-white font-semibold">Quantum Security</div>
            </div>
          </div>
        </div>
        
        {/* Technology Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum Supremacy</h3>
            <p className="text-gray-300 mb-4">
              Achieve computational supremacy with quantum processors solving impossible problems
            </p>
            <div className="text-2xl font-bold text-cyan-400">10,000x Classical</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-bold text-white mb-3">Error-Corrected Quantum</h3>
            <p className="text-gray-300 mb-4">
              Advanced error correction maintaining quantum coherence at scale
            </p>
            <div className="text-2xl font-bold text-purple-400">0.001% Error Rate</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum-AI Fusion</h3>
            <p className="text-gray-300 mb-4">
              Revolutionary fusion of quantum computing and artificial intelligence
            </p>
            <div className="text-2xl font-bold text-green-400">15,000% ROI</div>
          </div>
        </div>
        
        {/* Applications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
            <div className="text-2xl mb-2">💊</div>
            <div className="text-sm font-bold text-white">Drug Discovery</div>
            <div className="text-xs text-cyan-400">1000x Faster</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
            <div className="text-2xl mb-2">🔐</div>
            <div className="text-sm font-bold text-white">Cybersecurity</div>
            <div className="text-xs text-purple-400">100% Secure</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
            <div className="text-2xl mb-2">🌍</div>
            <div className="text-sm font-bold text-white">Climate Modeling</div>
            <div className="text-xs text-green-400">99.9% Accurate</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
            <div className="text-2xl mb-2">💰</div>
            <div className="text-sm font-bold text-white">Financial Modeling</div>
            <div className="text-xs text-yellow-400">10,000x ROI</div>
          </div>
        </div>
      </div>
    </div>
  );
}