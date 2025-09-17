import React from 'react';

const EnhancedContentShowcase = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ENHANCED SHOWCASE • JANUARY 2026
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Enhanced Technology Experience</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience our most advanced technologies with immersive interactive features
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Advanced Quantum Computing</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Experience exponential processing power with 1000+ qubit quantum processors
            </p>
            <a href="/pages/AdvancedQuantumComputing2026" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Explore Quantum Future →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interface Revolution</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Bridge mind and machine with direct brain-computer communication
            </p>
            <a href="/pages/AdvancedNeuralInterface2026" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Connect Mind & Machine →
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Synthetic Intelligence</h3>
            <p className="text-purple-100 mb-6 text-center">
              Create and deploy AI agents with synthetic consciousness
            </p>
            <a href="/pages/SyntheticIntelligence2026" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Experience Synthetic AI →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;