import React from 'react';
import { motion } from 'framer-motion';

const NextGenInnovationHub2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 NEXT-GEN INNOVATION HUB 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              The world's most advanced innovation laboratory where cutting-edge technologies 
              converge to create the future of human civilization
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl">
                🔬 Explore Lab →
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-bold text-xl">
                📊 View Research
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Innovation Categories */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">🔬 Innovation Categories</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our cutting-edge research and development across multiple technology domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* AI Research Lab */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI Research Lab</h3>
            <p className="text-blue-100 mb-6 text-center">
              Advanced artificial intelligence research and development
            </p>
            <ul className="text-blue-200 space-y-2 mb-6 text-sm">
              <li>• Machine Learning Algorithms</li>
              <li>• Neural Network Architecture</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision Systems</li>
              <li>• Autonomous Systems</li>
            </ul>
            <button className="block w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center">
              Explore AI Lab →
            </button>
          </motion.div>

          {/* Quantum Computing Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing Center</h3>
            <p className="text-purple-100 mb-6 text-center">
              Revolutionary quantum computing research and applications
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Quantum Algorithms</li>
              <li>• Quantum Error Correction</li>
              <li>• Quantum Cryptography</li>
              <li>• Quantum Simulation</li>
              <li>• Quantum Machine Learning</li>
            </ul>
            <button className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Enter Quantum Center →
            </button>
          </motion.div>

          {/* Neural Interface Lab */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interface Lab</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Brain-computer interface research and development
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Non-invasive BCI Technology</li>
              <li>• Neural Signal Processing</li>
              <li>• Brain-Computer Communication</li>
              <li>• Medical Applications</li>
              <li>• Cognitive Enhancement</li>
            </ul>
            <button className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Explore Neural Lab →
            </button>
          </motion.div>

          {/* Space Technology Lab */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Technology Lab</h3>
            <p className="text-orange-100 mb-6 text-center">
              Advanced space exploration and colonization research
            </p>
            <ul className="text-orange-200 space-y-2 mb-6 text-sm">
              <li>• Propulsion Systems</li>
              <li>• Life Support Systems</li>
              <li>• Space Habitats</li>
              <li>• Asteroid Mining</li>
              <li>• Terraforming Technology</li>
            </ul>
            <button className="block w-full bg-white text-orange-600 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-center">
              Enter Space Lab →
            </button>
          </motion.div>

          {/* Biotechnology Lab */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-8 border border-green-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Biotechnology Lab</h3>
            <p className="text-green-100 mb-6 text-center">
              Revolutionary biotechnology and life sciences research
            </p>
            <ul className="text-green-200 space-y-2 mb-6 text-sm">
              <li>• Gene Editing Technology</li>
              <li>• Regenerative Medicine</li>
              <li>• Synthetic Biology</li>
              <li>• Longevity Research</li>
              <li>• Human Enhancement</li>
            </ul>
            <button className="block w-full bg-white text-green-600 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold text-center">
              Explore Bio Lab →
            </button>
          </motion.div>

          {/* Cybersecurity Lab */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-red-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-red-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🛡️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Cybersecurity Lab</h3>
            <p className="text-red-100 mb-6 text-center">
              Advanced cybersecurity and digital protection research
            </p>
            <ul className="text-red-200 space-y-2 mb-6 text-sm">
              <li>• Quantum Cryptography</li>
              <li>• AI-Powered Security</li>
              <li>• Zero-Trust Architecture</li>
              <li>• Threat Intelligence</li>
              <li>• Privacy Protection</li>
            </ul>
            <button className="block w-full bg-white text-red-600 py-3 rounded-lg hover:bg-red-50 transition-colors font-semibold text-center">
              Enter Security Lab →
            </button>
          </motion.div>
        </div>

        {/* Research Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8">📊 Research Statistics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-lg">Active Research Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">150+</div>
              <div className="text-lg">Patent Applications</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-pink-400 mb-2">50+</div>
              <div className="text-lg">Breakthrough Technologies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold text-green-400 mb-2">1000+</div>
              <div className="text-lg">Research Publications</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Join Our Innovation Journey</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the next generation of technological innovation. Collaborate with us to shape the future.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-12 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl">
              🔬 Join Research Team →
            </button>
            <button className="border-2 border-white text-white px-12 py-5 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-bold text-xl">
              📧 Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2026;