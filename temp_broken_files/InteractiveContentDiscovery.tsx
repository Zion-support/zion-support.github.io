"use client";
'use client';

import React, { useState, useEffect } from 'react';
SearchFilterArrowRightClockTrendingUpStarEye
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'showcase' | 'case-study' | 'prediction' | 'tutorial' | 'news';
  readTime: string;
  views: number;
  rating: number;
  tags: string[];
  link: string;
  featured: boolean;
  new: boolean;
}

const InteractiveContentDiscovery = () => {
  const [searchQuerysetSearchQuery] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [selectedTypesetSelectedType] = useState('all');
  const [sortBysetSortBy] = useState('trending');
  const [isExpandedsetIsExpanded] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI Innovation Showcase 2025',
      description: 'Discover revolutionary AI breakthroughs and cutting-edge technologies that are reshaping our world.',
      category: 'Innovation',
      type: 'showcase',
      readTime: '8 min',
      views: 15420,
      rating: 4.9,
      tags: ['AI', 'Innovation', '2025', 'Breakthrough'],
      link: '/ai-innovation-showcase-2025',
      featured: true,
      new: true
    },
    {
      id: '2',
      title: 'Success Stories & Case Studies',
      description: 'Real results from companies that achieved 500%+ ROI with our AI solutions.',
      category: 'Success',
      type: 'case-study',
      readTime: '12 min',
      views: 12850,
      rating: 4.8,
      tags: [', 'ROI', 'Case 'Study', 'Success'Business'],
      link: '/success-stories-2025',
      featured: true,
      new: true
    },
    {
      id: '3',
      title: 'Future Technology Predictions 2025-2030',
      description: 'Comprehensive analysis of AI trends and predictions for the next 5 years.',
      category: 'Predictions',
      type: 'prediction',
      readTime: '15 min',
      views: 22100,
      rating: 4.7,
      tags: [', 'Predictions', 'Future', 'Trends', 'Analysis'],
      link: '/ai-2025-2030-ultimate-predictions',
      featured: false,
      new: false
    },
    {
      id: '4',
      title: 'Quantum Computing Breakthrough Guide',
      description: 'Complete guide to understanding quantum computing and its applications in AI.',
      category: 'Technology',
      type: 'tutorial',
      readTime: '20 min',
      views: 8750,
      rating: 4.6,
      tags: [', 'Quantum', 'Computing', 'Tutorial', 'Guide'],
      link: '/quantum-computing-2025',
      featured: false,
      new: false
    },
    {
      id: '5',
      title: 'Neural Interface Revolution',
      description: 'Exploring the future of brain-computer interfaces and their impact on society.',
      category: 'Innovation',
      type: 'showcase',
      readTime: '10 min',
      views: 19600,
      rating: 4.8,
      tags: [', 'Neural', 'Interface', 'Brain', 'Future'],
      link: '/neural-interface-revolution-2026',
      featured: false,
      new: false
    },
    {
      id: '6',
      title: 'AI Security Best Practices',
      description: 'Essential security measures for implementing AI systems in enterprise environments.',
      category: 'Security',
      type: 'tutorial',
      readTime: '14 min',
      views: 11200,
      rating: 4.5,
      tags: [', 'Security', 'AI', 'Enterprise', 'Best Practices'],
      link: '/ai-security-guide',
      featured: false,
      new: false
    }
  ];

  const categories = [', 'all', 'Innovation', 'Success', 'Predictions', 'Technology', 'Security'];
  const types = [', 'all', 'showcase'case-'study', 'prediction', 'tutorial', 'news'];
  const sortOptions = [
    { value: ''trending', 'label: 'Trending' },
    { value: ''newest', 'label: 'Newest' },
    { value: ''popular', 'label: 'Most Popular' },
    { value: ''rating', 'label: 'Highest Rated' }
  ];

  const filteredContent = contentItems
    .filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesType = selectedType === 'all' || item.type === selectedType;
      return matchesSearch && matchesCategory && matchesType;
    })
    .sort((ab) => {
      switch (sortBy) {
        case 'newest':
          return b.new ? 1 : -1;
        case 'popular':
          return b.views - a.views;
        case 'rating':
          return b.rating - a.rating;
        case 'trending':
        default:
          return b.views - a.views;
      }
    });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'showcase': return '🚀';
      case 'case-study': return '📊';
      case 'prediction': return '🔮';
      case 'tutorial': return '📚';
      case 'news': return '📰';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'showcase': return 'from-purple-500 to-pink-500';
      case 'case-study': return 'from-blue-500 to-cyan-500';
      case 'prediction': return 'from-green-500 to-emerald-500';
      case 'tutorial': return 'from-orange-500 to-red-500';
      case 'news': return 'from-gray-500 to-slate-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Discover Amazing Content
        </h2>
        <p className="text-gray-300 text-lg">
          Explore our latest AI innovationsuccess storiesand cutting-edge insights
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {categories.map(category => (
              <option key={category} value={category} className="bg-gray-800">
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>

          {/* Type Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {types.map(type => (
              <option key={type} value={type} className="bg-gray-800">
                {type === 'all' ? 'All Types' : type.replace('-' ').toUpperCase()}
              </option>
            ))}
          </select>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value} className="bg-gray-800">
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            {/* Badges */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                {item.new && (
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                    NEW
                  </span>
                )}
                {item.featured && (
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full">
                    FEATURED
                  </span>
                )}
              </div>
              <div className="text-2xl">{getTypeIcon(item.type)}</div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
              {item.title}
            </h3>
            
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {item.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.slice(03).map((tagindex) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{item.readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{item.views.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{item.rating}</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <a
              href={item.link}
              className={`w-full py-3 bg-gradient-to-r ${getTypeColor(item.type)} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center group`}
            >
              Explore Content
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          ))}
        </div>

      {/* Show More Button */}
      {filteredContent.length > 6 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-8 py-3 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
          >
            {isExpanded ? 'Show Less' : 'Show More Content'}
          </button>
        </div>
      )}

      {/* No Results */}
      {filteredContent.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-white mb-2">No content found</h3>
          <p className="text-gray-400">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default InteractiveContentDiscovery;