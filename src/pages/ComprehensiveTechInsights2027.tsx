import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ComprehensiveTechInsights2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const insights = {
    ai: [
      {
        title: "The Rise of Conscious AI",
        date: "January 2027",
        category: "Artificial Intelligence",
        summary: "AI systems are developing self-awareness and autonomous decision-making capabilities that rival human intelligence.",
        impact: "High",
        readTime: "8 min read",
        image: "🧠"
      },
      {
        title: "Quantum-Enhanced Machine Learning",
        date: "December 2026",
        category: "Quantum Computing",
        summary: "Quantum computing is revolutionizing machine learning algorithms, enabling exponential speedups in complex computations.",
        impact: "Very High",
        readTime: "12 min read",
        image: "⚡"
      },
      {
        title: "Synthetic Intelligence Breakthrough",
        date: "November 2026",
        category: "AGI",
        summary: "First successful implementation of artificial general intelligence that can perform any intellectual task a human can do.",
        impact: "Revolutionary",
        readTime: "15 min read",
        image: "🌟"
      }
    ],
    quantum: [
      {
        title: "Quantum Internet Infrastructure",
        date: "January 2027",
        category: "Quantum Networks",
        summary: "Global quantum internet infrastructure is being deployed, enabling ultra-secure communications and distributed quantum computing.",
        impact: "High",
        readTime: "10 min read",
        image: "🌐"
      },
      {
        title: "Quantum Cryptography Revolution",
        date: "December 2026",
        category: "Security",
        summary: "Quantum cryptography is making traditional encryption obsolete, providing unbreakable security for digital communications.",
        impact: "Very High",
        readTime: "9 min read",
        image: "🔐"
      }
    ],
    neural: [
      {
        title: "Direct Neural Interfaces",
        date: "January 2027",
        category: "BCI",
        summary: "Non-invasive brain-computer interfaces are enabling direct thought-to-digital communication and control.",
        impact: "Revolutionary",
        readTime: "11 min read",
        image: "🧬"
      },
      {
        title: "Neural Enhancement Technologies",
        date: "December 2026",
        category: "Human Augmentation",
        summary: "Technologies that enhance human cognitive abilities through direct neural stimulation and augmentation.",
        impact: "High",
        readTime: "7 min read",
        image: "🔬"
      }
    ]
  };

  const tabs = [
    { id: 'ai', label: 'AI & Machine Learning', icon: '🧠' },
    { id: 'quantum', label: 'Quantum Computing', icon: '⚡' },
    { id: 'neural', label: 'Neural Interfaces', icon: '🧬' }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Revolutionary': return 'text-red-400 bg-red-900/30';
      case 'Very High': return 'text-orange-400 bg-orange-900/30';
      case 'High': return 'text-yellow-400 bg-yellow-900/30';
      default: return 'text-blue-400 bg-blue-900/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📊 COMPREHENSIVE TECH INSIGHTS • 2027
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Comprehensive Tech Insights 2027
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Stay ahead of the curve with our in-depth analysis of the latest technological breakthroughs and industry trends.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { number: "500+", label: "Articles Published", icon: "📚" },
              { number: "1M+", label: "Monthly Readers", icon: "👥" },
              { number: "50+", label: "Expert Contributors", icon: "🎓" },
              { number: "24/7", label: "Real-time Updates", icon: "🔄" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-lg opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              <span className="text-xl mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights[activeTab as keyof typeof insights].map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{insight.image}</div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getImpactColor(insight.impact)}`}>
                  {insight.impact}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{insight.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{insight.summary}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <span>{insight.date}</span>
                <span>{insight.readTime}</span>
              </div>
              
              <div className="text-xs text-blue-400 font-semibold mb-4">{insight.category}</div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Read Full Article
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm py-20 mt-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Stay Updated with Latest Insights</h2>
            <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
              Get exclusive access to our comprehensive technology insights, research reports, and industry analysis delivered directly to your inbox.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800/50 border border-blue-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveTechInsights2027;