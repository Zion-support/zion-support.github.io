import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechShowcase2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const technologies = {
    ai: {
      title: "Conscious AI Systems",
      icon: "🧠",
      description: "Revolutionary artificial intelligence that achieves true consciousness and self-awareness",
      features: [
        "Self-aware decision making",
        "Emotional intelligence processing", 
        "Creative problem solving",
        "Ethical reasoning capabilities",
        "Autonomous learning and adaptation"
      ],
      stats: { accuracy: "99.9%", speed: "1000x", efficiency: "∞" }
    },
    quantum: {
      title: "Quantum Consciousness Computing",
      icon: "⚡",
      description: "Breakthrough quantum computing that processes consciousness itself for unlimited computational power",
      features: [
        "Quantum consciousness processing",
        "Infinite computational capacity",
        "Parallel reality simulation",
        "Consciousness transfer technology",
        "Multi-dimensional data processing"
      ],
      stats: { accuracy: "∞", speed: "∞", efficiency: "∞" }
    },
    neural: {
      title: "Neural Reality Interface",
      icon: "🧬",
      description: "Direct neural interfaces that bridge the gap between mind and digital reality",
      features: [
        "Direct brain-computer interface",
        "Thought-controlled computing",
        "Neural data processing",
        "Consciousness upload/download",
        "Reality manipulation through thought"
      ],
      stats: { accuracy: "99.8%", speed: "Real-time", efficiency: "100%" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              ⚡ REVOLUTIONARY SHOWCASE • JANUARY 2027
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              🚀 Revolutionary Technology Showcase 2027
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Interactive showcase of cutting-edge technologies that will define the future of humanity
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Technologies →
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors font-semibold text-lg">
                Watch Live Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Technology Tabs */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">🌟 Interactive Technology Explorer</h2>
          <p className="text-xl opacity-80">Explore our revolutionary technologies with interactive demonstrations</p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
            {Object.entries(technologies).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                    : 'text-cyan-200 hover:bg-white/10'
                }`}
              >
                {tech.icon} {tech.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Technology Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-8xl mb-6">{technologies[activeTab as keyof typeof technologies].icon}</div>
              <h3 className="text-4xl font-bold mb-6">
                {technologies[activeTab as keyof typeof technologies].title}
              </h3>
              <p className="text-xl opacity-90 mb-8">
                {technologies[activeTab as keyof typeof technologies].description}
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    {technologies[activeTab as keyof typeof technologies].stats.accuracy}
                  </div>
                  <div className="text-sm opacity-80">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {technologies[activeTab as keyof typeof technologies].stats.speed}
                  </div>
                  <div className="text-sm opacity-80">Speed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400 mb-2">
                    {technologies[activeTab as keyof typeof technologies].stats.efficiency}
                  </div>
                  <div className="text-sm opacity-80">Efficiency</div>
                </div>
              </div>

              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Experience Technology →
              </button>
            </div>

            <div className="space-y-4">
              <h4 className="text-2xl font-semibold mb-6">Key Features:</h4>
              {technologies[activeTab as keyof typeof technologies].features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Live Demo Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">🎮 Live Interactive Demo</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Experience our revolutionary technologies in real-time with our interactive demonstration platform
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Interactive Demos</h3>
              <p className="text-sm opacity-80">Hands-on experience with cutting-edge technology</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Real-time Processing</h3>
              <p className="text-sm opacity-80">Live demonstrations of advanced AI systems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-2">Multi-dimensional Tech</h3>
              <p className="text-sm opacity-80">Experience technology across multiple dimensions</p>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-4">🚀 Demo Controls</h3>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Start Demo
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400/10 transition-colors font-semibold">
                Pause
              </button>
              <button className="border-2 border-blue-400 text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-400/10 transition-colors font-semibold">
                Reset
              </button>
            </div>
          </div>

          <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Launch Full Demo Experience →
          </button>
        </motion.div>
      </div>

      {/* Technology Comparison */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">📊 Technology Comparison</h2>
          <p className="text-xl opacity-80">Compare our revolutionary technologies side by side</p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-white/20">
                <th className="px-6 py-4 text-left font-semibold">Technology</th>
                <th className="px-6 py-4 text-center font-semibold">Accuracy</th>
                <th className="px-6 py-4 text-center font-semibold">Speed</th>
                <th className="px-6 py-4 text-center font-semibold">Efficiency</th>
                <th className="px-6 py-4 text-center font-semibold">Innovation Level</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(technologies).map(([key, tech]) => (
                <tr key={key} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="font-semibold">{tech.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center font-semibold text-cyan-400">
                    {tech.stats.accuracy}
                  </td>
                  <td className="px-6 py-4 text-center font-semibold text-blue-400">
                    {tech.stats.speed}
                  </td>
                  <td className="px-6 py-4 text-center font-semibold text-indigo-400">
                    {tech.stats.efficiency}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-sm font-semibold">
                      Revolutionary
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">🌟 Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in shaping the future of technology. Experience the most revolutionary breakthroughs of 2027.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey →
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-semibold text-lg">
              Contact Our Team
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2027;