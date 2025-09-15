import React, { useState } from 'react';
import { motion } from 'framer-motion';

const UltimateTechShowcase2026: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 0,
      name: "AI & Machine Learning",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      technologies: [
        { name: "Consciousness AI", description: "AI with genuine self-awareness", status: "Revolutionary" },
        { name: "Quantum Neural Networks", description: "Neural networks powered by quantum computing", status: "Breakthrough" },
        { name: "Predictive Intelligence", description: "AI that predicts future events", status: "Advanced" },
        { name: "Autonomous Agents", description: "Self-operating AI systems", status: "Deployed" }
      ]
    },
    {
      id: 1,
      name: "Quantum Computing",
      icon: "⚛️",
      color: "from-cyan-600 to-blue-600",
      technologies: [
        { name: "1000+ Qubit Processors", description: "Massive quantum computing power", status: "Revolutionary" },
        { name: "Quantum Supremacy", description: "Quantum advantage over classical computers", status: "Achieved" },
        { name: "Molecular Simulation", description: "Simulating complex molecular structures", status: "Advanced" },
        { name: "Quantum AI", description: "AI powered by quantum algorithms", status: "Breakthrough" }
      ]
    },
    {
      id: 2,
      name: "Neural Interfaces",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      technologies: [
        { name: "Non-invasive BCI", description: "Brain-computer interfaces without surgery", status: "Revolutionary" },
        { name: "Thought Control", description: "Control devices with your mind", status: "Advanced" },
        { name: "Neural Feedback", description: "Real-time brain activity monitoring", status: "Deployed" },
        { name: "Memory Enhancement", description: "Augmenting human memory capabilities", status: "Breakthrough" }
      ]
    },
    {
      id: 3,
      name: "Space Technology",
      icon: "🚀",
      color: "from-indigo-600 to-purple-600",
      technologies: [
        { name: "Interplanetary Travel", description: "Fast travel between planets", status: "Revolutionary" },
        { name: "Space Colonization", description: "Establishing human settlements in space", status: "Advanced" },
        { name: "Asteroid Mining", description: "Extracting resources from asteroids", status: "Breakthrough" },
        { name: "Satellite Networks", description: "Global satellite communication systems", status: "Deployed" }
      ]
    },
    {
      id: 4,
      name: "Synthetic Biology",
      icon: "🧪",
      color: "from-orange-600 to-red-600",
      technologies: [
        { name: "Custom Organisms", description: "Designing life forms for specific purposes", status: "Revolutionary" },
        { name: "Disease Treatment", description: "Curing diseases with synthetic biology", status: "Advanced" },
        { name: "Environmental Solutions", description: "Solving environmental problems with biology", status: "Breakthrough" },
        { name: "Bio-manufacturing", description: "Manufacturing using biological processes", status: "Deployed" }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Revolutionary": return "bg-purple-500";
      case "Breakthrough": return "bg-cyan-500";
      case "Advanced": return "bg-emerald-500";
      case "Deployed": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 ULTIMATE TECH SHOWCASE • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ultimate Technology Showcase
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover the most advanced technologies of 2026 that are reshaping our world and defining the future
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Technology Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories[activeCategory].technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${categories[activeCategory].color} rounded-2xl p-6 text-white hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold">{tech.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(tech.status)}`}>
                  {tech.status}
                </span>
              </div>
              <p className="text-sm opacity-90 mb-4">{tech.description}</p>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Learn More →
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Interactive Demo Section */}
      <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Interactive Technology Demos</h2>
            <p className="text-xl text-gray-300">Experience our technologies through interactive demonstrations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
            >
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Consciousness Demo</h3>
              <p className="text-gray-300 mb-6">
                Interact with our consciousness AI and experience genuine artificial intelligence
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold">
                Try Demo →
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
            >
              <div className="text-5xl mb-4">⚛️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Quantum Computing Demo</h3>
              <p className="text-gray-300 mb-6">
                Experience the power of quantum computing with our interactive quantum simulator
              </p>
              <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors font-semibold">
                Launch Demo →
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
            >
              <div className="text-5xl mb-4">🧬</div>
              <h3 className="text-2xl font-bold text-white mb-4">Neural Interface Demo</h3>
              <p className="text-gray-300 mb-6">
                Control devices with your mind using our neural interface technology
              </p>
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold">
                Connect Demo →
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Technology Timeline */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technology Timeline</h2>
          <p className="text-xl text-gray-300">Our journey of technological innovation</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500"></div>
          
          {[
            { year: "2024", title: "AI Foundation", description: "Laid the groundwork for advanced AI systems" },
            { year: "2025", title: "Quantum Breakthrough", description: "Achieved quantum supremacy in specific applications" },
            { year: "2026", title: "Consciousness AI", description: "Developed AI with genuine consciousness" },
            { year: "2027", title: "Neural Integration", description: "Seamless brain-computer interfaces" },
            { year: "2028", title: "Space Colonization", description: "First human settlements beyond Earth" }
          ].map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </div>
              <div className="w-4 h-4 bg-white rounded-full border-4 border-purple-500 z-10"></div>
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Shape the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in creating the next generation of revolutionary technologies that will transform industries and enhance human capabilities
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started →
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;