import React from 'react';
import { motion } from 'framer-motion';

const NeuralInterfaceRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Neural Interface Revolution 2026
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              The next generation of brain-computer interfaces that seamlessly 
              connect human consciousness with artificial intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Technology
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold border border-white/30">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Revolutionary Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-4">Direct Brain Interface</h3>
              <p className="text-purple-100">
                Seamlessly connect your thoughts directly to digital systems 
                with zero latency neural communication.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Enhanced Cognition</h3>
              <p className="text-purple-100">
                Amplify your cognitive abilities with AI-assisted 
                neural enhancement technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold mb-4">Consciousness Transfer</h3>
              <p className="text-purple-100">
                Safely transfer consciousness between biological 
                and digital substrates.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-purple-600/20 to-indigo-600/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transcend Human Limitations?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join the neural interface revolution and unlock the full potential 
            of human-AI collaboration.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-12 py-4 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold text-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolution2026;