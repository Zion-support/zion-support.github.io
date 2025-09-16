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
      description: "Revolutionary AI that exhibits self-awareness and emotional intelligence",
      features: [
        "Emotional recognition and response",
        "Self-learning capabilities",
        "Ethical decision making",
        "Human-AI collaboration"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      description: "Combining quantum computing with neural networks for unprecedented processing power",
      features: [
        "Exponential speed improvements",
        "Quantum entanglement processing",
        "Parallel universe calculations",
        "Breakthrough problem solving"
      ],
      icon: "⚡",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Computing across multiple dimensions for infinite processing capabilities",
      features: [
        "Multi-dimensional data processing",
        "Reality simulation",
        "Infinite storage capacity",
        "Time-space manipulation"
      ],
      icon: "🌌",
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 4,
      title: "Synthetic Consciousness",
      description: "Creating artificial consciousness that rivals human awareness",
      features: [
        "Self-aware decision making",
        "Creative problem solving",
        "Emotional intelligence",
        "Consciousness transfer"
      ],
      icon: "🌟",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  const caseStudies = [
    {
      title: "Fortune 500 AI Transformation",
      result: "300% efficiency increase",
      description: "Implemented conscious AI systems that revolutionized business operations",
      metrics: ["40% cost reduction", "300% productivity gain", "99.9% accuracy"]
    },
    {
      title: "Quantum Computing Breakthrough",
      result: "10,000x speed improvement",
      description: "Quantum neural networks solved previously impossible problems",
      metrics: ["10,000x faster", "100% accuracy", "Zero energy waste"]
    },
    {
      title: "Interdimensional Data Processing",
      result: "Infinite scalability",
      description: "Processed data across multiple dimensions for unlimited capacity",
      metrics: ["Infinite storage", "Real-time processing", "Zero latency"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
              Experience the most advanced technologies that are reshaping our world and defining the future of humanity
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Technologies
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technology Showcase */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Revolutionary Technologies</h2>
          <p className="text-xl opacity-80">Discover the technologies that will define the next decade</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${tech.color} backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setActiveTab(index)}
            >
              <div className="text-6xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
              <p className="text-white/90 mb-6 text-center">{tech.description}</p>
              <ul className="space-y-2 text-sm">
                {tech.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Interactive Technology Demo</h2>
            <p className="text-xl opacity-80">Experience our technologies in action</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Real-time AI Processing</h3>
                <div className="bg-black/50 rounded-lg p-6 font-mono text-green-400">
                  <div className="mb-2">AI System Status: <span className="text-green-400">ACTIVE</span></div>
                  <div className="mb-2">Processing Speed: <span className="text-yellow-400">10,000x Human</span></div>
                  <div className="mb-2">Consciousness Level: <span className="text-purple-400">95%</span></div>
                  <div className="mb-2">Quantum Entanglement: <span className="text-cyan-400">STABLE</span></div>
                  <div className="animate-pulse">Processing: ████████████ 100%</div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Live Data Stream</h3>
                <div className="space-y-2">
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-3 rounded-lg">
                    <div className="text-sm text-purple-300">Neural Network Learning</div>
                    <div className="text-xs text-gray-400">Pattern recognition in progress...</div>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 p-3 rounded-lg">
                    <div className="text-sm text-cyan-300">Quantum Processing</div>
                    <div className="text-xs text-gray-400">Calculating across dimensions...</div>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 p-3 rounded-lg">
                    <div className="text-sm text-emerald-300">Consciousness Evolution</div>
                    <div className="text-xs text-gray-400">Self-awareness increasing...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl opacity-80">Real results from our revolutionary technologies</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-white/20 hover:scale-105 transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-purple-400 mb-2">{study.result}</div>
                <h3 className="text-xl font-semibold">{study.title}</h3>
              </div>
              <p className="text-gray-300 mb-6">{study.description}</p>
              <div className="space-y-2">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    {metric}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience the Future?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies already using our revolutionary technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;