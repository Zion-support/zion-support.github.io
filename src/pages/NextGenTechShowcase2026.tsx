import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

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
    <>
      <Helmet>
        <title>Next-Gen Tech Showcase 2026 | Zion Tech Group</title>
        <meta name="description" content="Explore cutting-edge technologies including AI, quantum computing, blockchain, and biotechnology shaping the future in 2026." />
        <meta name="keywords" content="Next-Gen Tech 2026, AI, Quantum Computing, Blockchain, Biotechnology, Future Technology" />
        <meta property="og:title" content="Next-Gen Tech Showcase 2026 | Zion Tech Group" />
        <meta property="og:description" content="Explore cutting-edge technologies shaping the future" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Next-Gen Tech Showcase 2026" />
        <meta name="twitter:description" content="Explore cutting-edge technologies shaping the future" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🚀 NEXT-GEN TECH • JANUARY 2025
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Next-Gen Tech Showcase 2026
              </h1>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                Discover the revolutionary technologies that are reshaping our world 
                and defining the future of human progress.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                  Explore Technologies →
                </button>
                <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-colors font-semibold text-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
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
            </div>
          </div>
        </div>

        {/* Innovation Timeline */}
        <div className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Innovation Timeline</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                A roadmap of technological breakthroughs and their impact on society
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">2026: AI Integration</h3>
                    <p className="text-blue-100">Widespread adoption of AI in everyday applications</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">2027: Quantum Breakthrough</h3>
                    <p className="text-purple-100">First practical quantum computers enter the market</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">2028: Biotech Revolution</h3>
                    <p className="text-green-100">Gene editing becomes mainstream for medical treatment</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">2029: Web3 Maturity</h3>
                    <p className="text-yellow-100">Decentralized internet becomes the standard</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">2030: Tech Convergence</h3>
                    <p className="text-red-100">All technologies merge into unified systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">The Future is Now</h2>
              <p className="text-xl opacity-90 max-w-4xl mx-auto mb-12">
                We stand at the threshold of a technological revolution that will transform 
                every aspect of human life, from work to creativity to problem-solving.
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                  <p className="text-blue-100">Pushing the boundaries of what's possible</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Transformation</h3>
                  <p className="text-purple-100">Changing how we live, work, and interact</p>
                </div>
                <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Progress</h3>
                  <p className="text-pink-100">Building a better future for humanity</p>
                </div>
              </div>
              <div className="mt-12">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                  Join the Future
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NextGenTechShowcase2026;