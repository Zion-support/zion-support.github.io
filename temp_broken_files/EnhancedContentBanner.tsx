import React, { useState, useEffect } from 'react';

const EnhancedContentBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Main Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-4xl animate-bounce">🚀</span>
              <h3 className="text-3xl font-bold">REVOLUTIONARY CONTENT 2026</h3>
              <span className="text-4xl animate-bounce">🚀</span>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/70 hover:text-white transition-colors text-2xl"
            >
              ×
            </button>
          </div>
          <p className="text-xl opacity-95 mb-8 max-w-4xl">
            Experience the future of technology with our groundbreaking new content. 
            From AI transformation to quantum computing, explore innovations that will reshape tomorrow.
          </p>
          {/* Carousel */}
          <div className="relative">
              <div
                key={currentSlide}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-3xl">{featuredContent[currentSlide].icon}</span>
                      <h4 className="text-2xl font-bold">{featuredContent[currentSlide].title}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${featuredContent[currentSlide].badgeColor}`}>
                        {featuredContent[currentSlide].badge}
                      </span>
                    </div>
                    <p className="text-lg opacity-90 mb-4">{featuredContent[currentSlide].description}</p>
                    <a
                      href={featuredContent[currentSlide].link}
                      className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-all duration-300 font-semibold"
                    >
                      Explore Now →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
            >
              →
            </button>
          </div>
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {featuredContent.map((content, index) => (
          <a
            key={content.id}
            href={content.link}
            className={`bg-gradient-to-r ${content.gradient} text-white p-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center relative overflow-hidden group`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="text-2xl mb-2">{content.icon}</div>
              <div className="text-sm font-bold mb-1">{content.title}</div>
              <div className="text-xs opacity-90">{content.description}</div>
              <span className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold ${content.badgeColor}`}>
                {content.badge}
              </span>
            </div>
          </a>
        ))}
      </div>
      {/* Interactive Stats */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white mb-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">Content Impact Metrics</h3>
          <p className="text-gray-300">Real-time engagement and performance data</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-1">2.5M+</div>
            <div className="text-sm text-gray-300">Page Views</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">98%</div>
            <div className="text-sm text-gray-300">User Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">45K+</div>
            <div className="text-sm text-gray-300">Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-1">150+</div>
            <div className="text-sm text-gray-300">New Articles</div>
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Stay Ahead of the Curve</h3>
        <p className="text-xl opacity-90 mb-6 max-w-3xl mx-auto">
          Join thousands of professionals who rely on our cutting-edge content to stay informed 
          about the latest technological breakthroughs and industry trends.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            Subscribe to Updates
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors">
            Download All Content
          </button>
        </div>
      </div>
    </div>
  );
};


export default EnhancedContentBanner;
