import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const UltimateTechShowcase2026: React.FC = () => {
  const technologies = [
    {
      id: 1,
      name: "AI Consciousness Engine",
      description: "Revolutionary AI system with consciousness-like capabilities",
      category: "Artificial Intelligence",
      icon: "🧠",
      features: ["Self-awareness", "Emotional intelligence", "Creative problem solving", "Autonomous decision making"],
      status: "Available Now",
      impact: "Transformative"
    },
    {
      id: 2,
      name: "Quantum Neural Networks",
      description: "Hybrid quantum-classical neural networks for unprecedented computational power",
      category: "Quantum Computing",
      icon: "⚡",
      features: ["Quantum entanglement", "Parallel processing", "Exponential speedup", "Quantum error correction"],
      status: "Beta Testing",
      impact: "Revolutionary"
    },
    {
      id: 3,
      name: "Direct Brain Interface",
      description: "Seamless brain-computer interface for direct neural communication",
      category: "Neural Interfaces",
      icon: "🔗",
      features: ["Non-invasive", "Real-time processing", "High bandwidth", "Secure encryption"],
      status: "Available Now",
      impact: "Game-changing"
    },
    {
      id: 4,
      name: "Synthetic Biology AI",
      description: "AI-driven synthetic biology for personalized medicine and biotech solutions",
      category: "Biotechnology",
      icon: "🧬",
      features: ["DNA programming", "Protein synthesis", "Drug discovery", "Genetic optimization"],
      status: "In Development",
      impact: "Life-changing"
    },
    {
      id: 5,
      name: "Interplanetary Network",
      description: "Quantum-encrypted communication network spanning the solar system",
      category: "Space Technology",
      icon: "🛸",
      features: ["Quantum encryption", "Light-speed communication", "Solar system coverage", "Relay stations"],
      status: "Deploying",
      impact: "Universe-expanding"
    },
    {
      id: 6,
      name: "Reality Simulation Engine",
      description: "Ultra-realistic virtual reality indistinguishable from physical reality",
      category: "Virtual Reality",
      icon: "🌐",
      features: ["Photorealistic graphics", "Haptic feedback", "Neural integration", "Shared experiences"],
      status: "Prototype",
      impact: "Reality-defining"
    }
  ];

  const stats = [
    { label: "Technologies Showcased", value: "50+", icon: "🔬" },
    { label: "Research Partners", value: "200+", icon: "🤝" },
    { label: "Patents Filed", value: "150+", icon: "📋" },
    { label: "Breakthrough Achievements", value: "25+", icon: "🏆" }
  ];

  return (
    <>
      <Helmet>
        <title>Ultimate Tech Showcase 2026 - Zion Tech Group</title>
        <meta name="description" content="Discover the most comprehensive collection of cutting-edge technologies including AI consciousness, quantum computing, neural interfaces, and space technology." />
        <meta name="keywords" content="tech showcase, AI consciousness, quantum computing, neural interfaces, biotechnology, space technology, 2026" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🚀 ULTIMATE TECH SHOWCASE • 2026
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Ultimate Tech Showcase
              </h1>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                Experience the most comprehensive collection of revolutionary technologies that are reshaping our world and defining the future of human civilization.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2 text-emerald-400">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Revolutionary Technologies</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Explore the cutting-edge technologies that are transforming industries and reshaping human potential
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-600/30 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{tech.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    tech.status === 'Available Now' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    tech.status === 'Beta Testing' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                    tech.status === 'In Development' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  }`}>
                    {tech.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">{tech.name}</h3>
                <p className="text-gray-300 mb-4">{tech.description}</p>
                
                <div className="mb-6">
                  <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {tech.category}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-emerald-400">Key Features:</h4>
                  <ul className="space-y-2">
                    {tech.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Impact Level:</span>
                  <span className="text-sm font-semibold text-emerald-400">{tech.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join us in exploring these revolutionary technologies and discover how they can transform your business and unlock unprecedented possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
                Contact Our Experts
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default UltimateTechShowcase2026;