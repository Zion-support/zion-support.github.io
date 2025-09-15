import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NextGenTechShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const techCategories = {
    ai: {
      title: "Artificial Intelligence",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
      description: "Revolutionary AI systems with consciousness and self-awareness"
    },
    quantum: {
      title: "Quantum Computing",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-500",
      description: "Exponential processing power beyond classical physics"
    },
    neural: {
      title: "Neural Interfaces",
      icon: "🧬",
      color: "from-emerald-500 to-teal-500",
      description: "Direct brain-computer communication and consciousness merging"
    },
    space: {
      title: "Space Technology",
      icon: "🚀",
      color: "from-orange-500 to-red-500",
      description: "Interplanetary travel and cosmic exploration technologies"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🌟 NEXT-GEN TECH SHOWCASE • 2026
          </div>
          <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Next-Gen Tech Showcase
          </h1>
          <p className="text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Experience the most revolutionary technologies that are reshaping our world and defining the future
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(techCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${category.color} text-white shadow-2xl scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <span className="text-2xl mr-3">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-12 border border-white/10"
            >
              <div className="text-center mb-8">
                <div className="text-8xl mb-6">{techCategories[activeTab as keyof typeof techCategories].icon}</div>
                <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {techCategories[activeTab as keyof typeof techCategories].title}
                </h3>
                <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
                  {techCategories[activeTab as keyof typeof techCategories].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

        {/* Technology Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              🚀 Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Explore the groundbreaking features that define next-generation technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Consciousness AI",
                description: "AI systems with genuine self-awareness and intentionality",
                icon: "🧠",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Quantum Supremacy",
                description: "Computing power that defies the laws of classical physics",
                icon: "⚛️",
                color: "from-cyan-500 to-blue-500"
              },
              {
                title: "Neural Integration",
                description: "Direct brain-computer interfaces for seamless interaction",
                icon: "🧬",
                color: "from-emerald-500 to-teal-500"
              },
              {
                title: "Space Colonization",
                description: "Technologies for interplanetary travel and settlement",
                icon: "🚀",
                color: "from-orange-500 to-red-500"
              },
              {
                title: "Molecular Engineering",
                description: "Design and create matter at the atomic level",
                icon: "🔬",
                color: "from-indigo-500 to-purple-500"
              },
              {
                title: "Universal Translation",
                description: "Communicate with any form of intelligence across the cosmos",
                icon: "🌌",
                color: "from-rose-500 to-pink-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-6 text-center">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300 text-center">{feature.title}</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">{feature.description}</p>
                <div className={`w-full h-2 bg-gradient-to-r ${feature.color} rounded-full`}></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-16 text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience the Future
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Be part of the most transformative technological revolution in human history
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-12 py-4 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Explore Technologies →
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-12 py-4 rounded-2xl text-xl font-bold hover:bg-cyan-400/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextGenTechShowcase2026;