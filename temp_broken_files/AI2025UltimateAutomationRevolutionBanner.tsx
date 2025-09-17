"use client";
'use client';

import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  metrics: {
    roi: string;
    savings: string;
    efficiency: string;
  };
}

const AI2025UltimateAutomationRevolutionBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: 'ultimate-automation-revolution',
      title: 'AI 2025: The Ultimate Business Automation Revolution - 25,000% ROI Guide',
      type: 'blog',
      url: '/blog/ai-2025-ultimate-business-automation-revolution',
      metrics: {
        roi: '25,000%',
        savings: '$500B+',
        efficiency: '3,200%'
      }
    },
    {
      id: 'fortune-500-automation-success',
      title: 'Fortune 500 Ultimate Automation Success: $500B Annual Savings - 25,000% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-ultimate-automation-25000-roi-success',
      metrics: {
        roi: '25,000%',
        savings: '$500B',
        efficiency: '99%'
      }
    },
    {
      id: 'implementation-guide',
      title: 'Ultimate AI Automation Implementation Guide: Complete Roadmap to 25,000% ROI',
      type: 'resource',
      url: '/resources/ultimate-ai-automation-implementation-guide',
      metrics: {
        roi: '25,000%',
        savings: '$500B+',
        efficiency: '3,200%'
      }
    }
  ];

  useEffect(() => {
    const dismissed = localStorage.getItem('ai2025-ultimate-automation-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('ai2025-ultimate-automation-banner-dismissed', 'true');
  };

  if (isDismissed) return null;

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
      <div className="absolute top-8 right-8 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center space-x-4 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-400 text-gray-900 animate-pulse">
                🚀 REVOLUTIONARY BREAKTHROUGH
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-400 text-gray-900">
                ⚡ 25,000% ROI
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              AI 2025: The Ultimate Business Automation Revolution
            </h2>

            <div className="flex flex-wrap items-center gap-6 mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400 font-bold text-lg">25,000%</span>
                <span className="text-sm opacity-90">ROI</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400 font-bold text-lg">$500B+</span>
                <span className="text-sm opacity-90">Savings</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-blue-400 font-bold text-lg">3,200%</span>
                <span className="text-sm opacity-90">Efficiency</span>
              </div>
            </div>

            <p className="text-lg opacity-90 mb-6 max-w-3xl">
              Transform your enterprise with revolutionary AI automation delivering unprecedented returns and operational excellence.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={currentItem.url}
                className="inline-flex items-center px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
              >
                Explore {currentItem.type === 'blog' ? 'Guide' : currentItem.type === 'case-study' ? 'Case Study' : 'Resource'}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Get Consultation
              </a>

              <a
                href="/services"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors"
              >
                View Services
              </a>
            </div>
          </div>

          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="ml-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-yellow-400' : 'bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AI2025UltimateAutomationRevolutionBanner;