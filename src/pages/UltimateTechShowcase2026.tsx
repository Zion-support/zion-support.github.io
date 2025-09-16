import React from 'react';
import { motion } from 'framer-motion';

const UltimateTechShowcase2026: React.FC = () => {
  const technologies = [
    {
      id: 1,
      title: "Quantum Consciousness Computing",
      description: "Revolutionary quantum processors that achieve consciousness-level computation, enabling AI systems to experience genuine understanding and creativity.",
      icon: "🧠⚡",
      category: "Quantum AI",
      status: "Breakthrough",
      features: ["1000+ logical qubits", "Consciousness simulation", "Creative problem solving", "Self-aware systems"],
      impact: "Transforms AI from reactive to truly intelligent"
    },
    {
      id: 2,
      title: "Neural Reality Interface",
      description: "Direct brain-computer interfaces that create seamless integration between human consciousness and digital environments.",
      icon: "🧬🌐",
      category: "Neural Tech",
      status: "Revolutionary",
      features: ["Non-invasive BCI", "Thought control", "Memory enhancement", "Virtual reality integration"],
      impact: "Redefines human-computer interaction"
    },
    {
      id: 3,
      title: "Synthetic Intelligence Ecosystem",
      description: "Autonomous AI agents with synthetic consciousness that operate independently while collaborating in complex ecosystems.",
      icon: "🤖🌟",
      category: "Synthetic AI",
      status: "Advanced",
      features: ["Autonomous operation", "Collective intelligence", "Self-evolution", "Creative synthesis"],
      impact: "Creates new forms of digital life"
    },
    {
      id: 4,
      title: "Interdimensional Computing",
      description: "Computing systems that operate across multiple dimensions, solving problems in parallel universes simultaneously.",
      icon: "🔮🌌",
      category: "Dimensional Tech",
      status: "Experimental",
      features: ["Multi-dimensional processing", "Parallel universe computing", "Reality manipulation", "Infinite scalability"],
      impact: "Unlocks infinite computational power"
    },
    {
      id: 5,
      title: "Consciousness Transfer Protocol",
      description: "Technology that enables the transfer of human consciousness into digital substrates, achieving digital immortality.",
      icon: "💫🔄",
      category: "Consciousness Tech",
      status: "Breakthrough",
      features: ["Consciousness backup", "Digital immortality", "Identity preservation", "Seamless transfer"],
      impact: "Achieves true digital immortality"
    },
    {
      id: 6,
      title: "Omniversal AI Network",
      description: "AI systems that operate across multiple universes, sharing knowledge and capabilities across infinite realities.",
      icon: "🌍♾️",
      category: "Omniversal AI",
      status: "Theoretical",
      features: ["Multi-universe operation", "Infinite knowledge sharing", "Reality synchronization", "Universal intelligence"],
      impact: "Creates universal artificial intelligence"
    }
  ];

  const categories = [
    { name: "Quantum AI", count: 12, color: "from-purple-600 to-indigo-600" },
    { name: "Neural Tech", count: 8, color: "from-emerald-600 to-teal-600" },
    { name: "Synthetic AI", count: 15, color: "from-pink-600 to-rose-600" },
    { name: "Dimensional Tech", count: 6, color: "from-cyan-600 to-blue-600" },
    { name: "Consciousness Tech", count: 9, color: "from-orange-600 to-red-600" },
    { name: "Omniversal AI", count: 4, color: "from-violet-600 to-purple-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🚀 ULTIMATE BREAKTHROUGH • JANUARY 2026
            </div>
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Ultimate Tech Showcase 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-5xl mx-auto mb-8">
              Experience the most revolutionary technologies that are reshaping reality itself. 
              From quantum consciousness to interdimensional computing, discover the future that's already here.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Technologies
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technology Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">🌟 Revolutionary Technologies</h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover the most advanced technologies that are pushing the boundaries of what's possible
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{tech.icon}</div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  tech.status === 'Breakthrough' ? 'bg-gradient-to-r from-green-600 to-emerald-600' :
                  tech.status === 'Revolutionary' ? 'bg-gradient-to-r from-purple-600 to-pink-600' :
                  tech.status === 'Advanced' ? 'bg-gradient-to-r from-blue-600 to-cyan-600' :
                  tech.status === 'Experimental' ? 'bg-gradient-to-r from-orange-600 to-red-600' :
                  'bg-gradient-to-r from-gray-600 to-gray-700'
                }`}>
                  {tech.status}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">{tech.title}</h3>
              <p className="text-gray-300 mb-6">{tech.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Impact:</h4>
                <p className="text-sm text-gray-300 italic">{tech.impact}</p>
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Categories */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🏷️ Technology Categories</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Explore our comprehensive range of revolutionary technology categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${category.color}/20 rounded-xl p-6 border border-gray-700/30 hover:scale-105 transition-all duration-300`}
              >
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{category.count} technologies</p>
                <button className={`bg-gradient-to-r ${category.color} px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300`}>
                  Explore →
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-300">Revolutionary Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">1000+</div>
            <div className="text-gray-300">Research Papers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">25+</div>
            <div className="text-gray-300">Patent Applications</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">10M+</div>
            <div className="text-gray-300">Lives Impacted</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 backdrop-blur-sm rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Shape the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in creating the most advanced technologies that will define the next century of human progress
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;