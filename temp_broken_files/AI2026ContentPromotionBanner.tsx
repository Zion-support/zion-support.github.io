"use client";
'use client';

import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AI2026ContentPromotionBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentFeaturesetCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 4);
    }3000);
    return () => clearInterval(interval);
  }[]);

  const features = [
    {
      icon: "🧠",
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces for unprecedented control",
      link: "/ai-2026-neural-interface-revolution"
    },
    {
      icon: "⚡",
      title: "Quantum Neural Fusion",
      description: "Quantum-enhanced AI for exponential processing power",
      link: "/ai-2026-quantum-neural-fusion-revolution"
    },
    {
      icon: "🚀",
      title: "Next-Gen Automation",
      description: "Autonomous systems that think and adapt independently",
      link: "/ai-2026-next-generation-business-automation"
    },
    {
      icon: "🔮",
      title: "Future Predictions",
      description: "AI-powered forecasting with 99.9% accuracy",
      link: "/ai-2026-future-predictions-breakthrough"
    }
  ];

  return (
    <div className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-purple-500/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220%200%2060%2060%22 xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-2000"></div>
      <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-pink-400 rounded-full animate-ping delay-3000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI 2026
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              CONTENT REVOLUTION
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            Discover the most advanced AI contentbreakthrough technologies
            and revolutionary solutions that will define the future
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((featureindex) => (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-500 ${
                index === currentFeature ? 'scale-105 z-10' : 'scale-100'
              }`}
              onClick={() => setCurrentFeature(index)}
            >
              <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                index === currentFeature ? 'shadow-2xl shadow-cyan-500/25' : 'shadow-lg'
              }`}>
                <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4">
                  {feature.description}
                </p>
                <a
                  href={feature.link}
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300"
                >
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              🎯 Featured: {features[currentFeature].title}
            </h3>
            <p className="text-xl text-gray-200 mb-6">
              {features[currentFeature].description}
            </p>
            <a
              href={features[currentFeature].link}
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Discover More →
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">15,000%</div>
            <div className="text-white text-lg">ROI Potential</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-white text-lg">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-white text-lg">Autonomous Operation</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="/ai-2026-future-predictions-breakthrough"
            className="inline-block px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold text-xl rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Start Your AI 2026 Journey →
          </a>
        </div>
      </div>
    </div>
  );
};

export default AI2026ContentPromotionBanner;