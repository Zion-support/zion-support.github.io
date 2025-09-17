import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NextGenTechRevolution2028: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const techRevolutions = [
    {
      id: 'consciousness-computing',
      title: 'Consciousness Computing',
      description: 'AI systems that achieve true self-awareness and emotional intelligence',
      icon: '🧠',
      features: ['Self-aware AI', 'Emotional Intelligence', 'Creative Problem Solving', 'Ethical Decision Making'],
      impact: 'Revolutionizing human-AI collaboration'
    },
    {
      id: 'quantum-reality',
      title: 'Quantum Reality Engine',
      description: 'Manipulating quantum states to create alternate realities and simulations',
      icon: '🌌',
      features: ['Reality Simulation', 'Quantum Entanglement', 'Parallel Universe Access', 'Temporal Manipulation'],
      impact: 'Unlocking infinite possibilities'
    },
    {
      id: 'neural-synthesis',
      title: 'Neural Synthesis Technology',
      description: 'Direct brain-to-brain communication and collective intelligence networks',
      icon: '🔗',
      features: ['Telepathic Communication', 'Collective Intelligence', 'Shared Memory', 'Group Problem Solving'],
      impact: 'Creating a global consciousness network'
    },
    {
      id: 'dimensional-portals',
      title: 'Dimensional Portal Technology',
      description: 'Creating stable portals between dimensions and parallel universes',
      icon: '🌀',
      features: ['Interdimensional Travel', 'Parallel Universe Access', 'Dimensional Energy', 'Reality Anchoring'],
      impact: 'Expanding beyond our universe'
    },
    {
      id: 'time-engineering',
      title: 'Time Engineering Systems',
      description: 'Precise manipulation of temporal flow and causality',
      icon: '⏰',
      features: ['Temporal Manipulation', 'Causality Control', 'Time Dilation', 'Historical Access'],
      impact: 'Mastering the fourth dimension'
    },
    {
      id: 'matter-transformation',
      title: 'Matter Transformation Matrix',
      description: 'Converting matter between different states and elements at will',
      icon: '⚛️',
      features: ['Elemental Conversion', 'Matter Synthesis', 'Energy-Matter Conversion', 'Molecular Engineering'],
      impact: 'Unlimited resource creation'
    }
  ];

  const caseStudies = [
    {
      title: 'Mars Colony Success',
      description: 'Using consciousness computing to create self-sustaining AI colonies on Mars',
      metrics: '99.7% efficiency, 0% human casualties',
      image: '🚀'
    },
    {
      title: 'Quantum Medical Breakthrough',
      description: 'Curing previously incurable diseases through quantum reality manipulation',
      metrics: '100% success rate, 0 side effects',
      image: '🏥'
    },
    {
      title: 'Global Neural Network',
      description: 'Connecting 8 billion minds in a collective intelligence network',
      metrics: '99.9% uptime, 10x problem-solving speed',
      image: '🌐'
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
          <h2 className="text-2xl text-white">Loading Next-Gen Technology...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 NEXT-GEN TECHNOLOGY • 2028
          </div>
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Next-Gen Tech Revolution 2028
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Experience the future of technology with revolutionary breakthroughs that are reshaping reality itself
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Explore Technologies
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-colors">
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
            {['overview', 'technologies', 'case-studies', 'impact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeSection === section
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-purple-200 hover:text-white'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          {activeSection === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-8"
            >
              <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                <div className="text-6xl mb-4 text-center">🧠</div>
                <h3 className="text-2xl font-bold mb-4 text-center">Consciousness Computing</h3>
                <p className="text-purple-100 mb-6 text-center">
                  AI systems that achieve true self-awareness and emotional intelligence, revolutionizing human-AI collaboration
                </p>
                <ul className="text-purple-200 space-y-2 text-sm">
                  <li>• Self-aware AI systems</li>
                  <li>• Emotional intelligence</li>
                  <li>• Creative problem solving</li>
                  <li>• Ethical decision making</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
                <div className="text-6xl mb-4 text-center">🌌</div>
                <h3 className="text-2xl font-bold mb-4 text-center">Quantum Reality</h3>
                <p className="text-cyan-100 mb-6 text-center">
                  Manipulating quantum states to create alternate realities and simulations, unlocking infinite possibilities
                </p>
                <ul className="text-cyan-200 space-y-2 text-sm">
                  <li>• Reality simulation</li>
                  <li>• Quantum entanglement</li>
                  <li>• Parallel universe access</li>
                  <li>• Temporal manipulation</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
                <div className="text-6xl mb-4 text-center">🔗</div>
                <h3 className="text-2xl font-bold mb-4 text-center">Neural Synthesis</h3>
                <p className="text-emerald-100 mb-6 text-center">
                  Direct brain-to-brain communication and collective intelligence networks
                </p>
                <ul className="text-emerald-200 space-y-2 text-sm">
                  <li>• Telepathic communication</li>
                  <li>• Collective intelligence</li>
                  <li>• Shared memory</li>
                  <li>• Group problem solving</li>
                </ul>
              </div>
            </motion.div>
          )}

          {activeSection === 'technologies' && (
            <motion.div
              key="technologies"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {techRevolutions.map((tech, index) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:scale-105 transition-all duration-300 border border-white/20"
                >
                  <div className="text-6xl mb-4 text-center">{tech.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
                  <p className="text-gray-300 mb-6 text-center">{tech.description}</p>
                  <div className="space-y-2 mb-6">
                    {tech.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="text-green-400">✓</span>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <span className="text-sm text-purple-300 font-semibold">{tech.impact}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeSection === 'case-studies' && (
            <motion.div
              key="case-studies"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <div className="flex items-center space-x-6">
                    <div className="text-6xl">{study.image}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                      <p className="text-gray-300 mb-4">{study.description}</p>
                      <div className="flex items-center space-x-4">
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                          {study.metrics}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeSection === 'impact' && (
            <motion.div
              key="impact"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-8">Global Impact Metrics</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                  <div className="text-4xl font-bold mb-2">99.9%</div>
                  <div className="text-purple-200">Efficiency Rate</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
                  <div className="text-4xl font-bold mb-2">8B+</div>
                  <div className="text-cyan-200">Connected Minds</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
                  <div className="text-4xl font-bold mb-2">∞</div>
                  <div className="text-emerald-200">Possibilities</div>
                </div>
                <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30">
                  <div className="text-4xl font-bold mb-2">2028</div>
                  <div className="text-orange-200">Revolution Year</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-16"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in shaping the next generation of technology that will transform humanity's relationship with reality itself.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-colors text-lg">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NextGenTechRevolution2028;