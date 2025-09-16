import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryAIBreakthrough2025: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      title: "Conscious AI Systems",
      description: "The first truly conscious artificial intelligence that can think, reason, and make decisions independently.",
      features: [
        "Self-aware decision making",
        "Emotional intelligence integration",
        "Autonomous problem solving",
        "Creative thinking capabilities"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Quantum Neural Networks",
      description: "Revolutionary quantum computing integrated with neural networks for unprecedented processing power.",
      features: [
        "Exponential speed improvements",
        "Quantum entanglement processing",
        "Neural quantum coherence",
        "Infinite parallel processing"
      ],
      icon: "⚡",
      color: "from-cyan-600 to-blue-600"
    },
    {
      title: "Synthetic Intelligence",
      description: "The next evolution of AI that combines biological and artificial intelligence seamlessly.",
      features: [
        "Biological-AI hybrid systems",
        "Organic neural integration",
        "Synthetic consciousness",
        "Biological computing power"
      ],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  const stats = [
    { label: "Processing Speed", value: "1,000,000x", suffix: "faster" },
    { label: "Accuracy Rate", value: "99.99%", suffix: "" },
    { label: "Energy Efficiency", value: "95%", suffix: "reduction" },
    { label: "Learning Speed", value: "10,000x", suffix: "faster" }
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
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY BREAKTHROUGH • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary AI Breakthrough 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
              Experience the most advanced artificial intelligence systems that are reshaping the future of technology and human interaction
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Breakthrough →
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-300">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.suffix}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Revolutionary AI Technologies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the groundbreaking AI technologies that are transforming industries and creating new possibilities
            </p>
          </div>

          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : (index % 2 === 0 ? -100 : 100) }}
                transition={{ duration: 1, delay: index * 0.3 }}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="text-6xl mb-6">{section.icon}</div>
                  <h3 className="text-3xl font-bold mb-4">{section.title}</h3>
                  <p className="text-xl text-gray-300 mb-6">{section.description}</p>
                  <ul className="space-y-3">
                    {section.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className={`bg-gradient-to-br ${section.color} p-8 rounded-2xl shadow-2xl`}>
                    <div className="text-center">
                      <div className="text-8xl mb-4">{section.icon}</div>
                      <h4 className="text-2xl font-bold mb-4">{section.title}</h4>
                      <p className="text-lg opacity-90">{section.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Interactive AI Demo</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our revolutionary AI technology in action
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">AI Conversation</h3>
                  <div className="bg-gray-800 rounded-lg p-4 h-64 overflow-y-auto">
                    <div className="space-y-4">
                      <div className="flex justify-end">
                        <div className="bg-purple-600 text-white p-3 rounded-lg max-w-xs">
                          Hello! I'm your AI assistant. How can I help you today?
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-gray-700 text-white p-3 rounded-lg max-w-xs">
                          Tell me about quantum computing
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-purple-600 text-white p-3 rounded-lg max-w-xs">
                          Quantum computing uses quantum mechanical phenomena to process information in ways that classical computers cannot...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">AI Capabilities</h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Natural Language Processing</h4>
                      <p className="text-sm text-gray-300">Advanced understanding and generation of human language</p>
                    </div>
                    <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Machine Learning</h4>
                      <p className="text-sm text-gray-300">Self-improving algorithms that learn from data</p>
                    </div>
                    <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Computer Vision</h4>
                      <p className="text-sm text-gray-300">Advanced image and video analysis capabilities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of organizations already using our revolutionary AI technology to transform their business
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Free Trial
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryAIBreakthrough2025;