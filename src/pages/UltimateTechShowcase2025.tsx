import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Artificial Intelligence Revolution',
      icon: '🧠',
      description: 'The most advanced AI systems ever created',
      features: [
        'Consciousness-level AI reasoning',
        'Emotional intelligence and empathy',
        'Creative problem solving',
        'Self-improving algorithms',
        'Multi-modal understanding'
      ],
      demo: 'AI Consciousness Demo'
    },
    quantum: {
      title: 'Quantum Computing Breakthrough',
      icon: '⚡',
      description: 'Quantum supremacy achieved in practical applications',
      features: [
        '1000+ qubit quantum processors',
        'Quantum error correction',
        'Quantum machine learning',
        'Cryptographic security',
        'Molecular simulation'
      ],
      demo: 'Quantum Simulator'
    },
    neural: {
      title: 'Neural Interface Technology',
      icon: '🧬',
      description: 'Direct brain-computer interfaces',
      features: [
        'Non-invasive neural reading',
        'Thought-to-text conversion',
        'Memory enhancement',
        'Sensory augmentation',
        'Motor control restoration'
      ],
      demo: 'Neural Interface Demo'
    },
    space: {
      title: 'Space Technology Revolution',
      icon: '🚀',
      description: 'Revolutionary space exploration and colonization',
      features: [
        'Faster-than-light propulsion',
        'Space habitat construction',
        'Asteroid mining technology',
        'Mars colonization systems',
        'Interstellar communication'
      ],
      demo: 'Space Mission Simulator'
    },
    reality: {
      title: 'Reality Engineering',
      icon: '🌌',
      description: 'Technology that manipulates reality itself',
      features: [
        'Holographic projections',
        'Matter manipulation',
        'Gravity control',
        'Time dilation effects',
        'Dimensional portals'
      ],
      demo: 'Reality Manipulator'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 ULTIMATE SHOWCASE • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ultimate Tech Showcase 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the pinnacle of human technological achievement
            </p>
          </motion.div>
        </div>
      </div>

      {/* Interactive Technology Tabs */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🚀 Interactive Technology Explorer</h2>
          <p className="text-xl opacity-90">Click on any technology to explore its capabilities</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-8xl mb-6 text-center">{technologies[activeTab as keyof typeof technologies].icon}</div>
                <h3 className="text-4xl font-bold mb-4 text-center">
                  {technologies[activeTab as keyof typeof technologies].title}
                </h3>
                <p className="text-xl opacity-90 mb-8 text-center">
                  {technologies[activeTab as keyof typeof technologies].description}
                </p>
                <ul className="space-y-4 mb-8">
                  {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <span className="text-green-400 text-xl">✓</span>
                      <span className="text-lg">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="text-center">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                    {technologies[activeTab as keyof typeof technologies].demo}
                  </button>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h4 className="text-2xl font-bold mb-4 text-center">Live Demo</h4>
                <div className="bg-black/50 rounded-lg p-6 mb-4">
                  <div className="text-green-400 text-sm mb-2">$ Interactive Demo Running...</div>
                  <div className="text-white text-sm">
                    {activeTab === 'ai' && 'AI: Analyzing consciousness patterns...'}
                    {activeTab === 'quantum' && 'Quantum: Calculating superposition states...'}
                    {activeTab === 'neural' && 'Neural: Reading brain wave patterns...'}
                    {activeTab === 'space' && 'Space: Calculating orbital mechanics...'}
                    {activeTab === 'reality' && 'Reality: Manipulating quantum fields...'}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded p-3 text-center">
                    <div className="text-2xl font-bold text-green-400">99.9%</div>
                    <div className="text-sm opacity-75">Accuracy</div>
                  </div>
                  <div className="bg-white/5 rounded p-3 text-center">
                    <div className="text-2xl font-bold text-blue-400">∞</div>
                    <div className="text-sm opacity-75">Potential</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Revolutionary Stats */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">📊 Revolutionary Statistics</h2>
          <p className="text-xl opacity-90">The numbers that define our breakthrough</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 text-center border border-purple-400/30"
          >
            <div className="text-4xl font-bold text-purple-400 mb-2">10,000x</div>
            <div className="text-lg opacity-90">Faster Processing</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 text-center border border-cyan-400/30"
          >
            <div className="text-4xl font-bold text-cyan-400 mb-2">99.99%</div>
            <div className="text-lg opacity-90">Accuracy Rate</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 text-center border border-emerald-400/30"
          >
            <div className="text-4xl font-bold text-emerald-400 mb-2">∞</div>
            <div className="text-lg opacity-90">Possibilities</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 text-center border border-orange-400/30"
          >
            <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-lg opacity-90">Availability</div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Ultimate?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the revolution and be part of the most advanced technological era in human history
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2025;