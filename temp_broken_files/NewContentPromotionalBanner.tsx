import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Sparkles, Zap, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewContentPromotionalBanner: React.FC = () => {
  return (
    <div>
      <div
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-sm border-b border-gray-700/50"
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex items-center space-x-4 flex-1">
              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="p-1 hover:bg-gray-700/50 rounded-full transition-colors"
              >
                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180" />
              </button>
              {/* Slide Content */}
                <div
                  key={currentSlide}
                  className="flex items-center space-x-4 flex-1"
                >
                  {/* Icon */}
                  <div className={`w-10 h-10 bg-gradient-to-r ${promotionalContent[currentSlide].gradient} rounded-lg flex items-center justify-center`}>
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-sm">
                      {promotionalContent[currentSlide].title}
                    </h3>
                    <p className="text-gray-300 text-xs">
                      {promotionalContent[currentSlide].description}
                    </p>
                  </div>
                  {/* CTA Button */}
                  <Link
                    to={promotionalContent[currentSlide].link}
                    className={`px-4 py-2 bg-gradient-to-r ${promotionalContent[currentSlide].gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium flex items-center space-x-2`}
                  >
                    <span>{promotionalContent[currentSlide].linkText}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Navigation Arrow */}
              <button
                onClick={handleNext}
                className="p-1 hover:bg-gray-700/50 rounded-full transition-colors"
              >
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="ml-4 p-1 hover:bg-gray-700/50 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>
          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-3">
            {promotionalContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-cyan-400 w-6' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-2 left-10"
          >
            <Star className="w-4 h-4 text-yellow-400 opacity-60" />
          </div>
          <div
              y: [0, 10, 0],
              rotate: [0, -5, 0],
            }}
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-3 right-20"
          >
            <Zap className="w-3 h-3 text-purple-400 opacity-60" />
          </div>
          <div
              y: [0, -8, 0],
              x: [0, 5, 0],
            }}
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-1 right-32"
          >
            <TrendingUp className="w-3 h-3 text-green-400 opacity-60" />
          </div>
        </div>
      </div>
    </div>
  );
};
export { NewContentPromotionalBanner };



export default NewContentPromotionalBanner;
