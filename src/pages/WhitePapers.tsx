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

const WhitePapers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
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
      downloads: 15420,
      views: 45680,
      rating: 4.9,
      fileSize: '2.4 MB',
      downloadUrl: '/whitepapers/ai-business-intelligence-2030.pdf',
      tags: ['AI', 'Business Intelligence', 'Machine Learning', 'Digital Transformation']
    },
    {
      id: 2,
      title: 'Zero Trust Security Architecture: Building Resilient Cyber Defense Systems',
      author: 'Michael Rodriguez, Security Director',
      date: '2024-12-20',
      category: 'Cybersecurity',
      industry: 'All Industries',
      summary: 'A deep dive into implementing zero trust security principles across enterprise networks, covering architecture design, implementation strategies, and best practices for modern organizations.',
      keyInsights: [
        'Zero trust principles and implementation strategies',
        'Network segmentation and access control',
        'Identity and access management (IAM)',
        'Continuous monitoring and threat detection'
      ],
      downloads: 12850,
      views: 38920,
      rating: 4.8,
      fileSize: '1.8 MB',
      downloadUrl: '/whitepapers/zero-trust-security-architecture.pdf',
      tags: ['Cybersecurity', 'Zero Trust', 'Network Security', 'Access Control']
    },
    {
      id: 3,
      title: 'Cloud-Native DevOps: Accelerating Digital Transformation',
      author: 'Emily Watson, DevOps Engineer',
      date: '2024-12-10',
      category: 'Cloud & DevOps',
      industry: 'Technology',
      summary: 'Explore how cloud-native DevOps practices are revolutionizing software development and deployment, enabling faster delivery cycles and improved operational efficiency.',
      keyInsights: [
        'Cloud-native architecture principles',
        'CI/CD pipeline optimization',
        'Infrastructure as Code (IaC)',
        'Monitoring and observability'
      ],
      downloads: 9870,
      views: 25640,
      rating: 4.7,
      fileSize: '1.6 MB',
      downloadUrl: '/whitepapers/cloud-native-devops-transformation.pdf',
      tags: ['DevOps', 'Cloud Computing', 'CI/CD', 'Infrastructure']
    },
    {
      id: 4,
      title: 'Healthcare AI Revolution: Transforming Patient Care Through Technology',
      author: 'Dr. James Wilson, Healthcare AI Specialist',
      date: '2024-11-25',
      category: 'Healthcare Tech',
      industry: 'Healthcare',
      summary: 'Discover how artificial intelligence is revolutionizing healthcare delivery, from diagnostic assistance to personalized treatment plans and operational optimization.',
      keyInsights: [
        'AI-powered diagnostic tools and accuracy',
        'Personalized medicine and treatment plans',
        'Healthcare data privacy and security',
        'Integration with existing healthcare systems'
      ],
      downloads: 11230,
      views: 32450,
      rating: 4.9,
      fileSize: '2.1 MB',
      downloadUrl: '/whitepapers/healthcare-ai-revolution.pdf',
      tags: ['Healthcare', 'AI', 'Medical Technology', 'Patient Care']
    },
    {
      id: 5,
      title: 'Sustainable Technology: Green Computing for a Better Future',
      author: 'Lisa Thompson, Sustainability Director',
      date: '2024-11-15',
      category: 'Sustainability',
      industry: 'All Industries',
      summary: 'Learn about sustainable technology practices and how organizations can reduce their environmental impact while maintaining operational efficiency and innovation.',
      keyInsights: [
        'Green computing principles and practices',
        'Energy-efficient data center design',
        'Sustainable software development',
        'Environmental impact measurement'
      ],
      downloads: 8760,
      views: 21890,
      rating: 4.6,
      fileSize: '1.9 MB',
      downloadUrl: '/whitepapers/sustainable-technology-green-computing.pdf',
      tags: ['Sustainability', 'Green Computing', 'Energy Efficiency', 'Environmental Impact']
    },
    {
      id: 6,
      title: 'Edge Computing and IoT: The Future of Distributed Intelligence',
      author: 'David Kim, IoT Architect',
      date: '2024-11-05',
      category: 'IoT & Edge',
      industry: 'Manufacturing',
      summary: 'Explore the convergence of edge computing and IoT technologies, enabling real-time processing and intelligent decision-making at the network edge.',
      keyInsights: [
        'Edge computing architecture and benefits',
        'IoT device management and security',
        'Real-time data processing strategies',
        'Scalability and performance optimization'
      ],
      downloads: 7430,
      views: 19560,
      rating: 4.7,
      fileSize: '1.7 MB',
      downloadUrl: '/whitepapers/edge-computing-iot-future.pdf',
      tags: ['Edge Computing', 'IoT', 'Real-time Processing', 'Distributed Systems']
    }
  ];

  const filteredWhitePapers = whitePapers.filter(paper => {
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || paper.date.startsWith(selectedYear);
    const matchesSearch = searchQuery === '' || 
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesYear && matchesSearch;
  });

  const handleDownload = (paper: any) => {
    // Simulate download
    console.log(`Downloading: ${paper.title}`);
    // In a real app, this would trigger the actual download
  };

  const years = ['all', '2025', '2024', '2023', '2022'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="White Papers - Zion Tech Group"
        description="Explore our comprehensive collection of white papers on AI, cybersecurity, cloud computing, and digital transformation strategies."
        keywords="white papers, research, AI, cybersecurity, cloud computing, digital transformation, technology insights"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <FileText className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              White Papers &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Research Insights
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Dive deep into our research and insights on cutting-edge technologies, 
              industry trends, and innovative solutions that are shaping the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                50+ Research Papers
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Expert Authors
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Free Downloads
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search white papers, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category === 'All' ? 'all' : category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Year</label>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year === 'all' ? 'All Years' : year}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setSelectedYear('all');
                    }}
                    className="w-full px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors duration-200"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Papers Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Research Papers ({filteredWhitePapers.length})
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover insights from our research team and industry experts on the latest 
              technology trends and innovative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredWhitePapers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                      {paper.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{paper.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {paper.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {paper.summary}
                  </p>

                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {paper.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(paper.date).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Insights:</h4>
                    <ul className="space-y-1">
                      {paper.keyInsights.slice(0, 3).map((insight, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
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
                </div>
              </motion.div>
            ))}
          </div>

          {filteredWhitePapers.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No white papers found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Our Latest Research
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get notified when we publish new white papers and research insights. 
              Join thousands of professionals staying ahead of technology trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
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
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhitePapers;
