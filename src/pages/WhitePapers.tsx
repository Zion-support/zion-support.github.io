import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  FileText, 
  Download, 
  Calendar, 
  Users, 
  Eye, 
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Filter,
  Search,
  Star,
  Award,
  CheckCircle,
  Zap,
  Brain,
  Rocket,
  Shield,
  Heart,
  Crown,
  Sparkles,
  Flame,
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  Clock,
  Globe,
  Building,
  Industry,
  ChartBar,
  BarChart3,
  PieChart,
  Activity,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Plus,
  ExternalLink,
  BookOpen,
  Lightbulb,
  Target,
  TrendingUp as TrendingUpIcon
} from 'lucide-react';

<<<<<<< HEAD
export const WhitePapers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
=======
const WhitePapers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'AI & Machine Learning', 'Cloud & DevOps', 'Cybersecurity', 'Digital Transformation', 'IoT & Edge', 'Blockchain', 'Healthcare Tech', 'Sustainability'];
  const industries = ['All', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Technology', 'Education', 'Government', 'Energy'];

  const whitePapers = [
    {
      id: 1,
      title: 'The Future of AI-Powered Business Intelligence: A Comprehensive Guide to 2030',
      author: 'Dr. Sarah Chen, CTO',
      date: '2025-01-15',
      category: 'AI & Machine Learning',
      industry: 'Technology',
      summary: 'This comprehensive white paper explores the evolution of AI-powered business intelligence, examining emerging trends, technologies, and best practices that will shape the landscape through 2030.',
      keyInsights: [
        'Emerging AI algorithms and their business applications',
        'Integration strategies for legacy systems',
        'ROI measurement frameworks for AI initiatives',
        'Ethical considerations in AI deployment'
      ],
      downloads: 1247,
      views: 5678,
      featured: true,
      fileSize: '2.8 MB',
      pages: 45,
      downloadUrl: '/white-papers/ai-business-intelligence-2030.pdf',
      image: '/images/white-papers/ai-bi-2030.jpg'
    },
    {
      id: 2,
      title: 'Zero-Trust Security Architecture: Implementing Enterprise-Grade Protection',
      author: 'Lisa Thompson, Head of Cybersecurity',
      date: '2024-12-20',
      category: 'Cybersecurity',
      industry: 'Technology',
      summary: 'A detailed analysis of zero-trust security principles and practical implementation strategies for enterprise organizations seeking to enhance their security posture.',
      keyInsights: [
        'Core principles of zero-trust architecture',
        'Implementation roadmap and best practices',
        'Integration with existing security infrastructure',
        'Cost-benefit analysis and ROI metrics'
      ],
      downloads: 892,
      views: 3456,
      featured: true,
      fileSize: '3.2 MB',
      pages: 38,
      downloadUrl: '/white-papers/zero-trust-security-architecture.pdf',
      image: '/images/white-papers/zero-trust-security.jpg'
    },
    {
      id: 3,
      title: 'Digital Transformation in Healthcare: Leveraging AI for Patient Outcomes',
      author: 'Dr. Emily Watson, Head of AI Research',
      date: '2024-11-28',
      category: 'Healthcare Tech',
      industry: 'Healthcare',
      summary: 'An in-depth exploration of how AI and digital technologies are transforming healthcare delivery, improving patient outcomes, and reducing operational costs.',
      keyInsights: [
        'AI applications in medical diagnostics',
        'Digital health platform architectures',
        'Regulatory compliance considerations',
        'Success metrics and outcome measurement'
      ],
      downloads: 1567,
      views: 6234,
      featured: false,
      fileSize: '4.1 MB',
      pages: 52,
      downloadUrl: '/white-papers/digital-transformation-healthcare.pdf',
      image: '/images/white-papers/healthcare-digital.jpg'
    },
    {
      id: 4,
      title: 'Cloud FinOps Optimization: Strategies for Cost Management and Efficiency',
      author: 'David Kim, Head of Cloud & DevOps',
      date: '2024-10-15',
      category: 'Cloud & DevOps',
      industry: 'Technology',
      summary: 'A comprehensive guide to implementing FinOps practices in cloud environments, optimizing costs while maintaining performance and scalability.',
      keyInsights: [
<<<<<<< HEAD
        'FinOps framework implementation',
        'Cost optimization strategies',
        'Performance monitoring and alerting',
        'Team collaboration and governance models'
=======
        'Cloud-native reduces infrastructure costs by 40-60%',
        'Auto-scaling improves performance during peak loads',
        'Microservices architecture enhances maintainability',
        'DevOps integration strategies and tools'
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
      ],
      downloads: 734,
      views: 2987,
      featured: false,
      fileSize: '2.9 MB',
      pages: 41,
<<<<<<< HEAD
      downloadUrl: '/white-papers/cloud-finops-optimization.pdf',
      image: '/images/white-papers/cloud-finops.jpg'
    },
    {
      id: 5,
      title: 'IoT and Edge Computing: Building the Foundation for Smart Cities',
      author: 'Michael Rodriguez, COO',
      date: '2024-09-22',
      category: 'IoT & Edge',
      industry: 'Government',
      summary: 'Exploring the role of IoT and edge computing in creating sustainable, efficient, and intelligent urban environments for the future.',
      keyInsights: [
        'Smart city infrastructure design',
        'Edge computing deployment strategies',
        'Data privacy and security considerations',
        'Public-private partnership models'
      ],
      downloads: 645,
      views: 2345,
      featured: false,
      fileSize: '3.5 MB',
      pages: 47,
      downloadUrl: '/white-papers/iot-edge-smart-cities.pdf',
      image: '/images/white-papers/smart-cities.jpg'
    },
    {
      id: 6,
      title: 'Blockchain in Supply Chain: Transparency, Traceability, and Trust',
      author: 'Dr. Sarah Chen, CTO',
      date: '2024-08-18',
      category: 'Blockchain',
      industry: 'Manufacturing',
      summary: 'A comprehensive analysis of blockchain technology applications in supply chain management, focusing on transparency, traceability, and building trust across global networks.',
      keyInsights: [
        'Blockchain supply chain architectures',
        'Smart contract implementation',
        'Integration with existing ERP systems',
        'Regulatory compliance and standards'
      ],
      downloads: 823,
      views: 3123,
      featured: false,
      fileSize: '3.8 MB',
      pages: 44,
      downloadUrl: '/white-papers/blockchain-supply-chain.pdf',
      image: '/images/white-papers/blockchain-supply.jpg'
    },
    {
      id: 7,
      title: 'Sustainable Technology: Green IT Solutions for Environmental Impact',
      author: 'Lisa Thompson, Head of Sustainability',
      date: '2024-07-12',
      category: 'Sustainability',
      industry: 'Energy',
      summary: 'Examining how technology can drive sustainability initiatives, reduce environmental impact, and create value for organizations committed to ESG principles.',
      keyInsights: [
        'Green IT infrastructure design',
        'Energy-efficient computing strategies',
        'Carbon footprint measurement',
        'Sustainability reporting frameworks'
      ],
      downloads: 567,
      views: 1987,
      featured: false,
      fileSize: '2.6 MB',
      pages: 36,
      downloadUrl: '/white-papers/sustainable-technology.pdf',
      image: '/images/white-papers/sustainable-tech.jpg'
    },
    {
      id: 8,
      title: 'The Future of Work: AI-Augmented Human Collaboration',
      author: 'Dr. Emily Watson, Head of AI Research',
      date: '2024-06-25',
      category: 'AI & Machine Learning',
      industry: 'Technology',
      summary: 'Exploring the evolving relationship between humans and AI in the workplace, focusing on collaboration, productivity enhancement, and job transformation.',
      keyInsights: [
        'AI-human collaboration models',
        'Skills development and training',
        'Change management strategies',
        'Productivity measurement frameworks'
      ],
      downloads: 945,
      views: 3789,
      featured: false,
      fileSize: '3.1 MB',
      pages: 42,
      downloadUrl: '/white-papers/ai-human-collaboration.pdf',
      image: '/images/white-papers/ai-collaboration.jpg'
=======
      downloadUrl: '/downloads/cloud-native-architecture-whitepaper.pdf',
      tags: ['Cloud Native', 'Microservices', 'DevOps', 'Scalability']
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
    }
  ];

  const filteredWhitePapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    const matchesIndustry = selectedIndustry === 'All' || paper.industry === selectedIndustry;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
<<<<<<< HEAD
                         paper.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.summary.toLowerCase().includes(searchQuery.toLowerCase());
=======
                         paper.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
    
    return matchesCategory && matchesIndustry && matchesSearch;
  });

<<<<<<< HEAD
  const featuredWhitePapers = whitePapers.filter(paper => paper.featured);

  const stats = [
    { number: '8+', label: 'White Papers', icon: FileText },
    { number: '15K+', label: 'Downloads', icon: Download },
    { number: '50K+', label: 'Views', icon: Eye },
    { number: '45+', label: 'Average Pages', icon: BookOpen }
  ];
=======
  const handleDownload = (paper: any) => {
    // Simulate download
    console.log(`Downloading: ${paper.title}`);
    // In a real app, this would trigger an actual download
  };
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="White Papers - Zion Tech Group"
<<<<<<< HEAD
        description="Access our comprehensive collection of white papers, research reports, and industry insights covering AI, cybersecurity, digital transformation, and emerging technologies."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
=======
        description="Access our comprehensive collection of white papers covering AI, cybersecurity, cloud computing, and digital transformation insights."
        keywords="white papers, research, AI, cybersecurity, cloud computing, digital transformation, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                White
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Papers</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Deep insights, research findings, and thought leadership content from Zion Tech Group's 
              technology experts. Download our comprehensive white papers to stay ahead of industry trends.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full mb-3">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
=======
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              White
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Papers
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Access our comprehensive collection of research, insights, and thought leadership 
              on the latest technology trends and industry developments.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>In-depth research</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Free downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-cyan-400" />
                <span>Expert insights</span>
              </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Filters Section */}
      <section className="py-12 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search white papers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
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
            
            <div className="space-y-12">
              {featuredWhitePapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-cyan-400/20"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Content */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm font-medium rounded-full">
                          Featured
                        </span>
                        <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                          {paper.category}
                        </span>
                        <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                          {paper.industry}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">{paper.title}</h3>
                      <p className="text-slate-300 mb-6 leading-relaxed">{paper.summary}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300 text-sm">{paper.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300 text-sm">
                            {new Date(paper.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Insights</h4>
                        <ul className="space-y-2">
                          {paper.keyInsights.map((insight, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <Lightbulb className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300">{insight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <a
                          href={paper.downloadUrl}
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
                        >
                          <Download className="w-5 h-5 mr-2" />
                          Download White Paper
                        </a>
                        <div className="flex items-center space-x-6 text-sm text-slate-400">
                          <div className="flex items-center space-x-1">
                            <Download className="w-4 h-4" />
                            <span>{paper.downloads.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{paper.views.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Paper Details */}
                    <div className="space-y-6">
                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Paper Details</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Category:</span>
                            <span className="text-white">{paper.category}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Industry:</span>
                            <span className="text-white">{paper.industry}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Pages:</span>
                            <span className="text-white">{paper.pages}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">File Size:</span>
                            <span className="text-white">{paper.fileSize}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Engagement</h4>
                        <div className="space-y-3">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400 mb-1">{paper.downloads.toLocaleString()}</div>
                            <div className="text-slate-400 text-sm">Downloads</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-400 mb-1">{paper.views.toLocaleString()}</div>
                            <div className="text-slate-400 text-sm">Views</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
=======
      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search white papers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {categories.map((category) => (
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
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {years.map((year) => (
                    <option key={year.id} value={year.id}>
                      {year.name}
                    </option>
                  ))}
                </select>
              </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* All White Papers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">All White Papers</h2>
              <p className="text-slate-300 text-lg">
                Showing {filteredWhitePapers.length} of {whitePapers.length} white papers
              </p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWhitePapers.filter(paper => !paper.featured).map((paper, index) => (
=======
      {/* White Papers Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredWhitePapers.map((paper, index) => (
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                      {paper.category}
                    </span>
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                      {paper.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{paper.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">
                    <strong>Author:</strong> {paper.author}
                  </p>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(paper.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
=======
                viewport={{ once: true }}
                className={`bg-slate-800/50 backdrop-blur-xl rounded-2xl border p-6 hover:border-cyan-500/50 transition-all duration-300 ${
                  paper.featured ? 'ring-2 ring-cyan-400/50' : 'border-slate-700/50'
                }`}
              >
                {paper.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-yellow-400 font-medium">Featured</span>
                  </div>
                )}

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {paper.category.replace('-', ' ').toUpperCase()}
                    </span>
                    <span className="text-sm text-gray-400">{paper.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                    {paper.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {paper.summary}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{paper.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      <span>{paper.pages} pages</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      <span>{paper.downloads.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded"
                      >
                        {tag}
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FileText className="w-4 h-4" />
                      <span>{paper.pages} pages</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">{paper.summary}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Key Insights:</h4>
                    <ul className="space-y-1">
                      {paper.keyInsights.slice(0, 2).map((insight, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Lightbulb className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{paper.downloads.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{paper.views.toLocaleString()}</span>
                      </div>
                    </div>
                    <a
                      href={paper.downloadUrl}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      Download
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
<<<<<<< HEAD
=======
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleDownload(paper)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">File size</div>
                    <div className="text-white font-medium">{paper.fileSize}</div>
                  </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
                </div>
              </motion.div>
            ))}
          </div>
<<<<<<< HEAD
          
          {filteredWhitePapers.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No white papers found</h3>
              <p className="text-slate-400">Try adjusting your filters or search terms</p>
            </motion.div>
=======

          {filteredWhitePapers.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No white papers found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
            </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
          )}
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10">
        <div className="container mx-auto px-4 text-center">
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Ahead with Expert Insights
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Get notified when we publish new white papers and research. Join thousands of technology 
              leaders who rely on Zion Tech Group for cutting-edge insights and thought leadership.
=======
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Our Latest Research
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get notified when we publish new white papers and research insights. 
              Join thousands of professionals staying ahead of technology trends.
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
<<<<<<< HEAD
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe to Updates
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Request Custom Research
=======
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Subscribe to Updates
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </a>
              <a
                href="/blog"
                className="px-8 py-4 bg-slate-700/50 hover:bg-slate-600/50 text-white font-semibold rounded-lg transition-all duration-300 border border-slate-600 hover:border-slate-500"
              >
                View Blog
>>>>>>> cursor/analyze-improve-and-deploy-application-f14e
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhitePapers;
