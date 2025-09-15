import React from 'react';
import { motion } from 'framer-motion';

const SpaceTechInnovation2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 SPACE TECH INNOVATION • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Next-Generation Space Technology
            </h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
              Pioneering the future of space exploration with revolutionary technologies that enable 
              sustainable space travel, asteroid mining, and interplanetary colonization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Space Solutions
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold">
                Watch Mission
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Revolutionary Features */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Revolutionary Space Technologies</h2>
          <p className="text-xl opacity-90">Discover breakthrough technologies reshaping space exploration</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🛸</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Advanced Propulsion Systems</h3>
            <p className="text-purple-100 mb-6 text-center">
              Revolutionary propulsion technologies including ion drives, nuclear thermal propulsion, 
              and experimental warp field generators for faster-than-light travel.
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Ion propulsion engines</li>
              <li>• Nuclear thermal rockets</li>
              <li>• Antimatter propulsion</li>
              <li>• Warp field experiments</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Space Habitats & Colonies</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Self-sustaining space habitats with advanced life support systems, 
              artificial gravity, and closed-loop ecosystems for long-term space living.
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Rotating space stations</li>
              <li>• Closed-loop life support</li>
              <li>• Artificial gravity systems</li>
              <li>• Space agriculture</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">⛏️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Asteroid Mining</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Automated asteroid mining operations that extract rare earth elements, 
              precious metals, and water ice to support space industry and Earth's needs.
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Autonomous mining robots</li>
              <li>• Resource extraction systems</li>
              <li>• In-space manufacturing</li>
              <li>• Resource transportation</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Mission Capabilities */}
      <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Mission Capabilities</h2>
            <p className="text-xl opacity-90">Explore our comprehensive space technology portfolio</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🛰️</div>
              <h3 className="text-xl font-bold mb-2">Satellite Technology</h3>
              <p className="text-sm opacity-90">Advanced satellite systems for communication, navigation, and Earth observation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2">Planetary Exploration</h3>
              <p className="text-sm opacity-90">Autonomous rovers and landers for Mars, Moon, and other celestial bodies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-2">Space Research</h3>
              <p className="text-sm opacity-90">Advanced laboratories and research facilities in microgravity environments</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-xl font-bold mb-2">Lunar Base</h3>
              <p className="text-sm opacity-90">Permanent lunar settlements with sustainable infrastructure and operations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Showcase */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Cutting-Edge Innovations</h2>
          <p className="text-xl opacity-90">Explore the revolutionary technologies powering our space missions</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6">Advanced Materials Science</h3>
            <p className="text-lg opacity-90 mb-6">
              Our space-grade materials are engineered to withstand extreme temperatures, 
              radiation, and vacuum conditions while maintaining structural integrity and 
              optimal performance in space environments.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <span className="text-purple-400">✓</span>
                <span>Radiation-resistant composites</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-purple-400">✓</span>
                <span>Self-healing materials</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-purple-400">✓</span>
                <span>Ultra-lightweight alloys</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-purple-400">✓</span>
                <span>Thermal protection systems</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30"
          >
            <div className="text-6xl mb-4 text-center">🔭</div>
            <h4 className="text-xl font-bold mb-4 text-center">Space Telescopes</h4>
            <p className="text-center opacity-90">
              Next-generation space telescopes with unprecedented resolution and sensitivity, 
              enabling breakthrough discoveries in astronomy and astrophysics.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Future Missions */}
      <div className="bg-gradient-to-r from-black/50 to-purple-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Upcoming Missions</h2>
            <p className="text-xl opacity-90">Join us on our journey to the stars</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Mars Colony Mission</h3>
              <p className="opacity-90 mb-4">
                Establishing the first permanent human settlement on Mars with sustainable 
                infrastructure and advanced life support systems.
              </p>
              <div className="text-sm text-purple-300">
                <div>Launch: Q4 2026</div>
                <div>Duration: 2 years</div>
                <div>Crew: 12 astronauts</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-2xl font-bold mb-4">Lunar Mining Base</h3>
              <p className="opacity-90 mb-4">
                Building a permanent lunar base for helium-3 mining and as a launch 
                platform for deep space missions.
              </p>
              <div className="text-sm text-cyan-300">
                <div>Launch: Q2 2026</div>
                <div>Duration: 18 months</div>
                <div>Robots: 50+ units</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
              <div className="text-4xl mb-4">🛸</div>
              <h3 className="text-2xl font-bold mb-4">Asteroid Belt Expedition</h3>
              <p className="opacity-90 mb-4">
                Automated mining expedition to the asteroid belt to extract rare earth 
                elements and establish space-based manufacturing.
              </p>
              <div className="text-sm text-emerald-300">
                <div>Launch: Q3 2026</div>
                <div>Duration: 3 years</div>
                <div>Mining Fleet: 20 ships</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Reach for the Stars?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the space revolution and be part of humanity's greatest adventure. 
            Together, we'll explore the cosmos and build a future among the stars.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Our Mission
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceTechInnovation2026;