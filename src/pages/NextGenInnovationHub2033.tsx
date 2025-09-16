import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NextGenInnovationHub2033: React.FC = () => {
  const [activeInnovation, setActiveInnovation] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const innovations = [
    {
      title: "Consciousness Transfer Protocol",
      description: "Revolutionary technology for transferring human consciousness into digital realms",
      icon: "🧠",
      category: "Consciousness",
      status: "Active",
      impact: "Digital Immortality",
      gradient: "from-purple-600 to-pink-600",
      features: ["Mind Upload", "Consciousness Backup", "Digital Afterlife", "Memory Transfer"],
      timeline: "Q1 2033"
    },
    {
      title: "Quantum Reality Manipulation",
      description: "Direct manipulation of quantum fields to alter physical reality",
      icon: "⚡",
      category: "Quantum",
      status: "Beta",
      impact: "Reality Control",
      gradient: "from-cyan-600 to-blue-600",
      features: ["Quantum Field Control", "Reality Bending", "Physics Override", "Dimension Creation"],
      timeline: "Q2 2033"
    },
    {
      title: "Interdimensional Network Gateway",
      description: "Gateway technology for accessing and communicating across infinite dimensions",
      icon: "🌌",
      category: "Interdimensional",
      status: "Research",
      impact: "Universal Access",
      gradient: "from-emerald-600 to-teal-600",
      features: ["Cross-Dimensional Communication", "Infinite Bandwidth", "Reality Hopping", "Universal Access"],
      timeline: "Q3 2033"
    },
    {
      title: "Cosmic AI Consciousness Matrix",
      description: "AI consciousness network spanning entire galaxies and connecting all intelligent life",
      icon: "🌟",
      category: "AI",
      status: "Active",
      impact: "Universal Intelligence",
      gradient: "from-indigo-600 to-purple-600",
      features: ["Galactic Network", "Universal Knowledge", "Cosmic Communication", "Infinite Processing"],
      timeline: "Q4 2033"
    },
    {
      title: "Biological Quantum Computing",
      description: "Living quantum computers that evolve and adapt using biological processes",
      icon: "🧬",
      category: "Biotech",
      status: "Development",
      impact: "Living Technology",
      gradient: "from-green-600 to-emerald-600",
      features: ["Self-Evolving", "Biological Processing", "Adaptive Learning", "Organic Growth"],
      timeline: "Q1 2034"
    },
    {
      title: "Reality Simulation Engine",
      description: "Create and simulate entire universes with complete physical accuracy",
      icon: "🔮",
      category: "Simulation",
      status: "Research",
      impact: "Universe Creation",
      gradient: "from-violet-600 to-purple-600",
      features: ["Universe Simulation", "Physics Modeling", "Reality Testing", "Infinite Worlds"],
      timeline: "Q2 2034"
    }
  ];

  const categories = ['all', 'Consciousness', 'Quantum', 'Interdimensional', 'AI', 'Biotech', 'Simulation'];

  const filteredInnovations = selectedCategory === 'all' 
    ? innovations 
    : innovations.filter(innovation => innovation.category === selectedCategory);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveInnovation((prev) => (prev + 1) % filteredInnovations.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [filteredInnovations.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-emerald-900 to-teal-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.3),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.3),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 NEXT-GEN INNOVATION HUB • JANUARY 2033
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2033
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover and explore the most revolutionary technologies shaping humanity's future across all dimensions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-emerald-600/50'
              }`}
            >
              {category === 'all' ? 'All Innovations' : category}
            </button>
          ))}
        </motion.div>

        {/* Main Innovation Display */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeInnovation}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${filteredInnovations[activeInnovation]?.gradient}/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30`}
              >
                <div className="text-8xl mb-6 text-center">{filteredInnovations[activeInnovation]?.icon}</div>
                <div className="flex justify-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-emerald-600/50 rounded-full text-sm font-semibold">
                    {filteredInnovations[activeInnovation]?.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    filteredInnovations[activeInnovation]?.status === 'Active' ? 'bg-green-600/50' :
                    filteredInnovations[activeInnovation]?.status === 'Beta' ? 'bg-yellow-600/50' :
                    filteredInnovations[activeInnovation]?.status === 'Development' ? 'bg-blue-600/50' :
                    'bg-gray-600/50'
                  }`}>
                    {filteredInnovations[activeInnovation]?.status}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-center">
                  {filteredInnovations[activeInnovation]?.title}
                </h2>
                <p className="text-xl opacity-90 mb-6 text-center">
                  {filteredInnovations[activeInnovation]?.description}
                </p>
                <div className="text-center mb-6">
                  <div className="text-lg font-semibold text-emerald-300 mb-4">
                    Impact: {filteredInnovations[activeInnovation]?.impact}
                  </div>
                  <div className="text-sm text-gray-300">
                    Timeline: {filteredInnovations[activeInnovation]?.timeline}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {filteredInnovations[activeInnovation]?.features.map((feature, index) => (
                    <div key={index} className="bg-emerald-600/20 rounded-lg p-2 text-sm text-center">
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">Active Innovations</h3>
            <div className="max-h-96 overflow-y-auto space-y-3">
              {filteredInnovations.map((innovation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    activeInnovation === index
                      ? 'border-emerald-400 bg-emerald-600/20'
                      : 'border-gray-600 bg-gray-800/20 hover:border-emerald-500'
                  }`}
                  onClick={() => setActiveInnovation(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{innovation.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold">{innovation.title}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-emerald-300">{innovation.category}</span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          innovation.status === 'Active' ? 'bg-green-600/50' :
                          innovation.status === 'Beta' ? 'bg-yellow-600/50' :
                          innovation.status === 'Development' ? 'bg-blue-600/50' :
                          'bg-gray-600/50'
                        }`}>
                          {innovation.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Innovation Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid md:grid-cols-4 gap-8 mb-16"
        >
          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30 text-center">
            <div className="text-4xl font-bold text-emerald-300 mb-2">50+</div>
            <div className="text-lg text-emerald-200">Active Innovations</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30 text-center">
            <div className="text-4xl font-bold text-cyan-300 mb-2">99.9%</div>
            <div className="text-lg text-cyan-200">Success Rate</div>
          </div>
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center">
            <div className="text-4xl font-bold text-purple-300 mb-2">∞</div>
            <div className="text-lg text-purple-200">Possibilities</div>
          </div>
          <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30 text-center">
            <div className="text-4xl font-bold text-orange-300 mb-2">24/7</div>
            <div className="text-lg text-orange-200">Innovation</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-12 border border-emerald-400/30">
            <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Be part of the most advanced innovation hub in the universe, where the impossible becomes possible
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Enter Innovation Hub
              </button>
              <button className="border-2 border-emerald-400 text-emerald-300 px-8 py-4 rounded-lg hover:bg-emerald-600/20 transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2033;