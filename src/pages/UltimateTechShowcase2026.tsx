import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techCategories = [
    {
      id: 0,
      title: "AI & Machine Learning",
      icon: "🧠",
      gradient: "from-purple-600 to-pink-600",
      description: "Revolutionary AI technologies transforming industries",
      technologies: [
        {
          name: "Autonomous AI Systems",
          description: "Self-evolving AI that learns and adapts without human intervention",
          features: ["Self-learning algorithms", "Autonomous decision making", "Continuous optimization", "Predictive analytics"],
          status: "Available Now",
          impact: "High"
        },
        {
          name: "Quantum-Enhanced AI",
          description: "AI powered by quantum computing for exponential processing speed",
          features: ["Quantum neural networks", "Exponential speedup", "Complex problem solving", "Real-time processing"],
          status: "Beta Testing",
          impact: "Revolutionary"
        },
        {
          name: "Synthetic Intelligence",
          description: "AI agents with synthetic consciousness and creative capabilities",
          features: ["Synthetic consciousness", "Creative problem solving", "Emotional intelligence", "Autonomous creativity"],
          status: "In Development",
          impact: "Breakthrough"
        }
      ]
    },
    {
      id: 1,
      title: "Quantum Computing",
      icon: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      description: "Next-generation quantum processors and applications",
      technologies: [
        {
          name: "1000+ Qubit Processors",
          description: "Massive quantum processors with unprecedented computational power",
          features: ["1000+ logical qubits", "Quantum supremacy", "Error correction", "Scalable architecture"],
          status: "Available Now",
          impact: "Revolutionary"
        },
        {
          name: "Quantum AI Integration",
          description: "Seamless integration of quantum computing with AI systems",
          features: ["Quantum machine learning", "Hybrid algorithms", "Quantum optimization", "Enhanced AI performance"],
          status: "Beta Testing",
          impact: "High"
        },
        {
          name: "Molecular Simulation",
          description: "Ultra-precise molecular modeling for drug discovery and materials science",
          features: ["Atomic-level precision", "Real-time simulation", "Drug discovery", "Materials design"],
          status: "Available Now",
          impact: "High"
        }
      ]
    },
    {
      id: 2,
      title: "Neural Interfaces",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      description: "Direct brain-computer communication technology",
      technologies: [
        {
          name: "Non-Invasive BCI",
          description: "Brain-computer interfaces that don't require surgery",
          features: ["EEG-based control", "Thought recognition", "Real-time feedback", "Medical applications"],
          status: "Available Now",
          impact: "High"
        },
        {
          name: "Neural Enhancement",
          description: "Technology to enhance human cognitive abilities",
          features: ["Memory enhancement", "Cognitive acceleration", "Learning optimization", "Focus improvement"],
          status: "In Development",
          impact: "Breakthrough"
        },
        {
          name: "Thought-to-Text",
          description: "Direct conversion of thoughts to digital text",
          features: ["Real-time transcription", "High accuracy", "Multi-language support", "Privacy protection"],
          status: "Beta Testing",
          impact: "High"
        }
      ]
    },
    {
      id: 3,
      title: "Space Technology",
      icon: "🚀",
      gradient: "from-indigo-600 to-purple-600",
      description: "Advanced space exploration and colonization technology",
      technologies: [
        {
          name: "Mars Colonization",
          description: "Complete systems for sustainable Mars colonization",
          features: ["Life support systems", "Resource extraction", "Habitat construction", "Food production"],
          status: "In Development",
          impact: "Revolutionary"
        },
        {
          name: "Space Mining",
          description: "Automated mining operations on asteroids and moons",
          features: ["Autonomous mining", "Resource processing", "Transport systems", "Economic viability"],
          status: "Beta Testing",
          impact: "High"
        },
        {
          name: "Interstellar Travel",
          description: "Breakthrough propulsion systems for interstellar exploration",
          features: ["Fusion propulsion", "Warp drive concepts", "Cryogenic preservation", "Long-duration missions"],
          status: "Research Phase",
          impact: "Revolutionary"
        }
      ]
    }
  ];

  const stats = [
    { label: "Technologies Showcased", value: "50+", icon: "🔬" },
    { label: "Active Projects", value: "25+", icon: "⚡" },
    { label: "Research Partners", value: "100+", icon: "🤝" },
    { label: "Global Impact", value: "1B+", icon: "🌍" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 ULTIMATE TECH SHOWCASE • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Ultimate Technology Showcase 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Discover the most advanced technologies that are reshaping our world and defining the future of human civilization
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technology Categories */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">🔬 Technology Categories</h2>
          <p className="text-xl text-purple-200">Explore cutting-edge innovations across multiple domains</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {techCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === index
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Category Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{techCategories[activeTab].icon}</div>
              <h3 className="text-3xl font-bold text-white mb-4">{techCategories[activeTab].title}</h3>
              <p className="text-xl text-gray-300">{techCategories[activeTab].description}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techCategories[activeTab].technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-white">{tech.name}</h4>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      tech.status === 'Available Now' ? 'bg-green-500/20 text-green-400' :
                      tech.status === 'Beta Testing' ? 'bg-yellow-500/20 text-yellow-400' :
                      tech.status === 'In Development' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {tech.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{tech.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {tech.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Impact: {tech.impact}</span>
                    <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-semibold">
                      Learn More →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Innovation Timeline */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">⏰ Innovation Timeline</h2>
          <p className="text-xl text-purple-200">Key milestones in our technology development journey</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
          
          {[
            { year: "2024", title: "Quantum Breakthrough", description: "Achieved 100+ qubit quantum processor", status: "completed" },
            { year: "2025", title: "AI Revolution", description: "Launched autonomous AI systems", status: "completed" },
            { year: "2026", title: "Neural Interface", description: "Non-invasive BCI technology", status: "current" },
            { year: "2027", title: "Space Colonization", description: "Mars habitat construction begins", status: "upcoming" },
            { year: "2028", title: "Interstellar Travel", description: "First interstellar mission launch", status: "upcoming" }
          ].map((milestone, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-white/20 ${
                    milestone.status === 'current' ? 'ring-2 ring-yellow-400' : ''
                  }`}
                >
                  <div className="text-2xl font-bold text-white mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                  <div className={`mt-3 inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    milestone.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                    milestone.status === 'current' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {milestone.status === 'completed' ? '✅ Completed' :
                     milestone.status === 'current' ? '🔄 In Progress' :
                     '⏳ Upcoming'}
                  </div>
                </motion.div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-gray-900"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Ready to Shape the Future?</h2>
        <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
          Join us in building the technologies that will define the next century of human progress
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            Get Involved →
          </a>
          <a href="/pages/AdvancedAITransformation2026" className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors">
            Explore AI Technologies
          </a>
          <a href="/pages/QuantumComputingRevolution2026" className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors">
            Discover Quantum Computing
          </a>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;