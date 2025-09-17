import React from 'react';
import { Link } from 'react-router-dom';
import { latestContent2026, featuredServices2026 } from '../data/latestContent2026';
const LatestContentShowcase2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                2026 Content
              </span>
              <br />
              <span className="text-white">Revolution</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover the latest breakthroughs in AI, quantum computing, and neural technology that are reshaping our world
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3 border border-white/20">
                <span className="text-white font-semibold">🚀 Latest AI Breakthroughs</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3 border border-white/20">
                <span className="text-white font-semibold">⚡ Quantum Computing</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-3 border border-white/20">
                <span className="text-white font-semibold">🧠 Neural Interfaces</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Latest Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Content & Insights</h2>
          <p className="text-xl text-gray-300">Stay ahead with our cutting-edge research and breakthrough discoveries</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {latestContent2026.map((content) => (
            <div key={content.id} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">🚀</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                  {content.category}
                </span>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{content.title}</h3>
              <p className="text-gray-300 mb-4 line-clamp-3">{content.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <span>{content.author}</span>
                <span>{content.readTime}</span>
              </div>
              <Link
                to={`/content/${content.slug}`}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Read More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Featured Services Section */}
      <div className="bg-white/5 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Services 2026</h2>
            <p className="text-xl text-gray-300">Revolutionary solutions that transform your business operations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredServices2026.map((service) => (
              <div key={service.id} className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-5xl">⚡</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                  <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <svg className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-400">{service.price}</span>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-3xl p-12 text-center border border-white/10">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already leveraging our revolutionary AI and technology solutions to achieve unprecedented growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Start Your Transformation
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default LatestContentShowcase2026;
