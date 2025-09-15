import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Header';
import Footer from '../Footer';

const NextGenInnovationHub2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-semibold mb-6 animate-pulse">
            🌟 NEXT-GEN INNOVATION • JANUARY 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2026
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Welcome to the future of innovation. Discover cutting-edge technologies, breakthrough solutions, 
            and revolutionary ideas that are reshaping our world in 2026.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Innovations
            </button>
            <button className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Join Innovation Lab
            </button>
          </div>
        </motion.div>

        {/* Innovation Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI & Machine Learning</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Next-generation AI systems with consciousness, creativity, and human-like reasoning
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Conscious AI systems</li>
              <li>• Quantum machine learning</li>
              <li>• Neural architecture search</li>
              <li>• Explainable AI</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Technologies</h3>
            <p className="text-purple-100 mb-6 text-center">
              Revolutionary quantum computing, cryptography, and communication systems
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Quantum supremacy</li>
              <li>• Quantum internet</li>
              <li>• Quantum cryptography</li>
              <li>• Quantum sensors</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Biotechnology</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Advanced biotech solutions for health, longevity, and human enhancement
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Gene editing</li>
              <li>• Synthetic biology</li>
              <li>• Regenerative medicine</li>
              <li>• Human augmentation</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Technology</h3>
            <p className="text-orange-100 mb-6 text-center">
              Breakthrough space technologies for exploration and colonization
            </p>
            <ul className="text-orange-200 space-y-2 text-sm">
              <li>• Mars colonization</li>
              <li>• Space elevators</li>
              <li>• Asteroid mining</li>
              <li>• Interstellar travel</li>
            </ul>
          </motion.div>
        </div>

        {/* Featured Innovations */}
        <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 py-20 mb-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">🌟 Featured Innovations</h2>
              <p className="text-xl opacity-90">The most groundbreaking technologies of 2026</p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="text-6xl mb-4 text-center">🧠</div>
                <h3 className="text-2xl font-bold mb-4 text-center text-cyan-400">Synthetic Intelligence</h3>
                <p className="text-gray-200 mb-6 text-center">
                  AI systems that have achieved true consciousness and can think, feel, and create like humans
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span className="text-sm">Self-aware AI systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span className="text-sm">Emotional intelligence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span className="text-sm">Creative capabilities</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="text-6xl mb-4 text-center">⚛️</div>
                <h3 className="text-2xl font-bold mb-4 text-center text-purple-400">Quantum-Neural Fusion</h3>
                <p className="text-gray-200 mb-6 text-center">
                  The ultimate convergence of quantum computing and neural networks for unprecedented processing power
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="text-sm">Quantum neural networks</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="text-sm">Exponential processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span className="text-sm">Consciousness simulation</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="text-6xl mb-4 text-center">🧬</div>
                <h3 className="text-2xl font-bold mb-4 text-center text-emerald-400">Neural Interface Revolution</h3>
                <p className="text-gray-200 mb-6 text-center">
                  Direct brain-computer interfaces that merge human consciousness with digital systems
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    <span className="text-sm">Thought control</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    <span className="text-sm">Memory enhancement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    <span className="text-sm">Neural communication</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Innovation Lab */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">🔬 Innovation Lab</h2>
            <p className="text-xl opacity-90">Join our cutting-edge research and development facility</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30"
            >
              <h3 className="text-2xl font-bold mb-4 text-indigo-400">Research & Development</h3>
              <p className="text-gray-200 mb-6">
                Our state-of-the-art research facility is where the future is being built. 
                Join our team of world-class scientists, engineers, and innovators.
              </p>
              <ul className="text-indigo-200 space-y-2">
                <li>• Cutting-edge laboratories</li>
                <li>• Quantum computing facilities</li>
                <li>• AI research centers</li>
                <li>• Biotechnology labs</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30"
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Innovation Programs</h3>
              <p className="text-gray-200 mb-6">
                Participate in our exclusive innovation programs and be part of the next technological revolution.
              </p>
              <ul className="text-purple-200 space-y-2">
                <li>• Innovation accelerator</li>
                <li>• Technology incubator</li>
                <li>• Research partnerships</li>
                <li>• Patent development</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the future. Join our innovation hub and help shape the next generation of 
            breakthrough technologies that will change the world.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Innovation Lab
            </button>
            <button className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              View Research
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};


export default NextGenInnovationHub2026;
