import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Filter, 
  Clock, 
  User, 
  Tag, 
  ArrowRight,
  Star,
  Eye,
  BookOpen,
  Server,
  Wrench,
  Code,
  Database,
  Shield,
  Cloud
} from 'lucide-react';

interface SearchResult {
  id: string;
  type: 'page' | 'service' | 'talent' | 'equipment' | 'blog';
  title: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  rating?: number;
  reviews?: number;
  views?: number;
  author?: string;
  date?: string;
  price?: string;
  location?: string;
  skills?: string[];
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    category: 'all',
    type: 'all',
    priceRange: 'all',
    location: 'all',
    rating: 'all'
  });

  // Mock search results
  const mockResults: SearchResult[] = [
    {
      id: '1',
      type: 'service',
      title: 'AI-Powered Cybersecurity Solutions',
      description: 'Advanced cybersecurity services using artificial intelligence to detect and prevent threats in real-time.',
      url: '/services/ai-cybersecurity',
      category: 'Cybersecurity',
      tags: ['AI', 'Cybersecurity', 'Machine Learning', 'Threat Detection'],
      rating: 4.8,
      reviews: 156,
      price: '$2,500/month',
      location: 'Remote'
    },
    {
      id: '2',
      type: 'talent',
      title: 'Senior AI Engineer - Sarah Chen',
      description: 'Experienced AI engineer specializing in machine learning, deep learning, and natural language processing.',
      url: '/talent/sarah-chen',
      category: 'AI Engineering',
      tags: ['AI', 'Machine Learning', 'Python', 'TensorFlow', 'NLP'],
      rating: 4.9,
      reviews: 89,
      location: 'San Francisco, CA',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision']
    },
    {
      id: '3',
      type: 'equipment',
      title: 'High-Performance GPU Server Cluster',
      description: 'Enterprise-grade GPU server cluster optimized for AI training and machine learning workloads.',
      url: '/equipment/gpu-server-cluster',
      category: 'Hardware',
      tags: ['GPU', 'Server', 'AI Training', 'Machine Learning', 'High Performance'],
      price: '$15,000',
      location: 'Multiple Locations'
    },
    {
      id: '4',
      type: 'blog',
      title: 'The Future of Quantum Computing in AI',
      description: 'Exploring how quantum computing will revolutionize artificial intelligence and machine learning.',
      url: '/blog/quantum-computing-ai-future',
      category: 'Technology',
      tags: ['Quantum Computing', 'AI', 'Machine Learning', 'Future Tech'],
      author: 'Dr. James Kim',
      date: '2025-01-15',
      views: 3247
    },
    {
      id: '5',
      type: 'service',
      title: 'Cloud Infrastructure Optimization',
      description: 'Professional cloud infrastructure optimization services for improved performance and cost efficiency.',
      url: '/services/cloud-optimization',
      category: 'Cloud Services',
      tags: ['Cloud', 'AWS', 'Azure', 'GCP', 'Optimization'],
      rating: 4.7,
      reviews: 203,
      price: '$1,800/month',
      location: 'Remote'
    },
    {
      id: '6',
      type: 'talent',
      title: 'DevOps Specialist - Michael Rodriguez',
      description: 'Senior DevOps engineer with expertise in CI/CD, Kubernetes, and cloud-native architectures.',
      url: '/talent/michael-rodriguez',
      category: 'DevOps',
      tags: ['DevOps', 'Kubernetes', 'Docker', 'CI/CD', 'AWS'],
      rating: 4.8,
      reviews: 134,
      location: 'Austin, TX',
      skills: ['Kubernetes', 'Docker', 'Jenkins', 'AWS', 'Terraform']
    }
  ];

  useEffect(() => {
    if (searchQuery.trim()) {
      performSearch();
    } else {
      setResults([]);
    }
  }, [searchQuery, filters]);

  const performSearch = async () => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Filter results based on search query and filters
    let filteredResults = mockResults.filter(result => {
      const matchesQuery = 
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = filters.category === 'all' || result.category === filters.category;
      const matchesType = filters.type === 'all' || result.type === filters.type;
      
      return matchesQuery && matchesCategory && matchesType;
    });
    
    setResults(filteredResults);
    setIsLoading(false);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service': return <Wrench className="w-5 h-5" />;
      case 'talent': return <User className="w-5 h-5" />;
      case 'equipment': return <Server className="w-5 h-5" />;
      case 'blog': return <BookOpen className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'service': return 'bg-zion-purple/20 text-zion-purple border-zion-purple/40';
      case 'talent': return 'bg-zion-cyan/20 text-zion-cyan border-zion-cyan/40';
      case 'equipment': return 'bg-zion-green/20 text-zion-green border-zion-green/40';
      case 'blog': return 'bg-zion-blue/20 text-zion-blue border-zion-blue/40';
      default: return 'bg-zion-slate/20 text-zion-slate-light border-zion-slate/40';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'service': return 'Service';
      case 'talent': return 'Talent';
      case 'equipment': return 'Equipment';
      case 'blog': return 'Article';
      default: return 'Page';
    }
  };

  const categories = [
    { id: 'all', name: 'All Categories', count: results.length },
    { id: 'AI', name: 'AI & Machine Learning', count: results.filter(r => r.category === 'AI Engineering' || r.tags.includes('AI')).length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: results.filter(r => r.category === 'Cybersecurity').length },
    { id: 'Cloud Services', name: 'Cloud Services', count: results.filter(r => r.category === 'Cloud Services').length },
    { id: 'DevOps', name: 'DevOps', count: results.filter(r => r.category === 'DevOps').length },
    { id: 'Hardware', name: 'Hardware', count: results.filter(r => r.category === 'Hardware').length },
    { id: 'Technology', name: 'Technology', count: results.filter(r => r.category === 'Technology').length }
  ];

  return (
    <>
      <SEO
        title="Search | Zion AI Marketplace"
        description="Search across our comprehensive marketplace for AI services, talent, equipment, and insights."
        keywords="search, AI marketplace, services, talent, equipment, blog"
        canonical="https://ziontechgroup.com/search"
      />
      
      <div className="min-h-screen bg-zion-blue pt-12 pb-20 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Search Zion Marketplace
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Find AI services, talent, equipment, and insights across our comprehensive platform
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-6 h-6" />
              <Input
                type="text"
                placeholder="Search for services, talent, equipment, articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-zion-slate-light"
              />
              <Button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-zion-purple hover:bg-zion-purple-dark"
                size="sm"
                onClick={performSearch}
              >
                Search
              </Button>
            </div>
          </div>

          {/* Filters and Results */}
          {searchQuery && (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Left Sidebar - Filters */}
              <div className="lg:col-span-1">
                <Card className="bg-zion-blue-dark border-zion-purple/20">
                  <CardHeader>
                    <CardTitle className="text-white">Filters</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Type Filter */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Content Type</h4>
                      <div className="space-y-2">
                        {['all', 'service', 'talent', 'equipment', 'blog'].map((type) => (
                          <label key={type} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="type"
                              value={type}
                              checked={filters.type === type}
                              onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
                              className="text-zion-purple"
                            />
                            <span className="text-zion-slate-light capitalize">
                              {type === 'all' ? 'All Types' : getTypeLabel(type)}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Category Filter */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Category</h4>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <label key={category.id} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="category"
                              value={category.id}
                              checked={filters.category === category.id}
                              onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                              className="text-zion-purple"
                            />
                            <span className="text-zion-slate-light">
                              {category.name} ({category.count})
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Price Range Filter */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Price Range</h4>
                      <div className="space-y-2">
                        {['all', 'free', 'under-100', '100-500', '500-1000', 'over-1000'].map((range) => (
                          <label key={range} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="priceRange"
                              value={range}
                              checked={filters.priceRange === range}
                              onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
                              className="text-zion-purple"
                            />
                            <span className="text-zion-slate-light">
                              {range === 'all' ? 'All Prices' : 
                               range === 'free' ? 'Free' :
                               range === 'under-100' ? 'Under $100' :
                               range === '100-500' ? '$100 - $500' :
                               range === '500-1000' ? '$500 - $1,000' : 'Over $1,000'}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Side - Results */}
              <div className="lg:col-span-3">
                {/* Results Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-zion-slate-light">
                    {isLoading ? 'Searching...' : `${results.length} results found`}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-zion-slate-light text-sm">Sort by:</span>
                    <select className="bg-zion-blue-dark border border-zion-blue-light text-white rounded px-3 py-1 text-sm">
                      <option value="relevance">Relevance</option>
                      <option value="newest">Newest</option>
                      <option value="rating">Highest Rated</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                    </select>
                  </div>
                </div>

                {/* Results List */}
                <div className="space-y-4">
                  {isLoading ? (
                    <div className="text-center py-16">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-purple mx-auto mb-4"></div>
                      <p className="text-zion-slate-light">Searching...</p>
                    </div>
                  ) : results.length > 0 ? (
                    results.map((result) => (
                      <Card key={result.id} className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            {/* Type Icon */}
                            <div className={`p-3 rounded-lg ${getTypeColor(result.type)}`}>
                              {getTypeIcon(result.type)}
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-2">
                                    <Badge variant="outline" className={getTypeColor(result.type)}>
                                      {getTypeLabel(result.type)}
                                    </Badge>
                                    <Badge variant="secondary" className="bg-zion-blue-light/20 text-zion-cyan">
                                      {result.category}
                                    </Badge>
                                  </div>
                                  
                                  <h3 className="text-xl font-bold text-white mb-2 hover:text-zion-cyan transition-colors">
                                    <Link to={result.url}>{result.title}</Link>
                                  </h3>
                                  
                                  <p className="text-zion-slate-light mb-3 line-clamp-2">
                                    {result.description}
                                  </p>
                                  
                                  {/* Tags */}
                                  <div className="flex flex-wrap gap-2 mb-3">
                                    {result.tags.slice(0, 4).map((tag) => (
                                      <Badge key={tag} variant="outline" size="sm" className="border-zion-blue-light text-zion-slate-light">
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                
                                {/* Right Side Info */}
                                <div className="text-right ml-4">
                                  {result.price && (
                                    <div className="text-2xl font-bold text-zion-cyan mb-2">
                                      {result.price}
                                    </div>
                                  )}
                                  
                                  {result.rating && (
                                    <div className="flex items-center justify-end gap-1 mb-1">
                                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                      <span className="text-white text-sm">{result.rating}</span>
                                      <span className="text-zion-slate-light text-sm">({result.reviews})</span>
                                    </div>
                                  )}
                                  
                                  {result.location && (
                                    <div className="text-zion-slate-light text-sm">
                                      📍 {result.location}
                                    </div>
                                  )}
                                  
                                  {result.views && (
                                    <div className="text-zion-slate-light text-sm flex items-center gap-1 justify-end">
                                      <Eye className="w-4 h-4" />
                                      {result.views}
                                    </div>
                                  )}
                                </div>
                              </div>
                              
                              {/* Additional Info */}
                              <div className="flex items-center justify-between pt-4 border-t border-zion-blue-light/20">
                                <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                                  {result.author && (
                                    <span className="flex items-center gap-1">
                                      <User className="w-4 h-4" />
                                      {result.author}
                                    </span>
                                  )}
                                  {result.date && (
                                    <span className="flex items-center gap-1">
                                      <Clock className="w-4 h-4" />
                                      {result.date}
                                    </span>
                                  )}
                                  {result.skills && (
                                    <span className="flex items-center gap-1">
                                      <Code className="w-4 h-4" />
                                      {result.skills.slice(0, 3).join(', ')}
                                    </span>
                                  )}
                                </div>
                                
                                <Button variant="outline" size="sm" className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white" asChild>
                                  <Link to={result.url}>
                                    View Details
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <div className="text-center py-16">
                      <Search className="w-16 h-16 text-zion-slate-light mx-auto mb-4 opacity-50" />
                      <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                      <p className="text-zion-slate-light mb-6">
                        Try adjusting your search terms or filters to find what you're looking for.
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setSearchQuery('');
                          setFilters({
                            category: 'all',
                            type: 'all',
                            priceRange: 'all',
                            location: 'all',
                            rating: 'all'
                          });
                        }}
                        className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
                      >
                        Clear Search
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Search Suggestions */}
          {!searchQuery && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-white mb-6">Popular Searches</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['AI Services', 'Machine Learning', 'Cybersecurity', 'Cloud Computing', 'Data Science', 'DevOps', 'Quantum Computing', 'Blockchain'].map((term) => (
                  <Button
                    key={term}
                    variant="outline"
                    size="sm"
                    onClick={() => setSearchQuery(term)}
                    className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
                  >
                    {term}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}