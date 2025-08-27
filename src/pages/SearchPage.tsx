import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  MapPin, 
  Clock, 
  DollarSign,
  Users,
  Code,
  Shield,
  Cloud,
  Brain,
  Rocket,
  Zap,
  Heart,
  Building,
  Cpu,
  Lock,
  Globe,
  TrendingUp,
  Award,
  CheckCircle,
  X,
  SlidersHorizontal
} from 'lucide-react';

interface SearchResult {
  id: string;
  type: 'service' | 'talent' | 'equipment' | 'company';
  title: string;
  description: string;
  category: string;
  rating?: number;
  reviewCount?: number;
  price?: string;
  location?: string;
  tags: string[];
  image?: string;
  path: string;
  featured?: boolean;
}

const mockSearchResults: SearchResult[] = [
  {
    id: '1',
    type: 'service',
    title: 'AI Business Intelligence Platform',
    description: 'Transform your data into actionable insights with our AI-powered analytics platform. Get real-time dashboards, predictive modeling, and automated reporting.',
    category: 'AI & Analytics',
    rating: 4.9,
    reviewCount: 127,
    price: '$2,500/mo',
    location: 'Remote',
    tags: ['AI', 'Analytics', 'Machine Learning', 'Business Intelligence'],
    path: '/services/ai-analytics',
    featured: true
  },
  {
    id: '2',
    type: 'service',
    title: 'Cybersecurity Suite',
    description: 'Comprehensive security solution including threat detection, 24/7 monitoring, compliance management, and incident response.',
    category: 'Cybersecurity',
    rating: 4.8,
    reviewCount: 89,
    price: '$3,200/mo',
    location: 'Remote',
    tags: ['Security', 'Threat Detection', 'Compliance', 'Monitoring'],
    path: '/services/cybersecurity',
    featured: true
  },
  {
    id: '3',
    type: 'talent',
    title: 'Senior AI Engineer',
    description: 'Experienced AI engineer specializing in machine learning, deep learning, and natural language processing. Available for remote work.',
    category: 'AI & Machine Learning',
    rating: 4.9,
    reviewCount: 45,
    price: '$150/hr',
    location: 'San Francisco, CA',
    tags: ['AI', 'Machine Learning', 'Python', 'TensorFlow', 'Remote'],
    path: '/talent/ai-engineer'
  },
  {
    id: '4',
    type: 'equipment',
    title: 'Quantum Computing Workstation',
    description: 'High-performance quantum computing workstation for research and development. Includes latest quantum processors and development tools.',
    category: 'Hardware',
    price: '$25,000',
    location: 'New York, NY',
    tags: ['Quantum Computing', 'Hardware', 'Research', 'Development'],
    path: '/equipment/quantum-workstation'
  },
  {
    id: '5',
    type: 'company',
    title: 'TechCorp Solutions',
    description: 'Leading technology consulting firm specializing in digital transformation, cloud migration, and enterprise software development.',
    category: 'Consulting',
    rating: 4.7,
    reviewCount: 203,
    location: 'Austin, TX',
    tags: ['Consulting', 'Digital Transformation', 'Cloud', 'Enterprise'],
    path: '/companies/techcorp-solutions'
  }
];

const categories = [
  { id: 'all', name: 'All Categories', icon: Grid },
  { id: 'services', name: 'Services', icon: Code },
  { id: 'talent', name: 'Talent', icon: Users },
  { id: 'equipment', name: 'Equipment', icon: Cpu },
  { id: 'companies', name: 'Companies', icon: Building }
];

const sortOptions = [
  { id: 'relevance', name: 'Relevance', icon: TrendingUp },
  { id: 'rating', name: 'Highest Rated', icon: Star },
  { id: 'price-low', name: 'Price: Low to High', icon: DollarSign },
  { id: 'price-high', name: 'Price: High to Low', icon: DollarSign },
  { id: 'newest', name: 'Newest', icon: Clock }
];

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    priceRange: 'all',
    location: 'all',
    rating: 'all',
    availability: 'all'
  });

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    }
  }, [searchParams]);

  const performSearch = async (query: string) => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      performSearch(searchQuery.trim());
    }
  };

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedSort('relevance');
    setFilters({
      priceRange: 'all',
      location: 'all',
      rating: 'all',
      availability: 'all'
    });
  };

  const filteredResults = mockSearchResults.filter(result => {
    const matchesQuery = result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        result.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || result.type === selectedCategory;
    
    return matchesQuery && matchesCategory;
  });

  const sortedResults = [...filteredResults].sort((a, b) => {
    switch (selectedSort) {
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'price-low':
        const priceA = parseFloat(a.price?.replace(/[^0-9.]/g, '') || '0');
        const priceB = parseFloat(b.price?.replace(/[^0-9.]/g, '') || '0');
        return priceA - priceB;
      case 'price-high':
        const priceAHigh = parseFloat(a.price?.replace(/[^0-9.]/g, '') || '0');
        const priceBHigh = parseFloat(b.price?.replace(/[^0-9.]/g, '') || '0');
        return priceBHigh - priceAHigh;
      case 'newest':
        return 0; // Would be based on creation date in real implementation
      default:
        return 0;
    }
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service': return Code;
      case 'talent': return Users;
      case 'equipment': return Cpu;
      case 'company': return Building;
      default: return Code;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'service': return 'from-zion-cyan to-zion-blue';
      case 'talent': return 'from-zion-purple to-zion-pink';
      case 'equipment': return 'from-zion-green to-zion-cyan';
      case 'company': return 'from-zion-orange to-zion-red';
      default: return 'from-zion-cyan to-zion-blue';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-20">
      {/* Search Header */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Search <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">Everything</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Find services, talent, equipment, and companies that match your needs
            </p>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, talent, equipment, or companies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-lg"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white px-6 py-2 rounded-lg hover:from-zion-cyan/80 hover:to-zion-blue/80 transition-all duration-300"
                >
                  Search
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Filters and Results */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Filters Bar */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'border-zion-cyan bg-zion-cyan/20 text-zion-cyan'
                      : 'border-zion-slate/30 text-zion-slate-light hover:border-zion-cyan/50 hover:text-zion-cyan'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center gap-4 ml-auto">
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="px-3 py-2 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>

              <div className="flex items-center gap-2 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'grid' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === 'list' ? 'bg-zion-cyan text-white' : 'text-zion-slate-light hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-zion-slate-light hover:text-white transition-all duration-200"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mb-8"
              >
                <div className="bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                      <label className="block text-zion-cyan font-medium mb-2">Price Range</label>
                      <select
                        value={filters.priceRange}
                        onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                        className="w-full px-3 py-2 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      >
                        <option value="all">All Prices</option>
                        <option value="under-100">Under $100</option>
                        <option value="100-500">$100 - $500</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="over-1000">Over $1,000</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-zion-cyan font-medium mb-2">Location</label>
                      <select
                        value={filters.location}
                        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                        className="w-full px-3 py-2 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      >
                        <option value="all">All Locations</option>
                        <option value="remote">Remote</option>
                        <option value="onsite">On-site</option>
                        <option value="hybrid">Hybrid</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-zion-cyan font-medium mb-2">Rating</label>
                      <select
                        value={filters.rating}
                        onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
                        className="w-full px-3 py-2 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      >
                        <option value="all">All Ratings</option>
                        <option value="4-plus">4+ Stars</option>
                        <option value="4.5-plus">4.5+ Stars</option>
                        <option value="5">5 Stars Only</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-zion-cyan font-medium mb-2">Availability</label>
                      <select
                        value={filters.availability}
                        onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
                        className="w-full px-3 py-2 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      >
                        <option value="all">All</option>
                        <option value="available">Available Now</option>
                        <option value="soon">Available Soon</option>
                        <option value="custom">Custom Schedule</option>
                      </select>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {loading ? 'Searching...' : `${filteredResults.length} results found`}
              </h2>
              {filteredResults.length > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm"
                >
                  Clear all filters
                </button>
              )}
            </div>

            {/* Loading State */}
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-zion-slate-light">Searching for the best matches...</p>
              </motion.div>
            )}

            {/* Results Grid/List */}
            <AnimatePresence mode="wait">
              {!loading && filteredResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {viewMode === 'grid' ? (
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {sortedResults.map((result, index) => (
                        <motion.div
                          key={result.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ y: -5, scale: 1.02 }}
                        >
                          <Link
                            to={result.path}
                            className="block bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 h-full"
                          >
                            <div className="flex items-start gap-4">
                              <div className={`w-12 h-12 bg-gradient-to-r ${getTypeColor(result.type)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                {React.createElement(getTypeIcon(result.type), { className: "w-6 h-6 text-white" })}
                              </div>
                              
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-xs uppercase text-zion-cyan font-medium">
                                    {result.type}
                                  </span>
                                  {result.featured && (
                                    <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                                      Featured
                                    </span>
                                  )}
                                </div>
                                
                                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                                  {result.title}
                                </h3>
                                
                                <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                                  {result.description}
                                </p>

                                <div className="flex items-center gap-4 mb-3 text-sm">
                                  {result.rating && (
                                    <div className="flex items-center gap-1 text-white">
                                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                      {result.rating}
                                      <span className="text-zion-slate-light">({result.reviewCount})</span>
                                    </div>
                                  )}
                                  {result.price && (
                                    <div className="flex items-center gap-1 text-white">
                                      <DollarSign className="w-4 h-4" />
                                      {result.price}
                                    </div>
                                  )}
                                  {result.location && (
                                    <div className="flex items-center gap-1 text-zion-slate-light">
                                      <MapPin className="w-4 h-4" />
                                      {result.location}
                                    </div>
                                  )}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                  {result.tags.map(tag => (
                                    <span
                                      key={tag}
                                      className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-sm rounded-full"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {sortedResults.map((result, index) => (
                        <motion.div
                          key={result.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <Link
                            to={result.path}
                            className="block bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                          >
                            <div className="flex items-start gap-6">
                              <div className={`w-16 h-16 bg-gradient-to-r ${getTypeColor(result.type)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                {React.createElement(getTypeIcon(result.type), { className: "w-8 h-8 text-white" })}
                              </div>
                              
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-3 mb-3">
                                  <span className="text-sm uppercase text-zion-cyan font-medium">
                                    {result.type}
                                  </span>
                                  {result.featured && (
                                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                                      Featured
                                    </span>
                                  )}
                                </div>
                                
                                <h3 className="text-xl font-semibold text-white mb-3">
                                  {result.title}
                                </h3>
                                
                                <p className="text-zion-slate-light mb-4 leading-relaxed">
                                  {result.description}
                                </p>

                                <div className="flex items-center gap-6 mb-4 text-sm">
                                  {result.rating && (
                                    <div className="flex items-center gap-2 text-white">
                                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                      <span className="font-medium">{result.rating}</span>
                                      <span className="text-zion-slate-light">({result.reviewCount} reviews)</span>
                                    </div>
                                  )}
                                  {result.price && (
                                    <div className="flex items-center gap-2 text-white">
                                      <DollarSign className="w-5 h-5" />
                                      <span className="font-medium">{result.price}</span>
                                    </div>
                                  )}
                                  {result.location && (
                                    <div className="flex items-center gap-2 text-zion-slate-light">
                                      <MapPin className="w-5 h-5" />
                                      <span>{result.location}</span>
                                    </div>
                                  )}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                  {result.tags.map(tag => (
                                    <span
                                      key={tag}
                                      className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-sm rounded-full"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {!loading && filteredResults.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="w-24 h-24 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
              <p className="text-zion-slate-light mb-4">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={clearAllFilters}
                className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
