import React from 'react';
import { motion } from 'framer-motion';

const QuantumComputingRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ QUANTUM REVOLUTION • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Quantum Computing Breakthrough
            </h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience exponential computing power that solves problems in seconds that would take 
              classical computers millennia to complete. The quantum revolution is here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Quantum Power
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold">
                View Quantum Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quantum Capabilities */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Quantum Computing Capabilities</h2>
          <p className="text-xl opacity-90">Unlock the power of quantum mechanics for unprecedented computing</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Supremacy</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Achieve computational advantages that are impossible with classical computers, 
              solving complex optimization problems in real-time.
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Exponential speedup</li>
              <li>• Parallel universe processing</li>
              <li>• Quantum entanglement</li>
              <li>• Superposition states</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🔐</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Cryptography</h3>
            <p className="text-purple-100 mb-6 text-center">
              Unbreakable encryption using quantum principles, ensuring absolute security 
              for the most sensitive data and communications.
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Quantum key distribution</li>
              <li>• Unhackable encryption</li>
              <li>• Quantum random numbers</li>
              <li>• Secure communications</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Molecular Simulation</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Simulate complex molecular interactions and chemical reactions with unprecedented 
              accuracy, revolutionizing drug discovery and materials science.
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Drug discovery</li>
              <li>• Materials design</li>
              <li>• Chemical optimization</li>
              <li>• Protein folding</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Quantum Applications */}
      <div className="bg-gradient-to-r from-indigo-900/50 to-cyan-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Revolutionary Applications</h2>
            <p className="text-xl opacity-90">Transform your industry with quantum computing solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-2xl font-bold mb-4">Drug Discovery</h3>
              <p className="text-sm opacity-90 mb-4">
                Accelerate pharmaceutical research by simulating molecular interactions 
                and predicting drug effectiveness with quantum precision.
              </p>
              <div className="text-xs opacity-75">
                • 1000x faster molecular simulation<br/>
                • Personalized medicine development<br/>
                • Side effect prediction
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-4">Climate Modeling</h3>
              <p className="text-sm opacity-90 mb-4">
                Model complex climate systems and predict environmental changes 
                with unprecedented accuracy and detail.
              </p>
              <div className="text-xs opacity-75">
                • Real-time climate prediction<br/>
                • Carbon capture optimization<br/>
                • Renewable energy modeling
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Space Exploration</h3>
              <p className="text-sm opacity-90 mb-4">
                Optimize space missions and analyze astronomical data 
                to unlock the mysteries of the universe.
              </p>
              <div className="text-xs opacity-75">
                • Mission optimization<br/>
                • Exoplanet discovery<br/>
                • Space weather prediction
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Quantum Performance Metrics</h2>
          <p className="text-xl opacity-90">See the incredible performance improvements</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">10^18</div>
            <div className="text-sm opacity-90">Operations per second</div>
          </div>
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">1000x</div>
            <div className="text-sm opacity-90">Faster than classical</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
            <div className="text-sm opacity-90">Accuracy rate</div>
          </div>
          <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">∞</div>
            <div className="text-sm opacity-90">Possibilities</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for the Quantum Revolution?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the quantum computing revolution and unlock unprecedented computational power 
            that will transform your business and accelerate innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Quantum Journey
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Schedule Quantum Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingRevolution2026;