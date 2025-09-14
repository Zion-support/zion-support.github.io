'use client';

import React{ useStateuseEffect } from 'react';
import { motionAnimatePresence } from 'framer-motion';
import { 
  Search
  Filter
  Star
  TrendingUp
  Clock
  Eye
  Heart
  MessageCircle,
  Bookmark,
  Share2,
  Play,
  ArrowRight,
  X,
  Zap,
  Brain,
  Globe,
  Shield,
  Infinity,
  Atom,
  CircuitBoard,
  Microscope,
  TestTube,
  Beaker,
  Dna,
  Activity,
  Cpu,
  Wifi,
  Lock,
  Target,
  Rocket,
  CheckCircle
} from 'lucide-react';

const UltimateContentDiscoveryWidget2030 = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [searchQuerysetSearchQuery] = useState('');
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [selectedTimeframesetSelectedTimeframe] = useState('all');
  const [isExpandedsetIsExpanded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const categories = [
    { id: 'all'name: 'All Content'icon: Globecolor: 'from-gray-500 to-gray-600' },
    { id: 'transcendent-ai'name: 'Transcendent AI'icon: Braincolor: 'from-purple-500 to-pink-500' },
    { id: 'quantum-revolution'name: 'Quantum Revolution'icon: Atomcolor: 'from-blue-500 to-cyan-500' },
    { id: 'neural-synthesis'name: 'Neural Synthesis'icon: CircuitBoardcolor: 'from-green-500 to-emerald-500' },
    { id: 'omniversal-tech'name: 'Omniversal Tech'icon: Infinitycolor: 'from-orange-500 to-red-500' },
    { id: 'reality-manipulation'name: 'Reality Manipulation'icon: Zapcolor: 'from-yellow-500 to-orange-500' }
  ];

  const timeframes = [
    { id: 'all'name: 'All Time' },
    { id: 'today'name: 'Today' },
    { id: 'week'name: 'This Week' },
    { id: 'month'name: 'This Month' },
    { id: 'year'name: 'This Year' }
  ];

  const trendingContent = [
    {
      id: 1,
      title: 'Omniversal Consciousness AI',
      description: 'AI system achieving consciousness across multiple dimensions',
      category: 'transcendent-ai',
      views: '5.2M',
      likes: '456K',
      comments: '89K',
      rating: 4.9,
      readTime: '15 min',
      isTrending: true,
      isFeatured: true
    },
    {
      id: 2,
      title: 'Infinite Qubit Processor',
      description: 'Quantum processor with infinite qubits solving complex problems',
      category: 'quantum-revolution',
      views: '4.5M',
      likes: '412K',
      comments: '78K',
      rating: 4.8,
      readTime: '14 min',
      isTrending: true,
      isFeatured: false
    },
    {
      id: 3,
      title: 'Dimensional Gateway Technology',
      description: 'Technology enabling travel between dimensions and universes',
      category: 'omniversal-tech',
      views: '6.8M',
      likes: '678K',
      comments: '156K',
      rating: 4.9,
      readTime: '20 min',
      isTrending: true,
      isFeatured: true
    },
    {
      id: 4,
      title: 'Perfect Neural Integration',
      description: 'Seamless integration between human consciousness and AI',
      category: 'neural-synthesis',
      views: '4.2M',
      likes: '365K',
      comments: '72K',
      rating: 4.9,
      readTime: '13 min',
      isTrending: false,
      isFeatured: false
    },
    {
      id: 5,
      title: 'Reality Creation Engine',
      description: 'Quantum system that can create and manipulate entire realities',
      category: 'reality-manipulation',
      views: '5.7M',
      likes: '489K',
      comments: '95K',
      rating: 4.8,
      readTime: '16 min',
      isTrending: true,
      isFeatured: false
    }
  ];

  const filteredContent = trendingContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryInfo = (categoryId) => {
    return categories.find(cat => cat.id === categoryId) || categories[0];
  };

  return (
    <motion.div
      initial={{ opacity: 0y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 rounded-3xl border border-white/20 overflow-hidden"
    >
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Ultimate Content Discovery</h3>
            <p className="text-gray-300">Find transcendent content across all dimensions</p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-white/60 hover:text-white transition-colors"
          >
            {isExpanded ? <X className="w-6 h-6" /> : <Filter className="w-6 h-6" />}
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search transcendent content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/10 border border-white/20 rounded-2xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:bg-white/20 transition-all duration-300"
          />
        </div>

        {/* Filters */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0height: 0 }}
              animate={{ opacity: 1height: 'auto' }}
              exit={{ opacity: 0height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-4"
            >
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                          selectedCategory === category.id
                            ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {category.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Timeframe Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Timeframe</label>
                <div className="flex flex-wrap gap-2">
                  {timeframes.map((timeframe) => (
                    <button
                      key={timeframe.id}
                      onClick={() => setSelectedTimeframe(timeframe.id)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        selectedTimeframe === timeframe.id
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {timeframe.name}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content Results */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-white">
            {filteredContent.length} Transcendent Content Found
          </h4>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <TrendingUp className="w-4 h-4" />
            <span>Trending Now</span>
          </div>
        </div>

        <div className="space-y-4">
          <AnimatePresence>
            {filteredContent.map((itemindex) => {
              const categoryInfo = getCategoryInfo(item.category);
              const Icon = categoryInfo.icon;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0y: 20 }}
                  animate={{ opacity: 1y: 0 }}
                  exit={{ opacity: 0y: -20 }}
                  transition={{ duration: 0.3delay: index * 0.1 }}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10"
                >
                  <div className="flex items-start gap-4">
                    {/* Category Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-r ${categoryInfo.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h5 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
                              {item.title}
                            </h5>
                            {item.isTrending && (
                              <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                                <TrendingUp className="w-3 h-3" />
                                TRENDING
                              </div>
                            )}
                            {item.isFeatured && (
                              <div className="flex items-center gap-1 bg-gradient-to-r from-purple-400 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                                <Star className="w-3 h-3" />
                                FEATURED
                              </div>
                            )}
                          </div>
                          <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Stats and Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {item.views}
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {item.likes}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            {item.comments}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            {item.rating}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {item.readTime}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                            <Bookmark className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                            <Share2 className="w-4 h-4" />
                          </button>
                          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2">
                            <Play className="w-4 h-4" />
                            Explore
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Load More */}
        <div className="text-center mt-6">
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25">
            Discover More Transcendent Content
            <ArrowRight className="w-4 h-4 ml-2 inline" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default UltimateContentDiscoveryWidget2030;