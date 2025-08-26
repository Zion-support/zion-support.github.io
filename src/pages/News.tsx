import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'company', name: 'Company Updates' },
    { id: 'technology', name: 'Technology Insights' },
    { id: 'industry', name: 'Industry News' },
    { id: 'press', name: 'Press Releases' },
    { id: 'awards', name: 'Awards & Recognition' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Cybersecurity Platform',
      category: 'company',
      date: '2025-01-15',
      excerpt: 'Our new AI-driven cybersecurity solution provides real-time threat detection and automated response capabilities, setting new industry standards for enterprise security.',
      image: '/images/news/ai-cybersecurity-platform.jpg',
      readTime: '3 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Zion Tech Group Recognized as Top AI Solutions Provider in 2025',
      category: 'awards',
      date: '2025-01-10',
      excerpt: 'We are proud to announce that Zion Tech Group has been named one of the top AI solutions providers by Tech Industry Review for our innovative approach to business transformation.',
      image: '/images/news/award-recognition.jpg',
      readTime: '2 min read',
      featured: false
    },
    {
      id: 3,
      title: 'The Future of Quantum Computing in Enterprise Applications',
      category: 'technology',
      date: '2025-01-08',
      excerpt: 'Explore how quantum computing is revolutionizing enterprise applications and what businesses need to know to prepare for this transformative technology.',
      image: '/images/news/quantum-computing.jpg',
      readTime: '5 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Zion Tech Group Expands Global Operations to Europe',
      category: 'company',
      date: '2025-01-05',
      excerpt: 'We are excited to announce the expansion of our operations to Europe, bringing our innovative technology solutions to businesses across the continent.',
      image: '/images/news/global-expansion.jpg',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Cybersecurity Trends to Watch in 2025',
      category: 'industry',
      date: '2025-01-03',
      excerpt: 'Discover the key cybersecurity trends that will shape the industry in 2025 and how organizations can prepare for emerging threats.',
      image: '/images/news/cybersecurity-trends.jpg',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Zion Tech Group Partners with Leading Cloud Providers',
      category: 'company',
      date: '2024-12-28',
      excerpt: 'Strategic partnerships with AWS, Microsoft Azure, and Google Cloud enable us to deliver enhanced cloud solutions and better support for our clients.',
      image: '/images/news/cloud-partnerships.jpg',
      readTime: '3 min read',
      featured: false
    },
    {
      id: 7,
      title: 'AI Ethics and Responsible Technology Development',
      category: 'technology',
      date: '2024-12-25',
      excerpt: 'Our commitment to ethical AI development and responsible technology innovation that benefits society while minimizing potential risks.',
      image: '/images/news/ai-ethics.jpg',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 8,
      title: 'Digital Transformation Success Stories from Our Clients',
      category: 'company',
      date: '2024-12-20',
      excerpt: 'Real-world examples of how our clients have successfully transformed their businesses using our technology solutions and expertise.',
      image: '/images/news/client-success.jpg',
      readTime: '7 min read',
      featured: false
    }
  ];

  const filteredNews = selectedCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredArticle = newsArticles.find(article => article.featured);

  return (
    <>
      <Helmet>
        <title>News & Updates - Zion Tech Group | Latest Technology Insights</title>
        <meta name="description" content="Stay updated with the latest news, company updates, and technology insights from Zion Tech Group. Read about our innovations, industry trends, and company milestones." />
        <meta name="keywords" content="Zion Tech Group news, technology news, AI updates, cybersecurity news, company updates, industry insights" />
        <link rel="canonical" href="https://ziontechgroup.com/news" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Latest <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">News</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay informed about our latest innovations, company updates, industry insights, and technology trends 
              that are shaping the future of business and technology.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && selectedCategory === 'all' && (
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Featured Story</h2>
              <div className="bg-slate-800/50 rounded-2xl border border-white/10 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full">
                        {categories.find(c => c.id === featuredArticle.category)?.name}
                      </span>
                      <span className="text-gray-400 text-sm">{featuredArticle.readTime}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">
                        {new Date(featuredArticle.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                        Read More
                      </button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-3xl">📰</span>
                      </div>
                      <p className="text-white/80 text-lg">Featured Story</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* News Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews
                .filter(article => !article.featured || selectedCategory !== 'all')
                .map((article) => (
                <article key={article.id} className="bg-slate-800/50 rounded-xl border border-white/10 overflow-hidden hover:border-blue-400/30 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full">
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                      <span className="text-gray-400 text-sm">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                      <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredNews.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No news articles found in this category.</p>
                <p className="text-gray-500 mt-2">Check back later for updates or browse other categories.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Subscribe to our newsletter to receive the latest news, insights, and updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-700 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
              />
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>

        {/* Press Kit */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Press & Media
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Journalists and media professionals can access our press kit, company information, and media resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/press"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Press Kit
              </Link>
              <Link
                to="/contact"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Media Inquiries
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default News;