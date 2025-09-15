import React from 'react';
import { motion } from 'framer-motion';

const NeuralInterfaceRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🧬 NEURAL INTERFACE 2025 • MIND-MACHINE FUSION
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Neural Interface Revolution
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Experience the future of human-computer interaction with direct brain-computer 
            interfaces that enable seamless thought-to-action control and enhanced cognition.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Explore Neural Tech
            </button>
            <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300 font-semibold">
              Try Neural Demo
            </button>
          </div>
        </motion.div>

        {/* Neural Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30"
          >
            <div className="text-5xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Thought Control</h3>
            <p className="text-emerald-100 text-center">
              Control devices and applications directly with your thoughts using 
              advanced neural pattern recognition technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30"
          >
            <div className="text-5xl mb-4 text-center">💭</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Memory Enhancement</h3>
            <p className="text-cyan-100 text-center">
              Augment your cognitive abilities with digital memory storage, 
              instant recall, and enhanced learning capabilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30"
          >
            <div className="text-5xl mb-4 text-center">🌐</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Neural Networking</h3>
            <p className="text-purple-100 text-center">
              Connect directly with other neural interfaces for seamless 
              communication and shared experiences.
            </p>
          </motion.div>
        </div>

        {/* Applications */}
        <div className="bg-gradient-to-r from-teal-900/50 to-emerald-900/50 rounded-3xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Neural Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-2 text-white">Medical Rehabilitation</h3>
              <p className="text-gray-300 text-sm">Restore mobility and function for patients with neurological conditions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-2 text-white">Immersive Gaming</h3>
              <p className="text-gray-300 text-sm">Experience virtual worlds with unprecedented realism and control</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-2 text-white">Professional Enhancement</h3>
              <p className="text-gray-300 text-sm">Boost productivity and creativity in professional environments</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-2 text-white">Research & Development</h3>
              <p className="text-gray-300 text-sm">Advance neuroscience research and brain-computer interface development</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Connect Your Mind to the Future</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the neural interface revolution and experience the future of human-computer 
            interaction with direct brain-computer communication.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Neural Journey
            </button>
            <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Schedule Neural Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolution2025;