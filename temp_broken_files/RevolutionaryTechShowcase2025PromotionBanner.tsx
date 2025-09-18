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
  Award,
  Rocket
} from 'lucide-react';

const RevolutionaryTechShowcase2025PromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentFeaturesetCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Rotate features every 3 seconds
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }3000);

    return () => clearInterval(interval);
  }[]);

  const features = [
    'AI Revolution 2025',
    'Quantum Computing',
    'Blockchain Innovation',
    'IoT & Edge Computing'
  ];

  const stats = [
    { label: ''Technologies', 'value: '50+' },
    { label: 'Success 'Rate', 'value: '99%' },
    { label: 'Client 'Satisfaction', 'value: '5.0' },
    { label: 'ROI 'Improvement', 'value: '300%' }
  ];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10"></div>
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
          >
            {/* Badge */}
            <div
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6"
            >
              <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-300 font-medium">Revolutionary Technology 2025</span>
            </div>

            {/* Main Heading */}
            <divh1
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Experience the
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Future of Technology
              </span>
            </divh1>

            {/* Subheading */}
            <divp
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Discover cutting-edge AIquantum computingblockchainand IoT solutions that are transforming industries and creating unprecedented opportunities for growth.
            </divp>

            {/* Rotating Features */}
            <div
              className="mb-8"
            >
              <div className="flex items-center text-lg text-gray-300">
                <span className="mr-3">Featured:</span>
                  <divspan
                    key={currentFeature}
                    className="text-purple-400 font-semibold"
                  >
                    {features[currentFeature]}
                  </divspan>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center group">
                Explore Technology
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 border border-white/20 transition-all duration-300 flex items-center justify-center">
                <Star className="w-5 h-5 mr-2" />
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Stats & Visual */}
          <div
            className="relative"
          >
            {/* Main Visual */}
            <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-500/30 backdrop-blur-lg">
              {/* Central Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((statindex) => (
                  <div
                    key={stat.label}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-400/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-400/30 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-6 w-6 h-6 bg-blue-400/30 rounded-full animate-pulse delay-500"></div>
            </div>
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl -z-10"></div>
          </div>
        </div>
        {/* Bottom Stats Bar */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { icon: TrendingUplabel: ''Performance', 'value: '10x Faster' },
            { icon: Awardlabel: ''Awards', 'value: '25+ Won' },
            { icon: Rocketlabel: ''Deployments', 'value: '1000+' },
            { icon: Starlabel: ''Rating', 'value: '5.0/5.0' }
          ].map((itemindex) => (
            <div
              key={item.label}
              className="text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
              <div className="text-sm text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default RevolutionaryTechShowcase2025PromotionBanner;
</div></div>