

import React, { useState } from 'react.ts';
import { FileText, Download, Search, Filter, Calendar, Clock, Users, Star, Eye, ArrowRight, BookOpen, Brain, Cloud, Shield, Database, Zap, Globe, Target, TrendingUp, Award              } from 'lucide-react.ts';
import SEO from '@/components/SEO';

export default function WhitePapers(...args: any[]): any {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Papers', icon: FileText, count: 45 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 12 },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, count: 8 },
    { id: 'security', name: 'Security & Compliance', icon: Shield, count: 10 },
    { id: 'data', name: 'Data & Analytics', icon: BarChart3, count: 7 },
    { id: 'digital', name: 'Digital Transformation', icon: Rocket, count: 5 },
    { id: 'industry', name: 'Industry Solutions', icon: Building2, count: 3 }
  ];

  const whitePapers = [
    {
      id: anyanyanyanyanyanyanyanyanyanyanyanyany1,
      title: 'AI Autonomous Research: Revolutionizing Business Intelligence',
      description: 'Comprehensive guide on implementing AI Autonomous Research Assistant systems that discover, analyze, and synthesize information across multiple sources autonomously.',
      category: 'ai-ml',
      author: 'Dr. Sarah Chen',
      publishDate: '2025-01-15',
      readTime: '45 min',
      downloads: 2847,
      rating: 4.8,
      featured: true,
      tags: ['AI', 'Enterprise', 'Automation', 'Machine Learning'],
      abstract: 'This comprehensive white paper examines the current state of AI adoption in enterprise environments and provides actionable insights for organizations looking to leverage artificial intelligence for competitive advantage.',
      keyInsights: [
        'AI adoption rates and success factors across industries',
        'Implementation strategies and best practices',
        'ROI analysis and business case development',
        'Future trends and emerging technologies'
      ]
    },
    {
      id: 2,
      title: 'Zero Trust Security Architecture: Implementation Guide',
      description: 'Learn about the principles of Zero Trust security and how to implement this comprehensive security model in your organization.',
      category: 'security',
      author: 'Michael Rodriguez',
      publishDate: '2025-01-10',
      readTime: '35 min',
      downloads: 1923,
      rating: 4.9,
      featured: true,
      tags: ['Security', 'Zero Trust', 'Cybersecurity', 'Compliance'],
      abstract: 'This white paper provides a detailed implementation guide for Zero Trust security architecture, covering design principles, deployment strategies, and best practices for modern organizations.',
      keyInsights: [
        'Core principles of Zero Trust security',
        'Implementation roadmap and phases',
        'Technology requirements and tools',
        'Compliance and audit considerations'
      ]
    },
    {
      id: 3,
      title: 'Cloud-Native Application Development: Best Practices',
      description: 'Discover the essential practices for building scalable, resilient applications in cloud environments using modern development methodologies.',
      category: 'cloud',
      author: 'Jennifer Kim',
      publishDate: '2025-01-08',
      readTime: '40 min',
      downloads: 1567,
      rating: 4.7,
      featured: false,
      tags: ['Cloud', 'Development', 'Microservices', 'DevOps'],
      abstract: 'This paper explores cloud-native application development practices, including microservices architecture, containerization, and DevOps integration for modern software development.',
      keyInsights: [
        'Microservices design patterns and principles',
        'Container orchestration strategies',
        'CI/CD pipeline optimization',
        'Monitoring and observability best practices'
      ]
    },
    {
      id: 4,
      title: 'Data-Driven Decision Making: Analytics Framework',
      description: 'Learn how to build a comprehensive analytics framework that enables data-driven decision making across your organization.',
      category: 'data',
      author: 'David Thompson',
      publishDate: '2025-01-05',
      readTime: '50 min',
      downloads: 1342,
      rating: 4.6,
      featured: false,
      tags: ['Analytics', 'Data', 'Decision Making', 'Business Intelligence'],
      abstract: 'This white paper presents a comprehensive framework for implementing data-driven decision making, covering data collection, analysis, visualization, and organizational change management.',
      keyInsights: [
        'Data governance and quality management',
        'Analytics tool selection and implementation',
        'Change management and cultural transformation',
        'Performance measurement and optimization'
      ]
    },
    {
      id: 5,
      title: 'Digital Transformation in Healthcare: Technology Trends',
      description: 'Explore the latest technology trends transforming healthcare delivery and patient care in the digital age.',
      category: 'industry',
      author: 'Dr. Emily Watson',
      publishDate: '2024-12-28',
      readTime: '55 min',
      downloads: 987,
      rating: 4.8,
      featured: false,
      tags: ['Healthcare', 'Digital Health', 'Technology', 'Innovation'],
      abstract: 'This paper examines the digital transformation of healthcare, covering emerging technologies, implementation challenges, and future trends in patient care and healthcare delivery.',
      keyInsights: [
        'Emerging healthcare technologies',
        'Implementation challenges and solutions',
        'Patient experience and engagement',
        'Regulatory compliance considerations'
      ]
    },
    {
      id: 6,
      title: 'Machine Learning Operations (MLOps): Enterprise Guide',
      description: 'Learn how to implement MLOps practices to streamline machine learning model development, deployment, and monitoring in enterprise environments.',
      category: 'ai-ml',
      author: 'Alex Johnson',
      publishDate: '2024-12-20',
      readTime: '60 min',
      downloads: 1123,
      rating: 4.7,
      featured: false,
      tags: ['MLOps', 'Machine Learning', 'DevOps', 'AI Operations'],
      abstract: 'This comprehensive guide covers MLOps implementation strategies, tools, and best practices for organizations looking to scale their machine learning operations.',
      keyInsights: [
        'MLOps principles and methodologies',
        'Tool selection and integration',
        'Model lifecycle management',
        'Performance monitoring and optimization'
      ]
    },
    {
      id: 7,
      title: 'Edge Computing: Transforming IoT and Mobile Applications',
      description: 'Discover how edge computing is revolutionizing IoT deployments and mobile applications through distributed computing architectures.',
      category: 'cloud',
      author: 'Rachel Green',
      publishDate: '2024-12-15',
      readTime: '42 min',
      downloads: 876,
      rating: 4.5,
      featured: false,
      tags: ['Edge Computing', 'IoT', 'Mobile', 'Distributed Systems'],
      abstract: 'This white paper explores edge computing technologies and their applications in IoT and mobile computing, providing implementation guidance for modern applications.',
      keyInsights: [
        'Edge computing architectures and models',
        'IoT integration strategies',
        'Performance optimization techniques',
        'Security and privacy considerations'
      ]
    },
    {
      id: 8,
      title: 'Edge Computing and IoT: Building the Connected Future',
      category: 'digital-transformation',
      author: 'Alex Thompson, Director of Cloud Operations',
      publishDate: '2023-06-18',
      downloads: 1567,
      views: 7100,
      summary: 'Comprehensive guide to edge computing and IoT implementation strategies for enterprise environments.',
      tags: ['Edge Computing', 'IoT', 'Enterprise', 'Digital Transformation'],
      fileSize: '3.3 MB',
      format: 'PDF',
      downloadUrl: '/white-papers/edge-computing-iot-enterprise-2023.pdf',
      readMore: '/white-papers/edge-computing-iot-enterprise-2023';
    };
  ];

  // Calculate category counts
  React.useEffect(()               => {
    const categoryCounts = categories.map(cat => ({
      ...cat,;
      count: cat.id === 'all' ? whitePapers.length: anyanyanyanyanyanyanyanyanyanyanyanyanywhitePapers.filter(wp               => wp.category === cat.id).length;
    }))}, []);

  const filteredWhitePapers = whitePapers.filter(paper => {;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
=======
      title: 'Digital Transformation ROI: Measuring Success in the Digital Age',
      description: 'Framework for measuring and maximizing return on investment in digital transformation initiatives.',
      category: 'strategy',
      author: 'David Thompson, Digital Strategy Director',
      publishDate: '2025-01-08',
      readTime: '22 min',
      downloads: 8930,
  const featuredInsights = [
    {
      title: 'AI Adoption Trends 2025',
      description: 'Key insights from our latest research on enterprise AI adoption',
      icon: <TrendingUp className="w-6 h-6" />,
      link: '/insights/ai-adoption-2025'
    },
    {
      title: 'Cybersecurity Landscape Report',
      description: 'Current threats and emerging security challenges',
      icon: <Shield className="w-6 h-6" />,
      link: '/insights/cybersecurity-2025'
    },;
    {;
      title: 'Cloud Migration Success Stories',;
      description: 'Real-world examples of successful cloud transformations',;
      icon: <Cloud className="w-6 h-6" />,;
      link: '/insights/cloud-success-stories';
    };
  ];

  const getCategoryCount = (categoryId: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {;
    if (categoryId === 'all') {;
      return whitePapers.length;

    return whitePapers.filter(paper => paper.category === categoryId).length;
  };

  // Update counts
  categories.forEach(cat = > {;
    cat.count = getCategoryCount(cat.id);
  });

  const filteredPapers = whitePapers.filter(paper => {;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedPapers = [...filteredPapers].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'popular':
        return b.downloads - a.downloads;
      case 'rating':
        return b.rating - a.rating;
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Download our comprehensive white papers and research on AI, cybersecurity, cloud computing, and emerging technologies."
      />
      ;
=======;
  const formatDate = (dateString: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {;
    return new Date(dateString).toLocaleDateString('en-US', {;
      year: 'numeric',;
      month: 'long',;
      day: 'numeric';
    });
  };

  const formatDownloads = (downloads: anyanyanyanyanyanyanyanyanyanyanyanyanynumber)              => {;
    if (downloads >= 1000000) {;
      return (downloads / 1000000).toFixed(1) + 'M';
    } else if (downloads >= 1000) {
      return (downloads / 1000).toFixed(1) + 'K';

    return downloads.toString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark to-zion-purple opacity-20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <FileText className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 
            initial = {
  { opacity: 0,
  y: 20 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition = {
  { duration: 0.6,
  delay: 0.1 

}}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            White Papers & Research
          </motion.h1>
          <motion.p 
            initial = {
  { opacity: 0,
  y: 20 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition = {
  { duration: 0.6,
  delay: 0.2 

}}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-12"
          >
            Access our latest research, insights, and technical expertise on cutting-edge 
            technologies that are shaping the future of business.
          </motion.p>
          
          {/* Stats */}
          <motion.div 
            initial = {
  { opacity: 0,
  y: 20 

}}
            animate = {
  { opacity: 1,
  y: 0 

}}
            transition = {
  { duration: 0.6,
  delay: 0.3 

}}
            className="grid grid-cols-2 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index)               => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Research-Based</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Free Downloads</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search white papers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

              {/* Sort Options */}
              <div className="flex items-center gap-2">
                <span className="text-zion-slate-light">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-zion-slate border border-zion-slate-light rounded-lg px-3 py-2 text-white focus: anyanyanyanyanyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-zion-cyan"

                  {sortOptions.map((option)              => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Featured Insights */}
      <div className="py-12 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Featured Insights
          </h2>
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-3 gap-6 max-w-4xl mx-auto">
            {featuredInsights.map((insight, index)              => (
              <div
                key={index}
                className="bg-zion-slate border border-zion-slate-light rounded-lg p-6 hover:shadow-lg transition-shadow"

      {/* White Papers Grid/List */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {sortedPapers.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            {sortedPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className={`bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl overflow-hidden hover:border-zion-cyan/30 transition-all duration-300 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {viewMode === 'grid' ? (
                  // Grid View
                  <div className="p-6">
                    {paper.featured && (
                      <div className="inline-block bg-zion-cyan text-zion-slate-dark px-3 py-1 rounded-full text-xs font-medium mb-4">
                        Featured
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2 text-zinc-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(paper.publishDate)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-zinc-300">{paper.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {paper.title}
                    </h3>
                    
                    <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                      {paper.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-zinc-700/50 text-zinc-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-zinc-500 mb-4">
                      <span className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{paper.author}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{paper.readTime}</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-400">
                        {paper.downloads.toLocaleString()} downloads
                      </span>
                      <button
                        onClick={() => handleDownload(paper.id, paper.title)}
                        className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center space-x-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  // List View
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        {paper.featured && (
                          <div className="inline-block bg-zion-cyan text-zion-slate-dark px-3 py-1 rounded-full text-xs font-medium mb-3">
                            Featured
                          </div>
                        )}
                        
                        <h3 className="text-xl font-bold text-white mb-2">
                          {paper.title}
                        </h3>
                        
                        <p className="text-zinc-400 text-sm mb-3 line-clamp-2">
                          {paper.description}
                        </p>

                        <div className="flex items-center space-x-6 text-sm text-zinc-500 mb-3">
                          <span className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{paper.author}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(paper.publishDate)}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{paper.readTime}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{paper.downloads.toLocaleString()} downloads</span>
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {paper.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-zinc-700/50 text-zinc-300 text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col items-end space-y-3 ml-6">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-zinc-300">{paper.rating}</span>
                        </div>
                        
                        <button
                          onClick={() => handleDownload(paper.id, paper.title)}
                          className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center space-x-2"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center py-16"
          >
            <FileText className="w-16 h-16 text-zinc-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No white papers found</h3>
            <p className="text-zinc-400 mb-6">
              Try adjusting your search terms or browse all categories
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-zion-cyan text-zion-slate-dark px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Featured Papers Section */}
      {sortedPapers.filter(p => p.featured).length > 0 && (
        <div className="bg-zinc-800/30 border-t border-zinc-700/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Featured White Papers
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Our most popular and highly-rated research papers, handpicked for their insights and value.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {sortedPapers.filter(p => p.featured).map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="bg-zinc-800/50 backdrop-blur-sm border border-zion-cyan/30 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-zion-cyan/20 rounded-xl flex items-center justify-center">
                      <FileText className="w-8 h-8 text-zion-cyan" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-lg font-bold text-white">{paper.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {paper.title}
                  </h3>
                  
                  <p className="text-zinc-300 text-lg mb-6">
                    {paper.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <h4 className="text-lg font-semibold text-zion-cyan">Key Insights:</h4>
                    <ul className="space-y-2">
                      {paper.keyInsights.slice(0, 3).map((insight, insightIndex) => (
                        <li key={insightIndex} className="flex items-start space-x-3 text-zinc-300">
                          <CheckCircle className="w-5 h-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-zinc-400">
                      <div>By {paper.author}</div>
                      <div>{formatDate(paper.publishDate)} • {paper.readTime}</div>
                    </div>
                    <button
                      onClick={() => handleDownload(paper.id, paper.title)}
                      className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Now</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* White Papers Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            White Papers Library
          </h2>

          {filteredPapers.length > 0 ? (
            <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2 gap-8 max-w-6xl mx-auto">
              {filteredPapers.map((paper)              => (
                <div
                  key={paper.id}
                  className={`bg-zion-slate border border-zion-slate-light rounded-lg p-6 hover:shadow-lg transition-shadow ${
                    paper.featured ? 'ring-2 ring-zion-cyan' : ''
                  }`}

                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-zion-slate-light bg-zion-slate-light/20 px-2 py-1 rounded-full">
                        {categories.find(c => c.id === paper.category)?.name}
                      </span>
                      {paper.featured && (
                        <span className="px-2 py-1 bg-zion-cyan text-zion-slate-dark rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <Calendar className="w-4 h-4" />
                      {formatDate(paper.publishDate)}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 line-clamp-2">
                    {paper.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-slate-400 mb-4">
                    <span>By {paper.author}</span>
                    <span>•</span>
                    <time>{new Date(paper.publishDate).toLocaleDateString()}</time>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  {paper.summary}
                </p>

                {/* Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* File Info */}
                <div className="flex items-center justify-between mb-6 text-sm text-slate-400">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <FileText className="w-4 h-4" />
                      <span>{paper.format}</span>
                    </span>
                    <span>{paper.fileSize}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                  <a 
                    href={paper.readMore}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                  
                  <a 
                    href={paper.downloadUrl}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredWhitePapers.length === 0 && (
            <motion.div
              initial = {
  { opacity: 0,
  y: 20 

}}
              animate = {
  { opacity: 1,
  y: 0 

}}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-slate-700/50 rounded-full flex items-center justify-center">
                <Search className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No white papers found</h3>
              <p className="text-slate-400">Try adjusting your filters or search terms</p>
            </motion.div>
          )}
        </div>
      </section>

