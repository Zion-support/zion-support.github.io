import React, { useState, useEffect } from 'react';

const TrendingContentSection2027: React.FC = () => {
  const [currentTrend, setCurrentTrend] = useState(0);

  const trendingContent = [
    {
      title: "Ultimate Tech Revolution 2027",
      description: "The most advanced technology revolution reshaping humanity's future",
      icon: "🚀",
      color: "from-yellow-400 to-orange-500",
      views: "2.5M",
      trend: "+150%",
      category: "Technology",
      link: "/pages/UltimateTechRevolution2027"
    },
    {
      title: "Conscious AI Revolution",
      description: "Truly conscious artificial intelligence that thinks, feels, and creates",
      icon: "🧠",
      color: "from-cyan-400 to-blue-500",
      views: "1.8M",
      trend: "+200%",
      category: "AI",
      link: "/pages/ConsciousAIRevolution2027"
    },
    {
      title: "Quantum Consciousness",
      description: "The ultimate fusion of quantum mechanics and human consciousness",
      icon: "⚛️",
      color: "from-purple-400 to-pink-500",
      views: "1.2M",
      trend: "+300%",
      category: "Quantum",
      link: "/pages/QuantumConsciousnessRevolution2027"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrend((prev) => (prev + 1) % trendingContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-3xl p-12 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-bounce">
            🔥 TRENDING NOW • JANUARY 2027
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Most Popular Technology Content
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Discover what's capturing the world's attention in revolutionary technology
          </p>
        </div>

        {/* Trending Content Carousel */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="text-6xl">{trendingContent[currentTrend].icon}</div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-xs font-semibold">
                      #{currentTrend + 1} TRENDING
                    </span>
                    <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-semibold">
                      {trendingContent[currentTrend].category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{trendingContent[currentTrend].title}</h3>
                  <p className="text-lg opacity-90">{trendingContent[currentTrend].description}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-yellow-400 mb-1">{trendingContent[currentTrend].views}</div>
                <div className="text-sm opacity-90">views</div>
                <div className="text-lg font-semibold text-green-400">{trendingContent[currentTrend].trend}</div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <a
                href={trendingContent[currentTrend].link}
                className={`inline-block bg-gradient-to-r ${trendingContent[currentTrend].color} text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300`}
              >
                Explore Trending Content →
              </a>
            </div>
          </div>
        </div>

        {/* All Trending Items */}
        <div className="grid md:grid-cols-3 gap-8">
          {trendingContent.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                index === currentTrend ? 'ring-2 ring-yellow-400' : ''
              }`}
              onClick={() => setCurrentTrend(index)}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">{item.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-xs font-semibold">
                      #{index + 1}
                    </span>
                    <span className="px-2 py-1 bg-white/20 text-white rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                </div>
              </div>
              <p className="text-sm opacity-90 mb-4">{item.description}</p>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-yellow-400">{item.views}</div>
                <div className="text-sm font-semibold text-green-400">{item.trend}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Real-time Stats */}
        <div className="mt-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-center mb-8">Real-time Engagement</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">5.2M</div>
              <div className="text-lg opacity-90">Total Views</div>
              <div className="text-sm text-green-400">+25% this week</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">98.7%</div>
              <div className="text-lg opacity-90">Engagement Rate</div>
              <div className="text-sm text-green-400">+15% this week</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">47K</div>
              <div className="text-lg opacity-90">Active Users</div>
              <div className="text-sm text-green-400">+30% this week</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">∞</div>
              <div className="text-lg opacity-90">Future Potential</div>
              <div className="text-sm text-green-400">Unlimited growth</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingContentSection2027;