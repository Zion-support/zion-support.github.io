"use client";
'use client';
import React, { useState, useEffect } from 'react';
import {,
  TrendingUp,
  Brain,
  Zap,
  Rocket,
  Target,
  Globe;
  ArrowRight;
  Play;
  BookOpen;
  Code;
  Lightbulb;
  Star;
  Award;
  ChevronRight;
  ExternalLink;
  Sparkles;
  Cpu;
  Shield;
  Database;
  Network;
  Microscope;
  Atom;
  Layers;
  Search;
  Calendar;
  Users;
  BarChart3;
  PieChart;
  LineChart,
} from 'lucide-react';
interface TrendItem {,
  id: string;
  title: string;
  description: string;
  category: 'ai' | 'quantum' | 'automation' | 'biotech' | 'robotics' | 'sustainability';
  impact: 'low' | 'medium' | 'high' | 'transformative';
  timeline: string;
  adoption: number, // percentage,
  marketSize: string;
  growth: number, // percentage,
  tags: string[];
  image: string;
  url: string;
  featured: boolean;
  predictions: {,
    shortTerm: string;
    mediumTerm: string;
    longTerm: string,};
  keyPlayers: string[];
  challenges: string[],}
,
const TechnologyTrends2026: React.FC = () => {,
  return (,
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">,
      {/* Header Section */,}
      <div className="relative overflow-hidden">,
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>,
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">,
          <div,
            className="text-center",
          >,
            <div className="flex items-center justify-center mb-6">,
              <TrendingUp className="h-8 w-8 text-indigo-400 mr-3" />,
              <h1 className="text-4xl md:text-6xl font-bold text-white">,
                Technology Trends,
              </h1>,
              <Sparkles className="h-8 w-8 text-yellow-400 ml-3" />,
            </div>,
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">,
              Discover the most influential technology trendsbreakthrough innovationsand transformative,
              developments that will shape the future of technology and society.,
            </p>,
            {/* Search and View Controls */,}
            <div className="max-w-4xl mx-auto mb-8">,
              <div className="flex flex-col md: flex-row gap-4 items-center justify-center">,
                <div className="relative flex-1 max-w-2xl">,
                  <input,
                    type="text",
                    placeholder="Search trendstechnologiesor predictions...",
                    value={searchQuery,}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent",
                  />,
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />,
                </div>,
                <div className="flex bg-white/10 rounded-xl p-1">,
                  <button,
                    onClick={() => setViewMode('grid'),}
                    className={`px-4 py-2 rounded-lg transition-colors ${,
                      viewMode === 'grid' ? 'bg-white/20 text-white' : 'text-gray-400 hover: text-white',}`}
                  >,
                    Grid,
                  </button>,
                  <button,
                    onClick={() => setViewMode('timeline')}
                    className={`px-4 py-2 rounded-lg transition-colors ${,
                      viewMode === 'timeline' ? 'bg-white/20 text-white' : 'text-gray-400 hover: text-white',}`}
                  >,
                    Timeline,
                  </button>,
                </div>,
              </div>,
            </div>,
          </div>,
        </div>,
      </div>,
      {/* Featured Trends */}
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-16">,
        <div,
          className="mb-12",
        >,
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">,
            <Star className="h-8 w-8 text-yellow-400 mr-3" />,
            Featured Trends,
          </h2>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {featuredTrends.map((trendindex) => {,
              const CategoryIcon = getCategoryIcon(trend.category);
              return (,
                <div,
                  key={trend.id}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover: border-white/40 transition-all duration-300 hover:scale-105",
                  onClick={() => setSelectedTrend(trend),}
                >,
                  <div className="relative h-48 overflow-hidden">,
                    <img,
                      src={trend.image}
                      alt={trend.title}
                      className="w-full h-full object-cover group-hover: scale-110 transition-transform duration-500",
                    />,
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>,
                    <div className="absolute top-4 left-4 flex space-x-2">,
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold">,
                        Featured,
                      </span>,
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getImpactColor(trend.impact),}`}>,
                        {trend.impact}
                      </span>,
                    </div>,
                    <div className="absolute top-4 right-4">,
                      <CategoryIcon className="h-6 w-6 text-white" />,
                    </div>,
                  </div>,
                  <div className="p-6">,
                    <div className="flex items-center justify-between mb-3">,
                      <span className="text-sm text-gray-400 uppercase tracking-wide">,
                        {trend.category}
                      </span>,
                      <span className="text-sm text-gray-400">{trend.timeline}</span>,
                    </div>,
                    <h3 className="text-xl font-bold text-white mb-3 group-hover: text-indigo-400 transition-colors">,
                      {trend.title,}
                    </h3>,
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">,
                      {trend.description}
                    </p>,
                    <div className="flex items-center justify-between mb-4">,
                      <div className="flex items-center space-x-4 text-sm text-gray-400">,
                        <span>Market: {trend.marketSize,}</span>,
                        <span className={`font-semibold ${getGrowthColor(trend.growth)}`}>,
                          +{trend.growth}%,
                        </span>,
                      </div>,
                    </div>,
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-4">,
                      <div,
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-1000",
                        style={{ width: `${trend.adoption,}%` }}
                      ></div>,
                    </div>,
                    <div className="flex items-center justify-between">,
                      <span className="text-xs text-gray-400">Adoption: {trend.adoption,}%</span>,
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover: text-indigo-400 transition-colors" />,
                    </div>,
                  </div>,
                </div>,
              ),})}
          </div>,
        </div>,
        {/* Category Filter */}
        <div,
          className="mb-12",
        >,
          <h2 className="text-3xl font-bold text-white mb-8">Browse by Category</h2>,
          <div className="flex flex-wrap gap-4">,
            {categories.map((category) => {,
              const Icon = category.icon;
              return (,
                <button,
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${,
                    activeCategory === category.id,
                      ? 'bg-indigo-400 text-black font-semibold',
                      : 'bg-white/10 text-white hover: bg-white/20',}`}
                >,
                  <Icon className="h-5 w-5 mr-2" />,
                  <span>{category.name}</span>,
                  <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">,
                    {category.count}
                  </span>,
                </button>,
              );
            })}
          </div>,
        </div>,
        {/* Trends Grid */}
        <div,
        >,
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">,
            {filteredTrends.map((trendindex) => {,
              const CategoryIcon = getCategoryIcon(trend.category);
              return (,
                <div,
                  key={trend.id}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover: border-white/30 transition-all duration-300 hover:scale-105",
                  onClick={() => setSelectedTrend(trend),}
                >,
                  <div className="relative h-40 overflow-hidden">,
                    <img,
                      src={trend.image}
                      alt={trend.title}
                      className="w-full h-full object-cover group-hover: scale-110 transition-transform duration-500",
                    />,
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>,
                    <div className="absolute top-3 left-3">,
                      <CategoryIcon className="h-5 w-5 text-white" />,
                    </div>,
                    <div className="absolute top-3 right-3">,
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getImpactColor(trend.impact),}`}>,
                        {trend.impact}
                      </span>,
                    </div>,
                  </div>,
                  <div className="p-4">,
                    <div className="flex items-center justify-between mb-2">,
                      <span className="text-xs text-gray-400 uppercase tracking-wide">,
                        {trend.category}
                      </span>,
                      <span className="text-xs text-gray-400">{trend.timeline}</span>,
                    </div>,
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover: text-indigo-400 transition-colors line-clamp-2">,
                      {trend.title,}
                    </h3>,
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">,
                      {trend.description}
                    </p>,
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">,
                      <span>Market: {trend.marketSize,}</span>,
                      <span className={`font-semibold ${getGrowthColor(trend.growth)}`}>,
                        +{trend.growth}%,
                      </span>,
                    </div>,
                    <div className="w-full bg-gray-700 rounded-full h-1.5 mb-2">,
                      <div,
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-1.5 rounded-full transition-all duration-1000",
                        style={{ width: `${trend.adoption,}%` }}
                      ></div>,
                    </div>,
                    <div className="flex items-center justify-between">,
                      <span className="text-xs text-gray-400">Adoption: {trend.adoption,}%</span>,
                      <ChevronRight className="h-4 w-4 group-hover: text-indigo-400 transition-colors" />,
                    </div>,
                  </div>,
                </div>,
              ),})}
          </div>,
        </div>,
      </div>,
      {/* Trend Detail Modal */}
      <div>,
        {selectedTrend && (,
          <div,
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",
            onClick={() => setSelectedTrend(null)}
          >,
            <div,
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto",
              onClick={(e) => e.stopPropagation()}
            >,
              <div className="relative">,
                <img,
                  src={selectedTrend.image}
                  alt={selectedTrend.title}
                  className="w-full h-64 object-cover",
                />,
                <button,
                  onClick={() => setSelectedTrend(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover: bg-black/70 transition-colors",
                >,
                  ×,
                </button>,
              </div>,
              <div className="p-8">,
                <div className="flex items-center justify-between mb-4">,
                  <span className="text-sm text-gray-600 uppercase tracking-wide">,
                    {selectedTrend.category,}
                  </span>,
                  <div className="flex space-x-2">,
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getImpactColor(selectedTrend.impact)}`}>,
                      {selectedTrend.impact}
                    </span>,
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">,
                      {selectedTrend.timeline}
                    </span>,
                  </div>,
                </div>,
                <h1 className="text-3xl font-bold text-gray-900 mb-4">,
                  {selectedTrend.title}
                </h1>,
                <p className="text-gray-600 text-lg mb-6">,
                  {selectedTrend.description}
                </p>,
                {/* Market Data */}
                <div className="grid grid-cols-2 md: grid-cols-4 gap-4 mb-6">,
                  <div className="bg-gray-50 rounded-lg p-4 text-center">,
                    <div className="text-2xl font-bold text-indigo-600">{selectedTrend.marketSize,}</div>,
                    <div className="text-sm text-gray-600">Market Size</div>,
                  </div>,
                  <div className="bg-gray-50 rounded-lg p-4 text-center">,
                    <div className={`text-2xl font-bold ${getGrowthColor(selectedTrend.growth)}`}>,
                      +{selectedTrend.growth}%,
                    </div>,
                    <div className="text-sm text-gray-600">Growth Rate</div>,
                  </div>,
                  <div className="bg-gray-50 rounded-lg p-4 text-center">,
                    <div className="text-2xl font-bold text-gray-900">{selectedTrend.adoption}%</div>,
                    <div className="text-sm text-gray-600">Adoption Rate</div>,
                  </div>,
                  <div className="bg-gray-50 rounded-lg p-4 text-center">,
                    <div className="text-2xl font-bold text-gray-900">{selectedTrend.timeline}</div>,
                    <div className="text-sm text-gray-600">Timeline</div>,
                  </div>,
                </div>,
                {/* Predictions */}
                <div className="mb-6">,
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Predictions</h3>,
                  <div className="grid grid-cols-1 md: grid-cols-3 gap-4">,
                    <div className="bg-blue-50 rounded-lg p-4">,
                      <h4 className="font-semibold text-blue-900 mb-2">Short Term</h4>,
                      <p className="text-blue-800 text-sm">{selectedTrend.predictions.shortTerm,}</p>,
                    </div>,
                    <div className="bg-green-50 rounded-lg p-4">,
                      <h4 className="font-semibold text-green-900 mb-2">Medium Term</h4>,
                      <p className="text-green-800 text-sm">{selectedTrend.predictions.mediumTerm}</p>,
                    </div>,
                    <div className="bg-purple-50 rounded-lg p-4">,
                      <h4 className="font-semibold text-purple-900 mb-2">Long Term</h4>,
                      <p className="text-purple-800 text-sm">{selectedTrend.predictions.longTerm}</p>,
                    </div>,
                  </div>,
                </div>,
                {/* Key Players and Challenges */}
                <div className="grid grid-cols-1 md: grid-cols-2 gap-6 mb-6">,
                  <div>,
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Key Players</h3>,
                    <div className="flex flex-wrap gap-2">,
                      {selectedTrend.keyPlayers.map((player) => (,
                        <span,
                          key={player,}
                          className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm",
                        >,
                          {player}
                        </span>,
                      ))}
                    </div>,
                  </div>,
                  <div>,
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Challenges</h3>,
                    <div className="flex flex-wrap gap-2">,
                      {selectedTrend.challenges.map((challenge) => (,
                        <span,
                          key={challenge}
                          className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm",
                        >,
                          {challenge}
                        </span>,
                      ))}
                    </div>,
                  </div>,
                </div>,
                <div className="flex flex-wrap gap-2 mb-6">,
                  {selectedTrend.tags.map((tag) => (,
                    <span,
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm",
                    >,
                      #{tag}
                    </span>,
                  ))}
                </div>,
                <div className="flex items-center justify-between">,
                  <div className="text-sm text-gray-500">,
                    Timeline: {selectedTrend.timeline,}
                  </div>,
                  <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover: bg-indigo-700 transition-colors flex items-center">,
                    <ExternalLink className="h-4 w-4 mr-2" />,
                    Learn More,
                  </button>,
                </div>,
              </div>,
            </div>,
          </div>,
        ),}
      </div>,
    </div>,
  );
export default TechnologyTrends2026;
}