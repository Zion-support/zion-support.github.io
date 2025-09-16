import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';

const NextGenInnovationHub2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 NEXT-GEN INNOVATION HUB • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
              Discover and explore the most revolutionary technologies that will shape humanity's future
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Innovations →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 font-semibold text-lg">
                Join the Hub
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Innovation Categories */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">🚀 Innovation Categories</h2>
          <p className="text-xl opacity-80">Explore cutting-edge technologies across all domains</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI & Machine Learning */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI & Machine Learning</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Advanced artificial intelligence systems that learn, adapt, and evolve
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Neural network architectures</li>
              <li>• Deep learning algorithms</li>
              <li>• Natural language processing</li>
              <li>• Computer vision systems</li>
              <li>• Reinforcement learning</li>
            </ul>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Explore AI →
            </button>
          </motion.div>

          {/* Quantum Computing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-purple-100 mb-6 text-center">
              Revolutionary quantum systems that process information at unprecedented speeds
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Quantum algorithms</li>
              <li>• Quantum cryptography</li>
              <li>• Quantum machine learning</li>
              <li>• Quantum simulation</li>
              <li>• Quantum networking</li>
            </ul>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Enter Quantum Realm →
            </button>
          </motion.div>

          {/* Biotechnology */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Biotechnology</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Cutting-edge biological technologies that enhance human capabilities
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Gene editing (CRISPR)</li>
              <li>• Synthetic biology</li>
              <li>• Neural interfaces</li>
              <li>• Regenerative medicine</li>
              <li>• Bio-computing</li>
            </ul>
            <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Explore Biotech →
            </button>
          </motion.div>

          {/* Space Technology */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Technology</h3>
            <p className="text-orange-100 mb-6 text-center">
              Advanced technologies for space exploration and colonization
            </p>
            <ul className="text-orange-200 space-y-2 mb-6 text-sm">
              <li>• Advanced propulsion</li>
              <li>• Space habitats</li>
              <li>• Asteroid mining</li>
              <li>• Terraforming</li>
              <li>• Interstellar travel</li>
            </ul>
            <button className="w-full bg-white text-orange-600 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold">
              Reach for the Stars →
            </button>
          </motion.div>

          {/* Virtual Reality */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🥽</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Virtual Reality</h3>
            <p className="text-violet-100 mb-6 text-center">
              Immersive virtual environments that blur the line between real and digital
            </p>
            <ul className="text-violet-200 space-y-2 mb-6 text-sm">
              <li>• Haptic feedback</li>
              <li>• Eye tracking</li>
              <li>• Spatial computing</li>
              <li>• Mixed reality</li>
              <li>• Metaverse platforms</li>
            </ul>
            <button className="w-full bg-white text-violet-600 py-3 rounded-lg hover:bg-violet-50 transition-colors font-semibold">
              Enter Virtual World →
            </button>
          </motion.div>

          {/* Blockchain */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-yellow-600/30 to-orange-600/30 backdrop-blur-sm rounded-xl p-8 border border-yellow-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">⛓️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Blockchain</h3>
            <p className="text-yellow-100 mb-6 text-center">
              Decentralized technologies that revolutionize trust and security
            </p>
            <ul className="text-yellow-200 space-y-2 mb-6 text-sm">
              <li>• Smart contracts</li>
              <li>• DeFi protocols</li>
              <li>• NFT platforms</li>
              <li>• DAO governance</li>
              <li>• Web3 applications</li>
            </ul>
            <button className="w-full bg-white text-yellow-600 py-3 rounded-lg hover:bg-yellow-50 transition-colors font-semibold">
              Explore Blockchain →
            </button>
          </motion.div>
        </div>
      </div>

      {/* Innovation Stats */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">📊 Innovation Statistics</h2>
          <p className="text-xl opacity-80">Our impact on the future of technology</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-xl font-semibold mb-2">Active Innovations</div>
            <div className="text-gray-300">Technologies in development</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-xl font-semibold mb-2">Success Rate</div>
            <div className="text-gray-300">Project completion rate</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-emerald-400 mb-2">50+</div>
            <div className="text-xl font-semibold mb-2">Countries</div>
            <div className="text-gray-300">Global presence</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-orange-400 mb-2">∞</div>
            <div className="text-xl font-semibold mb-2">Possibilities</div>
            <div className="text-gray-300">Infinite potential</div>
          </motion.div>
=======

const NextGenInnovationHub2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 NEXT-GEN INNOVATION • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover and explore the most revolutionary technologies shaping humanity's future
          </p>
        </div>

        {/* Innovation Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🤖</div>
            <h2 className="text-2xl font-bold mb-4 text-center">AI & Machine Learning</h2>
            <p className="text-emerald-100 mb-6 text-center">
              Cutting-edge artificial intelligence solutions that are transforming every industry
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Autonomous AI Agents</li>
              <li>• Deep Learning Networks</li>
              <li>• Natural Language Processing</li>
              <li>• Computer Vision Systems</li>
              <li>• Predictive Analytics</li>
            </ul>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-1">50+</div>
              <div className="text-xs opacity-80">Active Projects</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">⚛️</div>
            <h2 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h2>
            <p className="text-teal-100 mb-6 text-center">
              Revolutionary quantum technologies that solve problems impossible for classical computers
            </p>
            <ul className="text-teal-200 space-y-2 mb-6 text-sm">
              <li>• Quantum Algorithms</li>
              <li>• Quantum Cryptography</li>
              <li>• Quantum Machine Learning</li>
              <li>• Quantum Simulation</li>
              <li>• Quantum Networking</li>
            </ul>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400 mb-1">25+</div>
              <div className="text-xs opacity-80">Quantum Projects</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6 text-center">🧬</div>
            <h2 className="text-2xl font-bold mb-4 text-center">Biotechnology</h2>
            <p className="text-cyan-100 mb-6 text-center">
              Advanced biotech solutions that enhance human capabilities and extend life
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Neural Interfaces</li>
              <li>• Genetic Engineering</li>
              <li>• Synthetic Biology</li>
              <li>• Brain-Computer Interfaces</li>
              <li>• Regenerative Medicine</li>
            </ul>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">30+</div>
              <div className="text-xs opacity-80">Bio Projects</div>
            </div>
          </div>
>>>>>>> cursor/create-and-deploy-new-content-4a47
        </div>

<<<<<<< HEAD
      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-400/30"
        >
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most advanced innovation hub in the world. Collaborate with leading scientists, engineers, and visionaries to create the future.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join the Hub
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-900 transition-all duration-300 font-semibold text-lg">
              Explore Projects
            </button>
          </div>
        </motion.div>
=======
        {/* Featured Innovations */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">🌟 Featured Innovations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">🚀</div>
                <div>
                  <h3 className="text-2xl font-bold">Autonomous AI Factory</h3>
                  <p className="text-emerald-200 text-sm">Self-building AI systems</p>
                </div>
              </div>
              <p className="text-emerald-100 mb-4">
                Revolutionary AI systems that can design, build, and optimize themselves without human intervention.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm opacity-80">Progress: 87%</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{width: '87%'}}></div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/30">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">⚡</div>
                <div>
                  <h3 className="text-2xl font-bold">Quantum Neural Networks</h3>
                  <p className="text-teal-200 text-sm">Quantum-powered AI</p>
                </div>
              </div>
              <p className="text-teal-100 mb-4">
                Neural networks that leverage quantum computing for exponential speed and capability improvements.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm opacity-80">Progress: 72%</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full" style={{width: '72%'}}></div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">🧠</div>
                <div>
                  <h3 className="text-2xl font-bold">Consciousness Transfer</h3>
                  <p className="text-cyan-200 text-sm">Digital immortality</p>
                </div>
              </div>
              <p className="text-cyan-100 mb-4">
                Technology to transfer human consciousness into digital form, enabling digital immortality.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm opacity-80">Progress: 45%</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">🌌</div>
                <div>
                  <h3 className="text-2xl font-bold">Interdimensional Computing</h3>
                  <p className="text-blue-200 text-sm">Multi-dimensional processing</p>
                </div>
              </div>
              <p className="text-blue-100 mb-4">
                Computing systems that operate across multiple dimensions for unlimited processing power.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm opacity-80">Progress: 23%</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full" style={{width: '23%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">150+</div>
            <div className="text-sm opacity-80">Active Innovations</div>
          </div>
          <div className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-teal-400/30 text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">99.9%</div>
            <div className="text-sm opacity-80">Success Rate</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
            <div className="text-sm opacity-80">Possibilities</div>
          </div>
          <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-sm opacity-80">Innovation Engine</div>
          </div>
        </div>

        {/* Research Areas */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-emerald-400/30">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">🔬 Research Areas</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our innovation hub focuses on the most cutting-edge research areas that will define the future
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-emerald-400">Artificial General Intelligence</h3>
              <p className="text-sm opacity-80">Developing AI systems with human-level intelligence across all domains</p>
              <div className="text-xs text-emerald-300">15 active projects</div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-teal-400">Quantum Machine Learning</h3>
              <p className="text-sm opacity-80">Combining quantum computing with machine learning algorithms</p>
              <div className="text-xs text-teal-300">12 active projects</div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-400">Neural Interface Technology</h3>
              <p className="text-sm opacity-80">Direct brain-computer interfaces for enhanced human capabilities</p>
              <div className="text-xs text-cyan-300">18 active projects</div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400">Synthetic Biology</h3>
              <p className="text-sm opacity-80">Engineering biological systems for technological applications</p>
              <div className="text-xs text-blue-300">22 active projects</div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-indigo-400">Consciousness Studies</h3>
              <p className="text-sm opacity-80">Understanding and replicating human consciousness in machines</p>
              <div className="text-xs text-indigo-300">8 active projects</div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-400">Interdimensional Physics</h3>
              <p className="text-sm opacity-80">Exploring higher dimensions for computational and energy applications</p>
              <div className="text-xs text-purple-300">5 active projects</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most advanced innovation hub in the world. Collaborate with leading researchers, 
            access cutting-edge technologies, and help shape the future of humanity.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Innovation Hub
            </button>
            <button className="border-2 border-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/20 transition-colors font-semibold text-lg">
              Explore Projects
            </button>
          </div>
        </div>
>>>>>>> cursor/create-and-deploy-new-content-4a47
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;