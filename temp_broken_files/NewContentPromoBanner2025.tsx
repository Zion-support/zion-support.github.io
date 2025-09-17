import React from 'react';

const NewContentPromoBanner2025: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-3xl p-8 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-rose-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 NEW REVOLUTIONARY CONTENT • JANUARY 2025
          </div>
          <h2 className="text-4xl font-bold mb-4">🌟 Revolutionary Technology Breakthroughs 2025</h2>
          <p className="text-xl opacity-95 mb-6 max-w-4xl mx-auto">
            Experience the most groundbreaking technological innovations of 2025 with our new content featuring 
            AI breakthroughs, quantum computing revolution, and neural interface technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* AI Breakthrough Card */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-3 text-center">Revolutionary AI Breakthrough</h3>
            <p className="text-white/90 mb-4 text-center text-sm">
              Discover the most advanced AI technologies that are reshaping industries and creating new possibilities
            </p>
            <ul className="text-white/80 space-y-1 mb-4 text-xs">
              <li>• Autonomous AI Consciousness</li>
              <li>• Quantum-Enhanced AI</li>
              <li>• Neural Interface AI</li>
              <li>• Creative AI Synthesis</li>
            </ul>
            <a 
              href="/pages/RevolutionaryAIBreakthrough2025" 
              className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center"
            >
              Explore AI Revolution →
            </a>
          </div>

          {/* Quantum Computing Card */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-3 text-center">Quantum Computing Revolution</h3>
            <p className="text-white/90 mb-4 text-center text-sm">
              Experience quantum supremacy with breakthrough technologies solving impossible problems
            </p>
            <ul className="text-white/80 space-y-1 mb-4 text-xs">
              <li>• 1000+ Qubit Processors</li>
              <li>• Quantum AI Integration</li>
              <li>• Quantum Cryptography</li>
              <li>• Molecular Simulation</li>
            </ul>
            <a 
              href="/pages/QuantumComputingRevolution2025" 
              className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center"
            >
              Go Quantum →
            </a>
          </div>

          {/* Neural Interface Card */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-3 text-center">Neural Interface Revolution</h3>
            <p className="text-white/90 mb-4 text-center text-sm">
              Bridge mind and machine with direct brain-computer communication and cognitive augmentation
            </p>
            <ul className="text-white/80 space-y-1 mb-4 text-xs">
              <li>• Non-Invasive BCI</li>
              <li>• Thought Control</li>
              <li>• Cognitive Augmentation</li>
              <li>• Creative Expression</li>
            </ul>
            <a 
              href="/pages/NeuralInterfaceRevolution2025" 
              className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center"
            >
              Connect Mind & Machine →
            </a>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-4">
            <a 
              href="/pages/RevolutionaryAIBreakthrough2025" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg"
            >
              🧠 AI Breakthrough 2025
            </a>
            <a 
              href="/pages/QuantumComputingRevolution2025" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg"
            >
              ⚡ Quantum Revolution
            </a>
            <a 
              href="/pages/NeuralInterfaceRevolution2025" 
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg"
            >
              🧬 Neural Interface
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromoBanner2025;