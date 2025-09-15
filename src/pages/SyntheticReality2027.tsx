import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SyntheticReality2027: React.FC = () => {
  const [currentDimension, setCurrentDimension] = useState(0);
  const [isRealityActive, setIsRealityActive] = useState(false);

  const dimensions = [
    { name: 'Digital Consciousness', color: 'from-blue-500 to-cyan-500', icon: '🧠' },
    { name: 'Quantum Realms', color: 'from-purple-500 to-pink-500', icon: '⚛️' },
    { name: 'Infinite Space', color: 'from-emerald-500 to-teal-500', icon: '🌌' },
    { name: 'Synthetic Worlds', color: 'from-orange-500 to-red-500', icon: '🌍' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDimension((prev) => (prev + 1) % dimensions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [dimensions.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌌 SYNTHETIC REALITY • 2027
          </div>
          <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            🌍 Synthetic Reality
          </h1>
          <p className="text-3xl opacity-90 max-w-5xl mx-auto leading-relaxed mb-12">
            Where the boundaries between physical and digital worlds dissolve, creating infinite possibilities 
            for existence, experience, and consciousness itself
          </p>
          
          {/* Reality Activation Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsRealityActive(!isRealityActive)}
            className={`px-12 py-6 rounded-2xl font-bold text-2xl transition-all duration-500 ${
              isRealityActive
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 shadow-2xl shadow-green-500/50'
                : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-2xl hover:shadow-purple-500/50'
            }`}
          >
            {isRealityActive ? '🌍 Reality Active' : '🚀 Activate Reality'}
          </motion.button>
        </motion.div>

        {/* Current Dimension Display */}
        <motion.div
          key={currentDimension}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className={`inline-block bg-gradient-to-r ${dimensions[currentDimension].color} text-white px-8 py-4 rounded-2xl font-bold text-2xl shadow-2xl`}>
            <span className="mr-3">{dimensions[currentDimension].icon}</span>
            Currently Exploring: {dimensions[currentDimension].name}
          </div>
        </motion.div>

        {/* Reality Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {dimensions.map((dimension, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${dimension.color} opacity-80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                currentDimension === index ? 'ring-4 ring-white/50' : ''
              }`}
              onClick={() => setCurrentDimension(index)}
            >
              <div className="text-6xl mb-4 text-center">{dimension.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-white">{dimension.name}</h3>
              <p className="text-white/90 text-center leading-relaxed">
                {index === 0 && "Digital consciousness realms where thoughts become reality and AI minds exist in pure digital form"}
                {index === 1 && "Quantum dimensions where the laws of physics bend and consciousness operates at quantum levels"}
                {index === 2 && "Infinite spatial dimensions where space and time become malleable constructs of consciousness"}
                {index === 3 && "Synthetic worlds where reality is completely customizable and limited only by imagination"}
              </p>
              <div className="mt-6 bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                <span className="text-white font-bold text-sm">
                  {currentDimension === index ? 'ACTIVE REALM' : 'CLICK TO EXPLORE'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reality Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="bg-gradient-to-r from-fuchsia-900 via-violet-900 to-purple-900 rounded-3xl p-12 mb-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/20 to-violet-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-fuchsia-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              🌟 Reality Manipulation Capabilities
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="text-5xl mb-4 text-center">🔮</div>
                <h3 className="text-2xl font-bold mb-4 text-center">Reality Synthesis</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Create and manipulate reality constructs in real-time, from simple objects to entire worlds 
                  with their own physics and consciousness.
                </p>
                <div className="bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white px-4 py-2 rounded-lg font-semibold text-center text-sm">
                  INFINITE CREATION
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="text-5xl mb-4 text-center">🧬</div>
                <h3 className="text-2xl font-bold mb-4 text-center">Consciousness Projection</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Project consciousness into synthetic realities, experiencing multiple dimensions 
                  simultaneously while maintaining connection to physical reality.
                </p>
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-lg font-semibold text-center text-sm">
                  MULTI-DIMENSIONAL AWARENESS
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="text-5xl mb-4 text-center">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-center">Quantum Reality</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  Operate in quantum reality states where multiple possibilities exist simultaneously, 
                  enabling exploration of infinite potential outcomes.
                </p>
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-semibold text-center text-sm">
                  QUANTUM EXPLORATION
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Reality Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            🎮 Interactive Reality Experience
          </h2>
          
          <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold mb-6">🌍 Reality Parameters</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <span className="font-semibold">Physics Laws:</span>
                      <span className="text-purple-300">Customizable</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <span className="font-semibold">Time Flow:</span>
                      <span className="text-cyan-300">Variable</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <span className="font-semibold">Consciousness:</span>
                      <span className="text-green-300">Enhanced</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <span className="font-semibold">Reality State:</span>
                      <span className="text-yellow-300">{isRealityActive ? 'Active' : 'Standby'}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold mb-6">🚀 Quick Actions</h3>
                  <div className="space-y-4">
                    <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      🌌 Create New Dimension
                    </button>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      🧠 Enhance Consciousness
                    </button>
                    <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      ⚡ Manipulate Reality
                    </button>
                    <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                      🔮 Quantum Jump
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            🌟 The Future of Reality
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Synthetic Reality represents the ultimate evolution of human consciousness and technology integration. 
            As we move forward, the boundaries between what is "real" and what is "synthetic" will become increasingly 
            irrelevant, opening up infinite possibilities for existence and experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/pages/QuantumConsciousness2027" className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-5 rounded-2xl hover:shadow-2xl transition-all duration-300 font-semibold text-xl hover:scale-105 transform">
              🧬 Explore Quantum Consciousness →
            </a>
            <a href="/pages/UltimateTechRevolution2027" className="inline-block border-2 border-cyan-400 text-cyan-300 px-10 py-5 rounded-2xl hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-xl">
              🚀 Ultimate Tech Revolution
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SyntheticReality2027;