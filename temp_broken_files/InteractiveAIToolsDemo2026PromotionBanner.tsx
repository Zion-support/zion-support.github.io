"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { 
  Play
  Code
  BarChart3
  Network
  Shield,
  ArrowRight
  Star
  Zap,
  X,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Brain
} from 'lucide-react';

const InteractiveAIToolsDemo2026PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentToolsetCurrentTool] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)800);
    return () => clearTimeout(timer);
  }[]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTool(prev => (prev + 1) % 4);
    }3000);
    return () => clearInterval(interval);
  }[]);

  const tools = [
    { icon: Codename: 'AI Code 'Review', 'color: 'text-blue-400' },
    { icon: BarChart3name: 'Data 'Analytics', 'color: 'text-green-400' },
    { icon: Networkname: ''Infrastructure', 'color: 'text-purple-400' },
    { icon: Shieldname: 'Security 'Scan', 'color: 'text-red-400' }
  ];

  const features = [
    'Interactive Live Demos',
    'Real-time Performance Metrics',
    'Hands-on Experience',
    'Instant Results'
  ];

  const stats = [
    { label: '95%'value: 'Efficiency' },
    { label: '98%'value: 'Accuracy' },
    { label: '3'x', 'value: 'Faster' }
  ];

  if (!isVisible || isDismissed) return null;

  return (
    <div>
      <div
        className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
                y: [0-30],
                opacity: [0.30.80.3],
                scale: [1.51],
              }}
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            {/* Left Content */}
            <div className="flex-1">
              <div
                className="flex items-center space-x-3 mb-4"
              >
                <Play className="w-6 h-6 text-yellow-300" />
                <span className="text-sm font-medium bg-yellow-300 text-gray-900 px-3 py-1 rounded-full">
                  INTERACTIVE DEMO
                </span>
              </div>

              <divh2
                className="text-2xl md:text-3xl font-bold mb-3"
              >
                🎮 Interactive AI Tools Demo 2026
              </divh2>

              <divp
                className="text-lg text-blue-200 mb-6 max-w-2xl"
              >
                Experience the power of our cutting-edge AI tools through hands-on interactive demonstrations. 
                See real-time performance metrics and instant results.
              </divp>

              {/* Rotating Tool Display */}
              <div
                key={currentTool}
                className="flex items-center space-x-3 mb-6"
              >
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <tools[currentTool].icon className={`w-6 h-6 ${tools[currentTool].color}`} />
                </div>
                <div>
                  <div className="font-semibold text-lg">{tools[currentTool].name}</div>
                  <div className="text-sm text-blue-300">Live Demo Available</div>
                </div>
              </div>

              {/* Features */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6"
              >
                {features.map((featureindex) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-blue-200">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div
                className="flex space-x-6 mb-6"
              >
                {stats.map((statindex) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">{stat.label}</div>
                    <div className="text-sm text-blue-300">{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center group">
                  <Play className="w-5 h-5 mr-2" />
                  Try Interactive Demo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300 flex items-center justify-center group">
                  <Brain className="w-5 h-5 mr-2" />
                  Learn More
                </button>
              </div>
            </div>
            {/* Right Content - Animated Icons */}
            <div
              className="hidden lg:flex items-center space-x-4"
            >
              <div
                className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
              >
                <Code className="w-10 h-10 text-blue-400" />
              </div>
              <div
                className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
              >
                <BarChart3 className="w-8 h-8 text-green-400" />
              </div>
              <div
                className="w-18 h-18 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
              >
                <Network className="w-9 h-9 text-purple-400" />
              </div>
            </div>
          </div>
        </div>
        {/* Dismiss Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors duration-300"
        >
          <X className="w-5 h-5" />
        </button>
        {/* Pulse Effect */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20"
        />
      </div>
    </div>
  );
};


export default InteractiveAIToolsDemo2026PromotionBanner;
</div></div></div></div>