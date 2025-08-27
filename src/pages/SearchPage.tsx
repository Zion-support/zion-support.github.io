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
    type: 'service',
    title: 'Cloud Infrastructure Management',
    description: 'Scalable cloud solutions designed for enterprise performance and security. Optimize costs while maintaining high availability.',
    category: 'Cloud & DevOps',
    rating: 4.7,
    reviewCount: 156,
    price: '$1,800/mo',
    location: 'Remote',
    tags: ['Cloud', 'DevOps', 'Infrastructure', 'Scalability'],
    path: '/services/cloud-devops'
  },
  {
    id: '6',
    type: 'talent',
    title: 'DevOps Specialist',
    description: 'DevOps engineer with expertise in AWS, Docker, Kubernetes, and CI/CD pipelines. Available for contract work.',
    category: 'DevOps',
    rating: 4.8,
    reviewCount: 32,
    price: '$120/hr',
    location: 'Austin, TX',
    tags: ['DevOps', 'AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    path: '/talent/devops-specialist'
  }
];

const categories = [
  { id: 'all', name: 'All Categories', icon: Grid, count: 0 },
  { id: 'services', name: 'Services', icon: Code, count: 0 },
  { id: 'talent', name: 'Talent', icon: Users, count: 0 },
  { id: 'equipment', name: 'Equipment', icon: Cpu, count: 0 },
  { id: 'companies', name: 'Companies', icon: Building, count: 0 }
];

const filters = {
  type: ['service', 'talent', 'equipment', 'company'],
  category: ['AI & Analytics', 'Cybersecurity', 'Cloud & DevOps', 'IoT & Edge', 'Quantum Computing', 'Blockchain'],
  location: ['Remote', 'On-site', 'Hybrid'],
  priceRange: ['$0-$100', '$100-$500', '$500-$1000', '$1000+'],
  rating: ['4.5+', '4.0+', '3.5+']
};

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    type: [] as string[],
    category: [] as string[],
    location: [] as string[],
    priceRange: [] as string[],
    rating: [] as string[]
  });

  useEffect(() => {
    if (query) {
      performSearch(query);
    }
  }, [query]);

  useEffect(() => {
    applyFilters();
  }, [activeFilters, results]);

  const performSearch = async (searchQuery: string) => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const filtered = mockSearchResults.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    
    setResults(filtered);
    setFilteredResults(filtered);
    setLoading(false);
  };

  const applyFilters = () => {
    let filtered = [...results];

    if (activeFilters.type.length > 0) {
      filtered = filtered.filter(item => activeFilters.type.includes(item.type));
    }

    if (activeFilters.category.length > 0) {
      filtered = filtered.filter(item => activeFilters.category.includes(item.category));
    }

    if (activeFilters.location.length > 0) {
      filtered = filtered.filter(item => activeFilters.location.includes(item.location || 'Remote'));
    }

    if (activeFilters.rating.length > 0) {
      filtered = filtered.filter(item => {
        if (!item.rating) return false;
        return activeFilters.rating.some(ratingFilter => {
          const minRating = parseFloat(ratingFilter.replace('+', ''));
          return item.rating! >= minRating;
        });
      });
    }

    setFilteredResults(filtered);
  };

  const toggleFilter = (filterType: keyof typeof activeFilters, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(v => v !== value)
        : [...prev[filterType], value]
    }));
  };

  const clearAllFilters = () => {
    setActiveFilters({
      type: [],
      category: [],
      location: [],
      priceRange: [],
      rating: []
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service': return Code;
      case 'talent': return Users;
      case 'equipment': return Cpu;
      case 'company': return Building;
      default: return Code;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Analytics': return Brain;
      case 'Cybersecurity': return Shield;
      case 'Cloud & DevOps': return Cloud;
      case 'IoT & Edge': return Zap;
      case 'Quantum Computing': return Rocket;
      case 'Blockchain': return Lock;
      default: return Code;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light pt-24">
      <div className="container-responsive">
        {/* Search Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">Search Results</h1>
          <p className="text-zion-slate-light text-lg">
            {query ? `Searching for "${query}"` : 'Enter your search query below'}
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div 
          className="max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search for services, talent, equipment, or companies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-xl border border-zion-cyan/30 rounded-2xl px-6 py-4 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-300 text-lg"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-3 rounded-xl hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>
        </motion.div>

        {/* Filters and Results */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <motion.div 
            className="lg:w-80"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-zion-cyan" />
                  Filters
                </h3>
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-zion-cyan hover:text-zion-cyan-light transition-colors"
                >
                  Clear All
                </button>
              </div>

              {/* Type Filter */}
              <div className="mb-6">
                <h4 className="text-white font-medium mb-3">Type</h4>
                <div className="space-y-2">
                  {filters.type.map(type => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeFilters.type.includes(type)}
                        onChange={() => toggleFilter('type', type)}
                        className="w-4 h-4 text-zion-cyan bg-white/10 border-zion-cyan/20 rounded focus:ring-zion-cyan focus:ring-2"
                      />
                      <span className="text-zion-slate-light capitalize">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="text-white font-medium mb-3">Category</h4>
                <div className="space-y-2">
                  {filters.category.map(category => (
                    <label key={category} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeFilters.category.includes(category)}
                        onChange={() => toggleFilter('category', category)}
                        className="w-4 h-4 text-zion-cyan bg-white/10 border-zion-cyan/20 rounded focus:ring-zion-cyan focus:ring-2"
                      />
                      <span className="text-zion-slate-light">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <h4 className="text-white font-medium mb-3">Location</h4>
                <div className="space-y-2">
                  {filters.location.map(location => (
                    <label key={location} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeFilters.location.includes(location)}
                        onChange={() => toggleFilter('location', location)}
                        className="w-4 h-4 text-zion-cyan bg-white/10 border-zion-cyan/20 rounded focus:ring-zion-cyan focus:ring-2"
                      />
                      <span className="text-zion-slate-light">{location}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h4 className="text-white font-medium mb-3">Minimum Rating</h4>
                <div className="space-y-2">
                  {filters.rating.map(rating => (
                    <label key={rating} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeFilters.rating.includes(rating)}
                        onChange={() => toggleFilter('rating', rating)}
                        className="w-4 h-4 text-zion-cyan bg-white/10 border-zion-cyan/20 rounded focus:ring-zion-cyan focus:ring-2"
                      />
                      <span className="text-zion-slate-light">{rating}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <div className="flex-1">
            {/* Results Header */}
            <motion.div 
              className="flex items-center justify-between mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-semibold text-white">
                  {loading ? 'Searching...' : `${filteredResults.length} results found`}
                </h3>
                {Object.values(activeFilters).some(filters => filters.length > 0) && (
                  <div className="flex gap-2">
                    {Object.entries(activeFilters).map(([key, values]) =>
                      values.map(value => (
                        <span
                          key={`${key}-${value}`}
                          className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full flex items-center gap-2"
                        >
                          {value}
                          <button
                            onClick={() => toggleFilter(key as keyof typeof activeFilters, value)}
                            className="hover:text-zion-cyan-light"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-zion-cyan/20 text-zion-cyan' 
                      : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-zion-cyan/20 text-zion-cyan' 
                      : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </motion.div>

            {/* Loading State */}
            {loading && (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="w-16 h-16 border-4 border-zion-cyan/20 border-t-zion-cyan rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-zion-slate-light">Searching...</p>
              </motion.div>
            )}

            {/* Results Grid/List */}
            {!loading && (
              <AnimatePresence mode="wait">
                {viewMode === 'grid' ? (
                  <motion.div
                    key="grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
                  >
                    {filteredResults.map((result, index) => (
                      <motion.div
                        key={result.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Link
                          to={result.path}
                          className="block bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/40 transition-all duration-300 group"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                              <result.type === 'service' ? getCategoryIcon(result.category) : getTypeIcon(result.type) className="h-6 w-6 text-white" />
                            </div>
                            {result.featured && (
                              <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                                Featured
                              </span>
                            )}
                          </div>

                          <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-zion-cyan transition-colors">
                            {result.title}
                          </h3>
                          <p className="text-zion-slate-light text-sm mb-4 line-clamp-3">
                            {result.description}
                          </p>

                          <div className="flex items-center justify-between mb-4">
                            <span className="text-zion-cyan text-sm font-medium">{result.category}</span>
                            {result.rating && (
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-white text-sm">{result.rating}</span>
                                <span className="text-zion-slate-light text-sm">({result.reviewCount})</span>
                              </div>
                            )}
                          </div>

                          <div className="flex items-center justify-between">
                            {result.price && (
                              <span className="text-white font-semibold">{result.price}</span>
                            )}
                            {result.location && (
                              <div className="flex items-center gap-1 text-zion-slate-light text-sm">
                                <MapPin className="w-4 h-4" />
                                {result.location}
                              </div>
                            )}
                          </div>

                          <div className="flex flex-wrap gap-2 mt-4">
                            {result.tags.slice(0, 3).map(tag => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="list"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    {filteredResults.map((result, index) => (
                      <motion.div
                        key={result.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Link
                          to={result.path}
                          className="block bg-white/5 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:bg-white/10 hover:border-zion-cyan/40 transition-all duration-300 group"
                        >
                          <div className="flex items-start gap-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center flex-shrink-0">
                              <result.type === 'service' ? getCategoryIcon(result.category) : getTypeIcon(result.type) className="h-8 w-8 text-white" />
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="text-white font-semibold text-xl group-hover:text-zion-cyan transition-colors">
                                  {result.title}
                                </h3>
                                {result.featured && (
                                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full ml-4">
                                    Featured
                                  </span>
                                )}
                              </div>

                              <p className="text-zion-slate-light mb-4">
                                {result.description}
                              </p>

                              <div className="flex items-center gap-6 mb-4">
                                <span className="text-zion-cyan font-medium">{result.category}</span>
                                {result.rating && (
                                  <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span className="text-white">{result.rating}</span>
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
                )}
              </AnimatePresence>
            )}

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
    </div>
  );
}