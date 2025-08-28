import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Newspaper, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter,
  ExternalLink,
  TrendingUp,
  Award,
  Users,
  Globe,
  Zap,
  Brain,
  Cloud,
  Lock,
  Rocket,
  Star,
  Eye,
  Share2,
  Bookmark,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function News() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [expandedNews, setExpandedNews] = useState<string | null>(null);

  const newsCategories = [
    { id: 'all', name: 'All News', count: 24 },
    { id: 'company', name: 'Company Updates', count: 8 },
    { id: 'technology', name: 'Technology', count: 6 },
    { id: 'partnerships', name: 'Partnerships', count: 4 },
    { id: 'awards', name: 'Awards & Recognition', count: 3 },
    { id: 'industry', name: 'Industry Insights', count: 3 }
  ];

  const years = [
    { id: 'all', name: 'All Years' },
    { id: '2024', name: '2024' },
    { id: '2023', name: '2023' },
    { id: '2022', name: '2022' }
  ];

  const featuredNews = [
    {
      id: 'news-001',
      title: 'Zion Tech Group Named Leader in AI-Powered Business Solutions by Gartner',
      excerpt: 'We are thrilled to announce that Zion Tech Group has been recognized as a Leader in the 2024 Gartner Magic Quadrant for AI-Powered Business Solutions.',
      content: 'Zion Tech Group has been positioned as a Leader in the 2024 Gartner Magic Quadrant for AI-Powered Business Solutions. This recognition validates our commitment to delivering cutting-edge AI solutions that drive real business value for our clients. Our comprehensive portfolio of AI services, including machine learning, natural language processing, and predictive analytics, has consistently demonstrated measurable ROI and transformative impact across industries.',
      category: 'awards',
      author: 'Sarah Johnson',
      authorRole: 'Chief Marketing Officer',
      publishDate: '2024-01-15',
      readTime: '5 min read',
      image: '/news/gartner-award-2024.jpg',
      featured: true,
      tags: ['AI', 'Gartner', 'Leadership', 'Recognition'],
      views: 2847,
      shares: 156
    },
    {
      id: 'news-002',
      title: 'Major Partnership Announcement: Zion Tech Group Joins Forces with Microsoft Azure',
      excerpt: 'Strategic partnership to deliver enhanced cloud-native AI solutions and accelerate digital transformation for enterprise clients.',
      content: 'We are excited to announce a strategic partnership with Microsoft Azure that will enable us to deliver enhanced cloud-native AI solutions to our enterprise clients. This partnership combines our expertise in AI and machine learning with Azure\'s robust cloud infrastructure, creating a powerful platform for digital transformation. Together, we will offer integrated solutions that help organizations harness the full potential of AI while maintaining the security and scalability they require.',
      category: 'partnerships',
      author: 'Michael Chen',
      authorRole: 'VP of Strategic Partnerships',
      publishDate: '2024-01-10',
      readTime: '4 min read',
      image: '/news/microsoft-partnership.jpg',
      featured: true,
      tags: ['Partnership', 'Microsoft', 'Azure', 'Cloud', 'AI'],
      views: 2156,
      shares: 89
    },
    {
      id: 'news-003',
      title: 'Revolutionary Quantum Computing Breakthrough in Financial Services',
      excerpt: 'Our quantum computing team achieves breakthrough in portfolio optimization, reducing computation time from days to minutes.',
      content: 'Our quantum computing research team has achieved a significant breakthrough in financial portfolio optimization algorithms. By leveraging quantum computing principles, we\'ve developed a new approach that reduces computation time from days to minutes for complex portfolio scenarios. This breakthrough has immediate applications in risk management, asset allocation, and trading strategies, potentially revolutionizing how financial institutions approach quantitative analysis.',
      category: 'technology',
      author: 'Dr. Emily Rodriguez',
      authorRole: 'Head of Quantum Computing Research',
      publishDate: '2024-01-05',
      readTime: '6 min read',
      image: '/news/quantum-breakthrough.jpg',
      featured: true,
      tags: ['Quantum Computing', 'Financial Services', 'Research', 'Innovation'],
      views: 1892,
      shares: 203
    }
  ];

  const recentNews = [
    {
      id: 'news-004',
      title: 'Zion Tech Group Expands European Operations with New Office in Berlin',
      excerpt: 'Strategic expansion to better serve our growing European client base and tap into the region\'s thriving tech ecosystem.',
      category: 'company',
      author: 'Jennifer Smith',
      authorRole: 'VP of International Operations',
      publishDate: '2024-01-12',
      readTime: '3 min read',
      image: '/news/berlin-office.jpg',
      featured: false,
      tags: ['Expansion', 'Europe', 'Berlin', 'International'],
      views: 1247,
      shares: 67
    },
    {
      id: 'news-005',
      title: 'New AI Ethics Framework Launched to Ensure Responsible AI Development',
      excerpt: 'Comprehensive framework addresses bias, transparency, and accountability in AI systems.',
      category: 'technology',
      author: 'Dr. David Kim',
      authorRole: 'Chief AI Ethics Officer',
      publishDate: '2024-01-08',
      readTime: '4 min read',
      image: '/news/ai-ethics.jpg',
      featured: false,
      tags: ['AI Ethics', 'Responsible AI', 'Transparency', 'Bias'],
      views: 1567,
      shares: 134
    },
    {
      id: 'news-006',
      title: 'Zion Tech Group Named Top Workplace for Technology Professionals',
      excerpt: 'Recognition highlights our commitment to employee development, innovation culture, and work-life balance.',
      category: 'awards',
      author: 'Lisa Thompson',
      authorRole: 'VP of Human Resources',
      publishDate: '2024-01-03',
      readTime: '3 min read',
      image: '/news/top-workplace.jpg',
      featured: false,
      tags: ['Workplace', 'Recognition', 'Employee Satisfaction', 'Culture'],
      views: 892,
      shares: 45
    },
    {
      id: 'news-007',
      title: 'Industry Report: The Future of AI in Manufacturing 2024',
      excerpt: 'Comprehensive analysis of AI adoption trends and opportunities in the manufacturing sector.',
      category: 'industry',
      author: 'Robert Wilson',
      authorRole: 'Industry Research Director',
      publishDate: '2023-12-28',
      readTime: '7 min read',
      image: '/news/manufacturing-ai.jpg',
      featured: false,
      tags: ['Manufacturing', 'AI Trends', 'Industry Report', '2024'],
      views: 2034,
      shares: 178
    },
    {
      id: 'news-008',
      title: 'Cybersecurity Partnership with Leading Threat Intelligence Provider',
      excerpt: 'Enhanced security offerings to protect clients from evolving cyber threats.',
      category: 'partnerships',
      author: 'Alex Turner',
      authorRole: 'VP of Security Solutions',
      publishDate: '2023-12-20',
      readTime: '3 min read',
      image: '/news/cybersecurity-partnership.jpg',
      featured: false,
      tags: ['Cybersecurity', 'Partnership', 'Threat Intelligence', 'Security'],
      views: 1456,
      shares: 89
    },
    {
      id: 'news-009',
      title: 'Zion Tech Group Achieves ISO 27001 Certification for Information Security',
      excerpt: 'International standard certification demonstrates our commitment to protecting client data and information.',
      category: 'company',
      author: 'Maria Garcia',
      authorRole: 'Chief Information Security Officer',
      publishDate: '2023-12-15',
      readTime: '2 min read',
      image: '/news/iso-certification.jpg',
      featured: false,
      tags: ['ISO 27001', 'Certification', 'Security', 'Compliance'],
      views: 1123,
      shares: 56
    }
  ];

  const allNews = [...featuredNews, ...recentNews];

  const toggleNewsExpansion = (newsId: string) => {
    setExpandedNews(expandedNews === newsId ? null : newsId);
  };

  const filteredNews = allNews.filter(news => {
    if (selectedCategory !== 'all' && news.category !== selectedCategory) return false;
    if (selectedYear !== 'all' && !news.publishDate.startsWith(selectedYear)) return false;
    if (searchQuery) {
      return news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
             news.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return true;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'company': return 'bg-blue-500/20 text-blue-400';
      case 'technology': return 'bg-purple-500/20 text-purple-400';
      case 'partnerships': return 'bg-green-500/20 text-green-400';
      case 'awards': return 'bg-yellow-500/20 text-yellow-400';
      case 'industry': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

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
        title="News & Press - Zion Tech Group"
        description="Stay updated with the latest news, press releases, and company updates from Zion Tech Group. Discover our innovations, partnerships, and industry insights."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl mb-6">
              <Newspaper className="w-10 h-10 text-cyan-400" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Latest
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}News & Updates
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Stay informed about our latest innovations, partnerships, awards, and 
              insights that are shaping the future of technology and business.
            </p>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12">
        <div className="container-responsive">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search news, articles, and updates..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                >
                  {newsCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div className="lg:w-48">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                >
                  {years.map((year) => (
                    <option key={year.id} value={year.id}>
                      {year.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Featured Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most important announcements and breakthrough stories that are 
              shaping the future of technology and business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredNews.map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  {/* Placeholder for news image */}
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Newspaper className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                      <p className="text-gray-400">News Image</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                        {newsCategories.find(c => c.id === news.category)?.name}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                        Featured
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                      {news.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {news.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(news.publishDate)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {news.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <User className="w-4 h-4" />
                        {news.author}
                      </div>
                      <button
                        onClick={() => toggleNewsExpansion(news.id)}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      >
                        {expandedNews === news.id ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    
                    {expandedNews === news.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-slate-600/50"
                      >
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          {news.content}
                        </p>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Tags:</h4>
                          <div className="flex flex-wrap gap-2">
                            {news.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                          <div className="flex items-center gap-2">
                            <Eye className="w-4 h-4" />
                            {news.views.toLocaleString()} views
                          </div>
                          <div className="flex items-center gap-2">
                            <Share2 className="w-4 h-4" />
                            {news.shares} shares
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105">
                            <Bookmark className="w-4 h-4 mr-2" />
                            Save
                          </button>
                          <button className="inline-flex items-center px-4 py-2 border border-cyan-400 text-cyan-400 text-sm font-medium rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Recent Updates
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay current with our latest company news, technology insights, and 
              industry developments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.filter(news => !news.featured).map((news, index) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                  {/* Placeholder for news image */}
                  <div className="aspect-video bg-gradient-to-br from-slate-600/20 to-slate-700/20 flex items-center justify-center">
                    <div className="text-center p-6">
                      <Newspaper className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-500 text-sm">News Image</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
                        {newsCategories.find(c => c.id === news.category)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                      {news.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {news.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(news.publishDate)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {news.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <User className="w-4 h-4" />
                        {news.author}
                      </div>
                      <button
                        onClick={() => toggleNewsExpansion(news.id)}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      >
                        {expandedNews === news.id ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    
                    {expandedNews === news.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-slate-600/50"
                      >
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-white mb-2">Tags:</h4>
                          <div className="flex flex-wrap gap-2">
                            {news.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                          <div className="flex items-center gap-2">
                            <Eye className="w-4 h-4" />
                            {news.views.toLocaleString()} views
                          </div>
                          <div className="flex items-center gap-2">
                            <Share2 className="w-4 h-4" />
                            {news.shares} shares
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <button className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200">
                            <Bookmark className="w-4 h-4 mr-2" />
                            Save
                          </button>
                          <button className="inline-flex items-center px-3 py-2 border border-cyan-400 text-cyan-400 text-sm font-medium rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Never miss important updates, industry insights, or company news. 
              Subscribe to our newsletter and stay ahead of the curve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
              />
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Subscribe
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
