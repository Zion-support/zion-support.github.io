

import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, User, Eye, TrendingUp, Brain, Rocket, Shield, Cloud, Database, Globe } from 'lucide-react';

const WhitePapers: React.FC = () => {
  const whitePapers = [
    {
      id: 1,
      title: "AI-Powered Business Transformation: A Comprehensive Guide for 2025",
      description: "Explore how artificial intelligence is revolutionizing business operations, from customer service automation to predictive analytics and strategic decision-making.",
      category: "AI & Business",
      author: "Zion Tech Group Research Team",
      date: "January 2025",
      downloads: 1247,
      views: 8923,
      featured: true,
      icon: Brain,
      color: "from-purple-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Quantum Computing in Enterprise: Practical Applications and Implementation Strategies",
      description: "Discover how quantum computing is transforming industries and learn practical strategies for implementing quantum solutions in your organization.",
      category: "Quantum Technology",
      author: "Dr. Sarah Chen",
      date: "December 2024",
      downloads: 892,
      views: 6541,
      featured: true,
      icon: Rocket,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 3,
      title: "Cybersecurity in the Age of AI: Threats, Solutions, and Best Practices",
      description: "Comprehensive analysis of AI-powered cybersecurity threats and the innovative solutions being developed to protect digital assets.",
      category: "Cybersecurity",
      author: "Marcus Rodriguez",
      date: "November 2024",
      downloads: 1567,
      views: 11234,
      featured: true,
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      id: 4,
      title: "Cloud-Native Architecture: Building Scalable and Resilient Systems",
      description: "Learn the principles of cloud-native architecture and how to design systems that scale automatically and recover from failures gracefully.",
      category: "Cloud Computing",
      author: "Jennifer Kim",
      date: "October 2024",
      downloads: 743,
      views: 5432,
      featured: false,
      icon: Cloud,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 5,
      title: "Data Analytics and Business Intelligence: Driving Growth Through Insights",
      description: "How organizations are leveraging data analytics and BI tools to make informed decisions and drive sustainable growth.",
      category: "Data Analytics",
      author: "David Thompson",
      date: "September 2024",
      downloads: 634,
      views: 4567,
      featured: false,
      icon: Database,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 6,
      title: "Digital Twin Technology: Revolutionizing Industry 4.0",
      description: "Explore how digital twin technology is transforming manufacturing, healthcare, and urban planning through real-time simulation and optimization.",
      category: "Digital Twin",
      author: "Dr. Emily Watson",
      date: "August 2024",
      downloads: 567,
      views: 3987,
      featured: false,
      icon: Globe,
      color: "from-orange-500 to-red-500"
    }
  ];

  const categories = [
    { name: "All", count: whitePapers.length, active: true },
    { name: "AI & Business", count: whitePapers.filter(wp => wp.category === "AI & Business").length, active: false },
    { name: "Quantum Technology", count: whitePapers.filter(wp => wp.category === "Quantum Technology").length, active: false },
    { name: "Cybersecurity", count: whitePapers.filter(wp => wp.category === "Cybersecurity").length, active: false },
    { name: "Cloud Computing", count: whitePapers.filter(wp => wp.category === "Cloud Computing").length, active: false },
    { name: "Data Analytics", count: whitePapers.filter(wp => wp.category === "Data Analytics").length, active: false },
    { name: "Digital Twin", count: whitePapers.filter(wp => wp.category === "Digital Twin").length, active: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Access our comprehensive collection of white papers covering AI, quantum computing, cybersecurity, cloud computing, and emerging technologies."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              White Papers & Research
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Deep insights into emerging technologies, industry trends, and innovative solutions 
              that are shaping the future of business and technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-gray-300">
                <FileText className="w-5 h-5 mr-2" />
                <span>{whitePapers.length} Research Papers</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Download className="w-5 h-5 mr-2" />
                <span>Free Downloads</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Eye className="w-5 h-5 mr-2" />
                <span>Expert Insights</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-slate-700/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  category.active
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured White Papers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Featured Research
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitePapers.filter(wp => wp.featured).map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group relative"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${paper.color} flex items-center justify-center`}>
                      <paper.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs text-cyan-400 font-medium bg-cyan-400/10 px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {paper.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {paper.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {paper.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {paper.date}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {paper.downloads.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {paper.views.toLocaleString()}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                    Download White Paper
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All White Papers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            All Research Papers
          </motion.h2>
          
          <div className="space-y-6">
            {whitePapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${paper.color} flex items-center justify-center flex-shrink-0`}>
                    <paper.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors duration-300">
                          {paper.title}
                        </h3>
                        <p className="text-gray-400 mb-3">
                          {paper.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-xs text-cyan-400 font-medium bg-cyan-400/10 px-3 py-1 rounded-full">
                          {paper.category}
                        </span>
                        {paper.featured && (
                          <span className="text-xs text-yellow-400 font-medium bg-yellow-400/10 px-3 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {paper.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {paper.date}
                      </div>
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        {paper.downloads.toLocaleString()} downloads
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-2" />
                        {paper.views.toLocaleString()} views
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                      Download
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated with Latest Research
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get notified when we publish new white papers, research reports, and industry insights. 
              Join thousands of technology leaders and innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhitePapers;
