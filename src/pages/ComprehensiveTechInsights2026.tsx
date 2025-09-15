import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ComprehensiveTechInsights2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All', 'AI & Machine Learning', 'Quantum Computing', 'Neural Technology', 
    'Edge Computing', 'Blockchain', 'Cybersecurity', 'Future Tech'
  ];

  const articles = [
    {
      id: 1,
      title: "The Complete Guide to Next-Generation AI: From Theory to Implementation",
      excerpt: "A comprehensive exploration of advanced AI systems, their capabilities, and real-world applications across industries.",
      author: "Dr. Sarah Chen",
      date: "January 25, 2026",
      readTime: "15 min read",
      category: "AI & Machine Learning",
      image: "🧠",
      featured: true,
      content: "Artificial Intelligence has evolved beyond simple pattern recognition to become a truly transformative force. This comprehensive guide explores the latest developments in AI technology, from autonomous reasoning systems to quantum-enhanced neural networks. We'll examine how these technologies are being implemented across various industries and what the future holds for AI development.",
      tags: ["AI", "Machine Learning", "Neural Networks", "Automation"]
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough: Solving the Impossible",
      excerpt: "Deep dive into quantum computing advances that are enabling solutions to problems previously thought impossible.",
      author: "Prof. Michael Rodriguez",
      date: "January 23, 2026",
      readTime: "18 min read",
      category: "Quantum Computing",
      image: "⚡",
      featured: true,
      content: "Quantum computing represents a paradigm shift in computational power. This article explores the latest breakthroughs in quantum technology, from quantum supremacy achievements to practical applications in drug discovery, climate modeling, and cryptography. We'll examine the challenges and opportunities in this rapidly evolving field.",
      tags: ["Quantum Computing", "Cryptography", "Drug Discovery", "Climate Modeling"]
    },
    {
      id: 3,
      title: "Neural Interfaces: Bridging the Gap Between Mind and Machine",
      excerpt: "Exploring the revolutionary technology that enables direct brain-computer communication and its implications.",
      author: "Dr. Elena Volkov",
      date: "January 21, 2026",
      readTime: "12 min read",
      category: "Neural Technology",
      image: "🧬",
      featured: false,
      content: "Neural interface technology is revolutionizing how humans interact with computers. This comprehensive analysis covers the latest developments in brain-computer interfaces, from medical applications to consumer devices. We'll explore the technical challenges, ethical considerations, and future possibilities of this groundbreaking technology.",
      tags: ["Neural Interfaces", "BCI", "Medical Technology", "Human-Computer Interaction"]
    },
    {
      id: 4,
      title: "Edge AI Revolution: Bringing Intelligence to Every Device",
      excerpt: "How edge AI is transforming IoT by bringing powerful AI capabilities directly to devices for real-time processing.",
      author: "Alex Thompson",
      date: "January 19, 2026",
      readTime: "10 min read",
      category: "Edge Computing",
      image: "🌐",
      featured: false,
      content: "Edge AI is bringing artificial intelligence to the edge of networks, enabling real-time processing and decision-making on devices. This article explores the latest developments in edge AI technology, its applications across industries, and the challenges of implementing AI at the edge.",
      tags: ["Edge AI", "IoT", "Real-time Processing", "Distributed Computing"]
    },
    {
      id: 5,
      title: "Blockchain 3.0: The Next Evolution of Decentralized Technology",
      excerpt: "Exploring the latest developments in blockchain technology and their potential to transform digital economies.",
      author: "Maria Santos",
      date: "January 17, 2026",
      readTime: "14 min read",
      category: "Blockchain",
      image: "🔗",
      featured: false,
      content: "Blockchain technology continues to evolve, with new innovations addressing scalability, sustainability, and interoperability challenges. This comprehensive analysis covers the latest developments in blockchain technology, from Layer 2 solutions to cross-chain protocols and their potential impact on various industries.",
      tags: ["Blockchain", "DeFi", "Web3", "Decentralization"]
    },
    {
      id: 6,
      title: "Cybersecurity in the Age of AI: Protecting Against Intelligent Threats",
      excerpt: "How AI-powered defense systems are protecting against increasingly sophisticated cyber threats.",
      author: "James Wilson",
      date: "January 15, 2026",
      readTime: "16 min read",
      category: "Cybersecurity",
      image: "🛡️",
      featured: false,
      content: "As cyber threats become more sophisticated, traditional security measures are no longer sufficient. This article explores how AI and machine learning are being used to enhance cybersecurity, from threat detection to automated response systems. We'll examine the latest developments in AI-powered security solutions and their effectiveness.",
      tags: ["Cybersecurity", "AI Security", "Threat Detection", "Automated Response"]
    },
    {
      id: 7,
      title: "The Future of Work: How Technology is Reshaping Industries",
      excerpt: "Comprehensive analysis of how emerging technologies are transforming the workplace and creating new opportunities.",
      author: "Dr. Lisa Park",
      date: "January 13, 2026",
      readTime: "13 min read",
      category: "Future Tech",
      image: "🚀",
      featured: false,
      content: "The workplace is undergoing a dramatic transformation driven by emerging technologies. This article explores how AI, automation, and other technologies are reshaping industries, creating new job opportunities, and changing the nature of work. We'll examine the skills needed for the future workforce and how organizations can adapt.",
      tags: ["Future of Work", "Automation", "Digital Transformation", "Skills Development"]
    },
    {
      id: 8,
      title: "Sustainable Technology: Building a Greener Future",
      excerpt: "How technology companies are addressing environmental challenges and building sustainable solutions.",
      author: "Dr. Robert Green",
      date: "January 11, 2026",
      readTime: "11 min read",
      category: "Future Tech",
      image: "🌱",
      featured: false,
      content: "Sustainability is becoming a key focus for technology companies as they work to reduce their environmental impact. This article explores the latest developments in sustainable technology, from green computing to renewable energy solutions and their potential to address climate change.",
      tags: ["Sustainability", "Green Technology", "Climate Change", "Renewable Energy"]
    }
  ];

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

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
              📚 COMPREHENSIVE TECH INSIGHTS • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technology Insights & Analysis
            </h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
              Stay ahead of the curve with in-depth analysis, expert insights, and comprehensive coverage 
              of the latest technological breakthroughs and industry trends.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Articles */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-8 text-center">🌟 Featured Articles</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredArticles.filter(article => article.featured).map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-5xl">{article.image}</div>
                <div>
                  <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4">{article.title}</h3>
              <p className="text-purple-100 mb-6 text-lg">{article.excerpt}</p>
              <div className="mb-6">
                <p className="text-purple-200 text-sm leading-relaxed">{article.content}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 bg-white/20 rounded-full text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-purple-200 mb-6">
                <div>
                  <span className="font-semibold">{article.author}</span>
                  <span className="mx-2">•</span>
                  <span>{article.date}</span>
                </div>
                <span>{article.readTime}</span>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Read Full Article →
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      {/* All Articles Grid */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-8 text-center">📖 All Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-4xl">{article.image}</div>
                <span className="px-3 py-1 bg-blue-500/30 rounded-full text-xs font-semibold">
                  {article.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{article.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{article.excerpt}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {article.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-2 py-1 bg-white/10 rounded text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                <div>
                  <span className="font-semibold">{article.author}</span>
                  <span className="mx-1">•</span>
                  <span>{article.date}</span>
                </div>
                <span>{article.readTime}</span>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
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
            <h2 className="text-4xl font-bold mb-4">Stay Updated with Latest Insights</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get the latest articles, insights, and breakthrough technologies delivered 
              directly to your inbox. Join thousands of tech professionals and enthusiasts.
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

export default ComprehensiveTechInsights2026;