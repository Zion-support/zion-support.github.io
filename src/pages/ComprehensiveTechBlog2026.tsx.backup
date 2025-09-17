<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React, { useState } from 'react';

>>>>>>> origin/merge-new-content-1757989975
const ComprehensiveTechBlog2026: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>ComprehensiveTechBlog2026 | Zion Tech Group</title>
        <meta name="description" content="ComprehensiveTechBlog2026 - Revolutionary technology solutions" />
      </Helmet>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">ComprehensiveTechBlog2026</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
=======
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="container mx-auto relative z-10">
          <div
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📚 COMPREHENSIVE TECH BLOG • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tech Insights & Innovations
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Stay ahead of the curve with the latest insights, breakthroughs, and innovations in technology
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span className="text-xl mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Featured Posts */}
          <div
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">🌟 Featured Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
                >
                  <div className="text-4xl mb-4">{post.image}</div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full">
                      FEATURED
                    </span>
                    <span className="text-sm text-white/60">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-white/70 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* All Posts */}
          <div
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              {selectedCategory === 'all' ? 'All Articles' : categories.find(c => c.key === selectedCategory)?.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
                >
                  <div className="text-4xl mb-4">{post.image}</div>
                  <div className="flex items-center space-x-2 mb-3">
                    {post.featured && (
                      <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs rounded-full">
                        FEATURED
                      </span>
                    )}
                    <span className="text-sm text-white/60">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-white/70 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div
            className="mt-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-400/30 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get the latest tech insights and breakthroughs delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
>>>>>>> origin/merge-new-content-1757989975
        </div>
      </div>
    </div>
  );

};


export default ComprehensiveTechBlog2026;
