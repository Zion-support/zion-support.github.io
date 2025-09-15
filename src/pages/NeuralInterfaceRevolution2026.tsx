import React from 'react';
import { motion } from 'framer-motion';

const NeuralInterfaceRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-white mb-6">
            Neural Interface Revolution 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Experience the future of human-computer interaction with revolutionary neural interface technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">🧠 Direct Brain Interface</h3>
            <p className="text-gray-300">
              Connect your mind directly to digital systems for unprecedented control and interaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">⚡ Real-time Processing</h3>
            <p className="text-gray-300">
              Experience instant neural feedback with ultra-low latency processing capabilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">🔮 Future Applications</h3>
            <p className="text-gray-300">
              From medical rehabilitation to enhanced learning and creative expression.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolution2026;