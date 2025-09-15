import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
>>>>>>> a138f30b15304af49b19e9920ab7ee61e74c407f
import Header from '../Header';
import Footer from '../Footer';

const NextGenSpaceTech2026: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
>>>>>>> a138f30b15304af49b19e9920ab7ee61e74c407f
      <Header />
      
      <main className="container mx-auto px-4 py-16">
=======

const NextGenSpaceTech2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
>>>>>>> cursor/create-and-deploy-new-content-8735
        {/* Hero Section */}
<<<<<<< HEAD
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
=======
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-full text-lg font-bold mb-6">
            🚀 NEXT-GEN SPACE TECH 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Beyond Earth's Boundaries
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Experience the future of space exploration with revolutionary technologies that enable 
            interplanetary travel, space colonization, and cosmic resource utilization. The stars are no longer the limit.
          </p>
        </div>

        {/* Space Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-800 to-cyan-800 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300">
            <div className="text-5xl mb-4">🛸</div>
            <h3 className="text-2xl font-bold mb-4">Advanced Propulsion</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary propulsion systems including fusion drives, antimatter engines, 
              and warp field generators for faster-than-light travel.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                Fusion Drive Technology
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                Antimatter Propulsion
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                Warp Field Generation
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-800 to-pink-800 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300">
            <div className="text-5xl mb-4">🏗️</div>
            <h3 className="text-2xl font-bold mb-4">Space Construction</h3>
            <p className="text-gray-300 mb-6">
              Autonomous construction systems that build space stations, 
              lunar bases, and Mars colonies using advanced robotics and 3D printing.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                Autonomous Builders
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                Zero-G 3D Printing
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                Modular Architecture
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-800 to-emerald-800 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300">
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold mb-4">Space Agriculture</h3>
            <p className="text-gray-300 mb-6">
              Advanced hydroponic and aeroponic systems that enable food production 
              in space, supporting long-term space missions and colonization.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                Zero-G Farming
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                Genetic Engineering
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                Closed-Loop Systems
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-800 to-orange-800 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">Space Energy</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary energy systems including solar power satellites, 
              fusion reactors, and cosmic energy harvesting technologies.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                Solar Power Satellites
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                Fusion Reactors
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                Cosmic Energy Harvesting
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-800 to-purple-800 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300">
            <div className="text-5xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold mb-4">Space Research</h3>
            <p className="text-gray-300 mb-6">
              Advanced research facilities in space that enable zero-gravity experiments, 
              cosmic radiation studies, and extraterrestrial life detection.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                Zero-G Laboratories
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                Cosmic Radiation Studies
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                Life Detection Systems
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-800 to-orange-800 p-8 rounded-2xl hover:shadow-2xl transition-all duration-300">
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold mb-4">Terraforming</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary terraforming technologies that transform hostile planets 
              into habitable worlds, enabling human colonization of other worlds.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                Atmosphere Generation
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                Climate Modification
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                Ecosystem Creation
              </div>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Space Missions and Applications */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">🎯 Revolutionary Space Missions</h2>
            <p className="text-2xl text-gray-300">Pioneering missions that will expand humanity's presence in space</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🌙</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Lunar Colonies</h3>
              <p className="text-blue-200 text-center leading-relaxed">
                Permanent human settlements on the Moon, serving as stepping stones 
                for deeper space exploration and resource extraction
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🔴</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Mars Colonization</h3>
              <p className="text-indigo-200 text-center leading-relaxed">
                Establishing the first human colony on Mars with sustainable habitats, 
                agriculture, and industrial capabilities
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🪐</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Outer Planet Exploration</h3>
              <p className="text-purple-200 text-center leading-relaxed">
                Advanced missions to Jupiter, Saturn, and their moons, searching for 
                signs of life and potential colonization sites
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">⭐</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Interstellar Probes</h3>
              <p className="text-cyan-200 text-center leading-relaxed">
                Breakthrough missions to nearby star systems, using advanced propulsion 
                to reach other worlds within human lifetimes
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🌌</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Space Mining</h3>
              <p className="text-teal-200 text-center leading-relaxed">
                Extracting valuable resources from asteroids and other celestial bodies 
                to support space colonies and Earth's economy
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-600/20 to-green-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4 text-center">🛡️</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Planetary Defense</h3>
              <p className="text-emerald-200 text-center leading-relaxed">
                Advanced systems to detect and deflect potentially hazardous asteroids, 
                protecting Earth and space colonies from cosmic threats
              </p>
            </div>
          </div>
        </div>

        {/* Space Technology Benefits */}
        <div className="bg-gradient-to-r from-indigo-800/50 to-purple-800/50 rounded-3xl p-12 mb-16 backdrop-blur-sm border border-indigo-400/30">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">🌟 Benefits of Space Technology</h2>
            <p className="text-2xl text-indigo-200">How space technology will benefit life on Earth and beyond</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">🌍 Earth Benefits</h3>
              <ul className="space-y-4 text-lg text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">⚡</span>
                  <span>Clean, unlimited energy from space-based solar power</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">🔬</span>
                  <span>Advanced materials and technologies developed in zero gravity</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">🌱</span>
                  <span>Improved agriculture through space-based monitoring and optimization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">🌊</span>
                  <span>Better climate monitoring and environmental protection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">💊</span>
                  <span>Medical breakthroughs from space research and development</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">🚀 Space Benefits</h3>
              <ul className="space-y-4 text-lg text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">🏠</span>
                  <span>New homes for humanity beyond Earth's limited resources</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">🔍</span>
                  <span>Scientific discoveries about the universe and our place in it</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">⚙️</span>
                  <span>Industrial capabilities impossible on Earth</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">🌌</span>
                  <span>Expansion of human civilization across the solar system</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-2xl">🔮</span>
                  <span>Preparation for future challenges and opportunities</span>
                </li>
              </ul>
>>>>>>> a138f30b15304af49b19e9920ab7ee61e74c407f
            </div>
          </div>
        </div>

<<<<<<< HEAD
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
=======
        {/* Future Vision */}
        <div className="bg-gradient-to-r from-slate-800/50 to-indigo-800/50 rounded-3xl p-12 mb-16 backdrop-blur-sm border border-slate-400/30">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">🔮 The Future of Space</h2>
            <p className="text-2xl text-slate-200">Our vision for humanity's future in space</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
=======
        {/* Mission Timeline */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Space Mission Timeline 2026</h2>
          <div className="grid md:grid-cols-4 gap-8">
>>>>>>> cursor/create-and-deploy-new-content-8735
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">Q1 2026</div>
              <div className="text-gray-300">Lunar Base Alpha</div>
              <div className="text-sm text-gray-400 mt-2">First permanent lunar settlement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">Q2 2026</div>
              <div className="text-gray-300">Mars Mission Launch</div>
              <div className="text-sm text-gray-400 mt-2">First manned mission to Mars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">Q3 2026</div>
              <div className="text-gray-300">Asteroid Mining</div>
              <div className="text-sm text-gray-400 mt-2">First commercial asteroid mining</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">Q4 2026</div>
              <div className="text-gray-300">Space Tourism</div>
              <div className="text-sm text-gray-400 mt-2">Commercial space tourism begins</div>
            </div>
          </div>
        </div>

        {/* Technology Showcase */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-8 rounded-2xl">
            <h3 className="text-3xl font-bold mb-6 text-cyan-400">Quantum Space Navigation</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary quantum navigation systems that use quantum entanglement 
              for precise positioning and navigation across vast distances in space.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Navigation Accuracy</span>
                <span className="text-cyan-400 font-bold">99.999%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Range</span>
                <span className="text-cyan-400 font-bold">Unlimited</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Real-time Updates</span>
                <span className="text-cyan-400 font-bold">Instantaneous</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-900 to-blue-900 p-8 rounded-2xl">
            <h3 className="text-3xl font-bold mb-6 text-emerald-400">Space Habitat Technology</h3>
            <p className="text-gray-300 mb-6">
              Advanced habitat systems that create comfortable living environments 
              in space, complete with artificial gravity and life support systems.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Artificial Gravity</span>
                <span className="text-emerald-400 font-bold">Earth-like</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Life Support</span>
                <span className="text-emerald-400 font-bold">Self-sustaining</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Capacity</span>
                <span className="text-emerald-400 font-bold">10,000+ people</span>
              </div>
            </div>
>>>>>>> a138f30b15304af49b19e9920ab7ee61e74c407f
          </div>
        </div>

        {/* Call to Action */}
<<<<<<< HEAD
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
=======
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore the Cosmos?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in the greatest adventure in human history. The universe is waiting, 
            and the future of space exploration starts with you.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-4 rounded-lg text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Join Mission
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 px-10 py-4 rounded-lg text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
<<<<<<< HEAD
>>>>>>> a138f30b15304af49b19e9920ab7ee61e74c407f
      </main>
      
      <Footer />
=======
      </div>
>>>>>>> cursor/create-and-deploy-new-content-8735
    </div>
  );
};

export default NextGenSpaceTech2026;