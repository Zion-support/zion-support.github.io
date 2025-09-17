import React from 'react';
import { motion } from 'framer-motion';

const SpaceTechRevolution2029: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 SPACE REVOLUTION • 2029
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Space Technology Revolution 2029
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Colonize the solar system with revolutionary space technology. From Mars 
              terraforming to asteroid mining, from space elevators to interplanetary 
              internet - the future of humanity is among the stars.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
                Launch to Space →
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                Mission Control
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Space Technologies */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🌌 Revolutionary Space Technologies</h2>
            <p className="text-xl opacity-80">Making space accessible and habitable for humanity</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mars Terraforming */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-red-600/30 to-orange-600/30 backdrop-blur-sm rounded-xl p-8 border border-red-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🔴</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Mars Terraforming</h3>
              <p className="text-red-100 mb-6 text-center">
                Transform Mars into a habitable planet using advanced atmospheric 
                engineering and biological seeding technologies
              </p>
              <ul className="text-red-200 space-y-2 mb-6 text-sm">
                <li>• Atmospheric generation</li>
                <li>• Water extraction systems</li>
                <li>• Oxygen production plants</li>
                <li>• Ecosystem development</li>
              </ul>
              <button className="block w-full bg-white text-red-600 py-3 rounded-lg hover:bg-red-50 transition-colors font-semibold text-center">
                Terraform Mars →
              </button>
            </motion.div>

            {/* Space Elevators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">🛗</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Space Elevators</h3>
              <p className="text-blue-100 mb-6 text-center">
                Carbon nanotube space elevators providing cost-effective access 
                to space for cargo and passengers
              </p>
              <ul className="text-blue-200 space-y-2 mb-6 text-sm">
                <li>• Carbon nanotube cables</li>
                <li>• Electromagnetic propulsion</li>
                <li>• Orbital platforms</li>
                <li>• Mass transportation</li>
              </ul>
              <button className="block w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-center">
                Ride to Space →
              </button>
            </motion.div>

            {/* Asteroid Mining */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-yellow-600/30 to-orange-600/30 backdrop-blur-sm rounded-xl p-8 border border-yellow-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">💎</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Asteroid Mining</h3>
              <p className="text-yellow-100 mb-6 text-center">
                Extract precious metals and rare earth elements from asteroids 
                to fuel Earth's technological advancement
              </p>
              <ul className="text-yellow-200 space-y-2 mb-6 text-sm">
                <li>• Automated mining drones</li>
                <li>• Resource processing plants</li>
                <li>• Orbital refineries</li>
                <li>• Earth delivery systems</li>
              </ul>
              <button className="block w-full bg-white text-yellow-600 py-3 rounded-lg hover:bg-yellow-50 transition-colors font-semibold text-center">
                Mine Asteroids →
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Space Applications */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🛸 Advanced Space Applications</h2>
            <p className="text-xl opacity-80">Revolutionary space-based technologies and services</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold mb-6">Interplanetary Internet</h3>
              <p className="text-lg opacity-90 mb-6">
                High-speed quantum communication network connecting Earth, Mars, 
                and space stations with instant data transfer and real-time 
                communication across the solar system.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Quantum entanglement communication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Real-time data synchronization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Interplanetary cloud computing</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-xl p-8 border border-blue-400/30"
            >
              <div className="text-6xl mb-4 text-center">🛰️</div>
              <h4 className="text-xl font-bold mb-4 text-center">Space Manufacturing</h4>
              <p className="text-center opacity-90">
                Zero-gravity manufacturing facilities producing advanced materials 
                and technologies impossible to create on Earth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">🌍 Multi-Planetary Future</h2>
            <p className="text-xl opacity-80 mb-8 max-w-4xl mx-auto">
              The space revolution is making humanity a multi-planetary species. 
              From Mars colonies to asteroid cities, from space tourism to 
              interplanetary trade - the cosmos is our new frontier.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
                Join the Space Revolution
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SpaceTechRevolution2029;