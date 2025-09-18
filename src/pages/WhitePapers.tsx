import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, User, BookOpen, Brain, Atom, Shield, Wifi, Leaf, Cloud, BarChart3, Search, Filter } from 'lucide-react';

export default function WhitePapers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', count: 24, icon: BookOpen },
    { id: 'ai', name: 'AI & Machine Learning', count: 8, icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 6, icon: Shield },
    { id: 'quantum', name: 'Quantum Computing', count: 3, icon: Atom },
    { id: 'cloud', name: 'Cloud & Infrastructure', count: 4, icon: Cloud },
    { id: 'iot', name: 'IoT & Edge Computing', count: 3, icon: Wifi }
  ];

  const types = [
    { id: 'all', name: 'All Types' },
    { id: 'free', name: 'Free Downloads' },
    { id: 'premium', name: 'Premium Content' },
    { id: 'research', name: 'Research Papers' }
  ];

  const whitePapers = [
    {
      id: 1,
      title: 'AI-Powered Digital Transformation: A Comprehensive Guide for Enterprise Leaders',
      category: 'ai',
      type: 'premium',
      date: '2025-01-10',
      author: 'Dr. Sarah Chen',
      description: 'This comprehensive white paper explores how AI is revolutionizing digital transformation initiatives across industries, providing actionable insights for enterprise leaders.',
      topics: ['AI Strategy', 'Digital Transformation', 'Enterprise Leadership', 'ROI Measurement'],
      downloadUrl: '#',
      isPremium: true,
      readTime: '45 min read',
      pageCount: 28,
      downloads: 1247
    },
    {
      id: 2,
      title: 'Quantum Computing in Cybersecurity: Next-Generation Threat Detection',
      category: 'quantum',
      type: 'research',
      date: '2024-12-15',
      author: 'Dr. James Wilson',
      description: 'Explore how quantum computing is transforming cybersecurity, from quantum-resistant cryptography to advanced threat detection algorithms.',
      topics: ['Quantum Computing', 'Cybersecurity', 'Cryptography', 'Threat Detection'],
      downloadUrl: '#',
      isPremium: false,
      readTime: '60 min read',
      pageCount: 35,
      downloads: 892
    },
    {
      id: 3,
      title: 'Autonomous AI Systems: Ethical Considerations and Implementation Guidelines',
      category: 'ai',
      type: 'research',
      date: '2024-11-20',
      author: 'Dr. Emily Watson',
      description: 'A deep dive into the ethical considerations surrounding autonomous AI systems, with practical guidelines for responsible implementation.',
      topics: ['AI Ethics', 'Autonomous Systems', 'Responsible AI', 'Implementation'],
      downloadUrl: '#',
      isPremium: false,
      readTime: '40 min read',
      pageCount: 22,
      downloads: 1102
    },
    {
      id: 4,
      title: 'Cloud-Native Architecture: Building Scalable and Resilient Systems',
      category: 'cloud',
      type: 'premium',
      date: '2024-10-25',
      author: 'David Kim',
      description: 'Learn the principles of cloud-native architecture and how to design systems that are scalable, resilient, and cost-effective.',
      topics: ['Cloud Architecture', 'Scalability', 'Resilience', 'Cost Optimization'],
      downloadUrl: '#',
      isPremium: true,
      readTime: '35 min read',
      pageCount: 25,
      downloads: 1563
    },
    {
      id: 5,
      title: 'Machine Learning Operations (MLOps): Best Practices for Production AI',
      category: 'ai',
      type: 'premium',
      date: '2024-09-30',
      author: 'Marcus Rodriguez',
      description: 'Comprehensive guide to MLOps, covering model deployment, monitoring, and maintenance in production environments.',
      topics: ['MLOps', 'Model Deployment', 'Production AI', 'Monitoring'],
      downloadUrl: '#',
      isPremium: true,
      readTime: '50 min read',
      pageCount: 30,
      downloads: 945
    },
    {
      id: 6,
      title: 'Zero-Trust Security Architecture: Implementation and Best Practices',
      category: 'cybersecurity',
      type: 'free',
      date: '2024-08-15',
      author: 'Alex Thompson',
      description: 'Detailed implementation guide for zero-trust security architecture, including practical examples and best practices.',
      topics: ['Zero-Trust', 'Security Architecture', 'Implementation', 'Best Practices'],
      downloadUrl: '#',
      isPremium: false,
      readTime: '30 min read',
      pageCount: 20,
      downloads: 2034
    }
  ];

  const filteredWhitePapers = whitePapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    const matchesType = selectedType === 'all' || paper.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-lg rounded-full mb-6">
              <FileText className="w-10 h-10 text-zion-cyan" />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold mb-6"
          >
            White Papers & Research
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto"
          >
            Access in-depth research, technical insights, and strategic guidance from industry experts 
            on cutting-edge technologies and business transformation.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search white papers, authors, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl border-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'border-zion-cyan bg-zion-cyan/10 text-zion-cyan'
                    : 'border-zion-slate-light text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
                <span className="bg-zion-slate-light/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {types.map((type) => (
              <motion.button
                key={type.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedType(type.id)}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                  selectedType === type.id
                    ? 'border-zion-cyan bg-zion-cyan/10 text-zion-cyan'
                    : 'border-zion-slate-light text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan'
                }`}
              >
                {type.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* White Papers Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredWhitePapers.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-zion-slate-dark border border-zion-slate-light rounded-xl overflow-hidden hover:border-zion-cyan transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
            >
              <div className="aspect-video bg-zion-slate-light/20 flex items-center justify-center relative">
                <FileText className="w-16 h-16 text-zion-slate-light" />
                {paper.isPremium && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    PREMIUM
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-zion-cyan/20 text-zion-cyan px-3 py-1 rounded-full text-xs font-medium">
                    {categories.find(c => c.id === paper.category)?.name}
                  </span>
                  <span className="bg-zion-slate-light/20 text-zion-slate-light px-3 py-1 rounded-full text-xs">
                    {paper.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{paper.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">{paper.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(paper.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                    <User className="w-4 h-4" />
                    <span>{paper.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                    <BookOpen className="w-4 h-4" />
                    <span>{paper.readTime} • {paper.pageCount} pages</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {paper.topics.slice(0, 3).map((topic, idx) => (
                      <span key={idx} className="bg-zion-slate-light/20 text-zion-slate-light px-2 py-1 rounded text-xs">
                        {topic}
                      </span>
                    ))}
                    {paper.topics.length > 3 && (
                      <span className="bg-zion-slate-light/20 text-zion-slate-light px-2 py-1 rounded text-xs">
                        +{paper.topics.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light text-sm">
                    {paper.downloads.toLocaleString()} downloads
                  </span>
                  <button className="px-4 py-2 bg-zion-cyan text-futuristic font-medium rounded-lg hover:bg-zion-cyan/90 transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    {paper.isPremium ? 'Get Premium' : 'Download Free'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Latest Research</h2>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Subscribe to our research newsletter and get early access to new white papers, 
            industry insights, and exclusive content from our expert team.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-futuristic font-semibold rounded-xl hover:from-zion-cyan/90 hover:to-zion-blue/90 transition-all duration-300 transform hover:scale-105">
            Subscribe to Research Updates
          </button>
        </motion.div>
      </div>
    </div>
  );
}
