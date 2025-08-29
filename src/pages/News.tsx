import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { 
  Newspaper, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Share2,
  Bookmark,
  Eye,
  TrendingUp,
  Award,
  Star,
  CheckCircle,
  Zap,
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
  Globe,
  Building,
  Industry,
  ChartBar,
  BarChart3,
  PieChart,
  Activity,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Plus,
  Download,
  FileText,
  Video,
  Play,
  Download as DownloadIcon,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  Users,
  Clock as ClockIcon,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

export const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Company News', 'Industry Updates', 'Technology', 'Partnerships', 'Awards', 'Research', 'Events'];
  const years = ['All', '2024', '2023', '2022', '2021'];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Announces Breakthrough in Quantum AI Research',
      category: 'Research',
      date: '2024-12-15',
      author: 'Dr. Sarah Chen',
      summary: 'Zion Tech Group has achieved a major milestone in quantum artificial intelligence research, developing hybrid algorithms that demonstrate quantum advantage in optimization problems.',
      content: 'Our research team, led by Dr. Sarah Chen, has successfully developed quantum-classical hybrid algorithms that outperform classical approaches in specific problem domains. This breakthrough opens new possibilities for solving complex optimization problems in logistics, finance, and drug discovery.',
      image: '/images/news/quantum-ai-breakthrough.jpg',
      featured: true,
      tags: ['Quantum Computing', 'AI', 'Research', 'Breakthrough'],
      readTime: '5 min read',
      views: 15420,
      shares: 892,
      externalUrl: 'https://example.com/quantum-ai-breakthrough',
      industry: 'Technology',
      impact: 'High'
    },
    {
      id: 2,
      title: 'Zion Tech Group Named Top 10 AI Companies by TechCrunch',
      category: 'Awards',
      date: '2024-12-10',
      author: 'Marketing Team',
      summary: 'Zion Tech Group has been recognized as one of the top 10 AI companies in 2024 by TechCrunch, highlighting our innovative approach to artificial intelligence solutions.',
      content: 'TechCrunch has named Zion Tech Group as one of the top 10 AI companies of 2024, recognizing our innovative approach to artificial intelligence solutions and our commitment to ethical AI development. This recognition validates our mission to create AI that benefits humanity.',
      image: '/images/news/techcrunch-award.jpg',
      featured: true,
      tags: ['Award', 'AI', 'Recognition', 'TechCrunch'],
      readTime: '3 min read',
      views: 12350,
      shares: 567,
      externalUrl: 'https://techcrunch.com/top-ai-companies-2024',
      industry: 'Technology',
      impact: 'Medium'
    },
    {
      id: 3,
      title: 'Strategic Partnership with Microsoft Azure Announced',
      category: 'Partnerships',
      date: '2024-12-05',
      author: 'Business Development Team',
      summary: 'Zion Tech Group and Microsoft Azure announce strategic partnership to deliver enterprise-grade AI solutions on the cloud platform.',
      content: 'Zion Tech Group and Microsoft Azure have announced a strategic partnership that will enable enterprises to leverage our advanced AI solutions on Microsoft\'s cloud platform. This collaboration will provide customers with scalable, secure, and enterprise-ready AI capabilities.',
      image: '/images/news/microsoft-partnership.jpg',
      featured: false,
      tags: ['Partnership', 'Microsoft', 'Azure', 'Enterprise AI'],
      readTime: '4 min read',
      views: 9870,
      shares: 423,
      externalUrl: 'https://microsoft.com/partnership-announcement',
      industry: 'Technology',
      impact: 'High'
    },
    {
      id: 4,
      title: 'New AI-Powered Cybersecurity Suite Launched',
      category: 'Company News',
      date: '2024-11-28',
      author: 'Product Team',
      summary: 'Zion Tech Group launches comprehensive AI-powered cybersecurity suite designed to protect enterprises from evolving cyber threats.',
      content: 'We are excited to announce the launch of our comprehensive AI-powered cybersecurity suite. This innovative solution combines machine learning algorithms with advanced threat detection to provide real-time protection against evolving cyber threats.',
      image: '/images/news/cybersecurity-suite.jpg',
      featured: false,
      tags: ['Cybersecurity', 'AI', 'Product Launch', 'Enterprise'],
      readTime: '6 min read',
      views: 8760,
      shares: 345,
      externalUrl: null,
      industry: 'Cybersecurity',
      impact: 'Medium'
    },
    {
      id: 5,
      title: 'Zion Tech Group Expands to European Market',
      category: 'Company News',
      date: '2024-11-20',
      author: 'International Expansion Team',
      summary: 'Zion Tech Group announces expansion into European markets with new offices in London, Berlin, and Paris.',
      content: 'Zion Tech Group is expanding its global presence with new offices in London, Berlin, and Paris. This expansion will enable us to better serve our European customers and partners while fostering local innovation ecosystems.',
      image: '/images/news/european-expansion.jpg',
      featured: false,
      tags: ['Expansion', 'Europe', 'Global Growth', 'International'],
      readTime: '4 min read',
      views: 7650,
      shares: 298,
      externalUrl: null,
      industry: 'Technology',
      impact: 'Medium'
    },
    {
      id: 6,
      title: 'Industry Report: AI Adoption in Healthcare 2024',
      category: 'Industry Updates',
      date: '2024-11-15',
      author: 'Research Team',
      summary: 'Zion Tech Group releases comprehensive report on AI adoption trends in healthcare, revealing significant growth in telemedicine and diagnostic AI.',
      content: 'Our latest industry report reveals that AI adoption in healthcare has increased by 67% in 2024, with telemedicine and diagnostic AI leading the growth. The report provides insights into implementation challenges and success factors.',
      image: '/images/news/healthcare-ai-report.jpg',
      featured: false,
      tags: ['Healthcare', 'AI', 'Industry Report', 'Research'],
      readTime: '8 min read',
      views: 6540,
      shares: 234,
      externalUrl: 'https://ziontechgroup.com/reports/healthcare-ai-2024',
      industry: 'Healthcare',
      impact: 'Low'
    },
    {
      id: 7,
      title: 'Zion Tech Group CEO Featured in Forbes Technology',
      category: 'Company News',
      date: '2024-11-10',
      author: 'PR Team',
      summary: 'Our CEO discusses the future of AI and responsible technology development in exclusive Forbes Technology interview.',
      content: 'Our CEO was featured in Forbes Technology discussing the future of AI and the importance of responsible technology development. The interview covers our approach to ethical AI and our vision for technology that benefits society.',
      image: '/images/news/forbes-interview.jpg',
      featured: false,
      tags: ['CEO', 'Forbes', 'Interview', 'AI Ethics'],
      readTime: '5 min read',
      views: 5430,
      shares: 187,
      externalUrl: 'https://forbes.com/ai-future-interview',
      industry: 'Technology',
      impact: 'Medium'
    },
    {
      id: 8,
      title: 'New Sustainability Initiative: Green AI Computing',
      category: 'Company News',
      date: '2024-11-05',
      author: 'Sustainability Team',
      summary: 'Zion Tech Group launches Green AI Computing initiative to reduce carbon footprint of AI operations.',
      content: 'We are launching our Green AI Computing initiative to reduce the carbon footprint of AI operations. This program includes energy-efficient algorithms, renewable energy-powered data centers, and carbon offset programs.',
      image: '/images/news/green-ai-initiative.jpg',
      featured: false,
      tags: ['Sustainability', 'Green Computing', 'AI', 'Environment'],
      readTime: '4 min read',
      views: 4320,
      shares: 156,
      externalUrl: null,
      industry: 'Technology',
      impact: 'Low'
    },
    {
      id: 9,
      title: 'Zion Tech Group Wins Innovation Award at CES 2024',
      category: 'Awards',
      date: '2024-10-30',
      author: 'Events Team',
      summary: 'Zion Tech Group receives Innovation Award at CES 2024 for breakthrough AI-powered smart city solution.',
      content: 'Zion Tech Group has won the Innovation Award at CES 2024 for our breakthrough AI-powered smart city solution. This recognition highlights our commitment to creating technology that improves urban living.',
      image: '/images/news/ces-innovation-award.jpg',
      featured: false,
      tags: ['Award', 'CES', 'Innovation', 'Smart Cities'],
      readTime: '3 min read',
      views: 3980,
      shares: 134,
      externalUrl: 'https://ces.tech/innovation-awards-2024',
      industry: 'Technology',
      impact: 'Medium'
    },
    {
      id: 10,
      title: 'Partnership with Stanford University for AI Research',
      category: 'Partnerships',
      date: '2024-10-25',
      author: 'Research Team',
      summary: 'Zion Tech Group announces research partnership with Stanford University to advance AI safety and ethics.',
      content: 'We are excited to announce a research partnership with Stanford University focused on AI safety and ethics. This collaboration will advance our understanding of responsible AI development and deployment.',
      image: '/images/news/stanford-partnership.jpg',
      featured: false,
      tags: ['Partnership', 'Stanford', 'Research', 'AI Safety'],
      readTime: '4 min read',
      views: 3650,
      shares: 123,
      externalUrl: 'https://stanford.edu/ai-research-partnership',
      industry: 'Technology',
      impact: 'Medium'
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesYear = selectedYear === 'All' || article.date.startsWith(selectedYear);
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesYear && matchesSearch;
  });

  const featuredArticles = newsArticles.filter(article => article.featured);
  const recentArticles = newsArticles.slice(0, 5);

  const stats = [
    { number: '100+', label: 'News Articles', icon: Newspaper },
    { number: '50+', label: 'Media Mentions', icon: Star },
    { number: '25+', label: 'Industry Awards', icon: Award },
    { number: '15+', label: 'Strategic Partnerships', icon: Users }
  ];

  const impactLevels = {
    'Low': 'text-green-400',
    'Medium': 'text-yellow-400',
    'High': 'text-orange-400',
    'Very High': 'text-red-400'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="News - Zion Tech Group"
        description="Stay updated with the latest news, announcements, and industry insights from Zion Tech Group. Read about our innovations, partnerships, and achievements."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                <Newspaper className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Latest
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> News</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Stay updated with the latest news, announcements, and industry insights from Zion Tech Group. 
              Read about our innovations, partnerships, and achievements.
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search news articles..."
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
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white text-center mb-16"
            >
              Featured News
            </motion.h2>
            
            <div className="space-y-12">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
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
                          {article.category}
                        </span>
                        <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                          {article.industry}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">{article.title}</h3>
                      <p className="text-slate-300 mb-6 leading-relaxed">{article.summary}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300 text-sm">{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300 text-sm">
                            {new Date(article.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'long', 
                              day: 'numeric' 
                            })}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300 text-sm">{article.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Eye className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300 text-sm">{article.views.toLocaleString()} views</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                          {article.tags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        {article.externalUrl ? (
                          <a
                            href={article.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
                          >
                            <ExternalLink className="w-5 h-5 mr-2" />
                            Read Full Article
                          </a>
                        ) : (
                          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300">
                            <FileText className="w-5 h-5 mr-2" />
                            Read More
                          </button>
                        )}
                        <button className="inline-flex items-center px-4 py-3 border border-slate-600 text-slate-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </button>
                      </div>
                    </div>
                    
                    {/* Article Metrics */}
                    <div className="space-y-6">
                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Article Metrics</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Category:</span>
                            <span className="text-white">{article.category}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Industry:</span>
                            <span className="text-white">{article.industry}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Read Time:</span>
                            <span className="text-white">{article.readTime}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Impact:</span>
                            <span className={`${impactLevels[article.impact as keyof typeof impactLevels]}`}>
                              {article.impact}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Engagement</h4>
                        <div className="space-y-3">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400 mb-1">{article.views.toLocaleString()}</div>
                            <div className="text-slate-400 text-sm">Views</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-400 mb-1">{article.shares}</div>
                            <div className="text-slate-400 text-sm">Shares</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Actions</h4>
                        <div className="space-y-3">
                          <button className="w-full flex items-center justify-center px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-600/50 transition-all duration-300">
                            <Bookmark className="w-4 h-4 mr-2" />
                            Bookmark
                          </button>
                          <button className="w-full flex items-center justify-center px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-600/50 transition-all duration-300">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All News Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">All News Articles</h2>
              <p className="text-slate-300 text-lg">
                Showing {filteredArticles.length} of {newsArticles.length} news articles
              </p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.filter(article => !article.featured).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                      {article.category}
                    </span>
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                      {article.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">
                    <strong>By:</strong> {article.author}
                  </p>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">{article.summary}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Tags:</h4>
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700/30 text-slate-300 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{article.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share2 className="w-4 h-4" />
                        <span>{article.shares}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${impactLevels[article.impact as keyof typeof impactLevels]} bg-opacity-20`}>
                        {article.impact}
                      </span>
                      {article.externalUrl && (
                        <a
                          href={article.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No news articles found</h3>
              <p className="text-slate-400">Try adjusting your filters or search terms</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with Zion Tech Group
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Subscribe to our newsletter to receive the latest news, updates, and insights 
              directly in your inbox. Never miss important announcements and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="mr-2 w-5 h-5" />
                Subscribe to Newsletter
              </a>
              <a
                href="/press"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Press Resources
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;
