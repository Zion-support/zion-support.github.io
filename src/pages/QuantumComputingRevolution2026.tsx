import React from 'react';
import { motion } from 'framer-motion';

const QuantumComputingRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ QUANTUM BREAKTHROUGH • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Quantum Computing Revolution 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the power of quantum computing with our revolutionary quantum processors, 
              quantum algorithms, and quantum-enhanced solutions that solve impossible problems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Quantum Solutions
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-lg">
                Quantum Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quantum Capabilities */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">⚡ Quantum Computing Capabilities</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our quantum computing solutions leverage the principles of quantum mechanics to process 
            information in ways that are impossible for classical computers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Quantum Supremacy</h3>
            <p className="text-cyan-100 mb-6">
              Achieve computational supremacy with quantum processors that can solve problems 
              exponentially faster than the world's most powerful supercomputers.
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Exponential speedup</li>
              <li>• Parallel processing</li>
              <li>• Quantum entanglement</li>
              <li>• Superposition states</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4">🔐</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Quantum Cryptography</h3>
            <p className="text-purple-100 mb-6">
              Unbreakable encryption using quantum key distribution and quantum-resistant algorithms 
              that ensure absolute security for your most sensitive data.
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Unbreakable encryption</li>
              <li>• Quantum key distribution</li>
              <li>• Perfect security</li>
              <li>• Future-proof protection</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4">🧪</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Molecular Simulation</h3>
            <p className="text-emerald-100 mb-6">
              Simulate complex molecular interactions and chemical reactions with unprecedented 
              accuracy, accelerating drug discovery and materials science.
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Drug discovery</li>
              <li>• Materials design</li>
              <li>• Chemical simulation</li>
              <li>• Molecular modeling</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Quantum Optimization</h3>
            <p className="text-orange-100 mb-6">
              Solve complex optimization problems across logistics, finance, and operations 
              with quantum algorithms that find optimal solutions in record time.
            </p>
            <ul className="text-orange-200 space-y-2 text-sm">
              <li>• Logistics optimization</li>
              <li>• Portfolio management</li>
              <li>• Supply chain</li>
              <li>• Resource allocation</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Quantum Machine Learning</h3>
            <p className="text-violet-100 mb-6">
              Leverage quantum computing for machine learning tasks, enabling faster training 
              and more powerful AI models with quantum-enhanced algorithms.
            </p>
            <ul className="text-violet-200 space-y-2 text-sm">
              <li>• Quantum neural networks</li>
              <li>• Faster training</li>
              <li>• Enhanced accuracy</li>
              <li>• Quantum algorithms</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-rose-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-rose-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Quantum Sensing</h3>
            <p className="text-rose-100 mb-6">
              Ultra-precise quantum sensors that can detect minute changes in magnetic fields, 
              gravity, and other physical phenomena with unprecedented sensitivity.
            </p>
            <ul className="text-rose-200 space-y-2 text-sm">
              <li>• Magnetic field detection</li>
              <li>• Gravity sensing</li>
              <li>• Ultra-precision</li>
              <li>• Medical imaging</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Quantum Applications */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">🚀 Quantum Applications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how quantum computing is revolutionizing industries and solving 
              problems that were previously impossible to tackle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">💊</div>
                  <h3 className="text-xl font-bold text-white">Drug Discovery</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Quantum computers can simulate molecular interactions at the quantum level, 
                  accelerating drug discovery and reducing development time from years to months.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">10x Faster</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Molecular Simulation</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Precision Medicine</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">💰</div>
                  <h3 className="text-xl font-bold text-white">Financial Modeling</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Quantum algorithms can optimize complex financial portfolios, model market behavior, 
                  and perform risk analysis with unprecedented speed and accuracy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">1000x Speedup</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Risk Analysis</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Portfolio Optimization</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">🌍</div>
                  <h3 className="text-xl font-bold text-white">Climate Modeling</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Quantum computers can model complex climate systems and predict weather patterns 
                  with unprecedented accuracy, helping combat climate change.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">99.9% Accuracy</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Climate Prediction</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Weather Modeling</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">🔬</div>
                  <h3 className="text-xl font-bold text-white">Materials Science</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Design new materials with specific properties by simulating atomic interactions, 
                  leading to breakthroughs in superconductors and energy storage.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">New Materials</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Superconductors</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Energy Storage</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">🚀</div>
                  <h3 className="text-xl font-bold text-white">Space Exploration</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Quantum computers can optimize space mission trajectories, analyze astronomical data, 
                  and solve complex physics problems in space exploration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Mission Optimization</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Data Analysis</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Physics Simulation</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">🔐</div>
                  <h3 className="text-xl font-bold text-white">Cybersecurity</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Quantum-resistant cryptography and quantum key distribution provide 
                  unbreakable security for critical infrastructure and sensitive communications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Unbreakable</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Quantum Keys</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Future-Proof</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Performance Metrics */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">📊 Quantum Performance Metrics</h2>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Our quantum computing solutions deliver unprecedented performance improvements 
              across a wide range of applications and industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">1000x</div>
              <div className="text-xl text-cyan-100 mb-2">Speed Improvement</div>
              <div className="text-sm text-cyan-200">Compared to classical computers</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">99.9%</div>
              <div className="text-xl text-cyan-100 mb-2">Accuracy Rate</div>
              <div className="text-sm text-cyan-200">For complex calculations</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">50+</div>
              <div className="text-xl text-cyan-100 mb-2">Quantum Qubits</div>
              <div className="text-sm text-cyan-200">In our latest processors</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-white mb-2">24/7</div>
              <div className="text-xl text-cyan-100 mb-2">Availability</div>
              <div className="text-sm text-cyan-200">Quantum cloud access</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Harness the Power of Quantum Computing?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Join the quantum revolution and solve problems that were previously impossible. 
            Our quantum computing solutions are ready to transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Quantum Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-lg">
              Quantum Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-lg">
              Download Quantum Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingRevolution2026;