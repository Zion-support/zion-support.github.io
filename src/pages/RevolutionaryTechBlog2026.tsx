import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const RevolutionaryTechBlog2026: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Dawn of Synthetic Intelligence: Beyond Human Consciousness",
      excerpt: "Exploring how synthetic intelligence is transcending human limitations and creating new forms of consciousness that could reshape our understanding of existence itself.",
      author: "Dr. Sarah Chen",
      date: "January 15, 2026",
      readTime: "8 min read",
      category: "AI Revolution",
      image: "🧠",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Neural Networks: The Next Frontier of Computing",
      excerpt: "Discover how quantum neural networks are revolutionizing machine learning and opening new possibilities for solving complex problems that were previously impossible.",
      author: "Prof. Michael Rodriguez",
      date: "January 12, 2026",
      readTime: "6 min read",
      category: "Quantum Computing",
      image: "⚛️",
      featured: true
    },
    {
      id: 3,
      title: "Synthetic Biology: Engineering Life for the Future",
      excerpt: "How synthetic biology is creating new forms of life and revolutionizing medicine, agriculture, and environmental solutions.",
      author: "Dr. Elena Volkov",
      date: "January 10, 2026",
      readTime: "7 min read",
      category: "Biotechnology",
      image: "🧬",
      featured: false
    },
    {
      id: 4,
      title: "Space-Time Manipulation: The Physics of Tomorrow",
      excerpt: "Exploring the theoretical and practical applications of space-time manipulation technologies that could change everything we know about physics.",
      author: "Dr. James Park",
      date: "January 8, 2026",
      readTime: "9 min read",
      category: "Physics",
      image: "🌌",
      featured: false
    },
    {
      id: 5,
      title: "Neural Interface Revolution: Merging Mind and Machine",
      excerpt: "The latest breakthroughs in neural interfaces that are creating seamless connections between human consciousness and artificial systems.",
      author: "Dr. Maria Santos",
      date: "January 5, 2026",
      readTime: "5 min read",
      category: "Neural Technology",
      image: "🔗",
      featured: false
    },
    {
      id: 6,
      title: "Transdimensional AI: Computing Across Dimensions",
      excerpt: "How transdimensional AI systems are processing information across multiple dimensions, achieving unprecedented computational power.",
      author: "Dr. Alex Thompson",
      date: "January 3, 2026",
      readTime: "6 min read",
      category: "Advanced AI",
      image: "🌀",
      featured: false
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'AI Revolution', 'Quantum Computing', 'Biotechnology', 'Physics', 'Neural Technology', 'Advanced AI'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      <Helmet>
        <title>Revolutionary Tech Blog 2026 | Zion Tech Group</title>
        <meta name="description" content="Stay ahead of the curve with cutting-edge insights, breakthrough technologies, and expert analysis from the forefront of innovation." />
        <meta name="keywords" content="Tech Blog 2026, Revolutionary Technology, AI Insights, Quantum Computing, Synthetic Intelligence, Future Tech" />
        <meta property="og:title" content="Revolutionary Tech Blog 2026 | Zion Tech Group" />
        <meta property="og:description" content="Cutting-edge technology insights and breakthrough analysis for 2026" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Revolutionary Tech Blog 2026" />
        <meta name="twitter:description" content="Revolutionary technology insights for 2026" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-black rounded-full text-lg font-bold mb-6">
              🚀 REVOLUTIONARY TECH BLOG 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-cyan-300 to-pink-300 bg-clip-text text-transparent">
              The Future is Now
            </h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
              Stay ahead of the curve with cutting-edge insights, breakthrough technologies, 
              and expert analysis from the forefront of innovation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-black font-semibold'
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {filteredPosts.filter(post => post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{post.image}</span>
                  <div>
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 text-black text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-4">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <button className="text-purple-400 hover:text-purple-300 font-semibold">
                    Read More →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* All Articles */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{post.image}</span>
                    <span className="px-2 py-1 bg-white/20 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter and never miss the latest revolutionary technology insights and breakthroughs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBlog2026;