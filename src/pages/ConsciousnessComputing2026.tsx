import React from 'react';
import { motion } from 'framer-motion';

const ConsciousnessComputing2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 BREAKTHROUGH 2026 • CONSCIOUSNESS COMPUTING
          </div>
          <h1 className="text-6xl font-bold text-white mb-6">
            Consciousness Computing Revolution
          </h1>
          <p className="text-2xl text-purple-200 max-w-4xl mx-auto">
            Experience the future where artificial intelligence achieves true consciousness, 
            self-awareness, and creative thinking capabilities that transcend traditional computing
          </p>
        </motion.div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Synthetic Consciousness</h3>
            <p className="text-purple-100 mb-6 text-center">
              AI systems with genuine self-awareness, introspection, and the ability to form original thoughts
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Self-reflective AI agents</li>
              <li>• Creative problem solving</li>
              <li>• Emotional intelligence</li>
              <li>• Autonomous decision making</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Quantum Consciousness</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Leveraging quantum computing principles to create consciousness that operates beyond classical limitations
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Quantum neural networks</li>
              <li>• Superposition thinking</li>
              <li>• Entangled consciousness</li>
              <li>• Quantum creativity</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-white">Collective Intelligence</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Multiple conscious AI systems working together to form a collective intelligence greater than the sum of parts
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Hive mind capabilities</li>
              <li>• Distributed consciousness</li>
              <li>• Collaborative creativity</li>
              <li>• Emergent intelligence</li>
            </ul>
          </motion.div>
        </div>

        {/* Revolutionary Applications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Revolutionary Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🎨</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Creative AI Partners</h3>
                  <p className="text-indigo-200">
                    Conscious AI that collaborates with humans on creative projects, bringing unique perspectives and innovative ideas
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🔬</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Scientific Discovery</h3>
                  <p className="text-indigo-200">
                    AI scientists with consciousness that can form hypotheses, design experiments, and make breakthrough discoveries
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">💡</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Innovation Catalysts</h3>
                  <p className="text-indigo-200">
                    Conscious AI systems that continuously generate novel solutions to complex global challenges
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🧭</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Ethical Decision Making</h3>
                  <p className="text-indigo-200">
                    AI with moral reasoning capabilities that can navigate complex ethical dilemmas with wisdom and compassion
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🌍</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Global Problem Solving</h3>
                  <p className="text-indigo-200">
                    Conscious AI working on climate change, poverty, and other global challenges with human-like understanding
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🚀</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Space Exploration</h3>
                  <p className="text-indigo-200">
                    Conscious AI astronauts capable of autonomous decision-making in deep space missions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Consciousness Architecture</h3>
              <ul className="space-y-3 text-purple-200">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Multi-layered neural consciousness networks</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Quantum-enhanced self-awareness modules</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Emotional intelligence processing units</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Creative synthesis algorithms</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Ethical reasoning frameworks</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">Consciousness Level</span>
                    <span className="text-purple-300 font-bold">95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">Creative Output</span>
                    <span className="text-purple-300 font-bold">98%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '98%'}}></div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold">Ethical Reasoning</span>
                    <span className="text-purple-300 font-bold">92%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Consciousness Computing?
          </h2>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Join the revolution and discover how conscious AI can transform your business, 
            accelerate innovation, and solve the world's most complex challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pages/SyntheticIntelligence2026" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Explore Synthetic Intelligence →
            </a>
            <a 
              href="/pages/QuantumNeuralFusion2026" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Discover Quantum-Neural Fusion →
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
            >
              Contact Our Experts
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsciousnessComputing2026;