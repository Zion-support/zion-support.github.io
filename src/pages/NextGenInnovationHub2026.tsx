import React from 'react';
import { motion } from 'framer-motion';

const NextGenInnovationHub2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 NEXT-GEN INNOVATION • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              The ultimate destination for cutting-edge innovations, breakthrough technologies, 
              and revolutionary solutions that are transforming industries worldwide.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Innovations
              </button>
              <button className="border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                Join Innovation Lab
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Innovation Categories */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8">🚀 Innovation Categories</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover innovations across multiple domains that are reshaping our world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI & Machine Learning</h3>
            <p className="text-blue-100 mb-6 text-center">
              Advanced artificial intelligence systems and machine learning algorithms
            </p>
            <ul className="text-blue-200 space-y-2 text-sm">
              <li>• Deep learning networks</li>
              <li>• Natural language processing</li>
              <li>• Computer vision</li>
              <li>• Predictive analytics</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Technologies</h3>
            <p className="text-purple-100 mb-6 text-center">
              Revolutionary quantum computing and quantum communication systems
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Quantum processors</li>
              <li>• Quantum cryptography</li>
              <li>• Quantum sensors</li>
              <li>• Quantum networks</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-8 border border-green-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🌱</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Sustainable Tech</h3>
            <p className="text-green-100 mb-6 text-center">
              Green technologies and sustainable solutions for a better future
            </p>
            <ul className="text-green-200 space-y-2 text-sm">
              <li>• Renewable energy</li>
              <li>• Carbon capture</li>
              <li>• Circular economy</li>
              <li>• Green materials</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Biotechnology</h3>
            <p className="text-orange-100 mb-6 text-center">
              Cutting-edge biotech innovations and life sciences breakthroughs
            </p>
            <ul className="text-orange-200 space-y-2 text-sm">
              <li>• Gene editing</li>
              <li>• Synthetic biology</li>
              <li>• Personalized medicine</li>
              <li>• Biomanufacturing</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🌐</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Digital Transformation</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Digital technologies transforming businesses and societies
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Cloud computing</li>
              <li>• Edge computing</li>
              <li>• IoT systems</li>
              <li>• Blockchain</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-pink-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-pink-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Technology</h3>
            <p className="text-pink-100 mb-6 text-center">
              Advanced space technologies and exploration systems
            </p>
            <ul className="text-pink-200 space-y-2 text-sm">
              <li>• Satellite systems</li>
              <li>• Space manufacturing</li>
              <li>• Interplanetary travel</li>
              <li>• Space habitats</li>
            </ul>
          </motion.div>
        </div>

        {/* Innovation Showcase */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">🌟 Featured Innovations</h2>
            <p className="text-xl text-gray-300">Latest breakthrough innovations from our research labs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-emerald-400">🧠 Neural Interface 2.0</h3>
                <p className="text-gray-300 mb-4">
                  Next-generation brain-computer interfaces with 10x improved signal quality and non-invasive design.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full">Breakthrough</span>
                  <span className="text-emerald-300">2026 Q1 Release</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-cyan-400">⚡ Quantum Processor X1</h3>
                <p className="text-gray-300 mb-4">
                  Revolutionary 1000-qubit quantum processor with unprecedented stability and error correction.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full">Revolutionary</span>
                  <span className="text-cyan-300">2026 Q2 Release</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-teal-400">🌱 Carbon Capture AI</h3>
                <p className="text-gray-300 mb-4">
                  AI-powered carbon capture system that removes 10x more CO2 than traditional methods.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full">Sustainable</span>
                  <span className="text-teal-300">2026 Q3 Release</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-blue-400">🤖 Autonomous AI Agent</h3>
                <p className="text-gray-300 mb-4">
                  Self-evolving AI agent that can learn, adapt, and solve complex problems autonomously.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">Autonomous</span>
                  <span className="text-blue-300">2026 Q4 Release</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Process */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">🔬 Innovation Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">1</div>
              <h3 className="text-xl font-bold mb-2">Research</h3>
              <p className="text-gray-300 text-sm">Deep research into emerging technologies and market needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">2</div>
              <h3 className="text-xl font-bold mb-2">Prototype</h3>
              <p className="text-gray-300 text-sm">Rapid prototyping and proof-of-concept development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">3</div>
              <h3 className="text-xl font-bold mb-2">Test</h3>
              <p className="text-gray-300 text-sm">Rigorous testing and validation in real-world conditions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">4</div>
              <h3 className="text-xl font-bold mb-2">Deploy</h3>
              <p className="text-gray-300 text-sm">Scalable deployment and continuous improvement</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
            <p className="text-xl mb-8 text-emerald-100">
              Be part of the next generation of innovators shaping the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/pages/RevolutionaryTechShowcase2026" 
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-lg"
              >
                Explore All Innovations →
              </a>
              <a 
                href="/pages/AdvancedAISystems2026" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-emerald-600 transition-colors font-semibold text-lg"
              >
                Join Innovation Lab
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2026;