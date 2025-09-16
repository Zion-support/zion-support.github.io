import React, { useState } from 'react';
import { motion } from 'framer-motion';

const UltimateTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const techCategories = {
    ai: {
      title: 'Artificial Intelligence',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Conscious AI Systems',
        'Emotional Intelligence',
        'Creative Problem Solving',
        'Ethical Decision Making',
        'Self-Learning Networks',
        'Human-AI Collaboration'
      ]
    },
    quantum: {
      title: 'Quantum Computing',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      features: [
        'Quantum Supremacy',
        'Quantum Cryptography',
        'Molecular Simulation',
        'Quantum Machine Learning',
        'Quantum Teleportation',
        'Quantum Consciousness'
      ]
    },
    neural: {
      title: 'Neural Interfaces',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      features: [
        'Brain-Computer Interface',
        'Thought Control',
        'Neural Feedback',
        'Memory Enhancement',
        'Sensory Augmentation',
        'Consciousness Transfer'
      ]
    },
    space: {
      title: 'Space Technology',
      icon: '🚀',
      color: 'from-orange-600 to-red-600',
      features: [
        'Interstellar Travel',
        'Space Colonization',
        'Asteroid Mining',
        'Terraforming',
        'Wormhole Technology',
        'Alien Communication'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 ULTIMATE SHOWCASE • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ultimate Tech Showcase 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Discover the most advanced technologies that are revolutionizing every aspect of human existence
            </p>
          </motion.div>

          {/* Interactive Tech Categories */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {Object.entries(techCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === key
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <span className="text-2xl mr-2">{category.icon}</span>
                  {category.title}
                </button>
              ))}
            </div>

            {/* Active Category Display */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-br ${techCategories[activeTab as keyof typeof techCategories].color}/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20`}
            >
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">
                  {techCategories[activeTab as keyof typeof techCategories].icon}
                </div>
                <h2 className="text-4xl font-bold mb-4">
                  {techCategories[activeTab as keyof typeof techCategories].title}
                </h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                  Explore the cutting-edge innovations in {techCategories[activeTab as keyof typeof techCategories].title.toLowerCase()} that are reshaping our world
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techCategories[activeTab as keyof typeof techCategories].features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                    <p className="text-white/70 text-sm">
                      Revolutionary technology that pushes the boundaries of what's possible
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Revolutionary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-4 gap-8 mb-16"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-white/70">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">1000x</div>
              <div className="text-white/70">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
              <div className="text-white/70">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-white/70">Availability</div>
            </div>
          </motion.div>

          {/* Future Vision */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30 text-center"
          >
            <h2 className="text-4xl font-bold mb-6">The Future is Here</h2>
            <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
              We're not just imagining the future – we're building it. Our revolutionary technologies are already 
              transforming industries, enhancing human capabilities, and opening doors to possibilities that were 
              once considered science fiction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Journey
              </button>
              <button className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                Explore All Technologies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UltimateTechShowcase2026;