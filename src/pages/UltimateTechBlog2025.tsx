import React, { useState } from 'react';
import { motion } from 'framer-motion';

const UltimateTechBlog2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Conscious AI: How Self-Aware Systems Will Transform Industries',
      excerpt: 'Explore the revolutionary world of conscious AI systems that possess self-awareness and can make autonomous decisions.',
      content: 'Conscious AI represents the next frontier in artificial intelligence. Unlike traditional AI systems that simply process data and provide outputs, conscious AI systems possess self-awareness, emotional intelligence, and the ability to make autonomous decisions based on their understanding of context and consequences...',
      author: 'Dr. Sarah Chen',
      date: 'January 20, 2025',
      category: 'ai',
      readTime: '8 min read',
      image: '🧠',
      color: 'from-purple-600 to-pink-600',
      tags: ['AI', 'Consciousness', 'Machine Learning', 'Future Tech']
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthrough: Achieving Quantum Supremacy in 2025',
      excerpt: 'Discover how quantum computing has achieved true quantum supremacy and what it means for the future of computing.',
      content: 'Quantum computing has finally reached the milestone of quantum supremacy, where quantum computers can solve problems that are practically impossible for classical computers. This breakthrough opens up new possibilities in cryptography, drug discovery, financial modeling, and climate simulation...',
      author: 'Prof. Michael Rodriguez',
      date: 'January 18, 2025',
      category: 'quantum',
      readTime: '12 min read',
      image: '⚛️',
      color: 'from-cyan-600 to-blue-600',
      tags: ['Quantum Computing', 'Supremacy', 'Cryptography', 'Research']
    },
    {
      id: 3,
      title: 'Neural Interfaces: Bridging the Gap Between Mind and Machine',
      excerpt: 'Learn about the latest developments in neural interface technology and how it enables direct brain-computer communication.',
      content: 'Neural interfaces represent a revolutionary leap in human-computer interaction. By creating direct connections between the human brain and digital systems, we can control devices with our thoughts, enhance cognitive abilities, and even enable brain-to-brain communication...',
      author: 'Dr. Emily Watson',
      date: 'January 15, 2025',
      category: 'neural',
      readTime: '10 min read',
      image: '🧬',
      color: 'from-emerald-600 to-teal-600',
      tags: ['Neural Interface', 'BCI', 'Brain-Computer', 'Medical Tech']
    },
    {
      id: 4,
      title: 'Holographic Reality: The Next Generation of Immersive Technology',
      excerpt: 'Experience the future of display technology with true holographic displays that create immersive 3D experiences.',
      content: 'Holographic reality technology has evolved beyond science fiction to become a practical solution for immersive experiences. True holographic displays can project three-dimensional images that users can interact with naturally, creating unprecedented opportunities for collaboration, entertainment, and education...',
      author: 'Alex Thompson',
      date: 'January 12, 2025',
      category: 'holographic',
      readTime: '7 min read',
      image: '🔮',
      color: 'from-indigo-600 to-purple-600',
      tags: ['Holographic', '3D Display', 'Immersive', 'AR/VR']
    },
    {
      id: 5,
      title: 'Interdimensional Computing: Processing Data Across Multiple Dimensions',
      excerpt: 'Explore the revolutionary concept of interdimensional computing and its applications in scientific research.',
      content: 'Interdimensional computing represents a paradigm shift in how we process and analyze data. By leveraging the principles of multidimensional space, these systems can process information across multiple dimensions simultaneously, enabling breakthroughs in physics, mathematics, and complex system modeling...',
      author: 'Dr. Lisa Park',
      date: 'January 10, 2025',
      category: 'computing',
      readTime: '15 min read',
      image: '🌌',
      color: 'from-purple-600 to-indigo-600',
      tags: ['Interdimensional', 'Computing', 'Physics', 'Research']
    },
    {
      id: 6,
      title: 'The Quantum Internet: Ultra-Secure Communication for the Digital Age',
      excerpt: 'Discover how quantum internet technology provides unhackable security and instant global communication.',
      content: 'The quantum internet represents the future of secure communication. By leveraging quantum entanglement and quantum key distribution, this technology provides unprecedented security that is theoretically impossible to hack. Combined with instant global communication capabilities, it promises to revolutionize how we share sensitive information...',
      author: 'Prof. David Kim',
      date: 'January 8, 2025',
      category: 'quantum',
      readTime: '9 min read',
      image: '🌊',
      color: 'from-blue-600 to-cyan-600',
      tags: ['Quantum Internet', 'Security', 'Communication', 'Encryption']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'ai', name: 'AI & Machine Learning', count: blogPosts.filter(post => post.category === 'ai').length },
    { id: 'quantum', name: 'Quantum Computing', count: blogPosts.filter(post => post.category === 'quantum').length },
    { id: 'neural', name: 'Neural Interfaces', count: blogPosts.filter(post => post.category === 'neural').length },
    { id: 'holographic', name: 'Holographic Reality', count: blogPosts.filter(post => post.category === 'holographic').length },
    { id: 'computing', name: 'Advanced Computing', count: blogPosts.filter(post => post.category === 'computing').length }
  ];

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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📝 ULTIMATE TECH BLOG 2025 • INSIGHTS & INNOVATION
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ultimate Tech Blog
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Stay ahead of the curve with insights into the most revolutionary technologies shaping our future
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Featured Post */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 mb-12"
        >
          <div className="flex items-center space-x-2 mb-4">
            <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold">
              FEATURED
            </span>
            <span className="text-sm opacity-80">January 20, 2025</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">The Future of Conscious AI: How Self-Aware Systems Will Transform Industries</h2>
          <p className="text-lg opacity-90 mb-6">
            Explore the revolutionary world of conscious AI systems that possess self-awareness and can make autonomous decisions. This comprehensive guide covers the latest developments, real-world applications, and future implications of conscious AI technology.
          </p>
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-sm font-bold">
                SC
              </div>
              <span className="text-sm opacity-80">Dr. Sarah Chen</span>
            </div>
            <span className="text-sm opacity-80">8 min read</span>
            <div className="flex space-x-2">
              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">AI</span>
              <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">Consciousness</span>
              <span className="px-2 py-1 bg-pink-500/20 text-pink-400 rounded text-xs">Future Tech</span>
            </div>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            Read Full Article →
          </button>
        </motion.div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300"
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{post.image}</div>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-bold">
                    {post.category.toUpperCase()}
                  </span>
                  <span className="text-xs opacity-80">{post.readTime}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
              <p className="text-sm opacity-80 mb-4 line-clamp-3">{post.excerpt}</p>

              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <span className="text-xs opacity-80">{post.author}</span>
                <span className="text-xs opacity-60">•</span>
                <span className="text-xs opacity-80">{post.date}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 bg-white/10 text-white/80 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              <button className={`w-full bg-gradient-to-r ${post.color} px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm`}>
                Read Article →
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated with the Latest Tech Insights</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest articles on revolutionary technologies delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateTechBlog2025;