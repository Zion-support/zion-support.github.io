import React from 'react';
import { motion } from 'framer-motion';

const NextGenInnovationHub2025: React.FC = () => {
  const innovations = [
    {
      id: 1,
      title: "Autonomous AI Agents",
      description: "Self-evolving AI systems that can learn, adapt, and operate independently",
      icon: "🤖",
      category: "Artificial Intelligence",
      status: "Live",
      applications: ["Business Automation", "Research", "Customer Service"],
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      title: "Quantum Computing Platform",
      description: "Next-generation quantum computing infrastructure for complex problem solving",
      icon: "⚛️",
      category: "Quantum Technology",
      status: "Beta",
      applications: ["Cryptography", "Optimization", "Simulation"],
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "Neural Interface Network",
      description: "Direct brain-computer interfaces for seamless human-machine interaction",
      icon: "🧠",
      category: "Neural Technology",
      status: "Research",
      applications: ["Medical", "Gaming", "Communication"],
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "Reality Manipulation Engine",
      description: "Advanced systems for creating and manipulating digital realities",
      icon: "🌌",
      category: "Reality Tech",
      status: "Experimental",
      applications: ["Entertainment", "Training", "Architecture"],
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 5,
      title: "Consciousness Computing",
      description: "Computing systems that exhibit genuine consciousness and awareness",
      icon: "🌟",
      category: "Consciousness AI",
      status: "Prototype",
      applications: ["Research", "Healthcare", "Education"],
      color: "from-orange-600 to-red-600"
    },
    {
      id: 6,
      title: "Interdimensional Portal",
      description: "Technology for communication and interaction across dimensions",
      icon: "🌀",
      category: "Interdimensional Tech",
      status: "Theoretical",
      applications: ["Exploration", "Communication", "Research"],
      color: "from-violet-600 to-purple-600"
    }
  ];

  const categories = ["All", "Artificial Intelligence", "Quantum Technology", "Neural Technology", "Reality Tech", "Consciousness AI", "Interdimensional Tech"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 NEXT-GEN INNOVATION HUB • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover and explore the most revolutionary technologies that are shaping humanity's future. 
              From consciousness computing to interdimensional technology, the future is here.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                🔬 Explore Innovations
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                📊 View Analytics
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                index === 0 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' 
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Innovations Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => (
            <motion.div
              key={innovation.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${innovation.color}/30 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300`}
            >
              <div className="text-4xl mb-4 text-center">{innovation.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{innovation.title}</h3>
              <p className="text-white/80 mb-4 text-center text-sm">{innovation.description}</p>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">
                    {innovation.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    innovation.status === 'Live' ? 'bg-green-400/20 text-green-400' :
                    innovation.status === 'Beta' ? 'bg-yellow-400/20 text-yellow-400' :
                    innovation.status === 'Research' ? 'bg-blue-400/20 text-blue-400' :
                    innovation.status === 'Experimental' ? 'bg-purple-400/20 text-purple-400' :
                    innovation.status === 'Prototype' ? 'bg-orange-400/20 text-orange-400' :
                    'bg-gray-400/20 text-gray-400'
                  }`}>
                    {innovation.status}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-white/90">Applications:</h4>
                  <div className="flex flex-wrap gap-1">
                    {innovation.applications.map((app, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <button className={`w-full bg-gradient-to-r ${innovation.color} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm`}>
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Innovation Stats */}
      <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">Innovation Hub Metrics</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our innovation hub is continuously pushing the boundaries of what's possible
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-white/80">Active Innovations</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="text-4xl font-bold text-indigo-400 mb-2">99.9%</div>
              <div className="text-white/80">Success Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
              <div className="text-white/80">Possibilities</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-white/80">Innovation</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center bg-gradient-to-r from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
        >
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Be part of the most advanced innovation ecosystem on the planet. 
            Collaborate with leading scientists, engineers, and visionaries to create the future.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🚀 Join Innovation Hub
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              📞 Contact Team
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;