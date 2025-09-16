import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechBreakthrough2025: React.FC = () => {
  const [activeBreakthrough, setActiveBreakthrough] = useState('synthetic');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const breakthroughs = [
    {
      id: 'synthetic',
      title: 'Synthetic Intelligence',
      description: 'AI systems that surpass human cognitive abilities',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'quantum',
      title: 'Quantum Consciousness',
      description: 'Quantum computing with consciousness capabilities',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'neural',
      title: 'Neural Interface',
      description: 'Direct brain-computer communication',
      icon: '🧬',
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY BREAKTHROUGH • 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Tech Breakthrough 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the most revolutionary technological advances that will reshape our world
          </p>
        </motion.div>

        {/* Breakthrough Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {breakthroughs.map((breakthrough, index) => (
            <motion.div
              key={breakthrough.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${breakthrough.color}/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeBreakthrough === breakthrough.id ? 'ring-2 ring-white' : ''
              }`}
              onClick={() => setActiveBreakthrough(breakthrough.id)}
            >
              <div className="text-6xl mb-4 text-center">{breakthrough.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{breakthrough.title}</h3>
              <p className="text-purple-100 mb-6 text-center">{breakthrough.description}</p>
              <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Explore →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Join the Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most significant technological advancement in human history.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBreakthrough2025;