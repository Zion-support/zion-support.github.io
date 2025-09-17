"use client";
'use client';

import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  description: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency: string;
  };
  readingTime: string;
  featured: boolean;
}

const NeuralInterface2025PromotionBanner: React.FC = () => {
  const [currentIndexsetCurrentIndex] = useState(0);
  const [isVisiblesetIsVisible] = useState(true);

  const neuralInterfaceContent: ContentItem[] = [
    {
      id: 'neural-interfaces-business-revolution',
      title: 'AI 2025: The Neural Interfaces Business Revolution - Ultimate Enterprise Guide',
      type: 'blog',
      url: '/blog/ai-2025-neural-interfaces-business-revolution-ultimate-guide',
      description: 'Transform your business with brain-computer interface technology achieving 800% ROI in 12 months.',
      metrics: {
        roi: '800%',
        savings: '$50M+',
        efficiency: '95%'
      },
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'fortune-500-neural-transformation',
      title: 'Fortune 500 Neural Interface Transformation: 800% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-neural-interface-transformation-800-roi-success',
      description: 'How a Global Manufacturing Giant achieved $75M annual savings with neural interface technology.',
      metrics: {
        roi: '800%',
        savings: '$75M',
        efficiency: '98%'
      },
      readingTime: '18 min read',
      featured: true
    },
    {
      id: 'neural-interface-implementation-guide',
      title: 'Neural Interface Implementation Master Guide 2025: From Strategy to 800% ROI',
      type: 'resource',
      url: '/resources/neural-interface-implementation-guide-2025',
      description: 'Complete framework for enterprise neural interface deployment with proven 800% ROI results.',
      metrics: {
        roi: '800%',
        savings: '$50M+',
        efficiency: '95%'
      },
      readingTime: '30 min read',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % neuralInterfaceContent.length);
    }5000);

    return () => clearInterval(interval);
  }[neuralInterfaceContent.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('neural-interface-banner-'dismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('neural-interface-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }[]);

  if (!isVisible) return null;

  const currentContent = neuralInterfaceContent[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-300">NEW NEURAL INTERFACE CONTENT</span>
              </div>
              <div className="hidden sm:flex items-center space-x-4 text-sm text-blue-200">
                <span>800% ROI</span>
                <span>•</span>
                <span>$50M+ Savings</span>
                <span>•</span>
                <span>95% Efficiency</span>
              </div>
            </div>

            {/* Content showcase */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                🧠 Neural Interface Revolution 2025
              </h2>
              <p className="text-lg text-blue-100 mb-4">
                Discover how Fortune 500 companies are achieving 800% ROI with brain-computer interface technology
              </p>

              {/* Current content item */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-purple-500/30 text-purple-200 text-xs font-medium rounded">
                        {currentContent.type === 'blog' ? 'GUIDE' : currentContent.type === 'case-study' ? 'CASE STUDY' : 'RESOURCE'}
                      </span>
                      <span className="text-sm text-blue-200">{currentContent.readingTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                      {currentContent.title}
                    </h3>
                    <p className="text-blue-100 text-sm mb-3 line-clamp-2">
                      {currentContent.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <span className="text-green-300 font-semibold">{currentContent.metrics.roi} ROI</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-blue-300 font-semibold">{currentContent.metrics.savings} Savings</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-purple-300 font-semibold">{currentContent.metrics.efficiency} Efficiency</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content indicators */}
              <div className="flex items-center space-x-2">
                {neuralInterfaceContent.map((_index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="ml-6 flex flex-col space-y-3">
            <a
              href={currentContent.url}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Read Now
            </a>
            <a
              href="/contact"
              className="border-2 border-white/30 hover:border-white/50 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10"
            >
              Get Assessment
            </a>
            <button
              onClick={handleDismiss}
              className="text-white/60 hover:text-white text-sm transition-colors duration-300"
            >
              Dismiss
            </button>
          </div>
        </div>

        {/* Success metrics summary */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-300">800%</div>
            <div className="text-xs text-blue-200">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-300">$50M+</div>
            <div className="text-xs text-blue-200">Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-300">95%</div>
            <div className="text-xs text-blue-200">Efficiency Gain</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-300">98%</div>
            <div className="text-xs text-blue-200">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterface2025PromotionBanner;