import React from 'react';
import { motion } from 'framer-motion';

const QuantumComputingRevolution2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white text-sm font-bold mb-6 animate-pulse">
              ⚡ QUANTUM BREAKTHROUGH • 2025
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Quantum Computing Revolution 2025
            </h1>
            <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Experience the future of computing with quantum technology that solves impossible problems and unlocks exponential computational power.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quantum Advantages Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">⚛️ Quantum Computing Advantages</h2>
            <p className="text-xl text-gray-600">Unlock exponential computational power</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Exponential Speed</h3>
              <p className="text-gray-600 mb-6">
                Process complex calculations millions of times faster than classical computers.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Parallel processing</li>
                <li>• Quantum superposition</li>
                <li>• Massive scalability</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold mb-4">Quantum Cryptography</h3>
              <p className="text-gray-600 mb-6">
                Unbreakable encryption using quantum principles for ultimate security.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Quantum key distribution</li>
                <li>• Unhackable communication</li>
                <li>• Future-proof security</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">🧬</div>
              <h3 className="text-2xl font-bold mb-4">Molecular Simulation</h3>
              <p className="text-gray-600 mb-6">
                Simulate complex molecular interactions for drug discovery and materials science.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Drug discovery</li>
                <li>• Materials design</li>
                <li>• Chemical modeling</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quantum Applications */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🔬 Quantum Applications</h2>
            <p className="text-xl text-gray-600">Revolutionary use cases across industries</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl">💊</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Healthcare & Pharmaceuticals</h3>
                  <p className="text-gray-600">Accelerate drug discovery and personalized medicine development</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white text-xl">🌱</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Climate & Environment</h3>
                  <p className="text-gray-600">Optimize renewable energy systems and climate modeling</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xl">🏦</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Finance & Banking</h3>
                  <p className="text-gray-600">Advanced risk analysis and portfolio optimization</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white text-xl">🔬</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Scientific Research</h3>
                  <p className="text-gray-600">Breakthrough discoveries in physics and chemistry</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xl">🤖</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">AI & Machine Learning</h3>
                  <p className="text-gray-600">Quantum-enhanced algorithms and neural networks</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-xl">🌐</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Cybersecurity</h3>
                  <p className="text-gray-600">Next-generation encryption and threat detection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Technology Stack */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">⚙️ Quantum Technology Stack</h2>
            <p className="text-xl opacity-90">Complete quantum computing infrastructure</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">🔧</div>
              <h3 className="text-xl font-bold mb-2">Quantum Hardware</h3>
              <p className="text-cyan-100">State-of-the-art quantum processors and cooling systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">💻</div>
              <h3 className="text-xl font-bold mb-2">Quantum Software</h3>
              <p className="text-cyan-100">Advanced algorithms and development frameworks</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">☁️</div>
              <h3 className="text-xl font-bold mb-2">Quantum Cloud</h3>
              <p className="text-cyan-100">Scalable quantum computing as a service</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">🔒</div>
              <h3 className="text-xl font-bold mb-2">Quantum Security</h3>
              <p className="text-cyan-100">Quantum-safe encryption and communication</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📈 Quantum Performance Metrics</h2>
            <p className="text-xl text-gray-600">Measurable quantum advantage</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-cyan-600 mb-2">10^15</div>
              <div className="text-lg text-gray-600">Operations per Second</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-lg text-gray-600">Accuracy Rate</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-purple-600 mb-2">1000x</div>
              <div className="text-lg text-gray-600">Speed Improvement</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-lg text-gray-600">Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Harness Quantum Power?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join the quantum revolution and unlock unprecedented computational capabilities for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-all duration-300 font-semibold text-lg"
            >
              Start Quantum Journey
            </a>
            <a
              href="/pages/ComprehensiveServices2025"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg"
            >
              Explore All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuantumComputingRevolution2025;