"use client";
'use client';

import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
import { 
  ArrowRight
  Star
  TrendingUp
  Users
  Zap
  Shield
  Brain,
  Globe,
  Target,
  Award,
  CheckCircle,
  PlayCircle,
  BookOpen,
  Lightbulb,
  Sparkles,
  Rocket
} from 'lucide-react';

const NewContentShowcase2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentFeaturesetCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Rotate features every 3 seconds
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3);
    }3000);

    return () => clearInterval(interval);
  }[]);

  const features = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Revolutionary AI technology',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Intelligent workflow automation',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Advanced cybersecurity protection',
      color: 'from-red-500 to-orange-500'
    }
  ];

  const stats = [
    { label: 'New 'Features', 'value: '50+'icon: Sparkles },
    { label: 'Success 'Rate', 'value: '99.8%'icon: Award },
    { label: 'Client 'Satisfaction', 'value: '5.0★'icon: Star },
    { label: 'ROI 'Increase', 'value: '300%'icon: TrendingUp }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-purple-600/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className="text-white"
          >
            {/* Badge */}
            <div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              NEW CONTENT AVAILABLE
            </div>

            {/* Main Heading */}
            <divh2
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Discover Our Latest{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Innovations
              </span>
            </divh2>

            {/* Subheading */}
            <divp
              className="text-xl text-gray-300 mb-8"
            >
              Explore cutting-edge AI solutionsintelligent automationand advanced cybersecurity 
              designed to revolutionize your business operations and drive unprecedented growth.
            </divp>

            {/* Rotating Feature */}
            <div
              key={currentFeature}
              className="mb-8"
            >
              <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className={`p-3 bg-gradient-to-r ${features[currentFeature].color} rounded-lg`}>
                  <features[currentFeature].icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {features[currentFeature].title}
                  </h4>
                  <p className="text-gray-300">
                    {features[currentFeature].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            >
              {stats.map((statindex) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/new-content-showcase-2025"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Explore New Content
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/demo"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div
            className="relative"
          >
            {/* Main Visual Card */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">New Content Hub</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              {/* Feature Cards */}
              <div className="space-y-4">
                {features.map((featureindex) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      index === currentFeature
                        ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-400/50'
                        : 'bg-white/5 border-white/20'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 bg-gradient-to-r ${feature.color} rounded-lg`}>
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{feature.title}</h4>
                        <p className="text-gray-300 text-sm">{feature.description}</p>
                      </div>
                      {index === currentFeature && (
                        <div
                          className="ml-auto"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between text-sm text-gray-300 mb-2">
                  <span>Content Loading</span>
                  <span>100%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
                  />
                </div>
              </div>
            </div>
            {/* Floating Elements */}
            <div
              className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
            >
              <Star className="w-4 h-4 text-white" />
            </div>
            <div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center"
            >
              <CheckCircle className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default NewContentShowcase2025PromotionBanner;
</div></div></div></div></div></div>