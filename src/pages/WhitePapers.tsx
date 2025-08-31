

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Search, Filter, Download, ExternalLink, 
  Calendar, User, Tag, ArrowRight, Star, Eye,
  BookOpen, Brain, Cloud, Shield, TrendingUp,
  Building, Globe, Zap, Clock, Users, CheckCircle
} from 'lucide-react';

export default function WhitePapers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const whitePaperCategories = [
    { id: 'all', name: 'All Papers', icon: FileText, color: 'from-blue-500 to-purple-500' },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, color: 'from-green-500 to-emerald-500' },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud, color: 'from-cyan-500 to-blue-500' },
    { id: 'security', name: 'Cybersecurity', icon: Shield, color: 'from-red-500 to-orange-500' },
    { id: 'data', name: 'Data & Analytics', icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
    { id: 'business', name: 'Business & Strategy', icon: Building, color: 'from-yellow-500 to-orange-500' }
  ];

  const industryFilters = [
    { id: 'all', name: 'All Industries' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'finance', name: 'Financial Services' },
    { id: 'retail', name: 'Retail & E-commerce' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'government', name: 'Government' }
  ];

  const whitePapers = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: A Comprehensive Guide to Implementation',
      description: 'This white paper explores the transformative potential of artificial intelligence in enterprise environments, providing practical insights for successful AI adoption and implementation strategies.',
      author: 'Dr. Emily Watson',
      authorRole: 'Chief AI Officer',
      category: 'ai-ml',
      industries: ['healthcare', 'finance', 'manufacturing'],
      publishDate: '2024-01-15',
      readTime: '25 min',
      downloads: 1247,
      views: 3456,
      featured: true,
      tags: ['AI', 'Enterprise', 'Implementation', 'Strategy'],
      abstract: 'Artificial Intelligence is revolutionizing how enterprises operate, compete, and deliver value to customers. This comprehensive guide examines the current state of AI adoption, identifies key success factors, and provides a roadmap for organizations looking to harness AI\'s transformative power.',
      keyInsights: [
        'AI adoption increases operational efficiency by 40-60%',
        'Successful AI implementation requires cultural change management',
        'Data quality and governance are critical success factors',
        'ROI typically achieved within 12-18 months of deployment'
      ]
    },
    {
      id: 2,
      title: 'Zero Trust Security Architecture: Building Resilient Digital Infrastructure',
      description: 'A deep dive into Zero Trust security principles and their application in modern enterprise environments, with practical implementation guidance and case studies.',
      author: 'David Kim',
      authorRole: 'Chief Security Officer',
      category: 'security',
      industries: ['finance', 'government', 'healthcare'],
      publishDate: '2024-01-10',
      readTime: '30 min',
      downloads: 892,
      views: 2341,
      featured: true,
      tags: ['Security', 'Zero Trust', 'Architecture', 'Compliance'],
      abstract: 'In an era of sophisticated cyber threats and distributed workforces, traditional security models are no longer sufficient. Zero Trust security architecture provides a comprehensive framework for protecting digital assets in today\'s complex threat landscape.',
      keyInsights: [
        'Zero Trust reduces security incidents by 60-80%',
        'Implementation requires organizational and technical changes',
        'Continuous monitoring and adaptive policies are essential',
        'Compliance frameworks increasingly require Zero Trust principles'
      ]
    },
    {
      id: 3,
      title: 'Cloud-Native Transformation: Strategies for Modern Application Development',
      description: 'Explore the benefits and challenges of cloud-native application development, with practical strategies for migration and best practices for success.',
      author: 'Michael Rodriguez',
      authorRole: 'Chief Technology Officer',
      category: 'cloud',
      industries: ['retail', 'finance', 'manufacturing'],
      publishDate: '2024-01-05',
      readTime: '20 min',
      downloads: 756,
      views: 1892,
      featured: false,
      tags: ['Cloud', 'Microservices', 'DevOps', 'Transformation'],
      abstract: 'Cloud-native development represents a fundamental shift in how applications are built, deployed, and managed. This paper examines the key principles, technologies, and strategies that enable organizations to fully leverage cloud capabilities.',
      keyInsights: [
        'Cloud-native applications scale 10x more efficiently',
        'Microservices architecture improves development velocity',
        'DevOps practices are essential for cloud-native success',
        'Cost optimization requires careful resource management'
      ]
    },
    {
      id: 4,
      title: 'Data-Driven Decision Making: Transforming Business Intelligence with AI',
      description: 'Learn how organizations are leveraging AI-powered analytics to transform business intelligence and drive data-driven decision making across all levels.',
      author: 'Dr. Emily Watson',
      authorRole: 'Chief AI Officer',
      category: 'data',
      industries: ['retail', 'finance', 'healthcare'],
      publishDate: '2023-12-20',
      readTime: '22 min',
      downloads: 634,
      views: 1567,
      featured: false,
      tags: ['Data Analytics', 'Business Intelligence', 'AI', 'Decision Making'],
      abstract: 'The combination of big data and artificial intelligence is revolutionizing how organizations make decisions. This paper explores the latest developments in AI-powered analytics and their practical applications in business intelligence.',
      keyInsights: [
        'AI-powered analytics improve decision accuracy by 30-50%',
        'Real-time data processing enables faster response times',
        'Predictive analytics reduce operational risks',
        'Data democratization increases organizational agility'
      ]
    },
    {
      id: 5,
      title: 'Digital Transformation in Healthcare: AI, Security, and Patient Outcomes',
      description: 'A comprehensive analysis of digital transformation in healthcare, focusing on AI applications, security challenges, and their impact on patient care and outcomes.',
      author: 'Dr. Sarah Chen',
      authorRole: 'Chief Executive Officer',
      category: 'business',
      industries: ['healthcare'],
      publishDate: '2023-12-15',
      readTime: '28 min',
      downloads: 445,
      views: 1234,
      featured: false,
      tags: ['Healthcare', 'Digital Transformation', 'AI', 'Patient Care'],
      abstract: 'Healthcare is undergoing a digital revolution that promises to improve patient outcomes, reduce costs, and enhance the overall quality of care. This paper examines the key technologies and strategies driving this transformation.',
      keyInsights: [
        'AI diagnostics improve accuracy by 20-30%',
        'Digital health reduces administrative costs by 25%',
        'Patient engagement increases with digital tools',
        'Security and privacy are paramount concerns'
      ]
    },
    {
      id: 6,
      title: 'Sustainable Technology: Green Computing in the Enterprise',
      description: 'Explore how organizations are implementing sustainable technology practices to reduce environmental impact while maintaining operational efficiency.',
      author: 'Lisa Thompson',
      authorRole: 'VP of Engineering',
      category: 'business',
      industries: ['manufacturing', 'retail', 'government'],
      publishDate: '2023-12-10',
      readTime: '18 min',
      downloads: 389,
      views: 987,
      featured: false,
      tags: ['Sustainability', 'Green Computing', 'Energy Efficiency', 'ESG'],
      abstract: 'Sustainability is no longer optional for enterprises. This paper examines how organizations are implementing green computing practices to reduce their environmental footprint while improving operational efficiency.',
      keyInsights: [
        'Green computing reduces energy costs by 20-40%',
        'Sustainable practices improve brand reputation',
        'Regulatory requirements drive adoption',
        'ROI typically achieved within 2-3 years'
      ]
    }
  ];

  const featuredPapers = whitePapers.filter(paper => paper.featured);
  const regularPapers = whitePapers.filter(paper => !paper.featured);

  const filteredPapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    const matchesIndustry = selectedIndustry === 'all' || paper.industries.includes(selectedIndustry);
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesIndustry && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const cat = whitePaperCategories.find(c => c.id === category);
    return cat ? cat.color : 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">White Papers</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              In-depth research, technical insights, and industry analysis from our team of experts
            </p>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <FileText className="w-5 h-5" />
              <span>Research & Analysis</span>
              <span>•</span>
              <Brain className="w-5 h-5" />
              <span>Expert Insights</span>
              <span>•</span>
              <Download className="w-5 h-5" />
              <span>Free Downloads</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search white papers, topics, or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {whitePaperCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent'
                      : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Industry Filter */}
            <div className="flex flex-wrap gap-2">
              {industryFilters.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedIndustry === industry.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent'
                      : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/20'
                  }`}
                >
                  {industry.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured White Papers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Featured White Papers</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center">
              Our most popular and impactful research papers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">
                      Featured
                    </span>
                    <span className={`px-2 py-1 bg-gradient-to-r ${getCategoryColor(paper.category)} text-white rounded-full text-xs`}>
                      {whitePaperCategories.find(c => c.id === paper.category)?.name}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {paper.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{paper.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {paper.author} - {paper.authorRole}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(paper.publishDate)}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {paper.readTime} read
                      </span>
                      <span className="flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        {paper.downloads} downloads
                      </span>
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-2" />
                        {paper.views} views
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Key Insights:</h4>
                    <div className="space-y-2">
                      {paper.keyInsights.slice(0, 2).map((insight, insightIndex) => (
                        <div key={insightIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{insight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {paper.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All White Papers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 text-center">All White Papers</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center">
              Explore our complete collection of research and insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className={`px-2 py-1 bg-gradient-to-r ${getCategoryColor(paper.category)} text-white rounded-full text-xs`}>
                      {whitePaperCategories.find(c => c.id === paper.category)?.name}
                    </span>
                    {paper.featured && (
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {paper.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{paper.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {paper.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatDate(paper.publishDate)}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {paper.readTime}
                      </span>
                      <span className="flex items-center">
                        <Download className="w-3 h-3 mr-1" />
                        {paper.downloads}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {paper.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                    Download Paper
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPapers.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <FileText className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No white papers found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Our Research
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get notified when we publish new white papers and research insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                <Download className="w-5 h-5 mr-2" />
                Subscribe to Updates
              </button>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <FileText className="w-5 h-5 mr-2" />
                Request Custom Research
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
