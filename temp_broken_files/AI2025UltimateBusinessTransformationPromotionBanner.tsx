import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AI2025UltimateBusinessTransformationPromotionBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium">🚀 NEW CONTENT</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI 2025 Ultimate Business Transformation Guide
            </h2>
            <p className="text-lg opacity-90 mb-6 leading-relaxed">
              Discover the revolutionary AI technologies and strategies that will transform your business in 2025. 
              Comprehensive guide to AI implementationROI optimizationand competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/ai-2025-ultimate-business-transformation"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read the Complete Guide
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
              >
                Get Expert Consultation
              </a>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4">What 'You', 'll Learn:</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>12-month AI transformation roadmap</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Proven strategies for 340% ROI increase</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Autonomous operations implementation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Real-time optimization techniques</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Predictive intelligence deployment</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Case studies from successful transformations</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white border-opacity-20">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">340%</div>
                  <div className="text-xs opacity-80">ROI Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">60%</div>
                  <div className="text-xs opacity-80">Cost Reduction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs opacity-80">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateBusinessTransformationPromotionBanner;