"use client";
'use client';

import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const UltimateTechShowcase2025Banner = () => {
  const [currentTech, setCurrentTech] = useState(0);
  
  const technologies = [
    { name: 'AI & Machine Learning', icon: '🧠', color: 'from-purple-500 to-indigo-500' },
    { name: 'Quantum Computing', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
    { name: 'Neural Interfaces', icon: '🔗', color: 'from-emerald-500 to-teal-500' },
    { name: 'Autonomous Systems', icon: '🤖', color: 'from-orange-500 to-red-500' },
    { name: 'Blockchain & Web3', icon: '⛓️', color: 'from-yellow-500 to-orange-500' },
    { name: 'Augmented Reality', icon: '🥽', color: 'from-pink-500 to-purple-500' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white py-20 overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-r ${technologies[currentTech].color} opacity-10 transition-all duration-1000`}></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-purple-400/30">
            <span className="text-sm font-medium">🌟 ULTIMATE TECH SHOWCASE 2025</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
            The Future is Here
          </h2>
          
          <div className="mb-8">
            <div className={`inline-flex items-center bg-gradient-to-r ${technologies[currentTech].color} rounded-full px-8 py-4 mb-4 transition-all duration-500`}>
              <span className="text-3xl mr-3">{technologies[currentTech].icon}</span>
              <span className="text-xl font-semibold">{technologies[currentTech].name}</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience cutting-edge technologies that are revolutionizing industries and creating new possibilities for human advancement.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                  index === currentTech
                    ? `bg-gradient-to-br ${tech.color} transform scale-110 shadow-lg`
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
                onClick={() => setCurrentTech(index)}
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <p className="text-xs font-medium text-center">{tech.name}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 mb-8">
            <h3 className="text-2xl font-bold mb-6">Revolutionary Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-400 mb-2">Industry Transformation</h4>
                <p className="text-sm opacity-90">Complete overhaul of traditional business models</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-400 mb-2">Exponential Growth</h4>
                <p className="text-sm opacity-90">Unprecedented opportunities for innovation</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">Global Impact</h4>
                <p className="text-sm opacity-90">Transforming societies and improving lives</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/ultimate-tech-2025"
              className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-10 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore All Technologies
            </a>
            <a
              href="/tech-demo"
              className="border-2 border-purple-400 text-purple-400 px-10 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Try Interactive Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateTechShowcase2025Banner;