import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, User, Tag, ArrowRight, Search,
  Filter, TrendingUp, Award, Zap, Globe, Building,
  Heart, Coins, Factory, Users, Brain, Shield
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Healthcare Platform',
      excerpt: 'Our new healthcare analytics platform combines machine learning with predictive analytics to transform patient care and operational efficiency.',
      content: 'Zion Tech Group is proud to announce the launch of our revolutionary AI-powered healthcare platform. This comprehensive solution leverages advanced machine learning algorithms to provide predictive analytics for patient outcomes, resource optimization, and real-time monitoring capabilities. The platform has already demonstrated remarkable results in early trials, showing a 35% reduction in patient readmission rates and 40% improvement in resource utilization.',
      category: 'product-launch',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/images/news/healthcare-platform-launch.jpg',
      featured: true,
      tags: ['AI', 'Healthcare', 'Machine Learning', 'Product Launch']
    },
    {
      id: 2,
      title: 'Zion Tech Group Named "AI Company of the Year" at Tech Innovation Awards',
      excerpt: 'We are honored to receive this prestigious recognition for our contributions to AI innovation and business transformation.',
      content: 'Zion Tech Group has been named "AI Company of the Year" at the prestigious Tech Innovation Awards 2024. This recognition celebrates our commitment to advancing artificial intelligence technology and our success in helping businesses across industries achieve digital transformation. The award committee highlighted our innovative approach to AI democratization and our track record of successful implementations.',
      category: 'awards',
      author: 'Marcus Rodriguez',
      date: '2024-01-10',
      readTime: '3 min read',
      image: '/images/news/ai-company-award.jpg',
      featured: true,
      tags: ['Awards', 'AI Innovation', 'Recognition', 'Business Transformation']
    },
    {
      id: 3,
      title: 'New Partnership with Global Manufacturing Leaders',
      excerpt: 'Strategic collaboration to bring AI-powered manufacturing solutions to industry leaders worldwide.',
      content: 'Zion Tech Group has announced a strategic partnership with leading global manufacturing companies to deploy our AI-powered manufacturing solutions. This collaboration will bring cutting-edge IoT platforms, predictive maintenance systems, and smart factory solutions to manufacturing facilities worldwide. The partnership aims to accelerate Industry 4.0 adoption and drive operational excellence.',
      category: 'partnerships',
      author: 'David Kim',
      date: '2024-01-08',
      readTime: '4 min read',
      image: '/images/news/manufacturing-partnership.jpg',
      featured: false,
      tags: ['Partnerships', 'Manufacturing', 'IoT', 'Industry 4.0']
    },
    {
      id: 4,
      title: 'Quantum Computing Breakthrough in Financial Services',
      excerpt: 'Our quantum computing team achieves significant milestone in portfolio optimization algorithms.',
      content: 'Zion Tech Group\'s quantum computing division has achieved a major breakthrough in financial portfolio optimization. Our new hybrid quantum-classical algorithms have demonstrated 1000x faster processing speeds compared to traditional methods, enabling real-time portfolio optimization for high-frequency trading applications. This breakthrough positions us at the forefront of quantum computing in financial services.',
      category: 'research',
      author: 'Dr. Emily Watson',
      date: '2024-01-05',
      readTime: '6 min read',
      image: '/images/news/quantum-breakthrough.jpg',
      featured: false,
      tags: ['Quantum Computing', 'Financial Services', 'Research', 'Innovation']
    },
    {
      id: 5,
      title: 'Expansion to European Markets',
      excerpt: 'Zion Tech Group opens new offices in London, Berlin, and Paris to serve European clients.',
      content: 'Zion Tech Group is expanding its global presence with new offices in key European markets. Our new locations in London, Berlin, and Paris will enable us to better serve European clients and strengthen our partnerships with local technology companies. This expansion reflects our commitment to global growth and our confidence in the European technology market.',
      category: 'company',
      author: 'Lisa Park',
      date: '2024-01-03',
      readTime: '3 min read',
      image: '/images/news/european-expansion.jpg',
      featured: false,
      tags: ['Expansion', 'Europe', 'Global Growth', 'International Markets']
    },
    {
      id: 6,
      title: 'Cybersecurity Platform Achieves Industry Certification',
      excerpt: 'Our AI-powered cybersecurity platform receives top industry certifications for enterprise security.',
      content: 'Zion Tech Group\'s AI-powered cybersecurity platform has achieved industry-leading certifications, including ISO 27001, SOC 2 Type II, and FedRAMP authorization. These certifications validate our platform\'s security capabilities and compliance with international standards. Our cybersecurity solutions now meet the highest security requirements for enterprise and government clients.',
      category: 'security',
      author: 'Alex Thompson',
      date: '2024-01-01',
      readTime: '4 min read',
      image: '/images/news/cybersecurity-certification.jpg',
      featured: false,
      tags: ['Cybersecurity', 'Certification', 'Compliance', 'Enterprise Security']
    }
  ];

  const categories = [
    { id: 'all', name: 'All News', icon: Globe, count: newsArticles.length },
    { id: 'product-launch', name: 'Product Launches', icon: Zap, count: newsArticles.filter(article => article.category === 'product-launch').length },
    { id: 'awards', name: 'Awards & Recognition', icon: Award, count: newsArticles.filter(article => article.category === 'awards').length },
    { id: 'partnerships', name: 'Partnerships', icon: Building, count: newsArticles.filter(article => article.category === 'partnerships').length },
    { id: 'research', name: 'Research & Innovation', icon: Brain, count: newsArticles.filter(article => article.category === 'research').length },
    { id: 'company', name: 'Company News', icon: Users, count: newsArticles.filter(article => article.category === 'company').length },
    { id: 'security', name: 'Security & Compliance', icon: Shield, count: newsArticles.filter(article => article.category === 'security').length }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const categoryMatch = selectedCategory === 'all' || article.category === selectedCategory;
    const searchMatch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       article.content.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
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
        title="News - Zion Tech Group"
        description="Stay updated with the latest news, announcements, and insights from Zion Tech Group. Company updates, product launches, partnerships, and industry insights."
        keywords="news, announcements, company updates, product launches, partnerships, AI innovation, technology news"
        canonicalUrl="https://ziontechgroup.com/news"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Latest
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}News & Updates
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Stay informed about our latest innovations, partnerships, awards, and company developments. 
            Discover how Zion Tech Group is shaping the future of technology.
          </motion.p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Search */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Search News</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Filter by Category</h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                      <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most important announcements and breakthrough developments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredArticles.filter(article => article.featured).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-500 shadow-2xl shadow-blue-500/25 hover:border-blue-400 transition-all duration-300"
              >
                <div className="mb-6">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    Featured
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">{article.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{article.excerpt}</p>
                </div>

                <div className="mb-6">
                  <p className="text-gray-300 text-sm leading-relaxed">{article.content}</p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(article.date)}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All News
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse all our latest news, updates, and announcements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.filter(article => !article.featured).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{article.excerpt}</p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(article.date)}</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full text-blue-400 hover:text-blue-300 font-semibold transition-colors flex items-center justify-center">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, insights, and updates 
              from Zion Tech Group directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;
