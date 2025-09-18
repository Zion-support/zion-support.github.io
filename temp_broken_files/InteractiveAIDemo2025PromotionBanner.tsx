"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { 
  Bot
  MessageCircle
  Send
  Sparkles
  Zap
  Brain
  Rocket
  Star,
  Play,
  X,
  ChevronRight,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';

const InteractiveAIDemo2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentDemosetCurrentDemo] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)2000);
    return () => clearTimeout(timer);
  }[]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length);
    }4000);
    return () => clearInterval(interval);
  }[]);

  const demos = [
    {
      icon: Brain,
      title: 'Neural Interface Demo',
      description: 'Experience 500% efficiency boost',
      color: 'from-purple-500 to-pink-500',
      users: '2.5K+ active'
    },
    {
      icon: Zap,
      title: 'Quantum AI Demo',
      description: 'See 1000x faster processing',
      color: 'from-blue-500 to-cyan-500',
      users: '1.8K+ active'
    },
    {
      icon: TrendingUp,
      title: 'Business Automation',
      description: 'Witness 90% cost reduction',
      color: 'from-green-500 to-emerald-500',
      users: '3.2K+ active'
    },
    {
      icon: Star,
      title: 'Future Predictions',
      description: 'Explore 95% accuracy rate',
      color: 'from-orange-500 to-red-500',
      users: '4.1K+ active'
    }
  ];

  if (isDismissed || !isVisible) return null;

  return (
    <div>
      <div
        className="relative bg-gradient-to-r from-blue-900 via-slate-900 to-purple-900 border-b border-blue-500/30 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-purple-600/20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%253Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%20fill%253D%2522none%2522%20fill-rule%253D%2522evenodd%2522%253E%253Cg%20fill%253D%2522%25239C92AC%2522%20fill-opacity%253D%25220.1%2522%253E%253Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%221%22%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-30"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="flex items-center gap-6">
              <div
                className="flex items-center gap-3"
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    🤖 Interactive AI Demo 2025
                  </h3>
                  <p className="text-blue-200 text-sm">
                    Chat with the Future of AI Technology
                  </p>
                </div>
              </div>

              {/* Rotating Demo Features */}
              <div className="hidden md:flex items-center gap-4">
                <div className="w-px h-8 bg-blue-500/30"></div>
                <div className="flex items-center gap-3">
                    <div
                      key={currentDemo}
                      className="flex items-center gap-2"
                    >
                      <div className={`w-8 h-8 bg-gradient-to-r ${demos[currentDemo].color} rounded-lg flex items-center justify-center`}>
                        {React.createElement(demos[currentDemo].icon{ className: "w-4 h-4 text-white" })}
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">
                          {demos[currentDemo].title}
                        </div>
                        <div className="text-blue-300 text-xs">
                          {demos[currentDemo].description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Content */}
            <div className="flex items-center gap-4">
              {/* Live Stats */}
              <div className="hidden lg:flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg border border-white/20">
                  <Users className="w-4 h-4 text-green-400" />
                  <span className="text-white text-sm font-medium">
                    {demos[currentDemo].users}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg border border-white/20">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span className="text-white text-sm font-medium">
                    Live Demo
                  </span>
                </div>
              </div>
              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Chat Now</span>
                </button>

                <button
                  className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25"
                >
                  <Play className="w-4 h-4" />
                  <span>Try Demo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsDismissed(true)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
                >
                  <X className="w-5 h-5 text-gray-400 hover:text-white" />
                </button>
              </div>
            </div>
          </div>
          {/* Mobile Demo Features */}
          <div className="md:hidden mt-4">
            <div className="flex items-center justify-center gap-4">
                <div
                  key={currentDemo}
                  className="flex items-center gap-2"
                >
                  <div className={`w-6 h-6 bg-gradient-to-r ${demos[currentDemo].color} rounded-lg flex items-center justify-center`}>
                    {React.createElement(demos[currentDemo].icon{ className: "w-3 h-3 text-white" })}
                  </div>
                  <div className="text-center">
                    <div className="text-white font-semibold text-sm">
                      {demos[currentDemo].title}
                    </div>
                    <div className="text-blue-300 text-xs">
                      {demos[currentDemo].description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Animated Border */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        <div
          className="absolute bottom-0 left-0 h-1 bg-white"
        ></div>
      </div>
    </div>
  );
};


export default InteractiveAIDemo2025PromotionBanner;
