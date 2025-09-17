import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AI2026QuantumNeuralFusionPromotionBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white animate-pulse">
              ⚛️ NEW: QUANTUM NEURAL FUSION
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            AI 2026 Quantum Neural Fusion
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
            Experience the revolutionary convergence of quantum computing and neural networks. 
            Discover AI systems with exponential processing power and unprecedented intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/ai-2026-quantum-neural-fusion"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Quantum AI
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <a 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get Quantum Access
            </a>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">10^15</div>
              <div className="text-sm text-gray-300">Operations/Second</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">∞</div>
              <div className="text-sm text-gray-300">Parallel Processing</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">100%</div>
              <div className="text-sm text-gray-300">Security Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2026QuantumNeuralFusionPromotionBanner;