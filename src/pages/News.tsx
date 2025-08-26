import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight, 
  Search, 
  Filter,
  Clock,
  Eye,
  ExternalLink,
  TrendingUp,
  Award,
  Globe,
  Newspaper,
  Building,
  Zap
} from 'lucide-react';

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
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
      title: "Zion Tech Group Launches Revolutionary AI Business Platform",
      excerpt: "Our new AI-powered business automation platform is set to transform how enterprises operate and scale their operations.",
      category: "Product Launch",
      author: "Sarah Chen",
      date: "March 15, 2025",
      readTime: "5 min read",
      views: 1247,
      featured: true,
      image: "/images/news/ai-platform-launch.jpg"
    },
    {
      id: 2,
      title: "Cybersecurity Breakthrough: Advanced Threat Detection System",
      excerpt: "We've developed a next-generation cybersecurity solution that uses machine learning to detect and prevent sophisticated cyber attacks.",
      category: "Research & Development",
      author: "Marcus Rodriguez",
      date: "March 12, 2025",
      readTime: "7 min read",
      views: 892,
      featured: false,
      image: "/images/news/cybersecurity-breakthrough.jpg"
    },
    {
      id: 3,
      title: "Strategic Partnership with Global Tech Leaders Announced",
      excerpt: "Zion Tech Group joins forces with industry leaders to accelerate innovation in quantum computing and AI research.",
      category: "Partnerships",
      author: "David Kim",
      date: "March 10, 2025",
      readTime: "4 min read",
      views: 1563,
      featured: false,
      image: "/images/news/strategic-partnership.jpg"
    },
    {
      id: 4,
      title: "Industry Recognition: Best AI Solutions Provider 2025",
      excerpt: "We're honored to receive the prestigious award for excellence in AI solutions and innovation.",
      category: "Awards & Recognition",
      author: "Lisa Thompson",
      date: "March 8, 2025",
      readTime: "3 min read",
      views: 734,
      featured: false,
      image: "/images/news/industry-award.jpg"
    },
    {
      id: 5,
      title: "Market Trends: The Future of Autonomous Business Operations",
      excerpt: "Analysis of emerging trends in business automation and the role of AI in shaping the future of enterprise operations.",
      category: "Industry Insights",
      author: "Dr. Emily Watson",
      date: "March 5, 2025",
      readTime: "8 min read",
      views: 2101,
      featured: false,
      image: "/images/news/market-trends.jpg"
    },
    {
      id: 6,
      title: "Customer Success Story: Manufacturing Giant Achieves 40% Efficiency Gain",
      excerpt: "How a leading manufacturing company transformed their operations using our autonomous business platform.",
      category: "Company News",
      author: "Alex Thompson",
      date: "March 3, 2025",
      readTime: "6 min read",
      views: 945,
      featured: false,
      image: "/images/news/customer-success.jpg"
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category.toLowerCase().includes(selectedCategory);
    const matchesYear = selectedYear === 'all' || article.date.includes(selectedYear);
    
    return matchesSearch && matchesCategory && matchesYear;
  });

  const featuredArticle = newsArticles.find(article => article.featured);

  return (
    <>
      <SEO
        title="News & Updates | Zion Tech Group"
        description="Stay updated with the latest news, product launches, research breakthroughs, and industry insights from Zion Tech Group."
        keywords="tech news, AI news, cybersecurity news, business technology, industry insights, product updates"
        canonicalUrl="https://ziontechgroup.com/news"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Newspaper className="w-4 h-4 mr-2" />
                Latest News & Updates
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Stay Informed with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"> Zion News</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Discover the latest developments in AI, cybersecurity, business technology, 
                and industry insights from our team of experts and researchers.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search news articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Year Filter */}
                <div>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {years.map((year) => (
                      <option key={year.id} value={year.id}>
                        {year.name} ({year.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="px-4 sm:px-6 lg:px-8 mb-16">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl border border-blue-500/30 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 text-sm font-medium">
                        {featuredArticle.category}
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center text-slate-400 text-sm mb-6">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{featuredArticle.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="mr-4">{featuredArticle.date}</span>
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    <Link
                      to={`/news/${featuredArticle.id}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                  <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 flex items-center justify-center p-8">
                    <div className="text-center">
                      <Newspaper className="w-24 h-24 text-blue-400/50 mx-auto mb-4" />
                      <p className="text-slate-400 text-sm">Featured Article</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* News Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.filter(article => !article.featured).map((article) => (
                <article
                  key={article.id}
                  className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm font-medium rounded-full">
                        {article.category}
                      </span>
                      <div className="flex items-center text-slate-400 text-sm">
                        <Eye className="w-4 h-4 mr-1" />
                        {article.views}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-slate-400 text-sm mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-sm">{article.date}</span>
                      <Link
                        to={`/news/${article.id}`}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-12 rounded-2xl border border-blue-500/30">
              <h2 className="text-3xl font-bold text-white mb-6">
                Never Miss Important Updates
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest news, product updates, 
                and industry insights delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
