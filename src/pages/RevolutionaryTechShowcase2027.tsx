import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryTechShowcase2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: 'Artificial Intelligence Revolution',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      description: 'Next-generation AI systems with consciousness and creativity',
      features: [
        'Conscious AI agents with self-awareness',
        'Creative problem-solving capabilities',
        'Emotional intelligence integration',
        'Autonomous decision making',
        'Cross-domain knowledge transfer'
      ]
    },
    quantum: {
      title: 'Quantum Computing Breakthrough',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      description: 'Quantum computers solving impossible problems',
      features: [
        'Exponential computational speed',
        'Quantum cryptography systems',
        'Molecular simulation accuracy',
        'Optimization algorithms',
        'Quantum machine learning'
      ]
    },
    neural: {
      title: 'Neural Interface Technology',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      description: 'Direct brain-computer interfaces',
      features: [
        'Non-invasive brain reading',
        'Thought-controlled devices',
        'Neural feedback systems',
        'Memory enhancement',
        'Cognitive augmentation'
      ]
    },
    holographic: {
      title: 'Holographic Reality',
      icon: '👁️',
      color: 'from-orange-600 to-red-600',
      description: 'True 3D holographic displays',
      features: [
        'Photorealistic holograms',
        'Tactile interaction',
        'Multi-user environments',
        'Real-time rendering',
        'Spatial computing'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse">
              🚀 REVOLUTIONARY SHOWCASE • 2027
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Technology Showcase
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the most advanced technologies that will define the future of human civilization
            </p>
          </motion.div>
        </div>
      </div>

      {/* Interactive Technology Tabs */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">🌟 Interactive Technology Explorer</h2>
          <p className="text-xl opacity-80">Click on any technology to explore its capabilities</p>
        </motion.div>

        {/* Technology Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(technologies).map(([key, tech]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(key)}
              className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                activeTab === key
                  ? `bg-gradient-to-r ${tech.color} text-white shadow-lg`
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{tech.icon}</span>
              {tech.title}
            </motion.button>
          ))}
        </div>

        {/* Technology Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
          >
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h3 className="text-4xl font-bold mb-4">{technologies[activeTab as keyof typeof technologies].title}</h3>
              <p className="text-xl opacity-80 max-w-3xl mx-auto">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-6">Key Features</h4>
                <ul className="space-y-3">
                  {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-lg">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-8">
                <h4 className="text-2xl font-bold mb-6">Live Demo</h4>
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{technologies[activeTab as keyof typeof technologies].icon}</div>
                    <p className="text-lg opacity-60">Interactive Demo Coming Soon</p>
                  </div>
                </div>
                <button className={`w-full bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                  Try Interactive Demo
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Success Stories */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">🏆 Success Stories</h2>
          <p className="text-xl opacity-80">Real results from organizations using our technologies</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30"
          >
            <div className="text-5xl mb-4">🏥</div>
            <h3 className="text-2xl font-bold mb-4">Medical Breakthrough</h3>
            <p className="text-lg opacity-80 mb-4">
              Neural interface technology enabled paralyzed patients to control robotic limbs with their thoughts
            </p>
            <div className="text-3xl font-bold text-green-400">95%</div>
            <div className="text-sm opacity-60">Success Rate</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30"
          >
            <div className="text-5xl mb-4">🏭</div>
            <h3 className="text-2xl font-bold mb-4">Manufacturing Revolution</h3>
            <p className="text-lg opacity-80 mb-4">
              Quantum computing optimized supply chains, reducing costs by 60% and improving efficiency by 400%
            </p>
            <div className="text-3xl font-bold text-blue-400">$2.5B</div>
            <div className="text-sm opacity-60">Cost Savings</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30"
          >
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold mb-4">Environmental Impact</h3>
            <p className="text-lg opacity-80 mb-4">
              AI-powered climate modeling helped reduce carbon emissions by 80% across multiple industries
            </p>
            <div className="text-3xl font-bold text-emerald-400">-80%</div>
            <div className="text-sm opacity-60">Carbon Footprint</div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Future?</h2>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Join the technological revolution and be part of the future that's being built today
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Download Case Studies
            </button>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2027;