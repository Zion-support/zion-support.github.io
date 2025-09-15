import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechBlog2026: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The AI Revolution: How Next-Gen Artificial Intelligence is Reshaping Industries",
      excerpt: "Discover how advanced AI systems are transforming every sector from healthcare to finance, creating unprecedented opportunities for innovation and growth.",
      author: "Dr. Sarah Chen",
      date: "January 25, 2026",
      readTime: "8 min read",
      category: "AI & Machine Learning",
      image: "🧠",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough: Solving Impossible Problems in Real-Time",
      excerpt: "Explore the latest quantum computing advances that are making previously impossible calculations achievable in seconds rather than years.",
      author: "Prof. Michael Rodriguez",
      date: "January 22, 2026",
      readTime: "12 min read",
      category: "Quantum Computing",
      image: "⚛️",
      featured: false
    },
    {
      id: 3,
      title: "Neural Interface Technology: Bridging Mind and Machine",
      excerpt: "Learn about the revolutionary neural interface technologies that are enabling direct brain-computer communication and enhancing human capabilities.",
      author: "Dr. Elena Vasquez",
      date: "January 20, 2026",
      readTime: "10 min read",
      category: "Neural Interfaces",
      image: "🧬",
      featured: false
    },
    {
      id: 4,
      title: "The Future of Autonomous Systems: Beyond Human Limitations",
      excerpt: "Dive into the world of fully autonomous systems that can operate independently, making decisions and adapting to complex environments.",
      author: "Alex Thompson",
      date: "January 18, 2026",
      readTime: "7 min read",
      category: "Autonomous Systems",
      image: "🤖",
      featured: false
    },
    {
      id: 5,
      title: "Biotech Revolution: Engineering Life for a Better Tomorrow",
      excerpt: "Discover how biotechnology is revolutionizing medicine, agriculture, and environmental solutions through genetic engineering and synthetic biology.",
      author: "Dr. James Liu",
      date: "January 15, 2026",
      readTime: "9 min read",
      category: "Biotechnology",
      image: "🧪",
      featured: false
    },
    {
      id: 6,
      title: "Space Technology Innovation: Expanding Human Horizons",
      excerpt: "Explore the cutting-edge space technologies that are making interplanetary travel and space colonization a reality.",
      author: "Commander Sarah Johnson",
      date: "January 12, 2026",
      readTime: "11 min read",
      category: "Space Technology",
      image: "🚀",
      featured: false
    }
  ];

  const categories = [
    "All Posts",
    "AI & Machine Learning",
    "Quantum Computing",
    "Neural Interfaces",
    "Autonomous Systems",
    "Biotechnology",
    "Space Technology"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📝 REVOLUTIONARY TECH BLOG • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionary Tech Blog 2026
            </h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
              Stay ahead of the curve with cutting-edge insights, breakthrough technologies, 
              and expert analysis from the forefront of innovation.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Latest Posts
              </button>
              <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                Subscribe to Updates
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                category === "All Posts"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${
                post.featured
                  ? 'from-blue-600/30 to-purple-600/30 md:col-span-2 lg:col-span-1'
                  : 'from-gray-800/50 to-gray-700/50'
              } backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:scale-105 transition-all duration-300`}
            >
              <div className="text-6xl mb-4 text-center">{post.image}</div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-blue-300">{post.category}</span>
                {post.featured && (
                  <span className="text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full">
                    FEATURED
                  </span>
                )}
              </div>
              <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
              <p className="text-gray-300 mb-6">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">{post.readTime}</span>
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Stay Updated with Latest Tech Trends</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get the latest insights, breakthroughs, and trends delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
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