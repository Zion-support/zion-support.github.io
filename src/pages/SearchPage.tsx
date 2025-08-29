import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  X, 
  ArrowRight, 
  Clock, 
  TrendingUp, 
  Star, 
  FileText,
  Users,
  Shield,
  Cloud,
  Database,
  Brain,
  Server,
  Rocket,
  Zap,
  Target,
  Globe,
  Lightbulb,
  Code,
  Palette,
  MessageSquare,
  BarChart3,
  Monitor,
  Smartphone,
  Laptop,
  CheckCircle,
  ExternalLink,
  BookOpen,
  HelpCircle,
  Settings,
  Building,
  Heart,
  Sparkles,
  Infinity,
  Layers,
  GitBranch,
  Workflow,
  Command,
  Terminal,
  Wifi,
  Bluetooth,
  Satellite,
  Radio,
  Signal,
  DollarSign,
  Factory,
  ShoppingCart,
  Truck,
  Robot
} from 'lucide-react';

// Mock search results data
const searchResults = [
  {
    id: 1,
    title: 'AI Services Overview',
    description: 'Comprehensive artificial intelligence services including machine learning, automation, and custom AI solutions.',
    category: 'Services',
    type: 'Service Page',
    url: '/ai-services',
    icon: Brain,
    color: 'from-purple-400 to-pink-500',
    tags: ['AI', 'Machine Learning', 'Automation', 'Analytics'],
    relevance: 95
  },
  {
    id: 2,
    title: 'IT Infrastructure Management',
    description: 'Enterprise-grade IT infrastructure services including server management, network administration, and cloud solutions.',
    category: 'Services',
    type: 'Service Page',
    url: '/it-services',
    icon: Server,
    color: 'from-blue-400 to-cyan-500',
    tags: ['IT', 'Infrastructure', 'Cloud', 'Networking'],
    relevance: 92
  },
  {
    id: 3,
    title: 'MicroSaaS Development',
    description: 'Build scalable SaaS platforms with our expert development team. From concept to launch, we deliver enterprise-grade solutions.',
    category: 'Services',
    type: 'Service Page',
    url: '/micro-saas',
    icon: Rocket,
    color: 'from-emerald-400 to-teal-500',
    tags: ['SaaS', 'Development', 'Platform', 'Custom Software'],
    relevance: 90
  },
  {
    id: 4,
    title: 'Cloud & DevOps Solutions',
    description: 'Comprehensive cloud migration, infrastructure automation, and DevOps practices for modern businesses.',
    category: 'Services',
    type: 'Service Page',
    url: '/services/cloud-devops',
    icon: Cloud,
    color: 'from-indigo-400 to-purple-500',
    tags: ['Cloud', 'DevOps', 'Automation', 'Infrastructure'],
    relevance: 88
  },
  {
    id: 5,
    title: 'Cybersecurity Services',
    description: 'Advanced security solutions including threat detection, compliance audits, and incident response.',
    category: 'Services',
    type: 'Service Page',
    url: '/services/ai-cybersecurity-suite',
    icon: Shield,
    color: 'from-red-400 to-pink-500',
    tags: ['Security', 'Cybersecurity', 'Compliance', 'Threat Detection'],
    relevance: 85
  },
  {
    id: 6,
    title: 'Data Analytics & BI',
    description: 'Transform raw data into actionable insights with our advanced analytics and business intelligence solutions.',
    category: 'Services',
    type: 'Service Page',
    url: '/services/data-analytics',
    icon: BarChart3,
    color: 'from-green-400 to-emerald-500',
    tags: ['Analytics', 'Business Intelligence', 'Data', 'Reporting'],
    relevance: 83
  },
  {
    id: 7,
    title: 'Digital Transformation',
    description: 'Strategic guidance and implementation for digital transformation initiatives across industries.',
    category: 'Services',
    type: 'Service Page',
    url: '/services/digital-transformation',
    icon: Zap,
    color: 'from-yellow-400 to-orange-500',
    tags: ['Digital Transformation', 'Strategy', 'Innovation', 'Technology'],
    relevance: 80
  },
  {
    id: 8,
    title: 'About Zion Tech Group',
    description: 'Learn about our mission, values, and the team behind Zion Tech Group\'s innovative technology solutions.',
    category: 'Company',
    type: 'Page',
    url: '/about',
    icon: Building,
    color: 'from-slate-400 to-gray-500',
    tags: ['About', 'Company', 'Team', 'Mission'],
    relevance: 75
  },
  {
    id: 9,
    title: 'Contact Us',
    description: 'Get in touch with our team for consultations, quotes, and support. We\'re here to help with your technology needs.',
    category: 'Contact',
    type: 'Page',
    url: '/contact',
    icon: MessageSquare,
    color: 'from-blue-400 to-indigo-500',
    tags: ['Contact', 'Support', 'Consultation', 'Quote'],
    relevance: 70
  },
  {
    id: 10,
    title: 'Blog - Latest Insights',
    description: 'Stay updated with the latest technology trends, industry insights, and company news from Zion Tech Group.',
    category: 'Resources',
    type: 'Page',
    url: '/blog',
    icon: FileText,
    color: 'from-purple-400 to-pink-500',
    tags: ['Blog', 'Insights', 'News', 'Technology Trends'],
    relevance: 65
  }
];

const categories = [
  { name: 'All', value: 'all', icon: Search, color: 'from-slate-400 to-gray-500' },
  { name: 'Services', value: 'services', icon: Settings, color: 'from-blue-400 to-cyan-500' },
  { name: 'Company', value: 'company', icon: Building, color: 'from-purple-400 to-pink-500' },
  { name: 'Resources', value: 'resources', icon: BookOpen, color: 'from-green-400 to-emerald-500' },
  { name: 'Support', value: 'support', icon: HelpCircle, color: 'from-orange-400 to-red-500' }
];

const popularSearches = [
  'AI services',
  'Cloud migration',
  'Cybersecurity',
  'Data analytics',
  'IT consulting',
  'Digital transformation',
  'SaaS development',
  'DevOps services'
];

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState(searchResults);

  // Filter results based on search query and category
  useEffect(() => {
    if (!query.trim()) {
      setResults(searchResults);
      return;
    }

    setIsSearching(true);
    
    // Simulate search delay
    const timer = setTimeout(() => {
      const filtered = searchResults.filter(result => {
        const matchesQuery = result.title.toLowerCase().includes(query.toLowerCase()) ||
                           result.description.toLowerCase().includes(query.toLowerCase()) ||
                           result.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
        
        const matchesCategory = selectedCategory === 'all' || 
                               result.category.toLowerCase() === selectedCategory.toLowerCase();
        
        return matchesQuery && matchesCategory;
      });

      // Sort by relevance
      const sorted = filtered.sort((a, b) => b.relevance - a.relevance);
      setResults(sorted);
      setIsSearching(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [query, selectedCategory]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePopularSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    setSearchParams({ q: searchTerm });
  };

  const clearSearch = () => {
    setQuery('');
    setSelectedCategory('all');
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title={`Search Results${query ? ` for "${query}"` : ''} - Zion Tech Group`}
        description="Search through Zion Tech Group's services, resources, and company information."
      />
      
      {/* Search Header */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Search Zion Tech Group
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Find the information, services, and resources you need
            </p>
            
            {/* Search Form */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for services, resources, or information..."
                  className="w-full pl-12 pr-20 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Popular Searches */}
            {!query && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8"
              >
                <p className="text-slate-400 mb-4">Popular searches:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handlePopularSearch(search)}
                      className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 text-sm"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Search Results */}
      {query && (
        <section className="px-4 mb-20">
          <div className="container mx-auto max-w-6xl">
            {/* Results Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Search Results for "{query}"
                </h2>
                <p className="text-slate-400">
                  {isSearching ? 'Searching...' : `${results.length} result${results.length !== 1 ? 's' : ''} found`}
                </p>
              </div>
              
              <button
                onClick={clearSearch}
                className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-300 mt-4 sm:mt-0"
              >
                <X className="w-4 h-4" />
                <span>Clear Search</span>
              </button>
            </motion.div>

            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => handleCategoryChange(category.value)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-transparent shadow-lg shadow-cyan-400/25'
                      : 'bg-slate-800/50 text-slate-300 border-slate-600/50 hover:border-cyan-400/50 hover:text-white'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </motion.div>

            {/* Results List */}
            {isSearching ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-slate-400">Searching...</p>
              </motion.div>
            ) : results.length > 0 ? (
              <div className="space-y-6">
                {results.map((result, index) => (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${result.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <result.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-semibold text-white hover:text-cyan-400 transition-colors duration-300">
                            <Link to={result.url}>{result.title}</Link>
                          </h3>
                          <div className="flex items-center space-x-2">
                            <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                              {result.type}
                            </span>
                            <span className="px-2 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded">
                              {result.relevance}% match
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-slate-300 mb-3">{result.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {result.tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="px-2 py-1 bg-slate-700/30 text-slate-400 text-xs rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <Link
                            to={result.url}
                            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                          >
                            <span className="text-sm font-medium">View</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                <p className="text-slate-400 mb-6">
                  Try adjusting your search terms or browse our categories below
                </p>
                
                <div className="flex flex-wrap justify-center gap-3">
                  {categories.slice(1).map((category) => (
                    <button
                      key={category.value}
                      onClick={() => handleCategoryChange(category.value)}
                      className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
                    >
                      Browse {category.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Browse Categories */}
      {!query && (
        <section className="px-4 mb-20">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Browse by Category
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Explore our services, resources, and company information
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.slice(1).map((category, index) => (
                <motion.div
                  key={category.value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer"
                  onClick={() => handleCategoryChange(category.value)}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                  
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    <span className="text-sm font-medium">Browse {category.name}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}