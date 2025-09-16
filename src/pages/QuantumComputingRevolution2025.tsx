import React from 'react';
import { motion } from 'framer-motion';

const QuantumComputingRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-cyan-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ QUANTUM BREAKTHROUGH 2025 • REVOLUTIONARY COMPUTING
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Quantum Computing Revolution 2025
          </h1>
          <p className="text-2xl text-cyan-200 max-w-4xl mx-auto mb-8">
            Experience the future of computing with quantum technology that solves impossible problems, 
            breaks encryption, and revolutionizes industries across the globe.
          </p>
        </motion.div>

        {/* Quantum Capabilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Quantum Supremacy</h3>
            <p className="text-cyan-200 mb-6 text-center">
              Achieve computational power that exceeds classical computers by orders of magnitude
            </p>
            <ul className="text-cyan-300 space-y-2 text-sm">
              <li>• 1000+ logical qubits</li>
              <li>• Exponential speed advantage</li>
              <li>• Complex optimization problems</li>
              <li>• Quantum advantage proven</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🔐</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Quantum Cryptography</h3>
            <p className="text-purple-200 mb-6 text-center">
              Unbreakable encryption and secure communication using quantum principles
            </p>
            <ul className="text-purple-300 space-y-2 text-sm">
              <li>• Quantum key distribution</li>
              <li>• Unhackable communication</li>
              <li>• Quantum random number generation</li>
              <li>• Post-quantum security</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Molecular Simulation</h3>
            <p className="text-emerald-200 mb-6 text-center">
              Simulate complex molecular interactions for drug discovery and materials science
            </p>
            <ul className="text-emerald-300 space-y-2 text-sm">
              <li>• Drug discovery acceleration</li>
              <li>• Materials design</li>
              <li>• Chemical reaction modeling</li>
              <li>• Protein folding simulation</li>
            </ul>
          </div>
        </motion.div>

        {/* Quantum Applications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-slate-800/50 to-cyan-800/50 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-cyan-400/30"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">🌟 Quantum Applications Revolution</h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
              Discover how quantum computing is transforming industries and solving previously impossible problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-xl p-6 border border-cyan-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">🏦 Financial Services</h3>
                <p className="text-cyan-200 mb-4">
                  Quantum algorithms for portfolio optimization, risk analysis, and high-frequency trading.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-500/30 text-cyan-200 rounded-full text-sm">Portfolio Optimization</span>
                  <span className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm">Risk Analysis</span>
                  <span className="px-3 py-1 bg-teal-500/30 text-teal-200 rounded-full text-sm">Algorithmic Trading</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-xl p-6 border border-purple-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">🧬 Healthcare & Life Sciences</h3>
                <p className="text-purple-200 mb-4">
                  Accelerating drug discovery, protein folding, and personalized medicine development.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm">Drug Discovery</span>
                  <span className="px-3 py-1 bg-pink-500/30 text-pink-200 rounded-full text-sm">Protein Folding</span>
                  <span className="px-3 py-1 bg-violet-500/30 text-violet-200 rounded-full text-sm">Personalized Medicine</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-600/30 to-teal-600/30 rounded-xl p-6 border border-emerald-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">🌍 Climate & Energy</h3>
                <p className="text-emerald-200 mb-4">
                  Optimizing renewable energy systems and modeling complex climate patterns.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-500/30 text-emerald-200 rounded-full text-sm">Energy Optimization</span>
                  <span className="px-3 py-1 bg-teal-500/30 text-teal-200 rounded-full text-sm">Climate Modeling</span>
                  <span className="px-3 py-1 bg-green-500/30 text-green-200 rounded-full text-sm">Carbon Capture</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-600/30 to-red-600/30 rounded-xl p-6 border border-orange-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">🚀 Aerospace & Defense</h3>
                <p className="text-orange-200 mb-4">
                  Advanced materials design, navigation systems, and secure communications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-500/30 text-orange-200 rounded-full text-sm">Materials Design</span>
                  <span className="px-3 py-1 bg-red-500/30 text-red-200 rounded-full text-sm">Navigation Systems</span>
                  <span className="px-3 py-1 bg-amber-500/30 text-amber-200 rounded-full text-sm">Secure Communications</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quantum Hardware Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-indigo-400/30"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">🔬 Quantum Hardware Innovation</h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              Cutting-edge quantum hardware and infrastructure powering the next generation of computing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6">⚛️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Superconducting Qubits</h3>
              <p className="text-indigo-200 mb-4">High-fidelity quantum bits with improved coherence times and error rates</p>
              <ul className="text-indigo-300 space-y-1 text-sm text-left">
                <li>• 99.9% gate fidelity</li>
                <li>• 100+ microsecond coherence</li>
                <li>• Scalable architecture</li>
                <li>• Error correction ready</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6">🔬</div>
              <h3 className="text-2xl font-bold text-white mb-4">Trapped Ion Systems</h3>
              <p className="text-indigo-200 mb-4">Ultra-stable quantum systems with exceptional control and precision</p>
              <ul className="text-indigo-300 space-y-1 text-sm text-left">
                <li>• 99.99% gate fidelity</li>
                <li>• 10+ second coherence</li>
                <li>• All-to-all connectivity</li>
                <li>• Optical qubit control</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6">💎</div>
              <h3 className="text-2xl font-bold text-white mb-4">Topological Qubits</h3>
              <p className="text-indigo-200 mb-4">Fault-tolerant quantum bits with inherent error protection</p>
              <ul className="text-indigo-300 space-y-1 text-sm text-left">
                <li>• Inherent error protection</li>
                <li>• Long coherence times</li>
                <li>• Scalable design</li>
                <li>• Fault-tolerant operation</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Quantum Software Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-purple-400/30"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">💻 Quantum Software Ecosystem</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Comprehensive software tools and frameworks for quantum algorithm development and deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-xl p-6 border border-cyan-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">🔧 Quantum Development Kits</h3>
                <p className="text-cyan-200 mb-4">
                  Complete development environments for quantum algorithm design and testing.
                </p>
                <ul className="text-cyan-300 space-y-2 text-sm">
                  <li>• Qiskit, Cirq, PennyLane integration</li>
                  <li>• Quantum circuit simulators</li>
                  <li>• Hybrid classical-quantum algorithms</li>
                  <li>• Cloud quantum computing access</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-xl p-6 border border-purple-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">🧮 Quantum Algorithms Library</h3>
                <p className="text-purple-200 mb-4">
                  Pre-built quantum algorithms for common optimization and simulation problems.
                </p>
                <ul className="text-purple-300 space-y-2 text-sm">
                  <li>• QAOA for optimization</li>
                  <li>• VQE for chemistry</li>
                  <li>• Quantum machine learning</li>
                  <li>• Quantum cryptography protocols</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-600/30 to-teal-600/30 rounded-xl p-6 border border-emerald-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">☁️ Quantum Cloud Platform</h3>
                <p className="text-emerald-200 mb-4">
                  Access to quantum computers through secure cloud infrastructure.
                </p>
                <ul className="text-emerald-300 space-y-2 text-sm">
                  <li>• Multi-cloud quantum access</li>
                  <li>• Real-time job scheduling</li>
                  <li>• Quantum error mitigation</li>
                  <li>• Hybrid classical-quantum workflows</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-600/30 to-red-600/30 rounded-xl p-6 border border-orange-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">🔍 Quantum Error Correction</h3>
                <p className="text-orange-200 mb-4">
                  Advanced error correction techniques for reliable quantum computation.
                </p>
                <ul className="text-orange-300 space-y-2 text-sm">
                  <li>• Surface code implementation</li>
                  <li>• Logical qubit encoding</li>
                  <li>• Error syndrome detection</li>
                  <li>• Fault-tolerant operations</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Enter the Quantum Era?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join the quantum revolution and unlock unprecedented computational power for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-cyan-50 transition-colors">
                Start Quantum Journey →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-cyan-600 transition-colors">
                Explore Quantum Solutions
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuantumComputingRevolution2025;
