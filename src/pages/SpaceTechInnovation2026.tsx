import React from 'react';
import { motion } from 'framer-motion';

const SpaceTechInnovation2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 SPACE TECH INNOVATION • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Space Technology Innovation 2026
            </h1>
            <p className="text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Revolutionary space technologies that are enabling interplanetary exploration, space colonization, and advanced satellite systems for the next generation of space missions
            </p>
          </motion.div>
        </div>
      </div>

      {/* Key Features */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">🌌 Breakthrough Space Technologies</h2>
          <p className="text-xl text-gray-600">Pioneering the future of space exploration and colonization</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-indigo-200"
          >
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4 text-indigo-600">Advanced Propulsion Systems</h3>
            <p className="text-gray-600 mb-6">
              Next-generation propulsion technologies including ion drives, nuclear thermal propulsion, and antimatter engines for deep space missions.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Ion propulsion systems</li>
              <li>• Nuclear thermal engines</li>
              <li>• Antimatter propulsion</li>
              <li>• Solar sail technology</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-purple-200"
          >
            <div className="text-5xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Space Habitats</h3>
            <p className="text-gray-600 mb-6">
              Self-sustaining space habitats with advanced life support systems, artificial gravity, and closed-loop ecosystems for long-term space colonization.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Closed-loop life support</li>
              <li>• Artificial gravity systems</li>
              <li>• Radiation shielding</li>
              <li>• Sustainable agriculture</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-pink-200"
          >
            <div className="text-5xl mb-4">🛰️</div>
            <h3 className="text-2xl font-bold mb-4 text-pink-600">Advanced Satellites</h3>
            <p className="text-gray-600 mb-6">
              Next-generation satellite constellations with AI-powered capabilities, quantum communication, and advanced Earth observation systems.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• AI-powered operations</li>
              <li>• Quantum communication</li>
              <li>• High-resolution imaging</li>
              <li>• Autonomous maintenance</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-blue-200"
          >
            <div className="text-5xl mb-4">🌙</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Lunar & Mars Missions</h3>
            <p className="text-gray-600 mb-6">
              Advanced mission systems for lunar bases, Mars colonization, and interplanetary exploration with autonomous rovers and human habitats.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Lunar base construction</li>
              <li>• Mars colonization</li>
              <li>• Autonomous rovers</li>
              <li>• Resource extraction</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-cyan-200"
          >
            <div className="text-5xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-600">Space Manufacturing</h3>
            <p className="text-gray-600 mb-6">
              Zero-gravity manufacturing facilities for producing advanced materials, pharmaceuticals, and technologies that are impossible to create on Earth.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Zero-gravity production</li>
              <li>• Advanced materials</li>
              <li>• Pharmaceutical manufacturing</li>
              <li>• Crystal growth</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-teal-200"
          >
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold mb-4 text-teal-600">Earth Observation</h3>
            <p className="text-gray-600 mb-6">
              Advanced Earth observation systems for climate monitoring, disaster response, and environmental protection with real-time data analysis.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Climate monitoring</li>
              <li>• Disaster response</li>
              <li>• Environmental protection</li>
              <li>• Real-time analysis</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Mission Types */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">🌌 Mission Categories</h2>
            <p className="text-xl text-indigo-100">Comprehensive space exploration and development programs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🌙</div>
              <h3 className="text-xl font-bold mb-2">Lunar Missions</h3>
              <p className="text-indigo-100">Moon base construction and resource extraction</p>
            </div>
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🔴</div>
              <h3 className="text-xl font-bold mb-2">Mars Exploration</h3>
              <p className="text-indigo-100">Colonization and terraforming initiatives</p>
            </div>
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🛰️</div>
              <h3 className="text-xl font-bold mb-2">Satellite Networks</h3>
              <p className="text-indigo-100">Global communication and observation systems</p>
            </div>
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🌌</div>
              <h3 className="text-xl font-bold mb-2">Deep Space</h3>
              <p className="text-indigo-100">Interplanetary and interstellar exploration</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">⚙️ Advanced Technology Stack</h2>
          <p className="text-xl text-gray-600">Cutting-edge technologies enabling space exploration</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-lg font-bold text-indigo-600 mb-2">Propulsion</h3>
            <p className="text-sm text-gray-600">Advanced propulsion systems and engines</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-lg font-bold text-purple-600 mb-2">AI Systems</h3>
            <p className="text-sm text-gray-600">Autonomous mission control and navigation</p>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-200">
            <div className="text-3xl mb-3">🔬</div>
            <h3 className="text-lg font-bold text-pink-600 mb-2">Materials</h3>
            <p className="text-sm text-gray-600">Advanced space-grade materials</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="text-lg font-bold text-cyan-600 mb-2">Communication</h3>
            <p className="text-sm text-gray-600">Quantum and laser communication</p>
          </div>
        </div>
      </div>

      {/* Future Vision */}
      <div className="bg-gradient-to-r from-gray-900 to-indigo-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">🌟 The Future of Space</h2>
            <p className="text-xl text-gray-300">Envisioning humanity's expansion into the cosmos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🏙️</div>
              <h3 className="text-2xl font-bold mb-4">Space Cities</h3>
              <p className="text-gray-300">Self-sustaining space habitats with thousands of residents</p>
            </div>
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-4">Terraforming</h3>
              <p className="text-gray-300">Transforming planets to support human life</p>
            </div>
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Interstellar Travel</h3>
              <p className="text-gray-300">Journeying to distant star systems</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Reach for the Stars?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Join us in pioneering the next frontier of space exploration and be part of humanity's greatest adventure
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            Start Your Mission →
          </a>
          <a href="/pages/AdvancedTechSolutions2026" className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
            View All Solutions
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpaceTechInnovation2026;