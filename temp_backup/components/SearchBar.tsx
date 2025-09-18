<<<<<<< HEAD
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: string;
  category: string;
  href: string;
  icon?: React.ReactNode;
}

interface SearchBarProps {
  theme?: 'dark' | 'light';
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  theme = 'dark', 
  onSearch, 
  placeholder = "Search revolutionary services...",
  className = ""
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Mock search results - in a real app, this would come from an API
  const mockSearchResults: SearchResult[] = [
    {
      id: '1',
      title: 'AI Consciousness Evolution 2044',
      description: 'Next-generation AI consciousness with emotional intelligence',
      type: 'AI Service',
      category: 'Artificial Intelligence',
      href: '/ai-consciousness-evolution-2044',
      icon: <Sparkles className="w-4 h-4" />
    },
    {
      id: '2',
      title: 'Quantum Neural Networks 2044',
      description: 'Quantum-powered AI with consciousness integration',
      type: 'Quantum Service',
      category: 'Quantum Computing',
      href: '/quantum-neural-network-platform-2044',
      icon: <Sparkles className="w-4 h-4" />
    },
    {
      id: '3',
      title: 'Space Resource Intelligence 2044',
      description: 'AI-powered space exploration with consciousness',
      type: 'Space Service',
      category: 'Space Technology',
      href: '/space-resource-intelligence-2044',
      icon: <Sparkles className="w-4 h-4" />
    }
  ];

  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Filter mock results based on query
    const filteredResults = mockSearchResults.filter(result =>
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setResults(filteredResults);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch(query);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, performSearch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resultsRef.current && !resultsRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsOpen(true);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < results.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && results[selectedIndex]) {
        handleResultClick(results[selectedIndex]);
      } else if (query.trim()) {
        handleSearch();
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setSelectedIndex(-1);
    }
  };

  const handleResultClick = (result: SearchResult) => {
    window.location.href = result.href;
    setIsOpen(false);
    setQuery('');
    setSelectedIndex(-1);
  };

  const handleSearch = () => {
    if (onSearch && query.trim()) {
      onSearch(query.trim());
    }
    setIsOpen(false);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  };
=======
import React from 'react';
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const SearchBar: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">SearchBar</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default SearchBar;
