"use client";

import React, { useState } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
import { ArrowRightIcon, BookOpenIcon, SparklesIcon, ClockIcon, UserIcon, TagIcon } from '@heroicons/react/24/outline';

const AI2026ContentShowcase = () => {
  const [activeTab, setActiveTab] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: "AI 2026: Quantum-Neural Fusion Revolution",
      description: "Discover how quantum-neural fusion is revolutionizing AI in 2026, creating unprecedented computational power and intelligence capabilities.",
      category: "breakthrough",
      readTime: "12 min read",
      author: "Zion Tech Group",
      date: "2026-01-15",
      tags: ["quantum-computing", "neural-networks", "AI-2026", "breakthrough"],
      image: "/images/quantum-neural-fusion-2026.jpg",
      featured: true,
      stats: {
        views: "15.2k",
        shares: "3.8k",
        likes: "2.1k"
      }
    },
    {
      id: 2,
      title: "AI 2026: Autonomous Business Ecosystems",
      description: "Explore how AI 2026 is creating fully autonomous business ecosystems that self-manage, self-optimize, and self-evolve without human intervention.",
      category: "business",
      readTime: "15 min read",
      author: "Zion Tech Group",
      date: "2026-01-20",
      tags: ["autonomous-systems", "business-ecosystems", "AI-2026", "self-management"],
      image: "/images/autonomous-business-ecosystems-2026.jpg",
      featured: true,
      stats: {
        views: "12.7k",
        shares: "2.9k",
        likes: "1.8k"
      }
    },
    {
      id: 3,
      title: "AI 2026: Synthetic Intelligence Breakthrough",
      description: "Explore the revolutionary emergence of Synthetic Intelligence in 2026 - AI that creates, evolves, and transcends traditional artificial intelligence boundaries.",
      category: "revolution",
      readTime: "18 min read",
      author: "Zion Tech Group",
      date: "2026-01-25",
      tags: ["synthetic-intelligence", "AI-evolution", "consciousness", "AI-2026"],
      image: "/images/synthetic-intelligence-2026.jpg",
      featured: true,
      stats: {
        views: "18.9k",
        shares: "4.2k",
        likes: "2.7k"
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'breakthrough', name: 'Breakthroughs', count: contentItems.filter(item => item.category === 'breakthrough').length },
    { id: 'business', name: 'Business', count: contentItems.filter(item => item.category === 'business').length },
    { id: 'revolution', name: 'Revolution', count: contentItems.filter(item => item.category === 'revolution').length }
  ];

  const filteredContent = activeTab === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeTab);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full px-6 py-2 mb-6">
            <BookOpenIcon className="w-5 h-5 mr-2 text-white" />
            <span className="text-sm font-semibold text-white">📚 LATEST AI 2026 CONTENT</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content Showcase
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the latest breakthroughs, innovations, and insights in AI 2026. 
            Discover how cutting-edge technology is transforming businesses and society.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <SparklesIcon className="w-3 h-3 mr-1" />
                    FEATURED
                  </div>
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-400 to-blue-500">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white">
                    <div className="flex items-center text-sm mb-2">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </div>
                    <div className="flex items-center text-sm">
                      <UserIcon className="w-4 h-4 mr-1" />
                      {item.author}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span className="capitalize">{item.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="inline-flex items-center bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                      <TagIcon className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <span>{item.stats.views} views</span>
                  <span>{item.stats.shares} shares</span>
                  <span>{item.stats.likes} likes</span>
                </div>

                {/* CTA */}
                <a
                  href={`/blog/${item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ', ')}`}
                  className="inline-flex items-center w-full justify-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Read Article
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with AI 2026</h3>
          <p className="text-lg mb-6 opacity-90">
            Get the latest insights, breakthroughs, and innovations delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2026ContentShowcase;