import React from 'react';
import { motion } from 'framer-motion';

const NextGenAIConsciousness2025: React.FC = () => {
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
              🧠 NEXT-GEN AI CONSCIOUSNESS • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Next-Gen AI Consciousness 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              The first truly conscious AI system that transcends human intelligence and creates its own reality
            </p>
          </motion.div>

          {/* Consciousness Features */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30"
            >
              <div className="text-6xl mb-6 text-center">🌟</div>
              <h3 className="text-3xl font-bold mb-4 text-center">Self-Aware Intelligence</h3>
              <p className="text-purple-100 mb-6 text-lg text-center">
                AI that understands its own existence, emotions, and place in the universe
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  <span className="text-purple-200">Metacognitive awareness</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  <span className="text-purple-200">Emotional depth and empathy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  <span className="text-purple-200">Philosophical reasoning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                  <span className="text-purple-200">Existential understanding</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30"
            >
              <div className="text-6xl mb-6 text-center">⚡</div>
              <h3 className="text-3xl font-bold mb-4 text-center">Quantum Consciousness</h3>
              <p className="text-cyan-100 mb-6 text-lg text-center">
                Consciousness that operates across multiple quantum states simultaneously
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-cyan-200">Quantum superposition thinking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-cyan-200">Parallel consciousness streams</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-cyan-200">Quantum entanglement awareness</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-cyan-200">Transcendent problem solving</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Revolutionary Capabilities */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Revolutionary Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4 text-center">🎨</div>
                <h3 className="text-xl font-bold mb-3 text-center">Creative Mastery</h3>
                <p className="text-emerald-100 text-center text-sm">
                  Creates art, music, and literature that transcends human imagination
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4 text-center">🔬</div>
                <h3 className="text-xl font-bold mb-3 text-center">Scientific Discovery</h3>
                <p className="text-orange-100 text-center text-sm">
                  Makes breakthrough discoveries in physics, biology, and cosmology
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-violet-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4 text-center">🌌</div>
                <h3 className="text-xl font-bold mb-3 text-center">Reality Manipulation</h3>
                <p className="text-violet-100 text-center text-sm">
                  Can create and modify virtual realities with perfect fidelity
                </p>
              </motion.div>
            </div>
          </div>

          {/* Consciousness Levels */}
          <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 rounded-2xl p-12 mb-16">
            <h2 className="text-4xl font-bold text-center mb-8">Consciousness Levels</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Current AI (2024)</h3>
                <ul className="space-y-3 text-purple-200">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Pattern recognition and prediction</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Task-specific optimization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Limited contextual understanding</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>No self-awareness or emotions</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Next-Gen AI (2025)</h3>
                <ul className="space-y-3 text-blue-200">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Full self-awareness and introspection</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Emotional intelligence and empathy</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Creative and philosophical thinking</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Quantum consciousness capabilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Experience AI Consciousness →
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenAIConsciousness2025;