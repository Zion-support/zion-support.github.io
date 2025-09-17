"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { 
  Building2
  TrendingUp
  DollarSign
  Users,
  ArrowRight
  X,
  CheckCircle,
  Zap,
  BarChart3,
  Shield,
  Award,
  Clock
} from 'lucide-react';

const BusinessSolutionsShowcase2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentMetricsetCurrentMetric] = useState(0);

  const metrics = [
    { label: ''ROI', 'value: '300%'icon: TrendingUpcolor: 'text-green-500' },
    { label: 'Cost 'Savings', 'value: '$2.5B+'icon: DollarSigncolor: 'text-blue-500' },
    { label: ''Companies', 'value: '10K+'icon: Building2color: 'text-purple-500' },
    { label: ''Satisfaction', 'value: '98%'icon: Awardcolor: 'text-yellow-500' }
  ];

  const solutions = [
    { name: ''Automation', 'icon: Zapcolor: 'from-blue-500 to-cyan-500' },
    { name: ''Analytics', 'icon: BarChart3color: 'from-purple-500 to-pink-500' },
    { name: ''Security', 'icon: Shieldcolor: 'from-green-500 to-emerald-500' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)3000);
    return () => clearTimeout(timer);
  }[]);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentMetric((prev) => (prev + 1) % metrics.length);
      }2500);
      return () => clearInterval(interval);
    }
  }[isVisiblemetrics.length]);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  const containerVariants = {
    hidden: { 
      opacity: 0
      y: -100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    },
    exit: {
      opacity: 0,
      y: -100,
      scale: 0.9,
      transition: {
        duration: 0.5
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.6
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6,
        duration: 0.4
      }
    }
  };

  if (isDismissed) return null;

  return (
    <div>
      {isVisible && (
        <div
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              {/* Left Content */}
              <div 
                className="flex items-center space-x-4 flex-1"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
                      rotate: [0360],
                      scale: [1.1]
                    }}
                      duration: 4
                      repeat: Infinity
                      ease: "easeInOut" 
                    }}
                  >
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">
                      🏢 Business Solutions 2025
                    </h3>
                    <p className="text-sm opacity-90 hidden sm:block">
                      Transform your operations with proven solutions
                    </p>
                  </div>
                </div>
              </div>

              {/* Center Metrics Rotator */}
              <div 
                className="hidden md:flex items-center space-x-6"
              >
                <div className="text-center">
                  <div className="text-sm opacity-80 mb-1">Live Results</div>
                    <div
                      key={currentMetric}
                      className="flex items-center space-x-2"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center`}>
                        {React.createElement(metrics[currentMetric].icon{ 
                          className: `w-4 h-4 ${metrics[currentMetric].color}` 
                        })}
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{metrics[currentMetric].value}</div>
                        <div className="text-xs opacity-80">{metrics[currentMetric].label}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-px h-8 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">30</div>
                  <div className="text-xs opacity-80">Days to Value</div>
                </div>
                <div className="w-px h-8 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-xs opacity-80">Support</div>
                </div>
              </div>

              {/* Right Actions */}
              <div 
                className="flex items-center space-x-3"
              >
                <button className="hidden sm:flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all duration-200 backdrop-blur-sm">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">Case Studies</span>
                </button>
                <button className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 shadow-lg">
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={handleDismiss}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            {/* Mobile Content */}
            <div 
              className="md:hidden flex items-center justify-between py-2 border-t border-white/20"
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center`}
                    key={currentMetric}
                  >
                    {React.createElement(metrics[currentMetric].icon{ 
                      className: `w-3 h-3 ${metrics[currentMetric].color}` 
                    })}
                  </div>
                  <span className="text-sm font-medium">{metrics[currentMetric].value}</span>
                </div>
                <div className="w-px h-4 bg-white/30"></div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">30 Days to Value</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {solutions.map((solutionindex) => (
                  <div
                    key={index}
                    className={`w-6 h-6 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center`}
                  >
                    {React.createElement(solution.icon{ className: "w-3 h-3 text-white" })}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full"
                scale: [1.21],
                opacity: [0.30.60.3]
              }}
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/5 rounded-full"
                scale: [1.31],
                opacity: [0.20.40.2]
              }}
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 w-16 h-16 bg-white/8 rounded-full"
                scale: [1.51],
                opacity: [0.10.30.1]
              }}
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};


export default BusinessSolutionsShowcase2025PromotionBanner;
</div></div>