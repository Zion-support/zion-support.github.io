import React from 'react';
import { SEO } from '../components/SEO';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  FileText, 
  Download, 
  Calendar, 
  User, 
  Eye, 
  ArrowRight,
  Search,
  Filter,
  Brain,
  Cloud,
  Shield,
  Rocket,
  Target,
  Star,
  TrendingUp,
  Award,
  BookOpen,
  ExternalLink
} from 'lucide-react';

export default function WhitePapers() {
  const [selectedCategory, setSelectedCategory] = 'all';
  const [selectedYear, setSelectedYear] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Rocket },
    { id: 'emerging-tech', name: 'Emerging Technologies', icon: TrendingUp }
  ];

  const years = [
    { id: 'all', name: 'All Years' },
    { id: '2024', name: '2024' },
    { id: '2023', name: '2023' },
    { id: '2022', name: '2022' },
    { id: '2021', name: '2021' }
  ];

  const whitePapers = [
    {
      id: 1,
      title: 'The Future of AI-Powered Business Intelligence: A Comprehensive Guide for Enterprise Leaders',
      author: 'Dr. Sarah Chen, CTO',
      date: '2024-01-15',
      category: 'ai-ml',
      summary: 'This comprehensive white paper explores the transformative potential of AI-powered business intelligence, examining current trends, implementation strategies, and future outlook for enterprise organizations.',
      keyInsights: [
        'AI-driven analytics can improve decision-making accuracy by up to 40%',
        'Real-time data processing reduces response time by 60%',
        'Predictive analytics can increase revenue by 15-25%',
        'Integration challenges and solutions for legacy systems'
      ],
      downloads: 2847,
      views: 12500,
      featured: true,
      fileSize: '2.8 MB',
      pages: 45,
      downloadUrl: '/downloads/ai-business-intelligence-whitepaper.pdf',
      tags: ['AI', 'Business Intelligence', 'Analytics', 'Enterprise']
    },
    {
      id: 2,
      title: 'Zero-Trust Security Architecture: Building Resilient Cybersecurity for the Modern Enterprise',
      author: 'Alex Kim, VP of Cybersecurity',
      date: '2024-01-10',
      category: 'cybersecurity',
      summary: 'A deep dive into zero-trust security principles, implementation strategies, and real-world case studies showing how organizations can achieve comprehensive protection against evolving cyber threats.',
      keyInsights: [
        'Zero-trust reduces security incidents by 80%',
        'Implementation roadmap for enterprise organizations',
        'Cost-benefit analysis of security investments',
        'Integration with existing security infrastructure'
      ],
      downloads: 2156,
      views: 8900,
      featured: true,
      fileSize: '3.2 MB',
      pages: 52,
      downloadUrl: '/downloads/zero-trust-security-whitepaper.pdf',
      tags: ['Cybersecurity', 'Zero-Trust', 'Enterprise Security', 'Risk Management']
    },
    {
      id: 3,
      title: 'Digital Twin Technology: Revolutionizing Manufacturing and Industrial Operations',
      author: 'Marcus Rodriguez, VP of Engineering',
      date: '2023-12-20',
      category: 'digital-transformation',
      summary: 'Explore how digital twin technology is transforming manufacturing, predictive maintenance, and operational efficiency across industrial sectors.',
      keyInsights: [
        'Digital twins can reduce operational costs by 25-30%',
        'Predictive maintenance improves equipment lifespan by 35%',
        'Real-time monitoring reduces downtime by 40%',
        'Implementation strategies for different industry verticals'
      ],
      downloads: 1890,
      views: 7200,
      featured: false,
      fileSize: '2.5 MB',
      pages: 38,
      downloadUrl: '/downloads/digital-twin-manufacturing-whitepaper.pdf',
      tags: ['Digital Twin', 'Manufacturing', 'IoT', 'Predictive Maintenance']
    },
    {
      id: 4,
      title: 'Cloud-Native Architecture: Building Scalable and Resilient Applications',
      author: 'Dr. Emily Watson, Head of Cloud Architecture',
      date: '2023-12-15',
      category: 'cloud',
      summary: 'Comprehensive guide to cloud-native architecture principles, best practices, and implementation strategies for modern application development.',
      keyInsights: [
        'Cloud-native reduces infrastructure costs by 40-60%',
        'Auto-scaling improves performance during peak loads',
        'Microservices architecture enhances development velocity',
        'DevOps integration and CI/CD best practices'
      ],
      downloads: 1650,
      views: 6800,
      featured: false,
      fileSize: '2.1 MB',
      pages: 32,
      downloadUrl: '/downloads/cloud-native-architecture-whitepaper.pdf',
      tags: ['Cloud Computing', 'Microservices', 'DevOps', 'Scalability']
    },
    {
      id: 5,
      title: 'Quantum Computing in Business: Preparing for the Next Computing Revolution',
      author: 'Dr. James Kim, Head of Quantum Research',
      date: '2023-12-10',
      category: 'emerging-tech',
      summary: 'Forward-looking analysis of quantum computing's potential impact on business operations, cryptography, and competitive advantage.',
      keyInsights: [
        'Quantum computing will revolutionize cryptography by 2030',
        'Early adoption provides competitive advantages',
        'Investment strategies for quantum readiness',
        'Industry-specific applications and use cases'
      ],
      downloads: 1420,
      views: 5900,
      featured: false,
      fileSize: '1.9 MB',
      pages: 28,
      downloadUrl: '/downloads/quantum-computing-business-whitepaper.pdf',
      tags: ['Quantum Computing', 'Emerging Technology', 'Cryptography', 'Future Tech']
    },
    {
      id: 6,
      title: 'AI Ethics and Responsible Development: Guidelines for Enterprise Implementation',
      author: 'Priya Patel, Head of AI Ethics',
      date: '2023-12-05',
      category: 'ai-ml',
      summary: 'Essential guidelines for implementing AI ethics and responsible development practices in enterprise environments.',
      keyInsights: [
        'Ethical AI improves customer trust and brand reputation',
        'Framework for responsible AI development',
        'Compliance with emerging AI regulations',
        'Building AI governance structures'
      ],
      downloads: 1280,
      views: 5200,
      featured: false,
      fileSize: '1.7 MB',
      pages: 25,
      downloadUrl: '/downloads/ai-ethics-enterprise-whitepaper.pdf',
      tags: ['AI Ethics', 'Responsible AI', 'Governance', 'Compliance']
    },
    {
      id: 7,
      title: 'Edge Computing and IoT: Transforming Data Processing at the Network Edge',
      author: 'Dr. Michael Chen, IoT Research Lead',
      date: '2023-11-30',
      category: 'emerging-tech',
      summary: 'Comprehensive analysis of edge computing and IoT technologies, their business applications, and implementation strategies.',
      keyInsights: [
        'Edge computing reduces latency by 60-80%',
        'IoT enables real-time decision making',
        'Cost optimization through distributed processing',
        'Security considerations for edge deployments'
      ],
      downloads: 1150,
      views: 4800,
      featured: false,
      fileSize: '2.3 MB',
      pages: 35,
      downloadUrl: '/downloads/edge-computing-iot-whitepaper.pdf',
      tags: ['Edge Computing', 'IoT', 'Real-time Processing', 'Distributed Systems']
    },
    {
      id: 8,
      title: 'Blockchain in Enterprise: Beyond Cryptocurrency to Business Transformation',
      author: 'Alex Thompson, Blockchain Solutions Architect',
      date: '2023-11-25',
      category: 'emerging-tech',
      summary: 'Explore how blockchain technology is transforming enterprise operations, supply chains, and business processes.',
      keyInsights: [
        'Blockchain improves supply chain transparency by 90%',
        'Smart contracts automate business processes',
        'Cost reduction through disintermediation',
        'Implementation challenges and solutions'
      ],
      downloads: 980,
      views: 4100,
      featured: false,
      fileSize: '1.8 MB',
      pages: 30,
      downloadUrl: '/downloads/blockchain-enterprise-whitepaper.pdf',
      tags: ['Blockchain', 'Smart Contracts', 'Supply Chain', 'Enterprise']
    }
  ];

  const filteredWhitePapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || paper.date.startsWith(selectedYear);
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesYear && matchesSearch;
  });

  const featuredWhitePapers = filteredWhitePapers.filter(paper => paper.featured);
  const regularWhitePapers = filteredWhitePapers.filter(paper => !paper.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Access our comprehensive research, insights, and thought leadership content. Download white papers on AI, cybersecurity, digital transformation, and emerging technologies."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              White Papers &
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Research
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Deep insights and thought leadership from our experts. Download comprehensive 
              white papers on AI, cybersecurity, digital transformation, and emerging technologies.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{whitePapers.length}+</div>
              <div className="text-slate-400">White Papers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">15K+</div>
              <div className="text-slate-400">Total Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">6</div>
              <div className="text-slate-400">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">45+</div>
              <div className="text-slate-400">Avg. Pages</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search white papers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <span className="text-slate-300 text-sm">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div className="flex items-center space-x-4">
              <span className="text-slate-300 text-sm">Year:</span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {years.map(year => (
                  <option key={year.id} value={year.id}>
                    {year.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured White Papers */}
      {featuredWhitePapers.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white text-center mb-16"
            >
              Featured Research
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredWhitePapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full">
                      {categories.find(c => c.id === paper.category)?.name}
                    </span>
                    <span className="px-3 py-1 bg-purple-400/20 text-purple-400 text-sm rounded-full">
                      {paper.date.split('-')[0]}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{paper.title}</h3>
                  <p className="text-cyan-400 font-semibold mb-4">By {paper.author}</p>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">{paper.summary}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Insights:</h4>
                    <ul className="space-y-2">
                      {paper.keyInsights.slice(0, 3).map((insight, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                      <div className="text-lg font-bold text-cyan-400">{paper.downloads.toLocaleString()}</div>
                      <div className="text-slate-400 text-xs">Downloads</div>
                    </div>
                    <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                      <div className="text-lg font-bold text-green-400">{paper.pages}</div>
                      <div className="text-slate-400 text-xs">Pages</div>
                    </div>
                    <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                      <div className="text-lg font-bold text-purple-400">{paper.fileSize}</div>
                      <div className="text-slate-400 text-xs">File Size</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {paper.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={paper.downloadUrl}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All White Papers */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            All White Papers
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularWhitePapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">
                    {categories.find(c => c.id === paper.category)?.name}
                  </span>
                  <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">
                    {paper.date.split('-')[0]}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">{paper.title}</h3>
                <p className="text-cyan-400 font-semibold mb-3 text-sm">By {paper.author}</p>
                
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">{paper.summary}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 text-sm">Key Insights:</h4>
                  <ul className="space-y-1">
                    {paper.keyInsights.slice(0, 2).map((insight, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs">
                        <Star className="w-3 h-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 line-clamp-2">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-2 bg-slate-700/50 rounded-lg">
                    <div className="text-sm font-bold text-cyan-400">{paper.downloads.toLocaleString()}</div>
                    <div className="text-slate-400 text-xs">Downloads</div>
                  </div>
                  <div className="text-center p-2 bg-slate-700/50 rounded-lg">
                    <div className="text-sm font-bold text-green-400">{paper.pages}</div>
                    <div className="text-slate-400 text-xs">Pages</div>
                  </div>
                  <div className="text-center p-2 bg-slate-700/50 rounded-lg">
                    <div className="text-sm font-bold text-purple-400">{paper.fileSize}</div>
                    <div className="text-slate-400 text-xs">Size</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {paper.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={paper.downloadUrl}
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Our
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Latest Research
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Get notified when we publish new white papers, research reports, 
              and industry insights. Join thousands of professionals staying ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <span>Subscribe to Updates</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/blog"
                className="inline-flex items-center space-x-2 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <span>Read Our Blog</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
