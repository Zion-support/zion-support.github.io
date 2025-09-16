import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const QuantumRealityEngine2025: React.FC = () => {
  const [quantumState, setQuantumState] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumState(prev => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const quantumStates = [
    { name: 'Superposition', description: 'All possibilities exist simultaneously', color: 'from-blue-500 to-cyan-500' },
    { name: 'Entanglement', description: 'Particles connected across space and time', color: 'from-purple-500 to-pink-500' },
    { name: 'Tunneling', description: 'Particles pass through impossible barriers', color: 'from-green-500 to-teal-500' },
    { name: 'Collapse', description: 'Reality crystallizes into definite states', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      {/* Quantum Field Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0.5, 1.5, 0.5],
                opacity: [0.3, 0.8, 0.3],
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            ⚡ QUANTUM REALITY ENGINE • 2025
          </div>
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Quantum Reality Engine
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Harness the power of quantum mechanics to create, manipulate, and experience multiple realities simultaneously.
          </p>
          
          {/* Quantum State Indicator */}
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg p-4 border border-purple-400/30">
              <div className="flex justify-between text-sm mb-2">
                <span>Quantum State</span>
                <span className="text-cyan-400">{quantumStates[quantumState].name}</span>
              </div>
              <div className="w-full bg-slate-600 rounded-full h-2">
                <motion.div
                  className={`bg-gradient-to-r ${quantumStates[quantumState].color} h-2 rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <p className="text-xs text-gray-300 mt-2">{quantumStates[quantumState].description}</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Enter Quantum Reality →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Manipulate Reality
            </button>
          </div>
        </motion.div>
      </div>

      {/* Quantum Capabilities */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">⚡ Quantum Capabilities</h2>
          <p className="text-xl opacity-90">Experience the impossible made possible through quantum mechanics</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Quantum Superposition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🌀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Superposition</h3>
            <p className="text-blue-100 mb-6 text-center">
              Exist in multiple states simultaneously, exploring all possible realities at once
            </p>
            <ul className="text-blue-200 space-y-2 mb-6 text-sm">
              <li>• Multiple reality states</li>
              <li>• Parallel existence</li>
              <li>• Simultaneous processing</li>
              <li>• Infinite possibilities</li>
            </ul>
            <button className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Enter Superposition →
            </button>
          </motion.div>

          {/* Quantum Entanglement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🔗</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Entanglement</h3>
            <p className="text-purple-100 mb-6 text-center">
              Connect particles across infinite distances, enabling instant communication
            </p>
            <ul className="text-purple-200 space-y-2 mb-6 text-sm">
              <li>• Instant communication</li>
              <li>• Spooky action at distance</li>
              <li>• Quantum teleportation</li>
              <li>• Universal connectivity</li>
            </ul>
            <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Connect Universes →
            </button>
          </motion.div>

          {/* Quantum Tunneling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-green-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-green-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🚪</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Tunneling</h3>
            <p className="text-green-100 mb-6 text-center">
              Pass through impossible barriers and access hidden dimensions
            </p>
            <ul className="text-green-200 space-y-2 mb-6 text-sm">
              <li>• Barrier penetration</li>
              <li>• Dimension hopping</li>
              <li>• Impossible access</li>
              <li>• Reality manipulation</li>
            </ul>
            <button className="w-full bg-white text-green-600 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold">
              Tunnel Through →
            </button>
          </motion.div>

          {/* Quantum Computing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">💻</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-orange-100 mb-6 text-center">
              Process information at exponential speeds using quantum bits
            </p>
            <ul className="text-orange-200 space-y-2 mb-6 text-sm">
              <li>• Exponential processing</li>
              <li>• Quantum algorithms</li>
              <li>• Parallel computation</li>
              <li>• Infinite scalability</li>
            </ul>
            <button className="w-full bg-white text-orange-600 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold">
              Compute Quantum →
            </button>
          </motion.div>

          {/* Quantum Cryptography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🔐</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Cryptography</h3>
            <p className="text-indigo-100 mb-6 text-center">
              Unbreakable security using quantum principles
            </p>
            <ul className="text-indigo-200 space-y-2 mb-6 text-sm">
              <li>• Unbreakable encryption</li>
              <li>• Quantum key distribution</li>
              <li>• Perfect security</li>
              <li>• Future-proof protection</li>
            </ul>
            <button className="w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold">
              Secure Reality →
            </button>
          </motion.div>

          {/* Quantum Teleportation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">✨</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Teleportation</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Instantly transport matter and information across any distance
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Instant transportation</li>
              <li>• Matter teleportation</li>
              <li>• Information transfer</li>
              <li>• Universal mobility</li>
            </ul>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Teleport Now →
            </button>
          </motion.div>
        </div>
      </div>

      {/* Interactive Quantum Demo */}
      <div className="relative z-10 bg-gradient-to-r from-purple-800/50 to-indigo-800/50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">⚡ Interactive Quantum Demo</h2>
            <p className="text-xl opacity-90">Experience quantum mechanics in real-time</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🌌</div>
                <h3 className="text-2xl font-bold mb-4">Quantum Reality Manipulator</h3>
                <p className="text-purple-100 mb-6">
                  Control quantum states and manipulate reality in real-time
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-purple-200">Quantum Controls</h4>
                  <button 
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                  >
                    {isCollapsed ? 'Collapse Wave Function' : 'Expand Wave Function'}
                  </button>
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Create Entanglement
                  </button>
                  <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Quantum Tunnel
                  </button>
                </div>
                
                <div className="bg-black/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-200 mb-4">Quantum State Visualization</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Superposition</span>
                      <span className="text-cyan-400">{isCollapsed ? '0%' : '100%'}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                        animate={{ width: isCollapsed ? '0%' : '100%' }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Entanglement</span>
                      <span className="text-purple-400">75%</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-3/4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Enter Quantum Reality?</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the impossible and manipulate reality itself
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Enter Quantum Realm
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuantumRealityEngine2025;