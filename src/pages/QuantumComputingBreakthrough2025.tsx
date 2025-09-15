import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const QuantumComputingBreakthrough2025: React.FC = () => {
  const [quantumState, setQuantumState] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  useEffect(() => {
    if (isSimulating) {
      const interval = setInterval(() => {
        setQuantumState(prev => (prev + 1) % 100);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isSimulating]);

  const startSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ QUANTUM BREAKTHROUGH • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              Quantum Computing Breakthrough 2025
            </h1>
            <p className="text-2xl text-cyan-200 mb-8 max-w-4xl mx-auto">
              Experience the quantum revolution with exponential computing power, 
              unbreakable cryptography, and solutions to previously impossible problems
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={startSimulation}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Start Quantum Simulation
              </button>
              <button className="border border-cyan-400 text-cyan-200 px-8 py-4 rounded-lg hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                Learn Quantum Principles
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quantum Simulation */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-cyan-600/10 to-blue-600/10 backdrop-blur-sm rounded-3xl p-12 border border-cyan-400/20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">🔬 Live Quantum Simulation</h2>
            <p className="text-xl text-cyan-200">Watch quantum algorithms solve complex problems in real-time</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Quantum State Visualization</h3>
              <div className="space-y-4">
                <div className="bg-slate-800 rounded-lg p-4">
                  <div className="text-cyan-400 text-sm mb-2">Quantum State: |ψ⟩ = α|0⟩ + β|1⟩</div>
                  <div className="text-cyan-400 text-sm mb-2">α = {Math.cos(quantumState * 0.1).toFixed(3)}</div>
                  <div className="text-cyan-400 text-sm mb-2">β = {Math.sin(quantumState * 0.1).toFixed(3)}</div>
                </div>
                <div className="bg-slate-800 rounded-lg p-4">
                  <div className="text-blue-400 text-sm mb-2">Processing: Shor's Algorithm</div>
                  <div className="text-blue-400 text-sm mb-2">Status: {isSimulating ? 'Running...' : 'Ready'}</div>
                  <div className="text-blue-400 text-sm">Progress: {quantumState}%</div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-100" 
                    style={{ width: `${quantumState}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Circuit</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-cyan-500 rounded-full animate-pulse"></div>
                  <span className="text-cyan-400 text-sm">Hadamard Gate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <span className="text-blue-400 text-sm">CNOT Gate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <span className="text-purple-400 text-sm">Phase Gate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  <span className="text-pink-400 text-sm">Measurement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Capabilities */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">⚡ Quantum Capabilities</h2>
          <p className="text-xl text-cyan-200">Revolutionary computing power that changes everything</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🔢</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Exponential Speed</h3>
            <p className="text-cyan-200 mb-6 text-center">
              Solve problems that would take classical computers billions of years in mere seconds
            </p>
            <ul className="text-cyan-300 space-y-2 mb-6 text-sm">
              <li>• 2^1000x faster than classical</li>
              <li>• Parallel universe processing</li>
              <li>• Instant complex calculations</li>
              <li>• Real-time optimization</li>
            </ul>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Experience Speed →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🔐</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Quantum Cryptography</h3>
            <p className="text-blue-200 mb-6 text-center">
              Unbreakable encryption using quantum principles that ensures absolute security
            </p>
            <ul className="text-blue-300 space-y-2 mb-6 text-sm">
              <li>• Quantum key distribution</li>
              <li>• Unhackable communication</li>
              <li>• Perfect privacy protection</li>
              <li>• Future-proof security</li>
            </ul>
            <button className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Secure Communications →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Molecular Simulation</h3>
            <p className="text-purple-200 mb-6 text-center">
              Simulate molecular interactions at quantum level for drug discovery and materials science
            </p>
            <ul className="text-purple-300 space-y-2 mb-6 text-sm">
              <li>• Drug molecule modeling</li>
              <li>• Protein folding simulation</li>
              <li>• Material property prediction</li>
              <li>• Chemical reaction analysis</li>
            </ul>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Simulate Molecules →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-pink-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Quantum Search</h3>
            <p className="text-pink-200 mb-6 text-center">
              Find solutions in unsorted databases exponentially faster than classical methods
            </p>
            <ul className="text-pink-300 space-y-2 mb-6 text-sm">
              <li>• Grover's algorithm</li>
              <li>• Database optimization</li>
              <li>• Pattern recognition</li>
              <li>• Data mining acceleration</li>
            </ul>
            <button className="w-full bg-white text-pink-600 py-3 rounded-lg hover:bg-pink-50 transition-colors font-semibold">
              Quantum Search →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-cyan-600/20 to-green-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🌐</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Quantum Networks</h3>
            <p className="text-cyan-200 mb-6 text-center">
              Quantum internet enabling instant, secure communication across the globe
            </p>
            <ul className="text-cyan-300 space-y-2 mb-6 text-sm">
              <li>• Quantum teleportation</li>
              <li>• Entangled communication</li>
              <li>• Global quantum network</li>
              <li>• Instant data transfer</li>
            </ul>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Join Quantum Net →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Quantum Optimization</h3>
            <p className="text-green-200 mb-6 text-center">
              Solve complex optimization problems across logistics, finance, and resource allocation
            </p>
            <ul className="text-green-300 space-y-2 mb-6 text-sm">
              <li>• Supply chain optimization</li>
              <li>• Portfolio management</li>
              <li>• Route optimization</li>
              <li>• Resource allocation</li>
            </ul>
            <button className="w-full bg-white text-green-600 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold">
              Optimize Systems →
            </button>
          </motion.div>
        </div>
      </div>

      {/* Quantum Applications */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">🚀 Quantum Applications</h2>
          <p className="text-xl text-cyan-200">Revolutionary applications across industries</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-cyan-600/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">🏥 Healthcare & Medicine</h3>
            <ul className="text-cyan-200 space-y-2">
              <li>• Drug discovery acceleration</li>
              <li>• Protein folding prediction</li>
              <li>• Personalized medicine</li>
              <li>• Cancer treatment optimization</li>
              <li>• Genetic analysis</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">💼 Finance & Banking</h3>
            <ul className="text-blue-200 space-y-2">
              <li>• Risk assessment optimization</li>
              <li>• Fraud detection</li>
              <li>• Portfolio optimization</li>
              <li>• Algorithmic trading</li>
              <li>• Cryptocurrency security</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">🔬 Scientific Research</h3>
            <ul className="text-purple-200 space-y-2">
              <li>• Climate modeling</li>
              <li>• Particle physics simulation</li>
              <li>• Materials science</li>
              <li>• Space exploration</li>
              <li>• Energy research</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-pink-600/10 to-cyan-600/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">🌐 Technology & AI</h3>
            <ul className="text-pink-200 space-y-2">
              <li>• Machine learning acceleration</li>
              <li>• Neural network optimization</li>
              <li>• Data analysis</li>
              <li>• Cybersecurity</li>
              <li>• Quantum AI</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for the Quantum Revolution?</h2>
          <p className="text-xl text-cyan-200 mb-8 max-w-3xl mx-auto">
            Join the quantum computing revolution and unlock unprecedented computational power 
            to solve the world's most complex challenges.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Quantum Journey
            </button>
            <button className="border border-cyan-400 text-cyan-200 px-8 py-4 rounded-lg hover:bg-cyan-50 hover:text-cyan-600 transition-colors text-lg">
              Contact Quantum Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingBreakthrough2025;