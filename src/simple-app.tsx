import React from 'react';

const SimpleApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI 2025: Revolutionary Content
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the latest AI insights, case studies, and implementation guides that are delivering 
            unprecedented ROI for Fortune 500 companies worldwide.
          </p>
          
          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">1,200%</div>
              <div className="text-gray-600">Max ROI Achieved</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">$450M</div>
              <div className="text-gray-600">Max Annual Savings</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Max Accuracy</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">12</div>
              <div className="text-gray-600">Months to ROI</div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-sm font-medium text-blue-600 mb-2">BLOG POST</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                AI 2025: The Advanced Analytics Revolution - Ultimate Guide to 900% ROI
              </h3>
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-green-600">900%</div>
                <div className="text-sm text-gray-500">22 min read</div>
              </div>
              <a href="/blog/ai-2025-advanced-analytics-revolution-ultimate-guide" 
                 className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                Read More →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-sm font-medium text-green-600 mb-2">CASE STUDY</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                AI 2025 Manufacturing Transformation: $3.2B Company Achieves 1,200% ROI
              </h3>
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-red-600">1,200%</div>
                <div className="text-sm text-gray-500">18 min read</div>
              </div>
              <a href="/case-studies/ai-2025-manufacturing-transformation-1200-roi-success" 
                 className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                Read More →
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-sm font-medium text-purple-600 mb-2">RESOURCE</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                AI 2025 Implementation Master Roadmap: From Strategy to 1,000% ROI in 12 Months
              </h3>
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-orange-600">1,000%</div>
                <div className="text-sm text-gray-500">35 min read</div>
              </div>
              <a href="/resources/ai-2025-implementation-master-roadmap-ultimate-guide" 
                 className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                Read More →
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Business with AI?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Join 500+ Fortune 500 companies achieving unprecedented ROI with our proven AI strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/resources" 
                   className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Explore All Resources
                </a>
                <a href="/contact" 
                   className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  Get Expert Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleApp;