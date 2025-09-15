import React from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechBlog2026: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI: Beyond Human Intelligence",
      excerpt: "Exploring how artificial intelligence is evolving beyond human cognitive capabilities and what this means for society.",
      author: "Dr. Sarah Chen",
      date: "January 25, 2026",
      category: "Artificial Intelligence",
      readTime: "8 min read",
      image: "🧠",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing: Breaking the Speed Barrier",
      excerpt: "How quantum computers are solving problems that would take classical computers millions of years in mere seconds.",
      author: "Prof. Michael Rodriguez",
      date: "January 23, 2026",
      category: "Quantum Computing",
      readTime: "6 min read",
      image: "⚡",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interfaces: The Next Frontier of Human Enhancement",
      excerpt: "Direct brain-computer interfaces are no longer science fiction. Discover how they're changing what it means to be human.",
      author: "Dr. Elena Volkov",
      date: "January 21, 2026",
      category: "Neural Technology",
      readTime: "7 min read",
      image: "🧬",
      featured: true
    },
    {
      id: 4,
      title: "Synthetic Intelligence: Creating Minds from Scratch",
      excerpt: "The emergence of synthetic intelligence that surpasses human capabilities in creativity, reasoning, and problem-solving.",
      author: "Dr. James Park",
      date: "January 19, 2026",
      category: "Synthetic Intelligence",
      readTime: "9 min read",
      image: "🤖",
      featured: false
    },
    {
      id: 5,
      title: "Edge AI: Computing at the Speed of Thought",
      excerpt: "How edge AI is bringing intelligence to every device, enabling real-time decision making and autonomous operation.",
      author: "Dr. Maria Santos",
      date: "January 17, 2026",
      category: "Edge Computing",
      readTime: "5 min read",
      image: "🌐",
      featured: false
    },
    {
      id: 6,
      title: "The Metaverse Revolution: Beyond Virtual Reality",
      excerpt: "Exploring the next generation of virtual worlds where physical and digital realities seamlessly merge.",
      author: "Dr. Alex Thompson",
      date: "January 15, 2026",
      category: "Metaverse",
      readTime: "6 min read",
      image: "🌌",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📚 REVOLUTIONARY INSIGHTS • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Revolutionary Tech Blog 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Dive deep into the cutting-edge technologies that are reshaping our world. 
              Expert insights, breakthrough discoveries, and the future of innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Articles
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Subscribe to Updates
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Articles */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">🌟 Featured Articles</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most groundbreaking insights and analysis from our team of expert researchers and technologists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{post.image}</div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
                <span className="text-gray-400 text-sm">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 hover:text-purple-300 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
              <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Read More →
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* All Articles */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">📖 All Articles</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete collection of technology insights, research findings, and expert analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{post.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 hover:text-purple-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">🏷️ Explore by Category</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find articles tailored to your interests across different technology domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Artificial Intelligence", icon: "🧠", count: "24 articles", color: "from-purple-600 to-pink-600" },
            { name: "Quantum Computing", icon: "⚡", count: "18 articles", color: "from-cyan-600 to-blue-600" },
            { name: "Neural Technology", icon: "🧬", count: "15 articles", color: "from-emerald-600 to-teal-600" },
            { name: "Edge Computing", icon: "🌐", count: "12 articles", color: "from-orange-600 to-red-600" },
            { name: "Synthetic Intelligence", icon: "🤖", count: "9 articles", color: "from-violet-600 to-purple-600" },
            { name: "Metaverse", icon: "🌌", count: "7 articles", color: "from-rose-600 to-pink-600" },
            { name: "Blockchain", icon: "⛓️", count: "11 articles", color: "from-indigo-600 to-purple-600" },
            { name: "Cybersecurity", icon: "🛡️", count: "13 articles", color: "from-green-600 to-emerald-600" }
          ].map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-r ${category.color} p-6 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              <div className="text-3xl mb-3">{category.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
              <p className="text-white/80 text-sm">{category.count}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Ahead of the Tech Curve
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Get the latest insights, breakthrough discoveries, and expert analysis delivered 
            directly to your inbox. Join thousands of tech enthusiasts and professionals.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </div>
            <p className="text-purple-200 text-sm mt-3">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Dive Deeper?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive library of technology insights, research papers, 
            and expert analysis to stay informed about the latest breakthroughs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Browse All Articles
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Download Research Papers
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Join Expert Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBlog2026;