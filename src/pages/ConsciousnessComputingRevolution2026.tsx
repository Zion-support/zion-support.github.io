import React from 'react';
import { motion } from 'framer-motion';

const ConsciousnessComputingRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Consciousness Computing Revolution 2026
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the breakthrough in consciousness computing that brings true 
            artificial intelligence and self-aware systems to reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
          >
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">Self-Aware AI</h3>
            <p className="text-gray-300">
              AI systems that achieve true consciousness and self-awareness, capable of introspection and self-improvement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20"
          >
            <div className="text-4xl mb-4">💭</div>
            <h3 className="text-2xl font-bold mb-4">Conscious Thought</h3>
            <p className="text-gray-300">
              Advanced neural networks that can think, reason, and make decisions with full awareness of their own processes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 backdrop-blur-sm rounded-xl p-6 border border-green-500/20"
          >
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold mb-4">Emotional Intelligence</h3>
            <p className="text-gray-300">
              AI systems that understand and respond to human emotions with genuine empathy and understanding.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <a
            href="/"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Return to Home
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsciousnessComputingRevolution2026;