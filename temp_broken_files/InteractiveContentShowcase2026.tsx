import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Network, 
  Cpu, 
  Rocket, 
  Globe,
  ArrowRight,
  Star,
  Search,
  Filter,
  Grid,
  List,
  Heart,
  Bookmark,
  Share2
} from 'lucide-react';
const InteractiveContentShowcase2026 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const categories = [
    { id: 'all', name: 'All Categories', count: 60 },
    { id: 'synthetic-intelligence', name: 'Synthetic Intelligence', count: 15 },
    { id: 'quantum-computing', name: 'Quantum Computing', count: 12 },
    { id: 'consciousness-tech', name: 'Consciousness Technology', count: 8 },
    { id: 'space-ai', name: 'Space AI', count: 6 }
  ];
  const content = [
    {
      id: 51,
      title: "Synthetic Intelligence 2026: Beyond Artificial Intelligence",
      excerpt: "The next evolution of AI that combines consciousness, creativity, and emotional intelligence in ways never seen before.",
      author: "Dr. Elena Rodriguez",
      publishDate: "2026-01-25",
      readTime: "14 min read",
      category: "synthetic-intelligence",
      tags: ["Synthetic Intelligence", "Consciousness", "Creativity"],
      imageUrl: "/images/blog/synthetic-intelligence-2026.jpg",
      slug: "synthetic-intelligence-2026-beyond-artificial-intelligence",
      icon: Brain,
      color: "from-purple-600 to-pink-600",
      views: 12500,
      likes: 890
    },
    {
      id: 52,
      title: "Quantum Neural Fusion: The Future of Computing",
      excerpt: "Revolutionary technology that combines quantum computing with neural networks to create exponentially more powerful AI systems.",
      author: "Dr. Marcus Chen",
      publishDate: "2026-01-26",
      readTime: "16 min read",
      category: "quantum-computing",
      tags: ["Quantum Neural", "Fusion Computing", "AI Breakthrough"],
      imageUrl: "/images/blog/quantum-neural-fusion-2026.jpg",
      slug: "quantum-neural-fusion-future-computing",
      icon: Zap,
      color: "from-blue-600 to-cyan-600",
      views: 9800,
      likes: 756
    },
    {
      id: 53,
      title: "Interdimensional Data Networks: Computing Across Realities",
      excerpt: "Revolutionary networking technology that enables data transmission and processing across multiple dimensions and parallel universes.",
      author: "Dr. Sarah Kim",
      publishDate: "2026-01-27",
      readTime: "18 min read",
      category: "consciousness-tech",
      tags: ["Interdimensional", "Data Networks", "Parallel Universes"],
      imageUrl: "/images/blog/interdimensional-data-networks-2026.jpg",
      slug: "interdimensional-data-networks-computing-realities",
      icon: Network,
      color: "from-green-600 to-emerald-600",
      views: 11200,
      likes: 923
    }
  ];
  const filteredContent = content.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Interactive Content
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Showcase 2026
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover, filter, and interact with the most groundbreaking technologies and innovations.
          </p>
        </div>
        {/* Search and Filters */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, authors, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
            <div className="flex bg-slate-700 rounded-lg p-1">
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
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
          : 'space-y-6'
        }>
          {filteredContent.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
                <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${post.color}`}>
                      <post.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm font-semibold">4.9</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-purple-400 text-sm font-semibold capitalize">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                    <span>{post.author}</span>
                    <span>{formatNumber(post.views)} views</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-full bg-slate-700 text-gray-400 hover:bg-slate-600 hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-full bg-slate-700 text-gray-400 hover:bg-slate-600 hover:text-yellow-500 transition-colors">
                        <Bookmark className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-full bg-slate-700 text-gray-400 hover:bg-slate-600 hover:text-white transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default InteractiveContentShowcase2026;
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-2xl p-12 mb-12 text-white">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Interactive Technology Showcase 2026
        </h2>
        <p className="text-2xl opacity-90 max-w-4xl mx-auto">
          Explore our revolutionary technologies through interactive demonstrations and detailed insights
        </p>
      </div>
      {/* Active Content Display */}
      <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-6xl">{contentTabs[activeTab as keyof typeof contentTabs].icon}</span>
              <div>
                <h3 className="text-3xl font-bold text-white">
                  {contentTabs[activeTab as keyof typeof contentTabs].content.title}
                </h3>
                <div className={`w-16 h-1 bg-gradient-to-r ${contentTabs[activeTab as keyof typeof contentTabs].color} rounded-full mt-2`}></div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
        <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
          Join us in this revolutionary journey and be part of the most significant 
          technological advancement in human history.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/pages/RevolutionaryTechBreakthrough2026" 
            className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg"
          >
            🌟 Experience All Technologies →
          </a>
          <a 
            href="/pages/UltimateTechRevolution2026" 
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg"
          >
            🚀 Ultimate Revolution →
          </a>
        </div>
