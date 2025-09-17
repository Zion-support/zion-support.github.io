import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function QuantumAIFusionPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-cyan-900 via-teal-900 to-emerald-900">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-full text-white font-bold text-lg mb-6 animate-pulse">
            ⚡ QUANTUM AI FUSION 2030
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            The Ultimate Computing Revolution
          </h1>
          
          <p className="text-xl text-cyan-200 max-w-4xl mx-auto mb-8">
            Experience the convergence of quantum computing and artificial intelligence that will unlock 
            computational capabilities beyond imagination and solve problems previously unsolvable.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-cyan-600 text-white rounded-full text-sm font-medium">
              ⚛️ Quantum Supremacy
            </span>
            <span className="px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-medium">
              🧠 AI Evolution
            </span>
            <span className="px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-medium">
              🔮 Future Computing
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/quantum-ai-fusion-2030"
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white font-bold rounded-lg hover:from-cyan-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
            >
              ⚡ Explore Quantum AI
            </a>
            <a 
              href="/ai-2035-singularity-breakthrough"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300"
            >
              🚀 Singularity 2035
            </a>
            <a 
              href="/neural-interface-revolution-2035"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300"
            >
              🧠 Neural Revolution
            </a>
          </div>
        </div>
        
        {/* Quantum Effects */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500 rounded-full opacity-20 animate-ping"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-teal-500 rounded-full opacity-20 animate-ping delay-1000"></div>
        <div className="absolute bottom-10 left-20 w-12 h-12 bg-emerald-500 rounded-full opacity-20 animate-ping delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-cyan-400 rounded-full opacity-20 animate-ping delay-500"></div>
      </div>
    </div>
  );
}