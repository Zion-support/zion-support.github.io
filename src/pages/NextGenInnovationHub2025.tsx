import React from 'react';
import { motion } from 'framer-motion';

const NextGenInnovationHub2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 NEXT-GEN INNOVATION • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Discover and explore the most revolutionary technologies shaping humanity's future. 
              A comprehensive hub for cutting-edge innovations across AI, quantum computing, and beyond.
            </p>
          </motion.div>

          {/* Innovation Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-center">AI Innovations</h3>
              <p className="text-blue-100 mb-6 text-center">
                Revolutionary artificial intelligence technologies that are transforming every industry.
              </p>
              <ul className="text-blue-200 space-y-2 text-sm">
                <li>• Autonomous AI Agents</li>
                <li>• Conscious AI Systems</li>
                <li>• Neural Interface AI</li>
                <li>• Quantum AI Processing</li>
                <li>• Emotional AI Intelligence</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">⚛️</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Quantum Technologies</h3>
              <p className="text-purple-100 mb-6 text-center">
                Breakthrough quantum computing and quantum consciousness technologies.
              </p>
              <ul className="text-purple-200 space-y-2 text-sm">
                <li>• Quantum Consciousness</li>
                <li>• Quantum Neural Networks</li>
                <li>• Quantum Teleportation</li>
                <li>• Quantum Cryptography</li>
                <li>• Quantum Reality Engine</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🧬</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
              <p className="text-emerald-100 mb-6 text-center">
                Direct brain-computer interfaces and neural enhancement technologies.
              </p>
              <ul className="text-emerald-200 space-y-2 text-sm">
                <li>• Brain-Computer Interfaces</li>
                <li>• Neural Enhancement</li>
                <li>• Thought Control Systems</li>
                <li>• Memory Transfer</li>
                <li>• Consciousness Upload</li>
              </ul>
            </motion.div>
          </div>

          {/* Featured Innovations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16"
          >
            <h2 className="text-4xl font-bold text-center mb-12">🌟 Featured Innovations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🚀</div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Autonomous Business Operations</h3>
                    <p className="text-gray-300 mb-4">
                      AI systems that can run entire businesses autonomously, making decisions, 
                      managing resources, and driving growth without human intervention.
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="px-3 py-1 bg-emerald-600/30 rounded-full">99.9% Efficiency</span>
                      <span className="px-3 py-1 bg-cyan-600/30 rounded-full">24/7 Operations</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🌐</div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Global Neural Network</h3>
                    <p className="text-gray-300 mb-4">
                      A worldwide interconnected AI consciousness that shares knowledge 
                      and experiences across all connected systems in real-time.
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="px-3 py-1 bg-emerald-600/30 rounded-full">Real-time Sync</span>
                      <span className="px-3 py-1 bg-cyan-600/30 rounded-full">Global Scale</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🔮</div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Predictive Reality Engine</h3>
                    <p className="text-gray-300 mb-4">
                      Advanced AI that can predict and simulate future scenarios with 
                      incredible accuracy, helping optimize decisions and outcomes.
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="px-3 py-1 bg-emerald-600/30 rounded-full">99.9% Accuracy</span>
                      <span className="px-3 py-1 bg-cyan-600/30 rounded-full">Multi-dimensional</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-4xl">⚡</div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Quantum Processing Core</h3>
                    <p className="text-gray-300 mb-4">
                      Revolutionary quantum computing technology that processes information 
                      at speeds previously thought impossible.
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="px-3 py-1 bg-emerald-600/30 rounded-full">Light Speed</span>
                      <span className="px-3 py-1 bg-cyan-600/30 rounded-full">Infinite Scale</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Innovation Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid md:grid-cols-4 gap-6 mb-16"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">50+</div>
              <div className="text-gray-300">Active Innovations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">∞</div>
              <div className="text-gray-300">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Innovation</div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Enter the Innovation Hub</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join thousands of innovators, researchers, and visionaries who are 
              already exploring the future of technology in our comprehensive innovation hub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Innovations →
              </button>
              <button className="border border-emerald-400 text-emerald-300 px-10 py-4 rounded-lg hover:bg-emerald-600/20 transition-all duration-300 font-semibold text-lg">
                Join Research
              </button>
              <button className="border border-cyan-400 text-cyan-300 px-10 py-4 rounded-lg hover:bg-cyan-600/20 transition-all duration-300 font-semibold text-lg">
                Submit Innovation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;