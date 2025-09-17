import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const RevolutionaryContent2026PromotionBanner = () => {
  const contentItems = [
    {
      title: "AI 2026 Breakthrough Predictions",
      description: "Discover the most revolutionary AI breakthroughs that will transform industries",
      readTime: "8 min read",
      category: "AI Innovation",
      link: "/blog/ai-2026-breakthrough-predictions"
    },
    {
      title: "Quantum AI Implementation Success",
      description: "How a Fortune 500 company achieved 5000% ROI in 6 months",
      readTime: "12 min read",
      category: "Case Study",
      link: "/case-studies/quantum-ai-implementation-success"
    },
    {
      title: "Neural Interface Revolution",
      description: "The future of human-computer interaction is here",
      readTime: "6 min read",
      category: "Technology",
      link: "/neural-interface-revolution-2026"
    },
    {
      title: "Autonomous Business Systems",
      description: "Self-managing organizations that run 24/7 without human intervention",
      readTime: "10 min read",
      category: "Business",
      link: "/autonomous-business-systems-2026"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 HOT CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary Content 2026
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Explore cutting-edge insightsbreakthrough case studiesand revolutionary technologies 
            that will shape the future of business and society.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {contentItems.map((itemindex) => (
            <div 
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {item.category}
                </span>
                <span className="text-gray-300 text-sm">{item.readTime}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {item.description}
              </p>
              
              <a 
                href={item.link}
                className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold group-hover:translate-x-2 transition-transform duration-300"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>

        {/* Featured Content Highlight */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Featured: AI 2026 Breakthrough Predictions
            </h3>
            <p className="text-black text-lg mb-6 opacity-90 max-w-3xl mx-auto">
              Get exclusive access to the most comprehensive analysis of AI breakthroughs 
              that will revolutionize industries in 2026. This premium content reveals 
              the technologies that will shape our future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/blog/ai-2026-breakthrough-predictions"
                className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors"
              >
                Read Full Article
              </a>
              <a
                href="/premium-content"
                className="border-2 border-black text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-colors"
              >
                Get Premium Access
              </a>
            </div>
          </div>
        </div>

        {/* Content Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <a 
            href="/blog"
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-opacity-20 transition-all duration-300 group"
          >
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📝</div>
            <h4 className="font-bold mb-2">Blog Posts</h4>
            <p className="text-sm text-gray-300">Latest insights and analysis</p>
          </a>

          <a 
            href="/case-studies"
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-opacity-20 transition-all duration-300 group"
          >
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📊</div>
            <h4 className="font-bold mb-2">Case Studies</h4>
            <p className="text-sm text-gray-300">Real success stories</p>
          </a>

          <a 
            href="/resources"
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-opacity-20 transition-all duration-300 group"
          >
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📚</div>
            <h4 className="font-bold mb-2">Resources</h4>
            <p className="text-sm text-gray-300">Guides and tools</p>
          </a>

          <a 
            href="/webinars"
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-opacity-20 transition-all duration-300 group"
          >
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🎥</div>
            <h4 className="font-bold mb-2">Webinars</h4>
            <p className="text-sm text-gray-300">Live expert sessions</p>
          </a>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Latest Content</h3>
            <p className="text-gray-300 mb-6">
              Get exclusive access to new contentinsightsand breakthrough technologies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContent2026PromotionBanner;