import React from 'react';
import { motion } from 'framer-motion';

const ComprehensiveTechBlog2026: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI Consciousness: Beyond Human Intelligence",
      excerpt: "Exploring how artificial intelligence is evolving beyond human cognitive capabilities and what this means for the future of humanity.",
      author: "Dr. Sarah Chen",
      date: "January 25, 2026",
      category: "AI Research",
      readTime: "8 min read",
      image: "🧠",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough: Solving Impossible Problems",
      excerpt: "Our latest quantum computing research has achieved a major milestone in solving problems that were previously impossible for classical computers.",
      author: "Prof. Michael Rodriguez",
      date: "January 23, 2026",
      category: "Quantum Computing",
      readTime: "6 min read",
      image: "⚡",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interfaces: Bridging the Gap Between Mind and Machine",
      excerpt: "Revolutionary advances in brain-computer interfaces are enabling direct communication between human minds and digital systems.",
      author: "Dr. Emily Watson",
      date: "January 21, 2026",
      category: "Neural Technology",
      readTime: "7 min read",
      image: "🧬",
      featured: false
    },
    {
      id: 4,
      title: "Space Colonization: The Next Frontier of Human Expansion",
      excerpt: "How advanced space technology is making interplanetary colonization not just possible, but inevitable within our lifetime.",
      author: "Commander James Park",
      date: "January 19, 2026",
      category: "Space Technology",
      readTime: "9 min read",
      image: "🚀",
      featured: false
    },
    {
      id: 5,
      title: "Biotechnology Revolution: Enhancing Human Capabilities",
      excerpt: "Breakthrough discoveries in biotechnology are opening new possibilities for human enhancement and longevity.",
      author: "Dr. Lisa Thompson",
      date: "January 17, 2026",
      category: "Biotechnology",
      readTime: "5 min read",
      image: "🧬",
      featured: false
    },
    {
      id: 6,
      title: "Cybersecurity in the Age of Quantum Computing",
      excerpt: "How quantum computing is revolutionizing cybersecurity and what organizations need to know to stay protected.",
      author: "Alex Chen",
      date: "January 15, 2026",
      category: "Cybersecurity",
      readTime: "6 min read",
      image: "🛡️",
      featured: false
    }
  ];

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
              📚 COMPREHENSIVE TECH BLOG 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Comprehensive Tech Blog 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Stay updated with the latest insights, breakthroughs, and innovations in cutting-edge technology
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl">
                📖 Read Latest Posts →
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-bold text-xl">
                🔔 Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">🌟 Featured Articles</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover our most popular and impactful technology insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/20 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">{post.image}</div>
                <div>
                  <span className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
              <p className="text-gray-300 mb-6">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <span>By {post.author}</span>
                <span>{post.date}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{post.readTime}</span>
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">📚 All Articles</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our complete collection of technology insights and research
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-gradient-to-br from-gray-800/30 to-blue-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-600/20 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">{post.image}</div>
                <div>
                  <span className="px-2 py-1 bg-purple-500/30 text-purple-200 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{post.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                <span>By {post.author}</span>
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{post.date}</span>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
                  Read →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-2xl p-12 text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">📧 Stay Updated</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter and never miss the latest technology insights and breakthroughs
          </p>
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Join Our Tech Community</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Connect with like-minded innovators and stay at the forefront of technological advancement
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-12 py-5 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-xl">
              🌟 Join Community →
            </button>
            <button className="border-2 border-white text-white px-12 py-5 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-bold text-xl">
              📧 Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveTechBlog2026;