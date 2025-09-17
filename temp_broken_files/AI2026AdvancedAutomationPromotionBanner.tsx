import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function AI2026AdvancedAutomationPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-8 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-32 translate-y-32"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                🚀 NEW 2026
              </span>
              <span className="bg-red-500 px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                BREAKTHROUGH
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3">
              AI 2026 Advanced Automation Solutions
            </h2>
            <p className="text-lg text-blue-100 mb-4 max-w-2xl">
              Revolutionize your business with next-generation AI automation. Experience 85% cost reduction
              300% efficiency increaseand 99.9% uptime guarantee with our advanced solutions.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Neural Network Automation
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Quantum Computing Integration
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Autonomous Systems
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/ai-2026-advanced-automation-solutions"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
            >
              Explore Solutions
            </a>
            <a 
              href="/ai-2026-advanced-automation-solutions#demo"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-center"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}