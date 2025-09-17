"use client";
'use client';

import React{ useState } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
SearchFilterGridListArrowRightStarClockTrendingUpUsersZap

const InteractiveContentWidget2025 = () => {
  const [activeTabsetActiveTab] = useState('trending');
  const [viewModesetViewMode] = useState('grid');

  const contentCategories = [
    { id: ''trending', 'label: ''Trending', 'icon: TrendingUp },
    { id: ''new', 'label: ''New', 'icon: Star },
    { id: ''popular', 'label: ''Popular', 'icon: Users },
    { id: ''ai', 'label: 'AI 'Solutions', 'icon: Zap }
  ];

  const contentItems = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence Suite",
      description: "Transform your data into actionable insights with our advanced AI analytics platform",
      category: "AI Solutions",
      type: "Platform",
      rating: 4.9,
      users: "12.5K",
      time: "5 min read",
      image: "/api/placeholder/400/250",
      trending: true,
      new: false
    },
    {
      id: 2,
      title: "Quantum Computing Development Kit",
      description: "Build quantum applications with our comprehensive development toolkit",
      category: "Quantum Tech",
      type: "Development Kit",
      rating: 4.8,
      users: "8.2K",
      time: "8 min read",
      image: "/api/placeholder/400/250",
      trending: false,
      new: true
    },
    {
      id: 3,
      title: "Neural Interface API",
      description: "Integrate brain-computer interfaces into your applications seamlessly",
      category: "Neural Tech",
      type: "API",
      rating: 4.7,
      users: "15.3K",
      time: "6 min read",
      image: "/api/placeholder/400/250",
      trending: true,
      new: false
    },
    {
      id: 4,
      title: "Advanced Automation Workflows",
      description: "Create complex automation sequences with our visual workflow builder",
      category: "Automation",
      type: "Tool",
      rating: 4.9,
      users: "22.1K",
      time: "4 min read",
      image: "/api/placeholder/400/250",
      trending: false,
      new: true
    },
    {
      id: 5,
      title: "Space Technology Integration Hub",
      description: "Connect your business to satellite networks and space-based services",
      category: "Space Tech",
      type: "Platform",
      rating: 4.6,
      users: "6.7K",
      time: "7 min read",
      image: "/api/placeholder/400/250",
      trending: true,
      new: false
    },
    {
      id: 6,
      title: "Consciousness AI Framework",
      description: "Develop AI systems with enhanced consciousness and emotional intelligence",
      category: "AI Consciousness",
      type: "Framework",
      rating: 4.8,
      users: "9.4K",
      time: "10 min read",
      image: "/api/placeholder/400/250",
      trending: false,
      new: true
    }
  ];

  const filteredContent = contentItems.filter(item => {
    if (activeTab === 'trending') return item.trending;
    if (activeTab === 'new') return item.new;
    if (activeTab === 'popular') return item.users > '15K';
    if (activeTab === 'ai') return item.category.includes('AI');
    return true;
  });

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our comprehensive library of cutting-edge technologiesolutionsand resources
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search contentechnologiesolutions..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <button className="flex items-center px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </button>
              <div className="flex border border-gray-300 rounded-xl overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {contentCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              <div className={`${viewMode === 'list' ? 'w-1/3' : 'w-full'} h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-2xl ${viewMode === 'list' ? 'rounded-l-2xl rounded-tr-none' : ''} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  {item.trending && (
                    <span className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                      TRENDING
                    </span>
                  )}
                  {item.new && (
                    <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full ml-2">
                      NEW
                    </span>
                  )}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {item.type}
                  </span>
                </div>
              </div>
              
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-600">{item.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {item.users} users
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.time}
                  </div>
                </div>
                
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1 transform duration-200"
                >
                  Explore Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
            Load More Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveContentWidget2025;