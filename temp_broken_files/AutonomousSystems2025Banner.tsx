"use client";
'use client';

import React, { useState, useEffect } from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AutonomousSystems2025Banner = () => {
  const [systemStatus, setSystemStatus] = useState('initializing');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const statuses = ['initializing', 'optimizing', 'learning', 'autonomous'];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % statuses.length;
      setSystemStatus(statuses[currentIndex]);
      setProgress((currentIndex + 1) * 25);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white py-20 overflow-hidden">
      {/* Autonomous system visualization */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-orange-400 rounded-full ${
                systemStatus === 'autonomous' ? 'animate-pulse' : 'opacity-30'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1.5s'
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full px-6 py-2 mb-6 backdrop-blur-sm border border-orange-400/30">
            <span className="text-sm font-medium">🤖 AUTONOMOUS SYSTEMS REVOLUTION 2025</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            Fully Autonomous AI Systems
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the future of automation with self-managing AI systems that operate independently, learn continuously, and adapt to any environment.
          </p>
          
          {/* System Status Display */}
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-xl backdrop-blur-sm border border-orange-400/20 mb-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">System Status: <span className="text-orange-400 capitalize">{systemStatus}</span></h3>
            <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
              <div 
                className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-1000"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm opacity-90">{progress}% Operational</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-8 rounded-xl backdrop-blur-sm border border-orange-400/30 hover:border-orange-400/60 transition-all duration-300">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-3">Self-Learning AI</h3>
              <p className="text-sm opacity-90 mb-4">Continuously evolving intelligence</p>
              <ul className="text-xs space-y-1">
                <li>• Adaptive algorithms</li>
                <li>• Real-time learning</li>
                <li>• Zero human intervention</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 p-8 rounded-xl backdrop-blur-sm border border-red-400/30 hover:border-red-400/60 transition-all duration-300">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Instant Decision Making</h3>
              <p className="text-sm opacity-90 mb-4">Lightning-fast autonomous responses</p>
              <ul className="text-xs space-y-1">
                <li>• < 1ms response time</li>
                <li>• Multi-variable analysis</li>
                <li>• Risk assessment</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-8 rounded-xl backdrop-blur-sm border border-pink-400/30 hover:border-pink-400/60 transition-all duration-300">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-3">Global Integration</h3>
              <p className="text-sm opacity-90 mb-4">Seamless system coordination</p>
              <ul className="text-xs space-y-1">
                <li>• Cross-platform sync</li>
                <li>• Distributed processing</li>
                <li>• Fault tolerance</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-8 rounded-2xl backdrop-blur-sm border border-orange-400/20 mb-8">
            <h3 className="text-2xl font-bold mb-6">Autonomous Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-400 mb-2">Smart Manufacturing</h4>
                <p className="text-xs opacity-90">Self-optimizing production lines with predictive maintenance</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold text-red-400 mb-2">Autonomous Vehicles</h4>
                <p className="text-xs opacity-90">Self-driving systems with real-time traffic optimization</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold text-pink-400 mb-2">Smart Cities</h4>
                <p className="text-xs opacity-90">Intelligent infrastructure management and resource allocation</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-400 mb-2">Financial Trading</h4>
                <p className="text-xs opacity-90">Algorithmic trading with market prediction and risk management</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/autonomous-systems-2025"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Autonomous AI
            </a>
            <a
              href="/autonomous-demo"
              className="border-2 border-orange-400 text-orange-400 px-10 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-gray-900 transition-all duration-300"
            >
              Try Autonomous Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutonomousSystems2025Banner;