

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  Users, 
  Star, 
  Eye, 
  ArrowRight, 
  BookOpen, 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Zap, 
  Globe, 
  Target, 
  TrendingUp, 
  Award,
  Heart,
  Rocket
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function WhitePapers() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 5 },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: 6 },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Rocket, count: 4 },
    { id: 'healthcare-tech', name: 'Healthcare Technology', icon: Heart, count: 3 },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Zap, count: 4 },
    { id: 'sustainability', name: 'Sustainability & Green IT', icon: Globe, count: 2 }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'alphabetical', label: 'Alphabetical' },
    { value: 'downloads', label: 'Most Downloaded' }
  ];

  const whitePapers = [
    {
      id: 1,
      title: 'AI Autonomous Research: Revolutionizing Business Intelligence',
      description: 'Comprehensive guide on implementing AI Autonomous Research Assistant systems that discover, analyze, and synthesize information across multiple sources autonomously.',
      category: 'ai-ml',
      author: 'Dr. Sarah Chen, AI Research Director',
      publishDate: '2025-01-25',
      readTime: '35 min',
      downloads: 18750,
      rating: 4.9,
      featured: true,
      tags: ['AI Research', 'Autonomous Systems', 'Business Intelligence', 'Innovation'],
      coverImage: '/images/whitepapers/ai-autonomous-research.jpg',
      fileSize: '3.2 MB',
      language: 'English'
    },
    {
      id: 2,
      title: 'AI Supply Chain Optimization: Reducing Costs by Up to 30%',
      description: 'Strategic guide on implementing AI-powered supply chain optimization solutions that predict demand, optimize inventory, and significantly reduce operational costs.',
      category: 'ai-ml',
      author: 'Michael Rodriguez, Supply Chain AI Specialist',
      publishDate: '2025-01-23',
      readTime: '28 min',
      downloads: 16230,
      rating: 4.8,
      featured: true,
      tags: ['Supply Chain', 'AI Optimization', 'Cost Reduction', 'Predictive Analytics'],
      coverImage: '/images/whitepapers/ai-supply-chain-optimization.jpg',
      fileSize: '2.8 MB',
      language: 'English'
    },
    {
      id: 3,
      title: 'The Future of AI in Enterprise: 2025 and Beyond',
      description: 'Comprehensive analysis of AI adoption trends, challenges, and opportunities in enterprise environments. Learn how organizations can leverage AI for competitive advantage.',
      category: 'ai-ml',
      author: 'Dr. Sarah Chen, Chief AI Scientist',
      publishDate: '2024-01-15',
      readTime: '42 min',
      downloads: 28470,
      rating: 4.7,
      featured: false,
      tags: ['AI', 'Enterprise', 'Digital Transformation', 'Future Trends'],
      coverImage: '/images/whitepapers/ai-enterprise-future.jpg',
      fileSize: '4.1 MB',
      language: 'English'
    },
    {
      id: 4,
      title: 'Zero-Trust Security Architecture: A Comprehensive Guide',
      description: 'Deep dive into zero-trust security principles, implementation strategies, and best practices for modern organizations.',
      category: 'cybersecurity',
      author: 'Michael Rodriguez, Chief Security Officer',
      publishDate: '2025-01-18',
      readTime: '30 min',
      downloads: 12890,
      rating: 4.8,
      featured: false,
      tags: ['Cybersecurity', 'Zero Trust', 'Security Architecture', 'Best Practices'],
      coverImage: '/images/whitepapers/zero-trust-security.jpg',
      fileSize: '2.9 MB',
      language: 'English'
    }
  ];

  const filteredWhitePapers = whitePapers.filter(paper => {
    if (selectedCategory !== 'all' && paper.category !== selectedCategory) return false;
    if (searchQuery && !paper.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !paper.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Access our comprehensive collection of white papers covering AI, cybersecurity, cloud computing, and emerging technologies."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              White Papers &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple"> Research</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Deep insights and comprehensive analysis on the latest technology trends, 
              AI innovations, and digital transformation strategies.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search white papers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-zion-blue-dark border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-zion-cyan text-white border-zion-cyan'
                    : 'bg-transparent text-zion-slate-light border-zion-purple/30 hover:border-zion-cyan hover:text-zion-cyan'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured White Papers */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Research</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWhitePapers.filter(paper => paper.featured).map((paper) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                    {paper.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-zion-slate-light">{paper.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {paper.title}
                </h3>
                
                <p className="text-zion-slate-light mb-4 line-clamp-3">
                  {paper.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4">
                  <span>{paper.author}</span>
                  <span>{paper.publishDate}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      {paper.readTime}
                    </span>
                    <span className="flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      {paper.downloads.toLocaleString()}
                    </span>
                  </div>
                  
                  <button className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All White Papers */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">All White Papers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWhitePapers.map((paper) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-6 hover:border-zion-cyan/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-zion-purple/20 text-zion-purple text-sm rounded-full">
                    {paper.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-zion-slate-light">{paper.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {paper.title}
                </h3>
                
                <p className="text-zion-slate-light mb-4 line-clamp-3">
                  {paper.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4">
                  <span>{paper.author}</span>
                  <span>{paper.publishDate}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      {paper.readTime}
                    </span>
                    <span className="flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      {paper.downloads.toLocaleString()}
                    </span>
                  </div>
                  
                  <button className="px-4 py-2 bg-zion-purple text-white rounded-lg hover:bg-zion-purple-dark transition-colors flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Ahead with Our Research
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Get exclusive access to our latest research, industry insights, and technology trends. 
              Join thousands of professionals who trust our expertise.
            </p>
            <button className="px-8 py-4 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan-dark transition-colors text-lg font-semibold">
              Subscribe to Research Updates
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
