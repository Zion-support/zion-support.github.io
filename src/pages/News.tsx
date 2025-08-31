import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Search, 
  Filter,
  ExternalLink,
  TrendingUp,
  Award,
  Globe,
  Zap,
  Users,
  ArrowRight,
  Bookmark,
  Share2,
  Star
} from 'lucide-react';

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All News', count: 24 },
    { id: 'company', name: 'Company News', count: 8 },
    { id: 'technology', name: 'Technology', count: 6 },
    { id: 'ai', name: 'AI & ML', count: 5 },
    { id: 'partnerships', name: 'Partnerships', count: 3 },
    { id: 'awards', name: 'Awards', count: 2 }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Named Top AI Company of 2025',
      excerpt: 'Leading technology publication recognizes our innovative AI solutions and commitment to digital transformation.',
      content: 'Zion Tech Group has been recognized as one of the top AI companies of 2025 by TechInsights Magazine. This prestigious recognition highlights our commitment to developing cutting-edge artificial intelligence solutions that drive real business value...',
      category: 'awards',
      author: 'Sarah Johnson',
      date: '2025-01-15',
      readTime: '3 min read',
      image: '/api/placeholder/600/400',
      featured: true,
      tags: ['AI', 'Awards', 'Recognition', 'Technology']
    },
    {
      id: 2,
      title: 'New Partnership with Microsoft Azure Announced',
      excerpt: 'Strategic collaboration to deliver enhanced cloud-based AI solutions and enterprise-grade security.',
      content: 'We are excited to announce a strategic partnership with Microsoft Azure that will enable us to deliver enhanced cloud-based AI solutions with enterprise-grade security and scalability...',
      category: 'partnerships',
      author: 'Michael Chen',
      date: '2025-01-12',
      readTime: '4 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['Partnership', 'Microsoft', 'Azure', 'Cloud']
    },
    {
      id: 3,
      title: 'Breakthrough in Natural Language Processing',
      excerpt: 'Our AI team achieves significant milestone in understanding and processing human language.',
      content: 'Our research and development team has achieved a significant breakthrough in natural language processing, improving accuracy by 40% compared to industry standards...',
      category: 'ai',
      author: 'Dr. Emily Rodriguez',
      date: '2025-01-10',
      readTime: '5 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['NLP', 'AI Research', 'Innovation', 'Technology']
    },
    {
      id: 4,
      title: 'Expansion to European Market',
      excerpt: 'Zion Tech Group opens new office in London to serve growing European client base.',
      content: 'To better serve our growing European client base, Zion Tech Group is excited to announce the opening of our new office in London, United Kingdom...',
      category: 'company',
      author: 'David Thompson',
      date: '2025-01-08',
      readTime: '3 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['Expansion', 'Europe', 'London', 'Growth']
    },
    {
      id: 5,
      title: 'New AI-Powered Analytics Platform Launch',
      excerpt: 'Revolutionary platform combines machine learning with business intelligence for unprecedented insights.',
      content: 'Today we are launching our revolutionary AI-powered analytics platform that combines advanced machine learning algorithms with comprehensive business intelligence...',
      category: 'technology',
      author: 'Lisa Wang',
      date: '2025-01-05',
      readTime: '6 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['Analytics', 'Platform', 'Launch', 'AI']
    },
    {
      id: 6,
      title: 'Customer Success Story: Healthcare Transformation',
      excerpt: 'How we helped a major hospital system implement AI-driven patient care solutions.',
      content: 'In this customer success story, we share how Zion Tech Group helped a major hospital system implement AI-driven patient care solutions, resulting in improved outcomes...',
      category: 'company',
      author: 'Robert Kim',
      date: '2025-01-03',
      readTime: '4 min read',
      image: '/api/placeholder/600/400',
      featured: false,
      tags: ['Healthcare', 'Success Story', 'AI', 'Transformation']
    }
  ];

  const pressReleases = [
    {
      id: 1,
      title: 'Zion Tech Group Reports Record Q4 2024 Results',
      date: '2025-01-20',
      summary: 'Company achieves 150% year-over-year growth in AI services revenue'
    },
    {
      id: 2,
      title: 'New Board Member Appointment',
      date: '2025-01-18',
      summary: 'Former Google AI executive joins Zion Tech Group board of directors'
    },
    {
      id: 3,
      title: 'Series B Funding Round Completed',
      date: '2025-01-15',
      summary: 'Company raises $50 million to accelerate AI product development'
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = newsArticles.find(article => article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Latest News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Stay informed about the latest developments in AI technology, company updates, 
              and industry insights from Zion Tech Group.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search news and articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {categories.find(c => c.id === featuredArticle.category)?.name}
                    </span>
                    <span className="text-sm text-gray-500">{featuredArticle.readTime}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      {featuredArticle.author}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredArticle.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                    <button className="inline-flex items-center p-3 text-gray-500 hover:text-blue-600 transition-colors duration-300">
                      <Bookmark className="w-5 h-5" />
                    </button>
                    <button className="inline-flex items-center p-3 text-gray-500 hover:text-blue-600 transition-colors duration-300">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl flex items-center justify-center">
                    <span className="text-gray-500">Featured Image</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                      <Star className="w-4 h-4 mr-1" />
                      Featured
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Latest News Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Latest News
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay up to date with the latest developments, company news, and industry insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.slice(0, 6).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Article Image</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {categories.find(c => c.id === article.category)?.name}
                    </span>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-300">
                        <Bookmark className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-300">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredNews.length > 6 && (
            <div className="text-center mt-12">
              <button className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Load More Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Press Releases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Official company announcements and press releases for media and stakeholders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(release.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {release.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {release.summary}
                </p>
                
                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-300">
                  Read Press Release
                  <ExternalLink className="w-4 h-4 ml-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, insights, and 
              updates directly in your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Subscribe
              </button>
            </div>
            
            <p className="text-blue-200 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
