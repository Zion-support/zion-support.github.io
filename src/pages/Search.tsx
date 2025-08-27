import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon, Filter, X, ArrowRight, Clock, User } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'service' | 'page' | 'news' | 'case-study';
  url: string;
  tags: string[];
  author?: string;
  date?: string;
  excerpt: string;
}

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  // Mock search results - in a real app, this would come from an API
  const mockSearchResults: SearchResult[] = [
    {
      id: '1',
      title: 'AI-Powered Cybersecurity Solutions',
      description: 'Advanced cybersecurity solutions leveraging artificial intelligence for threat detection and prevention.',
      type: 'service',
      url: '/services/cybersecurity',
      tags: ['AI', 'Cybersecurity', 'Machine Learning', 'Security'],
      excerpt: 'Our AI-powered cybersecurity platform provides real-time threat detection and automated response capabilities...'
    },
    {
      id: '2',
      title: 'Cloud Infrastructure & DevOps Services',
      description: 'Comprehensive cloud infrastructure and DevOps automation services.',
      type: 'service',
      url: '/services/cloud-devops',
      tags: ['Cloud', 'DevOps', 'AWS', 'Azure', 'Kubernetes'],
      excerpt: 'Transform your development workflow with our cloud infrastructure and DevOps automation services...'
    },
    {
      id: '3',
      title: 'Digital Transformation Consulting',
      description: 'Strategic consulting services to help organizations navigate digital transformation.',
      type: 'service',
      url: '/services/digital-transformation',
      tags: ['Consulting', 'Digital Transformation', 'Strategy', 'Innovation'],
      excerpt: 'Navigate your digital transformation journey with expert guidance and proven methodologies...'
    },
    {
      id: '4',
      title: 'About Zion Tech Group',
      description: 'Learn about our company, mission, and the team behind Zion Tech Group.',
      type: 'page',
      url: '/about',
      tags: ['Company', 'About', 'Team', 'Mission'],
      excerpt: 'Zion Tech Group is a leading technology company specializing in innovative solutions...'
    },
    {
      id: '5',
      title: 'Contact Us',
      description: 'Get in touch with our team for inquiries, support, or consultations.',
      type: 'page',
      url: '/contact',
      tags: ['Contact', 'Support', 'Inquiry', 'Consultation'],
      excerpt: 'Ready to start your project? Contact our team for a free consultation...'
    },
    {
      id: '6',
      title: 'AI & Machine Learning Summit 2024',
      description: 'Join industry leaders for insights into the latest AI and ML technologies.',
      type: 'news',
      url: '/news/ai-summit-2024',
      tags: ['AI', 'Machine Learning', 'Event', 'Summit'],
      author: 'Sarah Johnson',
      date: '2024-01-15',
      excerpt: 'Join us for an exclusive summit featuring industry leaders and cutting-edge AI technologies...'
    },
    {
      id: '7',
      title: 'Healthcare AI Implementation Case Study',
      description: 'How we helped a major hospital implement AI-powered diagnostic tools.',
      type: 'case-study',
      url: '/case-studies/healthcare-ai',
      tags: ['Healthcare', 'AI', 'Case Study', 'Implementation'],
      excerpt: 'Discover how we transformed patient care through innovative AI implementation...'
    }
  ];

  useEffect(() => {
    if (query.trim()) {
      performSearch();
    } else {
      setResults([]);
    }
  }, [query, selectedType]);

  const performSearch = () => {
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      let filteredResults = mockSearchResults.filter(result => {
        const matchesQuery = result.title.toLowerCase().includes(query.toLowerCase()) ||
                           result.description.toLowerCase().includes(query.toLowerCase()) ||
                           result.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
        
        const matchesType = selectedType === 'all' || result.type === selectedType;
        
        return matchesQuery && matchesType;
      });
      
      setResults(filteredResults);
      setIsLoading(false);
    }, 500);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
    }
  };

  const clearFilters = () => {
    setSelectedType('all');
    setShowFilters(false);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service':
        return '🔧';
      case 'page':
        return '📄';
      case 'news':
        return '📰';
      case 'case-study':
        return '📊';
      default:
        return '📄';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'service':
        return 'Service';
      case 'page':
        return 'Page';
      case 'news':
        return 'News';
      case 'case-study':
        return 'Case Study';
      default:
        return 'Page';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'service':
        return 'bg-blue-100 text-blue-800';
      case 'page':
        return 'bg-gray-100 text-gray-800';
      case 'news':
        return 'bg-green-100 text-green-800';
      case 'case-study':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Search Results
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
            Find the information you need across our comprehensive website
          </p>
        </div>
      </section>

      {/* Search Form */}
      <section className="py-12 bg-zion-slate-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for services, pages, news, or case studies..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-zion-slate-light rounded-lg text-zion-slate-dark placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-zion-cyan text-white px-6 py-2 rounded-md hover:bg-zion-cyan/90 transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          {/* Filters */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-zion-slate-light rounded-lg text-zion-slate-dark hover:border-zion-cyan transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
            
            {selectedType !== 'all' && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm hover:bg-red-200 transition-colors"
              >
                <X className="w-3 h-3" />
                Clear Filters
              </button>
            )}
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-4 p-4 bg-white rounded-lg border border-zion-slate-light">
              <div className="flex flex-wrap gap-4">
                <div>
                  <label className="block text-sm font-medium text-zion-slate-dark mb-2">Content Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-3 py-2 border border-zion-slate-light rounded-lg text-zion-slate-dark focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                  >
                    <option value="all">All Types</option>
                    <option value="service">Services</option>
                    <option value="page">Pages</option>
                    <option value="news">News</option>
                    <option value="case-study">Case Studies</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Search Results */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {query && (
            <div className="mb-8">
              <p className="text-zion-slate-light">
                {isLoading ? 'Searching...' : `Found ${results.length} results for "${query}"`}
              </p>
            </div>
          )}

          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-cyan mx-auto"></div>
              <p className="mt-4 text-zion-slate-light">Searching...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-6">
              {results.map((result) => (
                <div key={result.id} className="bg-white border border-zion-slate-light rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{getTypeIcon(result.type)}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(result.type)}`}>
                          {getTypeLabel(result.type)}
                        </span>
                        {result.date && (
                          <div className="flex items-center gap-1 text-zion-slate-light text-sm">
                            <Clock className="w-3 h-3" />
                            {new Date(result.date).toLocaleDateString()}
                          </div>
                        )}
                        {result.author && (
                          <div className="flex items-center gap-1 text-zion-slate-light text-sm">
                            <User className="w-3 h-3" />
                            {result.author}
                          </div>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-zion-slate-dark mb-2">
                        <a 
                          href={result.url} 
                          className="hover:text-zion-cyan transition-colors"
                        >
                          {result.title}
                        </a>
                      </h3>
                      
                      <p className="text-zion-slate-light mb-3">
                        {result.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {result.tags.slice(0, 3).map((tag, index) => (
                            <span 
                              key={index} 
                              className="px-2 py-1 bg-zion-slate-light/20 text-zion-slate-light text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <a 
                          href={result.url}
                          className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan/80 font-medium transition-colors"
                        >
                          View Details
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : query ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">No results found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search terms or filters
              </p>
              <button
                onClick={() => {
                  setQuery('');
                  clearFilters();
                }}
                className="px-6 py-3 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/90 transition-colors"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-zion-slate-dark mb-2">Start your search</h3>
              <p className="text-zion-slate-light">
                Enter a search term above to find what you're looking for
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Search Tips */}
      <section className="py-12 bg-zion-slate-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 text-center">
            Search Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-zion-slate-light">
              <h3 className="font-semibold text-zion-slate-dark mb-3">Use Specific Terms</h3>
              <p className="text-zion-slate-light text-sm">
                Instead of "AI", try "machine learning" or "artificial intelligence" for more specific results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-zion-slate-light">
              <h3 className="font-semibold text-zion-slate-dark mb-3">Filter by Type</h3>
              <p className="text-zion-slate-light text-sm">
                Use the filters to narrow down results by content type (services, news, case studies).
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-zion-slate-light">
              <h3 className="font-semibold text-zion-slate-dark mb-3">Check Tags</h3>
              <p className="text-zion-slate-light text-sm">
                Look at the tags on results to find related content and refine your search.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-zion-slate-light">
              <h3 className="font-semibold text-zion-slate-dark mb-3">Browse Categories</h3>
              <p className="text-zion-slate-light text-sm">
                If you're not sure what to search for, browse our main navigation categories.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}