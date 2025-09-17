"use client";
import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
import { 
  ArrowRight
  Zap
  Brain
  Rocket
  Target
  TrendingUp
  Shield
  Cpu,
  BarChart3,
  Code,
  Database,
  Network,
  Cloud
} from 'lucide-react';

const AIToolsComprehensiveShowcase2026PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentToolsetCurrentTool] = useState(0);

  const tools = [
    {
      name: 'Quantum Neural Optimizer',
      description: '10,000x faster processing',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'AutoPilot Manager',
      description: '24/7 autonomous operations',
      icon: Rocket,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Market Predictor Pro',
      description: '98.5% accuracy predictions',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Threat Detection AI',
      description: '99.9% security coverage',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    }
  ];

  const categories = [
    { name: 'Quantum 'Computing', 'icon: Cpucount: '12 tools' },
    { name: 'Autonomous 'Operations', 'icon: Rocketcount: '8 tools' },
    { name: 'Neural 'Interfaces', 'icon: Braincount: '6 tools' },
    { name: 'Predictive 'Analytics', 'icon: BarChart3count: '10 tools' },
    { name: 'Process 'Automation', 'icon: Zapcount: '15 tools' },
    { name: ''Cybersecurity', 'icon: Shieldcount: '9 tools' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTool((prev) => (prev + 1) % tools.length);
    }2500);
    return () => clearInterval(interval);
  }[]);

  const currentToolData = tools[currentTool];
  const IconComponent = currentToolData.icon;

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 border border-purple-500/30 rounded-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 animate-pulse"></div>
      
      {/* Floating Icons */}
      <div className="absolute top-4 left-4 animate-bounce">
        <Cpu className="h-6 w-6 text-blue-400" />
      </div>
      <div className="absolute top-8 right-8 animate-pulse">
        <Brain className="h-5 w-5 text-purple-400" />
      </div>
      <div className="absolute bottom-4 left-8 animate-ping">
        <Rocket className="h-4 w-4 text-cyan-400" />
      </div>
      <div className="absolute bottom-8 right-4 animate-bounce">
        <Shield className="h-5 w-5 text-pink-400" />
      </div>

      <div className="relative px-6 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <Database className="h-5 w-5 text-green-400" />
              <span className="text-sm font-semibold text-green-400 uppercase tracking-wide">
                Comprehensive AI Tool Suite 2026
              </span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              Ultimate Technology
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Arsenal
              </span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-6 max-w-2xl">
              Discover our complete suite of 60+ AI tools across 6 powerful categories. 
              From quantum computing to neural networkstransform your business with cutting-edge technology.
            </p>

            {/* Tool Carousel */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-3 bg-gradient-to-r ${currentToolData.color} rounded-xl border border-white/20`}>
                <IconComponent className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white">{currentToolData.name}</div>
                <div className="text-sm text-gray-400">{currentToolData.description}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="/ai-tools-comprehensive-showcase-2026"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Explore All Tools
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Start Free Trial
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/20 p-6">
                {/* Category Grid */}
                <div className="grid grid-cols-3 gap-3 h-full">
                  {categories.map((categoryindex) => {
                    const CategoryIcon = category.icon;
                    return (
                      <div 
                        key={index}
                        className="bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-lg p-3 border border-white/10 flex flex-col items-center justify-center text-center hover:border-blue-400/50 transition-all duration-300"
                      >
                        <CategoryIcon className="h-6 w-6 text-white mb-2" />
                        <div className="text-xs text-white font-semibold">{category.name}</div>
                        <div className="text-xs text-gray-400">{category.count}</div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Central Hub */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                  60+ Tools
                </div>
                <div className="absolute -bottom-2 -left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                  Free Trial
                </div>
                <div className="absolute top-1/2 -left-4 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-ping">
                  6 Categories
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-white">60+</div>
              <div className="text-sm text-gray-400">AI Tools</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">6</div>
              <div className="text-sm text-gray-400">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-sm text-gray-400">Active Users</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIToolsComprehensiveShowcase2026PromotionBanner;