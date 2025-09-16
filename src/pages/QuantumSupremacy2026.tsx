import React from 'react';
import { motion } from 'framer-motion';

const QuantumSupremacy2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ QUANTUM SUPREMACY ACHIEVED • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Quantum Supremacy 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience exponential computing power with 1000+ qubit quantum processors solving impossible problems
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Explore Quantum Power →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                View Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quantum Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Revolutionary Quantum Capabilities</h2>
          <p className="text-xl opacity-80">Exponential processing power that solves previously impossible problems</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">1000+ Qubits</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Massive quantum processors with unprecedented computational power
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• 1000+ logical qubits</li>
              <li>• Quantum error correction</li>
              <li>• Coherence time: 100+ seconds</li>
              <li>• Gate fidelity: 99.9%</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Molecular Simulation</h3>
            <p className="text-purple-100 mb-6 text-center">
              Simulate complex molecular structures and chemical reactions in real-time
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Drug discovery acceleration</li>
              <li>• Material science breakthroughs</li>
              <li>• Chemical reaction modeling</li>
              <li>• Protein folding simulation</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🔐</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Cryptography</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Unbreakable encryption using quantum principles and entanglement
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Quantum key distribution</li>
              <li>• Unbreakable encryption</li>
              <li>• Quantum random number generation</li>
              <li>• Secure communication protocols</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Quantum Applications */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Revolutionary Applications</h2>
          <p className="text-xl opacity-80">Solving the world's most complex problems with quantum computing</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30"
          >
            <h3 className="text-2xl font-bold mb-4">Healthcare & Medicine</h3>
            <ul className="space-y-3 text-indigo-200">
              <li>• Personalized drug discovery</li>
              <li>• Cancer treatment optimization</li>
              <li>• Protein structure prediction</li>
              <li>• Genetic analysis acceleration</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-rose-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-rose-400/30"
          >
            <h3 className="text-2xl font-bold mb-4">Climate & Environment</h3>
            <ul className="space-y-3 text-rose-200">
              <li>• Climate modeling optimization</li>
              <li>• Carbon capture solutions</li>
              <li>• Renewable energy optimization</li>
              <li>• Environmental impact analysis</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30"
          >
            <h3 className="text-2xl font-bold mb-4">Finance & Economics</h3>
            <ul className="space-y-3 text-cyan-200">
              <li>• Portfolio optimization</li>
              <li>• Risk analysis acceleration</li>
              <li>• Fraud detection enhancement</li>
              <li>• Market prediction models</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30"
          >
            <h3 className="text-2xl font-bold mb-4">Artificial Intelligence</h3>
            <ul className="space-y-3 text-emerald-200">
              <li>• Quantum machine learning</li>
              <li>• Neural network optimization</li>
              <li>• Pattern recognition enhancement</li>
              <li>• AI training acceleration</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Interactive Quantum Demo */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience Quantum Computing</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Interact with our quantum computing platform and witness exponential processing power in action
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-12 py-4 rounded-lg font-bold text-xl hover:shadow-2xl transition-all duration-300"
          >
            ⚡ Launch Quantum Demo →
          </motion.div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Performance Metrics</h2>
          <p className="text-xl opacity-80">Unprecedented quantum computing performance</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-cyan-400 mb-2">1000+</div>
            <div className="text-lg opacity-80">Logical Qubits</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-purple-400 mb-2">10^18</div>
            <div className="text-lg opacity-80">Operations/Second</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-emerald-400 mb-2">99.9%</div>
            <div className="text-lg opacity-80">Gate Fidelity</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-rose-400 mb-2">100s</div>
            <div className="text-lg opacity-80">Coherence Time</div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Quantum Revolution?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the quantum computing revolution and solve impossible problems with exponential processing power
          </p>
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-12 py-4 rounded-lg font-bold text-xl hover:shadow-2xl transition-all duration-300"
            >
              Start Quantum Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-12 py-4 rounded-lg font-bold text-xl hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Contact Quantum Team
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumSupremacy2026;