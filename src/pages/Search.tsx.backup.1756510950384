import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, Filter, MapPin, Briefcase, Server, Users, Building, Star, Clock, ArrowRight } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const categories = [
    { id: 'all', name: 'All', icon: <SearchIcon className="w-4 h-4" />, count: 0 },
    { id: 'services', name: 'Services', icon: <Server className="w-4 h-4" />, count: 0 },
    { id: 'talent', name: 'Talent', icon: <Users className="w-4 h-4" />, count: 0 },
    { id: 'equipment', name: 'Equipment', icon: <Building className="w-4 h-4" />, count: 0 },
    { id: 'companies', name: 'Companies', icon: <Building className="w-4 h-4" />, count: 0 }
  ];

  const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'newest', label: 'Newest' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' }
  ];

  // Mock search results - in a real app, this would come from an API
  const mockResults = [
    {
      id: 1,
      type: 'service',
      title: 'AI-Powered Business Intelligence Platform',
      description: 'Advanced analytics platform with machine learning capabilities for business insights',
      category: 'AI Services',
      rating: 4.8,
      reviews: 127,
      price: '$2,500/month',
      location: 'Remote',
      company: 'Zion Tech Group',
      tags: ['AI', 'Analytics', 'Machine Learning', 'Business Intelligence'],
      featured: true
    },
    {
      id: 2,
      type: 'talent',
      title: 'Senior AI Engineer',
      description: 'Experienced AI engineer specializing in machine learning and neural networks',
      category: 'Engineering',
      rating: 4.9,
      reviews: 89,
      price: '$150/hour',
      location: 'San Francisco, CA',
      company: 'Tech Solutions Inc',
      tags: ['AI', 'Machine Learning', 'Python', 'TensorFlow'],
      featured: false
    },
    {
      id: 3,
      type: 'equipment',
      title: 'High-Performance GPU Cluster',
      description: 'Enterprise-grade GPU cluster for AI training and inference workloads',
      category: 'Hardware',
      rating: 4.7,
      reviews: 45,
      price: '$15,000/month',
      location: 'New York, NY',
      company: 'Cloud Computing Corp',
      tags: ['GPU', 'AI Training', 'High Performance', 'Enterprise'],
      featured: true
    },
    {
      id: 4,
      type: 'service',
      title: 'Cloud Migration Consulting',
      description: 'Expert consulting services for migrating legacy systems to cloud infrastructure',
      category: 'Consulting',
      rating: 4.6,
      reviews: 203,
      price: '$300/hour',
      location: 'Remote',
      company: 'Zion Tech Group',
      tags: ['Cloud', 'Migration', 'Consulting', 'Infrastructure'],
      featured: false
    }
  ];

  useEffect(() => {
    if (searchQuery) {
      performSearch();
    }
  }, [searchQuery, activeCategory, sortBy]);

  const performSearch = async () => {
    setLoading(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Filter results based on search query and category
    let filteredResults = mockResults.filter(result => {
      const matchesQuery = result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          result.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = activeCategory === 'all' || result.type === activeCategory;
      
      return matchesQuery && matchesCategory;
    });

    // Sort results
    filteredResults.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.id - a.id;
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        default:
          return 0;
      }
    });

    setResults(filteredResults);
    setLoading(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery.trim() });
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service':
        return <Server className="w-5 h-5 text-zion-cyan" />;
      case 'talent':
        return <Users className="w-5 h-5 text-zion-purple" />;
      case 'equipment':
        return <Building className="w-5 h-5 text-zion-orange" />;
      default:
        return <SearchIcon className="w-5 h-5 text-zion-slate-light" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'service':
        return 'Service';
      case 'talent':
        return 'Talent';
      case 'equipment':
        return 'Equipment';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Search Header */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Search Zion Tech Group
          </h1>
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-4xl mx-auto">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-6 h-6" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for services, talent, equipment, companies..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-lg"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-zion-cyan text-zion-slate-dark px-6 py-2 rounded-md font-semibold hover:bg-zion-cyan-light transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Search Results */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Filters and Categories */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-zion-cyan text-zion-slate-dark'
                      : 'bg-zion-slate text-zion-slate-light hover:bg-zion-slate-light hover:text-white'
                  }`}
                >
                  {category.icon}
                  {category.name}
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.id === 'all' ? results.length : results.filter(r => r.type === category.id).length}
                  </span>
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <span className="text-zion-slate-light">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-zion-slate border border-zion-slate-light rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-cyan mx-auto"></div>
              <p className="text-zion-slate-light mt-4">Searching...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-6">
              {results.map((result) => (
                <div
                  key={result.id}
                  className={`bg-zion-slate border border-zion-slate-light rounded-lg p-6 hover:shadow-lg transition-shadow ${
                    result.featured ? 'ring-2 ring-zion-cyan' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {getTypeIcon(result.type)}
                      <span className="text-sm text-zion-slate-light bg-zion-slate-light/20 px-2 py-1 rounded-full">
                        {getTypeLabel(result.type)}
                      </span>
                      {result.featured && (
                        <span className="text-xs bg-zion-cyan text-zion-slate-dark px-2 py-1 rounded-full font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{result.rating}</span>
                      <span className="text-zion-slate-light text-sm">({result.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">{result.title}</h3>
                  <p className="text-zion-slate-light mb-4">{result.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {result.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-zion-slate-light/20 text-zion-slate-light text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {result.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        {result.company}
                      </div>
                      <div className="text-zion-cyan font-medium">{result.price}</div>
                    </div>

                    <button className="flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : searchQuery ? (
            <div className="text-center py-12">
              <SearchIcon className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search terms or browse our categories
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className="px-4 py-2 bg-zion-slate border border-zion-slate-light rounded-lg text-zion-slate-light hover:bg-zion-slate-light hover:text-white transition-colors"
                  >
                    Browse {category.name}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <SearchIcon className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Start your search</h3>
              <p className="text-zion-slate-light">
                Enter a search term above to find services, talent, equipment, and more
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}