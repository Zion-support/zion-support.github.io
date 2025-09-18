<<<<<<< HEAD
"use client";
import React{ useStateuseEffectuseCallbackuseMemo } from 'react';
import { motionAnimatePresence } from 'framer-motion';
SearchXFilterTrendingUpClockStarZapBrainAtomShieldRocket

interface SearchResult {
  id: string;
  name: string;
  description: string;
  category: string;
  type: string;
  slug: string;
  relevance: number;
  features?: string[];
  pricing?: {
    starter?: string;
    enterprise?: string;
  };
}

interface SearchProps {
  onSearch: (query: string) => void;
  onResultSelect: (result: SearchResult) => void;
  placeholder?: string;
  className?: string;
  showFilters?: boolean;
}

const EnhancedSearch: React.FC<SearchProps> = ({
  onSearch,
  onResultSelect,
  placeholder = "Search revolutionary services...",
  className = "",
  showFilters = true
}) => {
  const [querysetQuery] = useState('');
  const [isSearchingsetIsSearching] = useState(false);
  const [showResultsetShowResults] = useState(false);
  const [resultsetResults] = useState<SearchResult[]>([]);
  const [selectedFiltersetSelectedFilters] = useState<string[]>([]);
  const [searchHistorysetSearchHistory] = useState<string[]>([]);
  const [popularSearches] = useState([
    'AI Consciousness',
    'Quantum Computing',
    'Cybersecurity',
    'Business Intelligence',
    'Space Technology',
    'Autonomous Systems'
  ]);

  // Mock search results - in real appthis would come from API
  const mockSearchResults: SearchResult[] = [
    {
      id: '1',
      name: 'AI Consciousness Evolution Platform 2045',
      description: 'Next-generation AI consciousness with emotional intelligence and self-awareness capabilities.',
      category: 'AI & Machine Learning',
      type: 'Platform',
      slug: '/ai-consciousness-evolution-platform-2045',
      relevance: 95,
      features: ['Emotional Intelligence'Self-Awareness'Consciousness Evolution'],
      pricing: { starter: '$999/month'enterprise: 'Contact Sales' }
    },
    {
      id: '2',
      name: 'Quantum AI Hybrid Computing',
      description: 'Quantum-powered AI with consciousness integration and quantum supremacy.',
      category: 'Quantum Computing',
      type: 'Platform',
      slug: '/quantum-ai-hybrid-computing',
      relevance: 92,
      features: ['Quantum Supremacy'AI Integration'Hybrid Computing'],
      pricing: { starter: '$1,499/month'enterprise: 'Contact Sales' }
    },
    {
      id: '3',
      name: 'Quantum Cybersecurity Intelligence',
      description: 'Quantum-resistant security with AI consciousness and threat prediction.',
      category: 'Cybersecurity',
      type: 'Platform',
      slug: '/quantum-cybersecurity-intelligence',
      relevance: 88,
      features: ['Quantum Resistance'Threat Prediction'AI Security'],
      pricing: { starter: '$799/month'enterprise: 'Contact Sales' }
    }
  ];

  const categories = [
    { id: 'ai'name: 'AI & ML'icon: Braincolor: 'from-purple-500 to-pink-500' },
    { id: 'quantum'name: 'Quantum'icon: Atomcolor: 'from-blue-500 to-cyan-500' },
    { id: 'security'name: 'Security'icon: Shieldcolor: 'from-red-500 to-orange-500' },
    { id: 'business'name: 'Business'icon: Rocketcolor: 'from-emerald-500 to-teal-500' }
  ];

  // Debounced search function
  const debouncedSearch = useCallback(
    useMemo(
      () => debounce((searchQuery: string) => {
        if (searchQuery.trim().length < 2) {
          setResults([]);
          setShowResults(false);
          return;
        }

        setIsSearching(true);
        
        // Simulate API call delay
        setTimeout(() => {
          const filteredResults = mockSearchResults.filter(result => {
            const matchesQuery = result.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                               result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                               result.category.toLowerCase().includes(searchQuery.toLowerCase());
            
            const matchesFilters = selectedFilters.length === 0 || 
                                 selectedFilters.some(filter => 
                                   result.category.toLowerCase().includes(filter.toLowerCase()) ||
                                   result.type.toLowerCase().includes(filter.toLowerCase())
                                 );
            
            return matchesQuery && matchesFilters;
          });

          // Sort by relevance
          const sortedResults = filteredResults.sort((ab) => b.relevance - a.relevance);
          
          setResults(sortedResults);
          setShowResults(true);
          setIsSearching(false);
        }300);
      }300),
      [selectedFilters]
    ),
    [selectedFilters]
  );

  useEffect(() => {
    debouncedSearch(query);
  }[querydebouncedSearch]);

  // Handle search input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.trim().length === 0) {
      setShowResults(false);
      setResults([]);
    }
  }[suggestionselectedIndexqueryhandleSearch]);

  // Close search on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      addToSearchHistory(query);
      setShowResults(false);
    }
  }[routerhandleSearch]);

  // Handle quick action click
  const handleQuickAction = useCallback((action: string) => {
    router.push(action);
    setIsOpen(false);
  }[router]);

  // Add search to history
  const addToSearchHistory = (searchTerm: string) => {
    const newHistory = [searchTerm...searchHistory.filter(item => item !== searchTerm)].slice(05);
    setSearchHistory(newHistory);
    localStorage.setItem('zion-search-history'JSON.stringify(newHistory));
  };

  // Load search history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('zion-search-history');
    if (savedHistory) {
      try {
        setSearchHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Failed to parse search history:'error);
      }
    }
  }[]);

  // Handle filter toggle
  const toggleFilter = (filterId: string) => {
    setSelectedFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prevfilterId]
    );
  };

  // Handle result selection
  const handleResultSelect = (result: SearchResult) => {
    onResultSelect(result);
    setShowResults(false);
    setQuery('');
  };

  // Clear search
  const clearSearch = () => {
    setQuery('');
    setShowResults(false);
    setResults([]);
  };
=======
import React from 'react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const EnhancedSearch: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedSearch</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default EnhancedSearch;
