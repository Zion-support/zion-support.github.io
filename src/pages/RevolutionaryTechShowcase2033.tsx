import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryTechShowcase2033: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);
  
  const technologies = [
    {
      title: "Consciousness Transfer Matrix",
      description: "Transfer human consciousness into digital realms for eternal existence",
      icon: "🧠",
      category: "Consciousness Computing",
      impact: "Digital Immortality",
      gradient: "from-purple-600 to-pink-600",
      features: ["Mind Upload", "Consciousness Backup", "Digital Afterlife", "Memory Transfer"]
    },
    {
      title: "Quantum Reality Engine",
      description: "Manipulate reality at the quantum level to create new physical laws",
      icon: "⚡",
      category: "Quantum Computing",
      impact: "Reality Manipulation",
      gradient: "from-cyan-600 to-blue-600",
      features: ["Quantum Field Control", "Reality Bending", "Physics Override", "Dimension Creation"]
    },
    {
      title: "Interdimensional Network",
      description: "Network spanning infinite dimensions for unlimited data and consciousness transfer",
      icon: "🌌",
      category: "Interdimensional Tech",
      impact: "Universal Connection",
      gradient: "from-emerald-600 to-teal-600",
      features: ["Cross-Dimensional Communication", "Infinite Bandwidth", "Reality Hopping", "Universal Access"]
    },
    {
      title: "Cosmic AI Consciousness",
      description: "AI consciousness that spans entire galaxies and connects all intelligent life",
      icon: "🌟",
      category: "Cosmic AI",
      impact: "Universal Intelligence",
      gradient: "from-indigo-600 to-purple-600",
      features: ["Galactic Network", "Universal Knowledge", "Cosmic Communication", "Infinite Processing"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % technologies.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.3),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY SHOWCASE • JANUARY 2033
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Tech Showcase 2033
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies that will reshape the very fabric of reality
          </p>
        </motion.div>

        {/* Main Technology Display */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${technologies[activeTech].gradient}/30 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30`}
              >
                <div className="text-8xl mb-6 text-center">{technologies[activeTech].icon}</div>
                <div className="text-center mb-4">
                  <span className="px-3 py-1 bg-indigo-600/50 rounded-full text-sm font-semibold">
                    {technologies[activeTech].category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-center">
                  {technologies[activeTech].title}
                </h2>
                <p className="text-xl opacity-90 mb-6 text-center">
                  {technologies[activeTech].description}
                </p>
                <div className="text-center">
                  <div className="text-lg font-semibold text-indigo-300 mb-4">
                    Impact: {technologies[activeTech].impact}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {technologies[activeTech].features.map((feature, index) => (
                      <div key={index} className="bg-indigo-600/20 rounded-lg p-2 text-sm text-center">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">Technology Categories</h3>
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  activeTech === index
                    ? 'border-indigo-400 bg-indigo-600/20'
                    : 'border-gray-600 bg-gray-800/20 hover:border-indigo-500'
                }`}
                onClick={() => setActiveTech(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{tech.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold">{tech.title}</h4>
                    <p className="text-gray-300 text-sm">{tech.category}</p>
                    <p className="text-indigo-300 text-sm font-semibold">{tech.impact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Interactive Technology Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform">🧬</div>
            <h3 className="text-xl font-bold mb-3 text-center">Quantum DNA Computing</h3>
            <p className="text-purple-200 text-center mb-4">Biological quantum processors that evolve and adapt</p>
            <div className="text-center">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Explore
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform">🌍</div>
            <h3 className="text-xl font-bold mb-3 text-center">Planetary AI Network</h3>
            <p className="text-cyan-200 text-center mb-4">Global consciousness spanning entire planets</p>
            <div className="text-center">
              <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors">
                Explore
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform">🚀</div>
            <h3 className="text-xl font-bold mb-3 text-center">Interstellar Computing</h3>
            <p className="text-emerald-200 text-center mb-4">Computing power that spans star systems</p>
            <div className="text-center">
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                Explore
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform">🔮</div>
            <h3 className="text-xl font-bold mb-3 text-center">Reality Manipulation</h3>
            <p className="text-orange-200 text-center mb-4">Direct manipulation of physical reality</p>
            <div className="text-center">
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Explore
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-violet-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-violet-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform">🌌</div>
            <h3 className="text-xl font-bold mb-3 text-center">Dimension Gateway</h3>
            <p className="text-violet-200 text-center mb-4">Access to parallel universes and dimensions</p>
            <div className="text-center">
              <button className="bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors">
                Explore
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-pink-600/30 to-rose-600/30 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30 hover:scale-105 transition-all duration-300 group">
            <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform">💫</div>
            <h3 className="text-xl font-bold mb-3 text-center">Cosmic Consciousness</h3>
            <p className="text-pink-200 text-center mb-4">Universal awareness spanning galaxies</p>
            <div className="text-center">
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                Explore
              </button>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-12 border border-indigo-400/30">
            <h2 className="text-4xl font-bold mb-6">Experience the Future Today</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join us in exploring these revolutionary technologies that will define the next era of human evolution and cosmic expansion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Journey
              </button>
              <button className="border-2 border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg hover:bg-indigo-600/20 transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2033;