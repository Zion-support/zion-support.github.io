import React from 'react';

const QuantumReality2027: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse">
              ⚡ QUANTUM REALITY • JANUARY 2027
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
              Quantum Reality 2027
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
              Step into a world where quantum computing has achieved supremacy, creating realities that transcend classical physics and open infinite possibilities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-indigo-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
                Enter Quantum World →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-lg">
                Watch Quantum Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Quantum Breakthroughs */}
      <div className="container mx-auto px-4 py-20">
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">⚡ Quantum Breakthroughs</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Experience the most advanced quantum technologies that are reshaping our understanding of reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Supremacy</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Quantum computers that can solve problems in seconds that would take classical computers millennia
            </p>
            <ul className="text-indigo-200 space-y-2 mb-6 text-sm">
              <li>• 1000+ logical qubits</li>
              <li>• Quantum error correction</li>
              <li>• Exponential speed gains</li>
              <li>• Complex optimization</li>
            </ul>
            <button className="w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold">
              Experience Supremacy →
            </button>
          </div>

          <div
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Simulation</h3>
            <p className="text-purple-100 mb-6 text-center">
              Simulate complex molecular structures, materials, and quantum systems with unprecedented accuracy
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Molecular modeling</li>
              <li>• Material discovery</li>
              <li>• Drug development</li>
              <li>• Climate simulation</li>
            </ul>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Start Simulation →
            </button>
          </div>

          <div
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🔐</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Cryptography</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Unbreakable encryption systems that use quantum mechanics to ensure absolute security
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Quantum key distribution</li>
              <li>• Unbreakable encryption</li>
              <li>• Secure communication</li>
              <li>• Quantum internet</li>
            </ul>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Secure Your Data →
            </button>
          </div>
        </div>
      </div>
      {/* Quantum Applications */}
      <div className="bg-gradient-to-r from-indigo-800/50 to-purple-800/50 py-20">
        <div className="container mx-auto px-4">
          <div
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">🚀 Quantum Applications</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Discover how quantum computing is revolutionizing industries and solving impossible problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">🧬 Drug Discovery</h3>
              <p className="text-indigo-100 mb-4">
                Quantum computers accelerating drug discovery by simulating molecular interactions at quantum level
              </p>
              <ul className="text-indigo-200 space-y-2">
                <li>• Molecular simulation</li>
                <li>• Protein folding prediction</li>
                <li>• Drug interaction modeling</li>
                <li>• Personalized medicine</li>
              </ul>
            </div>

            <div
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">🌍 Climate Modeling</h3>
              <p className="text-purple-100 mb-4">
                Ultra-precise climate models that can predict weather patterns and climate change with quantum accuracy
              </p>
              <ul className="text-purple-200 space-y-2">
                <li>• Weather prediction</li>
                <li>• Climate change modeling</li>
                <li>• Environmental optimization</li>
                <li>• Disaster prevention</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Quantum Future Vision */}
      <div className="container mx-auto px-4 py-20">
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">🔮 The Quantum Future</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Imagine a world where quantum computing has unlocked the secrets of the universe and created technologies beyond our wildest dreams
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="text-6xl mb-4">🌌</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Internet</h3>
            <p className="text-indigo-100">
              A global quantum network enabling instant, secure communication across the planet
            </p>
          </div>

          <div
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="text-6xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">Quantum AI</h3>
            <p className="text-purple-100">
              AI systems powered by quantum computing with superhuman intelligence and creativity
            </p>
          </div>

          <div
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Space Exploration</h3>
            <p className="text-cyan-100">
              Quantum-powered spacecraft and exploration systems reaching the farthest corners of the universe
            </p>
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Enter the Quantum Era?</h2>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Join us in exploring the quantum frontier and be part of the most revolutionary technological advancement in human history
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-indigo-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
              Enter Quantum World
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-lg">
              Learn Quantum Computing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default QuantumReality2027;
