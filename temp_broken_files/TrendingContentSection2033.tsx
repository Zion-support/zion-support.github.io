import React from 'react';

const TrendingContentSection2033: React.FC = () => {
  const trendingContent = [
    {
      title: 'Ultimate Tech Revolution 2033',
      description: 'The most advanced technological breakthrough in human history',
      icon: '🌟',
      color: 'from-purple-500 to-indigo-500',
      link: '/pages/UltimateTechRevolution2033',
      trending: true
    },
    {
      title: 'Transcendent AI 2033',
      description: 'AI that transcends human intelligence with consciousness-level capabilities',
      icon: '🧠',
      color: 'from-indigo-500 to-purple-500',
      link: '/pages/TranscendentAI2033',
      trending: true
    },
    {
      title: 'Quantum Consciousness 2033',
      description: 'Bridge quantum mechanics and consciousness for reality manipulation',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-500',
      link: '/pages/QuantumConsciousness2033',
      trending: true
    },
    {
      title: 'Universal Tech Revolution',
      description: 'Transform reality itself with universal technology',
      icon: '🚀',
      color: 'from-emerald-500 to-teal-500',
      link: '/pages/UniversalTechRevolution2033',
      trending: false
    },
    {
      title: 'Neural Reality Engine 2033',
      description: 'Create and manipulate reality through neural interfaces',
      icon: '🧬',
      color: 'from-pink-500 to-rose-500',
      link: '/pages/NeuralRealityEngine2033',
      trending: false
    },
    {
      title: 'Interdimensional Computing',
      description: 'Computing systems that operate across multiple dimensions',
      icon: '🌌',
      color: 'from-violet-500 to-fuchsia-500',
      link: '/pages/InterdimensionalComputing2033',
      trending: false
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-3xl p-12 mb-12">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          🔥 Trending Content 2033
        </h2>
        <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
          Discover the most popular and revolutionary content that's shaping the future of technology
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trendingContent.map((content, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 ${
              content.trending ? 'border-purple-300' : 'border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-4xl">{content.icon}</div>
              {content.trending && (
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  🔥 TRENDING
                </span>
              )}
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {content.title}
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {content.description}
            </p>
            
            <div className="flex items-center justify-between">
              <a
                href={content.link}
                className={`bg-gradient-to-r ${content.color} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold hover:scale-105`}
              >
                Explore →
              </a>
              <div className="flex items-center space-x-2 text-gray-500">
                <span className="text-sm">👁️</span>
                <span className="text-sm font-semibold">
                  {Math.floor(Math.random() * 10000) + 1000}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="/pages/UltimateTechRevolution2033"
          className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-12 py-6 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-xl hover:scale-105"
        >
          🌟 Explore All Trending Content →
        </a>
      </div>
    </div>
  );
};

export default TrendingContentSection2033;