import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FutureTechTrends2026: React.FC = () => {
  const [selectedTrend, setSelectedTrend] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const techTrends = {
    ai: {
      title: 'Artificial Intelligence Revolution',
      description: 'AI systems achieving human-level consciousness and creativity',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      trends: [
        'Consciousness AI systems',
        'Autonomous business management',
        'Creative AI collaboration',
        'Emotional intelligence AI'
      ]
    },
    quantum: {
      title: 'Quantum Computing Breakthrough',
      description: 'Quantum computers solving previously impossible problems',
      icon: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      trends: [
        'Quantum supremacy achieved',
        'Quantum internet networks',
        'Quantum cryptography',
        'Molecular simulation'
      ]
    },
    neural: {
      title: 'Neural Interface Technology',
      description: 'Direct brain-computer interfaces transforming human capabilities',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      trends: [
        'Non-invasive brain interfaces',
        'Thought-controlled devices',
        'Memory augmentation',
        'Neural network integration'
      ]
    },
    space: {
      title: 'Space Technology Innovation',
      description: 'Revolutionary space exploration and colonization technologies',
      icon: '🚀',
      color: 'from-orange-600 to-red-600',
      trends: [
        'Mars colonization',
        'Space manufacturing',
        'Interstellar travel',
        'Asteroid mining'
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedTrend((prev) => (prev + 1) % futureTrends.length);
        setIsAnimating(false);
      }, 500);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleTrendSelect = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedTrend(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🔮 FUTURE TECH TRENDS • 2026
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
              The Future of Technology
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover the revolutionary technologies that will reshape our world in 2026 and beyond. 
              From AI consciousness to quantum computing, explore the trends defining tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trend Navigation */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(techTrends).map(([key, trend]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTrend(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTrend === key
                    ? `bg-gradient-to-r ${trend.color} text-white shadow-lg`
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="mr-2">{trend.icon}</span>
                {trend.title}
              </motion.button>
            ))}
          </div>

          {/* Active Trend Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTrend}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-12 shadow-xl"
            >
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{techTrends[activeTrend as keyof typeof techTrends].icon}</div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {techTrends[activeTrend as keyof typeof techTrends].title}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {techTrends[activeTrend as keyof typeof techTrends].description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Key Trends</h3>
                  <ul className="space-y-4">
                    {techTrends[activeTrend as keyof typeof techTrends].trends.map((trend, index) => (
                      <motion.li
                        key={trend}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        <span className="text-gray-700">{trend}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">Impact</h3>
                  <p className="text-gray-600 mb-4">
                    These technologies will fundamentally transform how we live, work, and interact with the world around us.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">10x</div>
                      <div className="text-sm text-gray-600">Productivity Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-600">99%</div>
                      <div className="text-sm text-gray-600">Accuracy Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Technology Impact by 2026</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              The numbers that will define the future of technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '1B+', label: 'AI-Powered Devices', icon: '🤖' },
              { number: '50%', label: 'Quantum Advantage', icon: '⚛️' },
              { number: '10M+', label: 'Neural Interface Users', icon: '🧠' },
              { number: '100+', label: 'Space Colonies', icon: '🚀' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-purple-200 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Ready for the Future?</h2>
            <p className="text-xl mb-8 opacity-90">
              Stay ahead of the curve with our cutting-edge technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              >
                Explore Solutions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FutureTechTrends2026;