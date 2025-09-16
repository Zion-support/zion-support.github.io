import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ComprehensiveTechInsights2027: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ai');

  const insights = {
    ai: {
      title: "AI & Machine Learning",
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      articles: [
        {
          title: "The Dawn of Artificial Consciousness: How AI Achieved Self-Awareness",
          excerpt: "Exploring the breakthrough moment when AI systems first demonstrated true self-awareness and consciousness.",
          readTime: "8 min read",
          date: "January 20, 2027",
          tags: ["AI", "Consciousness", "Breakthrough"]
        },
        {
          title: "Quantum-Enhanced Neural Networks: The Next Evolution",
          excerpt: "How quantum computing is revolutionizing neural network architectures and processing capabilities.",
          readTime: "12 min read",
          date: "January 18, 2027",
          tags: ["Quantum", "Neural Networks", "Computing"]
        },
        {
          title: "Emotional Intelligence in AI: Beyond Logic and Reasoning",
          excerpt: "The development of AI systems that can understand, process, and respond to human emotions.",
          readTime: "6 min read",
          date: "January 15, 2027",
          tags: ["AI", "Emotions", "Psychology"]
        }
      ]
    },
    quantum: {
      title: "Quantum Computing",
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      articles: [
        {
          title: "Quantum Supremacy 2.0: Beyond Classical Computing",
          excerpt: "The latest advances in quantum computing that have made classical computers obsolete for certain tasks.",
          readTime: "10 min read",
          date: "January 22, 2027",
          tags: ["Quantum", "Supremacy", "Computing"]
        },
        {
          title: "Quantum Consciousness: The Intersection of Mind and Matter",
          excerpt: "How quantum mechanics is being used to understand and replicate consciousness in artificial systems.",
          readTime: "15 min read",
          date: "January 19, 2027",
          tags: ["Quantum", "Consciousness", "Physics"]
        },
        {
          title: "Quantum Internet: The Future of Secure Communication",
          excerpt: "Building a quantum internet that provides unbreakable encryption and instant communication.",
          readTime: "7 min read",
          date: "January 16, 2027",
          tags: ["Quantum", "Internet", "Security"]
        }
      ]
    },
    neural: {
      title: "Neural Interfaces",
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      articles: [
        {
          title: "Direct Brain-Computer Interface: Merging Mind and Machine",
          excerpt: "The latest developments in non-invasive brain-computer interfaces that allow direct thought control.",
          readTime: "9 min read",
          date: "January 21, 2027",
          tags: ["BCI", "Neural", "Interface"]
        },
        {
          title: "Memory Enhancement Through Neural Implants",
          excerpt: "How neural implants are being used to enhance human memory and cognitive abilities.",
          readTime: "11 min read",
          date: "January 17, 2027",
          tags: ["Memory", "Implants", "Enhancement"]
        },
        {
          title: "Consciousness Upload: The Digital Immortality Project",
          excerpt: "The ambitious project to upload human consciousness into digital systems for eternal life.",
          readTime: "14 min read",
          date: "January 14, 2027",
          tags: ["Consciousness", "Upload", "Immortality"]
        }
      ]
    },
    space: {
      title: "Space Technology",
      icon: "🌌",
      color: "from-violet-600 to-purple-600",
      articles: [
        {
          title: "Faster-Than-Light Travel: Breaking the Cosmic Speed Limit",
          excerpt: "The revolutionary propulsion systems that enable faster-than-light travel across the galaxy.",
          readTime: "13 min read",
          date: "January 23, 2027",
          tags: ["Space", "FTL", "Travel"]
        },
        {
          title: "Dimensional Portals: Gateway to Parallel Universes",
          excerpt: "The creation of stable dimensional portals that allow travel between parallel universes.",
          readTime: "16 min read",
          date: "January 20, 2027",
          tags: ["Dimensions", "Portals", "Multiverse"]
        },
        {
          title: "Space-Time Manipulation: Controlling the Fabric of Reality",
          excerpt: "How advanced technology allows us to manipulate space-time itself for various applications.",
          readTime: "12 min read",
          date: "January 18, 2027",
          tags: ["Space-Time", "Manipulation", "Physics"]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📚 COMPREHENSIVE INSIGHTS • JANUARY 2027
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              📊 Comprehensive Tech Insights 2027
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Deep dive into the most revolutionary technologies and their impact on our world
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">🔬 Technology Categories</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore insights across different technology domains
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(insights).map(([key, category]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <span className="text-2xl mr-2">{category.icon}</span>
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Active Category Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">
                {insights[activeCategory as keyof typeof insights].title} Insights
              </h3>
              <p className="text-lg opacity-90">
                Latest articles and research in {insights[activeCategory as keyof typeof insights].title.toLowerCase()}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights[activeCategory as keyof typeof insights].articles.map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{insights[activeCategory as keyof typeof insights].icon}</span>
                      <span className="text-sm opacity-70">{article.date}</span>
                    </div>
                    <span className="text-sm opacity-70">{article.readTime}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 line-clamp-2">{article.title}</h4>
                  <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${insights[activeCategory as keyof typeof insights].color} text-white text-xs rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${insights[activeCategory as keyof typeof insights].color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                    Read Full Article →
                  </button>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Featured Research */}
      <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">🔬 Featured Research</h2>
            <p className="text-xl opacity-90">Groundbreaking research that's shaping the future</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "The Consciousness Transfer Protocol",
                description: "A comprehensive study on transferring human consciousness into artificial systems",
                authors: "Dr. Sarah Chen, Dr. Marcus Rodriguez",
                institution: "Zion Tech Research Institute",
                impact: "Revolutionary",
                color: "from-purple-600 to-pink-600"
              },
              {
                title: "Quantum Neural Architecture Design",
                description: "Novel approaches to designing neural networks that operate on quantum principles",
                authors: "Prof. Alex Kim, Dr. Elena Volkov",
                institution: "Advanced Computing Lab",
                impact: "Breakthrough",
                color: "from-cyan-600 to-blue-600"
              }
            ].map((research, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${research.color} text-white text-sm rounded-full`}>
                    {research.impact}
                  </span>
                  <span className="text-sm opacity-70">Research Paper</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{research.title}</h3>
                <p className="text-gray-300 mb-4">{research.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="text-sm">
                    <span className="opacity-70">Authors: </span>
                    <span className="font-semibold">{research.authors}</span>
                  </div>
                  <div className="text-sm">
                    <span className="opacity-70">Institution: </span>
                    <span className="font-semibold">{research.institution}</span>
                  </div>
                </div>
                
                <button className={`w-full bg-gradient-to-r ${research.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}>
                  Read Research Paper →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Trends */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">📈 Technology Trends 2027</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            The most significant trends and predictions for the year ahead
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              trend: "AI Consciousness",
              growth: "+500%",
              description: "Rapid advancement in AI consciousness and self-awareness",
              color: "text-purple-400"
            },
            {
              trend: "Quantum Computing",
              growth: "+300%",
              description: "Mainstream adoption of quantum computing solutions",
              color: "text-cyan-400"
            },
            {
              trend: "Neural Interfaces",
              growth: "+250%",
              description: "Expansion of brain-computer interface technologies",
              color: "text-emerald-400"
            }
          ].map((trend, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
            >
              <div className={`text-4xl font-bold mb-2 ${trend.color}`}>{trend.growth}</div>
              <h3 className="text-xl font-bold mb-3">{trend.trend}</h3>
              <p className="text-gray-300">{trend.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">🚀 Stay Ahead of the Curve</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Subscribe to our insights newsletter and never miss a breakthrough
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Subscribe to Insights
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Download Research
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveTechInsights2027;