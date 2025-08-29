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

export default function WhitePapers() {
  const [selectedCategory, setSelectedCategory] = useState('All');
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
    }
  ];

  const filteredWhitePapers = whitePapers.filter(paper => {
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
                </div>
              </div>
            </div>
          </div>
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
                    </div>
                    
                    <a
                      href={paper.downloadUrl}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Download White Paper
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
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
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Latest Research
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get notified when we publish new white papers and research insights. Join our community of technology professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Our Experts
              </a>
              <a 
                href="/services"
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
