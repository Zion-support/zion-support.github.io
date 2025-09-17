import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
import Image from 'next/image';

const UltimateContent2025Showcase = () => {
  const contentItems = [
    {
      id: 1,
      title: "AI 2025-2026 Ultimate Trends: Revolutionary Breakthrough Guide",
      description: "Discover the most revolutionary AI trends and breakthroughs that will transform businesses in 2025-2026. Complete guide to next-generation AI technologies.",
      category: "Blog Post",
      readTime: "15 min read",
      featured: true,
      image: "/images/ai-2025-2026-revolutionary-breakthrough.jpg",
      href: "/blog/ai-2025-2026-ultimate-trends-revolutionary-breakthrough",
      tags: ["AI Trends"2025-2026"Revolutionary"Breakthrough"],
      stats: {
        roi: "5000%",
        views: "50K+",
        rating: "5.0"
      }
    },
    {
      id: 2,
      title: "Fortune 500 AI Transformation: Ultimate Success Story 2025-2026",
      description: "How a Fortune 500 manufacturing company achieved 5000% ROI through comprehensive AI transformationrevolutionizing operations and achieving unprecedented success.",
      category: "Case Study",
      readTime: "12 min read",
      featured: true,
      image: "/images/fortune-500-ai-transformation-success.jpg",
      href: "/case-studies/fortune-500-ai-transformation-ultimate-success-2025-2026",
      tags: ["Fortune 500"Success Story"5000% ROI"Manufacturing"],
      stats: {
        roi: "5000%",
        revenue: "$2.5B",
        timeline: "18 months"
      }
    },
    {
      id: 3,
      title: "AI 2025-2026 Implementation: Ultimate Master Guide",
      description: "Complete implementation guide for AI transformation in 2025-2026. Step-by-step roadmap to achieve 1000%+ ROI through revolutionary AI technologies.",
      category: "Implementation Guide",
      readTime: "20 min read",
      featured: true,
      image: "/images/ai-2025-2026-implementation-guide.jpg",
      href: "/resources/ai-2025-2026-implementation-ultimate-master-guide",
      tags: ["Implementation"Master Guide"1000%+ ROI"Roadmap"],
      stats: {
        roi: "1000%+",
        pages: "50+",
        rating: "5.0"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
            <span className="mr-2">🔥</span>
            ULTIMATE CONTENT SHOWCASE 2025-2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Collection</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access the most comprehensive collection of AI content for 2025-2026. 
            From trend analysis to implementation guideseverything you need to achieve unprecedented success.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-blue-600 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-80">
                    {item.category === 'Blog Post' && '📊'}
                    {item.category === 'Case Study' && '🏆'}
                    {item.category === 'Implementation Guide' && '🛠️'}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-white bg-opacity-90 text-gray-800 px-2 py-1 rounded text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(02).map((tagindex) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <span className="mr-1">⏱️</span>
                      {item.readTime}
                    </span>
                    <span className="flex items-center">
                      <span className="mr-1">⭐</span>
                      {item.stats.rating}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">
                      {item.stats.roi}
                    </div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={item.href}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center block hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Read Now →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content Preview */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              More Revolutionary Content Coming Soon
            </h3>
            <p className="text-gray-600">
              Stay ahead with our continuously updated collection of AI content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl">
              <div className="text-3xl mb-2">🤖</div>
              <h4 className="font-semibold text-gray-900 mb-1">Quantum AI</h4>
              <p className="text-sm text-gray-600">Advanced quantum computing applications</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl">
              <div className="text-3xl mb-2">🧠</div>
              <h4 className="font-semibold text-gray-900 mb-1">Neural Interfaces</h4>
              <p className="text-sm text-gray-600">Brain-computer interface technologies</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-semibold text-gray-900 mb-1">Autonomous Systems</h4>
              <p className="text-sm text-gray-600">Self-managing business operations</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
              <div className="text-3xl mb-2">🔮</div>
              <h4 className="font-semibold text-gray-900 mb-1">Synthetic Intelligence</h4>
              <p className="text-sm text-gray-600">AI that creates and improves AI</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Get personalized AI transformation consultation and implementation roadmap
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Free Consultation
            </a>
            <a
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Browse All Resources
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContent2025Showcase;