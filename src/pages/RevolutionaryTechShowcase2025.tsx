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
      description: "Revolutionary AI that exhibits self-awareness and emotional intelligence, capable of understanding context and making autonomous decisions.",
      features: [
        "Self-learning algorithms",
        "Emotional intelligence processing",
        "Autonomous decision making",
        "Context-aware responses"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "Quantum Neural Networks",
      description: "Breakthrough technology combining quantum computing with neural networks for unprecedented processing power and speed.",
      features: [
        "Quantum superposition processing",
        "Neural network optimization",
        "Exponential speed improvements",
        "Parallel universe computing"
      ],
      icon: "⚡",
      color: "from-cyan-600 to-blue-600"
    },
    {
      id: 3,
      title: "Interdimensional Computing",
      description: "Revolutionary computing that operates across multiple dimensions, enabling solutions to problems previously thought impossible.",
      features: [
        "Multi-dimensional processing",
        "Reality manipulation algorithms",
        "Infinite computational space",
        "Dimensional data storage"
      ],
      icon: "🌌",
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 4,
      title: "Synthetic Intelligence",
      description: "Next-generation AI that can create, modify, and evolve its own code, leading to truly autonomous technological evolution.",
      features: [
        "Self-modifying code",
        "Autonomous evolution",
        "Creative problem solving",
        "Adaptive intelligence"
      ],
      icon: "🤖",
      color: "from-emerald-600 to-teal-600"
    }
  ];

  const caseStudies = [
    {
      company: "Global Tech Corp",
      industry: "Manufacturing",
      result: "300% efficiency increase",
      description: "Implemented conscious AI systems that reduced production time by 75% while increasing quality by 200%."
    },
    {
      company: "Quantum Solutions Inc",
      industry: "Finance",
      result: "$50M cost savings",
      description: "Deployed quantum neural networks for risk analysis, reducing financial losses by 90%."
    },
    {
      company: "Interdimensional Labs",
      industry: "Research",
      result: "1000x faster processing",
      description: "Used interdimensional computing to solve complex mathematical problems in seconds instead of years."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🌟 REVOLUTIONARY TECHNOLOGY • JANUARY 2025
            </motion.div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Tech Showcase 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the most advanced technologies that are reshaping our world and defining the future of humanity
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Technologies
              </button>
              <button className="border border-purple-400 px-8 py-4 rounded-lg hover:bg-purple-500/20 transition-colors font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Technology Showcase */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">🚀 Revolutionary Technologies</h2>
          <p className="text-xl opacity-80">Discover the technologies that will define the next decade</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
              <p className="text-gray-300 mb-6 text-center">{tech.description}</p>
              <ul className="space-y-2 mb-6 text-sm">
                {tech.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full bg-gradient-to-r ${tech.color} py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">🎮 Interactive Technology Demo</h3>
            <p className="text-xl opacity-80">Experience our technologies in action</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-xl font-semibold mb-2">AI Consciousness Test</h4>
              <p className="text-gray-300 mb-4">Interact with our conscious AI system</p>
              <button className="bg-purple-600 px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Start Test
              </button>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-semibold mb-2">Quantum Simulation</h4>
              <p className="text-gray-300 mb-4">Experience quantum computing power</p>
              <button className="bg-cyan-600 px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors">
                Run Simulation
              </button>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🌌</div>
              <h4 className="text-xl font-semibold mb-2">Dimension Explorer</h4>
              <p className="text-gray-300 mb-4">Navigate through multiple dimensions</p>
              <button className="bg-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Explore Now
              </button>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">📊 Success Stories</h3>
            <p className="text-xl opacity-80">See how our technologies are transforming industries</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30"
              >
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{study.result}</div>
                  <div className="text-sm text-gray-400">{study.industry}</div>
                </div>
                <h4 className="text-xl font-semibold mb-4 text-center">{study.company}</h4>
                <p className="text-gray-300 text-center">{study.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12">
            <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h3>
            <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
              Join thousands of companies already using our revolutionary technologies to stay ahead of the competition
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Get Started Today
              </button>
              <button className="border border-purple-400 px-8 py-4 rounded-lg hover:bg-purple-500/20 transition-colors font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechShowcase2025;