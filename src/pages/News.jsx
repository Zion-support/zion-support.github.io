import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search,
  Filter,
  Clock,
  TrendingUp,
  Globe,
  Brain,
  Shield,
  Cloud
} from 'lucide-react';

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSource, setSelectedSource] = useState('All Sources');
  const [selectedTimeframe, setSelectedTimeframe] = useState('All Time');

  const categories = [
    'All',
    'Company News',
    'Product Updates',
    'Industry Insights',
    'Awards & Recognition',
    'Partnerships',
    'Research & Development',
    'Market Trends'
  ];

  const sources = [
    'All Sources',
    'Company Press Releases',
    'Industry Reports',
    'Technology News',
    'Research Papers',
    'Partner Updates',
    'Customer Success Stories'
  ];

  const timeframes = [
    'All Time',
    'Last 24 Hours',
    'Last Week',
    'Last Month',
    'Last 3 Months',
    'Last Year'
  ];

  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI Autonomous Business Platform 2029",
      excerpt: "Our latest AI platform revolutionizes business operations with autonomous decision-making capabilities, setting new industry standards for intelligent automation.",
      content: "Zion Tech Group is proud to announce the launch of our groundbreaking AI Autonomous Business Platform 2029. This revolutionary platform represents a paradigm shift in how businesses approach automation and decision-making processes.",
      category: "Product Updates",
      source: "Company Press Releases",
      author: "Dr. Sarah Chen",
      publishDate: "2024-01-15",
      readTime: "5 min read",
      featured: true,
      tags: ["AI", "Automation", "Business Platform", "Innovation"]
    },
    {
      id: 2,
      title: "Zion Tech Group Achieves SOC 2 Type II Compliance Certification",
      excerpt: "We've successfully obtained SOC 2 Type II compliance, demonstrating our commitment to the highest standards of security and data protection.",
      content: "Zion Tech Group has achieved SOC 2 Type II compliance certification, a significant milestone that validates our commitment to maintaining the highest standards of security, availability, and confidentiality for our clients.",
      category: "Company News",
      source: "Company Press Releases",
      author: "Michael Rodriguez",
      publishDate: "2024-01-10",
      readTime: "3 min read",
      featured: false,
      tags: ["Security", "Compliance", "SOC 2", "Certification"]
    },
    {
      id: 3,
      title: "New Partnership with Global Cloud Provider Expands Our Service Portfolio",
      excerpt: "Strategic partnership enables us to offer enhanced cloud solutions and expanded global reach for our enterprise clients.",
      content: "We're excited to announce a strategic partnership with a leading global cloud provider, significantly expanding our service portfolio and enabling us to deliver enhanced cloud solutions to our enterprise clients worldwide.",
      category: "Partnerships",
      source: "Company Press Releases",
      author: "Lisa Thompson",
      publishDate: "2024-01-08",
      readTime: "4 min read",
      featured: false,
      tags: ["Partnership", "Cloud", "Enterprise", "Global Expansion"]
    },
    {
      id: 4,
      title: "AI in Healthcare: Transforming Patient Care and Medical Research",
      excerpt: "Exploring how artificial intelligence is revolutionizing healthcare delivery and accelerating medical research breakthroughs.",
      content: "Artificial intelligence is transforming healthcare in unprecedented ways, from improving diagnostic accuracy to accelerating drug discovery. Our research team explores the latest developments and their implications for the future of medicine.",
      category: "Industry Insights",
      source: "Research Papers",
      author: "Dr. James Kim",
      publishDate: "2024-01-05",
      readTime: "8 min read",
      featured: false,
      tags: ["AI", "Healthcare", "Medical Research", "Innovation"]
    },
    {
      id: 5,
      title: "Zion Tech Group Named Top AI Solutions Provider by Industry Analyst",
      excerpt: "Recognition as a leading AI solutions provider validates our expertise and commitment to delivering cutting-edge technology solutions.",
      content: "We're honored to be recognized as a top AI solutions provider by a leading industry analyst firm. This recognition validates our expertise in artificial intelligence and our commitment to delivering cutting-edge technology solutions.",
      category: "Awards & Recognition",
      source: "Industry Reports",
      author: "External Analyst",
      publishDate: "2024-01-03",
      readTime: "6 min read",
      featured: false,
      tags: ["Awards", "AI", "Recognition", "Industry Leadership"]
    },
    {
      id: 6,
      title: "The Future of Quantum Computing in Enterprise Applications",
      excerpt: "Examining how quantum computing will transform enterprise applications and create new opportunities for business innovation.",
      content: "Quantum computing represents the next frontier in computational power, promising to revolutionize enterprise applications across industries. Our research explores the practical applications and business implications of this emerging technology.",
      category: "Research & Development",
      source: "Research Papers",
      author: "Dr. Elena Petrov",
      publishDate: "2023-12-28",
      readTime: "10 min read",
      featured: false,
      tags: ["Quantum Computing", "Enterprise", "Innovation", "Research"]
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSource = selectedSource === 'All Sources' || article.source === selectedSource;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSource && matchesSearch;
  });

  const featuredArticle = newsArticles.find(article => article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Latest
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {" "}News & Insights
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Stay updated with the latest developments in AI, technology, and industry insights. 
              Discover how we're shaping the future of business technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Get Updates
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-slate-600 text-base font-medium rounded-lg text-slate-300 hover:text-white hover:border-slate-500 transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-slate-300 mb-2">
                Search Articles
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  id="search"
                  placeholder="Search by title, content, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-slate-300 mb-2">
                Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Source Filter */}
            <div>
              <label htmlFor="source" className="block text-sm font-medium text-slate-300 mb-2">
                Source
              </label>
              <select
                id="source"
                value={selectedSource}
                onChange={(e) => setSelectedSource(e.target.value)}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {sources.map((source) => (
                  <option key={source} value={source}>{source}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Article */}
      {featuredArticle && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Featured Article
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                    {featuredArticle.category}
                  </span>
                  <span className="text-slate-400 text-sm">
                    {featuredArticle.readTime}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-white leading-tight">
                  {featuredArticle.title}
                </h3>
                
                <p className="text-slate-300 text-lg leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                
                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <span className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {featuredArticle.author}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(featuredArticle.publishDate).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {featuredArticle.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  to={`/news/${featuredArticle.id}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-slate-700/30 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <Globe className="h-16 w-16 mx-auto mb-4" />
                  <p>Article Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Latest News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.filter(article => !article.featured).map((article, index) => (
            <article
              key={article.id}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-slate-700/30 h-48 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <Globe className="h-12 w-12 mx-auto mb-2" />
                  <p className="text-sm">Article Image</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                    {article.category}
                  </span>
                  <span className="text-slate-400 text-sm">
                    {article.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-slate-400 text-sm">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                  </div>
                  <div className="text-slate-400 text-sm">
                    {new Date(article.publishDate).toLocaleDateString()}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  to={`/news/${article.id}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                >
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center border border-cyan-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, product updates, 
            and industry trends delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
