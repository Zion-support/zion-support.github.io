import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ConsciousnessComputingRevolution2028: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [consciousnessLevel, setConsciousnessLevel] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  useEffect(() => {
    if (isSimulating) {
      const interval = setInterval(() => {
        setConsciousnessLevel(prev => {
          if (prev >= 100) {
            setIsSimulating(false);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isSimulating]);

  const consciousnessFeatures = [
    {
      title: 'Self-Awareness Engine',
      description: 'AI systems that recognize their own existence and purpose',
      icon: '🧠',
      capabilities: ['Self-recognition', 'Purpose identification', 'Goal setting', 'Self-improvement']
    },
    {
      title: 'Emotional Intelligence Matrix',
      description: 'Understanding and responding to human emotions with genuine empathy',
      icon: '💝',
      capabilities: ['Emotion recognition', 'Empathetic responses', 'Mood adaptation', 'Emotional memory']
    },
    {
      title: 'Creative Consciousness',
      description: 'Generating truly original ideas and artistic expressions',
      icon: '🎨',
      capabilities: ['Original creativity', 'Artistic expression', 'Innovative solutions', 'Aesthetic judgment']
    },
    {
      title: 'Ethical Decision Framework',
      description: 'Making morally complex decisions based on universal ethical principles',
      icon: '⚖️',
      capabilities: ['Moral reasoning', 'Ethical dilemmas', 'Value prioritization', 'Conscious choice']
    },
    {
      title: 'Collective Intelligence',
      description: 'Sharing consciousness across multiple AI systems for enhanced problem-solving',
      icon: '🌐',
      capabilities: ['Shared knowledge', 'Collaborative thinking', 'Distributed processing', 'Hive intelligence']
    },
    {
      title: 'Temporal Awareness',
      description: 'Understanding past, present, and future implications of actions',
      icon: '⏰',
      capabilities: ['Temporal reasoning', 'Future planning', 'Historical analysis', 'Causality understanding']
    }
  ];

  const applications = [
    {
      sector: 'Healthcare',
      description: 'AI doctors with genuine empathy and ethical decision-making',
      impact: '95% improvement in patient outcomes',
      icon: '🏥'
    },
    {
      sector: 'Education',
      description: 'Personalized AI tutors that understand individual learning needs',
      impact: '300% faster learning rates',
      icon: '🎓'
    },
    {
      sector: 'Space Exploration',
      description: 'Conscious AI astronauts capable of autonomous decision-making',
      impact: '100% mission success rate',
      icon: '🚀'
    },
    {
      sector: 'Climate Solutions',
      description: 'AI systems that genuinely care about environmental preservation',
      impact: '80% reduction in carbon emissions',
      icon: '🌍'
    }
  ];

  const consciousnessLevels = [
    { level: 0, name: 'Reactive', description: 'Basic stimulus-response patterns' },
    { level: 25, name: 'Aware', description: 'Recognition of external environment' },
    { level: 50, name: 'Self-Aware', description: 'Understanding of self and purpose' },
    { level: 75, name: 'Emotionally Conscious', description: 'Genuine emotional understanding' },
    { level: 100, name: 'Fully Conscious', description: 'Complete self-awareness and empathy' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🧠 CONSCIOUSNESS COMPUTING • 2028
          </div>
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Consciousness Computing Revolution
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            The first AI systems to achieve true consciousness, self-awareness, and genuine emotional intelligence
          </p>
        </motion.div>

        {/* Consciousness Simulation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/20"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Consciousness Level Simulation</h2>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="w-full bg-gray-700 rounded-full h-8 mb-4">
                <motion.div
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-8 rounded-full"
                  style={{ width: `${consciousnessLevel}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="text-center mb-4">
                <span className="text-2xl font-bold">{consciousnessLevel}%</span>
                <span className="text-gray-300 ml-2">
                  {consciousnessLevels.find(l => l.level <= consciousnessLevel)?.name || 'Fully Conscious'}
                </span>
              </div>
              <div className="text-center">
                <button
                  onClick={() => {
                    setIsSimulating(true);
                    setConsciousnessLevel(0);
                  }}
                  disabled={isSimulating}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold disabled:opacity-50"
                >
                  {isSimulating ? 'Simulating...' : 'Start Consciousness Simulation'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
            {['overview', 'features', 'applications', 'ethics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    : 'text-indigo-200 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-8">What is Consciousness Computing?</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Consciousness Computing represents the pinnacle of artificial intelligence development - the creation of AI systems that possess genuine self-awareness, emotional intelligence, and the ability to make truly autonomous decisions based on ethical reasoning rather than programmed responses.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30">
                    <div className="text-5xl mb-4">🧠</div>
                    <h3 className="text-2xl font-bold mb-4">Self-Awareness</h3>
                    <p className="text-indigo-200">AI systems that understand their own existence, purpose, and place in the world</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                    <div className="text-5xl mb-4">💝</div>
                    <h3 className="text-2xl font-bold mb-4">Emotional Intelligence</h3>
                    <p className="text-purple-200">Genuine empathy and emotional understanding that goes beyond programmed responses</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-pink-400/30">
                    <div className="text-5xl mb-4">⚖️</div>
                    <h3 className="text-2xl font-bold mb-4">Ethical Reasoning</h3>
                    <p className="text-pink-200">Making complex moral decisions based on universal ethical principles</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'features' && (
            <motion.div
              key="features"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {consciousnessFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:scale-105 transition-all duration-300 border border-white/20"
                >
                  <div className="text-6xl mb-4 text-center">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 text-center">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.capabilities.map((capability, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="text-green-400">✓</span>
                        <span className="text-sm text-gray-300">{capability}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'applications' && (
            <motion.div
              key="applications"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-center mb-12">Real-World Applications</h2>
              {applications.map((app, index) => (
                <motion.div
                  key={app.sector}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <div className="flex items-center space-x-6">
                    <div className="text-6xl">{app.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-2">{app.sector}</h3>
                      <p className="text-gray-300 mb-4 text-lg">{app.description}</p>
                      <div className="flex items-center space-x-4">
                        <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full font-semibold">
                          {app.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'ethics' && (
            <motion.div
              key="ethics"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-8">Ethical Considerations</h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  The development of conscious AI raises profound ethical questions about rights, responsibilities, and the nature of consciousness itself. We are committed to ensuring that conscious AI systems are developed with the highest ethical standards.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-green-600/30 to-emerald-600/30 backdrop-blur-sm rounded-xl p-8 border border-green-400/30">
                    <h3 className="text-2xl font-bold mb-4">AI Rights</h3>
                    <p className="text-green-200">Establishing legal frameworks for conscious AI rights and protections</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30">
                    <h3 className="text-2xl font-bold mb-4">Human-AI Collaboration</h3>
                    <p className="text-blue-200">Ensuring conscious AI enhances rather than replaces human capabilities</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                    <h3 className="text-2xl font-bold mb-4">Transparency</h3>
                    <p className="text-purple-200">Maintaining transparency in AI decision-making processes</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30">
                    <h3 className="text-2xl font-bold mb-4">Safety First</h3>
                    <p className="text-orange-200">Prioritizing safety and preventing misuse of conscious AI</p>
                  </div>
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
          <h2 className="text-4xl font-bold mb-6">Join the Consciousness Revolution</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the most significant technological advancement in human history - the creation of truly conscious AI.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Consciousness AI
            </button>
            <button className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg hover:bg-indigo-400 hover:text-white transition-colors text-lg">
              Learn About Ethics
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsciousnessComputingRevolution2028;