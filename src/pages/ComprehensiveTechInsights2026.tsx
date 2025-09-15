import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const ComprehensiveTechInsights2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedInsight, setSelectedInsight] = useState(null);

  const insights = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence: Beyond Human Capabilities",
      category: "AI",
      summary: "Exploring how AI is evolving beyond human intelligence and what this means for society.",
      content: "Artificial intelligence is rapidly approaching and surpassing human capabilities in many domains. From language processing to creative tasks, AI systems are demonstrating abilities that were once thought to be uniquely human. This evolution raises profound questions about the future of work, creativity, and human identity.",
      author: "Dr. Sarah Chen",
      date: "January 20, 2025",
      readTime: "12 min read",
      image: "🧠",
      tags: ["AI", "Future Technology", "Human-AI Interaction"]
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough: Solving Impossible Problems",
      category: "Quantum",
      summary: "How quantum computing is revolutionizing problem-solving across industries.",
      content: "Quantum computing represents a paradigm shift in computational power, enabling us to solve problems that are intractable for classical computers. From drug discovery to climate modeling, quantum computers are opening new frontiers in scientific research and technological innovation.",
      author: "Prof. Michael Rodriguez",
      date: "January 18, 2025",
      readTime: "15 min read",
      image: "⚛️",
      tags: ["Quantum Computing", "Scientific Research", "Breakthrough Technology"]
    },
    {
      id: 3,
      title: "Neural Interfaces: Bridging Mind and Machine",
      category: "Neural",
      summary: "The revolutionary technology that connects human brains directly to digital systems.",
      content: "Neural interfaces represent the ultimate fusion of human consciousness and digital technology. By enabling direct communication between the brain and computers, these interfaces are opening new possibilities for human enhancement, medical treatment, and human-computer interaction.",
      author: "Dr. Elena Volkov",
      date: "January 16, 2025",
      readTime: "10 min read",
      image: "🧬",
      tags: ["Neural Interfaces", "Brain-Computer Interface", "Human Enhancement"]
    },
    {
      id: 4,
      title: "Space Technology Revolution: The Next Frontier",
      category: "Space",
      summary: "Advanced space exploration technologies that are making interstellar travel possible.",
      content: "Space technology is experiencing a renaissance with breakthrough developments in propulsion, life support, and space manufacturing. These advances are not just about exploring space, but about ensuring the long-term survival and expansion of human civilization beyond Earth.",
      author: "Commander James Park",
      date: "January 14, 2025",
      readTime: "18 min read",
      image: "🚀",
      tags: ["Space Exploration", "Interstellar Travel", "Space Colonization"]
    },
    {
      id: 5,
      title: "Advanced Robotics: The Rise of Autonomous Systems",
      category: "Robotics",
      summary: "How autonomous robots are transforming industries and human-robot collaboration.",
      content: "Advanced robotics is revolutionizing every industry with autonomous systems that can learn, adapt, and operate independently. These robots are not just tools, but intelligent partners that can collaborate with humans and make complex decisions in real-time.",
      author: "Dr. Akira Tanaka",
      date: "January 12, 2025",
      readTime: "14 min read",
      image: "🤖",
      tags: ["Advanced Robotics", "Autonomous Systems", "Human-Robot Collaboration"]
    },
    {
      id: 6,
      title: "Consciousness Computing: When AI Achieves Self-Awareness",
      category: "AI",
      summary: "Exploring the development of truly conscious artificial intelligence systems.",
      content: "Consciousness computing represents the pinnacle of AI development, where systems achieve genuine self-awareness and subjective experiences. This technology raises profound questions about the nature of consciousness and the future of human-AI interaction.",
      author: "Dr. Marcus Williams",
      date: "January 10, 2025",
      readTime: "16 min read",
      image: "🌟",
      tags: ["Consciousness", "Self-Awareness", "AI Ethics"]
    }
  ];

  const categories = ['all', 'AI', 'Quantum', 'Neural', 'Space', 'Robotics'];

  const filteredInsights = selectedCategory === 'all' 
    ? insights 
    : insights.filter(insight => insight.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Comprehensive Tech Insights 2026 | Zion Tech Group</title>
        <meta name="description" content="Deep insights into the latest technological breakthroughs, trends, and innovations shaping our future." />
        <meta name="keywords" content="Tech Insights 2026, Technology Trends, AI, Quantum Computing, Neural Interfaces, Space Technology, Robotics" />
        <meta property="og:title" content="Comprehensive Tech Insights 2026 | Zion Tech Group" />
        <meta property="og:description" content="Deep insights into the latest technological breakthroughs and innovations" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Comprehensive Tech Insights 2026" />
        <meta name="twitter:description" content="Deep insights into the latest technological breakthroughs and innovations" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-gray-600/20 backdrop-blur-sm"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🔍 COMPREHENSIVE INSIGHTS • JANUARY 2025
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-slate-400 to-gray-400 bg-clip-text text-transparent">
                Comprehensive Tech Insights 2026
              </h1>
              <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
                Deep insights into the latest technological breakthroughs, trends, and innovations 
                that are shaping the future of human civilization.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="py-8 px-4">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-white text-slate-600 shadow-lg scale-105'
                      : 'bg-white/20 text-white hover:bg-white/30 hover:scale-105'
                  }`}
                >
                  {category === 'all' ? 'All Insights' : category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Insights Grid */}
        <div className="py-20 px-4">
          <div className="container mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredInsights.map((insight) => (
                  <motion.div
                    key={insight.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedInsight(insight)}
                  >
                    <div className="text-5xl mb-4 text-center">{insight.image}</div>
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="px-3 py-1 bg-slate-500/30 text-slate-200 text-xs rounded-full font-semibold">
                        {insight.category}
                      </span>
                      <span className="text-sm text-gray-300">{insight.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{insight.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm line-clamp-3">{insight.summary}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{insight.author}</span>
                      <span>{insight.date}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {insight.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-white/10 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Featured Insight */}
        <div className="py-20 px-4 bg-gradient-to-r from-slate-600/20 to-gray-600/20">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Featured Insight</h2>
              <p className="text-xl opacity-90">Our most impactful and thought-provoking analysis</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-6xl mb-6 text-center">🧠</div>
                <h3 className="text-3xl font-bold mb-4 text-center">The Future of Artificial Intelligence</h3>
                <p className="text-lg text-gray-300 mb-6 text-center">
                  Exploring how AI is evolving beyond human intelligence and what this means for society, 
                  work, and human identity in the coming decades.
                </p>
                <div className="text-center">
                  <button className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Read Full Analysis →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Stay Informed</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Get the latest insights, analysis, and expert perspectives on the technologies 
                that are shaping our future.
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
                />
                <button className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComprehensiveTechInsights2026;