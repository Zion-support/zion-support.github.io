import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AI2030ContentPromotionBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 AI 2030 REVOLUTION</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Next-Generation Autonomous Enterprise
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the revolutionary AI technologies that will transform enterprises by 2030. 
            Explore autonomous decision-makingself-healing infrastructureand predictive business intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-4">Autonomous Operations</h3>
            <p className="text-gray-300 mb-6">
              Self-managing infrastructure with predictive maintenance and dynamic resource allocation.
            </p>
            <div className="text-2xl font-bold text-green-400">99.9% Uptime</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-4">Synthetic Intelligence</h3>
            <p className="text-gray-300 mb-6">
              AI systems that create and modify their own algorithms for continuous improvement.
            </p>
            <div className="text-2xl font-bold text-blue-400">Self-Evolving</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-4">Neural Interfaces</h3>
            <p className="text-gray-300 mb-6">
              Direct brain-computer interfaces for seamless human-AI collaboration.
            </p>
            <div className="text-2xl font-bold text-purple-400">Thought Control</div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 mb-8">
            <h3 className="text-2xl font-bold mb-4">Expected Business Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-sm text-gray-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">500%</div>
                <div className="text-sm text-gray-300">Decision Speed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">1000%</div>
                <div className="text-sm text-gray-300">ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-300">System Uptime</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/blog/ai-2030-next-generation-autonomous-enterprise-revolution"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Read Full Guide
            </a>
            <a
              href="/case-studies/ai-2030-autonomous-enterprise-transformation-10000-roi-success-story"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors text-lg"
            >
              View Case Study
            </a>
            <a
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors text-lg"
            >
              Start Transformation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2030ContentPromotionBanner;