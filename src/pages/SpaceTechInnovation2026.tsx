import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const SpaceTechInnovation2026: React.FC = () => {
  const [activeMission, setActiveMission] = useState(0);

  const spaceMissions = [
    {
      id: 'mars-colony',
      title: 'Mars Colony Initiative',
      icon: '🚀',
      description: 'Establishing the first permanent human settlement on Mars using advanced AI and quantum technology',
      status: 'In Progress',
      progress: 75,
      features: ['AI-Powered Life Support', 'Quantum Communication', 'Autonomous Agriculture'],
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 'quantum-satellites',
      title: 'Quantum Satellite Network',
      icon: '🛰️',
      description: 'Deploying quantum-encrypted satellite network for secure space communication',
      status: 'Deployed',
      progress: 100,
      features: ['Quantum Encryption', 'Global Coverage', 'Real-time Communication'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'asteroid-mining',
      title: 'Asteroid Mining Operations',
      icon: '⛏️',
      description: 'Automated asteroid mining using AI-controlled robotic systems',
      status: 'Planning',
      progress: 40,
      features: ['AI Mining Bots', 'Resource Extraction', 'Space Manufacturing'],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Space Tech Innovation 2026 | Zion Tech Group</title>
        <meta name="description" content="Revolutionary space technology innovations including Mars colonization, quantum satellites, and asteroid mining operations for 2026." />
        <meta name="keywords" content="Space Technology 2026, Mars Colony, Quantum Satellites, Asteroid Mining, Space Innovation, Space Tech" />
        <meta property="og:title" content="Space Tech Innovation 2026 | Zion Tech Group" />
        <meta property="og:description" content="Revolutionary space technology innovations for 2026" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Space Tech Innovation 2026" />
        <meta name="twitter:description" content="Revolutionary space technology innovations" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white text-sm font-bold mb-6">
                🚀 SPACE TECH INNOVATION • 2026
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Space Tech Innovation 2026
              </h1>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary space technology innovations that are pushing the boundaries of human exploration 
                and establishing our presence beyond Earth
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Explore Missions →
                </button>
                <button className="border-2 border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg hover:bg-indigo-400 hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Technology
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Space Missions */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">🚀 Space Missions 2026</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Revolutionary space missions that are reshaping our understanding of space exploration and colonization
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {spaceMissions.map((mission, index) => (
                <motion.div
                  key={mission.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${mission.color}/20 backdrop-blur-sm rounded-2xl p-8 border border-${mission.color.split('-')[1]}-400/30 hover:scale-105 transition-all duration-300`}
                >
                  <div className="text-6xl mb-4 text-center">{mission.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-white">{mission.title}</h3>
                  <p className="text-gray-300 mb-6 text-center">{mission.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Progress</span>
                      <span className="text-sm font-semibold text-white">{mission.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${mission.color} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${mission.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      mission.status === 'Deployed' ? 'bg-green-500/20 text-green-400' :
                      mission.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {mission.status}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {mission.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                        <span className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full bg-gradient-to-r ${mission.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                    Learn More →
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Showcase */}
        <section className="py-20 px-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">🔬 Space Technology</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge space technologies that are enabling unprecedented exploration and colonization
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'AI Life Support',
                  icon: '🧠',
                  description: 'Autonomous life support systems powered by advanced AI',
                  color: 'from-blue-500 to-indigo-600'
                },
                {
                  title: 'Quantum Communication',
                  icon: '⚡',
                  description: 'Instantaneous communication across vast distances',
                  color: 'from-purple-500 to-pink-600'
                },
                {
                  title: 'Space Manufacturing',
                  icon: '🏭',
                  description: 'Zero-gravity manufacturing and construction',
                  color: 'from-emerald-500 to-teal-600'
                },
                {
                  title: 'Asteroid Mining',
                  icon: '⛏️',
                  description: 'Automated resource extraction from asteroids',
                  color: 'from-orange-500 to-red-600'
                }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30 hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4 text-center">{tech.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-center text-white">{tech.title}</h3>
                  <p className="text-gray-300 text-sm text-center">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Explore the Final Frontier?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Join us in the next chapter of space exploration and be part of humanity's greatest adventure
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Join Mission →
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors font-semibold">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SpaceTechInnovation2026;