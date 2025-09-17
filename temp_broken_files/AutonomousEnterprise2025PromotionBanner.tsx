"use client";
import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'resource';
  url: string;
  roi: string;
  savings: string;
  readingTime: string;
  featured: boolean;
}

const AutonomousEnterprise2025PromotionBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  const contentItems: ContentItem[] = [
    {
      id: 'autonomous-enterprise-future',
      title: 'AI 2025: The Future of Autonomous Enterprise Systems - 40,000% ROI Revolution',
      type: 'blog',
      url: '/blog/ai-2025-future-of-autonomous-enterprise-systems',
      roi: '40,000%',
      savings: '$750B+',
      readingTime: '35 min read',
      featured: true
    },
    {
      id: 'fortune-500-autonomous-success',
      title: 'Fortune 500 Autonomous Enterprise Success: $750B Annual Savings - 40,000% ROI Success Story',
      type: 'case-study',
      url: '/case-studies/fortune-500-autonomous-enterprise-40000-roi-success',
      roi: '40,000%',
      savings: '$750B',
      readingTime: '25 min read',
      featured: true
    },
    {
      id: 'autonomous-enterprise-implementation-guide',
      title: 'Autonomous Enterprise Implementation Guide 2025: Complete Roadmap to 40,000% ROI',
      type: 'resource',
      url: '/resources/autonomous-enterprise-implementation-guide-2025-40000-roi',
      roi: '40,000%',
      savings: '$750B+',
      readingTime: '60 min read',
      featured: true
    }
  ];

  // Check if banner was previously dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('autonomous-enterprise-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      setIsVisible(false);
    }
  }, []);

  // Auto-rotate content every 8 seconds
  useEffect(() => {
    if (!isVisible || isDismissed) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [contentItems.length, isVisible, isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    localStorage.setItem('autonomous-enterprise-banner-dismissed', 'true');
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '📄';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog':
        return 'Blog Post';
      case 'case-study':
        return 'Case Study';
      case 'resource':
        return 'Implementation Guide';
      default:
        return 'Content';
    }
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  const currentItem = contentItems[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Progress indicator */}
      <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-8000 ease-linear"
           style={{ width: `${((currentIndex + 1) / contentItems.length) * 100}%` }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-4 py-2">
                <span className="text-2xl">🚀</span>
                <span className="text-sm font-semibold">NEW AUTONOMOUS ENTERPRISE CONTENT</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500 bg-opacity-20 rounded-full px-4 py-2">
                <span className="text-lg">💰</span>
                <span className="text-sm font-semibold">40,000% ROI</span>
              </div>
            </div>

            {/* Content showcase */}
            <div className="mb-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-2xl">
                    {getTypeIcon(currentItem.type)}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs font-medium bg-white bg-opacity-20 rounded-full px-3 py-1">
                      {getTypeLabel(currentItem.type)}
                    </span>
                    <span className="text-xs text-gray-300">{currentItem.readingTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 leading-tight">
                    {currentItem.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <span className="text-green-400">💰</span>
                      <span className="font-semibold text-green-400">{currentItem.roi} ROI</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-blue-400">💵</span>
                      <span className="font-semibold text-blue-400">{currentItem.savings} Savings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center space-x-4">
              <a
                href={currentItem.url}
                className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
              >
                <span>Read Now</span>
                <span>→</span>
              </a>
              <a
                href="/resources/autonomous-enterprise-implementation-guide-2025-40000-roi"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
              >
                Implementation Guide
              </a>
              <a
                href="/case-studies"
                className="border-2 border-white border-opacity-50 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                View All Case Studies
              </a>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="ml-6 text-white hover:text-gray-300 transition-colors"
            aria-label="Dismiss banner"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content navigation dots */}
        <div className="flex items-center justify-center space-x-2 mt-6">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white bg-opacity-40 hover:bg-opacity-60'
              }`}
              aria-label={`Go to content ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Success metrics overlay */}
      <div className="absolute bottom-4 right-4 bg-black bg-opacity-30 rounded-lg p-4 backdrop-blur-sm">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">40,000%</div>
          <div className="text-xs text-gray-300">Average ROI</div>
        </div>
      </div>
    </div>
  );
};

export default AutonomousEnterprise2025PromotionBanner;