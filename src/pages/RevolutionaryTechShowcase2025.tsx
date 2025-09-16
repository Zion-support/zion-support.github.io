import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: "Artificial Intelligence Revolution",
      description: "Experience the next generation of AI that thinks, learns, and creates like never before",
      features: [
        "Neural Network Optimization",
        "Real-time Learning Algorithms", 
        "Emotional Intelligence Integration",
        "Autonomous Decision Making"
      ],
      stats: { accuracy: "99.9%", speed: "1000x", efficiency: "500%" },
      color: "from-blue-500 to-purple-600"
    },
    quantum: {
      title: "Quantum Computing Breakthrough",
      description: "Unlock infinite computational power with quantum technology that defies classical limits",
      features: [
        "Quantum Entanglement Processing",
        "Superposition State Computing",
        "Quantum Cryptography",
        "Molecular Simulation"
      ],
      stats: { qubits: "1000+", speed: "∞", security: "Unbreakable" },
      color: "from-purple-500 to-pink-600"
    },
    neural: {
      title: "Neural Interface Technology",
      description: "Connect your mind directly to digital systems with revolutionary brain-computer interfaces",
      features: [
        "Non-invasive Brain Reading",
        "Thought-to-Text Conversion",
        "Neural Feedback Systems",
        "Consciousness Integration"
      ],
      stats: { latency: "1ms", accuracy: "99.8%", safety: "100%" },
      color: "from-green-500 to-teal-600"
    },
    reality: {
      title: "Reality Engineering",
      description: "Manipulate reality itself with advanced technology that blurs the line between digital and physical",
      features: [
        "Holographic Projections",
        "Matter Manipulation",
        "Dimensional Shifting",
        "Reality Simulation"
      ],
      stats: { fidelity: "100%", immersion: "∞", stability: "Perfect" },
      color: "from-indigo-500 to-cyan-600"
    }
  };

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer, TechCorp",
      content: "This technology has revolutionized our entire operation. We've seen a 500% increase in efficiency.",
      avatar: "👩‍💼"
    },
    {
      name: "Marcus Johnson",
      role: "Quantum Physicist, Quantum Labs",
      content: "The quantum computing breakthrough is beyond anything I've ever seen. It's truly revolutionary.",
      avatar: "👨‍🔬"
    },
    {
      name: "Elena Rodriguez",
      role: "Neural Interface Researcher, BrainTech",
      content: "The neural interface technology has opened up possibilities we never thought possible.",
      avatar: "👩‍⚕️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Witness the most advanced technologies that are reshaping reality and creating infinite possibilities for humanity
            </p>
          </motion.div>
        </div>
      </div>

      {/* Technology Tabs */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${tech.color} text-white shadow-lg scale-105`
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {tech.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 border border-gray-700/50"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-6">
                    {technologies[activeTab as keyof typeof technologies].title}
                  </h2>
                  <p className="text-xl text-gray-300 mb-8">
                    {technologies[activeTab as keyof typeof technologies].description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {Object.entries(technologies[activeTab as keyof typeof technologies].stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">{value}</div>
                        <div className="text-sm text-gray-400 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`bg-gradient-to-r ${technologies[activeTab as keyof typeof technologies].color} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                    Explore Technology →
                  </button>
                </div>

                <div className="relative">
                  <div className={`w-full h-96 bg-gradient-to-br ${technologies[activeTab as keyof typeof technologies].color} rounded-2xl flex items-center justify-center`}>
                    <div className="text-8xl opacity-50">
                      {activeTab === 'ai' && '🤖'}
                      {activeTab === 'quantum' && '⚛️'}
                      {activeTab === 'neural' && '🧠'}
                      {activeTab === 'reality' && '🌌'}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="py-20 bg-gradient-to-r from-indigo-600/20 to-purple-600/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-5xl font-bold mb-6">Interactive Technology Demo</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Experience our revolutionary technologies in real-time with interactive demonstrations
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">Precision Targeting</h3>
                <p className="text-gray-300 text-sm">99.9% accuracy in all operations</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Lightning Speed</h3>
                <p className="text-gray-300 text-sm">1000x faster than conventional systems</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold mb-2">Ultimate Security</h3>
                <p className="text-gray-300 text-sm">Unbreakable quantum encryption</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                <p className="text-gray-300 text-sm">Worldwide deployment capabilities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">What Industry Leaders Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from the experts who are already using our revolutionary technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="text-6xl mb-4">{testimonial.avatar}</div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-indigo-600/20 to-purple-600/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-5xl font-bold mb-6">Ready to Experience the Future?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join the revolution and be among the first to experience these groundbreaking technologies
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                Watch Full Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;