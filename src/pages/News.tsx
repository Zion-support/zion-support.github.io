import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  Clock,
  Eye,
  Newspaper,
  Brain,
  Rocket,
  Shield,
  Cloud,
  Cpu,
  Database,
  TrendingUp,
  Globe
} from 'lucide-react';

export default function News() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News', icon: Newspaper, count: 18 },
    { id: 'ai', name: 'AI & ML', icon: Brain, count: 6 },
    { id: 'innovation', name: 'Innovation', icon: Rocket, count: 4 },
    { id: 'security', name: 'Security', icon: Shield, count: 3 },
    { id: 'cloud', name: 'Cloud Tech', icon: Cloud, count: 3 },
    { id: 'business', name: 'Business', icon: TrendingUp, count: 2 }
  ];

  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI-Powered Business Intelligence Platform",
      excerpt: "The new platform combines advanced machine learning algorithms with real-time data analytics to provide unprecedented business insights...",
      author: "Zion Tech Press",
      date: "2024-01-20",
      readTime: "5 min read",
      views: "5.2k",
      category: "ai",
      tags: ["AI Platform", "Business Intelligence", "Product Launch", "Machine Learning"],
      image: "/api/placeholder/400/250",
      featured: true,
      breaking: true
    },
    {
      id: 2,
      title: "Major Breakthrough in Quantum Computing Research Announced",
      excerpt: "Scientists at Zion Tech Group have achieved a significant milestone in quantum error correction, bringing practical quantum computing closer to reality...",
      author: "Research Team",
      date: "2024-01-18",
      readTime: "7 min read",
      views: "3.8k",
      category: "innovation",
      tags: ["Quantum Computing", "Research", "Breakthrough", "Technology"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Zion Tech Group Expands Global Operations with New European Office",
      excerpt: "The company opens its first European headquarters in Berlin, Germany, to better serve clients across the European Union...",
      author: "Corporate Communications",
      date: "2024-01-16",
      readTime: "4 min read",
      views: "2.9k",
      category: "business",
      tags: ["Global Expansion", "European Market", "Business Growth", "International"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "New Cybersecurity Framework Released for Enterprise Clients",
      excerpt: "Zion Tech Group introduces comprehensive security framework designed to protect against emerging cyber threats...",
      author: "Security Team",
      date: "2024-01-14",
      readTime: "6 min read",
      views: "4.1k",
      category: "security",
      tags: ["Cybersecurity", "Enterprise", "Security Framework", "Threat Protection"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Partnership Announced with Leading Cloud Infrastructure Provider",
      excerpt: "Strategic collaboration to deliver enhanced cloud solutions and accelerate digital transformation for enterprise clients...",
      author: "Partnership Team",
      date: "2024-01-12",
      readTime: "5 min read",
      views: "3.3k",
      category: "cloud",
      tags: ["Partnership", "Cloud Infrastructure", "Digital Transformation", "Enterprise"],
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Zion Tech Group Recognized as Top AI Solutions Provider",
      excerpt: "Industry recognition for excellence in artificial intelligence solutions and innovative technology implementations...",
      author: "Awards Team",
      date: "2024-01-10",
      readTime: "4 min read",
      views: "2.7k",
      category: "ai",
      tags: ["Awards", "Recognition", "AI Solutions", "Industry Leadership"],
      image: "/api/placeholder/400/250"
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
              <Newspaper className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Latest News & Updates
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay informed with the latest developments, product launches, company updates, 
            and industry insights from Zion Tech Group.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'border-orange-500 bg-orange-500/20 text-orange-400'
                      : 'border-gray-700 text-gray-300 hover:border-orange-500/50 hover:text-orange-400'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Breaking News Banner */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-3 text-white">
            <div className="animate-pulse">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="font-semibold">BREAKING NEWS</span>
            <span>Zion Tech Group Launches Revolutionary AI-Powered Business Intelligence Platform</span>
            <Link
              to="/news/1"
              className="text-white hover:text-orange-200 transition-colors underline"
            >
              Read More →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredArticles.filter(article => article.featured).length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Featured News</h2>
            {filteredArticles.filter(article => article.featured).map((article) => (
              <div key={article.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      {article.breaking && (
                        <span className="px-3 py-1 bg-red-500/20 text-red-400 text-sm rounded-full border border-red-500/30">
                          BREAKING
                        </span>
                      )}
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-sm rounded-full border border-orange-500/30">
                        Featured
                      </span>
                      <span className="text-gray-400 text-sm">{article.category.toUpperCase()}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 hover:text-orange-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(article.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/news/${article.id}`}
                        className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="bg-gray-700/50 flex items-center justify-center">
                    <div className="text-gray-500 text-center p-8">
                      <div className="w-32 h-32 bg-gray-600 rounded-lg mx-auto mb-4"></div>
                      <p>News Image</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* News Articles Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Latest News
          </h2>
          
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <Newspaper className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No news articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.filter(article => !article.featured).map((article) => (
                <article key={article.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                        {article.category.toUpperCase()}
                      </span>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <Eye className="w-4 h-4" />
                        <span>{article.views}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 hover:text-orange-400 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                        {article.tags.length > 2 && (
                          <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                            +{article.tags.length - 2}
                          </span>
                        )}
                      </div>
                      <Link
                        to={`/news/${article.id}`}
                        className="text-orange-400 hover:text-orange-300 transition-colors text-sm"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Press Kit Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Press & Media</h2>
          <p className="text-xl text-gray-300 mb-8">
            Journalists and media professionals can access our press kit, 
            company information, and media contacts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/press-kit"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-200"
            >
              Download Press Kit
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-orange-500 text-orange-400 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-200"
            >
              Media Contact
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest news and updates from Zion Tech Group delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}