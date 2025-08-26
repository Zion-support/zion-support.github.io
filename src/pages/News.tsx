import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  Eye, 
  ExternalLink,
  TrendingUp,
  Award,
  Globe,
  Building,
  Zap,
  Newspaper
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
      author: "Zion Tech Group Press",
      publishDate: "2025-01-20",
      readTime: "5 min read",
      category: "technology",
      featured: true,
      views: 15420,
      shares: 892
    },
    {
      id: 2,
      title: "Zion Tech Group Named 'AI Company of the Year' at Tech Excellence Awards",
      excerpt: "The company receives prestigious recognition for its contributions to artificial intelligence and autonomous systems innovation.",
      author: "Zion Tech Group Press",
      publishDate: "2025-01-18",
      readTime: "4 min read",
      category: "awards",
      featured: true,
      views: 12850,
      shares: 756
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || article.publishDate.startsWith(selectedYear);
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesYear && matchesSearch;
  });

  const featuredNews = filteredNews.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Latest News & Updates
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed about the latest developments, innovations, and announcements from Zion Tech Group.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search news articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured News</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((article) => (
                <div key={article.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-400">
                      {new Date(article.publishDate).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
                  <p className="text-gray-300 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{article.author}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((article) => (
              <div key={article.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-400">
                    {new Date(article.publishDate).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{article.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{article.author}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
