

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Eye, 
  Search, 
  Filter,
  Calendar,
  User,
  Tag,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Shield,
  Brain,
  Cloud,
  Lock
} from 'lucide-react';

const WhitePapers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: FileText },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'quantum', name: 'Quantum Computing', icon: TrendingUp },
    { id: 'healthcare', name: 'Healthcare Technology', icon: User },
    { id: 'fintech', name: 'Financial Technology', icon: TrendingUp },
    { id: 'sustainability', name: 'Green Technology', icon: TrendingUp }
  ];

  const years = ['all', '2025', '2024', '2023', '2022', '2021'];

  const whitePapers = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence: Transforming Decision Making in 2025',
      description: 'Explore how artificial intelligence is revolutionizing business intelligence and enabling data-driven decision making across industries.',
      category: 'ai-ml',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '15 min read',
      downloads: 1247,
      views: 3421,
      tags: ['AI', 'Business Intelligence', 'Data Analytics', 'Machine Learning'],
      downloadUrl: '/white-papers/ai-powered-business-intelligence-2025.pdf',
      readMore: '/white-papers/ai-powered-business-intelligence-2025',
      featured: true
    },
    {
      id: 2,
      title: 'Zero-Trust Security Architecture: The Future of Enterprise Security',
      description: 'Comprehensive guide to implementing zero-trust security principles in modern enterprise environments.',
      category: 'cybersecurity',
      author: 'Michael Rodriguez',
      date: '2024-11-20',
      readTime: '12 min read',
      downloads: 892,
      views: 2156,
      tags: ['Cybersecurity', 'Zero-Trust', 'Enterprise Security', 'Network Security'],
      downloadUrl: '/white-papers/zero-trust-security-architecture-2024.pdf',
      readMore: '/white-papers/zero-trust-security-architecture-2024'
    },
    {
      id: 3,
      title: 'Cloud FinOps Optimization: Maximizing ROI in Multi-Cloud Environments',
      description: 'Learn strategies for optimizing cloud costs and maximizing return on investment in complex multi-cloud architectures.',
      category: 'cloud',
      author: 'Jennifer Kim',
      date: '2024-09-10',
      readTime: '18 min read',
      downloads: 756,
      views: 1892,
      tags: ['Cloud Computing', 'FinOps', 'Cost Optimization', 'Multi-Cloud'],
      downloadUrl: '/white-papers/cloud-finops-optimization-2024.pdf',
      readMore: '/white-papers/cloud-finops-optimization-2024'
    },
    {
      id: 4,
      title: 'Digital Twin Technology: Revolutionizing Industrial Operations',
      description: 'Discover how digital twin technology is transforming manufacturing, healthcare, and infrastructure management.',
      category: 'ai-ml',
      author: 'Dr. Robert Thompson',
      date: '2024-07-25',
      readTime: '20 min read',
      downloads: 634,
      views: 1567,
      tags: ['Digital Twin', 'IoT', 'Manufacturing', 'Industry 4.0'],
      downloadUrl: '/white-papers/digital-twin-technology-2024.pdf',
      readMore: '/white-papers/digital-twin-technology-2024'
    },
    {
      id: 5,
      title: 'AI in Healthcare: Ethical Considerations and Implementation Guidelines',
      description: 'Critical analysis of ethical considerations and best practices for implementing AI solutions in healthcare.',
      category: 'healthcare',
      author: 'Dr. Emily Watson',
      date: '2024-06-15',
      readTime: '16 min read',
      downloads: 1123,
      views: 2987,
      tags: ['AI', 'Healthcare', 'Ethics', 'Medical Technology'],
      downloadUrl: '/white-papers/ai-healthcare-ethics-2024.pdf',
      readMore: '/white-papers/ai-healthcare-ethics-2024'
    },
    {
      id: 6,
      title: 'Quantum Computing and AI: The Next Frontier of Cryptography',
      description: 'Exploring the intersection of quantum computing and artificial intelligence in advancing cryptographic security.',
      category: 'quantum',
      author: 'Dr. Alex Kumar',
      date: '2024-05-08',
      readTime: '22 min read',
      downloads: 445,
      views: 1234,
      tags: ['Quantum Computing', 'AI', 'Cryptography', 'Security'],
      downloadUrl: '/white-papers/quantum-computing-ai-cryptography-2024.pdf',
      readMore: '/white-papers/quantum-computing-ai-cryptography-2024'
    },
    {
      id: 7,
      title: 'Sustainable Technology: Green IT Solutions for the Modern Enterprise',
      description: 'Comprehensive guide to implementing sustainable technology solutions that reduce environmental impact.',
      category: 'sustainability',
      author: 'Lisa Chang',
      date: '2024-04-12',
      readTime: '14 min read',
      downloads: 567,
      views: 1456,
      tags: ['Sustainability', 'Green IT', 'Environmental Impact', 'Enterprise'],
      downloadUrl: '/white-papers/sustainable-technology-green-it-2024.pdf',
      readMore: '/white-papers/sustainable-technology-green-it-2024'
    },
    {
      id: 8,
      title: 'Edge Computing and IoT: Enabling Real-Time Enterprise Intelligence',
      description: 'How edge computing and IoT are enabling real-time data processing and decision making in enterprise environments.',
      category: 'ai-ml',
      author: 'David Park',
      date: '2024-03-20',
      readTime: '17 min read',
      downloads: 678,
      views: 1678,
      tags: ['Edge Computing', 'IoT', 'Real-Time', 'Enterprise'],
      downloadUrl: '/white-papers/edge-computing-iot-enterprise-2024.pdf',
      readMore: '/white-papers/edge-computing-iot-enterprise-2024'
    }
  ];

  const filteredPapers = whitePapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || paper.date.startsWith(selectedYear);
    
    return matchesSearch && matchesCategory && matchesYear;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : FileText;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Unknown';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <FileText className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            White Papers &
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Research</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Access our latest research, insights, and technical documentation on emerging technologies, 
            industry trends, and innovative solutions.
          </motion.p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search white papers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
              
              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Year Filter */}
              <div>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year === 'all' ? 'All Years' : year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured White Paper */}
      {filteredPapers.filter(paper => paper.featured).length > 0 && (
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-8"
            >
              Featured Research
            </motion.h2>
            
            {filteredPapers.filter(paper => paper.featured).map(paper => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <getCategoryIcon categoryId={paper.category} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                        {getCategoryName(paper.category)}
                      </span>
                    </div>
                  </div>
                  <span className="text-cyan-400 text-sm font-medium">Featured</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{paper.title}</h3>
                <p className="text-gray-300 mb-6 text-lg">{paper.description}</p>
                
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {paper.author}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(paper.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    {paper.readTime}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {paper.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={paper.downloadUrl}
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download PDF
                  </a>
                  <Link
                    to={paper.readMore}
                    className="inline-flex items-center justify-center px-6 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                  >
                    <Eye className="w-5 h-5 mr-2" />
                    Read More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* White Papers Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-8"
          >
            All Research Papers ({filteredPapers.length})
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPapers.filter(paper => !paper.featured).map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <getCategoryIcon categoryId={paper.category} className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs text-gray-400 bg-slate-700 px-2 py-1 rounded">
                    {getCategoryName(paper.category)}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{paper.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{paper.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {paper.author}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(paper.date).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <span className="flex items-center">
                      <Download className="w-3 h-3 mr-1" />
                      {paper.downloads}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {paper.views}
                    </span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <a
                      href={paper.downloadUrl}
                      className="p-2 bg-slate-700 hover:bg-cyan-600 text-gray-300 hover:text-white rounded transition-colors"
                      title="Download PDF"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                    <Link
                      to={paper.readMore}
                      className="p-2 bg-slate-700 hover:bg-cyan-600 text-gray-300 hover:text-white rounded transition-colors"
                      title="Read More"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredPapers.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No white papers found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or filters.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated with Latest Research
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Get notified when we publish new white papers and research on emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Contact Our Research Team
              </Link>
              <Link
                to="/news"
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Latest News
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhitePapers;
