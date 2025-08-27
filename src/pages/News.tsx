import React from 'react';
import { Link } from 'react-router-dom';

export default function News() {
  const featuredNews = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary Quantum AI Platform',
      excerpt: 'Our latest quantum computing platform combines AI and quantum mechanics to solve previously unsolvable problems.',
      category: 'Product Launch',
      date: '2024-08-25',
      readTime: '5 min read',
      image: '🚀',
import React from 'react';
import { SEO } from "../components/SEOHead"';
import { Link } from 'react-router-dom';

export default function News() {
  return (
    <>
      <SEOHead 
        title="News & Press - Zion Tech Group"
        description="Stay updated with the latest news, product launches, company updates, and industry insights from Zion Tech Group."
        keywords="news, press releases, company updates, AI news, technology news, Zion Tech Group"
      />
      
      <main className="min-h-screen bg-futuristic text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-900/50 to-blue-900/50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Stay informed about our latest developments, company news, and industry insights
            </p>
          </div>
        </section>

        {/* News Content */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Latest Updates
              </h2>
              <p className="text-gray-300 text-lg">
                Company updates, press releases, and announcements will appear here.
              </p>
            </div>

            {/* Placeholder for future news */}
            <div className="bg-black/30 p-12 rounded-lg border border-cyan-500/20 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">News Coming Soon</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We're working on bringing you the latest updates about our company, projects, and industry insights. 
                Check back soon for exciting announcements and news.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/services" 
                  className="px-6 py-3 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-8 rounded-lg border border-cyan-500/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">Stay Updated</h3>
                <p className="text-gray-300 mb-6">
                  Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default News;
      title: 'Zion Tech Group Named Top AI Company by Tech Innovation Awards',
      excerpt: 'Recognition for our groundbreaking work in autonomous AI systems and machine learning solutions that are transforming industries worldwide.',
      date: '2025-01-10',
      category: 'Awards',
      image: '/images/news/ai-awards.jpg'
    },
    {
      id: 3,
      title: 'Partnership Announced with Leading Healthcare Provider',
      excerpt: 'Strategic collaboration to deploy AI-powered diagnostic tools across multiple healthcare facilities, improving patient outcomes and operational efficiency.',
      date: '2025-01-05',
      category: 'Partnerships',
      image: '/images/news/healthcare-partnership.jpg'
    },
    {
      id: 4,
      title: 'New Research Paper on Quantum Machine Learning Published',
      excerpt: 'Our research team publishes groundbreaking findings on the intersection of quantum computing and machine learning algorithms.',
      date: '2024-12-28',
      category: 'Research',
      image: '/images/news/quantum-ml-research.jpg'
    },
    {
      id: 5,
      title: 'Zion Tech Group Expands Global Operations',
      excerpt: 'Opening new offices in Europe and Asia to better serve our growing international client base and accelerate global innovation.',
      date: '2024-12-20',
      category: 'Company News',
      image: '/images/news/global-expansion.jpg'
    },
    {
      id: 6,
      title: 'Cybersecurity Solutions Achieve Industry Certification',
      excerpt: 'Our advanced cybersecurity platform receives SOC2 Type II certification, demonstrating the highest standards of security and compliance.',
      date: '2024-12-15',
      category: 'Security',
      image: '/images/news/cybersecurity-certification.jpg'
    }
  ];

  const categories = ['All', 'Product Launch', 'Awards', 'Partnerships', 'Research', 'Company News', 'Security'];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="News & Updates - Zion Tech Group" 
        description="Stay updated with the latest news, press releases, and announcements from Zion Tech Group"
        keywords="news, updates, press releases, announcements, Zion Tech Group"
        canonical="https://ziontechgroup.com/news"
      />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            News & Updates
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay informed about the latest developments, product launches, partnerships, 
            and innovations from Zion Tech Group as we continue to shape the future of technology.
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Featured News</h2>
          {newsItems.filter(item => item.featured).map((item) => (
            <div key={item.id} className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-3xl p-8 border border-cyan-500/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-cyan-500 text-white text-sm font-medium rounded-full">
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {new Date(item.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">{item.excerpt}</p>
                  <Link 
                    to={`/news/${item.id}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium"
                  >
                    Read Full Article
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                <div className="w-full h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                  <svg className="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Latest News Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.filter(item => !item.featured).map((item) => (
              <div key={item.id} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className="w-full h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-t-2xl flex items-center justify-center">
                  <svg className="w-12 h-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {new Date(item.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <Link 
                    to={`/news/${item.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium group"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Kit & Media */}
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-8 border border-purple-500/20 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Press Kit & Media Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Journalists and media professionals can access our press kit, company logos, 
              high-resolution images, and executive bios for media coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/press-kit.zip"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium"
              >
                Download Press Kit
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-300 font-medium"
              >
                Contact PR Team
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Subscribe to our newsletter to receive the latest news, product updates, 
            and insights directly in your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-r-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium">
                Subscribe
      {/* Regular News */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Latest Updates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularNews.map((item) => (
            <article
              key={item.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                    {item.category}
                  </span>
                  {item.isPressRelease && (
                    <span className="px-3 py-1 bg-red-600 text-white text-xs rounded-full">
                      Press Release
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {item.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(item.publishDate)}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {item.readTime}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Press Room CTA */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Press & Media Inquiries
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Journalists and media representatives can access our press kit, 
              high-resolution images, and contact our media relations team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Contact Media Relations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200">
                Download Press Kit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
