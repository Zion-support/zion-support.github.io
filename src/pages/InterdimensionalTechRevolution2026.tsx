<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9

const InterdimensionalTechRevolution2026: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌌 INTERDIMENSIONAL TECH 2026
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            Interdimensional Tech Revolution 2026
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Break through the barriers of our reality. Our interdimensional technology 
            transcends the limitations of three-dimensional space, accessing infinite 
            computational power from parallel universes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.button 
              className="bg-gradient-to-r from-violet-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enter the Multiverse →
            </motion.button>
            <motion.button 
              className="border-2 border-violet-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-violet-400/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Dimensions
            </motion.button>
          </div>
        </motion.div>

        {/* Interdimensional Technologies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
          >
            <div className="text-6xl mb-6 text-center">🚪🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Dimension Gateway</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Stable portals that allow safe travel between dimensions and parallel universes
            </p>
            <ul className="text-indigo-200 space-y-2 mb-6 text-sm">
              <li>• Stable wormhole technology</li>
              <li>• Multi-dimensional mapping</li>
              <li>• Safe matter transfer</li>
              <li>• Parallel universe access</li>
            </ul>
            <button className="w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold">
              Enter Gateway →
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-6xl mb-6 text-center">🧠⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Dimensional AI</h3>
            <p className="text-purple-100 mb-6 text-center">
              Artificial intelligence that exists across multiple dimensions simultaneously
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Cross-dimensional neural networks</li>
              <li>• Quantum consciousness transfer</li>
              <li>• Parallel processing power</li>
              <li>• Infinite computational capacity</li>
            </ul>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Access AI →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20"
          >
            <div className="text-6xl mb-6 text-center">⚡🌊</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Tunneling</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Instantaneous information transfer across dimensional barriers using quantum mechanics
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Zero-latency communication</li>
              <li>• Quantum entanglement networks</li>
              <li>• Dimensional data bridges</li>
              <li>• Instant reality synchronization</li>
            </ul>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Connect Now →
            </button>
          </motion.div>
        </div>

        {/* Dimensional Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">📊 Dimensional Impact</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            The incredible reach of our interdimensional technologies
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-6">🌌 Ready to Cross Dimensions?</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto mb-12">
            Join the interdimensional revolution and access technologies from infinite parallel universes
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-12 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-xl">
              Enter the Multiverse →
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-xl">
              Schedule Dimensional Demo
            </button>
          </div>
        </motion.div>
=======
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              Interdimensional Tech Revolution 2026
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Step into the future where technology transcends dimensions and reality itself
              becomes programmable. Experience the next evolution of human innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Enter the Revolution
              </Link>
              <Link 
                to="/research" 
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Explore Dimensions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dimension Selector */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Choose Your Dimension</h2>
          <p className="text-gray-300">Each dimension offers unique technological possibilities</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dimensions.map((dimension) => (
            <button
              key={dimension.id}
              onClick={() => setActiveDimension(dimension.id)}
              className={`p-6 rounded-xl border transition-all duration-300 ${
                activeDimension === dimension.id
                  ? 'border-purple-400 bg-purple-500/20'
                  : 'border-white/20 bg-white/5 hover:border-purple-300 hover:bg-white/10'
              }`}
            >
              <div className="text-4xl mb-4">{dimension.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{dimension.name}</h3>
              <p className="text-gray-300 text-sm">{dimension.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Active Dimension Display */}
      <div className="container mx-auto px-4 py-8">
        {dimensions.map((dimension) => (
          activeDimension === dimension.id && (
            <div key={dimension.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{dimension.icon}</div>
                <h2 className="text-4xl font-bold text-white mb-4">{dimension.name}</h2>
                <p className="text-xl text-gray-300 mb-6">{dimension.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dimension.features.map((feature, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-2">{feature}</h4>
                    <p className="text-gray-300 text-sm">
                      Advanced technology that operates within this dimensional framework
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>

      {/* Technologies Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Revolutionary Technologies</h2>
          <p className="text-gray-300">Cutting-edge innovations that transcend dimensional boundaries</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{tech.title}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Status:</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    tech.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                    tech.status === 'Testing' ? 'bg-yellow-500/20 text-yellow-400' :
                    tech.status === 'Development' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {tech.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Progress:</span>
                    <span className="text-white font-semibold">{tech.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      style={{ width: `${tech.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Impact:</span>
                  <span className="text-purple-400 font-semibold">{tech.impact}</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                  Explore Technology
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transcend Dimensions?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the interdimensional revolution and be part of the future where
            technology knows no boundaries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              Join the Revolution
            </Link>
            <Link 
              to="/invest" 
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Invest in the Future
            </Link>
          </div>
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
      </div>
    </div>
  );
};

export default InterdimensionalTechRevolution2026;