import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

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
      ]
    },
    neural: {
      title: "Neural Interface Technology",
      icon: "🧠",
      description: "Direct brain-computer communication and enhancement",
      features: [
        "Non-invasive brain-computer interfaces",
        "Thought-to-action conversion",
        "Memory enhancement and augmentation",
        "Telepathic communication networks",
        "Consciousness transfer capabilities"
      ],
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-600/20 to-teal-600/20",
      borderColor: "border-emerald-400/30"
    },
    synthetic: {
      title: "Synthetic Intelligence",
      icon: "🤖",
      description: "Artificially created consciousness and intelligence",
      features: [
        "Artificial consciousness and self-awareness",
        "Creative synthesis and innovation",
        "Collective intelligence networks",
        "Emotional and social intelligence",
        "Autonomous learning and evolution"
      ],
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-600/20 to-red-600/20",
      borderColor: "border-orange-400/30"
    },
    space: {
      title: "Space Technology Innovation",
      icon: "🚀",
      description: "Revolutionary space exploration and colonization",
      features: [
        "Faster-than-light propulsion systems",
        "Self-sustaining space habitats",
        "Asteroid mining and resource extraction",
        "Interplanetary communication networks",
        "Terraforming and planet engineering"
      ],
      color: "from-indigo-600 to-purple-600",
      bgColor: "from-indigo-600/20 to-purple-600/20",
      borderColor: "border-indigo-400/30"
    },
    biotech: {
      title: "Biotechnology Revolution",
      icon: "🧬",
      description: "Advanced biotechnology and genetic engineering",
      features: [
        "Precision gene editing and therapy",
        "Synthetic biology and organisms",
        "Neural-biotech interfaces",
        "Longevity and life extension",
        "Quantum bioimaging and diagnostics"
      ],
      color: "from-green-600 to-emerald-600",
      bgColor: "from-green-600/20 to-emerald-600/20",
      borderColor: "border-green-400/30"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 ULTIMATE TECH SHOWCASE • JANUARY 2026
            </div>
            <h1 className="text-7xl font-bold text-white mb-6">
              Ultimate Technology Showcase 2026
            </h1>
            <p className="text-2xl text-purple-200 mb-8 max-w-5xl mx-auto">
              Experience the most advanced technologies that will reshape our world. 
              From artificial consciousness to quantum supremacy, discover the future today.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore All Technologies
              </button>
              <button className="border border-purple-400 text-purple-200 px-8 py-4 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors text-lg">
                Watch Live Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technology Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Choose Your Technology</h2>
          <p className="text-xl opacity-90">Explore different categories of revolutionary technology</p>
        </div>
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(techCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
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
        {/* Category Content */}
        <AnimatePresence mode="wait">
          {Object.entries(techCategories).map(([key, category]) => (
            activeTab === key && (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {category.title}
                  </h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {category.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                    <div className="text-center">
                      <div className="text-6xl mb-4">{category.icon}</div>
                      <h4 className="text-xl font-semibold mb-2">Live Demo</h4>
                      <p className="text-white/70 mb-6">Experience this technology in action</p>
                      <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold">
                        Launch Demo
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2026;