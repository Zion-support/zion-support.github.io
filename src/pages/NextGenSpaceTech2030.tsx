import React from 'react';
import { motion } from 'framer-motion';

const NextGenSpaceTech2030: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 NEXT-GEN SPACE TECH • 2030 VISION
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Next-Gen Space Technology 2030
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Revolutionary space technologies that will enable humanity to become a multi-planetary species
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Space Tech
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg">
                Mission Control
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Space Technology Categories */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">🌌 Space Technology Categories</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Cutting-edge space technologies that will revolutionize space exploration and colonization
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Advanced Propulsion Systems */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Advanced Propulsion</h3>
            <p className="text-blue-100 mb-6 text-center">
              Revolutionary propulsion systems that enable faster-than-light travel and efficient interplanetary missions
            </p>
            <ul className="text-blue-200 space-y-2 mb-6 text-sm">
              <li>• Fusion propulsion engines</li>
              <li>• Antimatter propulsion</li>
              <li>• Ion drive systems</li>
              <li>• Solar sail technology</li>
              <li>• Warp drive concepts</li>
            </ul>
            <button className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Explore Propulsion →
            </button>
          </motion.div>

          {/* Space Habitats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🏠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Habitats</h3>
            <p className="text-purple-100 mb-6 text-center">
              Self-sustaining space habitats that provide comfortable living environments for long-term space missions
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Rotating space stations</li>
              <li>• Lunar bases</li>
              <li>• Mars colonies</li>
              <li>• Asteroid habitats</li>
              <li>• Orbital cities</li>
            </ul>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Explore Habitats →
            </button>
          </motion.div>

          {/* Asteroid Mining */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">⛏️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Asteroid Mining</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Advanced mining technologies that extract valuable resources from asteroids and other celestial bodies
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• Automated mining robots</li>
              <li>• Resource extraction systems</li>
              <li>• Processing facilities</li>
              <li>• Transportation networks</li>
              <li>• Environmental protection</li>
            </ul>
            <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Explore Mining →
            </button>
          </motion.div>

          {/* Interplanetary Communication */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">📡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Interplanetary Communication</h3>
            <p className="text-orange-100 mb-6 text-center">
              High-speed communication networks that enable real-time data transmission across the solar system
            </p>
            <ul className="text-orange-200 space-y-2 mb-6 text-sm">
              <li>• Quantum communication</li>
              <li>• Laser communication arrays</li>
              <li>• Relay satellite networks</li>
              <li>• Deep space antennas</li>
              <li>• Emergency communication</li>
            </ul>
            <button className="w-full bg-white text-orange-600 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold">
              Explore Communication →
            </button>
          </motion.div>

          {/* Space Manufacturing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🏭</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Manufacturing</h3>
            <p className="text-violet-100 mb-6 text-center">
              Zero-gravity manufacturing facilities that produce advanced materials and components in space
            </p>
            <ul className="text-violet-200 space-y-2 mb-6 text-sm">
              <li>• 3D printing in space</li>
              <li>• Crystal growth facilities</li>
              <li>• Advanced materials</li>
              <li>• Microgravity assembly</li>
              <li>• Quality control systems</li>
            </ul>
            <button className="w-full bg-white text-violet-600 py-3 rounded-lg hover:bg-violet-50 transition-colors font-semibold">
              Explore Manufacturing →
            </button>
          </motion.div>

          {/* Space Defense */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-red-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-red-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🛡️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Defense</h3>
            <p className="text-red-100 mb-6 text-center">
              Advanced defense systems that protect space assets and ensure the safety of space missions
            </p>
            <ul className="text-red-200 space-y-2 mb-6 text-sm">
              <li>• Asteroid deflection systems</li>
              <li>• Space debris removal</li>
              <li>• Satellite protection</li>
              <li>• Threat detection</li>
              <li>• Emergency response</li>
            </ul>
            <button className="w-full bg-white text-red-600 py-3 rounded-lg hover:bg-red-50 transition-colors font-semibold">
              Explore Defense →
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mission Timeline */}
      <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">📅 Mission Timeline 2030</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Our roadmap for space exploration and colonization through 2030
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-6"
            >
              <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Q1 2030 - Lunar Base Alpha</h3>
                <p className="text-white/80">Establishment of the first permanent lunar base with 50 residents</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-6"
            >
              <div className="flex-shrink-0 w-4 h-4 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Q2 2030 - Mars Mission Launch</h3>
                <p className="text-white/80">Launch of the first crewed mission to Mars with advanced life support systems</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-6"
            >
              <div className="flex-shrink-0 w-4 h-4 bg-emerald-500 rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Q3 2030 - Asteroid Mining Operations</h3>
                <p className="text-white/80">Begin commercial asteroid mining operations with automated systems</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center space-x-6"
            >
              <div className="flex-shrink-0 w-4 h-4 bg-orange-500 rounded-full"></div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Q4 2030 - Mars Colony Foundation</h3>
                <p className="text-white/80">Establishment of the first permanent Mars colony with 100 residents</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Technology Showcase */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">🔬 Technology Showcase</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Revolutionary space technologies currently in development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30"
          >
            <h3 className="text-2xl font-bold mb-4">🚀 Fusion Propulsion Engine</h3>
            <p className="text-white/80 mb-6">
              Revolutionary fusion-powered propulsion system that enables interplanetary travel in weeks instead of months.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Thrust Power:</span>
                <span className="text-blue-400">10,000 kN</span>
              </div>
              <div className="flex justify-between">
                <span>Specific Impulse:</span>
                <span className="text-blue-400">50,000 seconds</span>
              </div>
              <div className="flex justify-between">
                <span>Fuel Efficiency:</span>
                <span className="text-blue-400">99.9%</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30"
          >
            <h3 className="text-2xl font-bold mb-4">🏠 Modular Space Habitat</h3>
            <p className="text-white/80 mb-6">
              Self-sustaining space habitat with artificial gravity, life support, and comfortable living spaces.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Capacity:</span>
                <span className="text-purple-400">500 residents</span>
              </div>
              <div className="flex justify-between">
                <span>Life Support:</span>
                <span className="text-purple-400">100% recycled</span>
              </div>
              <div className="flex justify-between">
                <span>Gravity Simulation:</span>
                <span className="text-purple-400">1.0g</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-2xl p-12 border border-blue-400/30"
        >
          <h2 className="text-4xl font-bold mb-6">Join the Space Revolution</h2>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Be part of humanity's greatest adventure as we expand into the cosmos and become a multi-planetary species.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Mission
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NextGenSpaceTech2030;