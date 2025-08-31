import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Newspaper, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Search,
  Filter,
  Clock,
  TrendingUp,
  Star,
  Share2,
  Bookmark,
  ExternalLink
} from 'lucide-react';

const News: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI-Powered Cybersecurity Platform",
      excerpt: "Our latest AI cybersecurity solution combines machine learning with advanced threat detection to provide unprecedented protection for enterprise networks.",
      category: "Product Launch",
      author: "Zion Tech Team",
      date: "2025-01-15",
      readTime: "5 min read",
      featured: true,
      tags: ["AI", "Cybersecurity", "Product Launch"]
    },
    {
      id: 2,
      title: "Zion Tech Group Recognized as Top AI Innovation Company 2025",
      excerpt: "Industry recognition for our groundbreaking work in artificial intelligence and machine learning solutions that are transforming businesses worldwide.",
      category: "Awards",
      author: "Marketing Team",
      date: "2025-01-10",
      readTime: "3 min read",
      featured: false,
      tags: ["AI", "Awards", "Innovation"]
    },
    {
      id: 3,
      title: "New Partnership with Global Tech Leaders Announced",
      excerpt: "Strategic collaboration to accelerate the development of next-generation quantum computing solutions and expand our global reach.",
      category: "Partnerships",
      author: "Business Development",
      date: "2025-01-08",
      readTime: "4 min read",
      featured: false,
      tags: ["Partnerships", "Quantum Computing", "Global Expansion"]
    },
    {
      id: 4,
      title: "Zion Tech Group Expands IoT Solutions Portfolio",
      excerpt: "Launch of comprehensive IoT platform designed to help businesses connect, monitor, and optimize their operations through intelligent automation.",
      category: "Product Update",
      author: "IoT Team",
      date: "2025-01-05",
      readTime: "6 min read",
      featured: false,
      tags: ["IoT", "Automation", "Product Update"]
    },
    {
      id: 5,
      title: "Customer Success Story: Manufacturing Transformation",
      excerpt: "How a leading manufacturer achieved 40% efficiency improvement using our AI-powered predictive maintenance and optimization solutions.",
      category: "Case Study",
      author: "Customer Success",
      date: "2025-01-03",
      readTime: "7 min read",
      featured: false,
      tags: ["Case Study", "Manufacturing", "AI", "Efficiency"]
    },
    {
      id: 6,
      title: "Zion Tech Group Hosts Successful AI Innovation Summit",
      excerpt: "Over 500 industry leaders gathered to discuss the future of artificial intelligence and its impact on business transformation.",
      category: "Events",
      author: "Events Team",
      date: "2024-12-28",
      readTime: "4 min read",
      featured: false,
      tags: ["Events", "AI", "Innovation", "Summit"]
    }
  ];

  const categories = ["All", "Product Launch", "Awards", "Partnerships", "Product Update", "Case Study", "Events"];
  const tags = ["AI", "Cybersecurity", "IoT", "Quantum Computing", "Machine Learning", "Innovation", "Partnerships"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Newspaper className="w-16 h-16 text-cyan-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Latest News
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Stay updated with the latest developments, innovations, and achievements from Zion Tech Group
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search news articles..."
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    category === "All" 
                      ? "bg-cyan-500 text-white" 
                      : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {newsArticles.filter(article => article.featured).map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                  {article.category}
                </span>
                <span className="text-gray-400 text-sm flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {article.readTime}
                </span>
                <span className="text-gray-400 text-sm flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(article.date).toLocaleDateString()}
                </span>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors cursor-pointer">
                {article.title}
              </h2>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{article.author}</span>
                  </div>
                  <div className="flex gap-2">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                    <Bookmark className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-cyan-400 transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors flex items-center gap-2">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Latest Articles</h2>
            <p className="text-gray-300">Explore our comprehensive coverage of technology trends and company updates</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(article => !article.featured).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs font-medium rounded">
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-xs flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 hover:text-cyan-400 transition-colors cursor-pointer line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <span className="text-gray-500 text-xs">
                    {new Date(article.date).toLocaleDateString()}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {article.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded hover:bg-cyan-500/30 transition-colors flex items-center gap-1">
                    Read
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter for the latest news, insights, and updates from Zion Tech Group
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Explore our services and discover how Zion Tech Group can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;
