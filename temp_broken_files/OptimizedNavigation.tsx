import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function OptimizedNavigation() {
  return (
    <header className="border-b border-gray-200 sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="flex items-center justify-between px-4 py-3 max-w-6xl mx-auto" role="navigation" aria-label="Main navigation">
        <a 
          href="/" 
          className="font-bold text-lg text-gray-900 hover:text-blue-600 transition-colors focus-visible:focus"
          aria-label="Zion Tech Group - Home"
        >
          Zion Tech Group
        </a>
        
        <div className="hidden md:flex gap-6">
          {/* AI 2025 Solutions */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus font-semibold relative flex items-center">
              AI 2025 Solutions
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                BREAKTHROUGH
              </span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                  Revolutionary Breakthroughs
                </div>
                <a href="/ai-2025-ultimate-breakthrough-revolution" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 font-semibold bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500">
                  🚀 AI 2025 Ultimate Breakthrough Revolution (10,000% ROI)
                </a>
                <a href="/ai-2025-consciousness-breakthrough" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 font-semibold bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500">
                  🧠 AI Consciousness Breakthrough (REVOLUTIONARY)
                </a>
                <a href="/ai-2025-ultimate-revolutionary-breakthrough" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 font-semibold bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500">
                  ⚡ Ultimate Revolutionary Breakthrough (NEW)
                </a>
                
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100 mt-2">
                  Case Studies
                </div>
                <a href="/case-studies/ai-2025-global-transformation-25000-roi" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🏆 Global Transformation (25,000% ROI)
                </a>
                <a href="/case-studies/ai-2025-consciousness-breakthrough-success" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🧠 Consciousness Success (15,000% ROI)
                </a>
              </div>
            </div>
          </div>

          {/* AI 2026-2030 Future */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus font-semibold relative flex items-center">
              AI 2026-2030 Future
              <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                REVOLUTIONARY
              </span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                  Revolutionary Content
                </div>
                <a href="/ai-2026-breakthrough-revolutionary-content" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 font-semibold bg-gradient-to-r from-cyan-50 to-purple-50 border-l-4 border-cyan-500">
                  🌌 AI 2026 Breakthrough Revolutionary Content (15,000% ROI)
                </a>
                <a href="/ai-2026-quantum-neural-revolution" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 font-semibold bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500">
                  ⚛️ Quantum Neural Revolution (BREAKTHROUGH)
                </a>
                <a href="/ai-2030-transcendent-intelligence" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 font-semibold bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500">
                  🚀 Transcendent Intelligence (FUTURE)
                </a>
                
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100 mt-2">
                  Future Predictions
                </div>
                <a href="/ai-2030-future-predictions" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🔮 AI 2030 Future Predictions
                </a>
                <a href="/ai-2035-singularity-breakthrough" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🌟 Singularity Breakthrough 2035
                </a>
              </div>
            </div>
          </div>

          {/* Quantum Computing */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus font-semibold relative flex items-center">
              Quantum Computing
              <span className="absolute -top-2 -right-2 bg-indigo-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                BREAKTHROUGH
              </span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                  Quantum Breakthroughs
                </div>
                <a href="/quantum-computing-breakthroughs-2030" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 font-semibold bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500">
                  ⚛️ Quantum Computing Breakthroughs 2030 (∞ ROI)
                </a>
                <a href="/quantum-ai-fusion-2030" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 font-semibold bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500">
                  ⚛️🧠 Quantum-AI Fusion Technology (REVOLUTIONARY)
                </a>
                <a href="/quantum-computing-solutions" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  All Quantum Solutions
                </a>
                
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100 mt-2">
                  Resources
                </div>
                <a href="/resources/ai-2026-2030-implementation-roadmap" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  📋 Implementation Roadmap
                </a>
                <a href="/case-studies/quantum-computing-2030-breakthrough" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🏆 Quantum Success Stories
                </a>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus font-semibold relative flex items-center">
              Resources
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <a href="/blog" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  📝 Blog & Insights
                </a>
                <a href="/case-studies" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🏆 Success Stories
                </a>
                
                <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100 mt-2">
                  🚀 New Content 2025
                </div>
                <a href="/new-content-showcase" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 font-semibold bg-gradient-to-r from-cyan-50 to-purple-50 border-l-4 border-cyan-500">
                  🎉 New Content Showcase (LATEST)
                </a>
                <a href="/features-showcase" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🎯 Revolutionary Features
                </a>
                <a href="/resources" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  📚 Implementation Guides
                </a>
                <a href="/content-showcase" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 font-semibold">
                  🎯 Content Showcase
                </a>
              </div>
            </div>
          </div>

          {/* Contact */}
          <a 
            href="/contact" 
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}