import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const News: React.FC = () => {
  const featuredNews = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI-Powered Cybersecurity Platform",
      excerpt: "Our latest innovation combines machine learning with advanced threat detection to provide real-time protection against evolving cyber threats.",
      category: "Product Launch",
      date: "December 10, 2024",
      readTime: "5 min read",
      image: "/api/placeholder/600/400",
      author: "Dr. Sarah Chen",
      authorRole: "CTO"
    },
    {
      id: 2,
      title: "Zion Tech Group Named Top 100 AI Companies by TechInsights",
      excerpt: "We're proud to be recognized for our contributions to artificial intelligence and our commitment to ethical AI development.",
      category: "Company News",
      date: "December 8, 2024",
      readTime: "3 min read",
      image: "/api/placeholder/600/400",
      author: "Michael Rodriguez",
      authorRole: "CEO"
    },
    {
      id: 3,
      title: "Partnership Announcement: Zion Tech Group and CloudCorp Join Forces",
      excerpt: "Strategic collaboration to deliver integrated cloud solutions and accelerate digital transformation for enterprise clients.",
      category: "Partnerships",
      date: "December 5, 2024",
      readTime: "4 min read",
      image: "/api/placeholder/600/400",
      author: "Lisa Thompson",
      authorRole: "VP of Partnerships"
    }
  ];

  const latestNews = [
    {
      id: 4,
      title: "New Research: The Future of Quantum Computing in Enterprise",
      excerpt: "Our research team explores how quantum computing will revolutionize business operations and what companies need to prepare for.",
      category: "Research",
      date: "December 3, 2024",
      readTime: "7 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Cybersecurity Trends 2025: What to Expect",
      excerpt: "Analysis of emerging threats and the technologies that will shape the cybersecurity landscape in the coming year.",
      category: "Cybersecurity",
      date: "November 30, 2024",
      readTime: "6 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Digital Transformation Success Story: Manufacturing Giant",
      excerpt: "How we helped a leading manufacturer achieve 40% efficiency gains through intelligent automation and data analytics.",
      category: "Case Study",
      date: "November 28, 2024",
      readTime: "8 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 7,
      title: "AI Ethics Framework: Our Commitment to Responsible Technology",
      excerpt: "Zion Tech Group's comprehensive approach to ensuring AI development aligns with human values and ethical principles.",
      category: "AI Ethics",
      date: "November 25, 2024",
      readTime: "5 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 8,
      title: "Cloud Migration Best Practices: Lessons from 100+ Projects",
      excerpt: "Key insights and strategies for successful cloud migration based on our extensive experience with enterprise clients.",
      category: "Cloud Computing",
      date: "November 22, 2024",
      readTime: "6 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 9,
      title: "The Rise of Edge Computing: Implications for Business",
      excerpt: "Exploring how edge computing is transforming data processing and what it means for the future of business technology.",
      category: "Technology Trends",
      date: "November 20, 2024",
      readTime: "4 min read",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = [
    "All News",
    "Product Launch",
    "Company News",
    "Partnerships",
    "Research",
    "Cybersecurity",
    "Case Study",
    "AI Ethics",
    "Cloud Computing",
    "Technology Trends"
  ];

  return (
    <>
      <Helmet>
        <title>Latest News & Updates - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest news, product launches, research insights, and company updates from Zion Tech Group. Read about our innovations in AI, cybersecurity, and digital transformation." />
        <meta name="keywords" content="news, updates, product launches, research, cybersecurity, AI, digital transformation, Zion Tech Group, technology trends" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Latest
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> News</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay informed about our latest innovations, company updates, research insights, 
              and the future of technology. Discover what's happening at Zion Tech Group.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search news articles..."
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors text-lg"
                />
                <button className="absolute right-3 top-3 text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category === "All News"
                      ? "bg-blue-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Featured Stories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredNews.map((article) => (
                <article key={article.id} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center">
                    <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-400">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">{article.author}</p>
                          <p className="text-gray-400 text-xs">{article.authorRole}</p>
                        </div>
                      </div>
                      <span className="text-gray-400 text-sm">{article.date}</span>
                    </div>
                    <button className="mt-4 w-full bg-blue-600/20 text-blue-400 py-2 rounded-lg hover:bg-blue-600/30 transition-colors text-sm">
                      Read Full Article
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News Grid */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Latest News
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestNews.map((article) => (
                <article key={article.id} className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <div className="h-40 bg-gradient-to-br from-cyan-600/20 to-purple-600/20 flex items-center justify-center">
                    <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-400">{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">{article.date}</span>
                      <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-2xl border border-white/10 p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter and never miss the latest news, insights, and updates from Zion Tech Group.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                  <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
                <p className="text-gray-400 text-sm mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              More Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">White Papers</h3>
                <p className="text-gray-400 mb-4">In-depth research and analysis on emerging technologies and industry trends.</p>
                <Link
                  to="/white-papers"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Browse White Papers
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8 text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Webinars</h3>
                <p className="text-gray-400 mb-4">Join live and on-demand webinars featuring industry experts and thought leaders.</p>
                <Link
                  to="/webinars"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Watch Webinars
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Events</h3>
                <p className="text-gray-400 mb-4">Attend conferences, workshops, and networking events hosted by Zion Tech Group.</p>
                <Link
                  to="/events"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Events
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default News;