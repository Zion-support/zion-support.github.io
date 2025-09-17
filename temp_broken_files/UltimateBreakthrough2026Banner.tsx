import React, { useState, useEffect } from 'react';

const UltimateBreakthrough2026Banner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-6 animate-pulse"
          >
            🌟 ULTIMATE BREAKTHROUGH CONTENT 2026 • EXCLUSIVE LAUNCH
          </div>
          <divh2
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Revolutionary Technology Showcase
          </divh2>
          <divp
            className="text-2xl opacity-90 max-w-4xl mx-auto"
          >
            Discover the most advanced technologies that are reshaping the future of human civilization
          </divp>
        </div>
        {/* Content Carousel */}
        <div className="relative max-w-6xl mx-auto">
            <div
              key={currentSlide}
              className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-purple-300">
                    {breakthroughContent[currentSlide].title}
                  </h3>
                  <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                    {breakthroughContent[currentSlide].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {breakthroughContent[currentSlide].features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm border border-purple-400/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a
                    href={breakthroughContent[currentSlide].link}
                    className={`inline-block bg-gradient-to-r ${breakthroughContent[currentSlide].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-bold text-lg transform hover:scale-105`}
                  >
                    Explore Breakthrough →
                  </a>
                </div>
                <div className="text-center">
                  <div className="text-8xl mb-4">
                    {currentSlide === 0 && "🚀"}
                    {currentSlide === 1 && "🌟"}
                    {currentSlide === 2 && "🧠"}
                    {currentSlide === 3 && "⚡"}
                  </div>
                  <div className="text-lg text-purple-200">
                    Revolutionary Technology
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {breakthroughContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-purple-400 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
        {/* Quick Access Links */}
        <div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {breakthroughContent.map((content, index) => (
            <a
              key={index}
              href={content.link}
              className={`bg-gradient-to-r ${content.gradient} text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center transform hover:scale-105`}
            >
              {content.title.split(' ')[1]} →
            </a>
          ))}
        </div>

        {/* Statistics */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
            <div className="text-sm text-purple-200">Research Projects</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-cyan-400 mb-2">1000+</div>
            <div className="text-sm text-cyan-200">Patent Applications</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-400 mb-2">50+</div>
            <div className="text-sm text-emerald-200">Breakthrough Technologies</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
            <div className="text-sm text-pink-200">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default UltimateBreakthrough2026Banner;
