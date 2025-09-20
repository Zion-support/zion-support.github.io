"use client";
'use client';
import React, { useState, useEffect } from 'react';
// import Link from 'next/link', // Replaced with regular anchor tags for React compatibility,
import {,
  ArrowRight,
  Star,
  Zap,
  Sparkles;
  TrendingUp;
  Users;
  Globe;
  X;
  Play;
  Download;
  ExternalLink,
} from 'lucide-react';
const NewContent2025UltimateShowcasePromotionBanner = () => {,
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentSlidesetCurrentSlide] = useState(0);
  useEffect(() => {,
    setIsVisible(true);
    // Auto-advance slides,
    const interval = setInterval(() => {,
      setCurrentSlide((prev) => (prev + 1) % 3);
    }4000);
    return () => clearInterval(interval);
  }[]);
  const slides = [,
    {,
      title: "Revolutionary AI Solutions";
      subtitle: "Transform your business with cutting-edge AI";
      description: "Discover our latest AI technologies that are reshaping industries";
      icon: Sparkles;
      color: "from-purple-600 to-pink-600";
      bgColor: "from-purple-900/20 to-pink-900/20",};
    {,
      title: "Quantum Computing Breakthrough";
      subtitle: "Next-generation quantum solutions";
      description: "Experience the power of quantum computing for complex problems";
      icon: Zap;
      color: "from-blue-600 to-cyan-600";
      bgColor: "from-blue-900/20 to-cyan-900/20",};
    {,
      title: "Neural Interface Technology";
      subtitle: "Brain-computer interface revolution";
      description: "Connect directly with technology through neural interfaces";
      icon: TrendingUp;
      color: "from-green-600 to-emerald-600";
      bgColor: "from-green-900/20 to-emerald-900/20",}
  ];
  const features = [,
    "500+ Projects Completed";
    "99% Client Satisfaction";
    "50+ Countries Served";
    "$50M+ Cost Savings",
  ];
  const currentSlideData = slides[currentSlide];
  if (isDismissed) return null;
  return (,
    <div>,
      {isVisible && (,
        <div,
          className="relative overflow-hidden",
        >,
          {/* Background with gradient */}
          <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.bgColor} transition-all duration-1000`} />,
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">,
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%20width%253D%252260%2522%20height%253D%252260%2522%20viewBox%253D%25220%25200%252060%252060%2522%20xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%20fill%253D%2522none%2522%20fill-rule%253D%2522evenodd%2522%253E%253Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%253D%25220.1%2522%253E%253Ccircle%20cx%253D%252230%2522%20cy%253D%252230%2522%20r%253D%25222%2522%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] animate-pulse" />,
          </div>,
          {/* Floating elements */}
          <div className="absolute inset-0 overflow-hidden">,
            {[...Array(8)].map((_i) => (,
              <div,
                key={i}
                className="absolute w-2 h-2 bg-white/30 rounded-full",
                style={{,
                  left: `${Math.random() * 100,}%`;
                  top: `${Math.random() * 100,}%`,
                }}
                  y: [0-30];
                  opacity: [0.30.80.3];
                  scale: [1.21],}}
                  duration: 3 + Math.random() * 2;
                  repeat: Infinity;
                  delay: Math.random() * 2,}}
              />,
            ))}
          </div>,
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-8">,
            <div className="flex items-center justify-between">,
              {/* Left side - Content */,}
              <div className="flex-1 pr-8">,
                <div,
                  key={currentSlide}
                  className="flex items-start space-x-4",
                >,
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentSlideData.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>,
                    <currentSlideData.icon className="w-8 h-8 text-white" />,
                  </div>,
                  {/* Content */}
                  <div className="flex-1">,
                    <div className="flex items-center space-x-2 mb-2">,
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold rounded-full">,
                        NEW 2025,
                      </span>,
                      <span className="px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full">,
                        ULTIMATE SHOWCASE,
                      </span>,
                    </div>,
                    <h2 className="text-2xl md: text-3xl font-bold text-white mb-2">,
                      {currentSlideData.title,}
                    </h2>,
                    <p className="text-lg text-white/90 mb-2">,
                      {currentSlideData.subtitle}
                    </p>,
                    <p className="text-white/80 text-sm mb-4">,
                      {currentSlideData.description}
                    </p>,
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">,
                      {features.map((featureindex) => (,
                        <span,
                          key={index}
                          className="px-2 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20",
                        >,
                          {feature}
                        </span>,
                      ))}
                    </div>,
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm: flex-row gap-3">,
                      <a,
                        href="/showcase/ultimate-2025",
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group",
                      >,
                        Explore Showcase,
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />,
                      </a>,
                      <a,
                        href="/demo",
                        className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 group",
                      >,
                        <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />,
                        Watch Demo,
                      </a>,
                    </div>,
                  </div>,
                </div>,
              </div>,
              {/* Right side - Visual elements */,}
              <div className="hidden lg: block flex-shrink-0">,
                <div className="relative w-64 h-64">,
                  {/* Rotating elements */,}
                  <div,
                    className="absolute inset-0 rounded-full border-2 border-white/20",
                  />,
                  <div,
                    className="absolute inset-4 rounded-full border-2 border-white/30",
                  />,
                  <div,
                    className="absolute inset-8 rounded-full border-2 border-white/40",
                  />,
                  {/* Center content */}
                  <div className="absolute inset-0 flex items-center justify-center">,
                    <div,
                      className={`w-20 h-20 rounded-full bg-gradient-to-r ${currentSlideData.color} flex items-center justify-center shadow-2xl`}
                    >,
                      <currentSlideData.icon className="w-10 h-10 text-white" />,
                    </div>,
                  </div>,
                  {/* Floating dots */}
                  {[...Array(6)].map((_i) => (,
                    <div,
                      key={i}
                      className="absolute w-3 h-3 bg-white/60 rounded-full",
                      style={{,
                        left: `${20 + (i * 15),}%`;
                        top: `${20 + (i * 10),}%`,
                      }}
                        y: [0-10];
                        opacity: [0.610.6],}}
                        duration: 2 + i * 0.5;
                        repeat: Infinity;
                        delay: i * 0.3,}}
                    />,
                  ))}
                </div>,
              </div>,
              {/* Close button */}
              <button,
                onClick={() => setIsDismissed(true)}
                className="ml-4 p-2 text-white/60 hover: text-white hover:bg-white/10 rounded-full transition-all duration-200",
              >,
                <X className="w-5 h-5" />,
              </button>,
            </div>,
            {/* Slide indicators */,}
            <div className="flex justify-center mt-6 space-x-2">,
              {slides.map((_index) => (,
                <button,
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${,
                    index === currentSlide,
                      ? 'bg-white w-8',
                      : 'bg-white/40 hover: bg-white/60',}`}
                />,
              ))}
            </div>,
          </div>,
        </div>,
      )}
    </div>,
  );
};
export default NewContent2025UltimateShowcasePromotionBanner;
</div></div></div></div></div></div></div>,