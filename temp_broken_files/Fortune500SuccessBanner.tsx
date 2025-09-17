import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const Fortune500SuccessBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium">🏆 SUCCESS STORY</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Fortune 500 Manufacturing Giant
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Achieves 340% ROI
            </span>
          </h2>
          
          {/* Subheading */}
          <p className="text-xl opacity-90 mb-8 max-w-4xl mx-auto">
            See how a leading manufacturer reduced costs by <span className="font-bold">45%</span> and increased 
            efficiency by <span className="font-bold">340%</span> through strategic AI implementation.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">340%</div>
            <div className="text-sm opacity-80">Return on Investment</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-300 mb-2">45%</div>
            <div className="text-sm opacity-80">Cost Reduction</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-300 mb-2">78%</div>
            <div className="text-sm opacity-80">Quality Improvement</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-300 mb-2">60%</div>
            <div className="text-sm opacity-80">Downtime Reduction</div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">🎯 What We Achieved</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Predictive maintenance with 95% accuracy</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Automated quality control reducing defects by 78%</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Intelligent supply chain optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>Real-time business intelligence platform</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">💰 Financial Impact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">$</span>
                <span>$1.26B in annual cost savings</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">$</span>
                <span>$340M in revenue increase</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">$</span>
                <span>3.4 months payback period</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">$</span>
                <span>Total investment: $4.8M</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a
              href="/case-studies/fortune-500-ai-success-story"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Read Full Case Study
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Start Your Success Story
            </a>
          </div>
          
          {/* Testimonial */}
          <blockquote className="max-w-3xl mx-auto text-lg italic opacity-90">
            "Working with Zion Tech Group transformed our business beyond our expectations. 
            The 340% ROI we achieved in just 18 months exceeded all projections."
            <footer className="mt-2 text-sm not-italic opacity-75">
              — Chief Technology OfficerFortune 500 Manufacturing Company
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Fortune500SuccessBanner;