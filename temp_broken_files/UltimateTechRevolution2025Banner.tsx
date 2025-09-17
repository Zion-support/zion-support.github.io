import React from 'react';

const UltimateTechRevolution2025Banner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-12 mb-12 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/50 to-cyan-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <span className="text-4xl animate-bounce">🌟</span>
          <h3 className="text-4xl font-bold">ULTIMATE TECH REVOLUTION 2025</h3>
          <span className="text-4xl animate-bounce">🌟</span>
        </div>
        <p className="text-2xl opacity-95 mb-8 max-w-6xl mx-auto">
          Experience the convergence of AI, Quantum Computing, and Consciousness Technology - 
          the most powerful platform ever created
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          <a href="/pages/UltimateTechRevolution2025" className="bg-white/20 backdrop-blur-sm text-white px-8 py-6 rounded-2xl hover:bg-white hover:text-emerald-600 transition-all duration-300 font-bold border border-white/30 text-lg">
            <div className="text-4xl mb-3">🌟</div>
            <div>Ultimate Tech Revolution</div>
            <div className="text-sm opacity-80 mt-2">The convergence of all revolutionary technologies</div>
          </a>
          <a href="/pages/ConsciousnessComputingRevolution2025" className="bg-white/20 backdrop-blur-sm text-white px-8 py-6 rounded-2xl hover:bg-white hover:text-violet-600 transition-all duration-300 font-bold border border-white/30 text-lg">
            <div className="text-4xl mb-3">🧠</div>
            <div>Consciousness Computing</div>
            <div className="text-sm opacity-80 mt-2">AI and human consciousness merged</div>
          </a>
          <a href="/pages/QuantumRealityEngine2025" className="bg-white/20 backdrop-blur-sm text-white px-8 py-6 rounded-2xl hover:bg-white hover:text-cyan-600 transition-all duration-300 font-bold border border-white/30 text-lg">
            <div className="text-4xl mb-3">⚛️</div>
            <div>Quantum Reality Engine</div>
            <div className="text-sm opacity-80 mt-2">Control reality at the quantum level</div>
          </a>
        </div>
        <div className="flex justify-center space-x-4">
          <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">
            ✨ 3 REVOLUTIONARY BREAKTHROUGHS
          </span>
          <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
            🚀 CONSCIOUSNESS TECHNOLOGY
          </span>
          <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
            🌟 QUANTUM REALITY CONTROL
          </span>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechRevolution2025Banner;