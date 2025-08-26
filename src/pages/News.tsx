import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const News: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const newsItems = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Cybersecurity Platform',
      category: 'company',
      date: 'January 15, 2025',
      excerpt: 'Our new AI-driven cybersecurity solution combines machine learning with advanced threat detection to provide unprecedented protection for enterprise networks.',
      image: '/api/placeholder/600/400',
      author: 'Zion Tech Group',
      readTime: '3 min read'
    },
    {
      id: 2,
      title: 'Zion Tech Group Recognized as Top AI Solutions Provider in 2025',
      category: 'awards',
      date: 'January 10, 2025',
      excerpt: 'Industry recognition for our innovative AI solutions and exceptional client outcomes in digital transformation projects.',
      image: '/api/placeholder/600/400',
      author: 'Zion Tech Group',
      readTime: '2 min read'
    },
    {
      id: 3,
      title: 'New Partnership with Microsoft Azure for Enhanced Cloud Solutions',
      category: 'partnerships',
      date: 'January 5, 2025',
      excerpt: 'Strategic partnership announcement to deliver cutting-edge cloud solutions and accelerate digital transformation for our clients.',
      image: '/api/placeholder/600/400',
      author: 'Zion Tech Group',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'The Future of AI in Healthcare: Trends and Opportunities',
      category: 'insights',
      date: 'December 28, 2024',
      excerpt: 'Exploring how artificial intelligence is revolutionizing healthcare delivery and improving patient outcomes across the industry.',
      image: '/api/placeholder/600/400',
      author: 'Dr. Sarah Chen',
      readTime: '6 min read'
    },
    {
      id: 5,
      title: 'Cybersecurity in 2025: Emerging Threats and Defense Strategies',
      category: 'insights',
      date: 'December 20, 2024',
      excerpt: 'Comprehensive analysis of the latest cybersecurity threats and innovative defense strategies for modern enterprises.',
      image: '/api/placeholder/600/400',
      author: 'Michael Rodriguez',
      readTime: '8 min read'
    },
    {
      id: 6,
      title: 'Zion Tech Group Expands Operations to European Market',
      category: 'company',
      date: 'December 15, 2024',
      excerpt: 'Strategic expansion announcement to better serve our European clients and tap into emerging technology markets.',
      image: '/api/placeholder/600/400',
      author: 'Zion Tech Group',
      readTime: '3 min read'
    }
  ];

  const categories = [
    { key: 'all', label: 'All News', count: newsItems.length },
    { key: 'company', label: 'Company News', count: newsItems.filter(item => item.category === 'company').length },
    { key: 'awards', label: 'Awards & Recognition', count: newsItems.filter(item => item.category === 'awards').length },
    { key: 'partnerships', label: 'Partnerships', count: newsItems.filter(item => item.category === 'partnerships').length },
    { key: 'insights', label: 'Industry Insights', count: newsItems.filter(item => item.category === 'insights').length }
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>News & Insights - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest news, insights, and announcements from Zion Tech Group. Company updates, industry insights, and technology trends." />
        <meta name="keywords" content="news, press releases, company updates, industry insights, technology trends, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              News &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay informed about our latest developments, industry insights, and the future of technology. 
              Discover how we're shaping the digital landscape.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Subscribe to Updates
              </button>
              <button className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300">
                Contact PR Team
              </button>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredNews.map((news) => (
                <article key={news.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                      <span className="text-sm">News Image</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        news.category === 'company' ? 'bg-blue-100 text-blue-600' :
                        news.category === 'awards' ? 'bg-green-100 text-green-600' :
                        news.category === 'partnerships' ? 'bg-purple-100 text-purple-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
                      </span>
                      <span className="text-xs text-gray-500">{news.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                      {news.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{news.author}</span>
                      <span>{news.date}</span>
                    </div>

                    {/* Read More */}
                    <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                      Read Full Article
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty State */}
            {filteredNews.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No news found</h3>
                <p className="text-gray-600">Try adjusting your category filter to see more results.</p>
              </div>
            )}
          </div>
        </section>

        {/* Press Kit Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Press Resources</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Access our press kit, company information, and media resources for journalists and media professionals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Company Logos</h3>
                <p className="text-gray-600 text-sm mb-4">
                  High-resolution logos and brand assets for media use
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors duration-300">
                  Download Assets
                </button>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Fact Sheets</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Company facts, statistics, and key information
                </p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors duration-300">
                  View Facts
                </button>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Media Contact</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get in touch with our PR team for interviews and inquiries
                </p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors duration-300">
                  Contact PR
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest news, insights, and technology updates.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default News;