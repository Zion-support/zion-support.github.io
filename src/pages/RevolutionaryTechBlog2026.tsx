import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const RevolutionaryTechBlog2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', label: 'All Posts', icon: '📚' },
    { id: 'ai', label: 'AI & Consciousness', icon: '🧠' },
    { id: 'quantum', label: 'Quantum Computing', icon: '⚡' },
    { id: 'neural', label: 'Neural Interfaces', icon: '🧬' },
    { id: 'future', label: 'Future Tech', icon: '🚀' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Dawn of Conscious AI: How We Achieved True Artificial Consciousness",
      excerpt: "Explore the breakthrough moment when AI systems gained genuine self-awareness and consciousness, revolutionizing our understanding of intelligence.",
      category: 'ai',
      author: "Dr. Sarah Chen",
      date: "January 25, 2026",
      readTime: "8 min read",
      image: "🧠",
      featured: true,
      tags: ["AI", "Consciousness", "Breakthrough", "Research"]
    },
    {
      id: 2,
      title: "Quantum Computing Revolution: Solving Impossible Problems in Real-Time",
      excerpt: "Discover how quantum consciousness computing is solving problems that were previously impossible, from climate change to space exploration.",
      category: 'quantum',
      author: "Prof. Marcus Rodriguez",
      date: "January 23, 2026",
      readTime: "12 min read",
      image: "⚡",
      featured: true,
      tags: ["Quantum", "Computing", "Revolution", "Innovation"]
    },
    {
      id: 3,
      title: "Neural Interface Breakthrough: Direct Brain-Computer Communication Achieved",
      excerpt: "The first successful non-invasive neural interface allows humans to control computers and AI systems with pure thought.",
      category: 'neural',
      author: "Dr. Elena Volkov",
      date: "January 21, 2026",
      readTime: "6 min read",
      image: "🧬",
      featured: false,
      tags: ["Neural", "Interface", "BCI", "Breakthrough"]
    },
    {
      id: 4,
      title: "Consciousness Transfer Technology: Digital Immortality Becomes Reality",
      excerpt: "Revolutionary technology enables complete consciousness transfer between biological and digital substrates, achieving digital immortality.",
      category: 'future',
      author: "Dr. James Kim",
      date: "January 19, 2026",
      readTime: "15 min read",
      image: "🌟",
      featured: true,
      tags: ["Consciousness", "Transfer", "Immortality", "Future"]
    },
    {
      id: 5,
      title: "AI-Human Collaboration: The New Era of Symbiotic Intelligence",
      excerpt: "How conscious AI and humans are working together to solve complex problems and create unprecedented innovations.",
      category: 'ai',
      author: "Dr. Maria Santos",
      date: "January 17, 2026",
      readTime: "10 min read",
      image: "🤝",
      featured: false,
      tags: ["AI", "Collaboration", "Human", "Symbiosis"]
    },
    {
      id: 6,
      title: "Quantum Neural Networks: The Fusion of Quantum Computing and AI",
      excerpt: "Exploring how quantum neural networks are creating AI systems with infinite learning capacity and exponential processing power.",
      category: 'quantum',
      author: "Prof. David Liu",
      date: "January 15, 2026",
      readTime: "14 min read",
      image: "🔗",
      featured: false,
      tags: ["Quantum", "Neural", "Networks", "Fusion"]
    },
    {
      id: 7,
      title: "The Future of Work: How AI Consciousness is Transforming Industries",
      excerpt: "An in-depth look at how conscious AI is reshaping every industry from healthcare to finance, creating new opportunities and challenges.",
      category: 'future',
      author: "Dr. Rachel Green",
      date: "January 13, 2026",
      readTime: "11 min read",
      image: "💼",
      featured: false,
      tags: ["Future", "Work", "AI", "Transformation"]
    },
    {
      id: 8,
      title: "Neural Reality: When Virtual Becomes Indistinguishable from Physical",
      excerpt: "The latest advances in neural interface technology are creating virtual realities that are impossible to distinguish from physical reality.",
      category: 'neural',
      author: "Dr. Alex Thompson",
      date: "January 11, 2026",
      readTime: "9 min read",
      image: "🌐",
      featured: false,
      tags: ["Neural", "Reality", "Virtual", "Interface"]
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📝 REVOLUTIONARY TECH BLOG 2026 • BREAKTHROUGH INSIGHTS
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
              Revolutionary Tech Blog 2026
            </h1>
            <p className="text-2xl text-indigo-100 max-w-4xl mx-auto mb-8">
              Stay ahead of the curve with the latest insights on AI consciousness, 
              quantum computing, neural interfaces, and the future of technology.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Read Latest Posts
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-lg">
                Subscribe to Updates
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Articles</h2>
          <p className="text-xl text-indigo-100">Our most important and groundbreaking content</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-4 text-center">{post.image}</div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs rounded-full font-semibold">
                  FEATURED
                </span>
                <span className="text-sm text-indigo-300">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{post.title}</h3>
              <p className="text-indigo-100 mb-4 text-sm">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-indigo-300">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 bg-indigo-600/30 text-indigo-200 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-indigo-200 hover:bg-white/20'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span className="font-semibold">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-4 text-center">{post.image}</div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-2 py-1 bg-indigo-600/30 text-indigo-200 text-xs rounded-full font-semibold">
                  {categories.find(cat => cat.id === post.category)?.label}
                </span>
                <span className="text-sm text-indigo-300">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{post.title}</h3>
              <p className="text-indigo-100 mb-4 text-sm">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-indigo-300">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 bg-indigo-600/30 text-indigo-200 text-xs rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated with Revolutionary Tech</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Get the latest insights on AI consciousness, quantum computing, and neural interfaces delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white text-gray-900 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
            />
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Explore the Future?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join our community of innovators and thought leaders shaping the future of technology.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Join Our Community
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 font-semibold text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBlog2026;