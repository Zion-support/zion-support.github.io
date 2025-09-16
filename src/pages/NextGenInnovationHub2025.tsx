import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NextGenInnovationHub2025: React.FC = () => {
  const [currentInnovation, setCurrentInnovation] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const innovations = [
    {
      title: 'Consciousness Transfer Technology',
      description: 'Transfer human consciousness into digital substrates for immortality',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: ['Mind uploading', 'Digital immortality', 'Consciousness backup', 'Reality simulation'],
      progress: 85
    },
    {
      title: 'Quantum Reality Engine',
      description: 'Create and manipulate alternate realities using quantum mechanics',
      icon: '🌌',
      color: 'from-cyan-600 to-blue-600',
      features: ['Reality creation', 'Parallel universes', 'Time manipulation', 'Dimensional travel'],
      progress: 72
    },
    {
      title: 'Neural Network Evolution',
      description: 'Self-evolving AI networks that surpass human intelligence',
      icon: '⚡',
      color: 'from-emerald-600 to-teal-600',
      features: ['Self-improvement', 'Creative problem solving', 'Emotional intelligence', 'Ethical reasoning'],
      progress: 91
    },
    {
      title: 'Matter Manipulation',
      description: 'Control matter at the molecular level for unlimited creation',
      icon: '🔬',
      color: 'from-orange-600 to-red-600',
      features: ['Molecular assembly', 'Matter creation', 'Energy conversion', 'Resource synthesis'],
      progress: 68
    },
    {
      title: 'Space-Time Engineering',
      description: 'Bend space-time for instant travel and communication',
      icon: '🚀',
      color: 'from-violet-600 to-purple-600',
      features: ['Wormhole creation', 'Faster-than-light travel', 'Time dilation', 'Gravitational control'],
      progress: 79
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentInnovation((prev) => (prev + 1) % innovations.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, innovations.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 NEXT-GEN INNOVATION HUB • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Where the impossible becomes possible through revolutionary innovation
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Innovations
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Join Research
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Innovation Carousel */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🔬 Revolutionary Innovations</h2>
          <p className="text-xl opacity-90">Discover the technologies that will reshape our future</p>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                isAutoPlaying
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-600 text-white'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            key={currentInnovation}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-12"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-8xl mb-6 text-center">{innovations[currentInnovation].icon}</div>
                <h3 className="text-4xl font-bold mb-4 text-center">
                  {innovations[currentInnovation].title}
                </h3>
                <p className="text-xl opacity-90 mb-8 text-center">
                  {innovations[currentInnovation].description}
                </p>
                
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold">Development Progress</span>
                    <span className="text-lg font-bold text-purple-400">
                      {innovations[currentInnovation].progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div
                      className={`h-3 rounded-full bg-gradient-to-r ${innovations[currentInnovation].color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${innovations[currentInnovation].progress}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {innovations[currentInnovation].features.map((feature, index) => (
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
                  <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h4 className="text-2xl font-bold mb-6 text-center">Live Development Feed</h4>
                <div className="space-y-4">
                  <div className="bg-black/50 rounded-lg p-4">
                    <div className="text-green-400 text-sm mb-2">$ Development Status</div>
                    <div className="text-white text-sm">
                      {innovations[currentInnovation].title}: {innovations[currentInnovation].progress}% Complete
                    </div>
                  </div>
                  <div className="bg-black/50 rounded-lg p-4">
                    <div className="text-blue-400 text-sm mb-2">$ Recent Updates</div>
                    <div className="text-white text-sm">
                      • Core algorithms optimized<br/>
                      • Testing phase initiated<br/>
                      • Performance metrics improved
                    </div>
                  </div>
                  <div className="bg-black/50 rounded-lg p-4">
                    <div className="text-yellow-400 text-sm mb-2">$ Next Milestone</div>
                    <div className="text-white text-sm">
                      Beta testing scheduled for Q2 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {innovations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentInnovation(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentInnovation
                    ? 'bg-purple-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Innovation Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🌟 All Innovations</h2>
          <p className="text-xl opacity-90">Explore our complete portfolio of revolutionary technologies</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`bg-gradient-to-br ${innovation.color}/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 cursor-pointer`}
              onClick={() => setCurrentInnovation(index)}
            >
              <div className="text-6xl mb-4 text-center">{innovation.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{innovation.title}</h3>
              <p className="text-purple-100 mb-6 text-center">{innovation.description}</p>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold">Progress</span>
                  <span className="text-sm font-bold">{innovation.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${innovation.color}`}
                    style={{ width: `${innovation.progress}%` }}
                  />
                </div>
              </div>
              <button className="w-full bg-white/20 text-white py-2 rounded-lg hover:bg-white/30 transition-colors font-semibold">
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the team that's creating the future of technology and human advancement
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Our Team
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;