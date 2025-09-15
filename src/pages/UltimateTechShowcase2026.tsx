import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [currentDemo, setCurrentDemo] = useState(0);

  const techCategories = {
    ai: {
      title: "Artificial Intelligence Revolution",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      description: "Experience the next generation of AI with autonomous reasoning, quantum-enhanced processing, and global neural networks.",
      features: [
        "Autonomous AI Agents",
        "Quantum-Enhanced Processing", 
        "Global Neural Networks",
        "Real-time Learning",
        "Predictive Analytics",
        "Natural Language Understanding"
      ],
      demos: [
        {
          title: "Autonomous Decision Making",
          description: "Watch AI agents make complex decisions in real-time",
          video: "🤖",
          stats: "99.7% accuracy rate"
        },
        {
          title: "Quantum AI Processing",
          description: "Experience exponential speed improvements",
          video: "⚡",
          stats: "1000x faster processing"
        }
      ]
    },
    quantum: {
      title: "Quantum Computing Breakthrough",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      description: "Unlock exponential computing power that solves impossible problems with quantum supremacy and molecular simulation.",
      features: [
        "Quantum Supremacy",
        "Molecular Simulation",
        "Unbreakable Encryption",
        "Climate Modeling",
        "Drug Discovery",
        "Financial Optimization"
      ],
      demos: [
        {
          title: "Quantum Supremacy Demo",
          description: "See quantum computers solve problems impossible for classical computers",
          video: "🔬",
          stats: "10^300 operations/second"
        },
        {
          title: "Molecular Simulation",
          description: "Simulate complex molecular interactions in real-time",
          video: "🧬",
          stats: "1M+ atoms simulated"
        }
      ]
    },
    neural: {
      title: "Neural Interface Technology",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      description: "Bridge the gap between human consciousness and digital systems with direct thought control and memory enhancement.",
      features: [
        "Thought Control",
        "Memory Enhancement",
        "Neural Networking",
        "Medical Applications",
        "Augmented Reality",
        "Telepathic Communication"
      ],
      demos: [
        {
          title: "Thought-Controlled Devices",
          description: "Control computers and devices with your mind",
          video: "🎮",
          stats: "95% accuracy rate"
        },
        {
          title: "Memory Enhancement",
          description: "Augment human memory with digital storage",
          video: "💾",
          stats: "10x memory capacity"
        }
      ]
    },
    synthetic: {
      title: "Synthetic Intelligence",
      icon: "🤖",
      color: "from-orange-600 to-red-600",
      description: "Create and deploy AI agents with synthetic consciousness and autonomous capabilities that evolve continuously.",
      features: [
        "Synthetic Consciousness",
        "Autonomous Evolution",
        "Collective Intelligence",
        "Creative Synthesis",
        "Emotional Intelligence",
        "Self-Repairing Systems"
      ],
      demos: [
        {
          title: "Synthetic Consciousness",
          description: "Experience AI with genuine consciousness and emotions",
          video: "💭",
          stats: "Human-level consciousness"
        },
        {
          title: "Autonomous Evolution",
          description: "Watch AI systems evolve and improve themselves",
          video: "🔄",
          stats: "Continuous improvement"
        }
      ]
    }
  };

  const currentCategory = techCategories[activeTab as keyof typeof techCategories];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % currentCategory.demos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentCategory.demos.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 ULTIMATE TECH SHOWCASE • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience the Future
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Discover revolutionary technologies that are reshaping our world with interactive demos, 
              real-time simulations, and hands-on experiences.
            </p>
          </div>

          {/* Interactive Tech Tabs */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {Object.entries(techCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === key
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <span className="text-2xl mr-3">{category.icon}</span>
                  {category.title}
                </button>
              ))}
            </div>

            {/* Active Category Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${currentCategory.color} rounded-2xl p-12`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="text-8xl mb-6">{currentCategory.icon}</div>
                    <h2 className="text-4xl font-bold mb-6">{currentCategory.title}</h2>
                    <p className="text-xl opacity-90 mb-8">{currentCategory.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {currentCategory.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center"
                        >
                          <span className="font-semibold">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                        Try Interactive Demo →
                      </button>
                      <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                        Learn More
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                      <h3 className="text-2xl font-bold mb-6 text-center">Live Demo</h3>
                      
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentDemo}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.5 }}
                          className="text-center"
                        >
                          <div className="text-6xl mb-4">{currentCategory.demos[currentDemo].video}</div>
                          <h4 className="text-xl font-bold mb-2">{currentCategory.demos[currentDemo].title}</h4>
                          <p className="text-sm opacity-90 mb-4">{currentCategory.demos[currentDemo].description}</p>
                          <div className="bg-white/20 rounded-lg p-3">
                            <span className="font-bold">{currentCategory.demos[currentDemo].stats}</span>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                      
                      <div className="flex justify-center space-x-2 mt-6">
                        {currentCategory.demos.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentDemo(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentDemo ? 'bg-white' : 'bg-white/30'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Interactive Features Section */}
      <div className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Interactive Technology Features</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Experience cutting-edge technologies through interactive demos, real-time simulations, and hands-on experiments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30"
            >
              <div className="text-5xl mb-4 text-center">🎮</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Interactive Demos</h3>
              <p className="text-center opacity-90 mb-6">
                Try our interactive demonstrations and see technology in action with real-time feedback and results.
              </p>
              <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Start Demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30"
            >
              <div className="text-5xl mb-4 text-center">🔬</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Real-time Simulations</h3>
              <p className="text-center opacity-90 mb-6">
                Watch complex simulations run in real-time and see how our technologies solve real-world problems.
              </p>
              <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-semibold">
                View Simulation
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30"
            >
              <div className="text-5xl mb-4 text-center">🧪</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Hands-on Experiments</h3>
              <p className="text-center opacity-90 mb-6">
                Participate in hands-on experiments and see how you can apply these technologies in your own projects.
              </p>
              <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold">
                Start Experiment
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Technology Stats Section */}
      <div className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Technology Impact by Numbers</h2>
            <p className="text-xl opacity-90">See the measurable impact of our revolutionary technologies</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "99.9%", label: "Accuracy Rate", icon: "🎯" },
              { number: "1000x", label: "Performance Boost", icon: "⚡" },
              { number: "50M+", label: "Users Impacted", icon: "👥" },
              { number: "24/7", label: "Continuous Operation", icon: "🔄" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2 text-purple-400">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of innovators who are already using our revolutionary technologies to transform their industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;