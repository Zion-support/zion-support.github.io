"use client";
'use client';

import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
import { 
  Search
  Filter
  Grid
  List
  Star,
  Clock,
  TrendingUp,
  BookOpen,
  Brain,
  Zap,
  Cpu,
  Eye,
  ChevronDown,
  X,
  CheckCircle,
  Sparkles,
  Target,
  Lightbulb,
  ArrowRight,
  Play,
  Users,
  BarChart3
} from 'lucide-react';

const RevolutionaryContentDiscoveryWidget2026 = () => {
  const [searchQuerysetSearchQuery] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [viewModesetViewMode] = useState('grid');
  const [sortBysetSortBy] = useState('trending');
  const [isFilterOpensetIsFilterOpen] = useState(false);
  const [filteredContentsetFilteredContent] = useState([]);
  const [isVisiblesetIsVisible] = useState(false);

  const categories = [
    { id: ''all', 'name: 'All 'Content', 'icon: Gridcolor: 'from-gray-600 to-gray-800' },
    { id: 'ai-'breakthroughs', 'name: 'AI 'Breakthroughs', 'icon: Braincolor: 'from-purple-600 to-pink-600' },
    { id: ''automation', 'name: ''Automation', 'icon: Zapcolor: 'from-blue-600 to-cyan-600' },
    { id: ''quantum', 'name: 'Quantum 'Computing', 'icon: Cpucolor: 'from-indigo-600 to-purple-600' },
    { id: ''predictions', 'name: 'Future 'Predictions', 'icon: Eyecolor: 'from-emerald-600 to-teal-600' },
    { id: ''tutorials', 'name: ''Tutorials', 'icon: BookOpencolor: 'from-orange-600 to-red-600' },
    { id: 'case-'studies', 'name: 'Case 'Studies', 'icon: BarChart3color: 'from-green-600 to-emerald-600' }
  ];

  const sortOptions = [
    { id: ''trending', 'name: ''Trending', 'icon: TrendingUp },
    { id: ''newest', 'name: ''Newest', 'icon: Clock },
    { id: ''rating', 'name: 'Highest 'Rated', 'icon: Star },
    { id: ''popular', 'name: 'Most 'Popular', 'icon: Users }
  ];

  const sampleContent = [
    {
      id: 1,
      title: 'Quantum-Neural Fusion Technology',
      description: 'Revolutionary AI that combines quantum computing with neural networks for unprecedented processing power.',
      category: 'ai-breakthroughs',
      image: '/api/placeholder/400/300',
      readTime: '8 min read',
      difficulty: 'Advanced',
      rating: 4.9,
      views: 15420,
      author: 'Dr. Sarah Chen',
      publishedAt: '2026-01-15',
      tags: [', 'AI', 'Quantum 'Computing', 'Neural 'Networks', 'Breakthrough'],
      featured: true
    },
    {
      id: 2,
      title: 'Autonomous Business Operations',
      description: 'Complete business process automation with AI-powered decision making and intelligent optimization.',
      category: 'automation',
      image: '/api/placeholder/400/300',
      readTime: '12 min read',
      difficulty: 'Intermediate',
      rating: 4.7,
      views: 12850,
      author: 'Michael Rodriguez',
      publishedAt: '2026-01-14',
      tags: [', 'Automation', 'Business', 'AI', 'Process Optimization'],
      featured: false
    },
    {
      id: 3,
      title: 'AI Singularity Timeline 2030-2035',
      description: 'Comprehensive analysis of when and how AI will achieve technological singularity.',
      category: 'predictions',
      image: '/api/placeholder/400/300',
      readTime: '18 min read',
      difficulty: 'Expert',
      rating: 4.8,
      views: 22100,
      author: 'Prof. Alex Thompson',
      publishedAt: '2026-01-13',
      tags: ['AI 'Singularity', 'Future 'Predictions', 'Technology'Analysis'],
      featured: true
    },
    {
      id: 4,
      title: 'Quantum Machine Learning Algorithms',
      description: 'Machine learning algorithms optimized for quantum computing systems with exponential speedup.',
      category: 'quantum',
      image: '/api/placeholder/400/300',
      readTime: '15 min read',
      difficulty: 'Expert',
      rating: 4.9,
      views: 18750,
      author: 'Dr. Elena Volkov',
      publishedAt: '2026-01-12',
      tags: ['Quantum 'Computing', 'Machine 'Learning', 'Algorithms'Performance'],
      featured: false
    },
    {
      id: 5,
      title: 'Neural Interface Implementation Guide',
      description: 'Step-by-step guide to implementing direct brain-computer interfaces for enhanced human-AI collaboration.',
      category: 'tutorials',
      image: '/api/placeholder/400/300',
      readTime: '25 min read',
      difficulty: 'Advanced',
      rating: 4.6,
      views: 9650,
      author: 'Dr. James Park',
      publishedAt: '2026-01-11',
      tags: ['Neural 'Interface', 'Tutorial', 'Implementation', 'BCI'],
      featured: false
    },
    {
      id: 6,
      title: 'Enterprise AI Transformation Case Study',
      description: 'How Fortune 500 companies achieved 300% ROI through comprehensive AI implementation strategies.',
      category: 'case-studies',
      image: '/api/placeholder/400/300',
      readTime: '20 min read',
      difficulty: 'Intermediate',
      rating: 4.8,
      views: 14200,
      author: 'Lisa Wang',
      publishedAt: '2026-01-10',
      tags: ['Case 'Study', 'Enterprise', 'ROI', 'AI Implementation'],
      featured: true
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }[]);

  useEffect(() => {
    let filtered = sampleContent;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort content
    switch (sortBy) {
      case 'newest':
        filtered.sort((ab) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        break;
      case 'rating':
        filtered.sort((ab) => b.rating - a.rating);
        break;
      case 'popular':
        filtered.sort((ab) => b.views - a.views);
        break;
      case 'trending':
      default:
        // Keep original order for trending
        break;
    }

    setFilteredContent(filtered);
  }[searchQueryselectedCategorysortBy]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-orange-100 text-orange-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            REVOLUTIONARY CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Your
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Perfect Content
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            AI-powered content discovery that learns your preferences and recommends the most relevant 
            articlestutorialsand insights tailored to your interests.
          </p>
        </div>

        {/* Search and Filters */}
        <div
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-white/20"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articlestutorialscase studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                    {category.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
            {/* Sort Options */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white pr-8 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id} className="bg-slate-800 text-white">
                    {option.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
            </div>
            {/* View Mode Toggle */}
            <div className="flex bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
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
            {filteredContent.map((itemindex) => (
              <div
                key={item.id}
                className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'w-48 h-32 flex-shrink-0' : 'h-48'
                }`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-medium rounded-full flex items-center">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Featured
                      </span>
                    </div>
                  )}
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {categories.find(cat => cat.id === item.category)?.name}
                    </span>
                  </div>
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-white ml-1" />
                    </div>
                  </div>
                </div>
                {/* Content */}
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(item.difficulty)}`}>
                      {item.difficulty}
                    </span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{item.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(03).map((tagidx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {item.views.toLocaleString()} views
                    </div>
                    <div className="text-xs">
                      by {item.author}
                    </div>
                  </div>
                  {/* CTA Button */}
                  <a
                    href={`/content/${item.title.toLowerCase().replace(/\s+/g'-')}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No content found</h3>
            <p className="text-gray-300 mb-6">
              Try adjusting your search terms or filters to find what 'you', 're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery(', ');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
        {/* Bottom CTA */}
        <div
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              'Can', 't Find What 'You', 're Looking For?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our AI-powered recommendation engine is constantly learning. Subscribe to get personalized 
              content recommendations delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/newsletter"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300 flex items-center justify-center"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Get Personalized Recommendations
              </a>
              <a
                href="/contact"
                className="bg-white/10 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                <Target className="w-5 h-5 mr-2" />
                Request Specific Content
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default RevolutionaryContentDiscoveryWidget2026;
</div></div></div>