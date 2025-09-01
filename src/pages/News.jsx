import React, { useState } from 'react';
import {
  Calendar,
  User,
  Tag,
  ArrowRight,
  Search,
  Filter,
  Clock,
  Eye
} from 'lucide-react';

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'AI', 'Cloud', 'Cybersecurity', 'Innovation', 'Company'];

  const newsArticles = [
    {
      id: 1,
      title: "Zion Tech Group Launches Revolutionary AI Platform",
      excerpt: "Our new AI platform transforms business operations with autonomous decision-making capabilities.",
      content: "Zion Tech Group has announced the launch of its groundbreaking AI platform that revolutionizes how businesses operate. The platform features autonomous decision-making capabilities, predictive analytics, and real-time optimization.",
      author: "Sarah Johnson",
      date: "2024-01-15",
      category: "AI",
      readTime: "5 min read",
      views: 1250,
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough in Enterprise Applications",
      excerpt: "New quantum algorithms deliver unprecedented performance improvements for complex business problems.",
      content: "Our research team has developed breakthrough quantum algorithms that deliver unprecedented performance improvements for complex business optimization problems. These algorithms are now being implemented in enterprise applications.",
      author: "Dr. Michael Chen",
      date: "2024-01-10",
      category: "Innovation",
      readTime: "7 min read",
      views: 980,
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Enhanced Cybersecurity Solutions for Modern Threats",
      excerpt: "Advanced threat detection and response capabilities protect against evolving cyber threats.",
      content: "We've enhanced our cybersecurity solutions with advanced threat detection and response capabilities. These improvements provide comprehensive protection against evolving cyber threats and ensure business continuity.",
      author: "Alex Rodriguez",
      date: "2024-01-05",
      category: "Cybersecurity",
      readTime: "4 min read",
      views: 750,
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Cloud Infrastructure Expansion Across Global Markets",
      excerpt: "New data centers and enhanced cloud services now available in 15 additional countries.",
      content: "Zion Tech Group has expanded its cloud infrastructure with new data centers and enhanced services now available in 15 additional countries. This expansion provides improved performance and compliance options for global clients.",
      author: "Emily Watson",
      date: "2024-01-01",
      category: "Cloud",
      readTime: "6 min read",
      views: 1100,
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Company Growth: 500+ Projects Milestone Achieved",
      excerpt: "Zion Tech Group celebrates completing over 500 successful technology projects worldwide.",
      content: "We're proud to announce that Zion Tech Group has successfully completed over 500 technology projects worldwide. This milestone reflects our commitment to delivering exceptional results and driving digital transformation.",
      author: "David Kim",
      date: "2023-12-28",
      category: "Company",
      readTime: "3 min read",
      views: 850,
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "AI-Powered Business Automation: The Future is Here",
      excerpt: "Discover how AI automation is transforming business processes and driving efficiency.",
      content: "AI-powered business automation is revolutionizing how companies operate. From intelligent document processing to automated customer service, these technologies are driving unprecedented efficiency and cost savings.",
      author: "Lisa Thompson",
      date: "2023-12-20",
      category: "AI",
      readTime: "8 min read",
      views: 1400,
      image: "/api/placeholder/600/400"
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about the latest developments in technology, AI, and digital transformation
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold mb-2">{article.category}</div>
                  <div className="text-sm opacity-90">Featured Article</div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium text-blue-600">{article.category}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{article.views}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                  
                  <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">No articles found matching your criteria.</div>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}