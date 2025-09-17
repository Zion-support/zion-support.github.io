import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AI2025ContentRevolutionBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 NEW CONTENT REVOLUTION</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            AI 2025 Content Revolution
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the latest insightscase studiesand breakthrough technologies 
            that are transforming businesses in 2025. Get exclusive access to our 
            comprehensive content library.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-4">Enterprise AI Transformation</h3>
            <p className="text-gray-300 mb-6">
              Learn how AI is revolutionizing enterprise operations with 340% ROI increases 
              and unprecedented automation capabilities.
            </p>
            <a 
              href="/blog/ai-2025-enterprise-transformation" 
              className="inline-flex items-center text-purple-300 hover:text-white font-semibold transition-colors"
            >
              Read Article →
            </a>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-4">Quantum Computing Applications</h3>
            <p className="text-gray-300 mb-6">
              Explore how quantum computing is solving previously impossible business 
              problems with exponential computational power.
            </p>
            <a 
              href="/blog/quantum-computing-business-applications-2025" 
              className="inline-flex items-center text-purple-300 hover:text-white font-semibold transition-colors"
            >
              Explore Now →
            </a>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🏭</div>
            <h3 className="text-xl font-bold mb-4">Manufacturing Success Story</h3>
            <p className="text-gray-300 mb-6">
              See how a global manufacturer achieved 340% efficiency increase using 
              AI automation solutions.
            </p>
            <a 
              href="/case-studies/ai-automation-manufacturing-success" 
              className="inline-flex items-center text-purple-300 hover:text-white font-semibold transition-colors"
            >
              View Case Study →
            </a>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Get Exclusive Access to Our Content Library</h3>
            <p className="text-lg text-gray-300 mb-6">
              Join thousands of business leaders who are transforming their organizations 
              with our cutting-edge insights and proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/blog"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore All Content
              </a>
              <a
                href="/case-studies"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025ContentRevolutionBanner;