import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SpaceTechInnovation2026: React.FC = () => {
  const [activeMission, setActiveMission] = useState('mars');

  const spaceMissions = {
    mars: {
      title: 'Mars Colonization',
      description: 'Establishing permanent human settlements on Mars',
      icon: '🔴',
      color: 'from-red-600 to-orange-600',
      features: [
        'Habitat construction',
        'Life support systems',
        'Resource extraction',
        'Sustainable agriculture'
      ]
    },
    moon: {
      title: 'Lunar Base Alpha',
      description: 'Advanced lunar research and manufacturing facility',
      icon: '🌙',
      color: 'from-gray-600 to-blue-600',
      features: [
        'Zero-gravity manufacturing',
        'Helium-3 mining',
        'Space telescope arrays',
        'Launch platform'
      ]
    },
    asteroid: {
      title: 'Asteroid Mining',
      description: 'Extracting valuable resources from near-Earth asteroids',
      icon: '☄️',
      color: 'from-yellow-600 to-orange-600',
      features: [
        'Precious metal extraction',
        'Water ice harvesting',
        'Rare earth elements',
        'Automated mining systems'
      ]
    },
    interstellar: {
      title: 'Interstellar Travel',
      description: 'Breakthrough propulsion systems for deep space exploration',
      icon: '🚀',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Fusion propulsion',
        'Warp drive technology',
        'Cryogenic hibernation',
        'Generation ships'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 SPACE TECH INNOVATION • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Final Frontier
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary space technologies that will enable humanity's expansion 
              across the solar system and beyond. From Mars colonization to interstellar travel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
              >
                🚀 Explore Missions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                🌌 Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission Navigation */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(spaceMissions).map(([key, mission]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveMission(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeMission === key
                  ? `bg-gradient-to-r ${mission.color} text-white shadow-lg`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{mission.icon}</span>
              {mission.title}
            </motion.button>
          ))}
        </div>

        {/* Active Mission Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMission}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30"
          >
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">{spaceMissions[activeMission as keyof typeof spaceMissions].icon}</div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {spaceMissions[activeMission as keyof typeof spaceMissions].title}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {spaceMissions[activeMission as keyof typeof spaceMissions].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-cyan-300">Key Technologies</h3>
                <ul className="space-y-4">
                  {spaceMissions[activeMission as keyof typeof spaceMissions].features.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-cyan-600/20 to-purple-600/20 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">Mission Impact</h3>
                <p className="text-gray-300 mb-6">
                  This mission will revolutionize our understanding of space and enable humanity's expansion beyond Earth.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">2026</div>
                    <div className="text-sm text-gray-400">Launch Year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">1000+</div>
                    <div className="text-sm text-gray-400">Crew Members</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Technology Showcase */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Space Technologies
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge technologies that make space exploration and colonization possible
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Fusion Propulsion',
              description: 'Nuclear fusion engines for efficient long-distance space travel',
              icon: '⚡',
              stats: '99% Efficiency'
            },
            {
              title: 'Artificial Gravity',
              description: 'Rotating space stations and ships with Earth-like gravity',
              icon: '🌍',
              stats: '1G Gravity'
            },
            {
              title: 'Life Support Systems',
              description: 'Closed-loop systems for sustainable life in space',
              icon: '🫁',
              stats: '100% Recycling'
            },
            {
              title: 'Space Manufacturing',
              description: 'Zero-gravity manufacturing for advanced materials',
              icon: '🏭',
              stats: 'Zero Defects'
            },
            {
              title: 'Quantum Communication',
              description: 'Instantaneous communication across vast distances',
              icon: '📡',
              stats: 'Instant Transfer'
            },
            {
              title: 'Asteroid Deflection',
              description: 'Protecting Earth from potential asteroid impacts',
              icon: '🛡️',
              stats: '100% Protection'
            }
          ].map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-center text-cyan-300">{tech.title}</h3>
              <p className="text-gray-300 mb-4 text-center text-sm">{tech.description}</p>
              <div className="text-cyan-400 font-bold text-center text-sm">{tech.stats}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Explore Space?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join us in humanity's greatest adventure - the exploration and colonization of space
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Apply for Mission
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SpaceTechInnovation2026;