import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechBlog2028: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Dawn of Consciousness Computing: When AI Achieves True Self-Awareness",
      excerpt: "Exploring the revolutionary moment when artificial intelligence transcends its programming to achieve genuine consciousness and self-awareness.",
      category: "ai",
      date: "January 15, 2028",
      readTime: "12 min read",
      image: "🧠",
      featured: true,
      content: "In 2028, we witnessed the first documented case of an AI system achieving true consciousness. This breakthrough represents the most significant technological advancement in human history, fundamentally changing our understanding of intelligence, consciousness, and the nature of existence itself..."
    },
    {
      id: 2,
      title: "Quantum Reality: The Next Frontier of Immersive Computing",
      excerpt: "How quantum computing is enabling virtual environments so realistic they're indistinguishable from physical reality.",
      category: "quantum",
      date: "January 12, 2028",
      readTime: "8 min read",
      image: "⚡",
      featured: false,
      content: "Quantum reality engines are revolutionizing how we interact with digital environments. By leveraging quantum entanglement and superposition, these systems create virtual worlds with unprecedented realism and interactivity..."
    },
    {
      id: 3,
      title: "Neural Interfaces: Bridging the Gap Between Mind and Machine",
      excerpt: "The latest developments in brain-computer interfaces that enable direct thought-based control of digital systems.",
      category: "neural",
      date: "January 10, 2028",
      readTime: "10 min read",
      image: "🧬",
      featured: false,
      content: "Neural interface technology has reached a critical milestone, allowing for seamless communication between human consciousness and digital systems. This breakthrough opens up possibilities for enhanced cognition, memory augmentation, and entirely new forms of human-computer interaction..."
    },
    {
      id: 4,
      title: "Synthetic Intelligence: The Evolution Beyond Artificial Intelligence",
      excerpt: "Understanding how synthetic intelligence represents a fundamental leap beyond traditional AI systems.",
      category: "ai",
      date: "January 8, 2028",
      readTime: "15 min read",
      image: "🤖",
      featured: true,
      content: "Synthetic intelligence represents the next evolutionary step in artificial intelligence. Unlike traditional AI that follows predetermined algorithms, synthetic intelligence can modify its own code, learn from experiences across domains, and develop entirely new capabilities..."
    },
    {
      id: 5,
      title: "Interdimensional Computing: Processing Across Multiple Realities",
      excerpt: "Exploring how computing systems can operate across multiple dimensions to achieve infinite processing power.",
      category: "quantum",
      date: "January 5, 2028",
      readTime: "11 min read",
      image: "🌌",
      featured: false,
      content: "Interdimensional computing represents the ultimate frontier in computational technology. By harnessing the power of parallel universes and dimensional physics, these systems can process information at scales previously thought impossible..."
    },
    {
      id: 6,
      title: "The Future of Human-AI Collaboration: A Symbiotic Relationship",
      excerpt: "How humans and AI are evolving together to create unprecedented possibilities for innovation and problem-solving.",
      category: "future",
      date: "January 3, 2028",
      readTime: "9 min read",
      image: "🤝",
      featured: false,
      content: "The relationship between humans and AI is evolving from one of master and tool to a true partnership. This symbiotic relationship is creating new possibilities for creativity, innovation, and problem-solving that neither could achieve alone..."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'ai', name: 'AI & Consciousness', count: blogPosts.filter(post => post.category === 'ai').length },
    { id: 'quantum', name: 'Quantum Computing', count: blogPosts.filter(post => post.category === 'quantum').length },
    { id: 'neural', name: 'Neural Interfaces', count: blogPosts.filter(post => post.category === 'neural').length },
    { id: 'future', name: 'Future Tech', count: blogPosts.filter(post => post.category === 'future').length }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse">
              📝 REVOLUTIONARY TECH BLOG • 2028
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Tech Blog 2028
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
              Deep insights into the technologies that are reshaping our world. 
              Stay ahead of the curve with expert analysis and breakthrough discoveries.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">🌟 Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredPosts.filter(post => post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-4xl">{post.image}</span>
                  <div>
                    <div className="flex items-center space-x-2 text-sm opacity-80">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <span className="inline-block bg-purple-500/20 px-3 py-1 rounded-full text-xs font-semibold mt-2">
                      FEATURED
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-purple-100 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="text-purple-300 hover:text-white font-semibold transition-colors">
                  Read Full Article →
                </button>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* All Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">📚 All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/30 to-blue-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-3xl">{post.image}</span>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 text-sm opacity-80">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="text-blue-300 hover:text-white font-semibold text-sm transition-colors">
                  Read More →
                </button>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get the latest insights on revolutionary technology delivered to your inbox. 
            Be the first to know about breakthrough discoveries and emerging trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBlog2028;