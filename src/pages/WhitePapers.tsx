

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Download, Search, Filter, Calendar, User, 
  Eye, Star, Tag, ArrowRight, BookOpen, Brain, Shield,
  Cloud, Zap, Globe, TrendingUp, Clock, Users
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function WhitePapers() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const whitePaperCategories = [
    { id: 'all', name: 'All White Papers', count: 18 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 6 },
    { id: 'quantum', name: 'Quantum Computing', count: 3 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 4 },
    { id: 'business', name: 'Business Transformation', count: 3 },
    { id: 'technology', name: 'Emerging Technology', count: 2 }
  ];

  const whitePapers = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: A Comprehensive Guide to Implementation',
      description: 'This comprehensive white paper explores the current state of AI adoption in enterprise environments, providing detailed implementation strategies, best practices, and real-world case studies.',
      category: 'ai-ml',
      author: 'Dr. Emily Watson',
      authorRole: 'Chief AI Officer',
      publishDate: '2024-01-15',
      readTime: '45 min read',
      pages: 32,
      downloads: 2847,
      rating: 4.8,
      featured: true,
      image: '/white-papers/ai-enterprise-future.jpg',
      pdfUrl: '/white-papers/ai-enterprise-future-guide.pdf',
      tags: ['AI Implementation', 'Enterprise', 'Best Practices', 'Case Studies'],
      keyInsights: [
        'AI adoption strategies for large organizations',
        'ROI analysis and implementation timelines',
        'Change management and team training approaches',
        'Real-world success stories and lessons learned'
      ]
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Barriers to Commercial Adoption',
      description: 'An in-depth analysis of quantum computing's current capabilities, limitations, and practical applications for businesses. Includes roadmap for quantum-AI hybrid solutions.',
      category: 'quantum',
      author: 'Marcus Rodriguez',
      authorRole: 'Chief Technology Officer',
      publishDate: '2024-01-10',
      readTime: '38 min read',
      pages: 28,
      downloads: 2156,
      rating: 4.9,
      featured: true,
      image: '/white-papers/quantum-computing-barriers.jpg',
      pdfUrl: '/white-papers/quantum-computing-commercial-adoption.pdf',
      tags: ['Quantum Computing', 'Commercial Applications', 'AI Integration', 'Technology Roadmap'],
      keyInsights: [
        'Current quantum computing capabilities and limitations',
        'Commercial use cases and industry applications',
        'Integration strategies with existing AI systems',
        'Investment and adoption timeline recommendations'
      ]
    },
    {
      id: 3,
      title: 'AI-Powered Cybersecurity: The Next Generation of Threat Detection',
      description: 'Explore how artificial intelligence is revolutionizing cybersecurity through advanced threat detection, automated response systems, and predictive security analytics.',
      category: 'cybersecurity',
      author: 'David Kim',
      authorRole: 'Chief Security Officer',
      publishDate: '2024-01-08',
      readTime: '42 min read',
      pages: 35,
      downloads: 1987,
      rating: 4.7,
      featured: true,
      image: '/white-papers/ai-cybersecurity-threat-detection.jpg',
      pdfUrl: '/white-papers/ai-cybersecurity-threat-detection.pdf',
      tags: ['AI Security', 'Threat Detection', 'Cybersecurity', 'Predictive Analytics'],
      keyInsights: [
        'AI-powered threat detection methodologies',
        'Automated incident response systems',
        'Predictive security analytics implementation',
        'Integration with existing security infrastructure'
      ]
    },
    {
      id: 4,
      title: 'Digital Transformation in the Age of AI: A Strategic Framework',
      description: 'A strategic framework for implementing digital transformation initiatives in organizations of all sizes, with AI as the central driver of innovation and efficiency.',
      category: 'business',
      author: 'Lisa Thompson',
      authorRole: 'Chief Financial Officer',
      publishDate: '2024-01-05',
      readTime: '35 min read',
      pages: 26,
      downloads: 1654,
      rating: 4.6,
      featured: false,
      image: '/white-papers/digital-transformation-ai.jpg',
      pdfUrl: '/white-papers/digital-transformation-ai-framework.pdf',
      tags: ['Digital Transformation', 'AI Strategy', 'Business Innovation', 'Strategic Framework'],
      keyInsights: [
        'Strategic framework for AI-driven transformation',
        'Change management and organizational readiness',
        'Investment prioritization and resource allocation',
        'Success metrics and measurement approaches'
      ]
    },
    {
      id: 5,
      title: 'Machine Learning for Business Intelligence: From Data to Insights',
      description: 'Practical guide to implementing machine learning solutions for business intelligence, including data preparation, model selection, and deployment strategies.',
      category: 'ai-ml',
      author: 'Alex Johnson',
      authorRole: 'Head of Research & Development',
      publishDate: '2024-01-03',
      readTime: '40 min read',
      pages: 30,
      downloads: 1432,
      rating: 4.5,
      featured: false,
      image: '/white-papers/ml-business-intelligence.jpg',
      pdfUrl: '/white-papers/ml-business-intelligence-guide.pdf',
      tags: ['Machine Learning', 'Business Intelligence', 'Data Analytics', 'Implementation'],
      keyInsights: [
        'Data preparation and quality assurance',
        'Model selection and evaluation criteria',
        'Deployment and monitoring strategies',
        'ROI measurement and optimization techniques'
      ]
    },
    {
      id: 6,
      title: 'Edge Computing and IoT: Enabling the Smart Enterprise',
      description: 'Comprehensive analysis of edge computing and IoT technologies for enterprise applications, including architecture design and implementation strategies.',
      category: 'technology',
      author: 'Marcus Rodriguez',
      authorRole: 'Chief Technology Officer',
      publishDate: '2023-12-28',
      readTime: '36 min read',
      pages: 29,
      downloads: 1287,
      rating: 4.4,
      featured: false,
      image: '/white-papers/edge-computing-iot.jpg',
      pdfUrl: '/white-papers/edge-computing-iot-enterprise.pdf',
      tags: ['Edge Computing', 'IoT', 'Enterprise Architecture', 'Smart Systems'],
      keyInsights: [
        'Edge computing architecture design principles',
        'IoT integration strategies and protocols',
        'Security and privacy considerations',
        'Scalability and performance optimization'
      ]
    },
    {
      id: 7,
      title: 'AI Ethics and Responsible Development: A Business Perspective',
      description: 'Essential guide to implementing ethical AI practices in business environments, covering bias detection, transparency, and responsible AI governance.',
      category: 'ai-ml',
      author: 'Dr. Emily Watson',
      authorRole: 'Chief AI Officer',
      publishDate: '2023-12-25',
      readTime: '33 min read',
      pages: 24,
      downloads: 1156,
      rating: 4.8,
      featured: false,
      image: '/white-papers/ai-ethics-business.jpg',
      pdfUrl: '/white-papers/ai-ethics-business-perspective.pdf',
      tags: ['AI Ethics', 'Responsible AI', 'Bias Detection', 'AI Governance'],
      keyInsights: [
        'Ethical AI framework and principles',
        'Bias detection and mitigation strategies',
        'Transparency and explainability requirements',
        'Governance and compliance frameworks'
      ]
    },
    {
      id: 8,
      title: 'Cloud-Native AI: Building Scalable Machine Learning Platforms',
      description: 'Technical deep-dive into building scalable AI platforms using cloud-native technologies, including architecture patterns and deployment strategies.',
      category: 'technology',
      author: 'Alex Johnson',
      authorRole: 'Head of Research & Development',
      publishDate: '2023-12-20',
      readTime: '44 min read',
      pages: 31,
      downloads: 987,
      rating: 4.3,
      featured: false,
      image: '/white-papers/cloud-native-ai.jpg',
      pdfUrl: '/white-papers/cloud-native-ai-platforms.pdf',
      tags: ['Cloud Native', 'AI Platforms', 'Scalability', 'Architecture'],
      keyInsights: [
        'Cloud-native AI architecture patterns',
        'Scalability and performance optimization',
        'Deployment and orchestration strategies',
        'Cost optimization and resource management'
      ]
    }
  ];

  const filteredWhitePapers = whitePapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="White Papers - Zion Tech Group"
        description="Access our comprehensive white papers on AI, quantum computing, cybersecurity, and business transformation. In-depth research and technical insights from industry experts."
        keywords="white papers, research, AI, quantum computing, cybersecurity, business transformation, Zion Tech Group"
        canonicalUrl="https://ziontechgroup.com/white-papers"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              White <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Papers</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Access our comprehensive research and technical insights on AI, quantum computing, cybersecurity, and business transformation. Download in-depth white papers written by industry experts.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search white papers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {whitePaperCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured White Papers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured White Papers
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most popular and comprehensive research documents on cutting-edge technology topics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {whitePapers.filter(paper => paper.featured).map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                    Featured
                  </span>
                  <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                    {whitePaperCategories.find(cat => cat.id === paper.category)?.name}
                  </span>
                  <span className="text-gray-400 text-sm">{paper.pages} pages</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 hover:text-blue-400 transition-colors cursor-pointer">
                  {paper.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {paper.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{paper.author}</p>
                      <p className="text-gray-400 text-xs">{paper.authorRole}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      {formatDate(paper.publishDate)}
                    </span>
                    <span className="text-gray-400">
                      <Clock className="w-4 h-4 inline mr-2" />
                      {paper.readTime}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                      <Download className="w-4 h-4 inline mr-2" />
                      {paper.downloads.toLocaleString()} downloads
                    </span>
                    <span className="text-yellow-400 font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {paper.rating}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {paper.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={paper.pdfUrl}
                    download
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All White Papers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All White Papers
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse our complete collection of research documents and technical insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWhitePapers.filter(paper => !paper.featured).map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                    {whitePaperCategories.find(cat => cat.id === paper.category)?.name}
                  </span>
                  <span className="text-gray-400 text-sm">{paper.pages} pages</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 hover:text-blue-400 transition-colors cursor-pointer line-clamp-2">
                  {paper.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3">
                  {paper.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{paper.author}</p>
                      <p className="text-gray-400 text-xs">{paper.authorRole}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      {formatDate(paper.publishDate)}
                    </span>
                    <span className="text-gray-400">
                      <Clock className="w-4 h-4 inline mr-2" />
                      {paper.readTime}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                      <Download className="w-4 h-4 inline mr-2" />
                      {paper.downloads.toLocaleString()} downloads
                    </span>
                    <span className="text-yellow-400 font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {paper.rating}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {paper.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={paper.pdfUrl}
                    download
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredWhitePapers.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-400 text-lg">No white papers found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Key Insights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What You'll Learn
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our white papers provide actionable insights and practical knowledge for technology leaders and decision-makers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI Strategy',
                description: 'Comprehensive AI implementation strategies and best practices for enterprise environments.'
              },
              {
                icon: Shield,
                title: 'Security Insights',
                description: 'Advanced cybersecurity approaches and AI-powered threat detection methodologies.'
              },
              {
                icon: Cloud,
                title: 'Technology Trends',
                description: 'Analysis of emerging technologies and their business applications and implications.'
              },
              {
                icon: TrendingUp,
                title: 'Business Impact',
                description: 'ROI analysis and business transformation strategies driven by technology innovation.'
              }
            ].map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <insight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{insight.title}</h3>
                <p className="text-gray-300 leading-relaxed">{insight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Informed</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get notified when we publish new white papers and research documents. Stay ahead of technology trends.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
