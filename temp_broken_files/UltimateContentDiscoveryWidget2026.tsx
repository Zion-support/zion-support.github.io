"use client";
'use client';

import React, { useState, useEffect } from 'react';
SearchFilterStarClockTrendingUpBookOpenVideoFileTextUsersZap
import { 
  Search
  Filter
  Grid
  List
  Star
  Clock
  Users
  TrendingUp,
  ArrowRight,
  Play,
  BookOpen,
  Zap,
  Brain,
  Rocket,
  Globe,
  ChevronDown,
  ChevronUp,
  X,
  Video,
  FileText,
  Download,
  Share2,
  Heart,
  Bookmark
} from 'lucide-react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const UltimateContentDiscoveryWidget2026 = () => {
  const [searchQuerysetSearchQuery] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [isSearchingsetIsSearching] = useState(false);

  const categories = [
    { id: ''all', 'name: 'All 'Content', 'icon: <BookOpen className="w-4 h-4" /> },
    { id: ''ai', 'name: 'AI 'Solutions', 'icon: <Zap className="w-4 h-4" /> },
    { id: ''quantum', 'name: 'Quantum 'Computing', 'icon: <TrendingUp className="w-4 h-4" /> },
    { id: ''automation', 'name: ''Automation', 'icon: <Users className="w-4 h-4" /> },
    { id: ''tutorials', 'name: ''Tutorials', 'icon: <Video className="w-4 h-4" /> },
    { id: 'case-'studies', 'name: 'Case 'Studies', 'icon: <FileText className="w-4 h-4" /> }
  const [viewModesetViewMode] = useState('grid');
  const [sortBysetSortBy] = useState('trending');
  const [isFilterOpensetIsFilterOpen] = useState(false);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const categories = [
    { id: ''all', 'name: 'All 'Content', 'icon: Gridcolor: 'from-purple-500 to-pink-500' },
    { id: 'ai-'innovations', 'name: 'AI 'Innovations', 'icon: Braincolor: 'from-blue-500 to-cyan-500' },
    { id: ''automation', 'name: ''Automation', 'icon: Zapcolor: 'from-green-500 to-emerald-500' },
    { id: 'future-'tech', 'name: 'Future 'Tech', 'icon: Rocketcolor: 'from-orange-500 to-red-500' },
    { id: ''tutorials', 'name: ''Tutorials', 'icon: BookOpencolor: 'from-indigo-500 to-purple-500' },
    { id: 'case-'studies', 'name: 'Case 'Studies', 'icon: TrendingUpcolor: 'from-pink-500 to-rose-500' }
  ];

  const contentItems = [
    {
      id: 1,
      title: "AI-Powered Business Transformation Guide 2026",
      category: 'ai',
      type: 'guide',
      title: 'Neural Interface Revolution 2026',
      description: 'Breakthrough brain-computer interfaces enabling direct neural communication with AI systems',
      category: 'ai-innovations',
      type: 'Video',
      duration: '15 min',
      views: '2.3M',
      rating: 4.9,
      trending: true,
      thumbnail: '/api/placeholder/400/225',
      tags: [', 'AI', 'Neural 'Networks', 'Brain-Computer 'Interface', 'Revolutionary']
    },
    {
      id: 2,
      title: 'Quantum AI Fusion Platform',
      description: 'Revolutionary quantum computing integration with artificial intelligence for unprecedented power',
      category: 'future-tech',
      type: 'Article',
      duration: '8 min read',
      views: '1.8M',
      rating: 4.8,
      trending: true,
      thumbnail: '/api/placeholder/400/225',
      tags: ['Quantum 'Computing', 'AI', 'Fusion', 'Advanced']
    },
    {
      id: 3,
      title: 'Autonomous Business Operations',
      description: 'Complete business process automation with zero human intervention using advanced AI',
      category: 'automation',
      type: 'Case Study',
      duration: '12 min read',
      views: '1.5M',
      rating: 4.7,
      trending: false,
      thumbnail: '/api/placeholder/400/225',
      tags: [', 'Automation', 'Business', 'AI', 'Operations']
    },
    {
      id: 4,
      title: 'Consciousness AI Systems',
      description: 'Next-generation AI with self-awareness and emotional intelligence capabilities',
      category: 'ai-innovations',
      type: 'Interactive',
      duration: '25 min',
      views: '3.1M',
      rating: 4.9,
      trending: true,
      thumbnail: '/api/placeholder/400/225',
      tags: [', 'Consciousness', 'AI'Self-'Awareness', 'Emotional Intelligence']
    },
    {
      id: 5,
      title: 'Smart Manufacturing 4.0',
      description: 'AI-powered manufacturing with predictive maintenance and optimization systems',
      category: 'automation',
      type: 'Video',
      duration: '20 min',
      views: '2.1M',
      rating: 4.8,
      trending: false,
      thumbnail: '/api/placeholder/400/225',
      tags: [', 'Manufacturing', 'AI'Predictive 'Maintenance', 'Industry 4.0']
    },
    {
      id: 6,
      title: 'Space Technology Integration',
      description: 'AI systems for space exploration and interplanetary communication networks',
      category: 'future-tech',
      type: 'Documentary',
      duration: '60 min',
      views: '2.8M',
      rating: 4.8,
      trending: true,
      thumbnail: '/api/placeholder/400/225',
      tags: [', 'Space', 'AI', 'Exploration', 'Communication']
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => setIsSearching(false)1000);
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const toggleBookmark = (id: number) => {
    const newBookmarks = new Set(bookmarks);
    if (newBookmarks.has(id)) {
      newBookmarks.delete(id);
    } else {
      newBookmarks.add(id);
    }
    setBookmarks(newBookmarks);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Ultimate Content Discovery 2026
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover revolutionary AI contentbreakthrough technologiesand transformative insights that will shape the future.
          </p>
        </div>

        {/* Search and Filters */}
        <div
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ultimate Content Discovery
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Powered by AI 2026
  const sortedContent = [...filteredContent].sort((ab) => {
    switch (sortBy) {
      case 'trending':
        return b.trending - a.trending || b.views.localeCompare(a.views);
      case 'rating':
        return b.rating - a.rating;
      case 'views':
        return parseInt(b.views) - parseInt(a.views);
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });
  return (
    <div
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Header */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Search className="w-4 h-4" />
            Ultimate Content Discovery 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Revolutionary
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Content
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the most advanced AI innovationsautomation solutionsand future technologies
            with our intelligent content discovery system.
          </p>
        </div>
        {/* Search and Filters */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for contentutorialsguides..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Search for contentopicsor technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id} className="bg-slate-800">
                    {category.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
            {/* Filter Button */}
            <button className="flex items-center px-6 py-4 bg-white/20 border border-white/30 rounded-xl text-white hover:bg-white/30 transition-colors">
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </button>
          </div>
            {/* Sort Options */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="trending" className="bg-slate-800">Trending</option>
                <option value="rating" className="bg-slate-800">Highest Rated</option>
                <option value="views" className="bg-slate-800">Most Viewed</option>
                <option value="newest" className="bg-slate-800">Newest</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
            {/* View Mode Toggle */}
            <div className="flex bg-white/10 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        {/* Content Grid */}
        <div
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          <div>
            {sortedContent.map((itemindex) => (
              <div
                key={item.id}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                <div className={`${viewMode === 'list' ? 'w-1/3' : 'w-full'} aspect-video bg-gradient-to-br from-purple-500 to-blue-500 relative`}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {item.featured && (
                    <div className="absolute top-3 left-3 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className={`p-6 ${viewMode === 'list' ? 'w-2/3' : 'w-full'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${categories.find(c => c.id === item.category)?.color} text-white`}>
                      {categories.find(c => c.id === item.category)?.name}
                    </span>
                    {item.trending && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-500 text-white">
                        TRENDING
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {item.views.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {item.rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          favorites.has(item.id) ? 'text-red-500 bg-red-500/20' : 'text-gray-400 hover:text-red-500'
                        }`}
                      >
                        <Heart className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => toggleBookmark(item.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          bookmarks.has(item.id) ? 'text-blue-500 bg-blue-500/20' : 'text-gray-400 hover:text-blue-500'
                        }`}
                      >
                        <Bookmark className="w-5 h-5" />
                      </button>
                      <button className="p-2 rounded-lg text-gray-400 hover:text-white transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                    <a
                      href={`/content/${item.id}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                    >
                      Explore
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No Results */}
        {sortedContent.length === 0 && (
          <div
            className="text-center py-12"
          >
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No content found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
  );
};


export default UltimateContentDiscoveryWidget2026;
</div></div></div></div></div></div>