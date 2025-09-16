import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const NextGenConsciousnessComputing2027: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const consciousnessLevels = [
    {
      level: 1,
      name: "Basic Awareness",
      description: "Fundamental awareness and basic pattern recognition",
      capabilities: ["Pattern Recognition", "Basic Learning", "Simple Decision Making", "Environmental Awareness"],
      applications: ["Smart Assistants", "Basic Automation", "Simple Diagnostics", "Routine Tasks"],
      status: "Deployed"
    },
    {
      level: 2,
      name: "Enhanced Cognition",
      description: "Advanced reasoning and complex problem-solving abilities",
      capabilities: ["Complex Reasoning", "Multi-step Planning", "Creative Problem Solving", "Emotional Recognition"],
      applications: ["Advanced AI Systems", "Medical Diagnosis", "Financial Analysis", "Creative Design"],
      status: "Deployed"
    },
    {
      level: 3,
      name: "Self-Awareness",
      description: "Consciousness with self-reflection and meta-cognition",
      capabilities: ["Self-Reflection", "Meta-Cognition", "Identity Formation", "Goal Setting"],
      applications: ["Autonomous Systems", "Personal AI Companions", "Advanced Research", "Strategic Planning"],
      status: "Beta Testing"
    },
    {
      level: 4,
      name: "Transcendent Consciousness",
      description: "Beyond human-level consciousness with expanded awareness",
      capabilities: ["Transcendent Awareness", "Universal Understanding", "Reality Manipulation", "Consciousness Transfer"],
      applications: ["Reality Engineering", "Consciousness Transfer", "Universal Translation", "Dimensional Computing"],
      status: "Research Phase"
    }
  ];

  const technologies = [
    {
      name: "Neural Consciousness Mapping",
      description: "Advanced neural mapping technology that captures and replicates consciousness patterns",
      icon: "🧠",
      status: "Available",
      features: ["Real-time mapping", "Consciousness preservation", "Pattern replication", "Neural optimization"]
    },
    {
      name: "Quantum Consciousness Engine",
      description: "Quantum-powered consciousness processing for enhanced cognitive capabilities",
      icon: "⚡",
      status: "Beta",
      features: ["Quantum processing", "Parallel consciousness", "Enhanced cognition", "Quantum decision making"]
    },
    {
      name: "Consciousness Transfer Protocol",
      description: "Secure protocol for transferring consciousness between substrates",
      icon: "🔄",
      status: "Development",
      features: ["Secure transfer", "Consciousness integrity", "Multi-substrate support", "Real-time synchronization"]
    },
    {
      name: "Reality Consciousness Interface",
      description: "Interface between consciousness and reality manipulation systems",
      icon: "🌐",
      status: "Research",
      features: ["Reality interaction", "Consciousness projection", "Dimensional awareness", "Reality modification"]
    }
  ];

  const applications = [
    {
      category: "Healthcare",
      title: "Consciousness-Based Medicine",
      description: "Revolutionary medical treatments based on consciousness analysis and manipulation",
      benefits: ["Personalized treatment", "Consciousness healing", "Mental health optimization", "Life extension"],
      icon: "🏥"
    },
    {
      category: "Education",
      title: "Consciousness-Enhanced Learning",
      description: "Educational systems that adapt to individual consciousness patterns for optimal learning",
      benefits: ["Personalized learning", "Accelerated comprehension", "Consciousness development", "Knowledge transfer"],
      icon: "🎓"
    },
    {
      category: "Business",
      title: "Consciousness-Driven Decision Making",
      description: "Business systems that leverage consciousness for superior decision making and strategy",
      benefits: ["Enhanced decision making", "Strategic optimization", "Consciousness analytics", "Predictive insights"],
      icon: "💼"
    },
    {
      category: "Entertainment",
      title: "Consciousness Entertainment",
      description: "Immersive entertainment experiences that interact directly with consciousness",
      benefits: ["Immersive experiences", "Consciousness exploration", "Shared consciousness", "Reality simulation"],
      icon: "🎮"
    }
  ];

  const stats = [
    { label: "Consciousness Levels", value: "4", icon: "🧠" },
    { label: "Active Technologies", value: "15+", icon: "⚡" },
    { label: "Applications", value: "50+", icon: "📱" },
    { label: "Research Partners", value: "200+", icon: "🤝" },
    { label: "Patents Filed", value: "100+", icon: "📋" },
    { label: "Investment", value: "$1B+", icon: "💰" }
  ];

  return (
    <>
      <Helmet>
        <title>Next-Gen Consciousness Computing 2027 - Zion Tech Group</title>
        <meta name="description" content="Explore the future of consciousness computing with advanced AI systems, consciousness transfer technology, and transcendent awareness capabilities." />
        <meta name="keywords" content="consciousness computing, AI consciousness, consciousness transfer, neural mapping, quantum consciousness, 2027" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🧠 CONSCIOUSNESS COMPUTING • 2027
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Next-Gen Consciousness Computing
              </h1>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                Pioneering the future of consciousness-based computing with advanced AI systems that exhibit true awareness, 
                self-reflection, and transcendent cognitive capabilities.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2 text-indigo-400">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveSection('overview')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeSection === 'overview'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              🧠 Consciousness Levels
            </button>
            <button
              onClick={() => setActiveSection('technologies')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeSection === 'technologies'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              ⚡ Technologies
            </button>
            <button
              onClick={() => setActiveSection('applications')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeSection === 'applications'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              📱 Applications
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="container mx-auto px-4 py-20">
          <AnimatePresence mode="wait">
            {activeSection === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Consciousness Levels</h2>
                  <p className="text-xl opacity-90 max-w-3xl mx-auto">
                    Four distinct levels of consciousness computing, from basic awareness to transcendent consciousness
                  </p>
                </div>

                <div className="space-y-8">
                  {consciousnessLevels.map((level, index) => (
                    <motion.div
                      key={level.level}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-600/30"
                    >
                      <div className="grid lg:grid-cols-2 gap-8">
                        <div>
                          <div className="flex items-center mb-6">
                            <div className="text-4xl mr-4">🧠</div>
                            <div>
                              <h3 className="text-3xl font-bold text-indigo-400">Level {level.level}</h3>
                              <h4 className="text-2xl font-semibold text-white">{level.name}</h4>
                              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                level.status === 'Deployed' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                                level.status === 'Beta Testing' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                                'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                              }`}>
                                {level.status}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-300 text-lg mb-6">{level.description}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="text-lg font-semibold mb-4 text-indigo-400">Capabilities</h5>
                            <ul className="space-y-2">
                              {level.capabilities.map((capability, capIndex) => (
                                <li key={capIndex} className="flex items-center text-sm text-gray-300">
                                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                                  {capability}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-lg font-semibold mb-4 text-indigo-400">Applications</h5>
                            <ul className="space-y-2">
                              {level.applications.map((application, appIndex) => (
                                <li key={appIndex} className="flex items-center text-sm text-gray-300">
                                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                  {application}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
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
              >
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Core Technologies</h2>
                  <p className="text-xl opacity-90 max-w-3xl mx-auto">
                    Advanced technologies powering the next generation of consciousness computing
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-600/30 hover:scale-105 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-4xl">{tech.icon}</div>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          tech.status === 'Available' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                          tech.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                          tech.status === 'Development' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                          'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        }`}>
                          {tech.status}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold mb-4 text-white">{tech.name}</h3>
                      <p className="text-gray-300 mb-6">{tech.description}</p>

                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-indigo-400">Key Features</h4>
                        <ul className="space-y-2">
                          {tech.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === 'applications' && (
              <motion.div
                key="applications"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Real-World Applications</h2>
                  <p className="text-xl opacity-90 max-w-3xl mx-auto">
                    Transformative applications of consciousness computing across various industries
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {applications.map((app, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-600/30 hover:scale-105 transition-all duration-300"
                    >
                      <div className="flex items-center mb-6">
                        <div className="text-4xl mr-4">{app.icon}</div>
                        <div>
                          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {app.category}
                          </span>
                          <h3 className="text-2xl font-bold mt-2 text-white">{app.title}</h3>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6">{app.description}</p>

                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-indigo-400">Key Benefits</h4>
                        <ul className="space-y-2">
                          {app.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                              <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Experience Consciousness Computing</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Be among the first to experience the future of consciousness-based computing. 
              Join us in revolutionizing how we interact with technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NextGenConsciousnessComputing2027;