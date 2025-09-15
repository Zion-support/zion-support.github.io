import React from 'react';
import { motion } from 'framer-motion';

const QuantumComputingRevolution2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ QUANTUM REVOLUTION • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Quantum Computing Revolution
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience exponential computing power with quantum technology that's solving impossible problems and unlocking new possibilities
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Quantum Solutions
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-lg">
                Watch Quantum Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quantum Capabilities Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">⚡ Revolutionary Quantum Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the unprecedented power of quantum computing and how it's transforming every industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Molecular Simulation</h3>
              <p className="text-gray-600 mb-6">
                Simulate complex molecular structures and chemical reactions with unprecedented accuracy and speed
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Drug discovery acceleration</li>
                <li>• Material science breakthroughs</li>
                <li>• Chemical reaction modeling</li>
                <li>• Protein folding prediction</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Cryptography</h3>
              <p className="text-gray-600 mb-6">
                Unbreakable encryption using quantum principles for ultimate data security and privacy protection
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Quantum key distribution</li>
                <li>• Unbreakable encryption</li>
                <li>• Secure communications</li>
                <li>• Privacy protection</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🧮</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Optimization Problems</h3>
              <p className="text-gray-600 mb-6">
                Solve complex optimization problems that would take classical computers millions of years
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Supply chain optimization</li>
                <li>• Financial portfolio management</li>
                <li>• Traffic flow optimization</li>
                <li>• Resource allocation</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Machine Learning</h3>
              <p className="text-gray-600 mb-6">
                Quantum-enhanced machine learning algorithms for faster training and better pattern recognition
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Quantum neural networks</li>
                <li>• Faster model training</li>
                <li>• Enhanced pattern recognition</li>
                <li>• Quantum feature mapping</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Internet</h3>
              <p className="text-gray-600 mb-6">
                Ultra-secure quantum communication networks enabling instant, unhackable data transmission
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Quantum entanglement</li>
                <li>• Instant communication</li>
                <li>• Quantum teleportation</li>
                <li>• Global quantum network</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🔮</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Sensing</h3>
              <p className="text-gray-600 mb-6">
                Ultra-precise quantum sensors for detecting the smallest changes in physical properties
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Gravitational wave detection</li>
                <li>• Magnetic field sensing</li>
                <li>• Temperature measurement</li>
                <li>• Time synchronization</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quantum Applications Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 Quantum Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how quantum computing is revolutionizing industries and solving previously impossible problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pharmaceuticals</h3>
              <p className="text-gray-600 text-sm">
                Accelerate drug discovery and development with quantum molecular simulation
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Finance</h3>
              <p className="text-gray-600 text-sm">
                Optimize trading strategies and risk management with quantum algorithms
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cybersecurity</h3>
              <p className="text-gray-600 text-sm">
                Implement unbreakable quantum encryption for ultimate data protection
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Climate Science</h3>
              <p className="text-gray-600 text-sm">
                Model complex climate systems and develop sustainable solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Performance Metrics */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📊 Quantum Performance Metrics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the incredible performance improvements that quantum computing delivers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-600 mb-2">10^15</div>
              <div className="text-lg text-gray-600 mb-2">Speed Improvement</div>
              <div className="text-sm text-gray-500">Over classical computers</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-lg text-gray-600 mb-2">Accuracy Rate</div>
              <div className="text-sm text-gray-500">In complex calculations</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">1000x</div>
              <div className="text-lg text-gray-600 mb-2">Faster Processing</div>
              <div className="text-sm text-gray-500">For optimization problems</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-pink-600 mb-2">∞</div>
              <div className="text-lg text-gray-600 mb-2">Security Level</div>
              <div className="text-sm text-gray-500">Unbreakable encryption</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for the Quantum Revolution?</h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            Join the quantum computing revolution and unlock unprecedented computational power for your organization
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Quantum Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantumComputingRevolution2026;