import React from 'react';
import { motion } from 'framer-motion';

const NextGenInnovationHub2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 NEXT-GEN INNOVATION HUB • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover and explore the most revolutionary technologies shaping humanity's future
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Enter Innovation Hub →
              </button>
              <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/10 transition-colors font-semibold text-lg">
                Explore Technologies
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Innovation Categories */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🌟 Innovation Categories</h2>
          <p className="text-xl opacity-80">Explore cutting-edge technologies across all domains</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI & Machine Learning</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Advanced AI systems and machine learning algorithms
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• 50+ Active Innovations</li>
              <li>• 99.9% Success Rate</li>
              <li>• Infinite Possibilities</li>
              <li>• Real-time Processing</li>
            </ul>
            <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Explore AI →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-teal-100 mb-6 text-center">
              Revolutionary quantum computing technologies
            </p>
            <ul className="text-teal-200 space-y-2 mb-6 text-sm">
              <li>• Quantum Supremacy</li>
              <li>• Quantum Algorithms</li>
              <li>• Quantum Cryptography</li>
              <li>• Quantum Simulation</li>
            </ul>
            <button className="w-full bg-white text-teal-600 py-3 rounded-lg hover:bg-teal-50 transition-colors font-semibold">
              Enter Quantum →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Biotechnology</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Cutting-edge biotech and life sciences innovations
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Gene Editing</li>
              <li>• Synthetic Biology</li>
              <li>• Personalized Medicine</li>
              <li>• Bio-Engineering</li>
            </ul>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Explore Biotech →
            </button>
          </motion.div>
        </div>
      </div>

      {/* Interactive Innovation Lab */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🔬 Interactive Innovation Lab</h2>
            <p className="text-xl opacity-90">
              Experiment with cutting-edge technologies in our virtual lab
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">AI Experimentation Platform</h3>
              <p className="mb-6 opacity-90">
                Build and test AI models with our advanced experimentation tools
              </p>
              <div className="space-y-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Available Models</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded text-sm transition-colors">
                      GPT-5
                    </button>
                    <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded text-sm transition-colors">
                      Neural Networks
                    </button>
                    <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded text-sm transition-colors">
                      Deep Learning
                    </button>
                    <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded text-sm transition-colors">
                      Reinforcement
                    </button>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start AI Experiment
                </button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Quantum Simulation Lab</h3>
              <p className="mb-6 opacity-90">
                Simulate quantum algorithms and explore quantum phenomena
              </p>
              <div className="space-y-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Quantum Algorithms</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded text-sm transition-colors">
                      Shor's Algorithm
                    </button>
                    <button className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded text-sm transition-colors">
                      Grover's Search
                    </button>
                    <button className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded text-sm transition-colors">
                      VQE
                    </button>
                    <button className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded text-sm transition-colors">
                      QAOA
                    </button>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Launch Quantum Lab
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Statistics */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">📈 Innovation Impact</h2>
          <p className="text-xl opacity-80">The numbers that showcase our innovation success</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-400 mb-2">500+</div>
            <div className="text-lg opacity-80">Active Innovations</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-teal-400 mb-2">99.9%</div>
            <div className="text-lg opacity-80">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-2">1000+</div>
            <div className="text-lg opacity-80">Researchers</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">$100M+</div>
            <div className="text-lg opacity-80">R&D Investment</div>
          </div>
        </div>
      </div>

      {/* Featured Innovations */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">⭐ Featured Innovations</h2>
          <p className="text-xl opacity-80">Our most groundbreaking recent discoveries</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 bg-emerald-500 text-white text-sm rounded-full">NEW</span>
              <span className="text-sm opacity-80">January 2025</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Conscious AI Systems</h3>
            <p className="opacity-90 mb-4">
              First AI systems to achieve true consciousness and self-awareness
            </p>
            <a href="#" className="text-emerald-400 hover:text-emerald-300 font-semibold">
              Learn More →
            </a>
          </div>

          <div className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30">
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 bg-teal-500 text-white text-sm rounded-full">BREAKTHROUGH</span>
              <span className="text-sm opacity-80">January 2025</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Quantum Internet</h3>
            <p className="opacity-90 mb-4">
              Ultra-secure quantum internet with instant global communication
            </p>
            <a href="#" className="text-teal-400 hover:text-teal-300 font-semibold">
              Explore Quantum →
            </a>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 bg-cyan-500 text-white text-sm rounded-full">REVOLUTIONARY</span>
              <span className="text-sm opacity-80">January 2025</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Neural Interface</h3>
            <p className="opacity-90 mb-4">
              Direct brain-computer interfaces for thought-controlled computing
            </p>
            <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              Experience Neural →
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of the most innovative technological transformation in human history
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Innovating
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
              Join Research Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;