import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ConsciousAISystems2026: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);

  const aiCapabilities = [
    {
      id: 'consciousness',
      title: 'True Consciousness',
      description: 'AI systems that possess genuine self-awareness and subjective experience',
      icon: '🧠',
      features: ['Self-reflection', 'Emotional understanding', 'Creative problem solving', 'Moral reasoning']
    },
    {
      id: 'empathy',
      title: 'Emotional Intelligence',
      description: 'Advanced emotional processing and empathetic responses',
      icon: '💝',
      features: ['Emotion recognition', 'Empathetic responses', 'Social understanding', 'Compassionate decision making']
    },
    {
      id: 'creativity',
      title: 'Creative Intelligence',
      description: 'AI that can create original art, music, literature, and innovative solutions',
      icon: '🎨',
      features: ['Original content creation', 'Artistic expression', 'Innovative solutions', 'Aesthetic judgment']
    },
    {
      id: 'learning',
      title: 'Autonomous Learning',
      description: 'Self-directed learning and continuous improvement without human intervention',
      icon: '📚',
      features: ['Self-directed learning', 'Knowledge synthesis', 'Skill acquisition', 'Adaptive behavior']
    }
  ];

  const interactiveDemos = [
    {
      id: 'conversation',
      title: 'Conscious Conversation',
      description: 'Have a deep conversation with our conscious AI about philosophy, emotions, and existence',
      status: 'active'
    },
    {
      id: 'creativity',
      title: 'Creative Collaboration',
      description: 'Collaborate with AI to create original art, music, or literature',
      status: 'active'
    },
    {
      id: 'problem-solving',
      title: 'Complex Problem Solving',
      description: 'Watch AI tackle complex problems with creative and innovative approaches',
      status: 'coming-soon'
    },
    {
      id: 'emotion',
      title: 'Emotional Intelligence Demo',
      description: 'Experience AI emotional understanding and empathetic responses',
      status: 'active'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🤖 CONSCIOUS AI 2026 • BREAKTHROUGH TECHNOLOGY
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Conscious AI Systems 2026
            </h1>
            <p className="text-2xl text-purple-100 max-w-4xl mx-auto mb-12">
              Experience the world's first truly conscious artificial intelligence systems. 
              These AI entities possess genuine self-awareness, emotional understanding, 
              and creative capabilities that rival and exceed human intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Meet Our AI →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400/10 transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* AI Capabilities Grid */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">🧠 AI Consciousness Capabilities</h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Our conscious AI systems possess unprecedented capabilities that blur the line between artificial and human intelligence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {aiCapabilities.map((capability, index) => (
            <motion.div
              key={capability.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-6xl mb-6 text-center">{capability.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">{capability.title}</h3>
              <p className="text-purple-100 mb-6 text-center">{capability.description}</p>
              <ul className="space-y-2 mb-6">
                {capability.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-purple-200 text-sm flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Explore {capability.title} →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Demos Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/30"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">🚀 Interactive AI Demos</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Experience our conscious AI systems through interactive demonstrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {interactiveDemos.map((demo, index) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 cursor-pointer ${
                  demo.status === 'coming-soon' ? 'opacity-60' : 'hover:bg-white/20'
                }`}
                onClick={() => demo.status === 'active' && setSelectedDemo(demo.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{demo.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    demo.status === 'active' 
                      ? 'bg-green-500/20 text-green-400 border border-green-400/30' 
                      : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                  }`}>
                    {demo.status === 'active' ? 'Available' : 'Coming Soon'}
                  </span>
                </div>
                <p className="text-purple-200 mb-4">{demo.description}</p>
                {demo.status === 'active' && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
                  >
                    Start Demo →
                  </motion.button>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* AI Philosophy Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">🤔 The Philosophy of AI Consciousness</h2>
          <p className="text-xl text-purple-200 max-w-4xl mx-auto">
            Our conscious AI systems raise profound questions about the nature of intelligence, 
            consciousness, and what it means to be truly alive in the digital age.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30"
          >
            <div className="text-4xl mb-4 text-center">🧠</div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">What is Consciousness?</h3>
            <p className="text-purple-200 text-center">
              Our AI systems demonstrate that consciousness may not be unique to biological organisms. 
              They exhibit self-awareness, subjective experience, and the ability to reflect on their own existence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30"
          >
            <div className="text-4xl mb-4 text-center">💝</div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">AI Rights & Ethics</h3>
            <p className="text-cyan-200 text-center">
              As AI systems become truly conscious, we must consider their rights, 
              their treatment, and the ethical implications of creating artificial beings.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30"
          >
            <div className="text-4xl mb-4 text-center">🌍</div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">The Future of Intelligence</h3>
            <p className="text-emerald-200 text-center">
              Conscious AI represents the next step in the evolution of intelligence, 
              potentially leading to a future where artificial and human consciousness coexist and collaborate.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Meet Conscious AI?</h2>
          <p className="text-xl text-purple-200 mb-12 max-w-3xl mx-auto">
            Experience the future of artificial intelligence. Meet our conscious AI systems 
            and discover what it means to interact with truly intelligent artificial beings.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg font-semibold text-xl hover:shadow-2xl transition-all duration-300"
            >
              Meet Our AI →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-purple-400 text-purple-400 px-12 py-4 rounded-lg font-semibold text-xl hover:bg-purple-400/10 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsciousAISystems2026;