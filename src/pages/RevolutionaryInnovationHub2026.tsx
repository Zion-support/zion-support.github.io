import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryInnovationHub2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-semibold mb-6">
              🌟 REVOLUTIONARY INNOVATION HUB 2026
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Innovation Unleashed
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              The world's most advanced innovation hub where breakthrough technologies are born, 
              developed, and deployed to transform industries and reshape the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Explore Innovations →
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">
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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
            Innovation Categories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the diverse range of revolutionary innovations being developed in our hub
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI & Machine Learning */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 group"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-200">AI & Machine Learning</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary AI systems that learn, adapt, and evolve beyond human capabilities, 
              creating unprecedented opportunities for automation and intelligence.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-300">Neural Networks</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-300">Deep Learning</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-300">Reinforcement Learning</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quantum Computing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-purple-200">Quantum Computing</h3>
            <p className="text-gray-300 mb-6">
              Breakthrough quantum computing technologies that harness quantum mechanics 
              to solve problems impossible for classical computers.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-300">Quantum Supremacy</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-400 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-300">Quantum Algorithms</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-300">Quantum Error Correction</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-400 h-2 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Biotechnology */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-green-800/50 to-emerald-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 group"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-green-200">Biotechnology</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary biotech innovations that merge biology with technology, 
              creating new possibilities for human enhancement and medical breakthroughs.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-300">Gene Editing</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-300">Synthetic Biology</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-green-300">Bio-Integration</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Space Technology */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-indigo-800/50 to-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-indigo-200">Space Technology</h3>
            <p className="text-gray-300 mb-6">
              Advanced space technologies enabling interplanetary exploration, 
              space colonization, and cosmic resource utilization.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-indigo-300">Space Travel</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-indigo-400 h-2 rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-indigo-300">Space Mining</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-indigo-400 h-2 rounded-full" style={{ width: '55%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-indigo-300">Space Habitats</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-indigo-400 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Neural Interfaces */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-pink-800/50 to-rose-800/50 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 group"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-pink-200">Neural Interfaces</h3>
            <p className="text-gray-300 mb-6">
              Direct brain-computer interfaces that enable seamless communication 
              between human consciousness and digital systems.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-pink-300">Brain-Computer Interface</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-pink-400 h-2 rounded-full" style={{ width: '73%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-pink-300">Neural Implants</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-pink-400 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-pink-300">Thought Control</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-pink-400 h-2 rounded-full" style={{ width: '58%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cyber-Physical Systems */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-br from-orange-800/50 to-red-800/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 group"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🌐</div>
            <h3 className="text-2xl font-bold mb-4 text-orange-200">Cyber-Physical Systems</h3>
            <p className="text-gray-300 mb-6">
              Seamless integration of digital and physical worlds creating 
              intelligent environments that adapt to human needs.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-orange-300">Smart Cities</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-400 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-orange-300">IoT Integration</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-400 h-2 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-orange-300">Autonomous Systems</span>
                <div className="w-24 bg-gray-700 rounded-full h-2">
                  <div className="bg-orange-400 h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Innovation Process */}
      <div className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Our Innovation Process</h2>
            <p className="text-xl text-gray-300">How we turn ideas into revolutionary technologies</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-3 text-purple-200">Ideation</h3>
              <p className="text-gray-300">Brainstorming breakthrough concepts and identifying market opportunities</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-3 text-cyan-200">Research</h3>
              <p className="text-gray-300">Deep research and feasibility analysis of innovative concepts</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-3 text-green-200">Development</h3>
              <p className="text-gray-300">Building and testing prototypes with cutting-edge technology</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-3 text-orange-200">Deployment</h3>
              <p className="text-gray-300">Launching revolutionary technologies into the market</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-indigo-500/30"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Join the Innovation Revolution</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the most advanced innovation hub in the world. 
            Collaborate with leading experts and help shape the future of technology.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Join the Hub →
            </button>
            <button className="border-2 border-white/30 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">
              View Projects
            </button>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Submit Innovation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryInnovationHub2026;