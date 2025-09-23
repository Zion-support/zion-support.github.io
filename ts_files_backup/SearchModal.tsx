import React, { useState } from 'react';
import Link from 'next/link';

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const searchData: SearchResult[] = [
    {
      title: 'AI Services',
      description: 'Comprehensive AI solutions for your business',
      url: '/services/ai',
      category: 'Services'
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless cloud infrastructure migration',
      url: '/services/cloud',
      category: 'Services'
    },
    {
      title: 'About Us',
      description: 'Learn more about Zion Tech Group',
      url: '/about',
      category: 'Pages'
    },
    {
      title: 'Contact',
      description: 'Get in touch with our team',
      url: '/contact',
      category: 'Pages'
    }
  ];

  const handleSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(filtered);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
  };

  const handleClose = () => {
    setQuery('');
    setResults([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-start justify-center min-h-screen pt-16 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={handleClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Search</h3>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search services, pages..."
                value={query}
                onChange={handleInputChange}
                className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {results.length > 0 && (
              <div className="mt-4 max-h-60 overflow-y-auto">
                {results.map((result, index) => (
                  <Link
                    key={index}
                    href={result.url}
                    className="block px-3 py-2 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                    onClick={handleClose}
                  >
                    <div className="font-medium text-gray-900">{result.title}</div>
                    <div className="text-sm text-gray-600">{result.description}</div>
                    <div className="text-xs text-blue-600 mt-1">{result.category}</div>
                  </Link>
                ))}
              </div>
            )}

            {query.length > 0 && results.length === 0 && (
              <div className="mt-4 text-center text-gray-500">
                No results found for "{query}"
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;