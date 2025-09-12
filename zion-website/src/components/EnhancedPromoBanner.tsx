'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface PromoItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  href: string;
  bgGradient: string;
  icon: string;
  badge?: string;
}

const EnhancedPromoBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const promoItems: PromoItem[] = [
    {
      id: '1',
      title: '🚀 New: Autonomous Enterprise Agents',
      subtitle: 'Latest Release',
      description: 'Build AI agents that operate independently while maintaining enterprise security and compliance. Complete guide with real-world implementations.',
      cta: 'Explore Guide',
      href: '/blog/ai-2025-autonomous-enterprise-agents',
      bgGradient: 'from-emerald-600 via-teal-600 to-cyan-600',
      icon: '🤖',
      badge: 'NEW'
    },
    {
      id: '2',
      title: '📊 Case Study: 85% Efficiency Gains',
      subtitle: 'Real Results',
      description: 'See how a Fortune 500 company achieved massive efficiency improvements through autonomous AI agents across operations.',
      cta: 'Read Case Study',
      href: '/case-studies/ai-2025-autonomous-enterprise-transformation',
      bgGradient: 'from-orange-600 via-red-600 to-pink-600',
      icon: '📈',
      badge: 'FEATURED'
    },
    {
      id: '3',
      title: '🏗️ Generative AI Platforms 2025',
      subtitle: 'Enterprise Guide',
      description: 'Build enterprise-grade generative AI platforms that scale with governance and cost optimization.',
      cta: 'Learn More',
      href: '/blog/ai-2025-generative-ai-platforms',
      bgGradient: 'from-purple-600 via-pink-600 to-red-600',
      icon: '⚡',
      badge: 'TRENDING'
    },
    {
      id: '4',
      title: '📚 Content Library: 100+ Resources',
      subtitle: 'Complete Collection',
      description: 'Access our comprehensive library of AI guides, case studies, and technical resources for enterprise implementation.',
      cta: 'Browse All',
      href: '/content-showcase',
      bgGradient: 'from-indigo-600 via-purple-600 to-pink-600',
      icon: '📖',
      badge: 'POPULAR'
    }
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % promoItems.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isHovered, promoItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % promoItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + promoItems.length) % promoItems.length);
  };

  const currentItem = promoItems[currentIndex];

  return (
    <section className="relative overflow-hidden">
      <div 
        className={`bg-gradient-to-r ${currentItem.bgGradient} text-white transition-all duration-1000 ease-in-out`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <span className="text-4xl">{currentItem.icon}</span>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-medium text-white/80">{currentItem.subtitle}</span>
                    {currentItem.badge && (
                      <span className="px-2 py-1 bg-white/20 text-xs font-bold rounded-full">
                        {currentItem.badge}
                      </span>
                    )}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                    {currentItem.title}
                  </h2>
                </div>
              </div>
              
              <p className="text-lg text-white/90 leading-relaxed">
                {currentItem.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={currentItem.href}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  {currentItem.cta}
                  <span className="ml-2">→</span>
                </Link>
                <Link
                  href="/content-showcase"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  View All Content
                </Link>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-square bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                <div className="text-8xl opacity-50">
                  {currentItem.icon}
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
          <button
            onClick={prevSlide}
            className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors"
          >
            <span className="text-xl">◀</span>
          </button>
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <button
            onClick={nextSlide}
            className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors"
          >
            <span className="text-xl">▶</span>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {promoItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full">
        <div 
          className="h-full bg-white transition-all duration-6000 ease-linear"
          style={{ width: '100%' }}
        />
      </div>
    </section>
  );
};

export default EnhancedPromoBanner;