import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const UltimateContentShowcase2025Banner = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-400/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-pink-400/10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-green-400/5 rounded-full animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/20 rounded-full px-8 py-3 mb-8 backdrop-blur-sm border border-white/30">
            <span className="text-lg font-semibold">✨ ULTIMATE CONTENT 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              Revolutionary AI Content
            </span>
            <br />
            <span className="text-white">Showcase</span>
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-5xl mx-auto leading-relaxed">
            Immerse yourself in the most comprehensive collection of AI insights, breakthrough technologies, 
            and transformation success stories. <span className="font-bold text-yellow-300">Updated daily with cutting-edge content.</span>
          </p>
        </div>

        {/* Content Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🤖</div>
            <h3 className="text-2xl font-bold mb-4">AI Revolution</h3>
            <p className="text-sm opacity-90 mb-6">
              Latest breakthroughs in artificial intelligence, machine learning, and neural networks.
            </p>
            <div className="text-yellow-300 font-semibold text-sm">
              25+ New Articles
            </div>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <h3 className="text-2xl font-bold mb-4">Quantum Computing</h3>
            <p className="text-sm opacity-90 mb-6">
              Explore quantum computing applications and their impact on enterprise operations.
            </p>
            <div className="text-yellow-300 font-semibold text-sm">
              15+ Breakthroughs
            </div>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">📊</div>
            <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
            <p className="text-sm opacity-90 mb-6">
              Real-world case studies showcasing AI transformation success and ROI achievements.
            </p>
            <div className="text-yellow-300 font-semibold text-sm">
              12+ Case Studies
            </div>
          </div>

          <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Future Tech</h3>
            <p className="text-sm opacity-90 mb-6">
              Emerging technologies and future predictions shaping the next decade.
            </p>
            <div className="text-yellow-300 font-semibold text-sm">
              20+ Predictions
            </div>
          </div>
        </div>

        {/* Featured Content Preview */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Featured This Week</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-400/30">
              <div className="text-2xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-3">Generative AI Enterprise Guide</h3>
              <p className="text-sm opacity-90 mb-4">
                Complete implementation guide for enterprise generative AI with 300-500% efficiency gains.
              </p>
              <a 
                href="/blog/ai-2025-generative-ai-enterprise-revolution-ultimate-breakthrough"
                className="text-blue-300 font-semibold hover:text-blue-200 transition-colors"
              >
                Read Full Guide →
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl p-6 border border-green-400/30">
              <div className="text-2xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold mb-3">Quantum Computing Breakthrough</h3>
              <p className="text-sm opacity-90 mb-4">
                Latest quantum computing applications delivering 1000x faster optimization algorithms.
              </p>
              <a 
                href="/blog/ai-2025-quantum-computing-breakthrough"
                className="text-green-300 font-semibold hover:text-green-200 transition-colors"
              >
                Explore Breakthrough →
              </a>
            </div>

            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-400/30">
              <div className="text-2xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3">Fortune 500 Success Story</h3>
              <p className="text-sm opacity-90 mb-4">
                How a Fortune 500 company achieved 2,500% ROI through AI transformation.
              </p>
              <a 
                href="/case-studies/fortune-500-ai-transformation-success"
                className="text-orange-300 font-semibold hover:text-orange-200 transition-colors"
              >
                View Case Study →
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a
              href="/blog"
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black px-12 py-6 rounded-2xl font-bold text-lg hover:from-yellow-300 hover:via-orange-400 hover:to-red-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Explore All Content
            </a>
            <a
              href="/resources"
              className="bg-white/20 backdrop-blur-sm text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              Download Resources
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-12 text-sm opacity-80">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              Daily Updates
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
              Expert Authored
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-purple-400 rounded-full mr-3 animate-pulse"></span>
              Proven Results
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025Banner;