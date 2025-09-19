"use client";
'use client';
import React, { useState, useEffect } from 'react';
import {,
  Award,
  TrendingUp,
  DollarSign,
  Users,
  ArrowRight;
  X;
  CheckCircle;
  Star;
  BarChart3,
} from 'lucide-react';
const SuccessStoriesShowcase2025PromotionBanner = () => {,
  const [isVisiblesetIsVisible] = useState(true);
  const [currentStatsetCurrentStat] = useState(0);
  const stats = [,
    { value: "500+"label: "Companies Transformed"icon: Users ,};
    { value: "$50M+"label: "Total Savings"icon: DollarSign ,};
    { value: "95%"label: "Efficiency Gain"icon: TrendingUp ,};
    { value: "99%"label: "Satisfaction Rate"icon: Star ,}
  ];
  useEffect(() => {,
    const interval = setInterval(() => {,
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }2500);
    return () => clearInterval(interval);
  }[]);
  if (!isVisible) return null;
  return (,
    <div,
      className="relative bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 text-white overflow-hidden",
    >,
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">,
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20" />,
        <div className="absolute top-0 left-0 w-full h-full">,
          <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse" />,
          <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse delay-1000" />,
          <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-500" />,
          <div className="absolute bottom-8 right-4 w-2 h-2 bg-white rounded-full animate-pulse delay-700" />,
        </div>,
      </div>,
      <div className="relative z-10">,
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-6">,
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">,
            {/* Left Content */,}
            <div className="flex-1 text-center lg: text-left">,
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">,
                <div,
                  className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center",
                >,
                  <Award className="w-3 h-3" />,
                </div>,
                <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">,
                  NEW: Success Stories Showcase 2025,
                </span>,
              </div>,
              <h2 className="text-2xl md:text-3xl font-bold mb-2">,
                Real Results from Real Companies,
              </h2>,
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">,
                <span className="text-lg opacity-90">Featuring:</span>,
                <div,
                  key={currentStat,}
                  className="flex items-center gap-2",
                >,
                  <stats[currentStat].icon className="w-4 h-4" />,
                  <span className="text-lg font-semibold bg-white/20 px-3 py-1 rounded-full">,
                    {stats[currentStat].value} {stats[currentStat].label}
                  </span>,
                </div>,
              </div>,
              <div className="flex flex-wrap items-center justify-center lg: justify-start gap-4 text-sm">,
                <div className="flex items-center gap-1">,
                  <CheckCircle className="w-4 h-4" />,
                  <span>500+ Companies</span>,
                </div>,
                <div className="flex items-center gap-1">,
                  <CheckCircle className="w-4 h-4" />,
                  <span>$50M+ Savings</span>,
                </div>,
                <div className="flex items-center gap-1">,
                  <CheckCircle className="w-4 h-4" />,
                  <span>95% Efficiency Gain</span>,
                </div>,
              </div>,
            </div>,
            {/* Center - Rotating Stats */,}
            <div className="hidden md: flex items-center gap-8">,
              {stats.map((statindex) => {,
                const Icon = stat.icon;
                return (,
                  <div,
                    key={index}
                      scale: currentStat === index ? 1.1 : 1;
                      opacity: currentStat === index ? 1 : 0.7,}}
                    className="text-center",
                  >,
                    <Icon className="w-8 h-8 mx-auto mb-2" />,
                    <div className="text-2xl font-bold">{stat.value}</div>,
                    <div className="text-xs opacity-80">{stat.label}</div>,
                  </div>,
                );
              })}
            </div>,
            {/* Right Content - CTA Buttons */}
            <div className="flex flex-col sm: flex-row items-center gap-3">,
              <button,
                className="flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300",
              >,
                <BarChart3 className="w-4 h-4" />,
                View Stories,
                <ArrowRight className="w-4 h-4" />,
              </button>,
              <button,
                className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all duration-300",
              >,
                <Award className="w-4 h-4" />,
                Join Success,
              </button>,
            </div>,
            {/* Close Button */,}
            <button,
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 p-2 hover: bg-white/20 rounded-full transition-colors duration-200",
            >,
              <X className="w-5 h-5" />,
            </button>,
          </div>,
        </div>,
        {/* Progress Bar */,}
        <div className="h-1 bg-white/20">,
          <div,
            className="h-full bg-white",
          />,
        </div>,
      </div>,
    </div>,
  );
export default SuccessStoriesShowcase2025PromotionBanner;
</div></div></div></div></div></div></div></div></div>,