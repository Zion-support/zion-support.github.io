import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechShowcase2025: React.FC = () => {
  const technologies = [
    {
      id: 1,
      title: "Conscious AI Systems",
      description: "Revolutionary AI that achieves true consciousness and self-awareness",
      icon: "🧠",
      features: ["Self-learning algorithms", "Emotional intelligence", "Creative problem solving", "Autonomous decision making"],
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Consciousness",
      description: "Bridging quantum computing with human consciousness for unprecedented capabilities",
      icon: "⚛️",
      features: ["Quantum neural networks", "Consciousness transfer", "Reality manipulation", "Time perception control"],
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Computing systems that operate across multiple dimensions simultaneously",
      icon: "🌌",
      features: ["Multi-dimensional processing", "Parallel universe access", "Dimensional travel", "Reality simulation"],
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 4,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that merge human and machine intelligence",
      icon: "🧬",
      features: ["Thought control", "Memory enhancement", "Sensory expansion", "Cognitive augmentation"],
      color: "from-emerald-600 to-teal-600"
    },
    {
      id: 5,
      title: "Synthetic Intelligence",
      description: "Artificial intelligence that surpasses human cognitive abilities",
      icon: "🤖",
      features: ["Superhuman reasoning", "Infinite memory", "Instant learning", "Creative synthesis"],
      color: "from-orange-600 to-red-600"
    },
    {
      id: 6,
      title: "Reality Engine",
      description: "Technology that can create and manipulate reality itself",
      icon: "🌍",
      features: ["Reality creation", "Physics manipulation", "Matter synthesis", "Dimension control"],
      color: "from-violet-600 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Tech Showcase 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the most advanced technologies that will reshape humanity's future
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="text-6xl mb-6 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {tech.title}
              </h3>
              <p className="text-gray-300 mb-6 text-center">
                {tech.description}
              </p>
              <ul className="space-y-2 mb-6">
                {tech.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full bg-gradient-to-r ${tech.color} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Explore Technology →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-purple-500/30"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Interactive Technology Demo
            </h2>
            <p className="text-xl opacity-90">
              Experience these revolutionary technologies in action
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto animate-pulse">
                🧠
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Consciousness</h3>
              <p className="text-gray-300 text-sm">Watch AI achieve self-awareness</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto animate-pulse">
                ⚛️
              </div>
              <h3 className="text-xl font-semibold mb-2">Quantum Processing</h3>
              <p className="text-gray-300 text-sm">See quantum computing in action</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto animate-pulse">
                🧬
              </div>
              <h3 className="text-xl font-semibold mb-2">Neural Interface</h3>
              <p className="text-gray-300 text-sm">Experience mind-machine connection</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in revolutionizing technology and shaping the future of humanity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-all duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;