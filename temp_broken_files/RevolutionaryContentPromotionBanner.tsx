<<<<<<< HEAD:temp_broken_files/RevolutionaryContentPromotionBanner.tsx
"use client";
import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
};



export default function RevolutionaryContentPromotionBanner() {
  const [isVisiblesetIsVisible] = useState(true);
  const [currentPromotionsetCurrentPromotion] = useState(0);
  const promotions = [
    {
      title: "🚀 AI 2025 Revolutionary Breakthrough Ultimate",
      subtitle: "10,000% ROI Guaranteed - Fortune 500 Success",
      link: "/ai-2025-revolutionary-breakthrough-ultimate",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-600/20 to-pink-600/20",
      borderColor: "border-red-500/30"
    },
    {
      title: "⚛️ Quantum Computing 2025 Ultimate Breakthrough",
      subtitle: "25,000% ROI Quantum Supremacy Achieved",
      link: "/quantum-computing-2025-ultimate-breakthrough",
      color: "from-cyan-500 to-purple-500",
      bgColor: "from-cyan-600/20 to-purple-600/20",
      borderColor: "border-cyan-500/30"
    },
    {
      title: "🔮 AI 2026-2030 Ultimate Future Predictions",
      subtitle: "Exclusive Revolutionary Forecast - 95% Accuracy",
      link: "/ai-2026-2030-ultimate-future-predictions",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-600/20 to-indigo-600/20",
      borderColor: "border-purple-500/30"
    }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromotion((prev) => (prev + 1) % promotions.length);
    }5000);
    return () => clearInterval(interval);
  }[]);
  if (!isVisible) return null;
  const current = promotions[currentPromotion];
  return (
    <div className={`relative overflow-hidden bg-gradient-to-r ${current.bgColor} border-b ${current.borderColor} backdrop-blur-sm`}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${current.color} animate-pulse`}></div>
              <div className="flex-1">
                <h3 className={`text-lg font-bold bg-gradient-to-r ${current.color} bg-clip-text text-transparent`}>
                  {current.title}
                <p className="text-sm text-gray-300 mt-1">
                  {current.subtitle}
          <div className="flex items-center space-x-4">
            <a
              href={current.link}
              className={`bg-gradient-to-r ${current.color} text-white px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}
            >
              Discover Now
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Close banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
        <div 
          className={`h-full bg-gradient-to-r ${current.color} transition-all duration-5000 ease-linear`}
          style={{
            width: '100%',
            animation: 'progress 5s linear infinite'
          }}
        ></div>
      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
  );



export default RevolutionaryContentPromotionBanner;
=======
import React from "react";

const function RevolutionaryContentPromotionBanner() { = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">function RevolutionaryContentPromotionBanner() {</h1>
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default function RevolutionaryContentPromotionBanner() {;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d67d:src/components/RevolutionaryContentPromotionBanner.tsx
