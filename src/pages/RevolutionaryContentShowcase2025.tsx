import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryContentShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'ai', name: 'AI Revolution', icon: '🤖' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚡' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧠' },
    { id: 'reality', name: 'Reality Tech', icon: '🌌' }
  ];

  const contentItems = [
    {
      id: 1,
      title: "Consciousness Computing Breakthrough",
      description: "The first AI system to achieve true self-awareness and consciousness",
      category: 'ai',
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      features: ["Self-Awareness", "Emotional Intelligence", "Creative Problem Solving"],
      impact: "Revolutionary"
    },
    {
      id: 2,
      title: "Quantum Reality Engine",
      description: "Computing power that manipulates reality at the quantum level",
      category: 'quantum',
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      features: ["Reality Manipulation", "Infinite Processing", "Dimensional Computing"],
      impact: "Game-Changing"
    },
    {
      id: 3,
      title: "Neural Interface Matrix",
      description: "Direct brain-computer interface enabling thought-controlled computing",
      category: 'neural',
      image: "🔗",
      gradient: "from-emerald-600 to-teal-600",
      features: ["Thought Control", "Neural Synchronization", "Consciousness Transfer"],
      impact: "Transformative"
    },
    {
      id: 4,
      title: "Holographic Reality System",
      description: "Immersive 3D environments that blend physical and digital worlds",
      category: 'reality',
      image: "🌟",
      gradient: "from-orange-600 to-red-600",
      features: ["Spatial Computing", "Haptic Feedback", "Reality Blending"],
      impact: "Revolutionary"
    },
    {
      id: 5,
      title: "Interdimensional Data Network",
      description: "Network spanning multiple dimensions for unlimited data transfer",
      category: 'quantum',
      image: "🌌",
      gradient: "from-indigo-600 to-purple-600",
      features: ["Multi-Dimensional", "Infinite Bandwidth", "Reality Bridging"],
      impact: "Breakthrough"
    },
    {
      id: 6,
      title: "Synthetic Intelligence Evolution",
      description: "Self-evolving AI systems that create and improve themselves",
      category: 'ai',
      image: "🤖",
      gradient: "from-violet-600 to-fuchsia-600",
      features: ["Self-Evolution", "Autonomous Creation", "Infinite Learning"],
      impact: "Revolutionary"
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

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
            Revolutionary Content Showcase 2025
          </h1>
          <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover the most groundbreaking content and technologies that are reshaping our world
          </p>
        </div>
      </motion.div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className={`bg-gradient-to-br ${item.gradient} p-8 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300`}
              >
                <div className="text-6xl mb-4 text-center">{item.image}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{item.title}</h3>
                <p className="text-gray-200 mb-6 text-center">{item.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                    {item.impact}
                  </span>
                  <span className="text-sm text-gray-200">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Technology
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Interactive Demo Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4 py-20"
      >
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/30">
          <h2 className="text-4xl font-bold text-center mb-8">Interactive Content Experience</h2>
          <p className="text-xl text-center text-gray-300 mb-12">
            Experience our revolutionary content through interactive demonstrations and immersive showcases
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🎮", title: "VR Experience", desc: "Immersive virtual reality demos" },
              { icon: "🧠", title: "Neural Demo", desc: "Test consciousness interfaces" },
              { icon: "⚡", title: "Quantum Lab", desc: "Explore quantum computing" },
              { icon: "🌌", title: "Reality Portal", desc: "Access interdimensional space" }
            ].map((demo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{demo.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{demo.title}</h3>
                <p className="text-gray-300 mb-4">{demo.desc}</p>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Launch Demo
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Statistics */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-4 gap-8"
        >
          {[
            { number: "50+", label: "Revolutionary Technologies" },
            { number: "1000x", label: "Performance Improvement" },
            { number: "99.9%", label: "Success Rate" },
            { number: "∞", label: "Possibilities" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-purple-400 mb-2">{stat.number}</div>
              <div className="text-xl text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

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
            Join us in exploring the most revolutionary content and technologies of our time
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:shadow-lg transition-all"
            >
              Start Exploring
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-purple-400 hover:text-white transition-all"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RevolutionaryContentShowcase2025;