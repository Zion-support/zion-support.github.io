import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const technologies = [
    {
      id: 1,
      title: "Conscious AI Systems",
      description: "Next-generation AI with self-awareness and emotional intelligence",
      features: ["Self-learning algorithms", "Emotional recognition", "Autonomous decision making"],
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      description: "Revolutionary computing that combines quantum mechanics with neural processing",
      features: ["Exponential processing power", "Quantum entanglement", "Neural quantum states"],
      icon: "⚛️",
      gradient: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Breakthrough technology that operates across multiple dimensions",
      features: ["Multi-dimensional processing", "Reality manipulation", "Infinite scalability"],
      icon: "🌌",
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      id: 4,
      title: "Synthetic Intelligence",
      description: "Artificial consciousness that rivals human intelligence",
      features: ["Creative problem solving", "Intuitive understanding", "Conscious decision making"],
      icon: "🤖",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      id: 5,
      title: "Quantum Reality Engine",
      description: "Technology that can manipulate the fabric of reality itself",
      features: ["Reality simulation", "Quantum field manipulation", "Dimensional bridging"],
      icon: "🌀",
      gradient: "from-orange-600 to-red-600"
    },
    {
      id: 6,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that transcend current limitations",
      features: ["Thought control", "Memory enhancement", "Consciousness transfer"],
      icon: "🧬",
      gradient: "from-violet-600 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the most advanced technologies that are reshaping our world. 
              From conscious AI to interdimensional computing, discover the future today.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Technologies
              </button>
              <button className="border-2 border-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/20 transition-colors font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technologies Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">🚀 Revolutionary Technologies</h2>
          <p className="text-xl opacity-80">Discover the technologies that will define the next decade</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="text-6xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
              <p className="text-gray-300 mb-6 text-center">{tech.description}</p>
              <ul className="space-y-2 mb-6">
                {tech.features.map((feature, idx) => (
                  <li key={idx} className="text-purple-200 text-sm flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full bg-gradient-to-r ${tech.gradient} py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">🎮 Interactive Technology Demo</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Experience our revolutionary technologies in real-time. Interact with conscious AI, 
            explore quantum computing, and witness interdimensional processing.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-2">AI Consciousness Test</h3>
              <p className="text-sm opacity-80">Test the consciousness level of our AI systems</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold mb-2">Quantum Simulator</h3>
              <p className="text-sm opacity-80">Experience quantum computing in action</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-indigo-400/30">
              <div className="text-4xl mb-4">🌌</div>
              <h3 className="text-xl font-bold mb-2">Dimension Explorer</h3>
              <p className="text-sm opacity-80">Navigate through multiple dimensions</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Launch Interactive Demo
          </button>
        </motion.div>
      </div>

      {/* Success Stories */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">🏆 Success Stories</h2>
          <p className="text-xl opacity-80">See how our technologies are transforming industries</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">+500%</span>
              <span className="text-sm text-gray-400">Efficiency Gain</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Fortune 500 AI Transformation</h3>
            <p className="text-gray-300 mb-4">
              Implemented conscious AI systems that increased productivity by 500% and reduced operational costs by 60%.
            </p>
            <div className="text-purple-400 font-semibold">Read Case Study →</div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">$10M</span>
              <span className="text-sm text-gray-400">Cost Savings</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Quantum Computing Breakthrough</h3>
            <p className="text-gray-300 mb-4">
              Deployed quantum neural networks that solved previously impossible problems and saved $10M annually.
            </p>
            <div className="text-purple-400 font-semibold">Learn More →</div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">99.9%</span>
              <span className="text-sm text-gray-400">Success Rate</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Interdimensional Computing</h3>
            <p className="text-gray-300 mb-4">
              Achieved 99.9% success rate in multi-dimensional processing with zero downtime.
            </p>
            <div className="text-purple-400 font-semibold">View Results →</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already using our revolutionary technologies. 
            Transform your business with the power of tomorrow's technology today.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;