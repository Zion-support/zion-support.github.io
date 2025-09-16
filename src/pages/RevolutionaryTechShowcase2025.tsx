import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ REVOLUTIONARY SHOWCASE • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Interactive showcase of cutting-edge technologies that will define the future
            </p>
          </motion.div>

          {/* Interactive Demo Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30"
            >
              <div className="text-6xl mb-6 text-center">🎮</div>
              <h3 className="text-3xl font-bold mb-4 text-center">Interactive Demos</h3>
              <p className="text-blue-100 mb-6 text-lg text-center">
                Experience our revolutionary technologies through hands-on interactive demonstrations
              </p>
              <div className="space-y-4">
                <div className="bg-blue-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-200 mb-2">AI Consciousness Simulator</h4>
                  <p className="text-blue-100 text-sm">Interact with our conscious AI system in real-time</p>
                </div>
                <div className="bg-cyan-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-cyan-200 mb-2">Quantum Computing Lab</h4>
                  <p className="text-cyan-100 text-sm">Solve complex problems using quantum algorithms</p>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-200 mb-2">Neural Interface Test</h4>
                  <p className="text-purple-100 text-sm">Test direct brain-computer communication</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30"
            >
              <div className="text-6xl mb-6 text-center">⚡</div>
              <h3 className="text-3xl font-bold mb-4 text-center">Real-time Processing</h3>
              <p className="text-purple-100 mb-6 text-lg text-center">
                Witness the power of our revolutionary real-time processing capabilities
              </p>
              <div className="space-y-4">
                <div className="bg-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-200 mb-2">Live Data Streams</h4>
                  <p className="text-purple-100 text-sm">Process millions of data points in real-time</p>
                </div>
                <div className="bg-pink-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-pink-200 mb-2">Instant AI Responses</h4>
                  <p className="text-pink-100 text-sm">Get immediate AI-powered insights and solutions</p>
                </div>
                <div className="bg-indigo-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-indigo-200 mb-2">Dynamic Adaptation</h4>
                  <p className="text-indigo-100 text-sm">Systems that adapt and learn in real-time</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technology Showcase Grid */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Revolutionary Technologies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4 text-center">🤖</div>
                <h3 className="text-xl font-bold mb-3 text-center">Autonomous AI Agents</h3>
                <p className="text-emerald-100 text-center text-sm mb-4">
                  Self-operating AI systems that can make complex decisions independently
                </p>
                <div className="text-center">
                  <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-600 transition-colors">
                    Try Demo
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4 text-center">🧬</div>
                <h3 className="text-xl font-bold mb-3 text-center">Neural Interface</h3>
                <p className="text-orange-100 text-center text-sm mb-4">
                  Direct brain-computer interfaces for seamless human-AI interaction
                </p>
                <div className="text-center">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors">
                    Try Demo
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-violet-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4 text-center">⚛️</div>
                <h3 className="text-xl font-bold mb-3 text-center">Quantum Computing</h3>
                <p className="text-violet-100 text-center text-sm mb-4">
                  Exponentially faster computing through quantum mechanics
                </p>
                <div className="text-center">
                  <button className="bg-violet-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-violet-600 transition-colors">
                    Try Demo
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Live Performance Metrics */}
          <div className="bg-gradient-to-r from-blue-800/50 to-purple-800/50 rounded-2xl p-12 mb-16">
            <h2 className="text-4xl font-bold text-center mb-8">Live Performance Metrics</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-blue-200">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">10x</div>
                <div className="text-purple-200">Faster Processing</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-cyan-200">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">∞</div>
                <div className="text-pink-200">Scalability</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey →
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;