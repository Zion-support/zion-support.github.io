import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Filter, Clock, Star, MapPin, DollarSign  } from 'lucide-react';

interface SearchResult  {id: string;
  type: 'service' | 'talent' | 'equipment' | 'page';
  title: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  rating?: number;
  price?: string;}
  location?: string;}
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;}
}
}

const SearchModal: React.FC<SearchModalProps /> = ({ isOpen, onClose    }) => {


const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[] />([])const [isLoading, setIsLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [recentSearches, setRecentSearches] = useState<string[] />([])const searchInputRef = useRef<HTMLInputElement />(null;
  const mockSearchResults: SearchResult[] = [;
    {id: '1',
  type: 'service',title: 'AI-Powered IT Solutions',
  description: 'Comprehensive AI-driven IT infrastructure and consulting services',url: '/services/ai-it-solutions'}
  category: 'IT Services',tags: ['AI', 'IT', 'Infrastructure', 'Consulting'],rating: 4.8,price: 'Starting at $5,000';}
    },{id: '2',
  type: 'talent',title: 'Senior AI Engineer',
  description: 'Experienced AI engineer with 8+ years in machine learning and deep learning',url: '/talent/ai-engineer-001'}
  category: 'Engineering',tags: ['AI', 'Machine Learning', 'Python', 'TensorFlow'],rating: 4.9,location: 'San Francisco, CA';}
    },{id: '3',
  type: 'equipment',title: 'High-Performance GPU Server',
  description: 'Enterprise-grade GPU server for AI/ML workloads',url: '/equipment/gpu-server-001'}
  category: 'Hardware',tags: ['GPU', 'Server', 'AI', 'ML'],price: '$15,000';}
    },{id: '4',
  type: 'page',title: 'Cybersecurity Services',
  description: 'Comprehensive cybersecurity solutions for enterprise protection',url: '/services/cybersecurity'}
  category: 'Security',tags: ['Security', 'Cybersecurity', 'Enterprise', 'Protection'];}
    }
  ];useEffect(() => {}
if (isOpen && searchInputRef.current) {searchInputRef.current.focus()}
  }, [isOpen])useEffect(() => {}
if (query.trim()) {performSearch()} else {setResults([])}
  }, [query, activeFilter])const performSearch = async () => {setIsLoading(true)// Simulate API call;
    setTimeout(() => {const filteredResults = mockSearchResults.filter(result => ;
  const matchesQuery = result.title.toLowerCase().includes(query.toLowerCase()) ||;
                           result.description.toLowerCase().includes(query.toLowerCase()) ||;
                           result.tags.some(tag = > tag.toLowerCase().includes(query.toLowerCase());}
  const matchesFilter  = activeFilter === 'all' || result.type === activeFilter;return matchesQuery && matchesFilter;}
      })setResults(filteredResults)setIsLoading(false)}, 500)}

const handleSearch = (setQuery(searchQuery)if (searchQuery.trim() && !recentSearches.includes(searchQuery)) {setRecentSearches(prev => [searchQuery, ...prev.slice(0, 4)])) => {
  return $3;}
}
  }
;
  const handleResultClick = (onClose()// Navigate to result URL;
    window.location.href = url;) => {
  return $3;}
}
  }

const getTypeIcon = (switch (type) {case 'service':;
        return <Search className='w-4 h-4' />;
      case 'talent':;'
        return <MapPin className='w-4 h-4' />;
      case 'equipment':;'
        return <DollarSign className='w-4 h-4' />;
      case 'page':;'
        return <Search className='w-4 h-4' />;
      default:;'
        return <Search className='w-4 h-4' />;) => {
  return $3;}
}
    }
  }

const getTypeColor = (switch (type) {case 'service':;
        return 'bg-blue-100 text-blue-800';
      case 'talent':;
        return 'bg-green-100 text-green-800';
      case 'equipment':;
        return 'bg-purple-100 text-purple-800';
      case 'page':;
        return 'bg-gray-100 text-gray-800';
      default:;
        return 'bg-gray-100 text-gray-800';) => {
  return $3;}
}
    }'
  }if (!isOpen) return null;return (<div className='fixed inset-0 z-50 overflow-y-auto' />;'
      <div className='flex items-start justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0' />;'
        <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' onClick={onClose} /></div>;'
        <div className='inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full' />;'
          <div className='bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4' />;'
            <div className='flex items-center justify-between mb-4' />;'
              <h3 className='text-lg font-medium text-gray-900 dark:text-white' />;
                Search;
              </h3>;
              <button;
                onClick={onClose}'
                className='text-gray-400 hover:text-gray-600 dark:hover:text-gray-300' />
'
                <X className='w-6 h-6' />;
              </button>;
            </div>;'
            <div className='relative' />;'
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none' />;'
                <Search className='h-5 w-5 text-gray-400' />;
              </div>;
              <input;
                ref={searchInputRef}'
                type='text';'
                className='block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500';'
                placeholder='Search services, talent, equipment...';
                value={query}
                onChange={(e) = /> handleSearch(e.target.value)}
              />;
            </div>;
            {/* Filter buttons */}'
            <div className='flex space-x-2 mt-4' />;
              {['all', 'service', 'talent', 'equipment', 'page'].map((filter) => (<button;}
                  key={filter}
                  onClick={() = /> setActiveFilter(filter)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${activeFilter === filter;
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';}
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600';}
                  }`}>

                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>;
              ))}
            </div>;
            {/* Search results */}'
            <div className='mt-4 max-h-96 overflow-y-auto' />;'
              {isLoading ? (<div className='flex items-center justify-center py-8' />;'
                  <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600' /></div>;
                </div>;'
              ) : results.length > 0 ? (<div className='space-y-2' />;}
                  {results.map((result) => (<div;}
                      key={result.id}
                      onClick={() = /> handleResultClick(result.url)}'
                      className='p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors'>
'
                      <div className='flex items-start space-x-3' />;
                        <div className={`p-2 rounded-lg ${getTypeColor(result.type)}`} />

                          {getTypeIcon(result.type)}
                        </div>;'
                        <div className='flex-1 min-w-0' />;'
                          <div className='flex items-center space-x-2' />;'
                            <h4 className='text-sm font-medium text-gray-900 dark:text-white truncate' />;
                              {result.title}
                            </h4>;
                            <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(result.type)}`} />

                              {result.type}
                            </span>;
                          </div>;'
                          <p className='text-sm text-gray-500 dark:text-gray-400 mt-1' />;
                            {result.description}
                          </p>;'
                          <div className='flex items-center space-x-4 mt-2' />;'
                            {result.rating && (<div className='flex items-center space-x-1' />;'
                                <Star className='w-4 h-4 text-yellow-400 fill-current' />;}'
                                <span className='text-sm text-gray-500 dark:text-gray-400' />;}
                                  {result.rating}
                                </span>;
                              </div>;
                            )}'
                            {result.price && (<span className='text-sm text-gray-500 dark:text-gray-400' />;}
                                {result.price}
                              </span>;
                            )}'
                            {result.location && (<div className='flex items-center space-x-1' />;'
                                <MapPin className='w-4 h-4 text-gray-400' />;}'
                                <span className='text-sm text-gray-500 dark:text-gray-400' />;}
                                  {result.location}
                                </span>;
                              </div>;
                            )}
                          </div>;
                        </div>;
                      </div>;
                    </div>;
                  ))}
                </div>;'
              ) : query.trim() ? (<div className='text-center py-8' />;'
                  <Search className='w-12 h-12 text-gray-400 mx-auto mb-4' />;'
                  <p className='text-gray-500 dark: text-gray-400' />No results found for '{quer}'
}'</p>;
                </div>;
              ) : recentSearches.length > 0 ? (<div />;'
                  <h4 className='text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center' />;'
                    <Clock className='w-4 h-4 mr-2' />;
                    Recent Searches;
                  </h4>;'
                  <div className='space-y-1' />;
                    {recentSearches.map((search, index) => (<button;}
                        key={index}
                        onClick={() = /> handleSearch(search)}'
                        className='block w-full text-left px-3 py-2 text-sm text-gray-600 dark: text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md'>

                        {searc}
}
                      </button>;
                    ))}
                  </div>;
                </div>;
              ) : null}
            </div>;
          </div>;
        </div>;
      </div>;
    </div>;
  )}

export default SearchModal;'