import React from 'react';
import { motion } from 'framer-motion';

const AdvancedTechInnovationHub2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 ADVANCED INNOVATION HUB • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Advanced Tech Innovation Hub 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              The world's most advanced technology innovation hub, where breakthrough ideas become reality
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Innovations
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold text-lg">
                Join the Hub
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Innovation Categories */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">🔬 Innovation Categories</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Explore our cutting-edge research and development across multiple technology domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI & Machine Learning */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI & Machine Learning</h3>
            <p className="text-blue-100 mb-6 text-center">
              Advanced artificial intelligence and machine learning technologies that are revolutionizing industries
            </p>
            <ul className="text-blue-200 space-y-2 mb-6 text-sm">
              <li>• Deep learning algorithms</li>
              <li>• Neural network optimization</li>
              <li>• Natural language processing</li>
              <li>• Computer vision systems</li>
              <li>• Reinforcement learning</li>
            </ul>
            <div className="flex justify-between items-center">
              <span className="text-blue-300 text-sm">50+ Projects</span>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-sm">
                Explore →
              </button>
            </div>
          </motion.div>

          {/* Quantum Computing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-purple-100 mb-6 text-center">
              Revolutionary quantum computing solutions that solve complex problems exponentially faster
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Quantum algorithms</li>
              <li>• Quantum cryptography</li>
              <li>• Quantum machine learning</li>
              <li>• Quantum simulation</li>
              <li>• Quantum optimization</li>
            </ul>
            <div className="flex justify-between items-center">
              <span className="text-purple-300 text-sm">25+ Projects</span>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-sm">
                Explore →
              </button>
            </div>
          </motion.div>

          {/* Neural Interfaces */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Neural Interfaces</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Direct brain-computer interfaces that enable seamless interaction between mind and machine
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Non-invasive BCI</li>
              <li>• Neural signal processing</li>
              <li>• Thought-controlled devices</li>
              <li>• Neural feedback systems</li>
              <li>• Cognitive enhancement</li>
            </ul>
            <div className="flex justify-between items-center">
              <span className="text-emerald-300 text-sm">30+ Projects</span>
              <button className="bg-white text-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-sm">
                Explore →
              </button>
            </div>
          </motion.div>

          {/* Biotechnology */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-8 border border-green-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🧪</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Biotechnology</h3>
            <p className="text-green-100 mb-6 text-center">
              Cutting-edge biotechnology solutions that merge biology with technology for revolutionary applications
            </p>
            <ul className="text-green-200 space-y-2 mb-6 text-sm">
              <li>• Synthetic biology</li>
              <li>• Gene editing technologies</li>
              <li>• Bio-computing systems</li>
              <li>• Regenerative medicine</li>
              <li>• Bio-sensors</li>
            </ul>
            <div className="flex justify-between items-center">
              <span className="text-green-300 text-sm">40+ Projects</span>
              <button className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors font-semibold text-sm">
                Explore →
              </button>
            </div>
          </motion.div>

          {/* Space Technology */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Technology</h3>
            <p className="text-orange-100 mb-6 text-center">
              Advanced space exploration technologies that enable humanity to reach for the stars
            </p>
            <ul className="text-orange-200 space-y-2 mb-6 text-sm">
              <li>• Advanced propulsion systems</li>
              <li>• Space habitats</li>
              <li>• Asteroid mining</li>
              <li>• Interplanetary communication</li>
              <li>• Space manufacturing</li>
            </ul>
            <div className="flex justify-between items-center">
              <span className="text-orange-300 text-sm">35+ Projects</span>
              <button className="bg-white text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-sm">
                Explore →
              </button>
            </div>
          </motion.div>

          {/* Cybersecurity */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-red-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-red-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🛡️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Cybersecurity</h3>
            <p className="text-red-100 mb-6 text-center">
              Next-generation cybersecurity solutions that protect against advanced threats and attacks
            </p>
            <ul className="text-red-200 space-y-2 mb-6 text-sm">
              <li>• AI-powered threat detection</li>
              <li>• Quantum encryption</li>
              <li>• Zero-trust architecture</li>
              <li>• Behavioral analytics</li>
              <li>• Automated response systems</li>
            </ul>
            <div className="flex justify-between items-center">
              <span className="text-red-300 text-sm">45+ Projects</span>
              <button className="bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors font-semibold text-sm">
                Explore →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Research Labs */}
      <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">🔬 Research Laboratories</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              State-of-the-art research facilities where breakthrough innovations are born
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <h3 className="text-xl font-bold mb-4">🧠 AI Research Lab</h3>
              <p className="text-white/80 mb-4">Advanced AI research and development facility</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/60">50+ Researchers</span>
                <span className="text-sm text-green-400">Active</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <h3 className="text-xl font-bold mb-4">⚡ Quantum Lab</h3>
              <p className="text-white/80 mb-4">Quantum computing research and development</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/60">25+ Researchers</span>
                <span className="text-sm text-green-400">Active</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <h3 className="text-xl font-bold mb-4">🧬 Neural Interface Lab</h3>
              <p className="text-white/80 mb-4">Brain-computer interface research</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/60">30+ Researchers</span>
                <span className="text-sm text-green-400">Active</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <h3 className="text-xl font-bold mb-4">🧪 Biotech Lab</h3>
              <p className="text-white/80 mb-4">Biotechnology and synthetic biology research</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/60">40+ Researchers</span>
                <span className="text-sm text-green-400">Active</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <h3 className="text-xl font-bold mb-4">🚀 Space Tech Lab</h3>
              <p className="text-white/80 mb-4">Space exploration technology development</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/60">35+ Researchers</span>
                <span className="text-sm text-green-400">Active</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <h3 className="text-xl font-bold mb-4">🛡️ Security Lab</h3>
              <p className="text-white/80 mb-4">Cybersecurity and threat research</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/60">45+ Researchers</span>
                <span className="text-sm text-green-400">Active</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Innovation Statistics */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">📊 Innovation Impact</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Our research and development efforts are making a real impact on the world
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-indigo-400 mb-2">500+</div>
            <div className="text-lg opacity-80">Active Projects</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-purple-400 mb-2">200+</div>
            <div className="text-lg opacity-80">Research Papers</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-pink-400 mb-2">50+</div>
            <div className="text-lg opacity-80">Patents Filed</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-cyan-400 mb-2">1000+</div>
            <div className="text-lg opacity-80">Researchers</div>
          </motion.div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center bg-gradient-to-r from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-12 border border-indigo-400/30"
        >
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Be part of the most advanced technology innovation hub in the world. Collaborate with leading researchers and shape the future of technology.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Our Team
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 font-semibold text-lg">
              Partner With Us
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};


export default AdvancedTechInnovationHub2026;
