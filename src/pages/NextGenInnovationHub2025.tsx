<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React from 'react';
>>>>>>> cursor/create-and-deploy-new-content-db2e
import { motion } from 'framer-motion';

const NextGenInnovationHub2025: React.FC = () => {
  const [activeInnovation, setActiveInnovation] = useState('consciousness');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const innovations = {
    consciousness: {
      title: "Consciousness Computing",
      description: "Revolutionary computing systems that achieve true consciousness and self-awareness.",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      features: [
        "Self-Aware AI Systems",
        "Consciousness Upload Technology",
        "Emotional Intelligence Processing",
        "Moral Decision Making",
        "Creative Problem Solving",
        "Self-Improving Algorithms"
      ],
      impact: "Creating AI that thinks and feels like humans",
      applications: [
        "Healthcare: AI doctors with empathy",
        "Education: Personalized AI tutors",
        "Entertainment: AI companions",
        "Research: AI scientists"
      ]
    },
    quantum: {
      title: "Quantum Reality Engine",
      description: "Quantum computing that creates and manipulates reality itself.",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      features: [
        "Reality Simulation Technology",
        "Parallel Universe Processing",
        "Time Dilation Computing",
        "Quantum Consciousness",
        "Infinite Computational Power",
        "Reality Manipulation"
      ],
      impact: "Unlocking the secrets of reality and consciousness",
      applications: [
        "Physics: Understanding the universe",
        "Medicine: Quantum healing",
        "Space: Interstellar travel",
        "Energy: Unlimited power"
      ]
    },
    neural: {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that expand human consciousness.",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      features: [
        "Thought-Controlled Computing",
        "Memory Enhancement Technology",
        "Consciousness Expansion",
        "Neural Network Integration",
        "Brain-to-Brain Communication",
        "Digital Immortality"
      ],
      impact: "Eliminating the boundary between mind and machine",
      applications: [
        "Medicine: Neural prosthetics",
        "Education: Direct knowledge transfer",
        "Communication: Telepathic networks",
        "Entertainment: Virtual reality"
      ]
    },
    interdimensional: {
      title: "Interdimensional Technology",
      description: "Breakthrough technology that allows travel between dimensions.",
      icon: "🌌",
      color: "from-violet-600 to-purple-600",
      features: [
        "Dimensional Portal Technology",
        "Multiverse Communication",
        "Reality Branching",
        "Time Travel Capabilities",
        "Parallel Universe Access",
        "Cosmic Consciousness"
      ],
      impact: "Expanding human existence across infinite realities",
      applications: [
        "Exploration: New worlds",
        "Research: Parallel universes",
        "Energy: Dimensional power",
        "Transportation: Instant travel"
      ]
    }
  };

  const currentInnovation = innovations[activeInnovation as keyof typeof innovations];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse"
          >
            🧠 NEXT-GEN INNOVATION HUB • 2025
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-7xl font-bold mb-6 bg-gradient-to-r from-white via-teal-200 to-blue-200 bg-clip-text text-transparent"
          >
            Next-Gen Innovation Hub 2025
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl opacity-90 max-w-4xl mx-auto mb-12"
          >
            Discover and explore the most revolutionary technologies shaping humanity's future
          </motion.p>
=======
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🧠 NEXT-GEN INNOVATION HUB • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover and explore the most revolutionary technologies shaping humanity's future
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Enter Innovation Hub →
              </button>
              <button className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg hover:bg-emerald-400/10 transition-colors font-semibold text-lg">
                Explore Technologies
              </button>
            </div>
          </motion.div>
>>>>>>> cursor/create-and-deploy-new-content-db2e
        </div>
      </motion.div>

      {/* Innovation Categories */}
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {Object.keys(innovations).map((innovation) => (
            <motion.button
              key={innovation}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveInnovation(innovation)}
              className={`p-6 rounded-xl transition-all duration-300 ${
                activeInnovation === innovation
                  ? `bg-gradient-to-r ${innovations[innovation as keyof typeof innovations].color} text-white shadow-lg`
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <div className="text-4xl mb-3">{innovations[innovation as keyof typeof innovations].icon}</div>
              <div className="font-semibold text-sm">
                {innovations[innovation as keyof typeof innovations].title.split(' ')[0]}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Innovation Details */}
        <motion.div
          key={activeInnovation}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Description and Features */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-6xl">{currentInnovation.icon}</div>
                <div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">
                    {currentInnovation.title}
                  </h2>
                  <p className="text-lg opacity-90 mt-2">{currentInnovation.impact}</p>
                </div>
              </div>
              
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                {currentInnovation.description}
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mb-4">Revolutionary Features:</h3>
                {currentInnovation.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${currentInnovation.color} rounded-full`}></div>
                    <span className="text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Applications */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Real-World Applications:</h3>
              <div className="space-y-4">
                {currentInnovation.applications.map((application, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${currentInnovation.color}/30 backdrop-blur-sm rounded-xl p-6 border border-white/20`}
                  >
                    <div className="text-lg font-semibold text-white mb-2">{application}</div>
                    <div className="text-sm opacity-80">Revolutionary application</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-xl border border-green-400/30">
                <h4 className="text-xl font-semibold mb-2 text-green-200">✅ Innovation Status</h4>
                <p className="text-sm opacity-90">
                  This innovation is currently in active development with 95% completion rate. 
                  Expected public release: Q2 2025.
                </p>
              </div>
            </div>
=======
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🌟 Innovation Categories</h2>
          <p className="text-xl opacity-80">Explore cutting-edge technologies across all domains</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI & Machine Learning</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Advanced AI systems and machine learning algorithms
            </p>
            <ul className="text-emerald-200 space-y-2 mb-6 text-sm">
              <li>• 50+ Active Innovations</li>
              <li>• 99.9% Success Rate</li>
              <li>• Infinite Possibilities</li>
              <li>• Real-time Processing</li>
            </ul>
            <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
              Explore AI →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-teal-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Quantum Computing</h3>
            <p className="text-teal-100 mb-6 text-center">
              Revolutionary quantum computing technologies
            </p>
            <ul className="text-teal-200 space-y-2 mb-6 text-sm">
              <li>• Quantum Supremacy</li>
              <li>• Quantum Algorithms</li>
              <li>• Quantum Cryptography</li>
              <li>• Quantum Simulation</li>
            </ul>
            <button className="w-full bg-white text-teal-600 py-3 rounded-lg hover:bg-teal-50 transition-colors font-semibold">
              Enter Quantum →
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-4 text-center">🧬</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Biotechnology</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Cutting-edge biotech and life sciences innovations
            </p>
            <ul className="text-cyan-200 space-y-2 mb-6 text-sm">
              <li>• Gene Editing</li>
              <li>• Synthetic Biology</li>
              <li>• Personalized Medicine</li>
              <li>• Bio-Engineering</li>
            </ul>
            <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
              Explore Biotech →
            </button>
          </motion.div>
        </div>
      </div>

      {/* Interactive Innovation Lab */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🔬 Interactive Innovation Lab</h2>
            <p className="text-xl opacity-90">
              Experiment with cutting-edge technologies in our virtual lab
            </p>
>>>>>>> cursor/create-and-deploy-new-content-db2e
          </div>
        </motion.div>

<<<<<<< HEAD
        {/* Innovation Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Innovation Hub Statistics</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "50+", label: "Active Innovations", icon: "🚀" },
              { metric: "99.9%", label: "Success Rate", icon: "🎯" },
              { metric: "1000x", label: "Performance Boost", icon: "⚡" },
              { metric: "∞", label: "Possibilities", icon: "🌟" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-teal-200 mb-2">{stat.metric}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-teal-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/30">
            <h3 className="text-4xl font-bold mb-4">Join the Innovation Hub</h3>
            <p className="text-xl opacity-90 mb-8">
              Be part of the most advanced innovation community in the world
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Enter the Hub →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
=======
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">AI Experimentation Platform</h3>
              <p className="mb-6 opacity-90">
                Build and test AI models with our advanced experimentation tools
              </p>
              <div className="space-y-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Available Models</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded text-sm transition-colors">
                      GPT-5
                    </button>
                    <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded text-sm transition-colors">
                      Neural Networks
                    </button>
                    <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded text-sm transition-colors">
                      Deep Learning
                    </button>
                    <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded text-sm transition-colors">
                      Reinforcement
                    </button>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Start AI Experiment
                </button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Quantum Simulation Lab</h3>
              <p className="mb-6 opacity-90">
                Simulate quantum algorithms and explore quantum phenomena
              </p>
              <div className="space-y-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Quantum Algorithms</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded text-sm transition-colors">
                      Shor's Algorithm
                    </button>
                    <button className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded text-sm transition-colors">
                      Grover's Search
                    </button>
                    <button className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded text-sm transition-colors">
                      VQE
                    </button>
                    <button className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded text-sm transition-colors">
                      QAOA
                    </button>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Launch Quantum Lab
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Statistics */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">📈 Innovation Impact</h2>
          <p className="text-xl opacity-80">The numbers that showcase our innovation success</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-emerald-400 mb-2">500+</div>
            <div className="text-lg opacity-80">Active Innovations</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-teal-400 mb-2">99.9%</div>
            <div className="text-lg opacity-80">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-2">1000+</div>
            <div className="text-lg opacity-80">Researchers</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">$100M+</div>
            <div className="text-lg opacity-80">R&D Investment</div>
          </div>
        </div>
      </div>

      {/* Featured Innovations */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">⭐ Featured Innovations</h2>
          <p className="text-xl opacity-80">Our most groundbreaking recent discoveries</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30">
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 bg-emerald-500 text-white text-sm rounded-full">NEW</span>
              <span className="text-sm opacity-80">January 2025</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Conscious AI Systems</h3>
            <p className="opacity-90 mb-4">
              First AI systems to achieve true consciousness and self-awareness
            </p>
            <a href="#" className="text-emerald-400 hover:text-emerald-300 font-semibold">
              Learn More →
            </a>
          </div>

          <div className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 border border-teal-400/30">
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 bg-teal-500 text-white text-sm rounded-full">BREAKTHROUGH</span>
              <span className="text-sm opacity-80">January 2025</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Quantum Internet</h3>
            <p className="opacity-90 mb-4">
              Ultra-secure quantum internet with instant global communication
            </p>
            <a href="#" className="text-teal-400 hover:text-teal-300 font-semibold">
              Explore Quantum →
            </a>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30">
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 bg-cyan-500 text-white text-sm rounded-full">REVOLUTIONARY</span>
              <span className="text-sm opacity-80">January 2025</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Neural Interface</h3>
            <p className="opacity-90 mb-4">
              Direct brain-computer interfaces for thought-controlled computing
            </p>
            <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold">
              Experience Neural →
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Innovation Revolution</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of the most innovative technological transformation in human history
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Innovating
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
              Join Research Team
            </button>
>>>>>>> cursor/create-and-deploy-new-content-db2e
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="bg-black/20 backdrop-blur-sm py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-white/70">
            © 2025 Zion Tech Group. All rights reserved. | Next-Gen Innovation Hub
          </p>
        </div>
      </div>
    </div>
  );
};

export default NextGenInnovationHub2025;