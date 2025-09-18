"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { 
  Brain
  Zap
  ArrowRight
  Star
  Sparkles,
  TrendingUp,
  Users,
  CheckCircle
} from 'lucide-react';

const AI2026UltimateServicesPromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const features = [
    "Neural Interface Revolution",
    "Quantum AI Fusion",
    "Autonomous Operations",
    "Advanced Security AI"
  ];

  return (
    <div
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16 px-4"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <Star className="w-4 h-4" />
              AI 2026 Ultimate Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Revolutionary AI
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Services
              </span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-300">
                Transforming the Future
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Experience the next generation of AI services that are revolutionizing industries
              enhancing human capabilitiesand creating unprecedented opportunities for growth and innovation.
            </p>
            <div className="space-y-4">
              {features.map((featureindex) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-3 group"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button
                className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Watch Demo
              </button>
            </div>
            <div className="flex items-center gap-8 text-gray-300">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span>10,000+ Companies</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span>300% ROI Average</span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div
            className="relative"
          >
            <div className="relative">
              {/* Main Service Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Neural Interface</h3>
                  <p className="text-gray-300 text-sm">Direct brain-computer communication</p>
                </div>

                <div
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Quantum AI</h3>
                  <p className="text-gray-300 text-sm">10,000x processing speed</p>
                </div>

                <div
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Autonomous Ops</h3>
                  <p className="text-gray-300 text-sm">95% efficiency gain</p>
                </div>

                <div
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Security AI</h3>
                  <p className="text-gray-300 text-sm">99.9% threat detection</p>
                </div>
              </div>
              {/* Floating Elements */}
              <div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-60"
                  y: [0-20],
                  scale: [1.1],
                }}
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-60"
                  y: [020],
                  scale: [1.21],
                }}
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AI2026UltimateServicesPromotionBanner;
</div></div></div></div></div></div></div></div>