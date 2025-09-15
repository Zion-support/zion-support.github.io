import React from 'react';
import { motion } from 'framer-motion';
import Header from '../Header';
import Footer from '../Footer';

const NextGenSpaceTech2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🚀 NEXT-GEN SPACE TECH • 2026
          </div>
          <h1 className="text-7xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Next-Gen Space Technology 2026
          </h1>
          <p className="text-3xl text-cyan-200 max-w-5xl mx-auto mb-12">
            Explore the revolutionary space technologies that are making interplanetary travel and space colonization a reality
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-10 py-5 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-xl">
              🌌 Explore Space Tech →
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-xl">
              📖 Learn More
            </button>
          </div>
        </motion.div>

        {/* Space Technology Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-cyan-600/40 to-blue-600/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-8xl mb-6 text-center">🚀</div>
            <h3 className="text-3xl font-bold mb-6 text-center text-white">Advanced Propulsion</h3>
            <p className="text-cyan-200 mb-8 text-center text-lg">
              Revolutionary propulsion systems enabling faster and more efficient space travel
            </p>
            <ul className="text-cyan-300 space-y-3 text-sm mb-8">
              <li>• Ion Propulsion Systems</li>
              <li>• Nuclear Thermal Rockets</li>
              <li>• Fusion Propulsion</li>
              <li>• Antimatter Engines</li>
              <li>• Solar Sail Technology</li>
            </ul>
            <a href="#propulsion" className="block w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold text-center">
              Learn More →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600/40 to-pink-600/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-8xl mb-6 text-center">🏠</div>
            <h3 className="text-3xl font-bold mb-6 text-center text-white">Space Habitats</h3>
            <p className="text-purple-200 mb-8 text-center text-lg">
              Self-sustaining space habitats for long-term human presence in space
            </p>
            <ul className="text-purple-300 space-y-3 text-sm mb-8">
              <li>• Orbital Space Stations</li>
              <li>• Lunar Bases</li>
              <li>• Mars Colonies</li>
              <li>• Asteroid Habitats</li>
              <li>• Generation Ships</li>
            </ul>
            <a href="#habitats" className="block w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-center">
              Explore Habitats →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-emerald-600/40 to-teal-600/40 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-8xl mb-6 text-center">⛏️</div>
            <h3 className="text-3xl font-bold mb-6 text-center text-white">Asteroid Mining</h3>
            <p className="text-emerald-200 mb-8 text-center text-lg">
              Extracting valuable resources from asteroids to support space colonization
            </p>
            <ul className="text-emerald-300 space-y-3 text-sm mb-8">
              <li>• Robotic Mining Rovers</li>
              <li>• Resource Processing</li>
              <li>• Water Extraction</li>
              <li>• Rare Earth Metals</li>
              <li>• Fuel Production</li>
            </ul>
            <a href="#mining" className="block w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold text-center">
              Discover Mining →
            </a>
          </motion.div>
        </div>

        {/* Mars Colonization Section */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-white text-center mb-16">🔴 Mars Colonization 2026</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-red-600/20 to-orange-600/20 backdrop-blur-sm rounded-2xl p-10 border border-red-400/30"
            >
              <div className="text-6xl mb-6 text-center">🌍</div>
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Terraforming Mars</h3>
              <p className="text-red-200 mb-8 text-center text-lg">
                Revolutionary technologies to make Mars habitable for human colonization
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span className="text-red-300">Atmospheric generation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span className="text-red-300">Water extraction and recycling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span className="text-red-300">Soil enhancement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <span className="text-red-300">Temperature regulation</span>
                </div>
              </div>
              <a href="#terraforming" className="block w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-lg">
                Learn About Terraforming →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-10 border border-blue-400/30"
            >
              <div className="text-6xl mb-6 text-center">🏭</div>
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Space Manufacturing</h3>
              <p className="text-blue-200 mb-8 text-center text-lg">
                Advanced manufacturing capabilities in zero gravity for space-based production
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="text-blue-300">3D printing in space</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="text-blue-300">Crystal growth facilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="text-blue-300">Advanced materials synthesis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="text-blue-300">Automated assembly lines</span>
                </div>
              </div>
              <a href="#manufacturing" className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-lg">
                Explore Manufacturing →
              </a>
            </motion.div>
          </div>
        </div>

        {/* Space Technology Stats */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-3xl p-16 mb-20">
          <h2 className="text-5xl font-bold text-white text-center mb-16">📊 Space Technology Impact 2026</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-cyan-400 mb-4">50+</div>
              <h3 className="text-2xl font-bold text-white mb-2">Active Missions</h3>
              <p className="text-cyan-200">Space exploration missions currently active</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-purple-400 mb-4">1000+</div>
              <h3 className="text-2xl font-bold text-white mb-2">Satellites</h3>
              <p className="text-purple-200">Advanced satellites in orbit</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-emerald-400 mb-4">$500B</div>
              <h3 className="text-2xl font-bold text-white mb-2">Market Value</h3>
              <p className="text-emerald-200">Space technology market size</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-orange-400 mb-4">2030</div>
              <h3 className="text-2xl font-bold text-white mb-2">Mars Landing</h3>
              <p className="text-orange-200">Planned human Mars mission</p>
            </div>
          </div>
        </div>

        {/* Future Missions */}
        <div className="mb-20">
          <h2 className="text-5xl font-bold text-white text-center mb-16">🌟 Upcoming Space Missions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30"
            >
              <div className="text-6xl mb-6 text-center">🌙</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Lunar Gateway</h3>
              <p className="text-purple-200 mb-6 text-center">
                International space station orbiting the Moon for deep space exploration
              </p>
              <div className="text-center">
                <span className="px-3 py-1 bg-purple-500 text-white text-xs rounded-full font-semibold">2025-2026</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30"
            >
              <div className="text-6xl mb-6 text-center">🔴</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Mars Sample Return</h3>
              <p className="text-cyan-200 mb-6 text-center">
                Mission to return samples from Mars for detailed analysis on Earth
              </p>
              <div className="text-center">
                <span className="px-3 py-1 bg-cyan-500 text-white text-xs rounded-full font-semibold">2026-2027</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30"
            >
              <div className="text-6xl mb-6 text-center">🪐</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Europa Clipper</h3>
              <p className="text-emerald-200 mb-6 text-center">
                Mission to study Jupiter's moon Europa for signs of life
              </p>
              <div className="text-center">
                <span className="px-3 py-1 bg-emerald-500 text-white text-xs rounded-full font-semibold">2024-2030</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-3xl p-16"
        >
          <h2 className="text-6xl font-bold text-white mb-8">Ready to Explore the Cosmos?</h2>
          <p className="text-2xl text-cyan-100 mb-12 max-w-4xl mx-auto">
            Join us on this incredible journey through the most advanced space technologies of 2026
          </p>
          <div className="flex justify-center space-x-6">
            <a href="/pages/UltimateTechShowcase2025" className="bg-white text-cyan-600 px-12 py-6 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-xl">
              🚀 Ultimate Tech Showcase
            </a>
            <a href="/pages/RevolutionaryTechInsights2025" className="border-2 border-white text-white px-12 py-6 rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-300 font-semibold text-xl">
              🔮 Tech Insights
            </a>
            <a href="/pages/SyntheticIntelligence2026" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-6 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-xl">
              🧠 Synthetic AI
            </a>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NextGenSpaceTech2026;