import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InterdimensionalRealityEngine2027: React.FC = () => {
  const [selectedDimension, setSelectedDimension] = useState(0);

  const dimensions = [
    {
      id: 0,
      name: "Quantum Dimension",
      description: "Where quantum mechanics govern reality itself",
      color: "from-cyan-600 to-blue-600",
      features: ["Quantum Entanglement", "Superposition States", "Wave-Particle Duality"],
      image: "⚛️"
    },
    {
      id: 1,
      name: "Neural Dimension",
      description: "A realm of pure consciousness and thought",
      color: "from-purple-600 to-pink-600",
      features: ["Consciousness Transfer", "Mind Reading", "Thought Visualization"],
      image: "🧠"
    },
    {
      id: 2,
      name: "Cosmic Dimension",
      description: "The vast expanse of the universe and beyond",
      color: "from-indigo-600 to-violet-600",
      features: ["Galactic Travel", "Stellar Manipulation", "Cosmic Awareness"],
      image: "🌌"
    },
    {
      id: 3,
      name: "Temporal Dimension",
      description: "Where time flows differently and can be manipulated",
      color: "from-emerald-600 to-teal-600",
      features: ["Time Dilation", "Temporal Loops", "Chronological Navigation"],
      image: "⏰"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌌 INTERDIMENSIONAL REALITY ENGINE • 2027
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Interdimensional Reality Engine
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Step into alternate dimensions and experience realities beyond human comprehension. 
              Our revolutionary engine allows you to traverse multiple dimensions simultaneously.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Enter Dimensions →
              </button>
              <button className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400/10 transition-colors font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dimension Selector */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">🌌 Choose Your Dimension</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Select from our available dimensions and experience reality from a completely different perspective
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {dimensions.map((dimension, index) => (
            <motion.div
              key={dimension.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${dimension.color} p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 ${
                selectedDimension === dimension.id ? 'ring-4 ring-white/50' : ''
              }`}
              onClick={() => setSelectedDimension(dimension.id)}
            >
              <div className="text-5xl mb-4 text-center">{dimension.image}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{dimension.name}</h3>
              <p className="text-sm opacity-90 mb-4 text-center">{dimension.description}</p>
              <div className="space-y-1">
                {dimension.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="text-xs opacity-80">
                    • {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Dimension Display */}
        <motion.div
          key={selectedDimension}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-br ${dimensions[selectedDimension].color} rounded-2xl p-12 mb-16`}
        >
          <div className="text-center mb-12">
            <div className="text-8xl mb-6">{dimensions[selectedDimension].image}</div>
            <h2 className="text-4xl font-bold mb-4">{dimensions[selectedDimension].name}</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              {dimensions[selectedDimension].description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {dimensions[selectedDimension].features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
              >
                <h3 className="text-xl font-bold mb-3">{feature}</h3>
                <p className="text-sm opacity-80">
                  Experience the power of {feature.toLowerCase()} in this dimension
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reality Engine Features */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">⚡ Reality Engine Capabilities</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Our interdimensional reality engine provides unprecedented control over reality itself
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🌊</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Reality Manipulation</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Bend the laws of physics and manipulate reality to your will
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Gravity control</li>
              <li>• Matter transformation</li>
              <li>• Energy manipulation</li>
              <li>• Space-time distortion</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🌀</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Dimension Travel</h3>
            <p className="text-purple-100 mb-6 text-center">
              Seamlessly travel between dimensions and experience multiple realities
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Instant teleportation</li>
              <li>• Parallel universe access</li>
              <li>• Dimensional portals</li>
              <li>• Reality synchronization</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🔮</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Cosmic Awareness</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Gain universal consciousness and understand the nature of existence
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Universal perspective</li>
              <li>• Cosmic intelligence</li>
              <li>• Interdimensional wisdom</li>
              <li>• Reality comprehension</li>
            </ul>
          </motion.div>
        </div>

        {/* Interactive Demo */}
        <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🎮 Interactive Reality Demo</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Experience our interdimensional reality engine through this interactive demonstration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">🌌 Dimension Portal</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {dimensions.map((dimension, index) => (
                    <button
                      key={dimension.id}
                      onClick={() => setSelectedDimension(dimension.id)}
                      className={`p-4 rounded-lg transition-all duration-300 ${
                        selectedDimension === dimension.id
                          ? 'bg-white/20 scale-105'
                          : 'bg-white/10 hover:bg-white/15'
                      }`}
                    >
                      <div className="text-3xl mb-2">{dimension.image}</div>
                      <div className="text-sm font-semibold">{dimension.name}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">⚡ Reality Controls</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Gravity Level</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="50"
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Time Dilation</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="25"
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Reality Stability</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="75"
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🔬</div>
            <h3 className="text-xl font-bold mb-3 text-center">Scientific Research</h3>
            <p className="text-cyan-100 text-sm text-center">
              Explore alternate physics and test theories in different dimensions
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🎨</div>
            <h3 className="text-xl font-bold mb-3 text-center">Creative Expression</h3>
            <p className="text-purple-100 text-sm text-center">
              Create art and experiences that transcend normal reality
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🏥</div>
            <h3 className="text-xl font-bold mb-3 text-center">Medical Therapy</h3>
            <p className="text-emerald-100 text-sm text-center">
              Use alternate realities for healing and psychological treatment
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4 text-center">🚀</div>
            <h3 className="text-xl font-bold mb-3 text-center">Space Exploration</h3>
            <p className="text-orange-100 text-sm text-center">
              Explore the universe through interdimensional travel
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">🌟 Ready to Enter New Dimensions?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Experience reality like never before. Step into alternate dimensions and 
            discover what's possible beyond our current understanding.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Enter Dimensions →
            </button>
            <button className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400/10 transition-colors font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterdimensionalRealityEngine2027;