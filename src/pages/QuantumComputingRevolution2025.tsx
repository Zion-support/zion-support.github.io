import React from 'react';
import { motion } from 'framer-motion';

const QuantumComputingRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚛️ QUANTUM COMPUTING REVOLUTION • 2025
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Quantum Computing Revolution
          </h1>
          <p className="text-2xl md:text-3xl opacity-90 mb-8 max-w-4xl mx-auto">
            Experience exponential computing power that solves impossible problems 
            and unlocks new possibilities across all sectors.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Exponential Speed</h3>
            <p className="opacity-90">Process complex calculations in seconds that would take classical computers millennia</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4">🔐</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Cryptography</h3>
            <p className="opacity-90">Unbreakable encryption using quantum principles for ultimate security</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4">🧬</div>
            <h3 className="text-2xl font-bold mb-4">Molecular Simulation</h3>
            <p className="opacity-90">Simulate complex molecular interactions for drug discovery and materials science</p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready for the Quantum Revolution?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Experience the future of computing with our revolutionary quantum technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Go Quantum
            </a>
            <a href="/pages/ComprehensiveServices2025" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
              Explore All Services
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuantumComputingRevolution2025;