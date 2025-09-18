"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { 
  Brain
  Zap
  ArrowRight
  Star
  Play
  X,
  Sparkles,
  Rocket,
  TrendingUp
} from 'lucide-react';

const NextGenAIInnovationPromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [currentSlidesetCurrentSlide] = useState(0);

  const announcements = [
    {
      title: "🚀 Quantum-AI Fusion Breakthrough",
      subtitle: "1000x Processing Power Increase",
      action: "Explore Now",
      color: "from-purple-600 to-blue-600"
    },
    {
      title: "🧠 Neural Interface Revolution",
      subtitle: "Direct Brain-Computer Integration",
      action: "Learn More",
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "🤖 Autonomous AI Systems",
      subtitle: "Self-Managing Business Operations",
      action: "Discover",
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "✨ Conscious AI Framework",
      subtitle: "Genuine Understanding & Intelligence",
      action: "Experience",
      color: "from-orange-600 to-red-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % announcements.length);
    }3000);
    return () => clearInterval(interval);
  }[]);

  if (!isVisible) return null;

  const currentAnnouncement = announcements[currentSlide];

  return (
    <div
      className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%20width%253D%252260%2522%20height%253D%252260%2522%20viewBox%253D%25220%25200%252060%252060%2522%20xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%20fill%253D%2522none%2522%20fill-rule%253D%2522evenodd%2522%253E%253Cg%20fill%253D%2522%25239C92AC%2522%20fill-opacity%253D%25220.1%2522%253E%253Ccircle%20cx%253D%252230%2522%20cy%253D%252230%2522%20r%253D%25222%2522%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-20"></div>
        {/* Floating Elements */}
        <div
            y: [0-20],
            rotate: [050]
          }}
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-4 left-8 w-12 h-12 border border-blue-400/30 rounded-full flex items-center justify-center"
        >
          <Brain className="w-6 h-6 text-blue-400" />
        </div>
        
        <div
            y: [0150],
            rotate: [0-50]
          }}
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-6 right-12 w-10 h-10 border border-purple-400/30 rounded-full flex items-center justify-center"
        >
          <Zap className="w-5 h-5 text-purple-400" />
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="flex items-center gap-6">
            <div
              className="flex-shrink-0"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
                <div
                  key={currentSlide}
                  className="space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 bg-gradient-to-r ${currentAnnouncement.color} rounded-full animate-pulse`}></div>
                    <span className="text-sm font-medium text-blue-300">LIVE BREAKTHROUGH</span>
                  </div>
                  <h3 className="text-lg font-bold">{currentAnnouncement.title}</h3>
                  <p className="text-sm text-gray-300">{currentAnnouncement.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Center Action Button */}
          <button
            className={`hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${currentAnnouncement.color} hover:shadow-lg rounded-full font-semibold transition-all duration-300`}
          >
            <Play className="w-4 h-4" />
            {currentAnnouncement.action}
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Right Stats */}
          <div className="hidden lg:flex items-center gap-6 text-sm">
            <div className="text-center">
              <div className="font-bold text-lg text-green-400">500%</div>
              <div className="text-gray-400">Performance</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg text-blue-400">99.9%</div>
              <div className="text-gray-400">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg text-purple-400">24/7</div>
              <div className="text-gray-400">Operation</div>
            </div>
          </div>
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        {/* Mobile Action Button */}
        <div
          className="md:hidden mt-4"
        >
          <button
            className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${currentAnnouncement.color} hover:shadow-lg rounded-full font-semibold transition-all duration-300`}
          >
            <Play className="w-4 h-4" />
            {currentAnnouncement.action}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
          />
        </div>
      </div>
    </div>
  );
};


export default NextGenAIInnovationPromotionBanner;
</div></div></div>