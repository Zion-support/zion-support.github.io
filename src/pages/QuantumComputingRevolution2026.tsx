import React from 'react';
import { motion } from 'framer-motion';

const QuantumComputingRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ QUANTUM BREAKTHROUGH • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Quantum Computing Revolution 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience exponential computing power with quantum technology that solves impossible problems and unlocks new frontiers of innovation
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Quantum Solutions
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-lg">
                Watch Quantum Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quantum Capabilities */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">⚡ Quantum Computing Capabilities</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Harness the power of quantum mechanics to solve complex problems that are impossible for classical computers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Exponential Speed</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Process calculations millions of times faster than classical computers, solving problems in minutes that would take years
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Quantum parallelism</li>
              <li>• Superposition states</li>
              <li>• Entanglement optimization</li>
              <li>• Quantum interference</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🔐</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Cryptography</h3>
            <p className="text-purple-100 mb-6 text-center">
              Unbreakable encryption using quantum principles, ensuring absolute security for sensitive data and communications
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Quantum key distribution</li>
              <li>• Unhackable encryption</li>
              <li>• Quantum random number generation</li>
              <li>• Future-proof security</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Molecular Simulation</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Simulate complex molecular interactions with unprecedented accuracy, revolutionizing drug discovery and materials science
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Quantum chemistry modeling</li>
              <li>• Drug discovery acceleration</li>
              <li>• Materials design optimization</li>
              <li>• Protein folding simulation</li>
            </ul>
          </motion.div>
        </div>

        {/* Quantum Applications */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🌍 Quantum Applications</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover how quantum computing is revolutionizing industries and solving global challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💊</div>
              <h3 className="text-xl font-bold mb-2">Drug Discovery</h3>
              <p className="text-gray-300 text-sm">Accelerate pharmaceutical research with quantum molecular simulation</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🌡️</div>
              <h3 className="text-xl font-bold mb-2">Climate Modeling</h3>
              <p className="text-gray-300 text-sm">Complex climate simulations for accurate weather prediction and environmental planning</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-2">Materials Science</h3>
              <p className="text-gray-300 text-sm">Design revolutionary materials with quantum-level precision and properties</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">AI Enhancement</h3>
              <p className="text-gray-300 text-sm">Supercharge machine learning with quantum algorithms and processing power</p>
            </div>
          </div>
        </div>

        {/* Quantum Advantages */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-6">🚀 Why Choose Quantum Computing?</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">⚡</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Exponential Speed</h4>
                  <p className="text-gray-300">Solve complex optimization problems in seconds instead of years</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🔐</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Unbreakable Security</h4>
                  <p className="text-gray-300">Quantum cryptography provides theoretically unbreakable encryption</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-2xl">🧬</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Molecular Precision</h4>
                  <p className="text-gray-300">Simulate quantum systems with perfect accuracy for scientific breakthroughs</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">📊 Performance Comparison</h3>
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg">Classical Computer</span>
                  <span className="text-2xl font-bold text-red-400">1x</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">Quantum Computer (50 qubits)</span>
                  <span className="text-2xl font-bold text-yellow-400">1,000,000x</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg">Quantum Computer (100 qubits)</span>
                  <span className="text-2xl font-bold text-green-400">1,000,000,000,000x</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Go Quantum?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the quantum revolution and unlock unprecedented computing power for your most challenging problems
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Quantum Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingRevolution2026;