import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, User, Tag, ArrowRight, Search, 
  Filter, TrendingUp, Award, Globe, Brain, Rocket,
  Shield, Cloud, Zap, Star, Eye, Share2, Bookmark
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function News() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsCategories = [
    { id: 'all', name: 'All News', count: 24 },
    { id: 'company', name: 'Company Updates', count: 8 },
    { id: 'technology', name: 'Technology', count: 6 },
    { id: 'ai', name: 'AI & ML', count: 5 },
    { id: 'partnerships', name: 'Partnerships', count: 3 },
    { id: 'awards', name: 'Awards & Recognition', count: 2 }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Named to Forbes AI 50 List for 2024',
      excerpt: 'We are thrilled to announce that Zion Tech Group has been recognized as one of the top 50 AI companies in the world by Forbes magazine.',
      content: 'Zion Tech Group has been named to the prestigious Forbes AI 50 list for 2024, recognizing our innovative work in democratizing AI technology for businesses worldwide. This recognition highlights our commitment to making advanced AI solutions accessible to organizations of all sizes.',
      category: 'awards',
      author: 'Sarah Chen',
      authorRole: 'CEO',
      publishDate: '2024-01-15',
      readTime: '3 min read',
      tags: ['Awards', 'AI Innovation', 'Forbes'],
      featured: true,
      image: '/news/forbes-ai-50.jpg',
      views: 15420,
      shares: 892
    },
    {
      id: 2,
      title: 'Launch of Revolutionary Quantum-AI Hybrid Platform',
      excerpt: 'Our latest breakthrough combines quantum computing with artificial intelligence to solve previously unsolvable business problems.',
      content: 'Today we are excited to announce the launch of our revolutionary Quantum-AI Hybrid Platform, a first-of-its-kind solution that combines the power of quantum computing with advanced artificial intelligence. This platform represents a major breakthrough in computational capabilities.',
      category: 'technology',
      author: 'Marcus Rodriguez',
      authorRole: 'CTO',
      publishDate: '2024-01-10',
      readTime: '5 min read',
      tags: ['Quantum Computing', 'AI', 'Innovation'],
      featured: true,
      image: '/news/quantum-ai-platform.jpg',
      views: 12850,
      shares: 756
    },
    {
      id: 3,
      title: 'Strategic Partnership with Microsoft Azure Announced',
      excerpt: 'Zion Tech Group and Microsoft Azure join forces to deliver enterprise-grade AI solutions in the cloud.',
      content: 'We are excited to announce a strategic partnership with Microsoft Azure that will enable us to deliver our AI solutions on one of the world\'s most trusted cloud platforms. This partnership will accelerate our ability to serve enterprise customers globally.',
      category: 'partnerships',
      author: 'Lisa Thompson',
      authorRole: 'CFO',
      publishDate: '2024-01-08',
      readTime: '4 min read',
      tags: ['Partnerships', 'Microsoft', 'Cloud'],
      featured: false,
      image: '/news/microsoft-partnership.jpg',
      views: 9870,
      shares: 432
    },
    {
      id: 4,
      title: 'New AI Ethics Framework Released',
      excerpt: 'Zion Tech Group publishes comprehensive AI ethics guidelines to ensure responsible AI development and deployment.',
      content: 'As part of our commitment to responsible AI development, we have released a comprehensive AI ethics framework that guides all our development processes. This framework ensures that our AI solutions are not only powerful but also ethical and transparent.',
      category: 'ai',
      author: 'Dr. Emily Watson',
      authorRole: 'Chief AI Officer',
      publishDate: '2024-01-05',
      readTime: '6 min read',
      tags: ['AI Ethics', 'Responsible AI', 'Transparency'],
      featured: false,
      image: '/news/ai-ethics.jpg',
      views: 7650,
      shares: 298
    },
    {
      id: 5,
      title: 'Expansion to European Markets',
      excerpt: 'Zion Tech Group announces expansion into key European markets with new offices in London, Berlin, and Paris.',
      content: 'We are excited to announce our expansion into key European markets with new offices in London, Berlin, and Paris. This expansion will allow us to better serve our European clients and tap into the region\'s growing AI talent pool.',
      category: 'company',
      author: 'Alex Johnson',
      authorRole: 'Head of R&D',
      publishDate: '2024-01-03',
      readTime: '4 min read',
      tags: ['Expansion', 'Europe', 'Global Growth'],
      featured: false,
      image: '/news/europe-expansion.jpg',
      views: 6540,
      shares: 187
    },
    {
      id: 6,
      title: 'AI-Powered Cybersecurity Breakthrough',
      excerpt: 'Our AI security team develops new threat detection system that prevents 99.9% of cyber attacks in real-time.',
      content: 'Our AI security team has achieved a major breakthrough in cybersecurity with a new threat detection system that can identify and prevent 99.9% of cyber attacks in real-time. This system represents a significant advancement in AI-powered security.',
      category: 'technology',
      author: 'David Kim',
      authorRole: 'Chief Security Officer',
      publishDate: '2023-12-28',
      readTime: '5 min read',
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection'],
      featured: false,
      image: '/news/ai-security.jpg',
      views: 5430,
      shares: 234
    },
    {
      id: 7,
      title: 'Customer Success Story: Fortune 500 Transformation',
      excerpt: 'How we helped a Fortune 500 company achieve 300% ROI through AI-driven digital transformation.',
      content: 'We are proud to share the success story of how our AI solutions helped a Fortune 500 company achieve a 300% ROI through comprehensive digital transformation. This case study demonstrates the real-world impact of our technology.',
      category: 'company',
      author: 'Marketing Team',
      authorRole: 'Marketing',
      publishDate: '2023-12-25',
      readTime: '7 min read',
      tags: ['Case Study', 'ROI', 'Digital Transformation'],
      featured: false,
      image: '/news/customer-success.jpg',
      views: 4320,
      shares: 156
    },
    {
      id: 8,
      title: 'New Research Paper on Quantum Machine Learning',
      excerpt: 'Our research team publishes groundbreaking paper on quantum machine learning algorithms in Nature journal.',
      content: 'Our research team has published a groundbreaking paper on quantum machine learning algorithms in the prestigious Nature journal. This research represents a significant contribution to the field of quantum computing and AI.',
      category: 'ai',
      author: 'Dr. Emily Watson',
      authorRole: 'Chief AI Officer',
      publishDate: '2023-12-20',
      readTime: '8 min read',
      tags: ['Research', 'Quantum ML', 'Nature Journal'],
      featured: false,
      image: '/news/research-paper.jpg',
      views: 3980,
      shares: 89
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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
        title="News & Updates - Zion Tech Group"
        description="Stay updated with the latest news, announcements, and insights from Zion Tech Group. Read about our innovations, partnerships, and industry developments."
        keywords="news, updates, announcements, AI innovation, technology news, Zion Tech Group"
        canonicalUrl="https://ziontechgroup.com/news"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">News & Updates</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay informed about our latest innovations, partnerships, awards, and industry insights. Discover how we're shaping the future of AI technology.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search news articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {newsCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most important announcements and breakthrough innovations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {newsArticles.filter(article => article.featured).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                    {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                  </span>
                  <span className="text-gray-400 text-sm">{article.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 hover:text-blue-400 transition-colors cursor-pointer">
                  {article.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{article.author}</p>
                      <p className="text-gray-400 text-xs">{article.authorRole}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">{formatDate(article.publishDate)}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {article.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {article.views.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <Share2 className="w-4 h-4 mr-1" />
                      {article.shares}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Latest News
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay updated with all our latest announcements and industry insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.filter(article => !article.featured).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                    {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                  </span>
                  <span className="text-gray-400 text-sm">{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 hover:text-blue-400 transition-colors cursor-pointer line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{article.author}</p>
                      <p className="text-gray-400 text-xs">{article.authorRole}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">{formatDate(article.publishDate)}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {article.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {article.views.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <Share2 className="w-4 h-4 mr-1" />
                      {article.shares}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-400 text-lg">No news articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Updated</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Never miss an important update. Subscribe to our newsletter for the latest news, insights, and announcements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
