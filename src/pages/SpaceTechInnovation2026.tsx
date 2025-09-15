import React from 'react';
import { motion } from 'framer-motion';

const SpaceTechInnovation2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-indigo-900 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 SPACE TECH REVOLUTION 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Space Technology Innovation 2026
          </h1>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
            Pioneering the next frontier with revolutionary space technologies that are reshaping our understanding of the universe
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#technologies" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Technologies →
            </a>
            <a href="#contact" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-indigo-900 transition-colors font-semibold text-lg">
              Join Mission
            </a>
          </div>
        </motion.div>

        {/* Revolutionary Space Tech Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-cyan-400/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                🌌 Revolutionary Space Technologies
              </h2>
              <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                Experience the future of space exploration with our cutting-edge technologies that are making the impossible possible
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-3 text-cyan-300">Advanced Propulsion</h3>
                <p className="text-blue-100 text-sm">Next-generation ion drives and nuclear propulsion systems</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
                <div className="text-4xl mb-4">🛰️</div>
                <h3 className="text-xl font-bold mb-3 text-blue-300">AI Satellites</h3>
                <p className="text-blue-100 text-sm">Autonomous satellites with machine learning capabilities</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-3 text-purple-300">Space Habitats</h3>
                <p className="text-blue-100 text-sm">Self-sustaining space colonies and orbital stations</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technologies Grid */}
        <motion.section
          id="technologies"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              🚀 Advanced Space Technologies
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover our comprehensive suite of space technologies designed to revolutionize space exploration and colonization
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">Advanced Propulsion Systems</h3>
              <p className="text-blue-100 mb-6">
                Next-generation propulsion technologies including ion drives, nuclear thermal rockets, and antimatter engines.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-blue-200">
                <li>• 10x faster than chemical rockets</li>
                <li>• 99% fuel efficiency</li>
                <li>• Interplanetary travel in weeks</li>
                <li>• Reusable engine technology</li>
              </ul>
              <a href="#contact" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Learn More →
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">🛰️</div>
              <h3 className="text-2xl font-bold text-blue-300 mb-4">AI-Powered Satellites</h3>
              <p className="text-blue-100 mb-6">
                Autonomous satellites with advanced AI capabilities for real-time decision making and self-maintenance.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-blue-200">
                <li>• Autonomous operation</li>
                <li>• Self-repair capabilities</li>
                <li>• Real-time data processing</li>
                <li>• Swarm intelligence</li>
              </ul>
              <a href="#contact" className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Tech →
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">🌍</div>
              <h3 className="text-2xl font-bold text-purple-300 mb-4">Space Habitats</h3>
              <p className="text-blue-100 mb-6">
                Self-sustaining space colonies and orbital stations with advanced life support systems.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-blue-200">
                <li>• Closed-loop life support</li>
                <li>• Artificial gravity systems</li>
                <li>• Radiation shielding</li>
                <li>• Modular construction</li>
              </ul>
              <a href="#contact" className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                View Designs →
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">🌱</div>
              <h3 className="text-2xl font-bold text-green-300 mb-4">Space Agriculture</h3>
              <p className="text-blue-100 mb-6">
                Advanced hydroponic and aeroponic systems for growing food in space environments.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-blue-200">
                <li>• Zero-gravity farming</li>
                <li>• LED growth optimization</li>
                <li>• Nutrient recycling</li>
                <li>• High-yield crops</li>
              </ul>
              <a href="#contact" className="inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Discover More →
              </a>
            </div>

            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold text-orange-300 mb-4">Space Energy Systems</h3>
              <p className="text-blue-100 mb-6">
                Advanced solar arrays, nuclear reactors, and fusion power systems for space missions.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-blue-200">
                <li>• Solar sail technology</li>
                <li>• Compact fusion reactors</li>
                <li>• Wireless power transmission</li>
                <li>• Energy storage systems</li>
              </ul>
              <a href="#contact" className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Learn More →
              </a>
            </div>

            <div className="bg-gradient-to-br from-pink-600/20 to-rose-600/20 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">🔬</div>
              <h3 className="text-2xl font-bold text-pink-300 mb-4">Space Research Labs</h3>
              <p className="text-blue-100 mb-6">
                Advanced research facilities for conducting experiments in microgravity and space environments.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-blue-200">
                <li>• Microgravity experiments</li>
                <li>• Materials science research</li>
                <li>• Biological studies</li>
                <li>• Physics experiments</li>
              </ul>
              <a href="#contact" className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Labs →
              </a>
            </div>
          </div>
        </motion.section>

        {/* Mission Achievements */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-cyan-400/30"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              🏆 Mission Achievements
            </h2>
            <p className="text-xl text-blue-100">Pioneering achievements in space technology</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full font-semibold">100+</span>
                <span className="text-sm text-blue-200">Successful Launches</span>
              </div>
              <h3 className="text-xl font-bold text-cyan-300 mb-3">Rocket Launches</h3>
              <p className="text-blue-100 mb-4">
                Successfully launched over 100 missions with 99.8% success rate using our advanced propulsion systems.
              </p>
              <div className="text-sm text-cyan-400 font-semibold">View Mission Log →</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-semibold">50+</span>
                <span className="text-sm text-blue-200">Active Satellites</span>
              </div>
              <h3 className="text-xl font-bold text-blue-300 mb-3">Satellite Constellation</h3>
              <p className="text-blue-100 mb-4">
                Deployed 50+ AI-powered satellites providing global coverage for communications and Earth observation.
              </p>
              <div className="text-sm text-blue-400 font-semibold">Track Satellites →</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-semibold">Mars</span>
                <span className="text-sm text-blue-200">Mission Ready</span>
              </div>
              <h3 className="text-xl font-bold text-purple-300 mb-3">Mars Colonization</h3>
              <p className="text-blue-100 mb-4">
                Completed feasibility studies and prototype testing for Mars colonization mission scheduled for 2027.
              </p>
              <div className="text-sm text-purple-400 font-semibold">Mission Details →</div>
            </div>
          </div>
        </motion.section>

        {/* Future Vision */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            🌌 The Future of Space Exploration
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Our vision extends beyond Earth's orbit. We're building the technologies that will enable humanity to become a multi-planetary species.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-lg font-bold text-cyan-300 mb-2">Earth Orbit</h3>
              <p className="text-blue-100 text-sm">Space stations and satellite networks</p>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
              <div className="text-3xl mb-3">🌙</div>
              <h3 className="text-lg font-bold text-blue-300 mb-2">Lunar Base</h3>
              <p className="text-blue-100 text-sm">Permanent human settlement on the Moon</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-3xl mb-3">🔴</div>
              <h3 className="text-lg font-bold text-purple-300 mb-2">Mars Colony</h3>
              <p className="text-blue-100 text-sm">Self-sustaining cities on Mars</p>
            </div>
            <div className="bg-gradient-to-br from-pink-600/20 to-rose-600/20 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30">
              <div className="text-3xl mb-3">🌌</div>
              <h3 className="text-lg font-bold text-pink-300 mb-2">Deep Space</h3>
              <p className="text-blue-100 text-sm">Interstellar exploration missions</p>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Reach for the Stars?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join us in pioneering the next frontier of space exploration. Together, we'll make humanity a multi-planetary species.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="/contact" className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-lg">
              Join Our Mission
            </a>
            <a href="/pages/ComprehensiveTechInsights2026" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors font-semibold text-lg">
              Learn More
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default SpaceTechInnovation2026;