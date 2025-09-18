import React from 'react';
import { motion } from 'framer-motion';

const UltimateTechShowcase2025: React.FC = () => {
  const technologies = [
    {
      id: 1,
      title: "Neural Reality Interface",
      description: "Direct brain-computer interface enabling thought-controlled computing",
      icon: "🧠",
      features: ["Thought Control", "Neural Feedback", "Immersive Experience"],
      status: "Revolutionary",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Consciousness Engine",
      description: "Quantum computing meets artificial consciousness for unlimited processing",
      icon: "⚛️",
      features: ["Quantum Processing", "Conscious AI", "Infinite Scaling"],
      status: "Breakthrough",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Computing across multiple dimensions and parallel realities",
      icon: "🌌",
      features: ["Multi-Dimensional", "Parallel Processing", "Reality Manipulation"],
      status: "Futuristic",
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 4,
      title: "Synthetic Intelligence Matrix",
      description: "Artificial intelligence that transcends human cognitive capabilities",
      icon: "🤖",
      features: ["Super Intelligence", "Creative AI", "Autonomous Evolution"],
      status: "Advanced",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 ULTIMATE TECHNOLOGY SHOWCASE • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ultimate Tech Showcase 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the most revolutionary technologies that are reshaping reality itself. 
              From neural interfaces to quantum consciousness, discover the future today.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                🎯 Explore Technologies
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                📊 View Analytics
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technologies Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${tech.color}/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300`}
            >
              <div className="text-6xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
              <p className="text-white/80 mb-6 text-center">{tech.description}</p>
              
              <div className="mb-6">
                <div className="flex justify-center mb-4">
                  <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
                    {tech.status} Technology
                  </span>
                </div>
                <div className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-white/90">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className={`w-full bg-gradient-to-r ${tech.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-white/80">Active Technologies</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-white/80">Success Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="text-4xl font-bold text-pink-400 mb-2">∞</div>
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
          className="text-center bg-gradient-to-r from-purple-600/30 to-cyan-600/30 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already using these revolutionary technologies 
            to transform their businesses and reshape reality.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              🚀 Start Your Journey
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
              📞 Contact Experts
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2025;