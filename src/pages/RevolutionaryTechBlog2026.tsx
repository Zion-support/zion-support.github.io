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
      excerpt: "Explore the latest quantum computing advances that are enabling solutions to problems previously thought impossible, from drug discovery to climate modeling.",
      author: "Prof. Michael Rodriguez",
      date: "January 23, 2026",
      readTime: "12 min read",
      category: "Quantum Computing",
      image: "⚡",
      featured: true
    },
    {
      id: 3,
      title: "Neural Interfaces: The Future of Human-Computer Interaction",
      excerpt: "Learn about the revolutionary neural interface technology that's enabling direct brain-computer communication and transforming how we interact with digital systems.",
      author: "Dr. Elena Volkov",
      date: "January 21, 2026",
      readTime: "10 min read",
      category: "Neural Technology",
      image: "🧬",
      featured: false
    },
    {
      id: 4,
      title: "Edge AI and IoT: Bringing Intelligence to Every Device",
      excerpt: "Understand how edge AI is revolutionizing IoT by bringing powerful AI capabilities directly to devices, enabling real-time processing and decision-making.",
      author: "Alex Thompson",
      date: "January 19, 2026",
      readTime: "7 min read",
      category: "Edge Computing",
      image: "🌐",
      featured: false
    },
    {
      id: 5,
      title: "Blockchain 3.0: The Next Evolution of Decentralized Technology",
      excerpt: "Explore the latest developments in blockchain technology that are enabling new forms of decentralized applications and digital economies.",
      author: "Maria Santos",
      date: "January 17, 2026",
      readTime: "9 min read",
      category: "Blockchain",
      image: "🔗",
      featured: false
    },
    {
      id: 6,
      title: "Cybersecurity in the Age of AI: Protecting Against Intelligent Threats",
      excerpt: "Learn about the evolving cybersecurity landscape and how AI-powered defense systems are protecting against increasingly sophisticated cyber threats.",
      author: "James Wilson",
      date: "January 15, 2026",
      readTime: "11 min read",
      category: "Cybersecurity",
      image: "🛡️",
      featured: false
    }
  ];

  const categories = [
    "All Posts",
    "AI & Machine Learning", 
    "Quantum Computing",
    "Neural Technology",
    "Edge Computing",
    "Blockchain",
    "Cybersecurity"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📚 REVOLUTIONARY TECH BLOG • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technology Insights & Innovation
            </h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
              Stay ahead of the curve with cutting-edge insights, breakthrough technologies, 
              and expert analysis from the forefront of innovation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                index === 0 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Posts */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">🌟 Featured Articles</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">{post.image}</div>
                <div>
                  <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
              <p className="text-purple-100 mb-6">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-purple-200">
                <div>
                  <span className="font-semibold">{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
                <span>{post.readTime}</span>
              </div>
              <button className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Read More →
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* All Posts Grid */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">📖 All Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">{post.image}</div>
                <span className="px-3 py-1 bg-blue-500/30 rounded-full text-xs font-semibold">
                  {post.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{post.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <div>
                  <span className="font-semibold">{post.author}</span>
                  <span className="mx-1">•</span>
                  <span>{post.date}</span>
                </div>
                <span>{post.readTime}</span>
              </div>
              <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
                Read Article →
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 py-20 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Stay Updated with Latest Tech Insights</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get the latest articles, insights, and breakthrough technologies delivered 
              directly to your inbox. Join thousands of tech enthusiasts and professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Don't just read about the future – be part of it. Let our revolutionary 
            technologies transform your business and unlock unprecedented possibilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Transformation
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBlog2026;