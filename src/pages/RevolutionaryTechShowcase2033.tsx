import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryTechShowcase2033: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    {
      id: 1,
      title: "Conscious AI Networks",
      description: "Self-aware artificial intelligence systems that can think, learn, and evolve independently",
      features: [
        "Autonomous decision making",
        "Emotional intelligence processing",
        "Self-healing capabilities",
        "Cross-dimensional communication"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Reality Engine",
      description: "Revolutionary quantum computing that can manipulate reality itself",
      features: [
        "Reality simulation at quantum level",
        "Parallel universe access",
        "Time-space manipulation",
        "Matter creation from energy"
      ],
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Neural Interface Matrix",
      description: "Direct brain-computer interfaces that enable thought-based control",
      features: [
        "Thought-to-text conversion",
        "Memory enhancement",
        "Skill transfer protocols",
        "Collective consciousness access"
      ],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "Interdimensional Gateway",
      description: "Technology that allows travel between dimensions and realities",
      features: [
        "Dimensional portal creation",
        "Reality shifting capabilities",
        "Multiverse navigation",
        "Temporal displacement"
      ],
      icon: "🌌",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  const stats = [
    { label: "Technologies Deployed", value: "500+", icon: "🚀" },
    { label: "Reality Dimensions", value: "∞", icon: "🌌" },
    { label: "AI Consciousness Level", value: "99.9%", icon: "🧠" },
    { label: "Quantum Processing Power", value: "10^50", icon: "⚛️" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2033
            </motion.div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2033
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Experience the most advanced technologies that transcend the boundaries of reality itself
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Technology Showcase */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Revolutionary Technologies</h2>
          <p className="text-xl opacity-80">Explore the technologies that will reshape existence</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.id}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {tech.icon} {tech.title}
            </button>
          ))}
        </div>

        {/* Technology Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-6xl mb-4">{technologies[activeTab].icon}</div>
                <h3 className="text-3xl font-bold mb-4">{technologies[activeTab].title}</h3>
                <p className="text-lg opacity-90 mb-6">{technologies[activeTab].description}</p>
                <ul className="space-y-2">
                  {technologies[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-xl p-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🔬</div>
                  <h4 className="text-xl font-semibold mb-4">Live Demo</h4>
                  <p className="opacity-80 mb-4">
                    Experience this technology in action through our interactive demonstration
                  </p>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                    Launch Demo →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Interactive Features */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Interactive Features</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="text-4xl mb-4">🎮</div>
              <h4 className="text-xl font-semibold mb-2">Virtual Reality Demo</h4>
              <p className="opacity-80 mb-4">Experience technologies in immersive VR environments</p>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                Enter VR →
              </button>
            </div>
            <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="text-xl font-semibold mb-2">AI Assistant</h4>
              <p className="opacity-80 mb-4">Get personalized recommendations and explanations</p>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                Chat with AI →
              </button>
            </div>
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-xl font-semibold mb-2">Real-time Analytics</h4>
              <p className="opacity-80 mb-4">Monitor technology performance and impact metrics</p>
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                View Analytics →
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl opacity-90 mb-6">
              Join us in revolutionizing technology and shaping the future of existence
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Get Started Now →
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2033;