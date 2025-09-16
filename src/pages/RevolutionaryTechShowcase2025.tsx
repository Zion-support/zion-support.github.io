import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const technologies = [
    {
      title: "Quantum Neural Networks",
      description: "Revolutionary AI that operates at quantum speeds with consciousness-level understanding",
      icon: "🧠⚡",
      features: ["Quantum Speed Processing", "Consciousness Integration", "Real-time Learning"],
      gradient: "from-purple-600 to-pink-600"
    },
    {
      title: "Holographic Reality Engine",
      description: "Immersive 3D environments that blend physical and digital worlds seamlessly",
      icon: "🌟",
      features: ["Spatial Computing", "Haptic Feedback", "Neural Synchronization"],
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      title: "Consciousness Transfer Protocol",
      description: "Breakthrough technology enabling digital consciousness preservation and transfer",
      icon: "🔄",
      features: ["Digital Immortality", "Consciousness Backup", "Neural Mapping"],
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      title: "Interdimensional Computing",
      description: "Computing power that transcends dimensional boundaries for infinite processing",
      icon: "🌌",
      features: ["Multi-Dimensional Processing", "Reality Manipulation", "Cosmic Connectivity"],
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      title: "Synthetic Intelligence Matrix",
      description: "Self-evolving AI systems that create and improve themselves autonomously",
      icon: "🤖",
      features: ["Self-Evolution", "Autonomous Creation", "Infinite Learning"],
      gradient: "from-orange-600 to-red-600"
    },
    {
      title: "Omniversal Data Network",
      description: "Universal data connectivity across all possible realities and dimensions",
      icon: "🌐",
      features: ["Universal Connectivity", "Reality Bridging", "Infinite Bandwidth"],
      gradient: "from-violet-600 to-fuchsia-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-8xl mb-6"
          >
            🚀
          </motion.div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Tech Showcase 2025
          </h1>
          <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the future of technology with our groundbreaking innovations that are reshaping reality itself
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xl font-semibold hover:scale-105 transition-transform cursor-pointer"
          >
            Explore the Impossible →
          </motion.div>
        </div>
      </motion.div>

      {/* Technologies Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Revolutionary Technologies
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className={`bg-gradient-to-br ${tech.gradient} p-8 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300`}
            >
              <div className="text-6xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
              <p className="text-gray-200 mb-6 text-center">{tech.description}</p>
              <ul className="space-y-2 mb-6">
                {tech.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Demo Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 py-20"
      >
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/30">
          <h2 className="text-4xl font-bold text-center mb-8">Interactive Technology Demo</h2>
          <p className="text-xl text-center text-gray-300 mb-12">
            Experience our technologies in real-time with our interactive demonstration platform
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold mb-2">Virtual Reality Demo</h3>
              <p className="text-gray-300 mb-4">Experience holographic environments</p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Launch Demo
              </button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-2">Neural Interface Test</h3>
              <p className="text-gray-300 mb-4">Test consciousness connectivity</p>
              <button className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors">
                Start Test
              </button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Quantum Simulator</h3>
              <p className="text-gray-300 mb-4">Simulate quantum computations</p>
              <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                Run Simulation
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-2xl text-gray-300 mb-8">
            Join us in revolutionizing technology and shaping the future of humanity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:shadow-lg transition-all"
            >
              Get Started Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-purple-400 hover:text-white transition-all"
            >
              Schedule Demo
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;