import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight,
  Search,
  Filter,
  Newspaper,
  TrendingUp,
  Globe,
  Building,
  Award,
  Zap,
  Eye,
  Share2
} from 'lucide-react';

export default function News() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper, count: 67 },
    { id: 'company', name: 'Company News', icon: Building, count: 23 },
    { id: 'technology', name: 'Technology', icon: Zap, count: 18 },
    { id: 'partnerships', name: 'Partnerships', icon: Globe, count: 12 },
    { id: 'awards', name: 'Awards & Recognition', icon: Award, count: 8 },
    { id: 'industry', name: 'Industry Insights', icon: TrendingUp, count: 6 }
  ];

  const years = [
    { id: 'all', name: 'All Years', count: 67 },
    { id: '2025', name: '2025', count: 23 },
    { id: '2024', name: '2024', count: 28 },
    { id: '2023', name: '2023', count: 16 }
  ];

  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary Quantum Neural Network Platform",
      excerpt: "The company introduces a breakthrough quantum computing solution that combines neural networks with quantum processing for unprecedented computational power.",
      content: "Zion Tech Group today announced the launch of its revolutionary Quantum Neural Network Platform, marking a significant milestone in the convergence of quantum computing and artificial intelligence. This breakthrough technology represents a paradigm shift in computational capabilities, enabling organizations to solve complex problems that were previously impossible with classical computing methods...",
      author: "Zion Tech Group Press",
      publishDate: "2025-01-20",
      readTime: "5 min read",
      category: "technology",
      tags: ["quantum-computing", "ai", "innovation", "breakthrough"],
      featured: true,
      image: "/news/quantum-neural-network.jpg",
      views: 15420,
      shares: 892
    },
    {
      id: 2,
      title: "Zion Tech Group Named 'AI Company of the Year' at Tech Excellence Awards",
      excerpt: "The company receives prestigious recognition for its contributions to artificial intelligence and autonomous systems innovation.",
      content: "Zion Tech Group has been honored with the 'AI Company of the Year' award at the prestigious Tech Excellence Awards 2025. This recognition celebrates the company's groundbreaking work in artificial intelligence, autonomous systems, and quantum technology solutions that are transforming industries worldwide...",
      author: "Zion Tech Group Press",
      publishDate: "2025-01-18",
      readTime: "4 min read",
      category: "awards",
      tags: ["awards", "recognition", "ai", "excellence"],
      featured: true,
      image: "/news/tech-excellence-award.jpg",
      views: 12850,
      shares: 756
    },
    {
      id: 3,
      title: "Strategic Partnership with Global Healthcare Consortium Announced",
      excerpt: "Zion Tech Group partners with leading healthcare organizations to deploy AI-powered diagnostic and treatment optimization systems.",
      content: "Zion Tech Group has announced a strategic partnership with the Global Healthcare Consortium, a coalition of leading healthcare organizations worldwide. This collaboration will focus on deploying advanced AI-powered diagnostic systems, treatment optimization platforms, and predictive healthcare analytics to improve patient outcomes globally...",
      author: "Zion Tech Group Press",
      publishDate: "2025-01-15",
      readTime: "6 min read",
      category: "partnerships",
      tags: ["healthcare", "partnership", "ai", "diagnostics"],
      featured: false,
      image: "/news/healthcare-partnership.jpg",
      views: 9870,
      shares: 543
    },
    {
      id: 4,
      title: "New AI Autonomous Research Assistant Surpasses Human Performance Benchmarks",
      excerpt: "Zion Tech Group's latest AI research tool demonstrates superior capabilities in scientific literature analysis and research synthesis.",
      content: "Zion Tech Group has announced that its new AI Autonomous Research Assistant has achieved breakthrough performance, surpassing human benchmarks in scientific literature analysis, research synthesis, and hypothesis generation. This advanced AI system represents a significant leap forward in research automation and knowledge discovery...",
      author: "Dr. Sarah Chen",
      publishDate: "2025-01-12",
      readTime: "7 min read",
      category: "technology",
      tags: ["ai-research", "automation", "scientific-discovery", "innovation"],
      featured: false,
      image: "/news/ai-research-assistant.jpg",
      views: 11230,
      shares: 678
    },
    {
      id: 5,
      title: "Zion Tech Group Expands Global Operations with New European Headquarters",
      excerpt: "The company establishes a new European headquarters in Amsterdam to better serve European clients and expand its international presence.",
      content: "Zion Tech Group has announced the expansion of its global operations with the establishment of a new European headquarters in Amsterdam, Netherlands. This strategic expansion will enable the company to better serve its growing European client base and strengthen its position in the European technology market...",
      author: "Zion Tech Group Press",
      publishDate: "2025-01-10",
      readTime: "5 min read",
      category: "company",
      tags: ["expansion", "europe", "global-operations", "amsterdam"],
      featured: false,
      image: "/news/european-hq.jpg",
      views: 8760,
      shares: 432
    },
    {
      id: 6,
      title: "Breakthrough in SOC2 Compliance Automation Technology",
      excerpt: "Zion Tech Group introduces automated compliance monitoring system that reduces audit time by 90%.",
      content: "Zion Tech Group has achieved a major breakthrough in compliance automation with the introduction of its new SOC2 Compliance Automation Technology. This innovative system streamlines the compliance process, reducing audit preparation time by 90% while maintaining the highest standards of security and compliance...",
      author: "Alex Thompson",
      publishDate: "2025-01-08",
      readTime: "6 min read",
      category: "technology",
      tags: ["compliance", "automation", "soc2", "security"],
      featured: false,
      image: "/news/soc2-automation.jpg",
      views: 9450,
      shares: 521
    },
    {
      id: 7,
      title: "Zion Tech Group Named to Fortune 500 Fastest-Growing Companies List",
      excerpt: "The company ranks #47 on Fortune's list of fastest-growing companies, recognizing its rapid expansion and innovation.",
      content: "Zion Tech Group has been named to Fortune magazine's prestigious list of the 500 fastest-growing companies in America. Ranking #47 on the list, this recognition highlights the company's exceptional growth trajectory, innovative technology solutions, and strong market position in the rapidly evolving AI and quantum technology sectors...",
      author: "Zion Tech Group Press",
      publishDate: "2025-01-05",
      readTime: "4 min read",
      category: "awards",
      tags: ["fortune-500", "growth", "recognition", "success"],
      featured: false,
      image: "/news/fortune-500.jpg",
      views: 13420,
      shares: 789
    },
    {
      id: 8,
      title: "New 5G Enterprise Solutions Division Launched",
      excerpt: "Zion Tech Group establishes dedicated division for next-generation 5G enterprise networking and infrastructure solutions.",
      content: "Zion Tech Group has announced the launch of its new 5G Enterprise Solutions Division, dedicated to providing cutting-edge 5G networking and infrastructure solutions for enterprise clients. This new division will focus on delivering high-speed, low-latency connectivity solutions that enable the next generation of enterprise applications...",
      author: "Jennifer Lee",
      publishDate: "2025-01-03",
      readTime: "5 min read",
      category: "company",
      tags: ["5g", "networking", "enterprise", "infrastructure"],
      featured: false,
      image: "/news/5g-solutions.jpg",
      views: 7890,
      shares: 445
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || article.publishDate.startsWith(selectedYear);
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesYear && matchesSearch;
  });

  const featuredNews = filteredNews.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Newspaper className="w-4 h-4 mr-2" />
              Latest Updates
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Company News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Stay informed about Zion Tech Group's latest innovations, partnerships, awards, and industry developments.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search news articles and updates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-gray-700/50 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Years */}
            <div className="flex flex-wrap gap-2">
              {years.map((year) => (
                <button
                  key={year.id}
                  onClick={() => setSelectedYear(year.id)}
                  className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 ${
                    selectedYear === year.id
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700/50 text-gray-300 hover:border-cyan-500/30'
                  }`}
                >
                  {year.name}
                  <span className="ml-1 text-xs opacity-75">({year.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured News</h2>
              <p className="text-gray-300">Top stories and major announcements</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <TrendingUp className="w-16 h-16 text-cyan-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                        Featured
                      </span>
                      <span className="text-gray-400 text-sm capitalize">{article.category}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors duration-200">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(article.publishDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {article.views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Share2 className="w-4 h-4" />
                          {article.shares.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Latest News</h2>
            <p className="text-gray-300">
              {filteredNews.length > 0 
                ? `Showing ${filteredNews.length} articles` 
                : 'No news articles found matching your criteria'
              }
            </p>
          </div>
          
          {regularNews.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <Newspaper className="w-12 h-12 text-purple-400" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-gray-400 text-sm capitalize">{article.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors duration-200">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {article.views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Share2 className="w-3 h-3" />
                          {article.shares.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm">
                      Read More
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
          
          {regularNews.length === 0 && (
            <div className="text-center py-12">
              <Newspaper className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No news articles found</h3>
              <p className="text-gray-300">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Press Contact CTA */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center"
          >
            <Newspaper className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Press & Media Inquiries</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              For press releases, media interviews, or company information, please contact our communications team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Contact Press Team
              </button>
              <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300">
                Media Kit
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}