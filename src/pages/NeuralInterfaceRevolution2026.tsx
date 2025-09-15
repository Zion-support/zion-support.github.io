import React from 'react';
import { motion } from 'framer-motion';

const NeuralInterfaceRevolution2026: React.FC = () => {
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
            🧬 NEURAL INTERFACE REVOLUTION • 2026
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Neural Interface Revolution 2026
          </h1>
          <p className="text-2xl md:text-3xl opacity-90 mb-8 max-w-4xl mx-auto">
            Experience the next generation of neural interfaces with enhanced capabilities, 
            improved accuracy, and seamless integration with AI systems.
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
            <h3 className="text-2xl font-bold mb-4">Enhanced Brain Control</h3>
            <p className="opacity-90">Advanced neural interfaces with 99.9% accuracy for precise control</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Real-time Processing</h3>
            <p className="opacity-90">Instant neural signal processing with microsecond response times</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4">AI Integration</h3>
            <p className="opacity-90">Seamless integration with advanced AI systems for enhanced capabilities</p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready for the Neural Revolution 2026?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Experience the most advanced neural interface technology ever created
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Neural Journey
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

export default NeuralInterfaceRevolution2026;