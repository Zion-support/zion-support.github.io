import React from 'react';
import { motion } from 'framer-motion';

const QuantumComputingRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ QUANTUM BREAKTHROUGH • 2026
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              Quantum Computing Revolution 2026
            </h1>
            <p className="text-2xl text-blue-200 mb-8 max-w-4xl mx-auto">
              Experience exponential computing power with our revolutionary quantum systems. 
              Solve impossible problems, break encryption, and unlock new possibilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Quantum Solutions →
              </button>
              <button className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                Watch Quantum Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quantum Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">⚡ Quantum Computing Features</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Harness the power of quantum mechanics for unprecedented computational capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🔮</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Quantum Supremacy</h3>
              <p className="text-blue-200 mb-6 text-center">
                Achieve computational advantages that are impossible with classical computers.
              </p>
              <ul className="text-blue-300 space-y-2 text-sm">
                <li>• Exponential speedup for specific algorithms</li>
                <li>• Quantum advantage in optimization</li>
                <li>• Breakthrough in cryptography</li>
                <li>• Quantum machine learning acceleration</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🌌</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Quantum Entanglement</h3>
              <p className="text-purple-200 mb-6 text-center">
                Leverage quantum entanglement for instant communication and parallel processing.
              </p>
              <ul className="text-purple-300 space-y-2 text-sm">
                <li>• Instant quantum communication</li>
                <li>• Quantum teleportation protocols</li>
                <li>• Entangled quantum states</li>
                <li>• Quantum error correction</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-cyan-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🧮</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Quantum Algorithms</h3>
              <p className="text-cyan-200 mb-6 text-center">
                Revolutionary algorithms that solve complex problems in polynomial time.
              </p>
              <ul className="text-cyan-300 space-y-2 text-sm">
                <li>• Shor's algorithm for factoring</li>
                <li>• Grover's search algorithm</li>
                <li>• Quantum machine learning</li>
                <li>• Quantum optimization algorithms</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quantum Applications */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">🎯 Quantum Applications</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Discover how quantum computing is revolutionizing industries and solving previously impossible problems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/20"
            >
              <h3 className="text-3xl font-bold text-white mb-6">🔐 Quantum Cryptography</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-blue-300 mb-2">Unbreakable Encryption</h4>
                    <p className="text-blue-200">Quantum key distribution for theoretically unbreakable security protocols.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-purple-300 mb-2">Quantum Random Number Generation</h4>
                    <p className="text-purple-200">True randomness based on quantum phenomena for enhanced security.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-cyan-300 mb-2">Post-Quantum Cryptography</h4>
                    <p className="text-cyan-200">Cryptographic systems resistant to quantum computer attacks.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20"
            >
              <h3 className="text-3xl font-bold text-white mb-6">🧬 Quantum Simulation</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-purple-300 mb-2">Molecular Modeling</h4>
                    <p className="text-purple-200">Simulate complex molecular interactions for drug discovery and materials science.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-pink-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-pink-300 mb-2">Quantum Chemistry</h4>
                    <p className="text-pink-200">Accelerate chemical reaction modeling and catalyst design.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-rose-400 rounded-full mt-2"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-rose-300 mb-2">Materials Discovery</h4>
                    <p className="text-rose-200">Design new materials with quantum properties for advanced applications.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quantum Performance Metrics */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">📊 Quantum Performance Metrics</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              See the incredible performance improvements achieved with quantum computing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 text-center"
            >
              <div className="text-5xl font-bold text-blue-300 mb-2">10^15</div>
              <div className="text-xl text-white mb-2">Operations/Second</div>
              <div className="text-blue-200 text-sm">Quantum processing speed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center"
            >
              <div className="text-5xl font-bold text-purple-300 mb-2">99.9%</div>
              <div className="text-xl text-white mb-2">Accuracy Rate</div>
              <div className="text-purple-200 text-sm">Quantum error correction</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center"
            >
              <div className="text-5xl font-bold text-cyan-300 mb-2">1000x</div>
              <div className="text-xl text-white mb-2">Speed Increase</div>
              <div className="text-cyan-200 text-sm">vs Classical computing</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-emerald-600/20 to-green-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center"
            >
              <div className="text-5xl font-bold text-emerald-300 mb-2">∞</div>
              <div className="text-xl text-white mb-2">Possibilities</div>
              <div className="text-emerald-200 text-sm">Quantum superposition</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quantum Use Cases */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-800/50 to-purple-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">🚀 Industry Applications</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              See how quantum computing is transforming various industries and creating new opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center">💊</div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">Drug Discovery</h3>
              <p className="text-blue-200 text-sm text-center mb-4">
                Accelerate drug discovery with quantum molecular simulation and optimization.
              </p>
              <div className="text-blue-300 text-xs space-y-1">
                <div>• Molecular interaction modeling</div>
                <div>• Drug-target binding prediction</div>
                <div>• Side effect minimization</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center">🏦</div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">Financial Modeling</h3>
              <p className="text-purple-200 text-sm text-center mb-4">
                Quantum algorithms for portfolio optimization and risk assessment.
              </p>
              <div className="text-purple-300 text-xs space-y-1">
                <div>• Portfolio optimization</div>
                <div>• Risk assessment</div>
                <div>• Market prediction</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center">🌍</div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">Climate Modeling</h3>
              <p className="text-cyan-200 text-sm text-center mb-4">
                Complex climate simulations for environmental research and policy making.
              </p>
              <div className="text-cyan-300 text-xs space-y-1">
                <div>• Climate pattern analysis</div>
                <div>• Weather prediction</div>
                <div>• Environmental impact assessment</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Ready for the Quantum Revolution?</h2>
            <p className="text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join the quantum computing revolution and unlock unprecedented computational power for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Quantum Journey →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg">
                Request Quantum Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingRevolution2026;