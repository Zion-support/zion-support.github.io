

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Download,
  FileText,
  Search,
  Filter,
  Calendar,
  User,
  Eye,
  Star,
  ArrowRight,
  Tag,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Zap,
  Brain,
  Server,
  Shield,
  Cloud,
  Target,
  Rocket,
  CheckCircle,
  BarChart3,
  Atom,
  Network,
  Lock,
  Cpu,
  Wifi,
  Satellite,
  Handshake,
  Video,
  GraduationCap,
  Globe,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Building2,
  Settings,
  Tool,
  Wrench,
  Cog,
  Key,
  Unlock,
  Eye as EyeIcon,
  EyeOff,
  Copy,
  Check,
  X,
  Plus,
  Minus,
  SortAsc,
  SortDesc,
  Grid,
  List,
  Bookmark,
  Share2,
  Heart,
  Download as DownloadIcon,
  Upload,
  RefreshCw,
  Save,
  Edit,
  Trash2,
  Archive,
  Hash,
  Hash as HashIcon,
  Hash as HashIcon2,
  Hash as HashIcon3,
  Hash as HashIcon4,
  Hash as HashIcon5,
  Hash as HashIcon6,
  Hash as HashIcon7,
  Hash as HashIcon8,
  Hash as HashIcon9,
  Hash as HashIcon10
} from 'lucide-react';

export default function WhitePapers() {
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
      id: 1,
      title: 'The Future of AI in Enterprise: A Comprehensive Guide',
      description: 'Explore how artificial intelligence is transforming business operations, from automation to decision-making, and discover implementation strategies for your organization.',
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
      title: 'Blockchain in Supply Chain: Transparency and Traceability',
      description: 'Learn how blockchain technology is revolutionizing supply chain management through enhanced transparency, traceability, and trust.',
      category: 'industry',
      author: 'Marcus Chen',
      publishDate: '2024-12-10',
      readTime: '48 min',
      downloads: 654,
      rating: 4.4,
      featured: false,
      tags: ['Blockchain', 'Supply Chain', 'Transparency', 'Traceability'],
      abstract: 'This paper examines blockchain applications in supply chain management, covering implementation strategies, use cases, and business benefits for modern organizations.',
      keyInsights: [
        'Blockchain fundamentals and applications',
        'Supply chain use cases and benefits',
        'Implementation challenges and solutions',
        'ROI analysis and business case development'
      ]
    }
  ];

  const filteredPapers = whitePapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleDownload = (paperId: number, title: string) => {
    // Simulate download
    console.log(`Downloading: ${title}`);
    // In a real app, this would trigger an actual download
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              White Papers
            </h1>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
              In-depth research, insights, and thought leadership on the latest technology trends, 
              industry developments, and innovative solutions from Zion Tech Group.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-zinc-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-zion-cyan" />
                <span>Expert Insights</span>
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
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                <option value="latest">Latest First</option>
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="title">Alphabetical</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex-1 px-4 py-3 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30'
                    : 'bg-zinc-700/50 text-zinc-400 border border-zinc-600 hover:bg-zinc-700/70'
                }`}
              >
                <Grid className="w-4 h-4 mx-auto" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex-1 px-4 py-3 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30'
                    : 'bg-zinc-700/50 text-zinc-400 border border-zinc-600 hover:bg-zinc-700/70'
                }`}
              >
                <List className="w-4 h-4 mx-auto" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Results Count */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-zinc-400"
        >
          Showing {sortedPapers.length} of {whitePapers.length} white papers
        </motion.div>
      </div>

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
      )}

      {/* CTA Section */}
      <div className="bg-zinc-800/30 border-t border-zinc-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Latest Research
            </h2>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Get notified when we publish new white papers and research insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zinc-700/50 border border-zinc-600 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
