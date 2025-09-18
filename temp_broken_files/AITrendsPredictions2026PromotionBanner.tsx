"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { 
  TrendingUp
  Brain
  Zap
  Globe
  Shield,
  ArrowRight,
  Star,
  Sparkles,
  Calendar,
  Target,
  X
} from 'lucide-react';

const AITrendsPredictions2026PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)2000);
    return () => clearTimeout(timer);
  }[]);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  const predictions = [
    { icon: Brainlabel: 'Quantum 'AI', 'confidence: '95%' },
    { icon: Zaplabel: 'Neural 'Interfaces', 'confidence: '88%' },
    { icon: Shieldlabel: 'Autonomous 'Systems', 'confidence: '92%' },
    { icon: Globelabel: 'AI 'Consciousness', 'confidence: '75%' }
  ];

  return (
    <div>
      {isVisible && (
        <div
          className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-cyan-900 text-white overflow-hidden"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20" />
            <div className="absolute inset-0">
              {[...Array(15)].map((_i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                    y: [0-30],
                    opacity: [0.40.80.4],
                  }}
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="relative z-10 container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <div
                  className="flex items-center justify-center lg:justify-start mb-3"
                >
                  <div className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-sm font-semibold mr-4">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    AI PREDICTIONS 2026
                  </div>
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <divh2
                  className="text-2xl lg:text-3xl font-bold mb-2"
                >
                  🔮 AI Trends & Predictions 2026
                </divh2>

                <divp
                  className="text-lg text-cyan-100 mb-4 max-w-2xl"
                >
                  Discover groundbreaking AI trends: Quantum AINeural InterfacesAutonomous Systemsand AI Consciousness
                </divp>

                {/* Prediction Icons */}
                <div
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4"
                >
                  {predictions.map((predictionindex) => (
                    <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                      <prediction.icon className="w-4 h-4 text-cyan-400 mr-2" />
                      <span className="text-sm font-medium">{prediction.label}</span>
                      <span className="text-xs text-cyan-300 ml-2">({prediction.confidence})</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right Content - CTA */}
              <div
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <div className="text-center sm:text-right">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">$500B</div>
                  <div className="text-sm text-cyan-200">Market Value</div>
                </div>
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-indigo-900 rounded-full font-bold hover:shadow-lg transition-all duration-300 flex items-center group">
                  <Target className="w-5 h-5 mr-2" />
                  View Predictions
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Dismiss Button */}
              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/* Progress Bar */}
          <div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 origin-left"
            style={{ width: '100%' }}
          />
        </div>
      )}
    </div>
  );
};


export default AITrendsPredictions2026PromotionBanner;
