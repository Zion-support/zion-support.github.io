import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NextGenInnovationHub2025: React.FC = () => {
  const [activeInnovation, setActiveInnovation] = useState('consciousness');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const innovations = {
    consciousness: {
      title: 'AI Consciousness',
      description: 'Self-aware artificial intelligence systems',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600'
    },
    quantum: {
      title: 'Quantum Computing',
      description: 'Revolutionary quantum processing power',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600'
    },
    neural: {
      title: 'Neural Interfaces',
      description: 'Direct brain-computer communication',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600'
    }
  };

  const currentInnovation = innovations[activeInnovation as keyof typeof innovations];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 NEXT-GEN INNOVATION HUB • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Next-Gen Innovation Hub 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Discover and explore the most revolutionary technologies that are reshaping our world and defining the future of humanity
          </p>
        </motion.div>

        {/* Innovation Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {Object.entries(innovations).map(([key, innovation], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${innovation.color}/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeInnovation === key ? 'ring-2 ring-purple-400' : ''
              }`}
              onClick={() => setActiveInnovation(key)}
            >
              <div className="text-6xl mb-4 text-center">{innovation.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{innovation.title}</h3>
              <p className="text-purple-100 mb-6 text-center">{innovation.description}</p>
              <div className="text-center">
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                  Explore Innovation →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Innovation Details */}
        <motion.div
          key={activeInnovation}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            {currentInnovation.title} Innovation Details
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Revolutionary Features</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Advanced processing capabilities</li>
                <li>• Real-time innovation simulation</li>
                <li>• Quantum-enhanced performance</li>
                <li>• Multi-dimensional awareness</li>
                <li>• Infinite scalability potential</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 99.99% innovation accuracy</li>
                <li>• Sub-millisecond response times</li>
                <li>• 24/7 continuous operation</li>
                <li>• Zero-latency processing</li>
                <li>• Infinite parallel processing</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Be part of the most revolutionary technological innovations that will shape the future of humanity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Innovating
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;