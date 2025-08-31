

import React, { useState } from 'react.ts';
<<<<<<< HEAD
import { FileText, Download, Search, Filter, Calendar, Clock, Users, Star, Eye, ArrowRight, BookOpen, Brain, Cloud, Shield, Database, Zap, Globe, Target, TrendingUp, Award import { SEO          } from '@/components/SEO';
=======
import { FileText, Download, Search, Filter, Calendar, Clock, Users, Star, Eye, ArrowRight, BookOpen, Brain, Cloud, Shield, Database, Zap, Globe, Target, TrendingUp, Award          } from 'lucide-react.ts';
import SEO from '@/components/SEO';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

export default function WhitePapers(...args: any[]): any {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
<<<<<<< HEAD
    { id: 'all', name: 'All Categories', icon: BookOpen, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 0 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: 0 },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Rocket, count: 0 },
    { id: 'healthcare-tech', name: 'Healthcare Technology', icon: Heart, count: 0 },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: Zap, count: 0 },
    { id: 'sustainability', name: 'Sustainability & Green IT', icon: Globe, count: 0 }
=======
    { id: 'all', name: 'All Categories', icon: <FileText className="w-5 h-5" />, count: 0 },;
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" />, count: 8 },;
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: <Cloud className="w-5 h-5" />, count: 6 },;
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, count: 5 },;
    { id: 'data', name: 'Data & Analytics', icon: <Database className="w-5 h-5" />, count: 7 },;
    { id: 'emerging', name: 'Emerging Technologies', icon: <Zap className="w-5 h-5" />, count: 4 },;
    { id: 'strategy', name: 'Digital Strategy', icon: <Target className="w-5 h-5" />, count: 6 };
  ];

  const sortOptions = [;
    { value: 'newest', label: 'Newest First' },;
    { value: 'popular', label: 'Most Popular' },;
    { value: 'alphabetical', label: 'Alphabetical' },;
    { value: 'downloads', label: 'Most Downloaded' };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
  ];

  const whitePapers = [
    {
      id: anyanyanyanyanyanyanyanyany1,
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
      downloads: 2847,
      views: 12500,
      summary: 'Explore how artificial intelligence is revolutionizing business intelligence, from predictive analytics to automated decision-making systems.',
      tags: ['AI', 'Business Intelligence', 'Machine Learning', 'Analytics'],
      fileSize: '2.4 MB',
      format: 'PDF',
      downloadUrl: '/white-papers/ai-powered-business-intelligence-2024.pdf',
      readMore: '/white-papers/ai-powered-business-intelligence-2024'
    },
    {
      id: 7,
      title: 'Zero-Trust Security Architecture: A Comprehensive Guide',
      description: 'Deep dive into zero-trust security principles, implementation strategies, and best practices for modern organizations.',
      category: 'security',
      author: 'Michael Rodriguez, Chief Security Officer',
      publishDate: '2025-01-18',
      readTime: '30 min',
      downloads: 12890,
      rating: 4.8,
      featured: true,
      tags: ['Cybersecurity', 'Zero-Trust', 'Security Architecture', 'Best Practices'],
      coverImage: '/images/whitepapers/zero-trust-security.jpg',
      fileSize: '3.1 MB',
      format: 'PDF',
      downloadUrl: '/white-papers/zero-trust-security-architecture-2023.pdf',
      readMore: '/white-papers/zero-trust-security-architecture-2023'
    },
    {
      id: 3,
      title: 'Cloud FinOps: Optimizing Cloud Costs with AI and Automation',
      category: 'cloud-devops',
      author: 'Alex Thompson, Director of Cloud Operations',
      publishDate: '2023-11-28',
      downloads: 1678,
      views: 7200,
      summary: 'Learn how to implement FinOps practices to optimize cloud spending and improve operational efficiency.',
      tags: ['Cloud Computing', 'FinOps', 'Cost Optimization', 'DevOps'],
      fileSize: '2.8 MB',
      format: 'PDF',
      downloadUrl: '/white-papers/cloud-finops-optimization-2023.pdf',
      readMore: '/white-papers/cloud-finops-optimization-2023'
    },
    {
      id: 4,
      title: 'Digital Twin Technology: Transforming Manufacturing and Operations',
      category: 'digital-transformation',
      author: 'Dr. Emily Watson, VP of Healthcare Technology',
      publishDate: '2023-10-15',
      downloads: 1432,
      views: 6500,
      summary: 'Discover how digital twin technology is revolutionizing manufacturing, healthcare, and infrastructure management.',
      tags: ['Digital Twin', 'Manufacturing', 'IoT', 'Digital Transformation'],
      fileSize: '3.5 MB',
      format: 'PDF',
      downloadUrl: '/white-papers/digital-twin-technology-2023.pdf',
      readMore: '/white-papers/digital-twin-technology-2023'
    },
    {
      id: 5,
      title: 'AI in Healthcare: Ethical Considerations and Implementation Guidelines',
      category: 'healthcare-tech',
      author: 'Dr. Emily Watson, VP of Healthcare Technology',
      publishDate: '2023-09-20',
      downloads: 1890,
      views: 8200,
      summary: 'Comprehensive analysis of AI applications in healthcare, including ethical considerations and regulatory compliance.',
      tags: ['Healthcare AI', 'Ethics', 'Regulatory Compliance', 'Medical Technology'],
      fileSize: '2.9 MB',
      format: 'PDF',
      downloadUrl: '/white-papers/ai-healthcare-ethics-2023.pdf',
      readMore: '/white-papers/ai-healthcare-ethics-2023'
    },
    {
      id: 6,
<<<<<<< HEAD
      title: 'Quantum Computing: The Next Frontier in AI and Cryptography',
      category: 'quantum-computing',
      author: 'Dr. Sarah Chen, Chief AI Scientist',
      publishDate: '2023-08-12',
      downloads: 2341,
      views: 10500,
      summary: 'Explore the intersection of quantum computing, artificial intelligence, and cryptography.',
      tags: ['Quantum Computing', 'AI', 'Cryptography', 'Future Technology'],
      fileSize: '4.2 MB',
      format: 'PDF',
      downloadUrl: '/white-papers/quantum-computing-ai-cryptography-2023.pdf',
      readMore: '/white-papers/quantum-computing-ai-cryptography-2023'
    },
    {
      id: 7,
      title: 'Sustainable Technology: Green IT Solutions for the Modern Enterprise',
      category: 'sustainability',
      author: 'Priya Patel, Head of Data Science',
      publishDate: '2023-07-25',
      downloads: 1123,
      views: 5800,
      summary: 'Learn how to implement sustainable technology practices and reduce your organization\'s environmental impact.',
      tags: ['Sustainability', 'Green IT', 'Environmental Impact', 'Enterprise'],
      fileSize: '2.6 MB',
      format: 'PDF',
      downloadUrl: '/white-papers/sustainable-technology-green-it-2023.pdf',
      readMore: '/white-papers/sustainable-technology-green-it-2023'
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
  React.useEffect(()           => {
    const categoryCounts = categories.map(cat => ({
      ...cat,;
      count: cat.id === 'all' ? whitePapers.length: anyanyanyanyanyanyanyanyanywhitePapers.filter(wp           => wp.category === cat.id).length;
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
<<<<<<< HEAD
      rating: 4.5,
      featured: false,
      tags: ['Digital Transformation', 'ROI', 'Strategy', 'Measurement'],
      coverImage: '/images/whitepapers/digital-transformation-roi.jpg',
      fileSize: '2.2 MB',
      language: 'English'

=======
      rating: 4.5,;
      featured: false,;
      tags: ['Digital Transformation', 'ROI', 'Strategy', 'Measurement'],;
      coverImage: '/images/whitepapers/digital-transformation-roi.jpg',;
      fileSize: '2.2 MB',;
      language: 'English';
    };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

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
<<<<<<< HEAD
    },
    {
      title: 'Cloud Migration Success Stories',
      description: 'Real-world examples of successful cloud transformations',
      icon: <Cloud className="w-6 h-6" />,
      link: '/insights/cloud-success-stories'

=======
    },;
    {;
      title: 'Cloud Migration Success Stories',;
      description: 'Real-world examples of successful cloud transformations',;
      icon: <Cloud className="w-6 h-6" />,;
      link: '/insights/cloud-success-stories';
    };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  ];

  const getCategoryCount = (categoryId: anyanyanyanyanyanyanyanyanystring)          => {;
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
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = activeCategory === 'all' || paper.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

<<<<<<< HEAD
  const stats = [
    { label: 'White Papers Published', value: '25+', icon: FileText },
    { label: 'Total Downloads', value: '50K+', icon: Download },
    { label: 'Industry Recognition', value: '15+ Awards', icon: Award },;
    { label: 'Research Partners', value: '20+ Universities', icon: Users };
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Download our comprehensive white papers and research on AI, cybersecurity, cloud computing, and emerging technologies."
      />
      ;
=======;
  const formatDate = (dateString: anyanyanyanyanyanyanyanyanystring)          => {;
    return new Date(dateString).toLocaleDateString('en-US', {;
      year: 'numeric',;
      month: 'long',;
      day: 'numeric';
    });
  };

  const formatDownloads = (downloads: anyanyanyanyanyanyanyanyanynumber)          => {;
    if (downloads >= 1000000) {;
      return (downloads / 1000000).toFixed(1) + 'M';
    } else if (downloads >= 1000) {
      return (downloads / 1000).toFixed(1) + 'K';

    return downloads.toString();
  };

  return (
    <div className = "min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
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
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl mb-8"
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
            className="grid grid-cols-2 md: anyanyanyanyanyanyanyanyanygrid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index)           => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search white papers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
              />
            </div>

<<<<<<< HEAD
            {/* Categories and Sort */}
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeCategory === category.id
                        ? 'bg-zion-cyan text-zion-slate-dark'
                        : 'bg-zion-slate text-zion-slate-light hover:bg-zion-slate-light hover:text-white'
                    }`}

                    {category.icon}
                    {category.name}
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Sort Options */}
              <div className="flex items-center gap-2">
                <span className="text-zion-slate-light">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-zion-slate border border-zion-slate-light rounded-lg px-3 py-2 text-white focus: anyanyanyanyanyanyanyanyanyoutline-none focus:ring-2 focus:ring-zion-cyan"

                  {sortOptions.map((option)          => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Insights */}
      <div className="py-12 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Featured Insights
          </h2>
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanygrid-cols-3 gap-6 max-w-4xl mx-auto">
            {featuredInsights.map((insight, index)          => (
              <div
                key={index}
                className="bg-zion-slate border border-zion-slate-light rounded-lg p-6 hover:shadow-lg transition-shadow"

                <div className="text-zion-cyan mb-4">{insight.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{insight.title}</h3>
                <p className="text-zion-slate-light text-sm mb-4">{insight.description}</p>
                <a
                  href={insight.link}
                  className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium text-sm"

                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
=======
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-400 text-slate-900 shadow-lg shadow-cyan-400/30'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="ml-1 px-2 py-1 bg-slate-600 rounded-full text-xs">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

      {/* White Papers Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            White Papers Library
          </h2>

          {filteredPapers.length > 0 ? (
            <div className="grid grid-cols-1 lg: anyanyanyanyanyanyanyanyanygrid-cols-2 gap-8 max-w-6xl mx-auto">
              {filteredPapers.map((paper)          => (
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

<<<<<<< HEAD
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-zion-slate-light/20 text-zion-slate-light text-xs rounded-full"

=======
                {/* Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300">
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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

<<<<<<< HEAD
      {/* Featured Research */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <motion.h2 
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center mb-16 text-white"
          >
            Featured Research Areas
          </motion.h2>
          
          <div className="grid grid-cols-1 md: anyanyanyanyanyanyanyanyanygrid-cols-2 lg:grid-cols-4 gap-8">
            {categories.slice(1).map((category, index)           => (
              <motion.div
                key={category.id}
                initial = {
  { opacity: 0,
  y: 20 

}}
                whileInView = {
  { opacity: 1,
  y: 0 

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1 

}}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-slate-300 text-sm">
                  {whitePapers.filter(wp => wp.category === category.id).length} papers available
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 

}}
            whileInView = {
  { opacity: 1,
  y: 0 

}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Stay Updated with Our Research</h2>
            <p className="text-slate-300 mb-8">
              Get notified when we publish new white papers and research insights. 
              Join our community of technology professionals and thought leaders.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Research Team
              </a>
              <a 
                href="/blog"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Read Our Blog
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )}
=======
      {/* Subscribe to Updates */}
      <div className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Subscribe to receive notifications about new white papers, research updates, and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
            />
            <button className="bg-zion-cyan text-zion-slate-dark px-6 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors">;
              Subscribe;
            </button>;
          </div>;
        </div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
}}}}}}
=======
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
