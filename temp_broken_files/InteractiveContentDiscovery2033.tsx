import React, { useState } from 'react';
import { ArrowRight, Search, Filter, TrendingUp, Star, Eye, Zap, Brain, Globe, Rocket } from 'lucide-react';

const InteractiveContentDiscovery2033: React.FC = () => {
  return (
    <divsection
      whileInView={{ opacity: 1, y: 0 }}
      className="relative py-16 px-4 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-indigo-900/50"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Interactive Content Discovery 2033
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover groundbreaking innovations and cutting-edge technologies through our intelligent content recommendation system
          </p>
        </div>

        {/* Search and Filters */}
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search innovations, technologies, or concepts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50'
                }`}
              >
                {filter.icon}
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
          <div
            key={`${activeFilter}-${searchTerm}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredContent.map((item, index) => (
              <div
                key={item.id}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 backdrop-blur-sm border border-gray-600/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all group cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{item.image}</div>
                  <div className="flex items-center gap-2">
                    {item.trending && (
                      <div className="flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 px-2 py-1 rounded-full text-xs font-semibold">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </div>
                    )}
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-semibold">{item.rating}</span>
                    </div>
                  </div>
                </div>
                {/* Title and Description */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {item.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">{item.views} views</span>
                  </div>
                  <button
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span className="text-sm font-semibold">Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {/* Hover Effect */}
                <div>
                  {hoveredItem === item.id && (
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl pointer-events-none"
                    />
                  )}
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
            <h3 className="text-2xl font-bold text-gray-300 mb-2">No content found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </divsection>
  );
};


export default InteractiveContentDiscovery2033;
</div></div></div>