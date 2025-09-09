import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Calendar,
    User,
    Tag,
    ArrowRight,
    Search,
    Filter,
    Clock,
    Eye,
    ExternalLink,
    TrendingUp,
    Award,
    Globe
} from 'lucide-react';

export default function News() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    
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
            title: 'Zion Tech Group Launches Revolutionary AI-Powered Cybersecurity Platform',
            excerpt: 'Our latest innovation combines machine learning with advanced threat detection to provide unprecedented protection against cyber attacks.',
            category: 'Product Updates',
            source: 'Company Press Releases',
            date: '2024-01-15',
            readTime: '5 min read',
            image: '/api/placeholder/400/250',
            featured: true
        },
        {
            id: 2,
            title: 'Zion Tech Group Named Top 100 Technology Companies of 2024',
            excerpt: 'Recognition for our commitment to innovation and excellence in the technology sector.',
            category: 'Awards & Recognition',
            source: 'Industry Reports',
            date: '2024-01-10',
            readTime: '3 min read',
            image: '/api/placeholder/400/250',
            featured: true
        },
        {
            id: 3,
            title: 'Strategic Partnership with Global Cloud Infrastructure Provider',
            excerpt: 'Expanding our cloud services portfolio to deliver enhanced solutions to our clients worldwide.',
            category: 'Partnerships',
            source: 'Company Press Releases',
            date: '2024-01-08',
            readTime: '4 min read',
            image: '/api/placeholder/400/250',
            featured: false
        }
    ];

    const filteredArticles = newsArticles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

  const sources = [
    'All Sources',
    'Comp Press Releases',
    'Industry Reports',
    'Technology News',
    'Research Papers',
    'Partner Updates',
    'Customer Success Stories',
  ];

  const timeframes = [
    'All Time',
    'Last 24 Hours',
    'Last Week',
    'Last Month',
    'Last 3 Months',
    'Last Year',
  ];

  const newsItems = [
    {
      id: 1,
      title:
        'Zion Tech Group Launches Revolutionary AI - Powered Quantum Neural Network Platform',
      category: 'Product Updates',
      source: 'Comp Press Releases',
      date: '2025 - 01 - 15',
      readTime: '5 min read',
      excerpt:
        'Our latest innovation combines quantum computing principles with advanced neural networks to deliver unprecedented AI capabilities for enterprise applications.',
      image: '/images / news / quantum - ai - platform.jpg',
      featured: true,
    },
    {
      id: 2,
      title:
        'Zion Tech Group Recognized as Top AI Solutions Provider in 2024 Tech Awards',
      category: 'Awards & Recognition',
      source: 'Industry Reports',
      date: '2024 - 12 - 20',
      readTime: '3 min read',
      excerpt:
        'Industry recognition for our innovative AI solutions and commitment to driving digital transformation across enterprises.',
      image: '/images / news / award - recognition.jpg',
      featured: false,
    },
    {
      id: 3,
      title:
        'Strategic Partnership Announced with Leading Cloud Infrastructure Provider',
      category: 'Partnerships',
      source: 'Comp Press Releases',
      date: '2024 - 12 - 10',
      readTime: '4 min read',
      excerpt:
        'New partnership expands our cloud capabilities and enables seamless integration for enterprise clients.',
      image: '/images / news / partnership - announcement.jpg',
      featured: false,
    },
    {
      id: 4,
      title:
        'Breakthrough in Autonomous Business Operations: New Research Findings',
      category: 'Research & Development',
      source: 'Research Papers',
      date: '2024 - 11 - 28',
      readTime: '8 min read',
      excerpt:
        'Latest research reveals significant advancements in autonomous business process automation and decision - making systems.',
      image: '/images / news / research - breakthrough.jpg',
      featured: false,
    },
    {
      id: 5,
      title: 'Market Trends: AI Adoption Accelerates Across Enterprise Sectors',
      category: 'Market Trends',
      source: 'Industry Reports',
      date: '2024 - 11 - 15',
      readTime: '6 min read',
      excerpt:
        'Comprehensive analysis of AI adoption patterns and emerging trends in enterprise technology.',
      image: '/images / news / market - trends.jpg',
      featured: false,
    },
  ];

  const filteredNews = newsItems.filter (item => {
    const matchesSearch = item.title.toLowerCase () .includes (searchTerm.toLowerCase () ) ||
      item.excerpt.toLowerCase () .includes (searchTerm.toLowerCase () ) ;
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }) ;

  return (<div className="min - h-screen bg - gradient - to - br from - slate - 900 via - slate - 800 to - slate - 900 text - white">
      <section className="pt - 24 pb - 16 px - 4 sm:px - 6 lg:px - 8">
        <div className="max - w-7xl mx - auto">
          <div className="text - center mb - 12">
            <div className="flex justify - center mb - 6">
              <div className="p - 3 bg - blue - 600 / 20 rounded - full">
                <Globe className="h - 12 w - 12 text - blue - 400"       />
              </div>
            </div>
            <h1 className="text - 4xl md:text - 5xl font - bold mb - 6">
              News & Updates
            </h1>
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto">
              Stay informed about the latest developments, product updates, and
              industry insights from Zion Tech Group.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb - 12">
            <div className="flex flex - col lg:flex - row gap - 6 items - center justify - between">
              <div className="relative flex - 1 max - w-md">
                <Search className="absolute left - 3 top - 1/2 transform - translate - y-1 / 2 text - gray - 400 h - 5 w - 5"       />
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={e => setSearchTerm (e.target.value) }
                  className="w - full pl - 10 pr - 4 py - 3 bg - slate - 800 / 50 border border - slate - 700 rounded - lg text - white placeholder - gray - 400 focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent"
                />
              </div>

              <div className="flex flex - wrap gap - 3">
                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory (e.target.value) }
                  className="px - 4 py - 3 bg - slate - 800 / 50 border border - slate - 700 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - blue - 500 focus:border - transparent"
                >
                  {categories.map (category => (<option key={category} value={category}>
                      {category}
                    </option>) ) }
                </select>
              </div>
            </div>
          </div>

          {/* Featured News */}
          {filteredNews.filter (item => item.featured) .length > 0 && (<div className="mb - 16">
              <h2 className="text - 2xl font - bold mb - 8 text - center">
                Featured News
              </h2>
              <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 8">
                {filteredNews
                  .filter (item => item.featured) .map (item => (<div
                      key={item.id}
                      className="bg - slate - 800 / 50 rounded - xl overflow - hidden border border - slate - 700 hover:border - slate - 600 transition - all hover:transform hover:scale - 105"
                    >
                      <div className="aspect - video bg - slate - 700 flex items - center justify - center">
                        <div className="text - slate - 500 text - center">
                          <Globe className="h - 16 w - 16 mx - auto mb - 2"       />
                          <p > News Image</p>
                        </div>
                      </div>
                      <div className="p - 6">
                        <div className="flex items - center gap - 4 text - sm text - gray - 400 mb - 3">
                          <span className="px - 3 py - 1 bg - blue - 500 / 20 text - blue - 400 rounded - full">
                            {item.category}
                          </span>
                          <div className="flex items - center gap - 1">
                            <Calendar className="h - 4 w - 4"       />
                            {item.date}
                          </div>
                          <div className="flex items - center gap - 1">
                            <Clock className="h - 4 w - 4"       />
                            {item.readTime}
                          </div>
                        </div>
                        <h3 className="text - xl font - bold mb - 3 text - white">
                          {item.title}
                        </h3>
                        <p className="text - gray - 400 mb - 4 line - clamp - 3">
                          {item.excerpt}
                        </p>
                        <button className="inline - flex items - center text - blue - 400 hover:text - blue - 300 transition - colors">
                          Read More{' '}
                          <ArrowRight className="h - 4 w - 4 ml - 2"       />
                        </button>
                      </div>
                    </div>) ) }
              </div>
            </div>) }

          {/* All News */}
          <div>
            <h2 className="text - 2xl font - bold mb - 8 text - center">
              Latest News
            </h2>
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">
              {filteredNews.map (item => (<div
                  key={item.id}
                  className="bg - slate - 800 / 50 rounded - xl overflow - hidden border border - slate - 700 hover:border - slate - 600 transition - all hover:transform hover:scale - 105"
                >
                  <div className="aspect - video bg - slate - 700 flex items - center justify - center">
                    <div className="text - slate - 500 text - center">
                      <Globe className="h - 12 w - 12 mx - auto mb - 2"       />
                      <p > News Image</p>
                    </div>
                  </div>
                  <div className="p - 6">
                    <div className="flex items - center gap - 4 text - sm text - gray - 400 mb - 3">
                      <span className="px - 3 py - 1 bg - blue - 500 / 20 text - blue - 400 rounded - full text - xs">
                        {item.category}
                      </span>
                      <div className="flex items - center gap - 1">
                        <Calendar className="h - 4 w - 4"       />
                        {item.date}
                      </div>
                    </div>
                </div>
            </section>

            {/* All News */}
            <section className="py-20 bg-black/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            All News
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Browse through all our latest news, updates, and insights
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map((article, index) => (
                            <motion.article
                                key={article.id}
                                className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-orange-500/50 transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="aspect-video bg-slate-700 group-hover:bg-slate-600 transition-colors duration-300"></div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
                                            {article.category}
                                        </span>
                                        <span className="text-gray-400 text-sm">{article.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4">{article.excerpt}</p>
                                    <button className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors group-hover:underline">
                                        Read More
                                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Signup */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Stay Updated
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Subscribe to our newsletter for the latest news, insights, and updates
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-semibold text-white hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                                Subscribe
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-orange-900/20 to-red-900/20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Get in Touch
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Have questions about our news or want to learn more? Contact our team
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg font-semibold text-white hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                            Contact Us
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                        <button className="px-8 py-4 border-2 border-orange-500 text-orange-400 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300">
                            View All Services
                        </button>
                    </div>
                  </div>
                </div>) ) }
            </div>
          </div>

          {filteredNews.length === 0 && (<div className="text - center py - 16">
              <Globe className="w - 16 h - 16 text - gray - 400 mx - auto mb - 4"       />
              <h3 className="text - xl font - semibold text - white mb - 2">
                No news found
              </h3>
              <p className="text - gray - 400">
                Try adjusting your search criteria or category filter.
              </p>
            </div>) }
        </div>
    );
}
