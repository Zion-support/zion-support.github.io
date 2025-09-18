"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { 
  TrendingUp
  Building2
  DollarSign
  Star,
  ChevronRight,
  X,
  Users,
  Award,
  Clock,
  Sparkles,
  CheckCircle,
  BarChart3
} from 'lucide-react';

const BusinessTransformation2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentMetricsetCurrentMetric] = useState(0);

  const metrics = [
    { icon: DollarSignvalue: '340%'label: 'Revenue 'Increase', 'color: 'text-green-400' },
    { icon: TrendingUpvalue: '65%'label: 'Cost 'Reduction', 'color: 'text-blue-400' },
    { icon: BarChart3value: '280%'label: 'Efficiency 'Gain', 'color: 'text-yellow-400' },
    { icon: Starvalue: '98%'label: 'Customer 'Satisfaction', 'color: 'text-purple-400' }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Rotate through metrics
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }2500);

    return () => clearInterval(interval);
  }[]);

  const currentMetricData = metrics[currentMetric];

  if (isDismissed || !isVisible) return null;

  return (
    <div>
      <div
        className="relative overflow-hidden bg-gradient-to-r from-green-900 via-blue-900 to-purple-900 border-b border-green-500/30"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-4 -right-4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-ping" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left side - Main content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                <div
                  className="flex items-center gap-2"
                >
                  <Sparkles className="w-6 h-6 text-green-400" />
                  <span className="text-green-400 font-bold text-sm uppercase tracking-wider">
                    Proven Results
                  </span>
                </div>
                <div className="flex items-center gap-1 text-blue-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-semibold">Live Data</span>
                </div>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
                🚀 Business Transformation 2025
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl">
                Real results from real businesses. See how companies achieve 340% revenue growth with AI and automation.
              </p>
              {/* Rotating metrics showcase */}
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                <div
                  key={currentMetric}
                  className="flex items-center px-4 py-2 rounded-full bg-white/10 text-white"
                >
                  <currentMetricData.icon className="w-5 h-5 mr-2" />
                  <span className="font-semibold">{currentMetricData.value} {currentMetricData.label}</span>
                </div>
                <div className="flex items-center text-green-400">
                  <Users className="w-4 h-4 mr-1" />
                  <span className="text-sm">500+ Companies</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
                <div className="flex items-center text-yellow-400">
                  <Star className="w-4 h-4 mr-1" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center text-blue-400">
                  <Award className="w-4 h-4 mr-1" />
                  <span>Industry Leader</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  <span>Verified Results</span>
                </div>
              </div>
            </div>
            {/* Right side - CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-full hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
              >
                <Building2 className="w-5 h-5 mr-2" />
                View Success Stories
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
              
              <button
                className="flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Calculate ROI
              </button>
            </div>
            {/* Close button */}
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          {/* Metric indicators */}
          <div className="flex justify-center lg:justify-start mt-4 space-x-2">
            {metrics.map((_index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentMetric ? 'bg-green-400 w-8' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
        {/* Floating elements */}
        <div className="absolute top-4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-bounce" />
        <div className="absolute top-8 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping" />
        <div className="absolute bottom-4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
      </div>
    </div>
  );

};


export default BusinessTransformation2025PromotionBanner;
</div></div></div></div></div></div></div></div></div></div>
