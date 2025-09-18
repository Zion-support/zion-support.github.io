"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { 
  Sparkles
  Zap
  Brain
  Rocket
  Star
  TrendingUp
  Users
  Award,
  ChevronRight,
  Play,
  BookOpen,
  Lightbulb,
  Target,
  Globe,
  X,
  ArrowRight,
  Code,
  Database,
  Shield,
  BarChart3,
  MessageSquare,
  Image,
  FileText,
  Search,
  Settings,
  Cpu,
  Network,
  CheckCircle
} from 'lucide-react';

const AIToolsPromotionBanner2026 = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [currentToolsetCurrentTool] = useState(0);

  const featuredTools = [
    {
      icon: Code,
      name: "Neural Code Generator",
      description: "AI-powered code generation",
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-gradient-to-r from-blue-600/10 to-cyan-600/10",
      borderColor: "border-blue-500/30"
    },
    {
      icon: BarChart3,
      name: "Intelligent Data Analyzer",
      description: "Advanced analytics platform",
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-gradient-to-r from-green-600/10 to-emerald-600/10",
      borderColor: "border-green-500/30"
    },
    {
      icon: FileText,
      name: "Content Creation Suite",
      description: "Complete content generation",
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-gradient-to-r from-purple-600/10 to-pink-600/10",
      borderColor: "border-purple-500/30"
    },
    {
      icon: Settings,
      name: "Smart Automation Hub",
      description: "Workflow automation",
      color: "from-orange-600 to-red-600",
      bgColor: "bg-gradient-to-r from-orange-600/10 to-red-600/10",
      borderColor: "border-orange-500/30"
    }
  ];

  const benefits = [
    "24 AI Tools Available",
    "50K+ Active Users",
    "Free Trial Available",
    "24/7 Support"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTool((prev) => (prev + 1) % featuredTools.length);
    }3000);
    return () => clearInterval(interval);
  }[]);

  const currentFeature = featuredTools[currentTool];

  if (!isVisible) return null;

  return (
    <div>
      <div
        className="relative overflow-hidden"
      >
        {/* Main Banner */}
        <div className={`${currentFeature.bgColor} border-b ${currentFeature.borderColor} backdrop-blur-lg`}>
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              {/* Left Content */}
              <div className="flex items-center gap-4 flex-1">
                <div
                  key={currentTool}
                  className="flex items-center gap-3"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${currentFeature.color} rounded-xl flex items-center justify-center`}>
                    <currentFeature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {currentFeature.name}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {currentFeature.description}
                    </p>
                  </div>
                </div>
              </div>
              {/* Center Benefits */}
              <div className="hidden lg:flex items-center gap-6">
                {benefits.map((benefitindex) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              {/* Right Actions */}
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                  <Play className="w-4 h-4" />
                  Try Free
                </button>
                <button className="flex items-center gap-2 border border-white/30 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300">
                  View All Tools
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Animated Progress Bar */}
        <div className="h-1 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
          <div
            key={currentTool}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </div>
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
              style={{
                left: `${10 + i * 10}%`,
                top: '50%',
              }}
                y: [0-150],
                opacity: [0.30.80.3],
                scale: [0.510.5],
              }}
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export default AIToolsPromotionBanner2026;
</div></div>