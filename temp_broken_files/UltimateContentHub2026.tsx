"use client";
'use client';

import React{ useState } from 'react';
import { 
  BookOpen
  Video
  FileText
  Headphones
  Download
  ExternalLink,
  Play,
  Clock,
  Users,
  Star,
  ChevronRight,
  Search,
  Filter,
  Grid,
  List
} from 'lucide-react';

const UltimateContentHub2026 = () => {
  const [activeCategorysetActiveCategory] = useState('all');
  const [viewModesetViewMode] = useState('grid');
  const [searchQuerysetSearchQuery] = useState('');

  const categories = [
    { id: ''all', 'name: 'All 'Content', 'count: 156 },
    { id: ''ai', 'name: 'AI & 'Automation', 'count: 45 },
    { id: ''tech', 'name: ''Technology', 'count: 38 },
    { id: ''business', 'name: 'Business 'Strategy', 'count: 32 },
    { id: 'case-'studies', 'name: 'Case 'Studies', 'count: 28 },
    { id: ''tutorials', 'name: ''Tutorials', 'count: 13 }
  ];

  const contentItems = [
    {
      id: 1,
      title: "Neural Interface Revolution: Complete Implementation Guide",
      description: "Learn how to implement direct brain-computer interfaces in your organization",
      type: "guide",
      category: "ai",
      duration: "45 min read",
      difficulty: "Advanced",
      rating: 4.9,
      downloads: 1250,
      thumbnail: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "Quantum AI Fusion: Breaking Down the Technology",
      description: "Understanding quantum computing meets artificial intelligence",
      type: "video",
      category: "tech",
      duration: "32 min",
      difficulty: "Expert",
      rating: 4.8,
      downloads: 890,
      thumbnail: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 3,
      title: "Case Study: 300% ROI with Autonomous Security Systems",
      description: "How TechCorp achieved unprecedented security efficiency",
      type: "case-study",
      category: "case-studies",
      duration: "15 min read",
      difficulty: "Intermediate",
      rating: 4.7,
      downloads: 2100,
      thumbnail: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 4,
      title: "Edge Intelligence: Real-time Processing at Scale",
      description: "Master edge computing for instant decision-making",
      type: "tutorial",
      category: "tech",
      duration: "28 min",
      difficulty: "Advanced",
      rating: 4.6,
      downloads: 1560,
      thumbnail: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 5,
      title: "Synthetic Data Generation: Privacy-Preserving AI Training",
      description: "Generate training data without compromising privacy",
      type: "guide",
      category: "ai",
      duration: "38 min read",
      difficulty: "Expert",
      rating: 4.9,
      downloads: 980,
      thumbnail: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 6,
      title: "Business Transformation: From Legacy to AI-Powered",
      description: "Complete roadmap for enterprise AI transformation",
      type: "guide",
      category: "business",
      duration: "52 min read",
      difficulty: "Intermediate",
      rating: 4.8,
      downloads: 3200,
      thumbnail: "/api/placeholder/400/250",
      featured: true
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'guide': return BookOpen;
      case 'case-study': return FileText;
      case 'tutorial': return Headphones;
      default: return FileText;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-orange-100 text-orange-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Ultimate Content Hub
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              2026 Knowledge Base
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive library of cutting-edge contentguidesand resources 
            to stay ahead in the AI revolution.
          </p>
        </div>

        {/* Search and Filters */}
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      activeCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
              {/* View Mode */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${
                    viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${
                    viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div
          whileInView={{ opacity: 1 }}
          className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          <div>
            {filteredContent.map((itemindex) => {
              const TypeIcon = getTypeIcon(item.type);
              return (
                <div
                  key={item.id}
                  className={`group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                    viewMode === 'list' ? 'flex' : ''
                  } ${item.featured ? 'ring-2 ring-blue-500' : ''}`}
                >
                  {item.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-bold z-10">
                      Featured
                    </div>
                  )}
                  <div className={`${viewMode === 'list' ? 'w-1/3' : 'w-full'} h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <TypeIcon className="w-16 h-16 text-white/80" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                        <Play className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(item.difficulty)}`}>
                        {item.difficulty}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{item.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{item.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Download className="w-4 h-4" />
                          <span>{item.downloads.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <button className="flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                        <span>Read More</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Access
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Load More */}
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all">
            Load More Content
          </button>
        </div>
      </div>
    </section>
  );



export default UltimateContentHub2026;
