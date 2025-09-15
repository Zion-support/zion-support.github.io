import React, { useState } from 'react';

const ComprehensiveTechInsights2026: React.FC = () => {
  const insights = [
    {
      id: 1,
      title: "Synthetic Intelligence: The Next Evolution",
      description: "How self-evolving AI systems are transcending human limitations and creating new forms of consciousness.",
      category: "AI & Machine Learning",
      readTime: "8 min read",
      author: "Dr. Sarah Chen",
      date: "January 20, 2026",
      image: "🧠",
      featured: true
    },
    {
      id: 2,
      title: "Quantum-Neural Fusion: Computing's Future",
      description: "The revolutionary convergence of quantum computing and neural networks creating unprecedented computational power.",
      category: "Quantum Computing",
      readTime: "6 min read",
      author: "Prof. Michael Rodriguez",
      date: "January 18, 2026",
      image: "⚛️",
      featured: true
    },
    {
      id: 3,
      title: "Biotech Revolution: Engineering Life",
      description: "Revolutionary breakthroughs in biotechnology enabling molecular-level life engineering.",
      category: "Biotechnology",
      readTime: "7 min read",
      author: "Dr. Emily Watson",
      date: "January 15, 2026",
      image: "🧬",
      featured: false
    },
    {
      id: 4,
      title: "Space Technology: Interplanetary Reality",
      description: "Advanced propulsion and habitat systems making human space colonization imminent.",
      category: "Space Technology",
      readTime: "9 min read",
      author: "Commander Alex Thompson",
      date: "January 12, 2026",
      image: "🚀",
      featured: false
    },
    {
      id: 5,
      title: "Advanced Robotics: Intelligent Machines",
      description: "AI-powered robots with complex reasoning, emotional intelligence, and autonomous decision-making.",
      category: "Robotics",
      readTime: "5 min read",
      author: "Dr. Lisa Park",
      date: "January 10, 2026",
      image: "🤖",
      featured: false
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'AI & Machine Learning', 'Quantum Computing', 'Biotechnology', 'Space Technology', 'Robotics'];

  const filteredInsights = selectedCategory === 'All' 
    ? insights 
    : insights.filter(insight => insight.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
              🔍 COMPREHENSIVE TECH INSIGHTS • 2026
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Comprehensive Tech Insights 2026
            </h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
              Deep dive into the most revolutionary technologies and insights that are shaping our future. 
              Expert analysis, breakthrough discoveries, and cutting-edge innovations.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-indigo-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Insights */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Insights</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredInsights.filter(insight => insight.featured).map((insight) => (
              <div key={insight.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-4xl">{insight.image}</span>
                    <div>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full font-semibold">
                        {insight.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{insight.title}</h3>
                  <p className="text-gray-600 mb-4">{insight.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{insight.author}</span>
                      <span>•</span>
                      <span>{insight.date}</span>
                      <span>•</span>
                      <span>{insight.readTime}</span>
                    </div>
                    <button className="text-indigo-600 hover:text-indigo-700 font-semibold">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Insights */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">All Insights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((insight) => (
              <div key={insight.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-3xl">{insight.image}</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-semibold">
                      {insight.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{insight.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{insight.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{insight.author}</span>
                    <span>{insight.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveTechInsights2026;