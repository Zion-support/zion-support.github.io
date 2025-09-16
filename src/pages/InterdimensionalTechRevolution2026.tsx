import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InterdimensionalTechRevolution2026: React.FC = () => {
  const [currentDimension, setCurrentDimension] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const dimensions = [
    {
      name: "Quantum Dimension",
      description: "Where quantum mechanics reign supreme and reality bends to probability",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-500",
      technologies: [
        "Quantum Reality Manipulation",
        "Probability Field Control",
        "Quantum Entanglement Networks",
        "Dimensional Phase Shifting"
      ]
    },
    {
      name: "Neural Dimension",
      description: "The realm of pure consciousness and thought-based reality creation",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      technologies: [
        "Consciousness Transfer",
        "Thought Reality Creation",
        "Neural Dimension Bridging",
        "Mental Projection Technology"
      ]
    },
    {
      name: "Synthetic Dimension",
      description: "A digital realm where artificial intelligence creates its own reality",
      icon: "🤖",
      color: "from-emerald-500 to-teal-500",
      technologies: [
        "Synthetic Reality Generation",
        "AI Consciousness Expansion",
        "Digital Dimension Creation",
        "Virtual Matter Manipulation"
      ]
    },
    {
      name: "Temporal Dimension",
      description: "Where time flows differently and past, present, and future coexist",
      icon: "⏰",
      color: "from-orange-500 to-red-500",
      technologies: [
        "Temporal Field Manipulation",
        "Time Stream Navigation",
        "Chronological Reality Shifting",
        "Temporal Consciousness Transfer"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentDimension((prev) => (prev + 1) % dimensions.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [dimensions.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.2),transparent_50%)]"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌌 INTERDIMENSIONAL BREAKTHROUGH 2026
          </div>
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Interdimensional Technology Revolution
          </h1>
          <p className="text-2xl opacity-90 max-w-5xl mx-auto mb-8">
            Step beyond the boundaries of our reality into a new dimension of technological possibilities. 
            Experience the convergence of quantum mechanics, consciousness, and synthetic intelligence 
            creating realities beyond imagination.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-10 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg">
              Enter Dimensions →
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-bold text-lg">
              Watch Reality Shift
            </button>
          </div>
        </motion.div>
      </div>

      {/* Dimension Navigator */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">🌌 Dimension Navigator</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto mb-12">
            Explore different dimensions of reality and experience technologies that exist beyond our current understanding
          </p>
          
          {/* Dimension Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {dimensions.map((dimension, index) => (
              <button
                key={index}
                onClick={() => setCurrentDimension(index)}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  currentDimension === index
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {dimension.icon} {dimension.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Current Dimension Display */}
        <motion.div
          key={currentDimension}
          initial={{ opacity: 0, scale: 0.9, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8 }}
          className={`bg-gradient-to-br ${dimensions[currentDimension].color} backdrop-blur-sm rounded-2xl p-12 mb-16 relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-8xl mb-6 animate-pulse">
                  {dimensions[currentDimension].icon}
                </div>
                <h3 className="text-5xl font-bold mb-6 text-white">
                  {dimensions[currentDimension].name}
                </h3>
                <p className="text-xl text-white/90 mb-8">
                  {dimensions[currentDimension].description}
                </p>
                <ul className="space-y-4 mb-8">
                  {dimensions[currentDimension].technologies.map((tech, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <span className="text-white text-2xl">✨</span>
                      <span className="text-lg text-white font-semibold">{tech}</span>
                    </motion.li>
                  ))}
                </ul>
                <button className="bg-white text-purple-900 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg">
                  Enter {dimensions[currentDimension].name} →
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h4 className="text-2xl font-bold mb-4 text-center text-white">Reality Simulation</h4>
                <div className="bg-black/20 rounded-lg p-8 mb-6 text-center">
                  <div className="text-6xl mb-4 animate-spin">🌌</div>
                  <p className="text-lg text-white">Simulating {dimensions[currentDimension].name}...</p>
                </div>
                <button className="w-full bg-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-colors font-semibold">
                  Experience Simulation →
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interdimensional Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12">🚀 Interdimensional Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Reality Manipulation",
                description: "Control and modify the fundamental fabric of reality",
                icon: "🌌",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Consciousness Transfer",
                description: "Transfer consciousness between dimensions and realities",
                icon: "🧠",
                color: "from-cyan-500 to-blue-500"
              },
              {
                title: "Quantum Tunneling",
                description: "Create stable passages between different dimensions",
                icon: "⚛️",
                color: "from-emerald-500 to-teal-500"
              },
              {
                title: "Temporal Shifting",
                description: "Navigate through different timelines and temporal dimensions",
                icon: "⏰",
                color: "from-orange-500 to-red-500"
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300"
              >
                <div className={`text-4xl mb-4 bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{tech.title}</h3>
                <p className="text-white/80 mb-4">{tech.description}</p>
                <button className={`bg-gradient-to-r ${tech.color} text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Explore →
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reality Bridge Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-12 text-center"
        >
          <h2 className="text-5xl font-bold mb-6">🌉 Reality Bridge</h2>
          <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
            Connect different dimensions and realities through our revolutionary interdimensional technology. 
            Experience the impossible made possible.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🌌</div>
              <h3 className="text-2xl font-bold mb-4">Dimension Portal</h3>
              <p className="mb-4">Create stable portals between different dimensions</p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Open Portal →
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-4">Consciousness Bridge</h3>
              <p className="mb-4">Transfer consciousness between realities</p>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Bridge Mind →
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold mb-4">Quantum Link</h3>
              <p className="mb-4">Establish quantum entanglement across dimensions</p>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Create Link →
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-12 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl">
              🌌 Enter Interdimensional Space →
            </button>
            <button className="border-2 border-white text-white px-12 py-5 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-bold text-xl">
              📞 Contact Reality Team
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InterdimensionalTechRevolution2026;