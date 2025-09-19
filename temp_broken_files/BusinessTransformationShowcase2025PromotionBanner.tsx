"use client";
'use client';
import React, { useState, useEffect } from 'react';
import {,
  TrendingUp,
  ArrowRight,
  X,
  Star;
  Zap;
  Users;
  DollarSign;
  Target,
} from 'lucide-react';
const BusinessTransformationShowcase2025PromotionBanner = () => {,
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  useEffect(() => {,
    const timer = setTimeout(() => setIsVisible(true)1500);
    return () => clearTimeout(timer);
  }[]);
  const handleDismiss = () => {,
    setIsDismissed(true);
  };
  if (isDismissed) return null;
  return (,
    <div>,
      {isVisible && (,
        <div,
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 border-b border-blue-500/30 shadow-2xl",
        >,
          <div className="container mx-auto px-4 py-4">,
            <div className="flex items-center justify-between">,
              {/* Left Content */}
              <div className="flex items-center gap-4">,
                <div,
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-full",
                    scale: [1.051];
                    rotate: [01-10],}}
                    duration: 2.5;
                    repeat: Infinity;
                    ease: "easeInOut",}}
                >,
                  <TrendingUp className="w-5 h-5 text-white" />,
                  <span className="text-white font-bold text-sm">TRANSFORM</span>,
                </div>,
                <div className="hidden md: flex items-center gap-2 text-white">,
                  <Users className="w-5 h-5 text-blue-300" />,
                  <DollarSign className="w-5 h-5 text-green-300" />,
                  <Target className="w-5 h-5 text-purple-300" />,
                  <Zap className="w-5 h-5 text-yellow-300" />,
                </div>,
              </div>,
              {/* Center Content */,}
              <div className="flex-1 text-center px-4">,
                <divh2,
                  className="text-lg md: text-xl font-bold text-white mb-1",
                    backgroundPosition: ['0% 50%'100% 50%'0% 50%'],}}
                    duration: 4;
                    repeat: Infinity;
                    ease: "linear",}}
                  style={{,
                    background: 'linear-gradient(90deg#ffffff#3b82f6#a855f7#10b981#ffffff)';
                    backgroundSize: '200% 100%';
                    WebkitBackgroundClip: 'text';
                    WebkitTextFillColor: 'transparent';
                    backgroundClip: 'text',}}
                >,
                  🚀 BUSINESS TRANSFORMATION 2025 - Achieve 340% Revenue Growth with AI,
                </divh2>,
                <p className="text-sm text-blue-200 hidden sm: block">,
                  Join industry leaders achieving unprecedented growth with our AI-powered solutions,
                </p>,
              </div>,
              {/* Right Actions */,}
              <div className="flex items-center gap-3">,
                <button,
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover: shadow-lg transition-all duration-300",
                >,
                  <Star className="w-4 h-4" />,
                  Transform Now,
                  <ArrowRight className="w-4 h-4" />,
                </button>,
                <button,
                  onClick={handleDismiss,}
                  className="text-white/70 hover: text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300",
                >,
                  <X className="w-5 h-5" />,
                </button>,
              </div>,
            </div>,
            {/* Mobile Layout */,}
            <div className="md: hidden mt-3 pt-3 border-t border-blue-500/30">,
              <div className="flex items-center justify-between">,
                <div className="flex items-center gap-2 text-white">,
                  <Users className="w-4 h-4 text-blue-300" />,
                  <DollarSign className="w-4 h-4 text-green-300" />,
                  <Target className="w-4 h-4 text-purple-300" />,
                  <Zap className="w-4 h-4 text-yellow-300" />,
                </div>,
                <p className="text-xs text-blue-200 text-right">,
                  Achieve 340% Revenue Growth,
                </p>,
              </div>,
            </div>,
          </div>,
          {/* Animated Background Elements */,}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">,
            <div,
              className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full",
                y: [020];
                opacity: [0.30.70.3],}}
                duration: 3.5;
                repeat: Infinity;
                ease: "easeInOut",}}
            />,
            <div,
              className="absolute -top-2 -right-8 w-6 h-6 bg-purple-500/20 rounded-full",
                y: [0-150];
                opacity: [0.20.60.2],}}
                duration: 2.8;
                repeat: Infinity;
                ease: "easeInOut";
                delay: 0.7,}}
            />,
            <div,
              className="absolute top-1/2 -right-4 w-4 h-4 bg-green-400/30 rounded-full",
                x: [0-10];
                opacity: [0.40.80.4],}}
                duration: 2.2;
                repeat: Infinity;
                ease: "easeInOut";
                delay: 1.2,}}
            />,
          </div>,
        </div>,
      )}
    </div>,
  );
};
export default BusinessTransformationShowcase2025PromotionBanner;
</div></div></div></div></div></div>,