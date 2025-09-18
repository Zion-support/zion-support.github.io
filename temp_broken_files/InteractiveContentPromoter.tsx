import React, { useState, useEffect } from 'react';

const InteractiveContentPromoter: React.FC = () => {
  return (
    <div>
      <div
        className="fixed bottom-6 right-6 z-50 max-w-sm"
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className={`bg-gradient-to-r ${promotions[activePromotion].gradient} p-4 text-white relative`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{promotions[activePromotion].icon}</span>
                <div>
                  <div className="text-xs font-semibold opacity-90">
                    {promotions[activePromotion].urgency}
                  </div>
                  <div className="text-sm font-bold">
                    {promotions[activePromotion].title}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
          {/* Content */}
          <div className="p-4">
            <p className="text-gray-600 text-sm mb-4">
              {promotions[activePromotion].description}
            </p>
            <div className="flex space-x-2">
              <a
                href={promotions[activePromotion].link}
                className={`flex-1 bg-gradient-to-r ${promotions[activePromotion].gradient} text-white px-4 py-2 rounded-lg text-sm font-semibold text-center hover:shadow-lg transition-all duration-300`}
              >
                {promotions[activePromotion].cta} →
              </a>
              <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
                Later
              </button>
            </div>
            {/* Progress Indicators */}
            <div className="flex justify-center space-x-1 mt-3">
              {promotions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActivePromotion(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activePromotion
                      ? 'bg-purple-500 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default InteractiveContentPromoter;
