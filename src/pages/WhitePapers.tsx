import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { 
  BookOpen, 
  Download, 
  Search, 
  Filter, 
  ArrowRight, 
  Calendar, 
  User, 
  Eye, 
  Star,
  TrendingUp,
  FileText,
  Globe,
  Building,
  Brain,
  Shield,
  Zap,
  Rocket,
  Cpu,
  Database,
  Network,
  Lock,
  Heart,
  Leaf,
  Sun,
  Moon,
  Star as StarIcon,
  Award,
  CheckCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

<<<<<<< HEAD
const WhitePapers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
=======
export default function WhitePapers() {
  const [selectedCategory, setSelectedCategory] = useState('All');
>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud Computing',
    'Digital Transformation',
    'IoT & Edge Computing',
    'Blockchain',
    'Quantum Computing',
    'Healthcare Technology',
    'Financial Technology',
    'Sustainability',
    'Emerging Technologies'
  ];

  const whitePapers = [
    {
      id: 1,
      title: 'The Future of AI-Powered Business Intelligence',
      subtitle: 'Transforming Data Analytics with Advanced Machine Learning',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
<<<<<<< HEAD
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
=======
      downloads: 2847,
      rating: 4.8,
      views: 12500,
      featured: true,
      summary: 'Explore how AI-powered business intelligence is revolutionizing data analytics, enabling real-time insights and predictive capabilities that drive strategic decision-making.',
      tags: ['AI', 'Business Intelligence', 'Machine Learning', 'Data Analytics'],
      content: 'This comprehensive white paper examines the evolution of business intelligence from traditional reporting to AI-powered predictive analytics...',
      downloadUrl: '/whitepapers/ai-business-intelligence-2024.pdf',
      image: '/images/whitepapers/ai-bi-cover.jpg'
    },
    {
      id: 2,
      title: 'Zero-Trust Security Architecture for Modern Enterprises',
      subtitle: 'Building Resilient Cybersecurity in the Digital Age',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      category: 'Cybersecurity',
      downloads: 2156,
      rating: 4.9,
      views: 9800,
      featured: true,
      summary: 'Learn how zero-trust security architecture provides comprehensive protection against evolving cyber threats while maintaining operational efficiency.',
      tags: ['Cybersecurity', 'Zero Trust', 'Enterprise Security', 'Network Security'],
      content: 'As cyber threats become increasingly sophisticated, organizations must adopt a zero-trust approach to security...',
      downloadUrl: '/whitepapers/zero-trust-security-2024.pdf',
      image: '/images/whitepapers/cybersecurity-cover.jpg'
    },
    {
      id: 3,
      title: 'Edge Computing: The Next Frontier in IoT',
      subtitle: 'Enabling Real-Time Intelligence at the Network Edge',
      author: 'Dr. Emily Watson',
      date: '2024-01-05',
      category: 'IoT & Edge Computing',
      downloads: 1893,
      rating: 4.7,
      views: 8700,
      featured: false,
      summary: 'Discover how edge computing is revolutionizing IoT applications by bringing computation closer to data sources, enabling real-time processing and reduced latency.',
      tags: ['Edge Computing', 'IoT', 'Real-time Processing', 'Network Optimization'],
      content: 'The exponential growth of IoT devices and the need for real-time processing have driven the adoption of edge computing...',
      downloadUrl: '/whitepapers/edge-computing-iot-2024.pdf',
      image: '/images/whitepapers/edge-computing-cover.jpg'
    },
    {
      id: 4,
      title: 'Quantum Computing in Financial Services',
      subtitle: 'Revolutionizing Risk Assessment and Portfolio Optimization',
      author: 'Dr. James Thompson',
      date: '2023-12-28',
      category: 'Financial Technology',
      downloads: 1654,
      rating: 4.6,
      views: 7200,
      featured: false,
      summary: 'Explore the transformative potential of quantum computing in financial services, from risk modeling to algorithmic trading optimization.',
      tags: ['Quantum Computing', 'Financial Services', 'Risk Assessment', 'Portfolio Optimization'],
      content: 'Quantum computing represents a paradigm shift in computational capabilities, offering unprecedented processing power...',
      downloadUrl: '/whitepapers/quantum-financial-services-2023.pdf',
      image: '/images/whitepapers/quantum-finance-cover.jpg'
    },
    {
      id: 5,
      title: 'Sustainable Technology: Green Computing Solutions',
      subtitle: 'Reducing Environmental Impact Through Innovation',
      author: 'Lisa Park',
      date: '2023-12-20',
      category: 'Sustainability',
      downloads: 1423,
      rating: 4.5,
      views: 6500,
      featured: false,
      summary: 'Learn about innovative green computing solutions that reduce energy consumption and environmental impact while maintaining performance.',
      tags: ['Sustainability', 'Green Computing', 'Energy Efficiency', 'Environmental Impact'],
      content: 'As concerns about climate change and environmental sustainability grow, the technology sector must lead by example...',
      downloadUrl: '/whitepapers/sustainable-technology-2023.pdf',
      image: '/images/whitepapers/sustainability-cover.jpg'
    },
    {
      id: 6,
      title: 'Blockchain Beyond Cryptocurrency',
      subtitle: 'Enterprise Applications and Use Cases',
      author: 'David Kim',
      date: '2023-12-15',
      category: 'Blockchain',
      downloads: 1987,
      rating: 4.7,
      views: 8900,
      featured: false,
      summary: 'Discover how blockchain technology is transforming industries beyond cryptocurrency, from supply chain management to digital identity.',
      tags: ['Blockchain', 'Enterprise Applications', 'Supply Chain', 'Digital Identity'],
      content: 'While blockchain technology gained prominence through cryptocurrency, its potential extends far beyond digital currencies...',
      downloadUrl: '/whitepapers/blockchain-enterprise-2023.pdf',
      image: '/images/whitepapers/blockchain-cover.jpg'
    },
    {
      id: 7,
      title: 'Digital Transformation in Healthcare',
      subtitle: 'Improving Patient Care Through Technology Innovation',
      author: 'Dr. Maria Garcia',
      date: '2023-12-10',
      category: 'Healthcare Technology',
      downloads: 2234,
      rating: 4.8,
      views: 10200,
      featured: false,
      summary: 'Explore how digital transformation is revolutionizing healthcare delivery, improving patient outcomes and operational efficiency.',
      tags: ['Healthcare', 'Digital Transformation', 'Patient Care', 'Medical Technology'],
      content: 'The healthcare industry is undergoing a digital transformation that promises to improve patient care and outcomes...',
      downloadUrl: '/whitepapers/healthcare-digital-transformation-2023.pdf',
      image: '/images/whitepapers/healthcare-cover.jpg'
    },
    {
      id: 8,
      title: 'Cloud-Native Architecture Best Practices',
      subtitle: 'Building Scalable and Resilient Applications',
      author: 'Alex Johnson',
      date: '2023-12-05',
      category: 'Cloud Computing',
      downloads: 1876,
      rating: 4.6,
      views: 8400,
      featured: false,
      summary: 'Learn the best practices for designing and implementing cloud-native architectures that scale with your business needs.',
      tags: ['Cloud Computing', 'Microservices', 'Scalability', 'DevOps'],
      content: 'Cloud-native architecture represents a fundamental shift in how applications are designed, built, and deployed...',
      downloadUrl: '/whitepapers/cloud-native-architecture-2023.pdf',
      image: '/images/whitepapers/cloud-computing-cover.jpg'
>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae
    }
  ];

  const filteredWhitePapers = whitePapers.filter(paper => {
<<<<<<< HEAD
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
=======
    const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const sortedWhitePapers = [...filteredWhitePapers].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.date) - new Date(a.date);
      case 'downloads':
        return b.downloads - a.downloads;
      case 'rating':
        return b.rating - a.rating;
      case 'views':
        return b.views - a.views;
      default:
        return 0;
    }
  });

  const featuredPapers = whitePapers.filter(paper => paper.featured);

  return (
    <>
      <SEO
        title="White Papers | Zion Tech Group"
        description="Access our comprehensive collection of white papers covering AI, cybersecurity, cloud computing, and emerging technologies. Gain insights from industry experts."
        keywords="white papers, research papers, technology insights, AI research, cybersecurity research, Zion Tech Group"
        canonical="https://ziontechgroup.com/white-papers"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              White Papers & Research
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Access in-depth research and insights from our technology experts. Explore cutting-edge topics in AI, cybersecurity, cloud computing, and emerging technologies.
            </p>
            
            {/* Search and Filter Controls */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search white papers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                
                {/* Category Filter */}
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                {/* Sort By */}
                <div>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="date">Sort by Date</option>
                    <option value="downloads">Sort by Downloads</option>
                    <option value="rating">Sort by Rating</option>
                    <option value="views">Sort by Views</option>
                  </select>
                </div>
                
                {/* Results Count */}
                <div className="flex items-center justify-center">
                  <span className="text-gray-300">
                    {filteredWhitePapers.length} of {whitePapers.length} papers
                  </span>
>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
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
=======
        </section>

        {/* Featured White Papers */}
        {featuredPapers.length > 0 && (
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Featured Research
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPapers.map((paper) => (
                  <div
                    key={paper.id}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm rounded-full">
                          Featured
                        </span>
                        <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                          {paper.category}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-yellow-400">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="text-white">{paper.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{paper.title}</h3>
                    <p className="text-gray-300 mb-4">{paper.subtitle}</p>
                    <p className="text-gray-400 text-sm mb-6">{paper.summary}</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {paper.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(paper.date).toLocaleDateString()}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          {paper.downloads.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {paper.views.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {paper.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae
                    </div>
                    
                    <a
                      href={paper.downloadUrl}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Download White Paper
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
<<<<<<< HEAD
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
=======
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All White Papers Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              All White Papers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedWhitePapers.map((paper) => (
                <div
                  key={paper.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                      {paper.category}
                    </span>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-white text-sm">{paper.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{paper.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">{paper.subtitle}</p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {paper.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(paper.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {paper.downloads.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {paper.views.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {paper.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                    {paper.tags.length > 3 && (
                      <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600">
                        +{paper.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <a
                    href={paper.downloadUrl}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 text-sm"
                  >
                    Download PDF
                    <Download className="w-4 h-4 ml-2" />
                  </a>
>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae
                </div>
              ))}
            </div>

            {filteredWhitePapers.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No white papers found</h3>
                <p className="text-gray-300">Try adjusting your search criteria or filters.</p>
              </div>
            )}
          </div>
<<<<<<< HEAD

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
=======
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Latest Research
            </h2>
<<<<<<< HEAD
            <p className="text-lg text-gray-300 mb-8">
              Get notified when we publish new white papers and research insights. 
              Join thousands of professionals staying ahead of technology trends.
=======
            <p className="text-xl text-gray-300 mb-8">
              Get notified when we publish new white papers and research insights. Join our community of technology professionals.
>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
<<<<<<< HEAD
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
=======
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Experts
              </a>
              <a 
                href="/services"
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore Our Services
>>>>>>> 3191a39ce350ca0a22170f61a4f4ad183cb185ae
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
