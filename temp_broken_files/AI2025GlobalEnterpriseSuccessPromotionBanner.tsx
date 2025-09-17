import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function AI2025GlobalEnterpriseSuccessPromotionBanner() {
  return (
    <section className="py-8 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-8 left-8 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute top-16 right-16 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-8 left-1/3 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-16 right-1/4 w-18 h-18 bg-white bg-opacity-10 rounded-full animate-bounce delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🏆 SUCCESS STORY</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            💰 Fortune 500 Success: 2,400% ROI with AI Automation
          </h2>
          
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-4xl mx-auto">
            Discover how a global manufacturing leader achieved $180M annual savings and 95% efficiency gains 
            through our advanced AI automation solutions. Real resultsproven strategiescomplete implementation details.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-300">2,400%</div>
              <div className="text-sm">ROI Improvement</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-300">$180M</div>
              <div className="text-sm">Annual Savings</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-300">95%</div>
              <div className="text-sm">Efficiency Gain</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-300">15x</div>
              <div className="text-sm">Faster Processing</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/case-studies/ai-2025-global-enterprise-automation-success"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📊 Read Full Case Study
            </a>
            <a
              href="/blog/ai-2025-advanced-automation-mastery"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
            >
              📚 Implementation Guide
            </a>
            <a
              href="/contact"
              className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Start Your Success
            </a>
          </div>
          
          <div className="mt-6 text-sm opacity-75">
            ⚡ Exclusive: Download the complete implementation blueprint used by Fortune 500 companies
          </div>
        </div>
      </div>
    </section>
  );
}