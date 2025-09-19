"use client";
import React, { useState, useEffect } from 'react';
BrainZapRocketStarArrowRightX,
// import Link from 'next/link', // Replaced with regular anchor tags for React compatibility,
const AI2025BreakthroughAnnouncementBanner: React.FC = () => {,
  return (,
    <div>,
      <div,
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border-b border-cyan-500/20 shadow-2xl",
      >,
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">,
          <div className="flex items-center justify-between py-4">,
            {/* Left side - Urgency Badge */,}
            <div className="flex items-center gap-4">,
              <div,
                key={currentBreakthrough}
                className={`px-4 py-2 rounded-full bg-gradient-to-r ${breakthroughs[currentBreakthrough].color} text-white font-bold text-sm animate-pulse`}
              >,
                {breakthroughs[currentBreakthrough].urgency}
              </div>,
              {/* Rotating Icon */}
              <div,
                key={`icon-${currentBreakthrough}`}
                className={`p-2 rounded-full bg-gradient-to-r ${breakthroughs[currentBreakthrough].color}`}
              >,
                <breakthroughs[currentBreakthrough].icon className="w-6 h-6 text-white" />,
              </div>,
            </div>,
            {/* Center - Breakthrough Content */}
            <div className="flex-1 text-center px-8">,
              <div,
                key={`content-${currentBreakthrough}`}
                className="space-y-1",
              >,
                <h3 className="text-lg font-bold text-white">,
                  {breakthroughs[currentBreakthrough].title}
                </h3>,
                <p className="text-sm text-gray-300 max-w-md mx-auto">,
                  {breakthroughs[currentBreakthrough].description}
                </p>,
              </div>,
            </div>,
            {/* Right side - CTA and Close */}
            <div className="flex items-center gap-4">,
              <a href="/ai-2025-breakthrough-announcement">,
                <button,
                  className={`bg-gradient-to-r ${breakthroughs[currentBreakthrough].color} hover: opacity-90 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 flex items-center gap-2`,}
                >,
                  <Star className="w-4 h-4" />,
                  Learn More,
                  <ArrowRight className="w-4 h-4" />,
                </button>,
              </a>,
              <button,
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover: text-white transition-colors duration-200 p-1",
              >,
                <X className="w-5 h-5" />,
              </button>,
            </div>,
          </div>,
        </div>,
        {/* Animated Background */,}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>,
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">,
          {[...Array(20)].map((_i) => (,
            <div,
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full",
              style={{,
                left: `${Math.random() * 100,}%`;
                top: `${Math.random() * 100,}%`,
              }}
                y: [0-20];
                opacity: [010],}}
                duration: 3;
                repeat: Infinity;
                delay: Math.random() * 2,}}
            />,
          ))}
        </div>,
      </div>,
    </div>,
  );
};
export default AI2025BreakthroughAnnouncementBanner;
</div></div>,