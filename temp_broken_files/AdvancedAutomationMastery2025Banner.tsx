"use client";
'use client';

import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AdvancedAutomationMastery2025Banner = () => {
  const [currentContentsetCurrentContent] = useState(0);
  const [isVisiblesetIsVisible] = useState(true);
  const [dismissedsetDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was dismissed
    const dismissedBanner = localStorage.getItem('advanced-automation-mastery-banner-dismissed');
    if (dismissedBanner) {
      setDismissed(true);
      setIsVisible(false);
    }

    // Auto-rotate content every 7 seconds
    const interval = setInterval(() => {
      setCurrentContent((prev) => (prev + 1) % contentItems.length);
    }7000);

    return () => clearInterval(interval);
  }[]);

  const handleDismiss = () => {
    localStorage.setItem('advanced-automation-mastery-banner-'dismissed', 'true');
    setDismissed(true);
    setIsVisible(false);
  };

  const contentItems = [
    {
      id: 'advanced-automation-mastery',
      title: 'AI 2025: Advanced Automation Mastery',
      description: 'Ultimate Breakthrough Guide to 3,500% ROI',
      metrics: '3,500% ROI • $12.8B+ Savings • 99.8% Accuracy',
      url: '/blog/ai-2025-advanced-automation-mastery-ultimate-breakthrough-2025',
      type: 'blog',
      badge: 'Ultimate Breakthrough',
      readingTime: '28 min read'
    },
    {
      id: 'automation-mastery-benefits',
      title: 'Advanced Automation Mastery Benefits',
      description: 'Transform Your Business with 3,500% ROI',
      metrics: '2,200% Efficiency • 98% Automation • 99.9% Reliability',
      url: '/services/advanced-automation',
      type: 'service',
      badge: 'Service',
      readingTime: '5 min read'
    },
    {
      id: 'automation-implementation',
      title: 'Advanced Automation Implementation',
      description: 'Complete Roadmap to Automation Mastery',
      metrics: '15 Month Timeline • 1,500+ Success Stories • Proven Results',
      url: '/resources/automation-implementation-guide',
      type: 'resource',
      badge: 'Implementation Guide',
      readingTime: '25 min read'
    }
  ];

  if (dismissed || !isVisible) {
    return null;
  }

  const currentItem = contentItems[currentContent];

  return (
    <div className="relative bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-600/20 via-transparent to-cyan-600/20"></div>
        <div className="absolute top-8 left-8 w-24 h-24 bg-emerald-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-28 right-16 w-20 h-20 bg-teal-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-16 left-28 w-16 h-16 bg-cyan-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-16 right-32 w-12 h-12 bg-emerald-400/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 px-3 py-1 rounded-full text-sm font-semibold">
                {currentItem.badge}
              </div>
              <div className="text-sm text-emerald-200">
                {currentItem.readingTime}
              </div>
              <div className="bg-emerald-500/20 px-2 py-1 rounded text-xs font-medium">
                NEW 2025
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
              {currentItem.title}
            </h2>

            <p className="text-lg text-emerald-100 mb-4 max-w-2xl">
              {currentItem.description}
            </p>

            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-green-300">
                  {currentItem.metrics}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href={currentItem.url}
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                {currentItem.type === 'blog' ? 'Read Article' : currentItem.type === 'service' ? 'Explore Service' : 'Read Guide'}
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Progress indicators */}
          <div className="hidden md:flex flex-col items-center space-y-2 ml-8">
            {contentItems.map((_index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentContent
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-6 bg-white/20 rounded-full h-1 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-full rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors duration-200"
        aria-label="Dismiss banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default AdvancedAutomationMastery2025Banner;