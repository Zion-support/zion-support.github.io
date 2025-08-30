import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Tag,
  ArrowRight,
  ExternalLink,
  TrendingUp,
  Globe,
  Award,
  Rocket,
  Brain,
  Shield,
  Cloud,
  Zap,
  Star,
  Bookmark,
  Share2,
  Clock,
  Eye,
  ThumbsUp,
  Mail,
  Phone
} from 'lucide-react';

export function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', icon: Globe },
    { id: 'company', name: 'Company News', icon: Award },
    { id: 'technology', name: 'Technology', icon: Rocket },
    { id: 'ai', name: 'AI & ML', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud },
    { id: 'partnerships', name: 'Partnerships', icon: TrendingUp },
    { id: 'industry', name: 'Industry Insights', icon: Zap }
  ];

  const years = [
    { id: 'all', name: 'All Years' },
    { id: '2024', name: '2024' },
    { id: '2023', name: '2023' },
    { id: '2022', name: '2022' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary Quantum AI Platform',
      category: 'technology',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      views: 15420,
      likes: 892,
      featured: true,
      summary: 'Zion Tech Group announces the launch of QuantumMind AI, a breakthrough platform that combines quantum computing with artificial intelligence to solve complex problems previously thought impossible.',
      content: 'Our new QuantumMind AI platform represents a paradigm shift in computational intelligence. By leveraging quantum algorithms and advanced machine learning, we can now tackle problems in drug discovery, climate modeling, and financial optimization that were previously beyond our reach.',
      tags: ['Quantum Computing', 'AI', 'Innovation', 'Technology'],
      image: '🔬',
      externalLink: 'https://techcrunch.com/zion-tech-quantum-ai',
      pressRelease: true
    },
    {
      id: 2,
      title: 'Strategic Partnership with European Cybersecurity Leader',
      category: 'partnerships',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '3 min read',
      views: 8920,
      likes: 456,
      featured: false,
      summary: 'Zion Tech Group forms strategic alliance with CyberShield Global to enhance cybersecurity offerings across European markets.',
      content: 'This partnership combines our expertise in AI-driven threat detection with CyberShield\'s deep understanding of European compliance requirements. Together, we\'re creating a comprehensive security solution that protects businesses across the continent.',
      tags: ['Partnerships', 'Cybersecurity', 'Europe', 'AI Security'],
      image: '🤝',
      externalLink: 'https://securityweek.com/zion-cybershield-partnership',
      pressRelease: true
    },
    {
      id: 3,
      title: 'AI Ethics Framework Recognized by Global Tech Leaders',
      category: 'ai',
      author: 'Dr. Emily Watson',
      date: '2024-01-10',
      readTime: '7 min read',
      views: 12350,
      likes: 678,
      featured: false,
      summary: 'Zion Tech Group\'s comprehensive AI ethics framework receives international recognition and adoption by leading technology companies.',
      content: 'Our AI ethics framework goes beyond compliance to ensure that artificial intelligence serves humanity responsibly. We\'ve developed guidelines that address bias, transparency, accountability, and human oversight in AI systems.',
      tags: ['AI Ethics', 'Responsible AI', 'Governance', 'Innovation'],
      image: '⚖️',
      externalLink: 'https://ai-ethics.org/zion-framework',
      pressRelease: false
    },
    {
      id: 4,
      title: 'Record Revenue Growth in Q4 2023',
      category: 'company',
      author: 'Jennifer Kim',
      date: '2024-01-08',
      readTime: '4 min read',
      views: 7560,
      likes: 234,
      featured: false,
      summary: 'Zion Tech Group reports exceptional financial performance with 45% revenue growth and expansion into three new markets.',
      content: 'Our strong performance reflects the growing demand for AI-powered solutions and our ability to deliver innovative technology that drives real business value. We\'re expanding our global footprint while maintaining our commitment to excellence.',
      tags: ['Financial Results', 'Growth', 'Expansion', 'Performance'],
      image: '📈',
      externalLink: 'https://finance.yahoo.com/zion-tech-q4-results',
      pressRelease: true
    },
    {
      id: 5,
      title: 'Revolutionary Cloud-Native Security Solution',
      category: 'cybersecurity',
      author: 'Alex Thompson',
      date: '2024-01-05',
      readTime: '6 min read',
      views: 9870,
      likes: 543,
      featured: false,
      summary: 'Zion Tech Group introduces CloudGuard Zero-Trust, a next-generation security platform designed for modern cloud environments.',
      content: 'CloudGuard Zero-Trust represents a fundamental shift in how we approach cloud security. Instead of trusting networks, we verify every user, device, and transaction, creating a security model that\'s as dynamic as the cloud itself.',
      tags: ['Cloud Security', 'Zero-Trust', 'Cybersecurity', 'Innovation'],
      image: '☁️',
      externalLink: 'https://darkreading.com/cloudguard-zero-trust',
      pressRelease: true
    },
    {
      id: 6,
      title: 'AI-Powered Healthcare Diagnostics Breakthrough',
      category: 'ai',
      author: 'Dr. Robert Martinez',
      date: '2024-01-03',
      readTime: '8 min read',
      views: 11200,
      likes: 789,
      featured: false,
      summary: 'Zion Tech Group\'s AI diagnostic system achieves 99.2% accuracy in early disease detection, surpassing human experts.',
      content: 'Our AI diagnostic platform analyzes medical images with unprecedented accuracy, helping doctors detect diseases earlier and more reliably. This technology has the potential to save countless lives through early intervention.',
      tags: ['Healthcare AI', 'Medical Diagnostics', 'Machine Learning', 'Innovation'],
      image: '🏥',
      externalLink: 'https://healthcareitnews.com/ai-diagnostics-breakthrough',
      pressRelease: false
    },
    {
      id: 7,
      title: 'Expansion into Asia-Pacific Markets',
      category: 'company',
      author: 'David Park',
      date: '2023-12-28',
      readTime: '4 min read',
      views: 6540,
      likes: 321,
      featured: false,
      summary: 'Zion Tech Group establishes regional headquarters in Singapore and announces plans for expansion across Asia-Pacific.',
      content: 'The Asia-Pacific region represents a tremendous opportunity for growth and innovation. We\'re excited to bring our cutting-edge AI and cybersecurity solutions to businesses across this dynamic and rapidly growing market.',
      tags: ['Expansion', 'Asia-Pacific', 'Global Growth', 'Market Entry'],
      image: '🌏',
      externalLink: 'https://asia-tech.com/zion-expansion',
      pressRelease: true
    },
    {
      id: 8,
      title: 'Industry Recognition: Best AI Company 2023',
      category: 'company',
      author: 'Lisa Chen',
      date: '2023-12-20',
      readTime: '3 min read',
      views: 5430,
      likes: 456,
      featured: false,
      summary: 'Zion Tech Group receives prestigious industry award for excellence in artificial intelligence innovation and implementation.',
      content: 'This recognition validates our commitment to pushing the boundaries of what\'s possible with AI. We\'re honored to be recognized by our peers and remain committed to delivering breakthrough solutions.',
      tags: ['Awards', 'Recognition', 'AI Excellence', 'Innovation'],
      image: '🏆',
      externalLink: 'https://tech-awards.org/2023-winners',
      pressRelease: false
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || article.date.startsWith(selectedYear);
    return matchesSearch && matchesCategory && matchesYear;
  });

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = filteredNews.filter(article => !article.featured);

  return (
    <>
      <Helmet>
        <title>News - Zion Tech Group | Latest Technology News and Press Releases</title>
        <meta name="description" content="Stay updated with Zion Tech Group's latest news, press releases, and industry insights. Discover our innovations in AI, cybersecurity, and technology." />
        <meta name="keywords" content="news, press releases, technology news, AI news, cybersecurity news, company updates" />
        <link rel="canonical" href="https://ziontechgroup.com/news" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-futuristic-enhanced">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Latest
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                News & Updates
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay informed about Zion Tech Group's latest innovations, partnerships, 
              and insights shaping the future of technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-3 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === cat.id
                        ? 'bg-cyan-500 border-cyan-500 text-white'
                        : 'bg-gray-900/50 border-gray-700 text-gray-300 hover:border-cyan-500'
                    }`}
                  >
                    <cat.icon className="w-4 h-4" />
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Year Filter */}
            <div className="flex gap-2 mb-8">
              {years.map((year) => (
                <button
                  key={year.id}
                  onClick={() => setSelectedYear(year.id)}
                  className={`px-4 py-3 rounded-lg border transition-all duration-300 ${
                    selectedYear === year.id
                      ? 'bg-purple-500 border-purple-500 text-white'
                      : 'bg-gray-900/50 border-gray-700 text-gray-300 hover:border-purple-500'
                  }`}
                >
                  {year.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured Story</h2>
              <p className="text-gray-300">Our latest breakthrough and most important news</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <div className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-cyan-500/50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <div className="text-6xl mb-4">{featuredArticle.image}</div>
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                        {categories.find(c => c.id === featuredArticle.category)?.name}
                      </span>
                      {featuredArticle.pressRelease && (
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
                          Press Release
                        </span>
                      )}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{featuredArticle.title}</h3>
                    <p className="text-gray-300 mb-6 text-lg">{featuredArticle.summary}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredArticle.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredArticle.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredArticle.readTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Eye className="w-4 h-4" />
                        {featuredArticle.views.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <ThumbsUp className="w-4 h-4" />
                        {featuredArticle.likes.toLocaleString()}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={featuredArticle.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2 justify-center"
                      >
                        Read Full Article
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <button className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-white mb-4">Key Highlights:</h4>
                    <div className="space-y-3">
                      {featuredArticle.tags.map((tag, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <span className="text-gray-300">{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Latest News</h2>
            <p className="text-gray-300">Stay updated with our latest developments and industry insights</p>
          </motion.div>

          {regularArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  {/* Article Header */}
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{article.image}</div>
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30 text-sm">
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                      {article.pressRelease && (
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30 text-sm">
                          Press Release
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Article Content */}
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm line-clamp-3">{article.summary}</p>

                  {/* Article Meta */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(article.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>

                  {/* Article Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {article.views.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="w-3 h-3" />
                        {article.likes.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <a
                      href={article.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2 justify-center"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </a>
                    <button className="px-4 py-2 border border-gray-600 text-gray-400 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <button className="px-4 py-2 border border-gray-600 text-gray-400 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">No news found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedYear('all');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest news, insights, and updates from Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Media & Press Inquiries</h2>
              <p className="text-xl text-gray-300">
                For media interviews, press releases, or additional information, contact our communications team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Press Inquiries</h3>
                <p className="text-cyan-400 font-medium">press@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm mt-2">24/7 response for urgent matters</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Media Relations</h3>
                <p className="text-cyan-400 font-medium">+1 302 464 0950</p>
                <p className="text-gray-400 text-sm mt-2">Mon-Fri 9AM-6PM EST</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}