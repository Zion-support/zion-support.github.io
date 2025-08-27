import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, Brain, Shield, Cloud, Rocket, Users, Calendar, Clock, BookOpen, ArrowRight, Star, Eye, MessageCircle } from 'lucide-react';

export default function Insights() {
  const insights = [
    {
      id: 1,
      title: "The Future of AI in Enterprise: 2025 Trends and Predictions",
      excerpt: "Explore how artificial intelligence is reshaping enterprise operations and what to expect in the coming year.",
      category: "AI & Machine Learning",
      author: "Dr. Sarah Chen",
      date: "March 15, 2025",
      readTime: "8 min read",
      views: 1247,
      featured: true,
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 2,
      title: "Cybersecurity in the Age of Quantum Computing",
      excerpt: "Understanding the security implications of quantum computing and preparing for post-quantum cryptography.",
      category: "Cybersecurity",
      author: "Michael Rodriguez",
      date: "March 12, 2025",
      readTime: "12 min read",
      views: 892,
      featured: false,
      color: "from-red-500 to-pink-500"
    },
    {
      id: 3,
      title: "Cloud-Native Architecture: Best Practices for 2025",
      excerpt: "Learn the latest strategies for building scalable, resilient cloud-native applications.",
      category: "Cloud & DevOps",
      author: "Jennifer Kim",
      date: "March 10, 2025",
      readTime: "10 min read",
      views: 1156,
      featured: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      title: "Digital Transformation: Lessons from Industry Leaders",
      excerpt: "Real-world insights from organizations that successfully navigated digital transformation.",
      category: "Digital Transformation",
      author: "David Thompson",
      date: "March 8, 2025",
      readTime: "15 min read",
      views: 678,
      featured: false,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 5,
      title: "The Rise of Edge Computing: Opportunities and Challenges",
      excerpt: "How edge computing is enabling new use cases and what it means for enterprise architecture.",
      category: "Edge Computing",
      author: "Lisa Wang",
      date: "March 5, 2025",
      readTime: "11 min read",
      views: 945,
      featured: false,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 6,
      title: "Data Privacy Regulations: A Global Perspective",
      excerpt: "Navigating the complex landscape of data privacy laws and their impact on business operations.",
      category: "Compliance",
      author: "Dr. Robert Johnson",
      date: "March 3, 2025",
      readTime: "14 min read",
      views: 756,
      featured: false,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const categories = [
    { name: "AI & Machine Learning", count: 24, icon: Brain, color: "from-purple-500 to-indigo-500" },
    { name: "Cybersecurity", count: 18, icon: Shield, color: "from-red-500 to-pink-500" },
    { name: "Cloud & DevOps", count: 22, icon: Cloud, color: "from-blue-500 to-cyan-500" },
    { name: "Digital Transformation", count: 15, icon: Rocket, color: "from-green-500 to-emerald-500" },
    { name: "Edge Computing", count: 12, icon: TrendingUp, color: "from-orange-500 to-red-500" },
    { name: "Compliance", count: 9, icon: Shield, color: "from-indigo-500 to-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industry Insights
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert analysis, thought leadership, and actionable insights on the latest technology trends and industry developments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Explore by Category</h2>
            <p className="text-xl text-gray-300">Find insights in your area of interest</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center cursor-pointer group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-full mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm text-white font-medium mb-1">{category.name}</div>
                <div className="text-xs text-gray-400">{category.count} articles</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Insight</h2>
            <p className="text-xl text-gray-300">Our most popular and impactful content</p>
          </div>
          
          {insights.filter(insight => insight.featured).map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20"
            >
              <div className="flex items-center mb-4">
                <span className={`bg-gradient-to-r ${insight.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {insight.category}
                </span>
                <span className="ml-4 text-gray-400 text-sm">{insight.date}</span>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">{insight.title}</h3>
              <p className="text-xl text-gray-300 mb-6">{insight.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6 text-gray-400">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{insight.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{insight.readTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    <span className="text-sm">{insight.views} views</span>
                  </div>
                </div>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Insights Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Latest Insights</h2>
            <p className="text-xl text-gray-300">Stay updated with our latest research and analysis</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.filter(insight => !insight.featured).map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`bg-gradient-to-r ${insight.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      {insight.category}
                    </span>
                    <span className="text-gray-400 text-sm">{insight.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{insight.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{insight.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{insight.author}</span>
                    <span>{insight.date}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400">
                      <Eye className="w-4 h-4 mr-1" />
                      <span className="text-sm">{insight.views}</span>
                    </div>
                    
                    <Link
                      to="/contact"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Ahead with Our Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get exclusive access to our latest research, industry analysis, and expert perspectives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Subscribe to Insights
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                to="/white-papers"
                className="inline-flex items-center justify-center bg-white/10 text-white py-3 px-6 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Download White Papers
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}