import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Calendar, User, ArrowRight, Tag, Clock, 
  TrendingUp, Globe, Award, Star
} from 'lucide-react';

export default function News() {
  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary Quantum AI Platform",
      excerpt: "Our new quantum AI platform combines quantum computing with artificial intelligence to solve complex problems beyond classical computing capabilities.",
      author: "Dr. Sarah Chen",
      date: "2025-01-15",
      category: "Product Launch",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Partnership with Leading Cloud Providers Expands Global Reach",
      excerpt: "Strategic partnerships with major cloud providers enable us to deliver our AI and quantum computing services to customers worldwide.",
      author: "Michael Rodriguez",
      date: "2025-01-12",
      category: "Partnership",
      readTime: "3 min read",
      featured: true
    },
    {
      id: 3,
      title: "Zion Tech Group Recognized as Top AI Innovation Company",
      excerpt: "Industry recognition for our groundbreaking work in artificial intelligence and quantum computing technologies.",
      author: "Lisa Park",
      date: "2025-01-10",
      category: "Awards",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 4,
      title: "New Research Center Opens for Advanced AI Development",
      excerpt: "Our new research facility will focus on developing next-generation AI technologies and quantum computing applications.",
      author: "David Kumar",
      date: "2025-01-08",
      category: "Company News",
      readTime: "6 min read",
      featured: false
    }
  ];

  const categories = [
    { name: "Product Launch", count: 8, color: "from-blue-500 to-cyan-500" },
    { name: "Partnership", count: 12, color: "from-green-500 to-emerald-500" },
    { name: "Awards", count: 5, color: "from-yellow-500 to-orange-500" },
    { name: "Company News", count: 15, color: "from-purple-500 to-pink-500" }
  ];

  return (
    <>
      <SEO 
        title="News - Zion Tech Group | Latest Updates & Company News"
        description="Stay updated with the latest news, announcements, and developments from Zion Tech Group. Read about our product launches, partnerships, and industry recognition."
        keywords="news, company news, updates, announcements, product launches, partnerships, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Latest News
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Stay informed about our latest developments, product launches, 
                partnerships, and industry recognition.
              </p>
              <div className="flex items-center justify-center">
                <Globe className="w-16 h-16 text-blue-400" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">News Categories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Browse news by category to find topics that interest you most
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Tag className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-400 text-sm">{category.count} articles</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Featured News</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most important announcements and developments
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsArticles.filter(article => article.featured).map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs">
                      {article.category}
                    </span>
                    <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-400/30 rounded-full text-yellow-300 text-xs">
                      Featured
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All News */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">All News</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete archive of our news and announcements
              </p>
            </motion.div>

            <div className="space-y-6">
              {newsArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-48 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-4xl opacity-20">
                        {article.category === "Product Launch" && <TrendingUp />}
                        {article.category === "Partnership" && <Globe />}
                        {article.category === "Awards" && <Award />}
                        {article.category === "Company News" && <Star />}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs">
                          {article.category}
                        </span>
                        {article.featured && (
                          <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-400/30 rounded-full text-yellow-300 text-xs">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {article.author}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(article.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {article.readTime}
                          </span>
                        </div>
                        <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                          <span className="text-sm font-medium">Read More</span>
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}