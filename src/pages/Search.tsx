<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Search as SearchIcon, 
  Filter, 
  Server, 
  Users, 
  Building, 
  Star, 
  MapPin, 
  Clock, 
  DollarSign, 
  ArrowUpDown, 
  Calendar, 
  Eye, 
  Bookmark, 
  Share2 
} from 'lucide-react';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const categories = [
    { id: 'all', name: 'All Categories', count: 0 },
    { id: 'services', name: 'Services', count: 0 },
    { id: 'talent', name: 'Talent', count: 0 },
    { id: 'equipment', name: 'Equipment', count: 0 },
    { id: 'companies', name: 'Companies', count: 0 }
  ];

  const sortOptions = [
    { id: 'relevance', name: 'Relevance' },
    { id: 'newest', name: 'Newest' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' }
  ];

  const mockResults = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence Platform',
      description: 'Advanced analytics and business intelligence solution powered by machine learning algorithms.',
      type: 'services',
      price: '$5,000/month',
      rating: 4.8,
      reviews: 127,
      location: 'Remote',
      company: 'Zion Tech Group',
      tags: ['AI', 'Analytics', 'Business Intelligence', 'Machine Learning'],
      featured: true,
      date: '2024-12-01'
    },
    {
      id: 2,
      title: 'Senior Full-Stack Developer',
      description: 'Experienced developer specializing in React, Node.js, and cloud technologies.',
      type: 'talent',
      price: '$120/hour',
      rating: 4.9,
      reviews: 89,
      location: 'Remote',
      company: 'Zion Tech Group',
      tags: ['React', 'Node.js', 'Full-Stack', 'Cloud'],
      featured: false,
      date: '2024-11-28'
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Setup',
      description: 'Complete cloud infrastructure design and implementation for enterprise applications.',
      type: 'services',
      price: '$15,000',
      rating: 4.7,
      reviews: 203,
      location: 'On-site',
      company: 'Zion Tech Group',
      tags: ['Cloud', 'Infrastructure', 'AWS', 'Azure'],
      featured: true,
      date: '2024-11-25'
    },
    {
      id: 4,
      title: 'High-Performance Computing Cluster',
      description: 'Enterprise-grade computing cluster for data processing and machine learning workloads.',
      type: 'equipment',
      price: '$50,000',
      rating: 4.6,
      reviews: 45,
      location: 'On-site',
      company: 'Zion Tech Group',
      tags: ['HPC', 'Computing', 'Machine Learning', 'Data Processing'],
      featured: false,
      date: '2024-11-20'
    }
  ];

  useEffect(() => {
    // Simulate search results
    setResults(mockResults);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setLoading(true);

    // Simulate search delay
    setTimeout(() => {
      const filtered = mockResults.filter(result =>
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase()) ||
        result.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
      setResults(filtered);
      setLoading(false);
    }, 500);
  };

  const filteredResults = results.filter(result => 
    activeCategory === 'all' || result.type === activeCategory
  );

  const sortedResults = [...filteredResults].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'services': return <Server className="w-5 h-5" />;
      case 'talent': return <Users className="w-5 h-5" />;
      case 'equipment': return <Building className="w-5 h-5" />;
      case 'companies': return <Building className="w-5 h-5" />;
      default: return <Server className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'services': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'talent': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'equipment': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'companies': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <>
      <SEO 
        title="Search - Zion Tech Group"
        description="Search through our comprehensive database of services, talent, equipment, and companies."
        keywords="search, services, talent, equipment, companies, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Header */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <SearchIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Search</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Search through our comprehensive database of services, talent, equipment, and companies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Interface */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              {/* Search Bar */}
              <div className="relative mb-6">
                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, talent, equipment, or companies..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Filters and Sort */}
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                {/* Category Filter */}
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300 text-sm">Category:</span>
                  <select
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                    className="px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort Options */}
                <div className="flex items-center gap-2">
                  <ArrowUpDown className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300 text-sm">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Results */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">
                {searchQuery ? `Search Results for "${searchQuery}"` : 'All Results'}
              </h2>
              <p className="text-gray-400">
                {sortedResults.length} results found
              </p>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <p className="text-gray-400">Searching...</p>
              </div>
            ) : sortedResults.length > 0 ? (
              <div className="space-y-4">
                {sortedResults.map((result, index) => (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <getTypeIcon type={result.type} className="w-10 h-10 text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-bold text-white">{result.title}</h3>
                              {result.featured && (
                                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs border border-yellow-500/30">
                                  Featured
                                </span>
                              )}
                            </div>
                            <p className="text-gray-300 mb-3">{result.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-blue-400 mb-1">{result.price}</div>
                            <div className="flex items-center gap-1 justify-end">
                              <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-gray-300">{result.rating}</span>
                              <span className="text-xs text-gray-400">({result.reviews})</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-300">{result.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-300">{result.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-300">{new Date(result.date).toLocaleDateString()}</span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(result.type)}`}>
                            {result.type}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {result.tags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-400">
                              {getTypeIcon(result.type)}
                              {result.type.charAt(0).toUpperCase() + result.type.slice(1)}
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                              <Eye className="w-4 h-4 mr-2 inline" />
                              View Details
                            </button>
                            <button className="px-4 py-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg font-medium transition-colors">
                              <Bookmark className="w-4 h-4 mr-2 inline" />
                              Save
                            </button>
                            <button className="px-4 py-2 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-lg font-medium transition-colors">
                              <Share2 className="w-4 h-4 mr-2 inline" />
                              Share
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center py-12"
              >
                <SearchIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No Results Found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search terms or browse all categories
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                    setResults(mockResults);
                  }}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Clear Search
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Can't Find What You're Looking For?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our team is here to help you find the perfect solution or create a custom one for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Contact Our Team
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-3 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  <Server className="w-5 h-5 mr-2" />
                  Browse All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Search;
=======
>>>>>>> origin/main
