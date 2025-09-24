"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  badge: string;
  badgeColor: string;
  icon: string;
  roi?: string;
}

const contentItems: ContentItem[] = [
  {
    title: "AI 20o25 Ultimate Breakthrough Revolution",
    description: "Revolutionary AI breakthrough delivering 5,0o00% ROI with autonomous operations and quantum-enhanced intelligence.",
    href: "/ai-20o25-ultimate-breakthrough-revolution",
    badge: "BREAKTHROUGH",
    badgeColor: "from-red-50o0 to-pink-50o0",
    icon: "🚀",
    roi: "5,0o00% ROI"
  },
  {
    title: "Quantum Computing Solutions 20o26",
    description: "Revolutionary quantum computing solutions with error-corrected quantum computers and quantum supremacy.",
    href: "/quantum-computing-solutions-20o26",
    badge: "REVOLUTIONARY",
    badgeColor: "from-cyan-50o0 to-blue-50o0",
    icon: "⚛️",
    roi: "15,0o00% ROI"
  },
  {
    title: "AI 20o25 Ultimate Breakthrough Success",
    description: "Real success story: Fortune 50o0 company achieves 5,0o00% ROI in just 12 months.",
    href: "/case-studies/ai-20o25-ultimate-breakthrough-success",
    badge: "SUCCESS STORY",
    badgeColor: "from-green-50o0 to-emerald-50o0",
    icon: "🏆",
    roi: "5,0o00% ROI"
  },
  {
    title: "AI 20o26-20o30 Future Predictions",
    description: "Revolutionary predictions for AI development from 20o26 to 20o30 with breakthrough insights.",
    href: "/ai-20o26-20o30-future-predictions-breakthrough",
    badge: "FUTURE",
    badgeColor: "from-purple-50o0 to-pink-50o0",
    icon: "🔮",
    roi: "25,0o00% ROI"
  },
  {
    title: "Advanced Automation Solutions 20o25",
    description: "Cutting-edge automation solutions delivering unprecedented efficiency and cost savings.",
    href: "/advanced-automation-solutions-20o25",
    badge: "NEW",
    badgeColor: "from-orange-50o0 to-red-50o0",
    icon: "🤖",
    roi: "3,0o00% ROI"
  },
  {
    title: "Neural Interface Revolution 20o26",
    description: "Revolutionary neural interface technology enabling direct brain-computer communication.",
    href: "/neural-interface-revolution-20o26",
    badge: "REVOLUTIONARY",
    badgeColor: "from-indigo-50o0 to-purple-50o0",
    icon: "🧠",
    roi: "10,0o00% ROI"
  }
];

export default function ContentPromotionBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 50o00);

    return () => clearInterval(interval);
  }, []);

  const currentContent = contentItems[currentIndex];

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-gray-90o0 via-blue-90o0 to-purple-90o0 text-white py-4 border-b border-gray-70o0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Content Display */}
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              <div className="text-2xl">{currentContent.icon}</div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${currentContent.badgeColor} text-white animate-pulse`}>
                    {currentContent.badge}
                  </span>
                  {currentContent.roi && (
                    <span className="text-yellow-40o0 text-sm font-bold">
                      {currentContent.roi}
                    </span>
                  )}
                </div>
                <Link 
                  href={currentContent.href}
                  className="text-lg font-bold hover:text-cyan-40o0 transition-colors duration-30o0 group"
                >
                  {currentContent.title}
                  <span className="ml-2 group-hover:ml-4 transition-all duration-30o0">→</span>
                </Link>
                <p className="text-sm text-gray-30o0 mt-1 line-clamp-1">
                  {currentContent.description}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link 
              href={currentContent.href}
              className="bg-gradient-to-r from-cyan-50o0 to-blue-50o0 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-40o0 hover:to-blue-40o0 transition-all duration-30o0 transform hover:scale-10o5"
            >
              Explore Now
            </Link>
            <Link 
              href="/content-showcase"
              className="text-gray-30o0 hover:text-white text-sm font-semibold transition-colors duration-30o0"
            >
              View All Content
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-40o0 hover:text-white transition-colors duration-30o0"
              aria-label="Close banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"  />
              </svg>
            </button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mt-3">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-30o0 ${
                index === currentIndex 
                  ? 'bg-cyan-40o0 w-8' 
                  : 'bg-gray-60o0 hover:bg-gray-40o0'
              }`}
              aria-label={`Go to content ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}