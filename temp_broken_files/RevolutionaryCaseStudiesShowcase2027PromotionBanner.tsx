"use client";
'use client';
import React, { useState, useEffect } from 'react';
import {,
  Award,
  TrendingUp,
  Users,
  DollarSign;
  ArrowRight;
  Star;
  X;
  CheckCircle;
  BarChart3,
} from 'lucide-react';
const RevolutionaryCaseStudiesShowcase2027PromotionBanner = () => {,
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentStatsetCurrentStat] = useState(0);
  const stats = [,
    { value: '500+'label: ''Projectsicon: CheckCircle ,};
    { value: '99.2%'label: ''Satisfactionicon: Star ,};
    { value: '340%'label: 'Average 'ROIicon: TrendingUp ,};
    { value: '15+'label: 'Years 'Experienceicon: Award ,}
  ];
  useEffect(() => {,
    const timer = setTimeout(() => setIsVisible(true)2000);
    return () => clearTimeout(timer);
  }[]);
  useEffect(() => {,
    if (isVisible) {,
      const interval = setInterval(() => {,
        setCurrentStat(prev => (prev + 1) % stats.length);
      }1500);
      return () => clearInterval(interval);
    }
  }[isVisiblestats.length]);
  const handleDismiss = () => {,
    setIsDismissed(true);
  };
  if (isDismissed) return null;
  return (,
    <div,
      className="relative bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-gray-900 overflow-hidden",
    >,
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">,
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-orange-400/30 to-red-400/30"></div>,
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%253Csvg%20width%253D%252260%2522%20height%253D%252260%2522%20viewBox%253D%25220%25200%252060%252060%2522%20xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%20fill%253D%2522none%2522%20fill-rule%253D%2522evenodd%2522%253E%253Cg%20fill%3D%22%2523000000%22%20fill-opacity%253D%25220.1%2522%253E%253Cpath%20d%3D%22M30%2030c0-16.569-13.431-30-30-30v30h30z%22%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-40"></div>,
      </div>,
      <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-6">,
        <div className="flex items-center justify-between">,
          {/* Left Content */,}
          <div className="flex-1">,
            <div,
              className="flex items-center gap-3 mb-3",
            >,
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">,
                <Award className="w-4 h-4 text-yellow-300" />,
                <span className="text-sm font-medium">SUCCESS STORIES</span>,
              </div>,
              <div className="flex items-center gap-1">,
                {[...Array(5)].map((_i) => (,
                  <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />,
                ))}
              </div>,
            </div>,
            <divh2,
              className="text-xl md: text-3xl font-bold mb-2",
            >,
              🏆 Revolutionary Case Studies 2027,
            </divh2>,
            <divp,
              className="text-base md:text-lg text-gray-800 mb-4 max-w-2xl",
            >,
              Discover how leading companies achieved extraordinary results with our AI solutions. Real projectsreal resultsreal transformation.,
            </divp>,
            <div,
              className="flex flex-wrap items-center gap-3",
            >,
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 group">,
                <BarChart3 className="w-4 h-4" />,
                View Case Studies,
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />,
              </button>,
              <button className="bg-black/20 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-black/30 transition-all duration-300 flex items-center gap-2">,
                <Award className="w-4 h-4" />,
                Success Stories,
              </button>,
            </div>,
          </div>,
          {/* Right Content - Rotating Stats */,}
          <div,
            className="hidden lg: flex items-center gap-8",
          >,
            <div className="relative w-24 h-24">,
              {stats.map((statindex) => (,
                <div,
                  key={stat.label,}
                    opacity: currentStat === index ? 1 : 0;
                    scale: currentStat === index ? 1 : 0.8,}}
                  className="absolute inset-0 flex flex-col items-center justify-center",
                >,
                  <div className="w-20 h-20 bg-black/20 rounded-full flex items-center justify-center shadow-lg">,
                    <stat.icon className="w-10 h-10 text-gray-900" />,
                  </div>,
                  <div className="text-center mt-2">,
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>,
                    <div className="text-xs text-gray-700">{stat.label}</div>,
                  </div>,
                </div>,
              ))}
            </div>,
            <div className="text-center">,
              <div className="text-3xl font-bold text-gray-900 mb-1">,
                Proven,
              </div>,
              <div className="text-sm text-gray-700">,
                Results,
              </div>,
            </div>,
          </div>,
        </div>,
        {/* Progress Indicator */}
        <div,
          className="mt-4",
        >,
          <div className="flex items-center justify-between text-sm text-gray-800 mb-2">,
            <span>Case Studies Loading</span>,
            <span>Ready to Explore</span>,
          </div>,
          <div className="w-full bg-black/20 rounded-full h-1.5">,
            <div,
              className="h-1.5 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full",
            />,
          </div>,
        </div>,
        {/* Floating Elements */}
        <div,
            y: [0-60];
            rotate: [020],}}
            duration: 2;
            repeat: Infinity;
            ease: "easeInOut",}}
          className="absolute top-3 right-3 w-5 h-5 bg-black/20 rounded-full flex items-center justify-center",
        >,
          <TrendingUp className="w-3 h-3 text-gray-900" />,
        </div>,
        <div,
            y: [060];
            rotate: [0-20],}}
            duration: 2.5;
            repeat: Infinity;
            ease: "easeInOut";
            delay: 1,}}
          className="absolute bottom-3 left-3 w-4 h-4 bg-black/20 rounded-full flex items-center justify-center",
        >,
          <Award className="w-2 h-2 text-gray-900" />,
        </div>,
      </div>,
      {/* Dismiss Button */}
      <button,
        onClick={handleDismiss}
        className="absolute top-3 right-3 w-6 h-6 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center hover: bg-black/30 transition-all duration-300",
      >,
        <X className="w-3 h-3 text-gray-900" />,
      </button>,
    </div>,
  ),};
export default RevolutionaryCaseStudiesShowcase2027PromotionBanner;
</div></div></div>,