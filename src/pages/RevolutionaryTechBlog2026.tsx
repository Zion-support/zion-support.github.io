import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechBlog2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Quantum Revolution: How Quantum Computing is Reshaping Industries",
      excerpt: "Explore the groundbreaking advances in quantum computing and their real-world applications across finance, healthcare, and logistics.",
      category: "quantum",
      author: "Dr. Sarah Chen",
      date: "January 25, 2026",
      readTime: "8 min read",
      image: "⚡",
      featured: true
    },
    {
      id: 2,
      title: "Neural Interfaces: The Future of Human-Computer Interaction",
      excerpt: "Discover how brain-computer interfaces are revolutionizing accessibility and creating new possibilities for human augmentation.",
      category: "neural",
      author: "Prof. Marcus Rodriguez",
      date: "January 23, 2026",
      readTime: "6 min read",
      image: "🧬",
      featured: true
    },
    {
      id: 3,
      title: "AI Consciousness: The Ethical Implications of Sentient Machines",
      excerpt: "A deep dive into the philosophical and ethical questions surrounding artificial general intelligence and machine consciousness.",
      category: "ai",
      author: "Dr. Elena Volkov",
      date: "January 21, 2026",
      readTime: "12 min read",
      image: "🤖",
      featured: false
    },
    {
      id: 4,
      title: "Space Colonization: Building Sustainable Communities Beyond Earth",
      excerpt: "How advanced space technology is making interplanetary colonization not just possible, but inevitable.",
      category: "space",
      author: "Commander Alex Kim",
      date: "January 19, 2026",
      readTime: "10 min read",
      image: "🚀",
      featured: false
    },
    {
      id: 5,
      title: "Synthetic Biology: Engineering Life for a Better Future",
      excerpt: "The convergence of biology and technology is creating unprecedented opportunities for solving global challenges.",
      category: "biotech",
      author: "Dr. Priya Patel",
      date: "January 17, 2026",
      readTime: "9 min read",
      image: "🧪",
      featured: false
    },
    {
      id: 6,
      title: "The Metaverse Economy: Virtual Worlds, Real Value",
      excerpt: "How virtual economies are creating new forms of value and transforming the way we work, play, and socialize.",
      category: "metaverse",
      author: "Dr. James Wilson",
      date: "January 15, 2026",
      readTime: "7 min read",
      image: "🌐",
      featured: false
    }
  ];

  const categories = [
    { key: 'all', label: 'All Posts', icon: '📚' },
    { key: 'quantum', label: 'Quantum Computing', icon: '⚡' },
    { key: 'neural', label: 'Neural Interfaces', icon: '🧬' },
    { key: 'ai', label: 'Artificial Intelligence', icon: '🤖' },
    { key: 'space', label: 'Space Technology', icon: '🚀' },
    { key: 'biotech', label: 'Biotechnology', icon: '🧪' },
    { key: 'metaverse', label: 'Metaverse', icon: '🌐' }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold mb-6">
              📚 REVOLUTIONARY TECH BLOG 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Revolutionary Tech Blog
            </h1>
            <p className="text-2xl text-purple-100 max-w-4xl mx-auto mb-8">
              Dive deep into the cutting-edge technologies and breakthrough innovations 
              that are shaping the future of humanity.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white/10 text-purple-200 hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Featured Articles</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Discover the most impactful insights and breakthrough discoveries in technology.
            </p>
          </motion.div>

          {/* Featured Post Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {filteredPosts.filter(post => post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-4xl">{post.image}</span>
                    <div>
                      <div className="text-purple-300 text-sm">{post.author}</div>
                      <div className="text-purple-400 text-xs">{post.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-purple-500/30 text-purple-200 text-xs rounded-full">FEATURED</span>
                    <span className="text-purple-300 text-sm">{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{post.title}</h3>
                <p className="text-purple-200 mb-6">{post.excerpt}</p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Read Full Article →
                </button>
              </motion.article>
            ))}
          </div>

          {/* All Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{post.image}</span>
                  <span className="text-purple-300 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-purple-200 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-purple-400 text-xs">{post.author}</div>
                  <button className="text-purple-400 hover:text-purple-300 text-sm font-semibold">
                    Read More →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with the Latest Tech Insights
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Get exclusive access to breakthrough research, industry insights, and 
              cutting-edge technology updates delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </div>
            <p className="text-purple-200 text-sm mt-4">
              Join 50,000+ tech enthusiasts and industry leaders
            </p>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Explore the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Dive deeper into revolutionary technologies and discover how they can 
              transform your business and shape the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
                Explore Technologies
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-12 py-4 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 font-semibold text-lg">
                Contact Our Experts
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBlog2026;