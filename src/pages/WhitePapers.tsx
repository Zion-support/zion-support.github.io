import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Download, 
  Eye, 
  Calendar, 
  User, 
  FileText, 
  Search, 
  Filter,
  Star,
  TrendingUp,
  Lightbulb,
  Target,
  TrendingUp as TrendingUpIcon,
  ArrowRight,
  Clock,
  Users,
  Award,
  CheckCircle,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Zap,
  Globe,
  Building,
  Industry,
  ChartBar,
  BarChart3,
  PieChart,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Share2,
  ExternalLink
} from 'lucide-react';
import EnhancedSEO from '@/components/EnhancedSEO';

export default function WhitePapers() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'AI & Machine Learning', 'Cloud & DevOps', 'Cybersecurity', 'Digital Transformation', 'IoT & Edge', 'Blockchain', 'Healthcare Tech', 'Sustainability'];
  const industries = ['All', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Technology', 'Education', 'Government', 'Energy'];

  const whitePapers = [
    {
      id: 1,
      title: 'AI Cybersecurity Threat Intelligence: The Future of Enterprise Security in 2026',
      author: 'Dr. Sarah Chen, CTO',
      date: '2026-01-15',
      category: 'AI & Machine Learning',
      industry: 'Technology',
      summary: 'This comprehensive white paper explores the evolution of AI-powered cybersecurity threat intelligence, examining emerging technologies and strategies that will shape enterprise security through 2026 and beyond.',
      keyInsights: [
        'Advanced AI algorithms for threat detection',
        'Real-time intelligence sharing frameworks',
        'Automated incident response strategies',
        'Integration with existing security infrastructure'
      ],
      downloads: 1247,
      views: 5678,
      featured: true,
      fileSize: '2.8 MB',
      pages: 45,
      downloadUrl: '/white-papers/ai-cybersecurity-threat-intelligence-2026.pdf',
      image: '/images/white-papers/ai-cybersecurity-2026.jpg'
    },
    {
      id: 2,
      title: 'AI Financial Trading Risk Management: Revolutionizing Portfolio Optimization',
      author: 'Lisa Thompson, Head of AI Research',
      date: '2026-01-10',
      category: 'AI & Machine Learning',
      industry: 'Finance',
      summary: 'An in-depth analysis of how AI-powered risk management systems are transforming financial trading, providing real-time insights and predictive analytics for optimal portfolio performance.',
      keyInsights: [
        'AI-driven risk assessment models',
        'Real-time market analysis algorithms',
        'Portfolio optimization strategies',
        'Regulatory compliance automation'
      ],
      downloads: 892,
      views: 3456,
      featured: true,
      fileSize: '3.2 MB',
      pages: 38,
      downloadUrl: '/white-papers/ai-financial-trading-risk-management-2026.pdf',
      image: '/images/white-papers/ai-financial-trading-2026.jpg'
    },
    {
      id: 3,
      title: 'AI Healthcare Predictive Analytics: Transforming Patient Care in 2026',
      author: 'Dr. Emily Watson, Head of AI Research',
      date: '2025-12-28',
      category: 'Healthcare Tech',
      industry: 'Healthcare',
      summary: 'A comprehensive exploration of how AI-powered predictive analytics is revolutionizing healthcare delivery, improving patient outcomes, and enabling proactive care management.',
      keyInsights: [
        'Predictive diagnostic algorithms',
        'Patient outcome forecasting',
        'Treatment optimization strategies',
        'Healthcare operational efficiency'
      ],
      downloads: 1567,
      views: 6234,
      featured: true,
      fileSize: '4.1 MB',
      pages: 52,
      downloadUrl: '/white-papers/ai-healthcare-predictive-analytics-2026.pdf',
      image: '/images/white-papers/ai-healthcare-2026.jpg'
    },
    {
      id: 4,
      title: 'AI Legal Document Automation: Streamlining Legal Operations',
      author: 'David Kim, Head of AI Solutions',
      date: '2025-12-15',
      category: 'Digital Transformation',
      industry: 'Technology',
      summary: 'A detailed guide to implementing AI-powered legal document automation, covering natural language processing, workflow optimization, and compliance management.',
      keyInsights: [
        'NLP for legal document analysis',
        'Automated workflow optimization',
        'Compliance checking automation',
        'Integration with legal systems'
      ],
      downloads: 756,
      views: 2890,
      featured: false,
      fileSize: '2.9 MB',
      pages: 41,
      downloadUrl: '/white-papers/ai-legal-document-automation-2026.pdf',
      image: '/images/white-papers/ai-legal-automation-2026.jpg'
    },
    {
      id: 5,
      title: 'Zero-Trust Security Architecture: Implementing Enterprise-Grade Protection',
      author: 'Michael Rodriguez, Head of Cybersecurity',
      date: '2025-11-20',
      category: 'Cybersecurity',
      industry: 'Technology',
      summary: 'A comprehensive analysis of zero-trust security principles and practical implementation strategies for enterprise organizations seeking to enhance their security posture.',
      keyInsights: [
        'Core principles of zero-trust architecture',
        'Implementation roadmap and best practices',
        'Integration with existing security infrastructure',
        'Cost-benefit analysis and ROI metrics'
      ],
      downloads: 892,
      views: 3456,
      featured: false,
      fileSize: '3.2 MB',
      pages: 38,
      downloadUrl: '/white-papers/zero-trust-security-architecture.pdf',
      image: '/images/white-papers/zero-trust-security.jpg'
    },
    {
      id: 6,
      title: 'Cloud FinOps Optimization: Strategies for Cost Management and Efficiency',
      author: 'Jennifer Lee, Head of Cloud & DevOps',
      date: '2025-10-15',
      category: 'Cloud & DevOps',
      industry: 'Technology',
      summary: 'A comprehensive guide to implementing FinOps practices in cloud environments, optimizing costs while maintaining performance and scalability.',
      keyInsights: [
        'FinOps framework implementation',
        'Cost optimization strategies',
        'Performance monitoring and alerting',
        'Team collaboration and governance models'
      ],
      downloads: 634,
      views: 2345,
      featured: false,
      fileSize: '3.8 MB',
      pages: 48,
      downloadUrl: '/white-papers/cloud-finops-optimization.pdf',
      image: '/images/white-papers/cloud-finops.jpg'
    },
    {
      id: 7,
      title: 'Edge Computing and IoT: Building the Foundation for Smart Cities',
      author: 'Dr. Alex Chen, IoT Research Director',
      date: '2025-09-28',
      category: 'IoT & Edge',
      industry: 'Technology',
      summary: 'An exploration of edge computing technologies and their role in enabling smart city infrastructure, IoT applications, and real-time data processing.',
      keyInsights: [
        'Edge computing architecture patterns',
        'IoT device management strategies',
        'Real-time data processing frameworks',
        'Smart city implementation case studies'
      ],
      downloads: 445,
      views: 1789,
      featured: false,
      fileSize: '2.6 MB',
      pages: 35,
      downloadUrl: '/white-papers/edge-computing-iot-smart-cities.pdf',
      image: '/images/white-papers/edge-computing-iot.jpg'
    },
    {
      id: 8,
      title: 'Blockchain in Enterprise: Beyond Cryptocurrency to Business Transformation',
      author: 'Sarah Johnson, Blockchain Solutions Lead',
      date: '2025-08-15',
      category: 'Blockchain',
      industry: 'Technology',
      summary: 'A comprehensive analysis of blockchain technology applications in enterprise environments, covering supply chain, identity management, and smart contracts.',
      keyInsights: [
        'Enterprise blockchain use cases',
        'Supply chain transparency solutions',
        'Identity and access management',
        'Smart contract implementation'
      ],
      downloads: 567,
      views: 2123,
      featured: false,
      fileSize: '3.1 MB',
      pages: 42,
      downloadUrl: '/white-papers/blockchain-enterprise-transformation.pdf',
      image: '/images/white-papers/blockchain-enterprise.jpg'
    }
  ];

  const filteredWhitePapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    const matchesIndustry = selectedIndustry === 'All' || paper.industry === selectedIndustry;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesIndustry && matchesSearch;
  });

  const stats = [
    {
      value: '50+',
      label: 'White Papers',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      value: '25K+',
      label: 'Downloads',
      icon: Download,
      color: 'from-green-500 to-emerald-500'
    },
    {
      value: '100K+',
      label: 'Views',
      icon: Eye,
      color: 'from-purple-500 to-pink-500'
    },
    {
      value: '15+',
      label: 'Authors',
      icon: Users,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="White Papers - Zion Tech Group"
        description="Access our comprehensive collection of white papers covering AI, cybersecurity, cloud computing, and digital transformation insights."
        canonical="/white-papers"
        url="https://ziontechgroup.com/white-papers"
        type="website"
        tags={['White Papers', 'Research', 'AI Insights', 'Technology Trends', 'Industry Analysis']}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              White <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Papers</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Access our comprehensive collection of research papers, industry insights, and technology trends to stay ahead of the curve
            </motion.p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-cyan-400 mb-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Industry Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Industry</label>
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                  >
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>

                {/* Search */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Search</label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search white papers..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-400">
                  Showing {filteredWhitePapers.length} of {whitePapers.length} white papers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured White Papers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Featured Research</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most popular and impactful white papers covering cutting-edge technology trends and insights
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredWhitePapers.filter(paper => paper.featured).map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full">
                        {paper.category}
                      </span>
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
                        {paper.industry}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {paper.title}
                    </h3>
                    
                    <div className="flex items-center space-x-4 mb-6 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{paper.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(paper.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4" />
                        <span>{paper.pages} pages</span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {paper.summary}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Insights:</h4>
                      <ul className="space-y-2">
                        {paper.keyInsights.slice(0, 3).map((insight, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {insight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-2">
                          <Download className="w-4 h-4" />
                          <span>{paper.downloads.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Eye className="w-4 h-4" />
                          <span>{paper.views.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="text-sm text-cyan-400 font-semibold">
                        {paper.fileSize}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <a
                        href={paper.downloadUrl}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download PDF
                      </a>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 text-gray-400 hover:text-white transition-all duration-300">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 text-gray-400 hover:text-white transition-all duration-300">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All White Papers Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">All White Papers</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our complete collection of research papers and industry insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWhitePapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium text-gray-400 bg-slate-700/50 px-2 py-1 rounded-full">
                        {paper.category}
                      </span>
                      {paper.featured && (
                        <span className="text-xs font-medium text-purple-400 bg-purple-500/20 px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {paper.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4">
                      {paper.author} • {new Date(paper.date).toLocaleDateString()} • {paper.pages} pages
                    </p>
                    
                    <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                      {paper.summary}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-xs text-gray-400">
                        <Download className="w-3 h-3" />
                        <span>{paper.downloads.toLocaleString()}</span>
                        <Eye className="w-3 h-3" />
                        <span>{paper.views.toLocaleString()}</span>
                      </div>
                      <div className="text-xs text-cyan-400 font-semibold">
                        {paper.fileSize}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-cyan-400 font-semibold">
                        {paper.industry}
                      </div>
                      <a
                        href={paper.downloadUrl}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span className="text-sm mr-1">Download</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Stay Updated with Our Research</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get access to our latest white papers, industry insights, and technology trends delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/comprehensive-services-showcase-2026"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <span>Explore 2026 Services</span>
                <Rocket className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
