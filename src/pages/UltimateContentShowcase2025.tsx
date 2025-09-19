import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UltimateContentShowcase2025: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚡' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧬' },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: '🔗' },
    { id: 'automation', name: 'Automation', icon: '🤖' },
    { id: 'future', name: 'Future Tech', icon: '🚀' }
  ];

  const contentItems = [
    {
      id: 1,
      title: "Conscious AI Systems: The Next Frontier",
      description: "Explore the revolutionary development of AI systems that possess genuine self-awareness and emotional intelligence, marking the most significant advancement in artificial intelligence.",
      category: 'ai',
      type: 'Article',
      readTime: '12 min',
      difficulty: 'Advanced',
      rating: 4.9,
      views: '125K',
      published: '2025-01-20',
      author: 'Dr. Sarah Chen',
      tags: ['AI', 'Consciousness', 'Machine Learning', 'Future Tech'],
      featured: true,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 2,
      title: "Quantum Neural Networks: Exponential Processing Power",
      description: "Discover how quantum computing combined with neural networks creates systems that can solve problems previously thought impossible, revolutionizing computational capabilities.",
      category: 'quantum',
      type: 'Research Paper',
      readTime: '18 min',
      difficulty: 'Expert',
      rating: 4.8,
      views: '98K',
      published: '2025-01-18',
      author: 'Prof. Michael Rodriguez',
      tags: ['Quantum Computing', 'Neural Networks', 'Research', 'Breakthrough'],
      featured: true,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 3,
      title: "Neural Interface Revolution: Mind-Machine Integration",
      description: "Learn about breakthrough neural interface technology that enables direct communication between the human brain and digital systems, bridging consciousness and AI.",
      category: 'neural',
      type: 'Case Study',
      readTime: '15 min',
      difficulty: 'Advanced',
      rating: 4.7,
      views: '87K',
      published: '2025-01-16',
      author: 'Dr. Elena Volkov',
      tags: ['Neural Interfaces', 'BCI', 'Human-AI', 'Innovation'],
      featured: false,
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 4,
      title: "Blockchain 3.0: Decentralized Autonomous Organizations",
      description: "Explore the next generation of blockchain technology with DAOs that operate autonomously, creating new paradigms for organizational structure and governance.",
      category: 'blockchain',
      type: 'White Paper',
      readTime: '22 min',
      difficulty: 'Intermediate',
      rating: 4.6,
      views: '76K',
      published: '2025-01-14',
      author: 'Alex Thompson',
      tags: ['Blockchain', 'DAO', 'Web3', 'Decentralization'],
      featured: false,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 5,
      title: "Autonomous Business Operations: AI-Driven Enterprise",
      description: "Understand how AI agents are transforming business operations, enabling fully autonomous decision-making and process optimization across industries.",
      category: 'automation',
      type: 'Guide',
      readTime: '20 min',
      difficulty: 'Intermediate',
      rating: 4.8,
      views: '112K',
      published: '2025-01-12',
      author: 'Maria Santos',
      tags: ['Automation', 'Business', 'AI Agents', 'Enterprise'],
      featured: true,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 6,
      title: "Future of Work: Human-AI Collaboration",
      description: "Examine how the future workplace will evolve with seamless human-AI collaboration, creating new opportunities and challenges for the workforce.",
      category: 'future',
      type: 'Analysis',
      readTime: '16 min',
      difficulty: 'Beginner',
      rating: 4.5,
      views: '94K',
      published: '2025-01-10',
      author: 'James Wilson',
      tags: ['Future of Work', 'Human-AI', 'Collaboration', 'Workforce'],
      featured: false,
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 7,
      title: "Quantum Cryptography: Unbreakable Security",
      description: "Dive into quantum cryptography and how it provides unbreakable security for the digital age, protecting data with the laws of physics.",
      category: 'quantum',
      type: 'Technical Deep Dive',
      readTime: '25 min',
      difficulty: 'Expert',
      rating: 4.9,
      views: '68K',
      published: '2025-01-08',
      author: 'Dr. Yuki Tanaka',
      tags: ['Quantum Cryptography', 'Security', 'Physics', 'Encryption'],
      featured: true,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 8,
      title: "Synthetic Intelligence: AI Creating AI",
      description: "Explore the fascinating world of synthetic intelligence where AI systems create and improve other AI systems, accelerating technological advancement.",
      category: 'ai',
      type: 'Research Paper',
      readTime: '19 min',
      difficulty: 'Advanced',
      rating: 4.7,
      views: '81K',
      published: '2025-01-06',
      author: 'Dr. Robert Kim',
      tags: ['Synthetic Intelligence', 'AI Development', 'Meta-Learning', 'Evolution'],
      featured: false,
      color: 'from-violet-500 to-purple-600'
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  const featuredContent = contentItems.filter(item => item.featured);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4">
          <p className="text-white text-xl">Loading Ultimate Content Showcase...</p>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT SHOWCASE • JANUARY 2025
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ultimate Content Showcase 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8"></p>
            Discover the most comprehensive collection of cutting-edge technology content, research, and insights</p>
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"></button>
              Explore All Content</button>
            </button>
            <button className="border border-white/30 px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold"></button>
              Subscribe for Updates</button>
            </button>
        </motion.div>
        {/* Featured Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">🌟 Featured Content</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${item.color} text-white`}>
                    {item.type}
                  </span>
                  <span className="text-yellow-400">⭐ {item.rating}</span>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-blue-100 mb-6">{item.description}</p>
                <div className="flex items-center justify-between text-sm text-blue-200 mb-4">
                  <span>👤 {item.author}</span>
                  <span>👁️ {item.views} views</span>
                <div className="flex items-center justify-between text-sm text-blue-200 mb-6">
                  <span>⏱️ {item.readTime}</span>
                  <span>📅 {item.published}</span>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                <button className={`w-full bg-gradient-to-r ${item.color} py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}></button>
                  Read More</button>
                </button>
              </motion.div>
            ))}
        </motion.div>
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 font-semibold ${
                  activeCategory === category.id
                    ? 'bg-white text-blue-900'
                    : 'bg-white/10 text-white hover:bg-white/20'</button>
                }`}</button>
              ></button>
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
        </motion.div>
        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            {activeCategory === 'all' ? 'All Content' : categories.find(c => c.id === activeCategory)?.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredContent.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${item.color} text-white`}>
                      {item.type}
                    </span>
                    <span className="text-yellow-400">⭐ {item.rating}</span>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-blue-100 mb-4 text-sm">{item.description}</p>
                  <div className="flex items-center justify-between text-xs text-blue-200 mb-4">
                    <span>👤 {item.author}</span>
                    <span>👁️ {item.views}</span>
                  <div className="flex items-center justify-between text-xs text-blue-200 mb-4">
                    <span>⏱️ {item.readTime}</span>
                    <span>📅 {item.published}</span>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  <button className={`w-full bg-gradient-to-r ${item.color} py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm`}></button>
                    Read More</button>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
        </motion.div>
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <h2 className="text-4xl font-bold mb-6">Stay Ahead of the Curve</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto"></p>
              Get exclusive access to the latest technology insights, research papers, and breakthrough discoveries</p>
            </p>
            <div className="flex justify-center space-x-6">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"></button>
                Subscribe Now</button>
              </button>
              <button className="border border-white/30 px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg"></button>
                Download Resources</button>
              </button>
              <button className="bg-gradient-to-r from-green-500 to-teal-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"></button>
                Join Community</button>
              </button>
        </motion.div>
  );
};

export default UltimateContentShowcase2025;