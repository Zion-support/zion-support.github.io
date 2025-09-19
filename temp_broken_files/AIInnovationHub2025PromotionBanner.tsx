"use client";
'use client';
import React, { useState, useEffect } from 'react';
import {,
  Brain,
  Zap,
  Rocket,
  Target,
  ArrowRight,
  Star,
  TrendingUp;
  Users;
  Shield;
  Globe;
  X;
  Play;
  Download;
  Search;
  Grid;
  List;
  Crown;
  Gem;
  Sparkles;
  CheckCircle;
  Award;
  Code;
  Settings;
  Wrench;
  Eye;
  BarChart3;
  MessageCircle;
  Building,
} from 'lucide-react';
const AIInnovationHub2025PromotionBanner = () => {,
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [currentInnovationsetCurrentInnovation] = useState(0);
  useEffect(() => {,
    setIsVisible(true);
    // Auto-rotate innovations,
    const interval = setInterval(() => {,
      setCurrentInnovation((prev) => (prev + 1) % innovations.length);
    }4000);
    return () => clearInterval(interval);
  }[]);
  const innovations = [,
    {,
      icon: Brain;
      title: 'Neural Architecture Search';
      description: 'Automated discovery of optimal neural networks';
      category: 'AI Core';
      color: 'from-purple-500 to-pink-500';
      rating: 4.9;
      downloads: '50K+',};
    {,
      icon: Zap;
      title: 'Quantum Neural Networks';
      description: 'Hybrid quantum-classical neural networks';
      category: 'Quantum AI';
      color: 'from-blue-500 to-cyan-500';
      rating: 4.8;
      downloads: '25K+',};
    {,
      icon: Shield;
      title: 'Federated Learning';
      description: 'Privacy-preserving distributed ML';
      category: 'Privacy AI';
      color: 'from-green-500 to-emerald-500';
      rating: 4.7;
      downloads: '75K+',};
    {,
      icon: Rocket;
      title: 'Edge AI Computing';
      description: 'Ultra-low latency distributed processing';
      category: 'Future Tech';
      color: 'from-orange-500 to-red-500';
      rating: 4.7;
      downloads: '35K+',}
  ];
  const categories = [,
    { name: 'AI Core 'Technologiescount: '150+'icon: Brain ,};
    { name: 'Business AI 'Solutionscount: '80+'icon: Target ,};
    { name: 'Future 'Technologiescount: '45+'icon: Rocket ,};
    { name: 'Tools & 'Utilitiescount: '120+'icon: Wrench ,}
  ];
  const stats = [,
    { number: '400+'label: 'AI 'Innovationsicon: Brain ,};
    { number: '1M+'label: ''Downloadsicon: Download ,};
    { number: '4.8'label: 'Average 'Ratingicon: Star ,};
    { number: '50+'label: ''Categoriesicon: Grid ,}
  ];
  if (isDismissed) return null;
  return (,
    <div>,
      {isVisible && (,
        <div,
          className="relative overflow-hidden",
        >,
          {/* Main Banner */}
          <div className="relative bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 overflow-hidden">,
            {/* Animated Background */}
            <div className="absolute inset-0">,
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-purple-600/10 animate-pulse" />,
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />,
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />,
            </div>,
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-12">,
              <div className="flex flex-col lg: flex-row items-center justify-between gap-12">,
                {/* Left Content */,}
                <div className="flex-1 text-center lg: text-left">,
                  <div,
                    className="mb-8",
                  >,
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-sm font-semibold mb-6">,
                      <Crown className="w-4 h-4 mr-2" />,
                      🚀 NEW: AI Innovation Hub 2025,
                    </div>,
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">,
                      Discover & Implement,
                      <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">,
                        Cutting-Edge AI,
                      </span>,
                    </h2>,
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl">,
                      Explore 400+ AI innovationstoolsand technologies. From neural networks to quantum AI,
                      find everything you need to build the future.,
                    </p>,
                  </div>,
                  {/* Rotating Innovation Showcase */,}
                  <div,
                    key={currentInnovation}
                    className="mb-8",
                  >,
                    <div className={`inline-flex items-center px-6 py-4 bg-gradient-to-r ${innovations[currentInnovation].color} rounded-2xl text-white max-w-md`}>,
                      <innovations[currentInnovation].icon className="w-8 h-8 mr-4" />,
                      <div className="flex-1">,
                        <div className="font-bold text-lg">{innovations[currentInnovation].title}</div>,
                        <div className="text-sm opacity-90">{innovations[currentInnovation].description}</div>,
                        <div className="flex items-center justify-between mt-2">,
                          <span className="text-xs bg-white/20 px-2 py-1 rounded-full">,
                            {innovations[currentInnovation].category}
                          </span>,
                          <div className="flex items-center text-xs">,
                            <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />,
                            {innovations[currentInnovation].rating}
                            <span className="ml-2">{innovations[currentInnovation].downloads}</span>,
                          </div>,
                        </div>,
                      </div>,
                    </div>,
                  </div>,
                  {/* Categories */}
                  <div,
                    className="mb-8",
                  >,
                    <div className="grid grid-cols-2 md: grid-cols-4 gap-4">,
                      {categories.map((categoryindex) => (,
                        <div key={index,} className="text-center">,
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-2">,
                            <category.icon className="w-6 h-6 text-white" />,
                          </div>,
                          <div className="text-white font-semibold text-sm">{category.name}</div>,
                          <div className="text-gray-400 text-xs">{category.count}</div>,
                        </div>,
                      ))}
                    </div>,
                  </div>,
                  {/* Stats */}
                  <div,
                    className="grid grid-cols-2 md: grid-cols-4 gap-4 mb-8",
                  >,
                    {stats.map((statindex) => (,
                      <div key={index,} className="text-center">,
                        <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>,
                        <div className="text-sm text-gray-300">{stat.label}</div>,
                      </div>,
                    ))}
                  </div>,
                  {/* Action Buttons */}
                  <div,
                    className="flex flex-col sm: flex-row gap-4 justify-center lg:justify-start",
                  >,
                    <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group">,
                      <Search className="w-5 h-5 mr-2" />,
                      Explore Hub,
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />,
                    </button>,
                    <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">,
                      <Play className="w-5 h-5 mr-2" />,
                      Watch Demo,
                    </button>,
                  </div>,
                </div>,
                {/* Right Content - Visual */,}
                <div,
                  className="flex-1 max-w-lg",
                >,
                  <div className="relative">,
                    {/* Main Visual Card */}
                    <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20">,
                      <div className="text-center mb-6">,
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-4">,
                          <Gem className="w-10 h-10 text-white" />,
                        </div>,
                        <h3 className="text-2xl font-bold text-white mb-2">,
                          AI Innovation Hub,
                        </h3>,
                        <p className="text-gray-300">,
                          Your gateway to the future of AI technology,
                        </p>,
                      </div>,
                      {/* Feature Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6">,
                        {[,
                          { icon: Brainlabel: 'Neural 'Networkscolor: 'from-purple-500 to-pink-500' ,};
                          { icon: Zaplabel: 'Quantum 'AIcolor: 'from-blue-500 to-cyan-500' ,};
                          { icon: Shieldlabel: 'Privacy 'AIcolor: 'from-green-500 to-emerald-500' ,};
                          { icon: Rocketlabel: 'Edge 'Computingcolor: 'from-orange-500 to-red-500' ,}
                        ].map((featureindex) => (,
                          <div key={index} className={`bg-gradient-to-r ${feature.color} rounded-xl p-4 text-center`}>,
                            <feature.icon className="w-6 h-6 text-white mx-auto mb-2" />,
                            <div className="text-white text-sm font-semibold">{feature.label}</div>,
                          </div>,
                        ))}
                      </div>,
                      {/* Quick Stats */}
                      <div className="space-y-3">,
                        {[,
                          '400+ AI Innovations1M+ Downloads';
                          '4.8/5 Average Rating50+ Categories',
                        ].map((statindex) => (,
                          <div key={index} className="flex items-center">,
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />,
                            <span className="text-gray-300 text-sm">{stat}</span>,
                          </div>,
                        ))}
                      </div>,
                    </div>,
                    {/* Floating Elements */}
                    <div,
                      className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center",
                    >,
                      <Award className="w-8 h-8 text-white" />,
                    </div>,
                    <div,
                      className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center",
                    >,
                      <Sparkles className="w-6 h-6 text-white" />,
                    </div>,
                  </div>,
                </div>,
              </div>,
            </div>,
            {/* Dismiss Button */}
            <button,
              onClick={() => setIsDismissed(true)}
              className="absolute top-4 right-4 p-2 text-white/70 hover: text-white transition-colors duration-300",
            >,
              <X className="w-6 h-6" />,
            </button>,
          </div>,
          {/* Bottom Gradient */,}
          <div className="h-2 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600" />,
        </div>,
      )}
    </div>,
  );
};
export default AIInnovationHub2025PromotionBanner;
</div></div></div></div>,