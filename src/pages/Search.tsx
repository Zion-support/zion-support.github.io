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
    { id: 'companies', name: 'Companies', count: 0 },
  ];

  const sortOptions = [
    { id: 'relevance', name: 'Relevance' },
    { id: 'newest', name: 'Newest' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
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
        result.tags.some((tag: string) => tag.toLowerCase().includes(query.toLowerCase()))
      );
      setResults(filtered);
      setLoading(false);
    }, 500);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'services':
        return <Server className="w-5 h-5" />;
      case 'talent':
        return <Users className="w-5 h-5" />;
      case 'equipment':
        return <Building className="w-5 h-5" />;
      case 'companies':
        return <Building className="w-5 h-5" />;
      default:
        return <SearchIcon className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'services':
        return 'from-blue-500 to-cyan-500';
      case 'talent':
        return 'from-green-500 to-emerald-500';
      case 'equipment':
        return 'from-purple-500 to-pink-500';
      case 'companies':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO
        title="Search - Zion Tech Group"
        description="Search through our comprehensive catalog of services, talent, equipment, and companies."
        keywords="search, services, talent, equipment, companies, Zion Tech Group"
      />

      {/* Header */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Search Everything
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find the perfect services, talent, equipment, or companies to meet your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search for services, talent, equipment, or companies..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-lg"
            />
          </div>
        </div>
      </section>

      {/* Filters and Categories */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                      : 'border-slate-700 text-gray-300 hover:border-slate-600 hover:bg-slate-800/50'
                  }`}
                >
                  {getCategoryIcon(category.id)}
                  <span>{category.name}</span>
                  {category.count > 0 && (
                    <span className="ml-2 px-2 py-1 bg-slate-700 text-xs rounded-full">
                      {category.count}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-3">
              <ArrowUpDown className="w-5 h-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-800/50 border border-slate-700/50 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
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
      </section>

      {/* Search Results */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <p className="text-gray-400 mt-4">Searching...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((result, index) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getTypeColor(result.type)} rounded-xl flex items-center justify-center`}>
                      {getCategoryIcon(result.type)}
                    </div>
                    {result.featured && (
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2">{result.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{result.description}</p>

                  {/* Meta Information */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Company:</span>
                      <span className="text-white">{result.company}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Location:</span>
                      <span className="text-white flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {result.location}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-green-400 font-medium">{result.price}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(result.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                          }`}
                        />
                      ))}
                      <span className="text-gray-400 text-sm ml-2">({result.reviews})</span>
                    </div>
                    <span className="text-gray-400 text-sm">{result.date}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {result.tags.slice(0, 3).map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded border border-slate-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
                      View Details
                    </button>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-white transition-colors">
                        <Bookmark className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-white transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <SearchIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No Results Found</h3>
              <p className="text-gray-400">Try adjusting your search terms or filters.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Search;

