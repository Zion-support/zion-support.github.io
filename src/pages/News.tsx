import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', count: 15 },
    { id: 'company', name: 'Company Updates', count: 6 },
    { id: 'industry', name: 'Industry News', count: 5 },
    { id: 'press', name: 'Press Releases', count: 4 }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Quantum Computing Platform',
      category: 'company',
      date: 'January 15, 2025',
      excerpt: 'Leading technology company introduces breakthrough quantum-AI fusion platform, revolutionizing computational capabilities for enterprise clients.',
      image: '/images/news/quantum-ai-platform.jpg',
      author: 'Zion Tech Group',
      readTime: '5 min read',
      isFeatured: true,
      tags: ['AI', 'Quantum Computing', 'Innovation']
    },
    {
      id: 2,
      title: 'Zion Tech Group Named Top AI Solutions Provider by Tech Industry Report',
      category: 'press',
      date: 'January 12, 2025',
      excerpt: 'Annual industry report recognizes Zion Tech Group for exceptional AI innovation and client success in digital transformation.',
      image: '/images/news/industry-award.jpg',
      author: 'Press Team',
      readTime: '3 min read',
      isFeatured: false,
      tags: ['Awards', 'AI', 'Recognition']
    },
    {
      id: 3,
      title: 'New Partnership with Microsoft Azure Expands Cloud Capabilities',
      category: 'company',
      date: 'January 10, 2025',
      excerpt: 'Strategic partnership enhances Zion Tech Group\'s cloud infrastructure offerings and accelerates digital transformation initiatives.',
      image: '/images/news/microsoft-partnership.jpg',
      author: 'Business Development',
      readTime: '4 min read',
      isFeatured: false,
      tags: ['Partnership', 'Cloud', 'Microsoft']
    },
    {
      id: 4,
      title: 'The Future of AI in Healthcare: Trends and Opportunities for 2025',
      category: 'industry',
      date: 'January 8, 2025',
      excerpt: 'Comprehensive analysis of emerging AI technologies in healthcare and their potential to transform patient care and medical research.',
      image: '/images/news/ai-healthcare.jpg',
      author: 'Research Team',
      readTime: '7 min read',
      isFeatured: false,
      tags: ['Healthcare', 'AI', 'Research']
    },
    {
      id: 5,
      title: 'Zion Tech Group Expands Cybersecurity Division',
      category: 'company',
      date: 'January 5, 2025',
      excerpt: 'Company announces major expansion of cybersecurity services to address growing enterprise security needs in the digital age.',
      image: '/images/news/cybersecurity-expansion.jpg',
      author: 'Security Team',
      readTime: '4 min read',
      isFeatured: false,
      tags: ['Cybersecurity', 'Expansion', 'Enterprise']
    },
    {
      id: 6,
      title: 'Sustainability in Tech: How AI is Driving Green Innovation',
      category: 'industry',
      date: 'January 3, 2025',
      excerpt: 'Exploring the intersection of artificial intelligence and environmental sustainability in modern technology development.',
      image: '/images/news/ai-sustainability.jpg',
      author: 'Sustainability Team',
      readTime: '6 min read',
      isFeatured: false,
      tags: ['Sustainability', 'AI', 'Green Tech']
    },
    {
      id: 7,
      title: 'Zion Tech Group Achieves SOC 2 Type II Certification',
      category: 'press',
      date: 'December 28, 2024',
      excerpt: 'Company demonstrates commitment to security and compliance by achieving prestigious SOC 2 Type II certification.',
      image: '/images/news/soc2-certification.jpg',
      author: 'Compliance Team',
      readTime: '3 min read',
      isFeatured: false,
      tags: ['Compliance', 'Security', 'Certification']
    },
    {
      id: 8,
      title: 'The Rise of Edge Computing: What Businesses Need to Know',
      category: 'industry',
      date: 'December 25, 2024',
      excerpt: 'Comprehensive guide to edge computing technology and its implications for modern business infrastructure.',
      image: '/images/news/edge-computing.jpg',
      author: 'Technology Team',
      readTime: '8 min read',
      isFeatured: false,
      tags: ['Edge Computing', 'Infrastructure', 'Technology']
    }
  ];

  const pressReleases = [
    {
      id: 1,
      title: 'Zion Tech Group Announces Q4 2024 Financial Results',
      date: 'January 20, 2025',
      summary: 'Strong performance driven by AI solutions and cloud services growth'
    },
    {
      id: 2,
      title: 'New Executive Appointments Strengthen Leadership Team',
      date: 'January 18, 2025',
      summary: 'Strategic hires enhance company\'s technical and business capabilities'
    },
    {
      id: 3,
      title: 'Zion Tech Group Opens New Innovation Center in Silicon Valley',
      date: 'January 15, 2025',
      summary: 'Expansion supports research and development initiatives'
    }
  ];

  const filteredNews = selectedCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Latest News & Updates
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto mb-8"
          >
            Stay informed about our latest innovations, industry insights, and company developments
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="#latest-news"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Read Latest News
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Contact Media Team
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Featured Story
            </h2>
          </div>
          
          {newsArticles.filter(article => article.isFeatured).map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                      {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                    </span>
                    <span className="text-slate-500 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">Z</span>
                      </div>
                      <div>
                        <p className="text-slate-900 font-medium">{article.author}</p>
                        <p className="text-slate-500 text-sm">{article.date}</p>
                      </div>
                    </div>
                    <Link
                      to={`/news/${article.id}`}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🚀</div>
                    <p className="text-xl font-medium">Featured Article</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* News Categories and Articles */}
      <section id="latest-news" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Latest News
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our latest articles, company updates, and industry insights
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-100'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.filter(article => !article.isFeatured).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                  <div className="text-center text-blue-600">
                    <div className="text-4xl mb-2">📰</div>
                    <p className="text-sm font-medium">News Article</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                      {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                    </span>
                    <span className="text-slate-500 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-500">
                      {article.date}
                    </div>
                    <Link
                      to={`/news/${article.id}`}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No articles available in this category at the moment.</p>
              <p className="text-slate-500 mt-2">Check back later for new content.</p>
            </div>
          )}
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Press Releases
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Official announcements and company news from Zion Tech Group
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-6 rounded-xl border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">📢</span>
                  </div>
                  <span className="text-blue-600 text-sm font-medium">Press Release</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {release.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm">
                  {release.summary}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-sm">{release.date}</span>
                  <Link
                    to={`/press-releases/${release.id}`}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    Read Full Release →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive the latest news, industry insights, and company updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            For media inquiries, press releases, or to learn more about Zion Tech Group, 
            our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Contact Media Team
            </Link>
            <Link
              to="/about"
              className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-50 transition-all duration-300"
            >
              About Zion Tech Group
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;