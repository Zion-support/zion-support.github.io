

import React from 'react';
<<<<<<< HEAD
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { FileText, Download, Calendar, User, ArrowRight, BookOpen, TrendingUp, Target, Brain, Cloud, Shield, Zap } from 'lucide-react';

export const WhitePapers: React.FC = () => {
  const whitePapers = [
    {
      id: 1,
      title: 'AI-Powered Business Transformation: A Comprehensive Guide 2025',
      description: 'Explore how artificial intelligence is revolutionizing business operations, from automation to decision-making processes.',
      category: 'AI & Business',
      author: 'Zion Tech Group Research Team',
      date: '2025-01-15',
      downloadCount: 1247,
      featured: true,
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Quantum Computing in Enterprise: Practical Applications and ROI',
      description: 'A detailed analysis of quantum computing applications in enterprise environments and their measurable business impact.',
      category: 'Quantum Computing',
      author: 'Dr. Sarah Chen',
      date: '2024-12-20',
      downloadCount: 892,
      featured: true,
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Cybersecurity in the AI Era: Threats, Solutions, and Best Practices',
      description: 'Comprehensive guide to protecting AI systems and data in an increasingly connected digital landscape.',
      category: 'Cybersecurity',
      author: 'Marcus Rodriguez',
      date: '2024-11-30',
      downloadCount: 1563,
      featured: true,
      icon: Shield,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Cloud-Native Architecture: Building Scalable AI Applications',
      description: 'Best practices for designing and deploying AI applications in cloud environments for optimal performance and scalability.',
      category: 'Cloud & DevOps',
      author: 'Alex Thompson',
      date: '2024-10-25',
      downloadCount: 734,
      featured: false,
      icon: Cloud,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 5,
      title: 'Data Analytics Revolution: From Insights to Actionable Intelligence',
      description: 'How modern data analytics platforms are transforming raw data into strategic business intelligence.',
      category: 'Data Analytics',
      author: 'Dr. Emily Watson',
      date: '2024-09-18',
      downloadCount: 1102,
      featured: false,
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 6,
      title: 'Digital Twin Technology: Bridging Physical and Digital Worlds',
      description: 'Comprehensive overview of digital twin applications across industries and their implementation strategies.',
      category: 'Digital Twin',
      author: 'James Wilson',
      date: '2024-08-12',
      downloadCount: 645,
      featured: false,
      icon: Target,
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const categories = [
    { name: 'All', count: whitePapers.length, active: true },
    { name: 'AI & Business', count: whitePapers.filter(wp => wp.category === 'AI & Business').length, active: false },
    { name: 'Quantum Computing', count: whitePapers.filter(wp => wp.category === 'Quantum Computing').length, active: false },
    { name: 'Cybersecurity', count: whitePapers.filter(wp => wp.category === 'Cybersecurity').length, active: false },
    { name: 'Cloud & DevOps', count: whitePapers.filter(wp => wp.category === 'Cloud & DevOps').length, active: false },
    { name: 'Data Analytics', count: whitePapers.filter(wp => wp.category === 'Data Analytics').length, active: false },
    { name: 'Digital Twin', count: whitePapers.filter(wp => wp.category === 'Digital Twin').length, active: false }
  ];
=======
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  FileText, 
  Download, 
  Eye, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Brain,
  Atom,
  Shield,
  Eye as EyeIcon,
  TrendingUp,
  Lightbulb,
  BookOpen,
  Search,
  Filter
} from 'lucide-react';

export default function WhitePapers() {
  const whitePapers = [
    {
      id: 'ai-enterprise-2024',
      title: 'AI in Enterprise: A Comprehensive Guide for 2024',
      description: 'Explore how artificial intelligence is transforming enterprise operations, from automation to decision-making processes.',
      category: 'Artificial Intelligence',
      author: 'Dr. Sarah Chen',
      date: 'December 2024',
      readTime: '15 min read',
      downloads: 2847,
      views: 12543,
      featured: true,
      tags: ['AI', 'Enterprise', 'Automation', 'Digital Transformation'],
      abstract: 'This comprehensive white paper examines the current state of AI adoption in enterprise environments, providing actionable insights for organizations looking to implement AI solutions.',
      keyTopics: [
        'AI adoption strategies for enterprises',
        'ROI measurement and business case development',
        'Integration challenges and solutions',
        'Future trends and predictions'
      ]
    },
    {
      id: 'quantum-computing-future',
      title: 'Quantum Computing: The Future of Computational Power',
      description: 'Dive into the revolutionary world of quantum computing and its implications for AI, cryptography, and scientific research.',
      category: 'Quantum Computing',
      author: 'Prof. Michael Rodriguez',
      date: 'November 2024',
      readTime: '20 min read',
      downloads: 1956,
      views: 8932,
      featured: true,
      tags: ['Quantum Computing', 'AI', 'Cryptography', 'Research'],
      abstract: 'An in-depth exploration of quantum computing principles, current developments, and future applications that will reshape technology as we know it.',
      keyTopics: [
        'Quantum computing fundamentals',
        'Quantum AI applications',
        'Cryptographic implications',
        'Commercial quantum computing timeline'
      ]
    },
    {
      id: 'cybersecurity-framework',
      title: 'Next-Generation Cybersecurity Framework for AI Systems',
      description: 'Learn about advanced cybersecurity strategies specifically designed to protect AI-powered systems and infrastructure.',
      category: 'Cybersecurity',
      author: 'Alex Thompson',
      date: 'October 2024',
      readTime: '18 min read',
      downloads: 3241,
      views: 15678,
      featured: true,
      tags: ['Cybersecurity', 'AI Security', 'Framework', 'Best Practices'],
      abstract: 'This white paper presents a comprehensive cybersecurity framework designed to address the unique challenges of protecting AI systems and ensuring robust security in the age of intelligent automation.',
      keyTopics: [
        'AI-specific security threats',
        'Zero-trust architecture for AI',
        'Adversarial machine learning defense',
        'Compliance and regulatory considerations'
      ]
    },
    {
      id: 'digital-twin-technology',
      title: 'Digital Twin Technology: Bridging Physical and Digital Worlds',
      description: 'Discover how digital twin technology is revolutionizing industries from manufacturing to healthcare.',
      category: 'Digital Twin',
      author: 'Dr. Emily Watson',
      date: 'September 2024',
      readTime: '16 min read',
      downloads: 2187,
      views: 9876,
      featured: false,
      tags: ['Digital Twin', 'IoT', 'Manufacturing', 'Healthcare'],
      abstract: 'Explore the transformative potential of digital twin technology across various industries, including implementation strategies and real-world use cases.',
      keyTopics: [
        'Digital twin implementation strategies',
        'Industry-specific applications',
        'Data integration and management',
        'ROI and business value'
      ]
    },
    {
      id: 'ai-healthcare-diagnostics',
      title: 'AI-Powered Healthcare Diagnostics: Revolutionizing Patient Care',
      description: 'Learn how AI is transforming medical diagnostics and improving patient outcomes through advanced imaging and data analysis.',
      category: 'Healthcare AI',
      author: 'Dr. James Wilson',
      date: 'August 2024',
      readTime: '22 min read',
      downloads: 1876,
      views: 7654,
      featured: false,
      tags: ['Healthcare AI', 'Diagnostics', 'Medical Imaging', 'Patient Care'],
      abstract: 'This white paper examines the current state of AI in healthcare diagnostics, including case studies, regulatory considerations, and future developments.',
      keyTopics: [
        'AI diagnostic accuracy and validation',
        'Regulatory compliance and approval',
        'Integration with existing healthcare systems',
        'Ethical considerations and bias mitigation'
      ]
    },
    {
      id: 'blockchain-ai-integration',
      title: 'Blockchain and AI: Synergistic Technologies for the Future',
      description: 'Explore the convergence of blockchain and artificial intelligence technologies and their combined potential.',
      category: 'Blockchain & AI',
      author: 'Maria Santos',
      date: 'July 2024',
      readTime: '19 min read',
      downloads: 1654,
      views: 6987,
      featured: false,
      tags: ['Blockchain', 'AI', 'DeFi', 'Smart Contracts'],
      abstract: 'Discover how blockchain and AI technologies complement each other, creating new opportunities for decentralized intelligence and autonomous systems.',
      keyTopics: [
        'Decentralized AI networks',
        'AI-powered smart contracts',
        'Blockchain data analytics',
        'Future applications and use cases'
      ]
    }
  ];

  const categories = ['All', 'Artificial Intelligence', 'Quantum Computing', 'Cybersecurity', 'Digital Twin', 'Healthcare AI', 'Blockchain & AI'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredPapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });
>>>>>>> origin/clean-merge-website-fixes

  const handleDownload = (paperId: string) => {
    // Simulate download
    console.log(`Downloading white paper: ${paperId}`);
    // In a real implementation, this would trigger a download
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="White Papers - Zion Tech Group"
<<<<<<< HEAD
        description="Access our comprehensive collection of white papers covering AI, quantum computing, cybersecurity, and emerging technologies."
=======
        description="Access our comprehensive collection of white papers covering AI, quantum computing, cybersecurity, digital twin technology, and more. Download expert insights and research."
>>>>>>> origin/clean-merge-website-fixes
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container-responsive">
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Research & Insights
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              White Papers &
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Research
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Deep dive into cutting-edge technology research, industry insights, and practical implementation guides. 
              Our white papers provide comprehensive analysis and actionable strategies for modern businesses.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <FileText className="w-5 h-5" />
                <span>{whitePapers.length} White Papers</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Download className="w-5 h-5" />
                <span>Free Downloads</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-5 h-5" />
                <span>Updated Monthly</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 border-b border-slate-700/50">
        <div className="container-responsive">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  category.active
                    ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                    : 'border-slate-600 text-gray-400 hover:border-slate-500 hover:text-gray-300'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured White Papers */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Research</h2>
            <p className="text-gray-400">Our most popular and impactful white papers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitePapers.filter(wp => wp.featured).map((paper) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${paper.color} mb-4`}>
                  <paper.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs font-medium rounded-full mb-3">
                    {paper.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {paper.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {paper.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{paper.author}</span>
                  <span>{new Date(paper.date).toLocaleDateString()}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Download className="w-4 h-4" />
                    <span>{paper.downloadCount.toLocaleString()}</span>
                  </div>
                  
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                    Download
                    <ArrowRight className="w-4 h-4" />
=======
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              White Papers & Research
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Access cutting-edge research and insights from our team of experts. 
              Download comprehensive white papers covering the latest developments in AI, 
              quantum computing, cybersecurity, and emerging technologies.
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search white papers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 ${
                  paper.featured ? 'ring-2 ring-cyan-400/50' : ''
                }`}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        paper.category === 'Artificial Intelligence' ? 'bg-purple-500/20 text-purple-300' :
                        paper.category === 'Quantum Computing' ? 'bg-blue-500/20 text-blue-300' :
                        paper.category === 'Cybersecurity' ? 'bg-green-500/20 text-green-300' :
                        paper.category === 'Digital Twin' ? 'bg-cyan-500/20 text-cyan-300' :
                        paper.category === 'Healthcare AI' ? 'bg-red-500/20 text-red-300' :
                        'bg-orange-500/20 text-orange-300'
                      }`}>
                        {paper.category}
                      </span>
                      {paper.featured && (
                        <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-medium text-white">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {paper.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {paper.description}
                  </p>

                  {/* Abstract */}
                  <div className="mb-4">
                    <p className="text-gray-400 text-sm line-clamp-3">
                      {paper.abstract}
                    </p>
                  </div>

                  {/* Key Topics */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-cyan-400 mb-2">Key Topics:</h4>
                    <ul className="space-y-1">
                      {paper.keyTopics.slice(0, 3).map((topic, idx) => (
                        <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {paper.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {paper.date}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {paper.readTime}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      {paper.downloads.toLocaleString()} downloads
                    </span>
                    <span className="flex items-center gap-1">
                      <EyeIcon className="w-3 h-3" />
                      {paper.views.toLocaleString()} views
                    </span>
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={() => handleDownload(paper.id)}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download White Paper
>>>>>>> origin/clean-merge-website-fixes
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
<<<<<<< HEAD
        </div>
      </section>

      {/* All White Papers */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">All Research Papers</h2>
            <p className="text-gray-400">Complete collection of our research and insights</p>
          </div>
          
          <div className="space-y-6">
            {whitePapers.map((paper) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-slate-800/30 border border-slate-700/30 rounded-xl p-6 hover:border-slate-600/50 transition-all duration-300 hover:bg-slate-800/50"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${paper.color} flex items-center justify-center`}>
                    <paper.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-block px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs font-medium rounded-full">
                        {paper.category}
                      </span>
                      {paper.featured && (
                        <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-400/30">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {paper.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {paper.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(paper.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        {paper.downloadCount.toLocaleString()} downloads
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                      Download PDF
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Latest Research
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get notified when we publish new white papers and research insights. 
              Join thousands of professionals staying ahead of technology trends.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
=======

          {filteredPapers.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-lg">
                No white papers found matching your criteria.
              </div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-400/20 rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Latest Research
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get notified when we publish new white papers and research insights. 
              Join our community of technology professionals and researchers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Subscribe to Updates
              </button>
              <button className="border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-medium py-3 px-6 rounded-lg transition-all duration-300">
                Contact Our Research Team
              </button>
            </div>
>>>>>>> origin/clean-merge-website-fixes
          </motion.div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};

export default WhitePapers;
=======
}
>>>>>>> origin/clean-merge-website-fixes
