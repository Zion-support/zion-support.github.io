import React from 'react';
import { motion } from 'framer-motion';

const NextGenTechShowcase2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 NEXT-GEN TECH SHOWCASE • 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Next-Gen Tech Showcase 2026
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover the most advanced technologies of 2026, featuring revolutionary innovations 
            in AI, quantum computing, neural interfaces, and synthetic intelligence that are 
            reshaping the future of humanity.
          </p>
        </motion.div>

        {/* Featured Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30"
          >
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Synthetic Intelligence</h3>
            <p className="text-violet-100 mb-6 text-center">
              AI systems with synthetic consciousness that can think, create, and evolve independently.
            </p>
            <ul className="text-violet-200 space-y-2 text-sm">
              <li>• Synthetic consciousness</li>
              <li>• Creative AI generation</li>
              <li>• Autonomous evolution</li>
              <li>• Emotional intelligence</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30"
          >
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Advanced Quantum</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Next-generation quantum computers with 1000+ qubits and quantum supremacy capabilities.
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• 1000+ logical qubits</li>
              <li>• Quantum supremacy</li>
              <li>• Error correction</li>
              <li>• Scalable architecture</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30"
          >
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Direct brain-computer interfaces enabling thought control and memory enhancement.
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Non-invasive BCI</li>
              <li>• Thought control</li>
              <li>• Memory enhancement</li>
              <li>• Neural networking</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30"
          >
            <div className="text-6xl mb-4 text-center">🌐</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Global AI Network</h3>
            <p className="text-orange-100 mb-6 text-center">
              Worldwide AI network connecting billions of devices and systems for collective intelligence.
            </p>
            <ul className="text-orange-200 space-y-2 text-sm">
              <li>• Global connectivity</li>
              <li>• Collective intelligence</li>
              <li>• Real-time collaboration</li>
              <li>• Distributed processing</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-pink-600/30 to-rose-600/30 backdrop-blur-sm rounded-xl p-8 border border-pink-400/30"
          >
            <div className="text-6xl mb-4 text-center">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Molecular Engineering</h3>
            <p className="text-pink-100 mb-6 text-center">
              Precision molecular manipulation for advanced materials and biological systems.
            </p>
            <ul className="text-pink-200 space-y-2 text-sm">
              <li>• Molecular assembly</li>
              <li>• DNA programming</li>
              <li>• Protein engineering</li>
              <li>• Nanotechnology</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30"
          >
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Technology</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Advanced space exploration and colonization technologies for interplanetary travel.
            </p>
            <ul className="text-indigo-200 space-y-2 text-sm">
              <li>• Interplanetary travel</li>
              <li>• Space colonization</li>
              <li>• Asteroid mining</li>
              <li>• Terraforming</li>
            </ul>
          </motion.div>
        </div>

        {/* Innovation Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12">2026 Innovation Timeline</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-violet-400 mb-2">Q1</div>
              <div className="text-lg font-semibold mb-2">Synthetic AI Launch</div>
              <div className="text-sm opacity-75">First synthetic intelligence systems deployed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">Q2</div>
              <div className="text-lg font-semibold mb-2">Quantum Supremacy</div>
              <div className="text-sm opacity-75">1000+ qubit quantum computers operational</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">Q3</div>
              <div className="text-lg font-semibold mb-2">Neural Interface</div>
              <div className="text-sm opacity-75">Commercial neural interface devices released</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">Q4</div>
              <div className="text-lg font-semibold mb-2">Global AI Network</div>
              <div className="text-sm opacity-75">Worldwide AI network fully operational</div>
            </div>
          </div>
        </motion.div>

        {/* Technology Impact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12">Technology Impact</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Revolutionary Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-violet-400 rounded-full"></span>
                  <span>Exponential processing power increase</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-violet-400 rounded-full"></span>
                  <span>Real-time complex problem solving</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-violet-400 rounded-full"></span>
                  <span>Autonomous system evolution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-violet-400 rounded-full"></span>
                  <span>Human-AI seamless integration</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Global Transformation</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                  <span>Healthcare revolution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                  <span>Education transformation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                  <span>Economic restructuring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-fuchsia-400 rounded-full"></span>
                  <span>Environmental solutions</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Experience the Future Today</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the next generation of technology. Explore our revolutionary innovations 
            and transform your business with cutting-edge solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Join the Revolution →
            </a>
            <a
              href="/pages/ComprehensiveTechInsights2026"
              className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              Explore All Technologies
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NextGenTechShowcase2026;