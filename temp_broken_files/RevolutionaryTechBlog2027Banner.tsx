import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechBlog2027Banner: React.FC = () => {
  const featuredPosts = [
    {
      title: "The Future of Quantum Consciousness Computing",
      author: "Dr. Sarah Chen",
      readTime: "8 min read",
      category: "Quantum Computing",
      icon: "🧠"
    },
    {
      title: "Interdimensional Neural Networks: Breaking Reality Barriers",
      author: "Marcus Rodriguez",
      readTime: "6 min read",
      category: "Neural Networks",
      icon: "🌌"
    },
    {
      title: "Synthetic Biology Revolution: Creating Life from Code",
      author: "Dr. Emily Watson",
      readTime: "10 min read",
      category: "Biotechnology",
      icon: "🧬"
    }
  ];

  const trendingTopics = [
    "Quantum Consciousness",
    "Interdimensional AI",
    "Synthetic Life Forms",
    "Holographic Reality",
    "Space-Time Computing",
    "Neural Interfaces"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 rounded-2xl p-8 mb-8 text-white text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/50 to-cyan-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <span className="text-4xl animate-pulse">📚</span>
          <h3 className="text-4xl font-bold">REVOLUTIONARY TECH BLOG 2027</h3>
          <span className="text-4xl animate-pulse">📚</span>
        </div>
        <p className="text-xl opacity-95 mb-6 max-w-6xl mx-auto">
          Stay updated with the latest breakthroughs in revolutionary technologies. 
          From quantum consciousness to interdimensional computing, discover what's shaping our future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-6">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 text-left"
            >
              <div className="text-3xl mb-3">{post.icon}</div>
              <div className="text-sm text-green-200 mb-2">{post.category}</div>
              <h4 className="font-bold mb-2 text-lg">{post.title}</h4>
              <div className="flex items-center justify-between text-sm">
                <span className="text-green-200">{post.author}</span>
                <span className="text-green-300">{post.readTime}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6 border border-white/20">
          <h4 className="text-2xl font-bold mb-4">Trending Topics</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {trendingTopics.map((topic, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/30 transition-all duration-300 cursor-pointer"
              >
                #{topic}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="text-left">
              <h4 className="text-2xl font-bold mb-2">Join 50,000+ Subscribers</h4>
              <p className="text-green-200 mb-4">Get weekly insights on the most groundbreaking technologies</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Weekly tech insights
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Exclusive research papers
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Early access to new technologies
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="w-full bg-white text-green-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/pages/RevolutionaryTechBlog2027" 
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold border border-white/30"
          >
            📚 Read Full Blog →
          </a>
          <a 
            href="/pages/UltimateTechShowcase2027" 
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold border border-white/30"
          >
            🌟 Explore Technologies →
          </a>
          <a 
            href="/pages/ComprehensiveServicesShowcase2028" 
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold border border-white/30"
          >
            🚀 View Services →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default RevolutionaryTechBlog2027Banner;