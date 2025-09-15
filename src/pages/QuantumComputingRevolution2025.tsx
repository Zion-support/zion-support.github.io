import React from 'react';
import { motion } from 'framer-motion';

const QuantumComputingRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ QUANTUM COMPUTING REVOLUTION • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Quantum Computing Revolution 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience exponential computing power with quantum processors that solve impossible problems and unlock new possibilities
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#capabilities" className="bg-white text-cyan-600 px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
                Explore Capabilities →
              </a>
              <a href="#contact" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors">
                Get Started
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">⚡ Revolutionary Quantum Capabilities</h2>
            <p className="text-xl text-cyan-200">Unlock the power of quantum computing</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">⚛️</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Quantum Supremacy</h3>
              <p className="text-cyan-100 mb-6 text-center">
                Achieve computational superiority with quantum processors that outperform classical computers
              </p>
              <ul className="text-cyan-200 space-y-2 text-sm">
                <li>• 1000+ logical qubits</li>
                <li>• Exponential speedup</li>
                <li>• Quantum advantage</li>
                <li>• Fault-tolerant computing</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🔐</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Quantum Cryptography</h3>
              <p className="text-purple-100 mb-6 text-center">
                Unbreakable security with quantum key distribution and post-quantum cryptography
              </p>
              <ul className="text-purple-200 space-y-2 text-sm">
                <li>• Quantum key distribution</li>
                <li>• Post-quantum algorithms</li>
                <li>• Unhackable communication</li>
                <li>• Quantum random numbers</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🧬</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Molecular Simulation</h3>
              <p className="text-emerald-100 mb-6 text-center">
                Simulate complex molecular systems for drug discovery and material science
              </p>
              <ul className="text-emerald-200 space-y-2 text-sm">
                <li>• Drug discovery</li>
                <li>• Material design</li>
                <li>• Chemical reactions</li>
                <li>• Protein folding</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Quantum AI Integration</h3>
              <p className="text-orange-100 mb-6 text-center">
                Combine quantum computing with artificial intelligence for unprecedented capabilities
              </p>
              <ul className="text-orange-200 space-y-2 text-sm">
                <li>• Quantum machine learning</li>
                <li>• Neural network acceleration</li>
                <li>• Pattern recognition</li>
                <li>• Optimization algorithms</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🔮</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Quantum Optimization</h3>
              <p className="text-violet-100 mb-6 text-center">
                Solve complex optimization problems with quantum annealing and variational algorithms
              </p>
              <ul className="text-violet-200 space-y-2 text-sm">
                <li>• Portfolio optimization</li>
                <li>• Supply chain management</li>
                <li>• Route optimization</li>
                <li>• Resource allocation</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-to-br from-rose-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-rose-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🌐</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Quantum Networking</h3>
              <p className="text-rose-100 mb-6 text-center">
                Build quantum networks for secure communication and distributed quantum computing
              </p>
              <ul className="text-rose-200 space-y-2 text-sm">
                <li>• Quantum internet</li>
                <li>• Distributed computing</li>
                <li>• Quantum teleportation</li>
                <li>• Entanglement networks</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-800/50 to-blue-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">🚀 Quantum Applications</h2>
            <p className="text-xl text-cyan-200">Transform industries with quantum computing</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">💊</div>
              <h3 className="text-2xl font-bold text-white mb-2">Healthcare</h3>
              <p className="text-cyan-200">Drug discovery and medical research</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🏦</div>
              <h3 className="text-2xl font-bold text-white mb-2">Finance</h3>
              <p className="text-cyan-200">Risk analysis and portfolio optimization</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-white mb-2">Research</h3>
              <p className="text-cyan-200">Scientific simulation and discovery</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-white mb-2">Security</h3>
              <p className="text-cyan-200">Unbreakable encryption and defense</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">📊 Quantum Performance</h2>
            <p className="text-xl text-cyan-200">Experience unprecedented computing power</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-2">1 Billion</h3>
              <p className="text-cyan-200">Times Faster Processing</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🔢</div>
              <h3 className="text-2xl font-bold text-white mb-2">1000+</h3>
              <p className="text-cyan-200">Logical Qubits</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-2">99.9%</h3>
              <p className="text-cyan-200">Error Correction</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">⏱️</div>
              <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
              <p className="text-cyan-200">Continuous Operation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready for Quantum Revolution?</h2>
          <p className="text-xl text-cyan-200 mb-8 max-w-2xl mx-auto">
            Join the quantum computing revolution and unlock exponential possibilities for your business
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Start Quantum Journey →
            </a>
            <a href="/pages/AdvancedQuantumComputing2026" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors">
              Explore Advanced Quantum
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingRevolution2025;