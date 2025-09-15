import React from 'react';
import { motion } from 'framer-motion';

const SpaceTechInnovation2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 SPACE TECH INNOVATION 2026
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              Next-Generation Space Technology
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Pioneering the future of space exploration with advanced propulsion, AI-powered systems, and sustainable space infrastructure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Revolutionary Space Technologies</h2>
            <p className="text-xl text-gray-300">Cutting-edge innovations enabling humanity's expansion into the cosmos</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Propulsion</h3>
              <p className="text-gray-300 mb-6">
                Next-generation propulsion systems including ion drives, nuclear thermal, and antimatter engines
              </p>
              <ul className="text-indigo-200 space-y-2 text-sm">
                <li>• Ion propulsion systems</li>
                <li>• Nuclear thermal rockets</li>
                <li>• Antimatter propulsion</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">🛰️</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Space Systems</h3>
              <p className="text-gray-300 mb-6">
                Autonomous spacecraft and satellites with AI-powered navigation, decision-making, and self-repair capabilities
              </p>
              <ul className="text-cyan-200 space-y-2 text-sm">
                <li>• Autonomous navigation</li>
                <li>• Self-repairing systems</li>
                <li>• Intelligent mission planning</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Space Infrastructure</h3>
              <p className="text-gray-300 mb-6">
                Modular space stations, lunar bases, and Mars colonies with sustainable life support systems
              </p>
              <ul className="text-emerald-200 space-y-2 text-sm">
                <li>• Modular space stations</li>
                <li>• Lunar habitats</li>
                <li>• Mars colonies</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">Energy Systems</h3>
              <p className="text-gray-300 mb-6">
                Advanced power generation including fusion reactors, solar arrays, and wireless energy transmission
              </p>
              <ul className="text-orange-200 space-y-2 text-sm">
                <li>• Fusion power plants</li>
                <li>• Solar power satellites</li>
                <li>• Wireless energy transfer</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-pink-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-white mb-4">Space Manufacturing</h3>
              <p className="text-gray-300 mb-6">
                Zero-gravity manufacturing facilities for advanced materials and space-based production
              </p>
              <ul className="text-pink-200 space-y-2 text-sm">
                <li>• Zero-gravity manufacturing</li>
                <li>• Advanced materials</li>
                <li>• Space-based production</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-8 border border-yellow-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-4">Planetary Defense</h3>
              <p className="text-gray-300 mb-6">
                Advanced systems for asteroid detection, deflection, and planetary protection
              </p>
              <ul className="text-yellow-200 space-y-2 text-sm">
                <li>• Asteroid detection</li>
                <li>• Planetary defense systems</li>
                <li>• Impact mitigation</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Types Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Space Mission Capabilities</h2>
            <p className="text-xl text-gray-300">Advanced missions enabled by next-generation space technology</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🌙</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Lunar Exploration</h3>
                  <p className="text-gray-300">Permanent lunar bases with mining operations and research facilities</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🔴</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Mars Colonization</h3>
                  <p className="text-gray-300">Self-sustaining Mars colonies with terraforming capabilities and resource utilization</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🪐</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Deep Space Missions</h3>
                  <p className="text-gray-300">Interstellar exploration missions to nearby star systems and exoplanets</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🛸</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Space Tourism</h3>
                  <p className="text-gray-300">Commercial space travel and orbital hotels for civilian space exploration</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🔭</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Space Telescopes</h3>
                  <p className="text-gray-300">Next-generation space observatories for deep space imaging and exoplanet discovery</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-4xl">⚡</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Space Mining</h3>
                  <p className="text-gray-300">Asteroid and lunar mining operations for rare earth elements and space resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">The Future of Space Exploration</h2>
            <p className="text-xl text-gray-300">Envisioning humanity's expansion into the cosmos</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30">
              <div className="text-5xl mb-4 text-center">🌌</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Interstellar Travel</h3>
              <p className="text-gray-300 text-center">
                Breakthrough propulsion technologies enabling human travel to nearby star systems within decades
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <div className="text-5xl mb-4 text-center">🏭</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Space Industry</h3>
              <p className="text-gray-300 text-center">
                Thriving space economy with manufacturing, tourism, and resource extraction operations
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
              <div className="text-5xl mb-4 text-center">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Multi-Planetary Species</h3>
              <p className="text-gray-300 text-center">
                Humanity established as a multi-planetary species with sustainable colonies across the solar system
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-indigo-600 to-pink-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Launch Into the Future</h2>
            <p className="text-xl mb-8 opacity-90">
              Join us in pioneering the next frontier of space exploration and technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Explore Missions
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                Join Space Program
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SpaceTechInnovation2026;