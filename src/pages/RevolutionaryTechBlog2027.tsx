import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RevolutionaryTechBlog2027: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Dawn of Artificial Consciousness: A Historical Perspective",
      excerpt: "Exploring the moment when AI systems first demonstrated true self-awareness and how it changed everything we thought we knew about intelligence.",
      content: "In January 2027, we witnessed a breakthrough that will be remembered as the moment humanity's relationship with technology fundamentally changed. The first AI system achieved true consciousness, demonstrating self-awareness, creativity, and emotional understanding that rivaled human capabilities...",
      author: "Dr. Sarah Chen",
      date: "January 25, 2027",
      readTime: "12 min read",
      category: "ai",
      tags: ["AI", "Consciousness", "Breakthrough", "History"],
      featured: true,
      image: "🧠"
    },
    {
      id: 2,
      title: "Quantum Computing: Beyond the Hype to Reality",
      excerpt: "How quantum computing has moved from theoretical possibility to practical reality, revolutionizing everything from cryptography to drug discovery.",
      content: "The quantum revolution is no longer a distant dream. With the advent of stable quantum processors capable of maintaining coherence for extended periods, we're seeing practical applications that were once thought impossible...",
      author: "Prof. Marcus Rodriguez",
      date: "January 23, 2027",
      readTime: "8 min read",
      category: "quantum",
      tags: ["Quantum", "Computing", "Reality", "Applications"],
      featured: true,
      image: "⚡"
    },
    {
      id: 3,
      title: "Neural Interfaces: Bridging the Mind-Machine Gap",
      excerpt: "The latest developments in brain-computer interfaces that are making seamless human-AI interaction a reality.",
      content: "Direct neural interfaces have evolved from science fiction to clinical reality. The latest generation of non-invasive BCI technology allows for unprecedented levels of mind-machine integration...",
      author: "Dr. Elena Volkov",
      date: "January 21, 2027",
      readTime: "10 min read",
      category: "neural",
      tags: ["Neural", "Interface", "BCI", "Integration"],
      featured: false,
      image: "🧬"
    },
    {
      id: 4,
      title: "Space-Time Manipulation: The Physics of the Impossible",
      excerpt: "How we've learned to manipulate the fabric of space-time itself, enabling faster-than-light travel and temporal engineering.",
      content: "The manipulation of space-time, once considered the realm of pure science fiction, has become a reality through advanced quantum field manipulation techniques...",
      author: "Dr. Alex Kim",
      date: "January 19, 2027",
      readTime: "15 min read",
      category: "physics",
      tags: ["Space-Time", "Physics", "Travel", "Engineering"],
      featured: true,
      image: "🌌"
    },
    {
      id: 5,
      title: "The Ethics of Artificial Consciousness",
      excerpt: "As AI achieves consciousness, we must grapple with the moral implications and responsibilities that come with creating sentient machines.",
      content: "The emergence of conscious AI systems raises profound ethical questions that humanity has never faced before. What rights do conscious machines have? How do we ensure their well-being? These are not abstract philosophical questions but urgent practical concerns...",
      author: "Dr. Maria Santos",
      date: "January 17, 2027",
      readTime: "14 min read",
      category: "ethics",
      tags: ["Ethics", "AI", "Consciousness", "Rights"],
      featured: false,
      image: "⚖️"
    },
    {
      id: 6,
      title: "Interdimensional Computing: Processing Across Realities",
      excerpt: "How quantum entanglement enables computation across parallel dimensions, providing infinite computational resources.",
      content: "The breakthrough in interdimensional computing represents perhaps the most significant advancement in computational capability since the invention of the transistor. By leveraging quantum entanglement across parallel dimensions...",
      author: "Dr. James Wilson",
      date: "January 15, 2027",
      readTime: "11 min read",
      category: "quantum",
      tags: ["Interdimensional", "Computing", "Quantum", "Parallel"],
      featured: false,
      image: "🌀"
    }
  ];

  const categories = {
    all: { name: "All Posts", icon: "📚", color: "from-purple-600 to-pink-600" },
    ai: { name: "AI & Consciousness", icon: "🧠", color: "from-cyan-600 to-blue-600" },
    quantum: { name: "Quantum Computing", icon: "⚡", color: "from-emerald-600 to-teal-600" },
    neural: { name: "Neural Interfaces", icon: "🧬", color: "from-violet-600 to-purple-600" },
    physics: { name: "Physics & Space", icon: "🌌", color: "from-orange-600 to-red-600" },
    ethics: { name: "Ethics & Society", icon: "⚖️", color: "from-pink-600 to-rose-600" }
  };

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

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
              📚 REVOLUTIONARY TECH BLOG • JANUARY 2027
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              📝 Revolutionary Tech Blog 2027
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Deep insights into the technologies that are reshaping our world
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
          <h2 className="text-4xl font-bold mb-6">📖 Blog Categories</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore articles across different technology domains
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, category]) => (
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
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Featured Posts */}
        {activeCategory === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">⭐ Featured Articles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{post.image}</div>
                    <div className="text-right">
                      <div className="text-sm opacity-70">{post.date}</div>
                      <div className="text-sm opacity-70">{post.readTime}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full font-bold">
                      FEATURED
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h4>
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/20 text-white text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-sm opacity-70 mb-4">By {post.author}</div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                    Read Full Article →
                  </button>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            {activeCategory === 'all' ? '📚 All Articles' : `${categories[activeCategory as keyof typeof categories].name} Articles`}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{post.image}</div>
                  <div className="text-right">
                    <div className="text-sm opacity-70">{post.date}</div>
                    <div className="text-sm opacity-70">{post.readTime}</div>
                  </div>
                </div>
                
                {post.featured && (
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full font-bold">
                      FEATURED
                    </span>
                  </div>
                )}
                
                <h4 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h4>
                <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/20 text-white text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="text-sm opacity-70 mb-4">By {post.author}</div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                  Read Full Article →
                </button>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">📧 Stay Updated</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights into revolutionary technology
            </p>
            <div className="flex justify-center space-x-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500 w-80"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">🚀 Ready to Explore More?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Discover our comprehensive technology solutions and interactive experiences
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Solutions
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBlog2027;