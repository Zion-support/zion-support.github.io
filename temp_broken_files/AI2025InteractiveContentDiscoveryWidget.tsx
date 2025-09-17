"use client";
import React{ useState } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function AI2025InteractiveContentDiscoveryWidget() {
  const [selectedCategorysetSelectedCategory] = useState('all');
  const [selectedROIsetSelectedROI] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: "AI 2025 Revolutionary Breakthrough Announcement",
      type: "blog",
      category: "breakthrough",
      roi: "2500-5000%",
      description: "Discover the revolutionary AI breakthrough transforming businesses worldwide",
      url: "/blog/ai-2025-revolutionary-breakthrough-announcement",
      featured: true,
      tags: ["BREAKTHROUGH"NEW"]
    },
    {
      id: 2,
      title: "Global Transformation Case Study - 10,000% ROI",
      type: "case-study",
      category: "success-story",
      roi: "10000%",
      description: "How a Fortune 500 company achieved unprecedented ROI",
      url: "/case-studies/ai-2025-global-transformation-breakthrough",
      featured: true,
      tags: ["SUCCESS STORY"ROI"]
    },
    {
      id: 3,
      title: "AI 2025 Revolutionary Implementation Guide",
      type: "resource",
      category: "guide",
      roi: "2500-5000%",
      description: "Complete blueprint for achieving breakthrough results",
      url: "/resources/ai-2025-revolutionary-implementation-guide",
      featured: true,
      tags: ["GUIDE"ESSENTIAL"]
    },
    {
      id: 4,
      title: "Fortune 500 Transformation Success",
      type: "case-study",
      category: "success-story",
      roi: "1500%",
      description: "Enterprise transformation delivering massive ROI",
      url: "/case-studies/ai-2025-fortune-500-transformation-breakthrough",
      featured: false,
      tags: ["ENTERPRISE"]
    },
    {
      id: 5,
      title: "AI 2025 Ultimate Trends & Predictions",
      type: "blog",
      category: "insights",
      roi: "2500%",
      description: "Comprehensive analysis of AI trends and future predictions",
      url: "/blog/ai-2025-ultimate-trends-predictions",
      featured: false,
      tags: ["TRENDS"]
    },
    {
      id: 6,
      title: "Global Retail Transformation Success",
      type: "case-study",
      category: "success-story",
      roi: "600%",
      description: "Retail automation delivering significant ROI",
      url: "/case-studies/ai-2025-global-retail-transformation-success",
      featured: false,
      tags: ["RETAIL"]
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const roiMatch = selectedROI === 'all' || item.roi.includes(selectedROI.replace('%', '));
    return categoryMatch && roiMatch;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'breakthrough': return 'from-red-500 to-pink-500';
      case 'success-story': return 'from-green-500 to-emerald-500';
      case 'guide': return 'from-purple-500 to-indigo-500';
      case 'insights': return 'from-blue-500 to-cyan-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const getROIColor = (roi: string) => {
    if (roi.includes('10000')) return 'text-green-600 bg-green-50 border-green-200';
    if (roi.includes('5000')) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (roi.includes('2500')) return 'text-purple-600 bg-purple-50 border-purple-200';
    return 'text-gray-600 bg-gray-50 border-gray-200';
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-6 animate-pulse">
            🔍 AI-POWERED CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Your Perfect AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our intelligent content discovery system to find the most relevant AI insights
            case studiesand implementation guides for your specific needs and ROI goals.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-6 items-center">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Content Type</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Content</option>
                <option value="breakthrough">Breakthrough Announcements</option>
                <option value="success-story">Success Stories</option>
                <option value="guide">Implementation Guides</option>
                <option value="insights">Insights & Trends</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Expected ROI</label>
              <select 
                value={selectedROI} 
                onChange={(e) => setSelectedROI(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">Any ROI</option>
                <option value="600%">600%+ ROI</option>
                <option value="1500%">1500%+ ROI</option>
                <option value="2500%">2500%+ ROI</option>
                <option value="5000%">5000%+ ROI</option>
                <option value="10000%">10000%+ ROI</option>
              </select>
            </div>
            <div className="ml-auto">
              <button 
                onClick={() => { setSelectedCategory('all'); setSelectedROI('all'); }}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Featured Badge */}
              {item.featured && (
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 text-center">
                  ⭐ FEATURED CONTENT
                </div>
              )}
              
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tagindex) => (
                    <span key={index} className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Category Badge */}
                <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${getCategoryColor(item.category)} text-white text-xs font-semibold rounded-full mb-4`}>
                  {item.type === 'blog' ? '📝 Blog' : item.type === 'case-study' ? '📊 Case Study' : '📚 Resource'}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* ROI Badge */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-4 border ${getROIColor(item.roi)}`}>
                  💰 {item.roi} ROI
                </div>

                {/* CTA Button */}
                <a 
                  href={item.url}
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  {item.type === 'blog' ? 'Read Article' : item.type === 'case-study' ? 'View Case Study' : 'Access Guide'}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Content Found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters to find more content.</p>
            <button 
              onClick={() => { setSelectedCategory('all'); setSelectedROI('all'); }}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Show All Content
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-purple-800 mb-4">'Can', 't Find What 'You', 're Looking For?</h3>
            <p className="text-purple-700 mb-6">
              Our AI experts can help you find the perfect content for your specific needs and goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Get Personalized Recommendations
              </a>
              <a 
                href="/blog"
                className="bg-white border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Browse All Content
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}