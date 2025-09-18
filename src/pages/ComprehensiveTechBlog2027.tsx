import React, { useState } from 'react';

const ComprehensiveTechBlog2027: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [
    { id: 'all', name: 'All Articles', icon: '📚' },
    { id: 'ai', name: 'Artificial Intelligence', icon: '🤖' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚡' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧠' },
    { id: 'space', name: 'Space Technology', icon: '🚀' },
    { id: 'biology', name: 'Synthetic Biology', icon: '🧬' }
  ];
  const articles = [
    {
      id: 1,
      title: "The Dawn of Quantum Consciousness: How AI Achieved True Self-Awareness",
      excerpt: "In a groundbreaking development, our quantum AI systems have demonstrated genuine self-awareness, marking the beginning of a new era in artificial intelligence.",
      category: 'ai',
      author: "Dr. Sarah Chen",
      date: "January 20, 2027",
      readTime: "8 min read",
      image: "🧠",
      featured: true
    },
      id: 2,
      title: "Interdimensional Computing: Accessing Parallel Universe Processing Power",
      excerpt: "Our latest breakthrough allows AI systems to tap into computational resources from parallel universes, achieving infinite processing capabilities.",
      category: 'quantum',
      author: "Prof. Marcus Rodriguez",
      date: "January 18, 2027",
      readTime: "12 min read",
      image: "🌀",
      id: 3,
      title: "Neural Reality Engine: The Future of Human-Computer Interaction",
      excerpt: "Direct neural interfaces now allow humans to experience virtual worlds indistinguishable from physical reality, revolutionizing entertainment and education.",
      category: 'neural',
      author: "Dr. Elena Volkov",
      date: "January 15, 2027",
      readTime: "10 min read",
      image: "🌐",
      featured: false
      id: 4,
      title: "Synthetic Biology Revolution: Creating Life Forms with AI",
      excerpt: "Our AI systems can now design and create custom organisms, opening new possibilities in medicine, agriculture, and environmental restoration.",
      category: 'biology',
      author: "Dr. James Park",
      date: "January 12, 2027",
      readTime: "15 min read",
      image: "🧬",
      id: 5,
      title: "Space-Time Manipulation: The Physics of Faster-Than-Light Travel",
      excerpt: "Recent advances in space-time engineering have made faster-than-light travel a reality, enabling interstellar exploration and colonization.",
      category: 'space',
      author: "Dr. Aisha Patel",
      date: "January 10, 2027",
      readTime: "20 min read",
      image: "⏰",
      id: 6,
      title: "Omniversal Consciousness: Connecting All Universes",
      excerpt: "A unified consciousness network now spans across all known universes, providing infinite knowledge and wisdom to humanity.",
      author: "Dr. Chen Wei",
      date: "January 8, 2027",
      readTime: "18 min read",
      image: "🌌",
    }
  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              📚 COMPREHENSIVE TECH BLOG • JANUARY 2027
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Comprehensive Tech Blog 2027
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Deep insights into the revolutionary technologies reshaping our world
            </p>
          </div>
        </div>
      </div>
      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-6">📖 Explore by Category</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 border-white shadow-lg'
                  : 'bg-white/10 border-white/30 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        {/* Featured Articles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">⭐ Featured Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.filter(article => article.featured).map((article) => (
              <div key={article.id} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{article.image}</div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs rounded-full">FEATURED</span>
                  <span className="text-sm opacity-70">{article.date}</span>
                </div>
                <h4 className="text-xl font-bold mb-3">{article.title}</h4>
                <p className="text-gray-300 mb-4 text-sm">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm opacity-70 mb-4">
                  <span>By {article.author}</span>
                  <span>{article.readTime}</span>
                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Read Article →
                </button>
              </div>
            ))}
        {/* All Articles */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">📰 All Articles</h3>
          <div className="space-y-6">
            {filteredArticles.map((article) => (
              <div key={article.id} className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:scale-102 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{article.image}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {article.featured && (
                        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs rounded-full">FEATURED</span>
                      )}
                      <span className="text-sm opacity-70">{article.date}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-2">{article.title}</h4>
                    <p className="text-gray-300 mb-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm opacity-70">
                        <span>By {article.author}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
                        Read More →
                      </button>
                  </div>
      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">📧 Stay Updated</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get the latest insights on revolutionary technologies delivered to your inbox
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Subscribe
              </button>
      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Dive Deeper?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive library of articles covering every aspect of revolutionary technology
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Browse All Articles
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors font-semibold text-lg">
              Submit Your Research
    </div>
  );
};
export default ComprehensiveTechBlog2027;
