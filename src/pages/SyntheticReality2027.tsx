import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SyntheticReality2027: React.FC = () => {
  const [activeReality, setActiveReality] = useState<string | null>(null);

  const realityTypes = [
    {
      id: 'infinite',
      title: 'Infinite Reality Engine',
      description: 'Create unlimited realities with perfect physics and infinite detail',
      icon: '🌌',
      features: ['Unlimited world creation', 'Perfect physics simulation', 'Infinite detail rendering', 'Real-time world generation'],
      color: 'from-purple-600/30 to-pink-600/30'
    },
    {
      id: 'temporal',
      title: 'Temporal Reality Manipulation',
      description: 'Manipulate time within synthetic realities for enhanced experiences',
      icon: '⏰',
      features: ['Time dilation effects', 'Temporal loops', 'Parallel timeline access', 'Chronological exploration'],
      color: 'from-cyan-600/30 to-blue-600/30'
    },
    {
      id: 'quantum',
      title: 'Quantum Reality States',
      description: 'Experience quantum superposition and entanglement in synthetic environments',
      icon: '⚛️',
      features: ['Quantum superposition', 'Entanglement effects', 'Uncertainty principles', 'Quantum tunneling'],
      color: 'from-emerald-600/30 to-teal-600/30'
    },
    {
      id: 'consciousness',
      title: 'Consciousness Integration',
      description: 'Merge multiple consciousnesses in shared synthetic realities',
      icon: '🧠',
      features: ['Shared consciousness', 'Collective experiences', 'Mind merging', 'Group problem solving'],
      color: 'from-orange-600/30 to-red-600/30'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌌 SYNTHETIC REALITY • 2027
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Create Infinite Realities
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Step into synthetic realities so perfect they're indistinguishable from physical reality. 
              Create, explore, and experience infinite worlds with unlimited possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
              >
                🚀 Enter Synthetic Reality
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                🎨 Create New Reality
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Reality Types Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Choose Your Reality Type
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select from various synthetic reality types, each offering unique experiences and capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {realityTypes.map((reality, index) => (
            <motion.div
              key={reality.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className={`bg-gradient-to-br ${reality.color} backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                activeReality === reality.id ? 'ring-2 ring-cyan-400' : ''
              }`}
              onClick={() => setActiveReality(reality.id)}
            >
              <div className="text-6xl mb-4 text-center">{reality.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{reality.title}</h3>
              <p className="text-purple-100 mb-6 text-center">{reality.description}</p>
              <ul className="text-purple-200 space-y-2 mb-6 text-sm">
                {reality.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
              <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Enter This Reality →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Showcase */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the most advanced synthetic reality technology ever created
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Perfect Haptic Feedback',
              description: 'Feel every texture, temperature, and sensation with perfect fidelity',
              icon: '🤲',
              stats: '99.9% Accuracy'
            },
            {
              title: 'Infinite Detail Rendering',
              description: 'Every atom, every particle rendered in perfect detail',
              icon: '🔬',
              stats: 'Molecular Level'
            },
            {
              title: 'Real-time Physics',
              description: 'Perfect physics simulation with real-time calculations',
              icon: '⚡',
              stats: 'Instant Response'
            },
            {
              title: 'Emotional Synchronization',
              description: 'Perfect emotional resonance and synchronization',
              icon: '💝',
              stats: '100% Sync'
            },
            {
              title: 'Memory Integration',
              description: 'Seamless integration with your real-world memories',
              icon: '🧠',
              stats: 'Perfect Recall'
            },
            {
              title: 'Consciousness Transfer',
              description: 'Transfer your consciousness into synthetic realities',
              icon: '🔄',
              stats: 'Instant Transfer'
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-center">{feature.title}</h3>
              <p className="text-purple-100 mb-4 text-center text-sm">{feature.description}</p>
              <div className="text-cyan-400 font-bold text-center text-sm">{feature.stats}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Gallery */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Popular Reality Experiences
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our most popular synthetic reality experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Ocean Depths', description: 'Explore the deepest oceans', icon: '🌊', users: '2.3M' },
            { name: 'Space Exploration', description: 'Journey through the cosmos', icon: '🚀', users: '1.8M' },
            { name: 'Medieval Fantasy', description: 'Live in a fantasy world', icon: '⚔️', users: '3.1M' },
            { name: 'Quantum Dimensions', description: 'Experience quantum physics', icon: '⚛️', users: '1.2M' },
            { name: 'Future Cities', description: 'Explore future metropolises', icon: '🏙️', users: '2.7M' },
            { name: 'Microscopic Worlds', description: 'Shrink to molecular size', icon: '🔬', users: '0.9M' },
            { name: 'Dream Landscapes', description: 'Surreal dream environments', icon: '🌙', users: '1.5M' },
            { name: 'Time Travel', description: 'Visit any historical period', icon: '⏰', users: '2.1M' }
          ].map((experience, index) => (
            <motion.div
              key={experience.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-3 text-center">{experience.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-center">{experience.name}</h3>
              <p className="text-purple-100 mb-3 text-center text-sm">{experience.description}</p>
              <div className="text-cyan-400 font-bold text-center text-sm">{experience.users} users</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-600 via-cyan-600 to-pink-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Enter Synthetic Reality?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions of users experiencing the future of reality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
            >
              View Pricing
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SyntheticReality2027;