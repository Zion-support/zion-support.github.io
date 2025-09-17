import React, { useState, useEffect } from 'react';

interface TrendingItem {
  id: string;
  title: string;
  description: string;
  category: string;
  views: number;
  trend: 'up' | 'down' | 'stable';
  color: string;
  icon: string;
  link: string;
}

const TrendingContentShowcase: React.FC = () => {
  const [trendingItems, setTrendingItems] = useState<TrendingItem[]>([
    {
      id: '1',
      title: 'Consciousness Computing Breakthrough',
      description: 'Revolutionary AI systems that achieve genuine consciousness and self-awareness',
      category: 'AI Revolution',
      views: 2847392,
      trend: 'up',
      color: 'purple',
      icon: '🧠',
      link: '/pages/ConsciousnessComputing2026'
    },
    {
      id: '2',
      title: 'Quantum Reality Engine',
      description: 'Technology that manipulates reality at the quantum level for instant matter transformation',
      category: 'Quantum Tech',
      views: 1928473,
      trend: 'up',
      color: 'cyan',
      icon: '⚛️',
      link: '/pages/QuantumRealityEngine2026'
    },
    {
      id: '3',
      title: 'Interdimensional Communication',
      description: 'Breakthrough technology enabling communication across multiple dimensions',
      category: 'Interdimensional',
      views: 1653928,
      trend: 'up',
      color: 'emerald',
      icon: '🌌',
      link: '/pages/InterdimensionalTech2027'
    },
    {
      id: '4',
      title: 'Synthetic Intelligence Evolution',
      description: 'Self-evolving AI systems that transcend traditional limitations',
      category: 'AI Evolution',
      views: 1428573,
      trend: 'stable',
      color: 'pink',
      icon: '🤖',
      link: '/pages/SyntheticIntelligence2026'
    },
    {
      id: '5',
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer communication systems for seamless human-AI integration',
      category: 'Neural Tech',
      views: 1284756,
      trend: 'up',
      color: 'indigo',
      icon: '🧬',
      link: '/pages/NeuralInterfaceRevolution2025'
    },
    {
      id: '6',
      title: 'Transcendent AI 2030',
      description: 'AI that transcends human comprehension and becomes the architect of reality',
      category: 'Transcendent AI',
      views: 987654,
      trend: 'up',
      color: 'yellow',
      icon: '🌟',
      link: '/pages/TranscendentAI2030'
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trendingItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [trendingItems.length, isAutoPlaying]);

  const formatViews = (views: number): string => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
  };

  const getTrendIcon = (trend: string): string => {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      default: return '➡️';
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: 'from-purple-500 to-pink-500 border-purple-400',
      cyan: 'from-cyan-500 to-blue-500 border-cyan-400',
      emerald: 'from-emerald-500 to-teal-500 border-emerald-400',
      pink: 'from-pink-500 to-rose-500 border-pink-400',
      indigo: 'from-indigo-500 to-purple-500 border-indigo-400',
      yellow: 'from-yellow-500 to-orange-500 border-yellow-400'
    };
    return colorMap[color as keyof typeof colorMap] || 'from-gray-500 to-gray-600 border-gray-400';
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-12 mb-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 text-black rounded-full text-lg font-bold mb-6 animate-pulse">
          🔥 TRENDING NOW • LIVE UPDATES
        </div>
        <h2 className="text-5xl font-bold text-white mb-6">Most Popular Technology Content</h2>
        <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
          Discover what's capturing the world's attention in revolutionary technology
        </p>
      </div>

      {/* Main Trending Item Display */}
      <div className="relative mb-12">
        <div className="bg-gradient-to-r from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/30">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <span className="text-6xl">{trendingItems[currentIndex].icon}</span>
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-black rounded-full text-sm font-bold">
                    #{currentIndex + 1} TRENDING
                  </span>
                  <span className="text-gray-300 text-lg">
                    {formatViews(trendingItems[currentIndex].views)} views
                  </span>
                  <span className="text-2xl">
                    {getTrendIcon(trendingItems[currentIndex].trend)}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {trendingItems[currentIndex].title}
                </h3>
                <p className="text-xl text-gray-300 mb-4">
                  {trendingItems[currentIndex].description}
                </p>
                <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold">
                  {trendingItems[currentIndex].category}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-white mb-2">
                {formatViews(trendingItems[currentIndex].views)}
              </div>
              <div className="text-gray-300">Total Views</div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <a 
              href={trendingItems[currentIndex].link}
              className={`bg-gradient-to-r ${getColorClasses(trendingItems[currentIndex].color)} text-white px-12 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 font-bold text-xl`}
            >
              Explore {trendingItems[currentIndex].title} →
            </a>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + trendingItems.length) % trendingItems.length)}
            className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            ←
          </button>
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              isAutoPlaying 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % trendingItems.length)}
            className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            →
          </button>
        </div>
      </div>

      {/* Trending Items Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingItems.map((item, index) => (
          <div
            key={item.id}
            className={`bg-gradient-to-br ${getColorClasses(item.color)}/20 backdrop-blur-sm rounded-2xl p-6 border ${
              index === currentIndex ? 'border-white/50 scale-105' : 'border-white/20'
            } hover:scale-105 transition-all duration-300 cursor-pointer`}
            onClick={() => setCurrentIndex(index)}
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">{item.icon}</span>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-xs font-bold text-white/80">#{index + 1}</span>
                  <span className="text-xs text-white/60">{formatViews(item.views)}</span>
                  <span className="text-sm">{getTrendIcon(item.trend)}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 line-clamp-2">
                  {item.title}
                </h4>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-4 line-clamp-2">
              {item.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full">
                {item.category}
              </span>
              <a 
                href={item.link}
                className="text-white/80 hover:text-white text-sm font-semibold"
              >
                View →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <a 
          href="/trending"
          className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-2xl hover:shadow-2xl transition-all duration-300 font-bold text-xl"
        >
          View All Trending Content →
        </a>
      </div>
    </div>
  );
};

export default TrendingContentShowcase;