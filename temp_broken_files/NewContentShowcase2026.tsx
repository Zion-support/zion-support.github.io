import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentTabs = [
    {
      id: 'ai-transformation',
      title: 'AI Transformation 2026',
      icon: '🧠',
      description: 'Advanced AI systems with synthetic consciousness and quantum enhancement',
      link: '/pages/AdvancedAITransformation2026',
      color: 'from-purple-600 to-pink-600',
      features: ['Synthetic Consciousness', 'Quantum-Enhanced AI', 'Autonomous Agents']
    },
    {
      id: 'quantum-revolution',
      title: 'Quantum Revolution 2025',
      icon: '⚡',
      description: 'Revolutionary quantum computing that solves impossible problems',
      link: '/pages/QuantumComputingRevolution2025',
      color: 'from-cyan-600 to-blue-600',
      features: ['Quantum Supremacy', 'Quantum Cryptography', 'Molecular Simulation']
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface 2025',
      icon: '🧬',
      description: 'Direct brain-computer communication and thought-controlled devices',
      link: '/pages/NeuralInterfaceRevolution2025',
      color: 'from-green-600 to-emerald-600',
      features: ['Brain-Computer Interface', 'Thought Control', 'Neural Enhancement']
    }
  ];

  const newContent = [
    {
      id: 1,
      title: "Advanced Analytics Dashboard 2026",
      description: "Transform your data into actionable insights with our revolutionary analytics platform featuring real-time intelligence and AI-powered recommendations",
      icon: "📊",
      gradient: "from-blue-600 to-cyan-600",
      link: "/pages/AdvancedAnalyticsDashboard2026",
      features: ["AI-Powered Insights", "Real-time Visualization", "Predictive Modeling", "Custom Metrics"],
      category: "Analytics & Data"
    },
    {
      id: 2,
      title: "Biotech Revolution 2026",
      description: "Revolutionizing healthcare, agriculture, and environmental solutions through cutting-edge biotechnology, gene editing, and synthetic biology innovations",
      icon: "🧬",
      gradient: "from-green-600 to-emerald-600",
      link: "/pages/BiotechRevolution2026",
      features: ["Gene Editing", "Synthetic Biology", "Precision Medicine", "Environmental Solutions"],
      category: "Biotechnology"
    },
    {
      id: 3,
      title: "Space Tech Innovation 2026",
      description: "Pioneering space exploration technologies including advanced propulsion systems, space habitats, and interplanetary communication networks",
      icon: "🚀",
      gradient: "from-purple-600 to-indigo-600",
      link: "/pages/SpaceTechInnovation2026",
      features: ["Advanced Propulsion", "Space Habitats", "Interplanetary Communication", "Asteroid Mining"],
      category: "Space Technology"
    }
  ];

  const categories = ['all', 'Analytics & Data', 'Biotechnology', 'Space Technology'];

  const filteredContent = activeCategory === 'all' 
    ? newContent 
    : newContent.filter(item => item.category === activeCategory);

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">New Content Showcase 2026</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest innovations and technologies that will shape the future
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category === 'all' ? 'All Content' : category}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((content, index) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center">{content.icon}</div>
              <h4 className="text-xl font-bold text-white mb-3 text-center">{content.title}</h4>
              <p className="text-purple-200 text-sm mb-4 text-center">{content.description}</p>
              <a
                href={content.link}
                className={`block w-full bg-gradient-to-r ${content.gradient} text-white py-2 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300`}
              >
                Explore →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Ready to Explore the Future?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Dive into our revolutionary new content and discover technologies that will shape tomorrow
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/pages/AdvancedAnalyticsDashboard2026" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start with Analytics
            </a>
            <a href="/pages/BiotechRevolution2026" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Biotech
            </a>
            <a href="/pages/SpaceTechInnovation2026" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Journey to Space
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewContentShowcase2026;