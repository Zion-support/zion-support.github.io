import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  FileText, 
  Download, 
  Calendar, 
  User, 
  Eye, 
  TrendingUp, 
  Brain, 
  Shield,
  Cloud,
  Rocket,
  Heart,
  Globe,
  Building,
  Search,
  Filter,
  Tag,
  Clock,
  BookOpen,
  Award,
  Star,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Bookmark,
  Share2,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Copy,
  CheckCircle,
  Zap,
  Crown,
  Sparkles,
  Lightbulb,
  Target,
  BarChart3,
  PieChart,
  Activity,
  TrendingDown,
  Cpu,
  Database,
  Network,
  Lock,
  Key,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Server,
  HardDrive,
  Wifi,
  Bluetooth,
  Satellite,
  Radio,
  Antenna,
  GraduationCap,
  Briefcase,
  Industry,
  Code,
  GitBranch,
  RefreshCw,
  BarChart,
  ShieldCheck,
  Atom,
  BrainCircuit,
  BrainCircuit2
} from 'lucide-react';

export default function WhitePapers() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');

  const categories = [
    { id: 'all', name: 'All Categories', icon: FileText, count: 18 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 6 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 4 },
    { id: 'cloud-devops', name: 'Cloud & DevOps', icon: Cloud, count: 3 },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Rocket, count: 3 },
    { id: 'iot-edge', name: 'IoT & Edge Computing', icon: Network, count: 2 }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building, count: 18 },
    { id: 'healthcare', name: 'Healthcare', icon: Heart, count: 5 },
    { id: 'finance', name: 'Financial Services', icon: Briefcase, count: 4 },
    { id: 'manufacturing', name: 'Manufacturing', icon: Industry, count: 3 },
    { id: 'retail', name: 'Retail & E-commerce', icon: ShoppingCart, count: 2 },
    { id: 'technology', name: 'Technology', icon: Cpu, count: 2 },
    { id: 'energy', name: 'Energy & Utilities', icon: Zap, count: 1 },
    { id: 'education', name: 'Education', icon: GraduationCap, count: 1 }
  ];

  const whitePapers = [
    {
      id: 1,
      title: 'The Future of AI in Healthcare: A Comprehensive Analysis of Implementation Strategies',
      author: 'Dr. Sarah Chen, Chief AI Scientist',
      date: '2024-12-15',
      category: 'ai-ml',
      industries: ['healthcare', 'technology'],
      abstract: 'This comprehensive white paper explores the transformative potential of artificial intelligence in healthcare, examining current implementations, future possibilities, and strategic approaches for healthcare organizations looking to adopt AI solutions.',
      keyInsights: [
        'AI diagnostic accuracy has improved by 300% in the last 5 years',
        'Healthcare organizations can achieve 40% cost reduction through AI implementation',
        'Patient outcomes improve by 60% with AI-assisted treatment planning',
        'Regulatory compliance is the biggest barrier to AI adoption in healthcare'
      ],
      downloadUrl: '/white-papers/ai-healthcare-future-2024.pdf',
      fileSize: '2.8 MB',
      pages: 45,
      featured: true,
      tags: ['AI Healthcare', 'Digital Health', 'Machine Learning', 'Healthcare Innovation'],
      views: 2847,
      downloads: 1256,
      rating: 4.8
    },
    {
      id: 2,
      title: 'Zero-Trust Security Architecture: A Modern Approach to Enterprise Cybersecurity',
      author: 'Marcus Rodriguez, Head of Cybersecurity',
      date: '2024-11-28',
      category: 'cybersecurity',
      industries: ['technology', 'finance', 'healthcare'],
      abstract: 'This technical white paper presents a comprehensive framework for implementing zero-trust security architecture in enterprise environments, including practical implementation steps, best practices, and real-world case studies.',
      keyInsights: [
        'Zero-trust reduces security incidents by 85% on average',
        'Implementation costs are recovered within 18 months',
        'Compliance requirements are easier to meet with zero-trust',
        'User experience improves while security strengthens'
      ],
      downloadUrl: '/white-papers/zero-trust-security-architecture-2024.pdf',
      fileSize: '3.2 MB',
      pages: 52,
      featured: true,
      tags: ['Zero Trust', 'Cybersecurity', 'Enterprise Security', 'Network Security'],
      views: 2156,
      downloads: 987,
      rating: 4.9
    },
    {
      id: 3,
      title: 'Cloud-Native Microservices: Building Scalable Applications for the Digital Age',
      author: 'Dr. Emily Watson, VP of Cloud & DevOps',
      date: '2024-10-20',
      category: 'cloud-devops',
      industries: ['technology', 'retail', 'finance'],
      abstract: 'This technical guide explores the principles and practices of building cloud-native microservices applications, covering architecture patterns, deployment strategies, and operational best practices for modern software development.',
      keyInsights: [
        'Microservices improve deployment frequency by 10x',
        'System reliability increases by 99.9% with proper implementation',
        'Development team productivity improves by 60%',
        'Infrastructure costs can be reduced by 40%'
      ],
      downloadUrl: '/white-papers/cloud-native-microservices-2024.pdf',
      fileSize: '4.1 MB',
      pages: 68,
      featured: false,
      tags: ['Microservices', 'Cloud Native', 'DevOps', 'Software Architecture'],
      views: 1892,
      downloads: 743,
      rating: 4.7
    },
    {
      id: 4,
      title: 'Digital Transformation in Manufacturing: Leveraging IoT and AI for Industry 4.0',
      author: 'Alex Thompson, Head of IoT & Edge Computing',
      date: '2024-09-15',
      category: 'digital-transformation',
      industries: ['manufacturing', 'technology'],
      abstract: 'This industry analysis examines how manufacturing companies can leverage IoT sensors, edge computing, and artificial intelligence to achieve Industry 4.0 transformation and competitive advantage in the global marketplace.',
      keyInsights: [
        'IoT implementation reduces operational costs by 25%',
        'Predictive maintenance prevents 75% of unplanned downtime',
        'AI-powered quality control improves product quality by 40%',
        'Digital transformation ROI is achieved within 2-3 years'
      ],
      downloadUrl: '/white-papers/digital-transformation-manufacturing-2024.pdf',
      fileSize: '3.7 MB',
      pages: 58,
      featured: false,
      tags: ['Industry 4.0', 'IoT', 'Manufacturing', 'Digital Transformation'],
      views: 1654,
      downloads: 612,
      rating: 4.6
    },
    {
      id: 5,
      title: 'Quantum Computing in Financial Services: Opportunities and Challenges',
      author: 'Dr. Sarah Chen, Chief AI Scientist',
      date: '2024-08-22',
      category: 'ai-ml',
      industries: ['finance', 'technology'],
      abstract: 'This research paper explores the potential applications of quantum computing in financial services, examining use cases in risk assessment, portfolio optimization, and fraud detection, along with implementation challenges and timelines.',
      keyInsights: [
        'Quantum computing can solve complex financial models in minutes vs. years',
        'Risk assessment accuracy improves by 90% with quantum algorithms',
        'Implementation timeline is 5-10 years for mainstream adoption',
        'Investment in quantum skills is critical for financial institutions'
      ],
      downloadUrl: '/white-papers/quantum-computing-financial-services-2024.pdf',
      fileSize: '2.9 MB',
      pages: 41,
      featured: false,
      tags: ['Quantum Computing', 'Financial Services', 'AI', 'Risk Assessment'],
      views: 1432,
      downloads: 534,
      rating: 4.8
    },
    {
      id: 6,
      title: 'Edge Computing and AI: Enabling Real-Time Intelligence at the Network Edge',
      author: 'Alex Thompson, Head of IoT & Edge Computing',
      date: '2024-07-18',
      category: 'iot-edge',
      industries: ['technology', 'manufacturing', 'energy'],
      abstract: 'This technical white paper examines the convergence of edge computing and artificial intelligence, exploring how organizations can deploy AI models at the network edge for real-time decision making and reduced latency.',
      keyInsights: [
        'Edge AI reduces latency by 80% compared to cloud processing',
        'Bandwidth costs decrease by 60% with edge computing',
        'Real-time decision making improves operational efficiency by 45%',
        'Privacy and security are enhanced with local data processing'
      ],
      downloadUrl: '/white-papers/edge-computing-ai-2024.pdf',
      fileSize: '3.4 MB',
      pages: 49,
      featured: false,
      tags: ['Edge Computing', 'AI', 'IoT', 'Real-time Processing'],
      views: 1287,
      downloads: 456,
      rating: 4.5
    },
    {
      id: 7,
      title: 'AI Ethics and Governance: Building Trust in Artificial Intelligence Systems',
      author: 'Dr. Sarah Chen, Chief AI Scientist',
      date: '2024-06-30',
      category: 'ai-ml',
      industries: ['technology', 'healthcare', 'finance'],
      abstract: 'This comprehensive guide addresses the critical importance of AI ethics and governance, providing frameworks for building trustworthy AI systems and ensuring responsible development and deployment of artificial intelligence.',
      keyInsights: [
        'Ethical AI increases user trust by 70%',
        'Governance frameworks reduce AI bias by 85%',
        'Compliance costs are 40% lower with proactive ethics',
        'Customer satisfaction improves with transparent AI systems'
      ],
      downloadUrl: '/white-papers/ai-ethics-governance-2024.pdf',
      fileSize: '3.8 MB',
      pages: 55,
      featured: false,
      tags: ['AI Ethics', 'Governance', 'Trust', 'Responsible AI'],
      views: 1156,
      downloads: 398,
      rating: 4.7
    },
    {
      id: 8,
      title: 'Blockchain Technology in Supply Chain Management: Transparency and Efficiency',
      author: 'Marcus Rodriguez, Head of Cybersecurity',
      date: '2024-05-25',
      category: 'digital-transformation',
      industries: ['manufacturing', 'retail', 'technology'],
      abstract: 'This industry analysis explores how blockchain technology can revolutionize supply chain management, providing unprecedented transparency, traceability, and efficiency in global supply networks.',
      keyInsights: [
        'Blockchain reduces supply chain fraud by 90%',
        'Transparency improves customer trust by 75%',
        'Operational efficiency increases by 35%',
        'Compliance costs decrease by 50%'
      ],
      downloadUrl: '/white-papers/blockchain-supply-chain-2024.pdf',
      fileSize: '2.6 MB',
      pages: 38,
      featured: false,
      tags: ['Blockchain', 'Supply Chain', 'Transparency', 'Efficiency'],
      views: 987,
      downloads: 312,
      rating: 4.6
    }
  ];

  const filteredWhitePapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    const matchesIndustry = selectedIndustry === 'all' || paper.industries.includes(selectedIndustry);
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesIndustry && matchesSearch;
  });

  const sortedWhitePapers = [...filteredWhitePapers].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'views':
        return b.views - a.views;
      case 'downloads':
        return b.downloads - a.downloads;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : FileText;
  };

  const getIndustryIcon = (industryId: string) => {
    const industry = industries.find(ind => ind.id === industryId);
    return industry ? industry.icon : Building;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Access our comprehensive collection of white papers, research papers, and technical insights on AI, cybersecurity, cloud computing, and digital transformation."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-8">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              White <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Papers</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Deep insights, research findings, and technical analysis from our experts. 
              Download comprehensive white papers on AI, cybersecurity, and digital transformation.
            </p>
            <div className="flex items-center justify-center space-x-6 text-slate-400">
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>{whitePapers.length} White Papers</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>Expert Authors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Free Downloads</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-slate-800/30">
        <div className="container mx-auto px-4">
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

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <span className="text-slate-300 font-medium">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Industry Filter */}
            <div className="flex items-center space-x-4">
              <span className="text-slate-300 font-medium">Industry:</span>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {industries.map((industry) => (
                  <option key={industry.id} value={industry.id}>
                    {industry.name} ({industry.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="flex items-center space-x-4">
              <span className="text-slate-300 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                <option value="date">Latest</option>
                <option value="views">Most Viewed</option>
                <option value="downloads">Most Downloaded</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured White Papers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Research</h2>
            <p className="text-lg text-slate-300">Our most popular and impactful white papers</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sortedWhitePapers.filter(paper => paper.featured).map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center">
                      <getCategoryIcon(paper.category) className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{paper.author}</h3>
                      <p className="text-slate-400 text-sm">{formatDate(paper.date)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-slate-400 text-sm">Featured</span>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-2xl font-bold text-white mb-4 leading-tight">
                  {paper.title}
                </h4>

                {/* Abstract */}
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {paper.abstract}
                </p>

                {/* Key Insights */}
                <div className="mb-6">
                  <h5 className="text-white font-semibold mb-3">Key Insights</h5>
                  <div className="space-y-2">
                    {paper.keyInsights.slice(0, 3).map((insight, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Lightbulb className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{insight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats and Tags */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                      <span className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{paper.views.toLocaleString()}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{paper.downloads.toLocaleString()}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>{paper.rating}</span>
                      </span>
                    </div>
                    <div className="text-right text-sm text-slate-400">
                      <div>{paper.fileSize}</div>
                      <div>{paper.pages} pages</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-700">
                  <div className="flex items-center space-x-4">
                    {paper.industries.slice(0, 2).map((industry) => (
                      <span key={industry} className="flex items-center space-x-1 text-slate-400 text-sm">
                        <getIndustryIcon(industry) className="w-4 h-4" />
                        <span>{industry.replace('-', ' ').toUpperCase()}</span>
                      </span>
                    ))}
                  </div>
                  <a
                    href={paper.downloadUrl}
                    className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2"
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

      {/* All White Papers Grid */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">All White Papers</h2>
            <p className="text-lg text-slate-300">Complete collection of our research and insights</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedWhitePapers.filter(paper => !paper.featured).map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-xl rounded-xl p-6 border border-slate-700/30 hover:border-cyan-400/20 transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                      <getCategoryIcon(paper.category) className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-slate-400 text-xs font-medium">
                      {paper.category.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-slate-400">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{paper.rating}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {paper.title}
                </h3>

                {/* Author and Date */}
                <p className="text-cyan-400 font-semibold text-sm mb-2">{paper.author}</p>
                <p className="text-slate-400 text-xs mb-3">{formatDate(paper.date)}</p>

                {/* Abstract Preview */}
                <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  {paper.abstract}
                </p>

                {/* Key Insights Preview */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold text-sm mb-2">Key Insights</h4>
                  <div className="space-y-1">
                    {paper.keyInsights.slice(0, 2).map((insight, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Lightbulb className="w-3 h-3 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300 text-xs">{insight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {paper.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats and Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <div className="flex items-center space-x-3 text-xs text-slate-400">
                    <span className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{paper.views.toLocaleString()}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>{paper.downloads.toLocaleString()}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <FileText className="w-3 h-3" />
                      <span>{paper.pages}</span>
                    </span>
                  </div>
                  <a
                    href={paper.downloadUrl}
                    className="px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold flex items-center space-x-1"
                  >
                    <Download className="w-3 h-3" />
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
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 rounded-3xl p-12 text-center border border-cyan-400/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Informed</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Get notified when we publish new white papers and research insights. 
              Stay ahead of the curve with the latest technology trends and analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-slate-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
