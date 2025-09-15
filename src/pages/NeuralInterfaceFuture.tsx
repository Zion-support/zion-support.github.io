import React from 'react';
import { motion } from 'framer-motion';

const NeuralInterfaceFuture: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧬 NEURAL INTERFACE FUTURE • 2025
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Neural Interface Future
          </h1>
          <p className="text-2xl md:text-3xl opacity-90 mb-8 max-w-4xl mx-auto">
            Explore the future of neural interfaces and brain-computer communication 
            that will revolutionize human-computer interaction.
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
            <div className="text-6xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4">Non-Invasive BCI</h3>
            <p className="opacity-90">Advanced brain-computer interfaces that don't require surgery</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Thought Control</h3>
            <p className="opacity-90">Control devices and applications with your thoughts</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4">Neural Feedback</h3>
            <p className="opacity-90">Real-time feedback and enhancement of cognitive abilities</p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready for the Neural Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Experience the future of human-computer interaction with neural interfaces
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore Neural Future
            </a>
            <a href="/pages/ComprehensiveServices2025" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Explore All Services
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NeuralInterfaceFuture;