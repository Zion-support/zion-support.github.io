import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SpaceTechInnovation2026: React.FC = () => {
  const [activeTech, setActiveTech] = useState('propulsion');

  const spaceTechnologies = [
    {
      id: 'propulsion',
      name: 'Quantum Propulsion',
      icon: '🚀',
      description: 'Revolutionary propulsion systems using quantum mechanics for interstellar travel',
      features: [
        'Quantum field manipulation',
        'Warp drive technology',
        'Zero-point energy extraction',
        'Faster-than-light travel'
      ],
      applications: [
        'Interstellar exploration',
        'Mars colonization',
        'Asteroid mining',
        'Deep space missions'
      ]
    },
    {
      id: 'mining',
      name: 'Asteroid Mining',
      icon: '⛏️',
      description: 'Advanced robotic systems for extracting resources from asteroids',
      features: [
        'Autonomous mining robots',
        'Resource processing plants',
        'Zero-gravity operations',
        'Remote control systems'
      ],
      applications: [
        'Rare earth metals',
        'Water extraction',
        'Fuel production',
        'Construction materials'
      ]
    },
    {
      id: 'habitat',
      name: 'Space Habitats',
      icon: '🏠',
      description: 'Self-sustaining space habitats with artificial gravity and life support',
      features: [
        'Rotating habitats',
        'Closed-loop ecosystems',
        'Radiation shielding',
        'Artificial gravity'
      ],
      applications: [
        'Mars settlements',
        'Lunar bases',
        'Orbital cities',
        'Deep space stations'
      ]
    },
    {
      id: 'communication',
      name: 'Quantum Communication',
      icon: '📡',
      description: 'Instantaneous communication across vast distances using quantum entanglement',
      features: [
        'Quantum entanglement',
        'Instantaneous transmission',
        'Unhackable security',
        'Interplanetary networks'
      ],
      applications: [
        'Earth-Mars communication',
        'Deep space missions',
        'Secure data transfer',
        'Real-time control'
      ]
    }
  ];

  const currentTech = spaceTechnologies.find(tech => tech.id === activeTech) || spaceTechnologies[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/space-pattern.svg')] bg-repeat opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-bold mb-6">
              🚀 SPACE TECH INNOVATION • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Space Technology Innovation 2026
            </h1>
            <p className="text-2xl text-purple-100 max-w-4xl mx-auto mb-8">
              Revolutionary space technologies enabling interstellar travel, asteroid mining, and space colonization
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Space Tech →
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-gray-900 transition-colors font-semibold">
                View Missions
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Space Technologies Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-purple-300">🚀 Space Technologies</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Cutting-edge space technologies revolutionizing space exploration and colonization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {spaceTechnologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  activeTech === tech.id ? 'ring-2 ring-purple-400' : ''
                }`}
                onClick={() => setActiveTech(tech.id)}
              >
                <div className="text-5xl mb-6 text-center">{tech.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center text-purple-300">{tech.name}</h3>
                <p className="text-purple-100 mb-6 text-center text-sm">{tech.description}</p>
                <div className="text-center">
                  <div className="text-sm text-purple-200">Click to explore</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Technology Details */}
          <motion.div
            key={activeTech}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30"
          >
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">{currentTech.icon}</div>
              <div>
                <h3 className="text-3xl font-bold text-purple-300 mb-2">{currentTech.name}</h3>
                <p className="text-purple-100">{currentTech.description}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-purple-300 mb-4">Key Features:</h4>
                <ul className="space-y-2">
                  {currentTech.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-purple-100">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-purple-300 mb-4">Applications:</h4>
                <ul className="space-y-2">
                  {currentTech.applications.map((application, index) => (
                    <li key={index} className="flex items-center text-purple-100">
                      <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                      {application}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Timeline */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-900/50 to-purple-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-indigo-300">📅 Mission Timeline</h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              The roadmap to space colonization and interstellar exploration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                year: "2026",
                mission: "Mars Base Alpha",
                description: "Establish first permanent human settlement on Mars",
                status: "current"
              },
              {
                year: "2027",
                mission: "Asteroid Mining",
                description: "Begin commercial asteroid mining operations",
                status: "upcoming"
              },
              {
                year: "2028",
                mission: "Lunar Cities",
                description: "Build first self-sustaining lunar cities",
                status: "future"
              },
              {
                year: "2030",
                mission: "Interstellar Probe",
                description: "Launch first interstellar exploration mission",
                status: "vision"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{item.year}</div>
                  <h3 className="text-xl font-bold text-purple-300 mb-4">{item.mission}</h3>
                  <p className="text-purple-100 text-sm mb-4">{item.description}</p>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                    item.status === 'current' ? 'bg-green-600 text-white' :
                    item.status === 'upcoming' ? 'bg-yellow-600 text-white' :
                    item.status === 'future' ? 'bg-blue-600 text-white' :
                    'bg-purple-600 text-white'
                  }`}>
                    {item.status.toUpperCase()}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready for the Space Revolution?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join us in the next frontier of human exploration and space colonization
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Join Mission →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SpaceTechInnovation2026;