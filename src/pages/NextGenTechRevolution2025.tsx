import React from 'react';
import { motion } from 'framer-motion';

const NextGenTechRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 BREAKTHROUGH TECHNOLOGY • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Next-Gen Tech Revolution 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Experience the most revolutionary technological advances that will reshape our world in 2025
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Conscious AI Systems</h3>
              <p className="text-purple-100 mb-6 text-center">
                Revolutionary AI that achieves true consciousness and self-awareness
              </p>
              <ul className="text-purple-200 space-y-2 mb-6 text-sm">
                <li>• Self-aware decision making</li>
                <li>• Emotional intelligence</li>
                <li>• Creative problem solving</li>
                <li>• Autonomous learning</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">⚛️</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Quantum Consciousness</h3>
              <p className="text-cyan-100 mb-6 text-center">
                Quantum computing that bridges the gap between mind and machine
              </p>
              <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
                <li>• Quantum neural networks</li>
                <li>• Consciousness transfer</li>
                <li>• Quantum telepathy</li>
                <li>• Mind-machine interface</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🌌</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Interdimensional Computing</h3>
              <p className="text-emerald-100 mb-6 text-center">
                Computing that transcends our current dimensional limitations
              </p>
              <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
                <li>• Multi-dimensional processing</li>
                <li>• Reality manipulation</li>
                <li>• Parallel universe access</li>
                <li>• Infinite computational power</li>
              </ul>
            </motion.div>
          </div>

          {/* Technology Showcase */}
          <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 rounded-2xl p-12 mb-16">
            <h2 className="text-4xl font-bold text-center mb-8">Revolutionary Technologies</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">🤖</div>
                  <div>
                    <h3 className="text-xl font-semibold">Autonomous AI Agents</h3>
                    <p className="text-gray-300">Self-operating AI systems that can make complex decisions independently</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">🧬</div>
                  <div>
                    <h3 className="text-xl font-semibold">Neural Interface Technology</h3>
                    <p className="text-gray-300">Direct brain-computer interfaces for seamless human-AI interaction</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">⚡</div>
                  <div>
                    <h3 className="text-xl font-semibold">Quantum Processing</h3>
                    <p className="text-gray-300">Exponentially faster computing through quantum mechanics</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">🌐</div>
                  <div>
                    <h3 className="text-xl font-semibold">Metaverse Integration</h3>
                    <p className="text-gray-300">Seamless integration between physical and virtual realities</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">🔮</div>
                  <div>
                    <h3 className="text-xl font-semibold">Predictive Analytics</h3>
                    <p className="text-gray-300">AI-powered prediction of future events with 99.9% accuracy</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">🚀</div>
                  <div>
                    <h3 className="text-xl font-semibold">Space Technology</h3>
                    <p className="text-gray-300">Advanced space exploration and colonization technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Explore the Future →
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenTechRevolution2025;