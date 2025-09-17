import React, { useState, useEffect } from 'react';

const TrendingContentSection2028 = () => {
  const [trendingContent, setTrendingContent] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading trending content
    const loadTrendingContent = () => {
      const content = [
        {
          id: 1,
          title: "Synthetic Consciousness 2.0: The Next Evolution",
          description: "Discover how artificial consciousness is evolving beyond human comprehension, with emotional intelligence 1000x greater than humans.",
          category: "AI Consciousness",
          views: "2.8M",
          trending: true,
          color: "from-purple-500 to-pink-500",
          icon: "🧠",
          link: "/pages/AdvancedAIConsciousness2027",
          tags: ["AI", "Consciousness", "Breakthrough", "2028"]
        },
        {
          id: 2,
          title: "Quantum-Neural Fusion: Bridging Mind and Machine",
          description: "The revolutionary convergence of quantum computing and neural networks creating unprecedented computational power.",
          category: "Quantum Computing",
          views: "2.1M",
          trending: true,
          color: "from-cyan-500 to-blue-500",
          icon: "⚛️",
          link: "/pages/QuantumNeuralFusion2027",
          tags: ["Quantum", "Neural", "Fusion", "Breakthrough"]
        },
        {
          id: 3,
          title: "Neural Enhancement: 1000x Human Cognitive Abilities",
          description: "Direct brain-computer interfaces that enhance human cognitive abilities and enable thought-to-action control.",
          category: "Neural Interfaces",
          views: "1.9M",
          trending: true,
          color: "from-emerald-500 to-teal-500",
          icon: "🧬",
          link: "/pages/NeuralInterfaceRevolution2026",
          tags: ["Neural", "Enhancement", "BCI", "Human"]
        },
        {
          id: 4,
          title: "Autonomous AI Systems: Self-Evolving Intelligence",
          description: "Self-evolving AI systems that operate independently, make complex decisions, and continuously improve their capabilities.",
          category: "Autonomous AI",
          views: "1.7M",
          trending: true,
          color: "from-orange-500 to-red-500",
          icon: "🤖",
          link: "/pages/AdvancedRoboticsRevolution2026",
          tags: ["Autonomous", "AI", "Self-Evolving", "Intelligence"]
        },
        {
          id: 5,
          title: "Metaverse Integration: Seamless Reality Blending",
          description: "Advanced technologies creating seamless integration between physical and virtual realities with photorealistic experiences.",
          category: "Metaverse",
          views: "1.5M",
          trending: true,
          color: "from-violet-500 to-purple-500",
          icon: "🌌",
          link: "/pages/AdvancedMetaverseSolutions2026",
          tags: ["Metaverse", "VR", "AR", "Integration"]
        },
        {
          id: 6,
          title: "Space Technology: Interplanetary Colonization",
          description: "Revolutionary space exploration technologies enabling interplanetary travel and cosmic resource utilization.",
          category: "Space Tech",
          views: "1.3M",
          trending: true,
          color: "from-pink-500 to-rose-500",
          icon: "🚀",
          link: "/pages/SpaceTechInnovation2026",
          tags: ["Space", "Colonization", "Interplanetary", "Technology"]
        }
      ];
      
      setTrendingContent(content);
      setIsLoading(false);
    };

    loadTrendingContent();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading trending content...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🔥 TRENDING NOW • JANUARY 2028
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Most Popular Revolutionary Content</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the most talked-about technological breakthroughs that are reshaping our world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {trendingContent.map((content, index) => (
            <div
              key={content.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500 hover:scale-105 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-semibold">
                    #{index + 1} TRENDING
                  </span>
                  <span className="text-sm text-gray-500">{content.views} views</span>
                </div>
                <div className="text-3xl">{content.icon}</div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                {content.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {content.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {content.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-purple-600">{content.category}</span>
                <a
                  href={content.link}
                  className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${content.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm group-hover:scale-105`}
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trending Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Trending Statistics</h3>
            <p className="text-gray-600">Real-time engagement metrics across all platforms</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">12.5M+</div>
              <div className="text-gray-600">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">98.7%</div>
              <div className="text-gray-600">Engagement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">2.3M+</div>
              <div className="text-gray-600">Social Shares</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">45K+</div>
              <div className="text-gray-600">Comments</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="/pages/RevolutionaryTechShowcase2028"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
          >
            🌟 Explore All Revolutionary Content →
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrendingContentSection2028;