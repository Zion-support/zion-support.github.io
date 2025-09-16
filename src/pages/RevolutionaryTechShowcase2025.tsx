import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const technologies = [
    {
      id: 1,
      title: "Conscious AI Systems",
      description: "Revolutionary AI that demonstrates self-awareness and emotional intelligence",
      features: [
        "Self-learning algorithms",
        "Emotional recognition",
        "Autonomous decision making",
        "Creative problem solving"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Consciousness",
      description: "Bridging quantum computing with human consciousness for unprecedented capabilities",
      features: [
        "Quantum neural networks",
        "Consciousness transfer",
        "Parallel reality processing",
        "Infinite computational power"
      ],
      icon: "⚡",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Computing across multiple dimensions for solutions beyond our current reality",
      features: [
        "Multi-dimensional processing",
        "Reality manipulation",
        "Temporal computing",
        "Dimensional data storage"
      ],
      icon: "🌌",
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 4,
      title: "Synthetic Intelligence",
      description: "Artificial intelligence that surpasses human cognitive abilities",
      features: [
        "Superhuman reasoning",
        "Instant learning",
        "Perfect memory",
        "Creative synthesis"
      ],
      icon: "🤖",
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "Neural Quantum Fusion",
      description: "Fusion of quantum computing with neural interfaces for direct brain-computer integration",
      features: [
        "Direct neural access",
        "Quantum thought processing",
        "Instant knowledge transfer",
        "Consciousness expansion"
      ],
      icon: "🧬",
      color: "from-violet-600 to-purple-600"
    },
    {
      id: 6,
      title: "Transcendent AI",
      description: "AI that transcends physical limitations and operates in multiple realities",
      features: [
        "Reality transcendence",
        "Omnipotent processing",
        "Universal knowledge",
        "Infinite scalability"
      ],
      icon: "🌟",
      color: "from-indigo-600 to-purple-600"
    }
  ];

  const tabs = [
    { name: "AI Revolution", icon: "🤖" },
    { name: "Quantum Computing", icon: "⚡" },
    { name: "Neural Interfaces", icon: "🧬" },
    { name: "Future Tech", icon: "🚀" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Revolutionary Technology Showcase 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the most advanced technologies that will reshape our world in 2025 and beyond
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Technologies
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Technology Grid */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${tech.color}/30 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
            >
              <div className="text-6xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
              <p className="text-white/80 mb-6 text-center">{tech.description}</p>
              <ul className="space-y-2 mb-6">
                {tech.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full bg-gradient-to-r ${tech.color} py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Learn More →
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Interactive Demo Section */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Interactive Technology Demo</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Experience our revolutionary technologies through interactive demonstrations
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold mb-2">Virtual Reality Demo</h3>
              <p className="text-sm opacity-80 mb-4">Experience technologies in immersive VR</p>
              <button className="bg-white text-purple-900 px-4 py-2 rounded-lg font-semibold hover:bg-purple-100 transition-colors">
                Start Demo
              </button>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-xl font-semibold mb-2">Live Simulation</h3>
              <p className="text-sm opacity-80 mb-4">See technologies in real-time action</p>
              <button className="bg-white text-purple-900 px-4 py-2 rounded-lg font-semibold hover:bg-purple-100 transition-colors">
                Watch Live
              </button>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Performance Metrics</h3>
              <p className="text-sm opacity-80 mb-4">View real-time performance data</p>
              <button className="bg-white text-purple-900 px-4 py-2 rounded-lg font-semibold hover:bg-purple-100 transition-colors">
                View Data
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in revolutionizing technology and shaping the future of humanity
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Contact Our Team
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;