import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTech2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 REVOLUTIONARY BREAKTHROUGH • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Technology 2026
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Experience the future with our groundbreaking technologies that are reshaping industries and transforming human capabilities
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Technologies →
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Revolutionary Technologies Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Revolutionary Technologies</h2>
          <p className="text-xl text-gray-300">Discover the technologies that will define the next decade</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI Consciousness */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-4">AI Consciousness</h3>
            <p className="text-gray-300 mb-6">
              Artificial intelligence with genuine consciousness, emotional intelligence, and self-awareness capabilities
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Emotional Intelligence
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Self-Awareness
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Creative Problem Solving
              </li>
            </ul>
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
              Learn More →
            </button>
          </motion.div>

          {/* Quantum Consciousness */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Consciousness</h3>
            <p className="text-gray-300 mb-6">
              The convergence of quantum computing and consciousness, enabling unprecedented computational power
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Quantum Supremacy
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Consciousness Computing
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Parallel Universes
              </li>
            </ul>
            <button className="w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition-colors font-semibold">
              Explore Quantum →
            </button>
          </motion.div>

          {/* Neural Interface */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4">🧬</div>
            <h3 className="text-2xl font-bold text-white mb-4">Neural Interface</h3>
            <p className="text-gray-300 mb-6">
              Direct brain-computer interfaces enabling thought-based control and enhanced cognitive capabilities
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                Thought Control
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                Memory Enhancement
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                Telepathic Communication
              </li>
            </ul>
            <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold">
              Experience Neural →
            </button>
          </motion.div>

          {/* Synthetic Biology */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4">🧪</div>
            <h3 className="text-2xl font-bold text-white mb-4">Synthetic Biology</h3>
            <p className="text-gray-300 mb-6">
              Engineering biological systems for medical breakthroughs and sustainable solutions
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                Custom Organisms
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                Disease Treatment
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                Environmental Solutions
              </li>
            </ul>
            <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
              Discover Biology →
            </button>
          </motion.div>

          {/* Space Technology */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-4">Space Technology</h3>
            <p className="text-gray-300 mb-6">
              Advanced space exploration technologies enabling interplanetary travel and colonization
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                Interplanetary Travel
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                Space Colonization
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                Asteroid Mining
              </li>
            </ul>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
              Launch Space →
            </button>
          </motion.div>

          {/* Meta Reality */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-pink-600/20 to-rose-600/20 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4">🌐</div>
            <h3 className="text-2xl font-bold text-white mb-4">Meta Reality</h3>
            <p className="text-gray-300 mb-6">
              Blending physical and digital realities for immersive experiences and virtual worlds
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                Virtual Worlds
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                Augmented Reality
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                Digital Twins
              </li>
            </ul>
            <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors font-semibold">
              Enter Meta →
            </button>
          </motion.div>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Revolutionary Impact</h2>
            <p className="text-xl text-gray-300">The numbers that define our technological revolution</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-purple-400 mb-2">500%</div>
              <div className="text-gray-300 text-lg">Productivity Increase</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-lg">Accuracy Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-emerald-400 mb-2">1M+</div>
              <div className="text-gray-300 text-lg">Lives Transformed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300 text-lg">Continuous Innovation</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in shaping the future with revolutionary technologies that will transform industries and enhance human capabilities
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey →
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTech2026;