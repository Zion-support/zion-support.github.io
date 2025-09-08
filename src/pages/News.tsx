import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  TrendingUp, 
  Award, 
  Globe, 
  Zap,
  ArrowRight,
  ExternalLink,
  Clock,
  Tag
} from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI Quantum Hybrid Platform",
      excerpt: "Our latest breakthrough combines quantum computing with artificial intelligence to solve previously unsolvable problems.",
      date: "2025-01-15",
      category: "Product Launch",
      readTime: "5 min read",
      image: "/images/news/ai-quantum-platform.jpg"
    },
    {
      id: 2,
      title: "Zion Tech Group Named Top 100 AI Companies of 2025",
      excerpt: "Recognition for our innovative AI solutions and commitment to transforming businesses through technology.",
      date: "2025-01-10",
      category: "Awards",
      readTime: "3 min read",
      image: "/images/news/top-100-ai.jpg"
    },
    {
      id: 3,
      title: "New Partnership with Global Healthcare Consortium",
      excerpt: "Expanding our healthcare AI solutions to serve millions of patients worldwide.",
      date: "2025-01-05",
      category: "Partnerships",
      readTime: "4 min read",
      image: "/images/news/healthcare-partnership.jpg"
    },
    {
      id: 4,
      title: "Zion Tech Group Expands to European Markets",
      excerpt: "Opening new offices in London, Berlin, and Paris to better serve our European clients.",
      date: "2024-12-28",
      category: "Company News",
      readTime: "6 min read",
      image: "/images/news/european-expansion.jpg"
    },
    {
      id: 5,
      title: "Breakthrough in AI Cybersecurity Platform",
      excerpt: "New threat detection algorithms achieve 99.9% accuracy in identifying advanced cyber attacks.",
      date: "2024-12-20",
      category: "Innovation",
      readTime: "7 min read",
      image: "/images/news/cybersecurity-breakthrough.jpg"
    },
    {
      id: 6,
      title: "Zion Tech Group Hosts First Annual AI Innovation Summit",
      excerpt: "Bringing together industry leaders to discuss the future of artificial intelligence and its impact on business.",
      date: "2024-12-15",
      category: "Events",
      readTime: "4 min read",
      image: "/images/news/ai-summit.jpg"
    }
  ];

  const categories = [
    "All News",
    "Product Launch",
    "Company News",
    "Partnerships",
    "Awards",
    "Innovation",
    "Events"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                <Calendar className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Latest News &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Updates
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay informed about the latest developments, innovations, and achievements 
              from Zion Tech Group as we continue to transform the future of technology.
            </p>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  category === "All News"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                {/* News Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <Calendar className="w-12 h-12 mx-auto mb-2" />
                    <span className="text-sm">News Image</span>
                  </div>
                </div>

                {/* News Content */}
                <div className="p-6">
                  {/* Category and Date */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>

                  {/* Date and Read More */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <Link
                      to={`/news/${item.id}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1">
              Load More News
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-slate-800/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter to receive the latest news, insights, 
            and updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
