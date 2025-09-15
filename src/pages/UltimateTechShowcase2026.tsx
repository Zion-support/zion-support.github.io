import React from 'react';
import { motion } from 'framer-motion';

const UltimateTechShowcase2026: React.FC = () => {
  const technologies = [
    {
      id: 1,
      title: "Quantum AI Fusion",
      description: "Revolutionary fusion of quantum computing and artificial intelligence, delivering unprecedented processing power and cognitive capabilities.",
      icon: "⚛️",
      gradient: "from-purple-600 to-pink-600",
      features: ["Quantum Neural Networks", "Exponential Processing", "Cognitive Enhancement", "Real-time Learning"],
      applications: ["Drug Discovery", "Climate Modeling", "Financial Optimization", "Space Exploration"]
    },
    {
      id: 2,
      title: "Synthetic Consciousness",
      description: "Advanced AI systems with synthetic consciousness that can think, create, and evolve independently while maintaining ethical boundaries.",
      icon: "🧠",
      gradient: "from-cyan-600 to-blue-600",
      features: ["Self-Aware AI", "Creative Problem Solving", "Ethical Decision Making", "Autonomous Evolution"],
      applications: ["Scientific Research", "Creative Industries", "Education", "Healthcare"]
    },
    {
      id: 3,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that enable seamless communication between human consciousness and digital systems.",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      features: ["Non-invasive BCI", "Thought Control", "Memory Enhancement", "Sensory Augmentation"],
      applications: ["Medical Rehabilitation", "Education", "Entertainment", "Professional Training"]
    },
    {
      id: 4,
      title: "Quantum Supremacy",
      description: "Achieving quantum supremacy with 1000+ qubit processors that solve problems impossible for classical computers.",
      icon: "⚡",
      gradient: "from-indigo-600 to-purple-600",
      features: ["1000+ Qubits", "Quantum Error Correction", "Coherence Optimization", "Scalable Architecture"],
      applications: ["Cryptography", "Optimization", "Simulation", "Machine Learning"]
    },
    {
      id: 5,
      title: "Autonomous AI Systems",
      description: "Self-managing AI systems that can operate independently, make decisions, and adapt to changing environments.",
      icon: "🤖",
      gradient: "from-rose-600 to-pink-600",
      features: ["Autonomous Operation", "Self-Healing", "Adaptive Learning", "Distributed Intelligence"],
      applications: ["Smart Cities", "Manufacturing", "Transportation", "Energy Management"]
    },
    {
      id: 6,
      title: "Biotech AI Integration",
      description: "Advanced biotechnology combined with AI for personalized medicine, genetic engineering, and life extension.",
      icon: "🧪",
      gradient: "from-orange-600 to-red-600",
      features: ["Personalized Medicine", "Genetic Engineering", "Life Extension", "Disease Prevention"],
      applications: ["Healthcare", "Longevity", "Agriculture", "Environmental Protection"]
    }
  ];

  const stats = [
    { label: "Technologies Showcased", value: "50+", icon: "🚀" },
    { label: "Research Papers", value: "200+", icon: "📚" },
    { label: "Patents Filed", value: "150+", icon: "⚖️" },
    { label: "Global Impact", value: "1B+", icon: "🌍" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 ULTIMATE TECH SHOWCASE • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ultimate Technology Showcase 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the most comprehensive collection of cutting-edge technologies that are reshaping our world
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Technologies →
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technologies Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🚀 Revolutionary Technologies</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the most advanced technologies that are transforming industries and creating new possibilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${tech.gradient} rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              <div className="text-6xl mb-6 text-center">{tech.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
              <p className="text-white/90 mb-6 text-center">{tech.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Applications:</h4>
                <div className="flex flex-wrap gap-2">
                  {tech.applications.map((app, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/20 rounded-full text-xs">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-white text-gray-900 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Innovation Timeline */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">📅 Innovation Timeline</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Track the evolution of breakthrough technologies and their impact on society
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>
          
          {[
            { year: "2024", title: "Quantum Computing Breakthrough", description: "First 1000-qubit quantum processor" },
            { year: "2025", title: "Neural Interface Launch", description: "Non-invasive brain-computer interface" },
            { year: "2026", title: "Synthetic Intelligence", description: "First AI with synthetic consciousness" },
            { year: "2027", title: "Quantum Supremacy", description: "Quantum computers outperform classical" },
            { year: "2028", title: "AI-Human Fusion", description: "Seamless human-AI collaboration" }
          ].map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}
            >
              <div className="absolute top-0 w-4 h-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transform -translate-x-1/2 left-1/2"></div>
              <div className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{milestone.year}</div>
                <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                <p className="opacity-90">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
          <h2 className="text-4xl font-bold mb-4">Ready to Shape the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in exploring and developing the technologies that will define the next decade
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey →
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;