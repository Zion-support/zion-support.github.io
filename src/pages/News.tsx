import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  ArrowRight,
  Newspaper,
  TrendingUp,
  Award,
  Globe,
  Building,
  Users,
  Star,
  Eye,
  Share2,
  Filter,
  ChevronDown,
  ExternalLink,
  Play,
  ImageIcon,
  Video,
  FileText
} from 'lucide-react';

const News = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper, count: 89, color: 'from-gray-500 to-slate-500' },
    { id: 'company', name: 'Company News', icon: Building, count: 23, color: 'from-blue-500 to-cyan-500' },
    { id: 'industry', name: 'Industry Updates', icon: Globe, count: 31, color: 'from-green-500 to-emerald-500' },
    { id: 'awards', name: 'Awards & Recognition', icon: Award, count: 12, color: 'from-yellow-500 to-orange-500' },
    { id: 'partnerships', name: 'Partnerships', icon: Users, count: 18, color: 'from-purple-500 to-pink-500' },
    { id: 'technology', name: 'Technology', icon: TrendingUp, count: 25, color: 'from-red-500 to-rose-500' }
  ];

  const featuredNews = [
    {
      id: 1,
      title: "Zion Tech Group Named Top AI Solutions Provider by TechCrunch 2025",
      excerpt: "Leading technology publication recognizes Zion Tech Group for innovative AI solutions and exceptional client success rates in enterprise digital transformation.",
      author: "Zion Tech Group",
      publishDate: "2025-01-15",
      readTime: "3 min read",
      category: "awards",
      tags: ["Awards", "AI", "Recognition", "TechCrunch"],
      image: "/api/placeholder/600/400",
      views: "15.2k",
      type: "press-release",
      featured: true,
      externalLink: "https://techcrunch.com/2025/01/15/zion-tech-group-ai-solutions"
    },
    {
      id: 2,
      title: "Major Partnership Announced with Fortune 500 Healthcare Provider",
      excerpt: "Zion Tech Group enters strategic partnership to deploy AI-powered healthcare analytics across 50+ medical facilities, improving patient outcomes and operational efficiency.",
      author: "Zion Tech Group",
      publishDate: "2025-01-12",
      readTime: "4 min read",
      category: "partnerships",
      tags: ["Partnership", "Healthcare", "AI", "Fortune 500"],
      image: "/api/placeholder/600/400",
      views: "12.8k",
      type: "announcement",
      featured: true
    },
    {
      id: 3,
      title: "Breakthrough in Quantum Neural Network Technology",
      excerpt: "Our research team achieves significant milestone in quantum computing, reducing processing time for complex AI models by 95% while maintaining accuracy.",
      author: "Dr. Sarah Chen",
      publishDate: "2025-01-10",
      readTime: "5 min read",
      category: "technology",
      tags: ["Quantum Computing", "AI", "Research", "Breakthrough"],
      image: "/api/placeholder/600/400",
      views: "18.5k",
      type: "research",
      featured: true
    }
  ];

  const recentNews = [
    {
      id: 4,
      title: "Zion Tech Group Expands European Operations",
      excerpt: "New office opening in Berlin, Germany to serve growing demand for AI solutions across European markets.",
      author: "Zion Tech Group",
      publishDate: "2025-01-08",
      readTime: "2 min read",
      category: "company",
      tags: ["Expansion", "Europe", "AI Solutions"],
      image: "/api/placeholder/400/250",
      views: "8.9k",
      type: "announcement"
    },
    {
      id: 5,
      title: "SOC2 Type II Certification Achieved",
      excerpt: "Successfully completed SOC2 Type II audit, demonstrating our commitment to security and compliance excellence.",
      author: "Zion Tech Group",
      publishDate: "2025-01-06",
      readTime: "2 min read",
      category: "company",
      tags: ["SOC2", "Certification", "Security", "Compliance"],
      image: "/api/placeholder/400/250",
      views: "7.2k",
      type: "announcement"
    },
    {
      id: 6,
      title: "New AI Research Lab Opens in Silicon Valley",
      excerpt: "State-of-the-art facility dedicated to advancing autonomous systems and quantum computing research.",
      author: "Zion Tech Group",
      publishDate: "2025-01-04",
      readTime: "3 min read",
      category: "company",
      tags: ["Research Lab", "Silicon Valley", "AI", "Quantum"],
      image: "/api/placeholder/400/250",
      views: "6.8k",
      type: "announcement"
    },
    {
      id: 7,
      title: "Industry Report: AI Adoption in Manufacturing",
      excerpt: "Comprehensive study reveals 40% increase in AI adoption across manufacturing sector, with Zion Tech Group leading implementations.",
      author: "Industry Research Team",
      publishDate: "2025-01-02",
      readTime: "4 min read",
      category: "industry",
      tags: ["Manufacturing", "AI Adoption", "Research", "Report"],
      image: "/api/placeholder/400/250",
      views: "5.4k",
      type: "report"
    },
    {
      id: 8,
      title: "5G Enterprise Solutions Launch",
      excerpt: "Introducing next-generation 5G enterprise solutions designed for high-performance, low-latency business applications.",
      author: "Zion Tech Group",
      publishDate: "2024-12-30",
      readTime: "3 min read",
      category: "technology",
      tags: ["5G", "Enterprise", "Technology", "Launch"],
      image: "/api/placeholder/400/250",
      views: "4.9k",
      type: "product-launch"
    },
    {
      id: 9,
      title: "Cybersecurity Excellence Award",
      excerpt: "Recognized for outstanding contributions to cybersecurity innovation and threat prevention.",
      author: "Zion Tech Group",
      publishDate: "2024-12-28",
      readTime: "2 min read",
      category: "awards",
      tags: ["Cybersecurity", "Award", "Innovation", "Security"],
      image: "/api/placeholder/400/250",
      views: "4.2k",
      type: "award"
    }
  ];

  const allNews = [...featuredNews, ...recentNews];

  const filteredNews = allNews.filter(news => {
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    const matchesSearch = 
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedNews = filteredNews.sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
      case 'popular':
        return b.views.localeCompare(a.views, undefined, { numeric: true });
      case 'featured':
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      default:
        return 0;
    }
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.color : 'from-gray-500 to-slate-500';
  };

  const getNewsTypeIcon = (type: string) => {
    switch (type) {
      case 'press-release':
        return FileText;
      case 'announcement':
        return Newspaper;
      case 'research':
        return TrendingUp;
      case 'report':
        return FileText;
      case 'product-launch':
        return Star;
      case 'award':
        return Award;
      default:
        return Newspaper;
    }
  };

  const getNewsTypeColor = (type: string) => {
    switch (type) {
      case 'press-release':
        return 'from-blue-500 to-cyan-500';
      case 'announcement':
        return 'from-green-500 to-emerald-500';
      case 'research':
        return 'from-purple-500 to-pink-500';
      case 'report':
        return 'from-orange-500 to-red-500';
      case 'product-launch':
        return 'from-yellow-500 to-orange-500';
      case 'award':
        return 'from-pink-500 to-rose-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Latest News &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Updates</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay informed about Zion Tech Group's latest developments, industry insights, 
              and breakthrough innovations in AI, quantum computing, and cybersecurity.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search news, announcements, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">89</span> News Articles
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">23</span> Company Updates
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">12</span> Awards
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured News</h2>
            <p className="text-xl text-gray-300">Top stories and major announcements</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredNews.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
              >
                {/* Featured Badge */}
                {news.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}

                {/* News Type Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getNewsTypeColor(news.type)} text-white`}>
                    {news.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                </div>

                {/* News Image */}
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Newspaper className="w-16 h-16 text-cyan-400/50" />
                  </div>
                </div>

                {/* News Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(news.category)} text-white`}>
                      {categories.find(cat => cat.id === news.category)?.name}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {news.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {news.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {news.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {news.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(news.publishDate)}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {news.readTime}
                    </span>
                  </div>

                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {news.views}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  {news.externalLink ? (
                    <a
                      href={news.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3"
                    >
                      Read Full Article
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Sort and Filter Controls */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300">Sort by:</span>
            </div>
            <div className="flex gap-2">
              {[
                { id: 'latest', label: 'Latest' },
                { id: 'popular', label: 'Most Popular' },
                { id: 'featured', label: 'Featured' }
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSortBy(option.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    sortBy === option.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent News Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Latest News</h2>
            <p className="text-xl text-gray-300">Stay updated with our newest announcements and updates</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedNews.slice(3).map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
              >
                {/* News Type Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getNewsTypeColor(news.type)} text-white`}>
                    {news.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                </div>

                {/* News Image */}
                <div className="relative h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Newspaper className="w-12 h-12 text-cyan-400/50" />
                  </div>
                </div>

                {/* News Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getCategoryColor(news.category)} text-white`}>
                      {categories.find(cat => cat.id === news.category)?.name}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {news.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 mb-4 line-clamp-3 text-sm">
                    {news.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {news.author}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {news.readTime}
                    </span>
                  </div>

                  {/* Engagement Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {news.views}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  {news.externalLink ? (
                    <a
                      href={news.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3"
                    >
                      Read Full Article
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          {sortedNews.length > 9 && (
            <div className="text-center mt-12">
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-cyan-500/50">
                Load More News
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Press Kit CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Media & Press Resources
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Access our press kit, company logos, executive bios, and media contact information for journalists and media professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Download Press Kit
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Media Relations
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;