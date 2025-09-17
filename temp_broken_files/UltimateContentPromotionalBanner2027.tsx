import React, { useState, useEffect } from 'react';

const UltimateContentPromotionalBanner2027: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 180, 360]
            }}
            className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full"
          ></div>
          <div
              x: [0, -80, 0],
              y: [0, 100, 0],
              rotate: [360, 180, 0]
            }}
            className="absolute top-32 right-20 w-16 h-16 bg-pink-500/20 rounded-full"
          ></div>
          <div
              x: [0, 60, 0],
              y: [0, -30, 0],
              rotate: [0, -180, -360]
            }}
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-500/20 rounded-full"
          ></div>
          <div
              x: [0, -40, 0],
              y: [0, 80, 0],
              rotate: [360, 0, -360]
            }}
            className="absolute bottom-32 right-1/3 w-14 h-14 bg-emerald-500/20 rounded-full"
          ></div>
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🌟 ULTIMATE BREAKTHROUGH CONTENT • 2027
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary New Content
          </h2>
          <p className="text-2xl opacity-90 max-w-5xl mx-auto leading-relaxed">
            Experience the most advanced technologies ever conceived - where consciousness computing, 
            quantum mechanics, and synthetic reality converge to create the impossible.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-8xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
              <div
                key={currentSlide}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${ultimateContent[currentSlide].gradient} p-16 rounded-3xl`}>
                  <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="text-8xl">{ultimateContent[currentSlide].icon}</div>
                        <div>
                          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-2">
                            {ultimateContent[currentSlide].badge}
                          </div>
                          <h3 className="text-5xl font-bold">{ultimateContent[currentSlide].title}</h3>
                        </div>
                      </div>
                      <p className="text-2xl opacity-90 mb-8 leading-relaxed">{ultimateContent[currentSlide].description}</p>
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {ultimateContent[currentSlide].features.map((feature, index) => (
                          <div
                            key={index}
                            className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:scale-105 transition-all duration-300"
                          >
                            <span className="text-lg font-semibold">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-6">
                        <a
                          href={ultimateContent[currentSlide].link}
                          className="bg-white text-gray-900 px-10 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg hover:scale-105"
                        >
                          Explore Now →
                        </a>
                        <button className="border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg hover:scale-105">
                          Learn More
                        </button>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10">
                        <h4 className="text-3xl font-bold mb-6">Why This Matters</h4>
                        <ul className="space-y-4">
                          <li className="flex items-center space-x-4">
                            <span className="w-3 h-3 bg-white rounded-full"></span>
                            <span className="text-lg">Revolutionary breakthrough technology</span>
                          </li>
                          <li className="flex items-center space-x-4">
                            <span className="w-3 h-3 bg-white rounded-full"></span>
                            <span className="text-lg">Industry-leading performance</span>
                          </li>
                          <li className="flex items-center space-x-4">
                            <span className="w-3 h-3 bg-white rounded-full"></span>
                            <span className="text-lg">Proven real-world applications</span>
                          </li>
                          <li className="flex items-center space-x-4">
                            <span className="w-3 h-3 bg-white rounded-full"></span>
                            <span className="text-lg">Expert-backed research</span>
                          </li>
                          <li className="flex items-center space-x-4">
                            <span className="w-3 h-3 bg-white rounded-full"></span>
                            <span className="text-lg">Future-defining capabilities</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {/* Play/Pause Button */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            {isAutoPlaying ? (
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>
        {/* Slide Indicators */}
        <div className="flex justify-center space-x-4 mt-12">
          {ultimateContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        {/* Quick Access Grid */}
        <div className="mt-20">
          <h3 className="text-4xl font-bold text-center mb-12">Quick Access to All Ultimate Content</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {ultimateContent.map((item, index) => (
              <div
                key={item.title}
                whileInView={{ opacity: 1, y: 0 }}
                className={`bg-gradient-to-br ${item.gradient} p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer`}
                onClick={() => setCurrentSlide(index)}
              >
                <div className="text-6xl mb-6 text-center">{item.icon}</div>
                <div className="text-center mb-4">
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-2">
                    {item.badge}
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-center">{item.title}</h4>
                <p className="text-lg opacity-90 text-center mb-6">{item.description}</p>
                <a
                  href={item.link}
                  className="block w-full bg-white/20 text-white text-center py-3 rounded-xl hover:bg-white/30 transition-all duration-300 font-semibold text-lg"
                >
                  Explore Ultimate Content →
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* Call to Action */}
        <div
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12">
            <h3 className="text-4xl font-bold mb-6">Ready to Experience the Ultimate Revolution?</h3>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Join the select few who will experience the most advanced technologies ever created - 
              where consciousness, quantum mechanics, and synthetic reality converge to create the impossible.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/pages/UltimateTechRevolution2027"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-xl hover:scale-105"
              >
                Start Ultimate Journey →
              </a>
              <button className="border-2 border-white text-white px-12 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-xl hover:scale-105">
                Get Notifications
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default UltimateContentPromotionalBanner2027;
</p></p></p></p>