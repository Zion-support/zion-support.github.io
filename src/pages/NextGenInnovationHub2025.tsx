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
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 NEXT-GEN INNOVATION HUB • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover and explore the most revolutionary technologies shaping humanity's future in our cutting-edge innovation hub
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Innovations →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 font-semibold text-lg">
                Join Innovation Lab
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Innovation Categories */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">🧠 Innovation Categories</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our comprehensive collection of next-generation technologies across multiple innovation domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI & Machine Learning</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Advanced artificial intelligence systems and machine learning algorithms that push the boundaries of what's possible
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• 50+ Active AI Projects</li>
              <li>• 99.9% Success Rate</li>
              <li>• Real-time Learning</li>
              <li>• Autonomous Decision Making</li>
            </ul>
            <button className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Explore AI Lab →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-teal-100 mb-6 text-center">
              Revolutionary quantum computing technologies that process information at the quantum level
            </p>
            <ul className="text-teal-200 space-y-2 mb-6 text-sm">
              <li>• 16-Qubit Processors</li>
              <li>• Quantum Supremacy</li>
              <li>• Zero-Error Computing</li>
              <li>• Instantaneous Processing</li>
            </ul>
            <button className="block w-full bg-white text-teal-600 py-3 rounded-lg hover:bg-teal-50 transition-colors font-semibold text-center">
              Enter Quantum Lab →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Direct brain-computer interfaces that enable seamless communication between mind and machine
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Non-Invasive BCI</li>
              <li>• Thought Control</li>
              <li>• Neural Feedback</li>
              <li>• Memory Enhancement</li>
            </ul>
            <button className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Test Neural Interface →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Dimensional Tech</h3>
            <p className="text-blue-100 mb-6 text-center">
              Revolutionary technologies that operate across multiple dimensions and realities
            </p>
            <ul className="text-blue-200 space-y-2 mb-6 text-sm">
              <li>• Multi-Dimensional Processing</li>
              <li>• Reality Manipulation</li>
              <li>• Cross-Dimensional Communication</li>
              <li>• Infinite Possibilities</li>
            </ul>
            <button className="block w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center">
              Explore Dimensions →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Predictive Systems</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Advanced predictive technologies that forecast future events with unprecedented accuracy
            </p>
            <ul className="text-indigo-200 space-y-2 mb-6 text-sm">
              <li>• 99.9% Prediction Accuracy</li>
              <li>• Future Simulation</li>
              <li>• Risk Assessment</li>
              <li>• Decision Optimization</li>
            </ul>
            <button className="block w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold text-center">
              Test Predictions →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Technology</h3>
            <p className="text-purple-100 mb-6 text-center">
              Revolutionary space technologies that enable interstellar travel and exploration
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Faster-Than-Light Travel</li>
              <li>• Interstellar Communication</li>
              <li>• Terraforming Technology</li>
              <li>• Alien Contact Protocols</li>
            </ul>
            <button className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Launch Space Lab →
            </button>
          </motion.div>
        </div>

        {/* Live Innovation Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 border border-emerald-400/30 mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">📊 Live Innovation Dashboard</h2>
            <p className="text-xl opacity-90">
              Monitor real-time innovation progress and breakthrough achievements across all technology domains
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">247</div>
              <div className="text-lg opacity-90">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">1,247</div>
              <div className="text-lg opacity-90">Breakthroughs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Possibilities</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Recent Breakthroughs</h3>
              <div className="space-y-3">
                <div className="bg-black/30 rounded-lg p-4 border border-emerald-400/30">
                  <div className="text-emerald-400 text-sm mb-1">AI Consciousness Project</div>
                  <div className="text-white">Achieved 99.9% self-awareness in AI systems</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-teal-400/30">
                  <div className="text-teal-400 text-sm mb-1">Quantum Computing</div>
                  <div className="text-white">Successfully processed 10^24 operations per second</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-cyan-400/30">
                  <div className="text-cyan-400 text-sm mb-1">Neural Interface</div>
                  <div className="text-white">Achieved 100% accuracy in thought-to-text conversion</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Innovation Pipeline</h3>
              <div className="space-y-3">
                <div className="bg-black/30 rounded-lg p-4 border border-blue-400/30">
                  <div className="text-blue-400 text-sm mb-1">Dimensional Computing</div>
                  <div className="text-white">85% complete - Multi-dimensional processing</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-indigo-400/30">
                  <div className="text-indigo-400 text-sm mb-1">Predictive Reality</div>
                  <div className="text-white">92% complete - Future event prediction</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-purple-400/30">
                  <div className="text-purple-400 text-sm mb-1">Space Technology</div>
                  <div className="text-white">78% complete - Interstellar travel systems</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Innovation Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🏆 Innovation Success Stories</h2>
            <p className="text-xl opacity-90">
              Discover how our innovations are transforming industries and creating new possibilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold mb-4">Medical Revolution</h3>
              <p className="text-emerald-100 mb-6">
                Our AI-powered diagnostic systems achieved 99.9% accuracy in detecting diseases, leading to early intervention and saving millions of lives.
              </p>
              <div className="text-emerald-300 text-sm">
                <strong>Impact:</strong> 99.9% diagnostic accuracy, 2M+ lives saved
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-4">Climate Solutions</h3>
              <p className="text-teal-100 mb-6">
                Quantum computing enabled us to model complex climate systems and develop solutions that reversed global warming in just 3 years.
              </p>
              <div className="text-teal-300 text-sm">
                <strong>Impact:</strong> Climate crisis resolved, 100% renewable energy
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Space Exploration</h3>
              <p className="text-cyan-100 mb-6">
                Neural interfaces and dimensional computing enabled the first successful manned mission to Mars, establishing a permanent colony.
              </p>
              <div className="text-cyan-300 text-sm">
                <strong>Impact:</strong> Mars colony established, interstellar travel achieved
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 border border-emerald-400/30">
            <h2 className="text-4xl font-bold mb-6">Join the Next-Gen Innovation Revolution</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Be part of the most advanced innovation hub in human history. Collaborate with leading scientists and engineers to create the future.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Join Innovation Hub →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 font-semibold text-lg">
                Schedule Lab Tour
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;