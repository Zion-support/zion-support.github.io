import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Newspaper, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Clock,
  TrendingUp,
  Globe,
  Award,
  Zap
} from 'lucide-react';

export default function News() {
  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI-Powered Cybersecurity Platform",
      excerpt: "Our latest innovation combines quantum-resistant encryption with AI threat detection, setting new industry standards for enterprise security.",
      author: "Sarah Johnson",
      date: "March 15, 2025",
      category: "Product Launch",
      readTime: "5 min read",
      featured: true,
      image: "🔒"
    },
    {
      id: 2,
      title: "Zion Tech Group Recognized as Top AI Company by Tech Innovation Awards",
      excerpt: "We're honored to receive this prestigious recognition for our contributions to artificial intelligence and machine learning technologies.",
      author: "Michael Chen",
      date: "March 10, 2025",
      category: "Company News",
      readTime: "3 min read",
      featured: false,
      image: "🏆"
    },
    {
      id: 3,
      title: "Partnership Announced with Leading University for Quantum Computing Research",
      excerpt: "This collaboration will accelerate breakthroughs in quantum algorithms and applications for real-world business problems.",
      author: "Dr. Emily Rodriguez",
      date: "March 5, 2025",
      category: "Partnerships",
      readTime: "4 min read",
      featured: false,
      image: "🔬"
    },
    {
      id: 4,
      title: "New Case Study: How We Helped Fortune 500 Company Achieve 300% ROI",
      excerpt: "Discover the transformative impact of our AI solutions in this detailed analysis of a major manufacturing transformation project.",
      author: "David Thompson",
      date: "February 28, 2025",
      category: "Case Studies",
      readTime: "7 min read",
      featured: false,
      image: "📊"
    },
    {
      id: 5,
      title: "Zion Tech Group Expands Global Operations to Europe",
      excerpt: "Our new European headquarters will serve clients across the continent, bringing cutting-edge technology solutions closer to our international customers.",
      author: "Lisa Wang",
      date: "February 20, 2025",
      category: "Company News",
      readTime: "4 min read",
      featured: false,
      image: "🌍"
    },
    {
      id: 6,
      title: "White Paper: The Future of Autonomous Business Operations",
      excerpt: "Our latest research explores how AI and automation will reshape business processes in the next decade.",
      author: "Dr. Robert Kim",
      date: "February 15, 2025",
      category: "Research",
      readTime: "10 min read",
      featured: false,
      image: "📋"
    }
  ];

  const categories = [
    "All News",
    "Product Launch",
    "Company News", 
    "Partnerships",
    "Case Studies",
    "Research",
    "Industry Insights"
  ];

  const featuredNews = newsArticles.filter(article => article.featured);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6">
              <Newspaper className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Latest News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay informed about our latest innovations, partnerships, and industry insights
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center"><TrendingUp className="w-4 h-4 mr-2" /> Industry Leading</span>
              <span className="flex items-center"><Globe className="w-4 h-4 mr-2" /> Global Impact</span>
              <span className="flex items-center"><Award className="w-4 h-4 mr-2" /> Award Winning</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Featured News
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most important announcements and breakthrough innovations
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((article, index) => (
                <motion.div
                  key={article.id}
                  className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-sm">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{article.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 border-t border-slate-700 pt-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center"><User className="w-4 h-4 mr-1" /> {article.author}</span>
                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {article.date}</span>
                      </div>
                      <Link 
                        to={`/news/${article.id}`}
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-12 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className="px-6 py-3 bg-slate-800/50 border border-slate-700 text-white rounded-lg hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* All News Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              All News & Updates
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our complete collection of news articles, announcements, and insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(article => !article.featured).map((article, index) => (
              <motion.div
                key={article.id}
                className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {article.image}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {article.author}</span>
                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {article.date}</span>
                  </div>
                  
                  <Link 
                    to={`/news/${article.id}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium flex items-center group-hover:underline"
                  >
                    Read Full Article
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-indigo-900/20">
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
              Get the latest news, insights, and updates delivered directly to your inbox
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Have questions about our news or want to learn more about our solutions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg font-semibold text-white hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/services"
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
